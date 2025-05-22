한국어 | English | 日本語

Pretendard
Thumbnail
Pretendard는 크로스 플랫폼으로 제품을 제공할 때, 그리고 다국어 타이포그래피에서도 자연스러운 현대적인 글꼴입니다. Inter와 본고딕, 그리고 M PLUS 1p을 바탕으로 다듬어진 Pretendard는 읽기 환경에서 가독성과 시각 보정을 위해 추가적인 작업을 하지 않아도 됩니다.

Pretendard는 9가지 굵기로 제공되며, 가변 글꼴 또한 지원합니다.

배경 및 이야기
Pretendard의 배경과 특징, OpenType 기능 등을 설명하는 자세한 이야기는 이곳에서 확인하실 수 있습니다.

다운로드
최신 버전 다운로드
패밀리
특정 환경에 적합한 Pretendard를 사용하려면 아래로 이동하세요:

Pretendard JP: 일본 환경에 적합하며, 추가 기능으로 한국 한자 환경에 맞춰 쓸 수 있습니다.
Pretendard Std: 라틴 환경에 적합합니다.
Pretendard GOV: 대한민국 공공 서비스 환경에 적합합니다.
웹폰트
CDN을 이용해 Pretendard를 사용할 수 있으며, 토글을 확인해 기본적으로 추천하는 jsDelivr 외에도 cdnjs와 UNPKG 중에 원하는 CDN을 사용하실 수 있습니다.

모든 기능을 포함한 Pretendard를 웹폰트로 사용하려면 아래 코드를 사용하세요. 사용하는 font-family 이름은 Pretendard 입니다.

HTML
<link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
cdnjs 및 UNPKG
CSS
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css");
cdnjs 및 UNPKG
다이나믹 서브셋
Pretendard에서는 웹폰트 용량 문제를 해결하기 위한 방법으로 Google Fonts에서 제공하는 한글 글꼴과 동일한 방식으로 동적 서브셋을 제공합니다. 페이지에 포함된 글자만 선택적으로 다운로드해 보다 빠르게 Pretendard를 사용하려면 아래 코드를 사용하세요. 사용하는 font-family 이름은 Pretendard 입니다.

HTML
<link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css" />
cdnjs 및 UNPKG
CSS
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css");
cdnjs 및 UNPKG
가변 다이나믹 서브셋
가변 다이나믹 서브셋으로 가변 Weight 속성과 함께 기존 다이나믹 서브셋보다 현저히 적은 용량으로 Pretendard를 사용할 수 있습니다. 모던 브라우저에서 더욱 쾌적하게 Pretendard를 사용하려면 아래 코드를 사용하세요. 사용하는 font-family 이름은 "Pretendard Variable" 입니다.

HTML
<link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css" />
cdnjs 및 UNPKG
CSS
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css");
cdnjs 및 UNPKG
가변 글꼴
가변 weight 속성을 사용하려면 아래 코드를 사용하세요. 사용하는 font-family 이름은 "Pretendard Variable" 입니다.

HTML
<link rel="stylesheet" as="style" crossorigin href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css" />
cdnjs 및 UNPKG
CSS
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css");
cdnjs 및 UNPKG
font-family
시스템에 가능한 맞추고자 한다면 아래와 같은 font-family 구성을 추천합니다.

font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Pretendard Variable", Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
어디서든 동일한 환경을 가지고자 한다면 아래와 같은 font-family 구성을 추천합니다.

font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
패키지
Pretendard는 아래와 같은 패키지 매니저에서 사용할 수 있습니다.

npm
npm i pretendard
Yarn
yarn add pretendard
시스템 폰트
Pretendard를 기기에 설치해 시스템 폰트로 사용할 수 있습니다.

homebrew-cask-fonts
brew tap homebrew/cask-fonts
brew install font-pretendard
NixOS
# configuration.nix
{
  fonts.packages = with pkgs; [
    pretendard
  ];
}
AUR
yay -S otf-pretendard
yay -S ttf-pretendard
Next.js
Next.js에서 로컬 폰트 기능을 활용하여 Pretendard를 사용할 수 있습니다.

import localFont from 'next/font/local'

const pretendard = localFont({
  src: './fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
})
weight 옵션을 지정하지 않으면 WebKit 기반의 브라우저에서 굵기가 잘못 렌더링 될 수 있으니 주의해 주세요.

크레딧
바탕
Inter: Rasmus Andersson

한글 바탕
Source Han Sans: Adobe, Google, 산돌커뮤니케이션; 장수영, 강주연

가나 바탕
M PLUS 1p: UNDERFOREST DESIGN; Coji Morishita

리디자인 및 제작
길형진

라이선스
Pretendard는 SIL 오픈 폰트 라이선스로 배포됩니다. 글꼴 단독 판매를 제외한 모든 상업적 행위 및 수정, 재배포가 가능합니다.

후원자
Pretendard 프로젝트를 더욱 원활히 이어나갈 수 있도록 지원해주셔서 진심으로 감사드립니다.

FEConf

기여자
Pretendard에 기여해주셔서 진심으로 감사드립니다.

@hiddenest: 웹폰트 서빙 및 CDN 업데이트 자동화, 서브셋 및 다이나믹 서브셋 제작, 그리고 가변 다이나믹 서브셋 자동화를 작업해주셨습니다.

@leejh10003: Pretendard를 사용하는 예시를 제작해주셨습니다.

@black7375: 모든 웹폰트 빌드 자동화, npmjs 및 Yarn에 Publish 및 릴리즈 파일 생성 자동화, CDN URL에서 버저닝 개선, 모노레포 대응, 빌드 성능 개선, 그리고 Pretendard GOV CDN 문서화를 작업해주셨습니다.

@victorrica: npm 및 Yarn 패키지 배포를 작업해주셨습니다.

@kms0219kms: 모든 웹폰트 CDN 배포 다중화, 문서 포매팅 개선, 영어 및 일본어 문서화를 작업해주셨습니다.

@Gamsake: 빌드 자동화를 개선해주셨습니다.

@quiple: 일본어 Readme 번역을 개선해주셨습니다.

@sudosubin: homebrew-cask-fonts 및 nix에 Pretendard를 추가해주셨습니다.

Pretendard를 사용하는 곳
PocketLessonCareerlyPOINTINGflexFesta썬데이나마스떼TECHITSandoll Cloud캐치패션PUBLY세탁특공대kakaobankZIGZAGsolved.acrallitAdobe FontsWanted청와대, 국민 품으로HOLIXZEPCLASS101여기어때KbankBLIMPLunitportone한컴독스오늘학교인프런AirbridgeRememberAGSeMA감람스톤미리캔버스 SSF SHOPZigbang안그라픽스Naver WebtoonBBQ 치킨번개장터한국일보Vogue KoreaNaver Blogwadiz모바일 신분증무신사왁타버스 뮤직페이지콜elice월급쟁이부자들맹그로브QANDA콴다과외펜슬NHN KCP코멘토

의견 나누기
새로운 개선 의견은 언제나 환영입니다. 해결이 필요한 경우 Issues에서 이슈를 등록해주세요.

// 여기에 JavaScript 코드를 작성하세요
document.addEventListener('DOMContentLoaded', function() {
    console.log('페이지가 로드되었습니다.');
});