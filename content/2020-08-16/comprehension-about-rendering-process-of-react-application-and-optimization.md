---
date: '2020-08-16'
title: 'Comprehension about Rendering Process of React Application and Optimization'
categories: ['Web', 'Frontend', 'OpenSource', 'Optimization']
summary: '오픈소스 웹 애플리케이션 보안 프로젝트 OWASP에서 선정한 웹 취약점에 항상 이름을 올리는 XSS와 CSRF은 무엇이고, 해당 해킹 기법에 대한 조치 방법으로는 무엇이 있을까?'
thumbnail: './abc_copy.png'
---

## How React execute Rendering Process?

1. When Props Changed
2. When State Changed
3. When `forceUpdate()` executed
4. When Parent Component rendered

1~3번 과정을 통해 컴포넌트가 렌더링 된 경우에는 자식 컴포넌트 또한 같은 과정으로 렌더링 됨

### What we used previously for Optimization of Rendering Process?

1. shouldComponentUpdate LifeCycle API

   해당 라이프사이클 API에서는 인자값을 통해 변경되는 속성과 상태를 수신할 수 있기 때문에 이전과 그대로인 경우에는 거짓을 반환하여 렌더링을 수행하지 않도록 할 수 있음

2. React.PureComponent Class

   변경되는 데이터가 모두 원시 값이거나 각각의 불변성을 보장할 수 있는 경우에는 해당 클래스 또는 함수를 사용할 수 있음

   넘겨받는 Props와 State를 Swallow 비교를 통해 렌더링 여부를 결정하기 때문에 불변성에 대한 중요도가 높음

3. React.memo Function

   1번, 2번 방식을 모두 합쳐 놓은 것이지만 함수형 컴포넌트를 위한 최적화 함수

   함수형 컴포넌트만 인자값으로 넣으면 해당 함수형 컴포넌트는 PureComponent처럼 작동하지만, 두 번째 인자 값으로 현재 Props와 변경될 Props를 받아 직접 렌더링 제어도 가능

### Case of Passing By Unaware of Immutability

1. Props and State are Array or Object

   배열과 객체는 문자열, 숫자, 불리언 같은 원시형 데이터와는 다르게 변경 가능한 데이터이므로 동일함을 증명하기 위해서는 모든 내부에 있는 불변 데이터가 동일하다는 것을 입증해야 함

2. Props and State are Function

   함수 또한 객체와 마찬가지로 불변 데이터가 아님

   특히 리터럴 함수 형태로 Props를 넘겨주는 경우에는 자식 컴포넌트가 렌더링 되는 모든 시점에서 똑같은 함수가 계속해서 재생성된다.

3. Props and State are React Element

   우리가 편하게 작성하는 마크업 구조의 React Element 또한 children이라는 Key 값으로 전달되는 Props이므로 불필요하게 렌더링 되는 대상이다.

### Solutions about Above Problems

1. Case of Fixed Constant Data

   렌더링 단계에서 생성하는 것이 아닌 정적으로 생성하여 넘겨주는 방법

   해당 컴포넌트에서 값을 분리하여 사용한다.

2. Case of Data that doesn't require an immediate response

   주로 이벤트 핸들러와 같은 함수 Props에 해당

   따로 프로퍼티로 함수를 만들어 이를 Props로 넘기는 방법

   해당 프로퍼티를 가지고 있는 컴포넌트에서 렌더링이 발생하지 않는 이상 기존 함수는 새로 생성되지 않음

3. Case of Data that requires an immediate response

   메모이제이션 기법을 통해 동일한 계산의 반복 수행을 제거하는 방법

### Optimize Rendering Process with Hooks

1. useMemo

   메모이제이션 된 값을 반환받는 Hook

   의존성을 배열 형태로 받아 메모이제이션 값이 변경되는 시점을 결정

2. useCallback

   특정 함수를 새로 만들지 않고 재사용해야하는 경우에 사용하는 Hook

   의존성을 배열 형태로 받아 메모이제이션 값이 변경되는 시점을 결정
