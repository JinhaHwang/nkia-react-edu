# UI개발자를 위한 리액트 기초 교육

## 배경지식 관련 링크

node와 npm에 대한 내용

[프론트엔드 개발환경의 이해: NPM](http://jeonghwan-kim.github.io/series/2019/12/09/frontend-dev-env-npm.html)

es6 스타일가이드 (한 번 훑어보면 됨)

[airbnb/javascript](https://github.com/airbnb/javascript)

## 1일차 교육 내용

1. Node 12+, git, webstorm 등 개발도구 준비
2. npm 설명 및 노드패키지 설명
3. create-react-app (react 보일러플레이트) 설치 및 first-app 프로젝트 생성
4. 컴포넌트 형태 설명 (클래스형, 함수형)
5. props를 통해 컴포넌트에 사용자 정의 속성값 전달 (Display 컴포넌트)
6. App.js에 있는 input의 입력값을 state로 다뤄 Display 컴포넌트에 props로 전달
7. state로 인라인스타일 다루는 방법
8. state로 클래스명을 다루는 방법(`` ← es6 템플릿 문자열 리터럴 사용)
9. 디렉터리 구조에대한 고민과 Atomic Design

## 교육에서 설명했던 es6 문법

1. let과 const
2. Destructural Syntax (비구조화 할당, 객체나 배열을 비구조화 할 수 있다)
3. Template String Literal ( `일반문자 ${변수 또는 표현식}` )

## Q & A

1. ReactDom.render는 뭐에요?
 → public/index.html에 src/index.js가 inject 되면서 ReactDom.render() 함수가 실행되고, 이를 통해 컴포넌트의 시작인 App 컴포넌트가 <div id="root" /> 엘리먼트에 마운트 된다.

2. Node가 뭐에요?
 → 서버사이드 자바스크립트... 근데 설명이 부족했다.

## 교육에서 소개한 웹스톰 기능 및 단축키

> Note: 웹스톰 또는 vs code 에디터에서 package.json이 위치한 폴더를 열면 그게 곧 노드 프로젝트의 루트이다.

### 에디터 소스코드 편집 관련 단축키

`Ctrl + D` 또는 `Cmd + D` 

 → 소스 코드 한 줄 복제

`Ctrl + Y` 또는 `Cmd + ←`(backspace)

 → 한 줄 삭제

에디터에서 `rsc` 입력 후 `tab` 

 → 함수형 컴포넌트 스니펫 생성

에디터에서 `rcc` 입력 후 `tab`

 → 클래스형 컴포넌트 스니펫 생성

### 툴 윈도우 관련 단축키

`Alt + 1`

 → 프로젝트 디렉터리

`Alt + 9`

 → git 로그 툴 윈도우

`Alt + 0`

 → pakcage.json에 정의 된 scripts를 볼 수 있는 npm 툴 윈도우
