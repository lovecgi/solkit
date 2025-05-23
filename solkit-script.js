/*window.addEventListener('load', () => {
    const allElements = document.getElementsByTagName('*');
    Array.prototype.forEach.call(allElements, (el) => {
        const includePath = el.dataset.includePath;
        if (includePath) {
            fetch(includePath)
                .then(response => {
                    if (response.ok) {
                        // Content-Length 헤더를 통해 데이터 크기 확인
                        const contentLength = response.headers.get('Content-Length');
                        console.log(`데이터 크기: ${contentLength} bytes`);
                        return response.text();
                    } else {
                        console.log('응답이 실패했습니다');
                        return null;
                    }
                })
                .then(data => {
                    if (data) {
                        // 실제 데이터 길이 확인
                        console.log(`실제 데이터 길이: ${data.length} 문자`);
                        el.outerHTML = data;
                    }
                })
                .catch(error => {
                    console.error('데이터 가져오기 실패:', error);
                });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // 페이지 로드 시 실행될 코드
    console.log('페이지가 로드되었습니다.');
    
    // 슬라이더 요소들이 존재하는지 확인
    const sliderTrack = document.querySelector('.slider-track');
    if (sliderTrack) {
        const slides = sliderTrack.querySelectorAll('.slide');
        if (slides && slides.length > 0) {
            // 처음 10개 슬라이드만 복제 (또는 전체 슬라이드 수가 10개 미만인 경우 전체)
            const cloneCount = Math.min(10, slides.length);
            for(let i = 0; i < cloneCount; i++) {
                const clone = slides[i].cloneNode(true);
                sliderTrack.appendChild(clone);
            }
            
            // 마우스 호버 시 애니메이션 일시 정지
            sliderTrack.addEventListener('mouseenter', () => {
                sliderTrack.style.animationPlayState = 'paused';
            });
            
            sliderTrack.addEventListener('mouseleave', () => {
                sliderTrack.style.animationPlayState = 'running';
            });
        }
    }
});*/

// 여기에 추가적인 기능이 들어갈 예정입니다
document.addEventListener('DOMContentLoaded', function() {
    // 인클루드 패스가 있는 요소 처리
    const allElements = document.getElementsByTagName('*');
    const includePromises = [];
    
    Array.prototype.forEach.call(allElements, (el) => {
        const includePath = el.dataset.includePath;
        if (includePath) {
            const promise = fetch(includePath)
                .then(response => {
                    if (response.ok) {
                        return response.text();
                    } else {
                        console.error('Failed to load: ' + includePath);
                        return null;
                    }
                })
                .then(data => {
                    if (data) {
                        el.innerHTML = data;
                        // 헤더에 로드된 메뉴 항목에 이벤트 리스너 추가
                        if (el.tagName.toLowerCase() === 'header') {
                            setTimeout(setupNavigation, 100);
                        }
                    }
                })
                .catch(error => {
                    console.error('Error loading ' + includePath + ':', error);
                });
            
            includePromises.push(promise);
        }
    });
    
    // 모든 인클루드가 완료된 후 추가 작업 실행
    Promise.all(includePromises).then(() => {
        console.log('모든 콘텐츠가 로드되었습니다.');
        
        // 파트너 슬라이더 설정
        setupPartnerSlider();
    });
    
    // 페이지 로드 시 실행될 코드
    console.log('페이지가 로드되었습니다.');
});

// 네비게이션 설정 함수
function setupNavigation() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link, .dropdown-menu .dropdown-item');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetPage = this.getAttribute('data-page');
            const targetSection = this.getAttribute('href');
            
            if (targetPage) {
                loadContent(targetPage);
                
                // 활성화된 링크 스타일 변경
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                this.classList.add('active');
                
                // 섹션 ID가 있는 경우 해당 섹션으로 스크롤
               /*if (targetSection && targetSection.startsWith('#')) {
                    setTimeout(() => {
                        const section = document.querySelector(targetSection);
                        if (section) {
                            section.scrollIntoView({ behavior: 'smooth' });
                        }
                    }, 500);
                }*/
                window.scrollTo({
                    top: 0,
                    behavior: 'instant'
                });
                
                // 모바일에서 메뉴 닫기
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    document.querySelector('.navbar-toggler').click();
                }
            }
        });
    });
}

// 파트너 슬라이더 설정 함수
function setupPartnerSlider() {
    const sliderTrack = document.querySelector('.slider-track');
    if (!sliderTrack) return;
    
    const slides = document.querySelectorAll('.slide');
    if (slides.length === 0) return;
    
    // 이미 클론이 있는지 확인
    const existingClones = sliderTrack.querySelectorAll('.slide-clone');
    if (existingClones.length > 0) return;
    
    // 처음 10개 슬라이드만 복제 (또는 가능한 만큼)
    for(let i = 0; i < Math.min(25, slides.length); i++) {
        const clone = slides[i].cloneNode(true);
        clone.classList.add('slide-clone');
        sliderTrack.appendChild(clone);
    }
    
    // 마우스 호버 시 애니메이션 일시 정지
    sliderTrack.addEventListener('mouseenter', () => {
        sliderTrack.style.animationPlayState = 'paused';
    });
    
    sliderTrack.addEventListener('mouseleave', () => {
        sliderTrack.style.animationPlayState = 'running';
    });
}

// 콘텐츠 로드 함수 (메인 스크립트에 있을 경우 주석 처리)
/*function loadContent(pagePath) {
    if (typeof window.loadContent === 'function') {
        // 메인 HTML에 이미 정의된 loadContent 함수 사용
        window.loadContent(pagePath);
    } else {
        const mainContent = document.getElementById('main-content');
        if (!mainContent) return;
        
        fetch(pagePath)
            .then(response => {
                if (response.ok) {
                    return response.text();
                } else {
                    throw new Error('페이지를 불러오는데 실패했습니다: ' + pagePath);
                }
            })
            .then(data => {
                mainContent.innerHTML = data;
                // 로드 후 파트너 슬라이더 설정
                setupPartnerSlider();
            })
            .catch(error => {
                console.error('Error:', error);
                mainContent.innerHTML = '<div class="container py-5 text-center"><h2>페이지를 불러오는데 실패했습니다</h2><p>잠시 후 다시 시도해주세요.</p></div>';
            });
    }
}*/