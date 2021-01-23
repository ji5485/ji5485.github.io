---
date: '2021-01-17'
title: 'JavaScript 핵심 개념 - 데이터 타입 (Data Type)'
categories: ['JavaScript']
summary: '자바스크립트에서 필수적으로 알아야 할 핵심 개념들을 정리해보았습니다. / 자바스크립트에서의 데이터 타입 (Data Type)'
thumbnail: './javascript-core-concept-summary-data-type.png'
---

## 자바스크립트에서의 데이터 타입

자바스크립트에서는 크게 기본 타입(Primitive Type)과 참조 타입(Reference Type)으로 나뉘는데, 각 타입에 존재하는 데이터 타입은 다음과 같습니다.

1. 기본 타입 (Primitive Type)

   - 숫자 (Number)
   - 문자열 (String)
   - 불린값 (Boolean)
   - undefined
   - null
   - Symbol (ES6에서 추가된 새로운 데이터 타입)

2. 참조 타입 (Reference Type)

   - 객체 (Object)

## 기본 타입 (Primitive Type)

### 숫자 (Number)

int, long, float, double과 같이 다양한 숫자 타입이 존재하는 C언어와는 다르게 자바스크립트에서는 단 하나의 숫자 타입만 존재합니다.

모든 숫자를 64비트 부동 소수점 형태로 저장하는 자바스크립트에서는 정수나 실수의 구분 없이 변수에 바로 값을 대입할 수 있습니다.

따라서 모든 숫자를 실수로 처리하기 때문에 나누기 연산을 할 경우 C언어와 다르게 소수점까지 출력하므로 주의하여야 합니다.

```jsx
var num = 9 / 2;

console.log(num); // 4.5
```

### 문자열 (String)

C언어에서는 문자 하나만을 저장하는 char 타입이 존재하는 반면, 자바스크립트에서는 문자열의 길이에는 상관 없이 string이라는 데이터 타입으로 값이 생성됩니다.

문자열을 다룰 때 유의할 점은 한 번 정의한 문자열은 변하지 않는다는 점입니다.

```jsx
var str = 'dev';

str[0] = 'D';
console.log(str); // dev
```

다음 예제와 같이 정의한 문자열의 첫 번째 문자를 대문자로 변경하는 코드가 존재하지만, 문자열은 변하지 않고 처음 정의했던 문자열을 출력합니다.

### 불린값 (Boolean)

자바스크립트에서는 true와 false 값을 나타내는 불린 타입이 존재합니다.

```jsx
var flag = true;

console.log(typeof flag); // boolean
```

### undefined와 null

자바스크립트에서의 undefined와 null은 모두 값이 비어있음을 나타내는 데이터 타입입니다..

그러나 두 타입 사이의 차이점이 존재합니다.

우선 기본적으로 값이 할당되지 않은 변수는 undefined 타입인데, undefined 타입의 변수는 값 또한 undefined입니다.

즉, 자바스크립트에서의 undefined는 타입이면서 값을 나타냅니다.

따라서 다음과 같이 아무런 값이 할당되지 않은 변수는 undefined 타입이 출력됩니다.

```jsx
var tmp;

console.log(typeof tmp); // undefined
console.log(tmp); // undefined
```

하지만 이에 반해 null 타입은 명시적으로 값이 비어있음을 나타내는 데 사용합니다.

또, null 값을 할당한 변수의 데이터 타입을 출력해보면 null이 아닌 object가 출력됩니다.

따라서 null 타입의 변수인지 확인하기 위해서는 typeof 연산자를 사용하지 못 하기 때문에 일치 연산자를 사용하여야 합니다.

```jsx
var tmp;

console.log(typeof tmp); // object
console.log(tmp); // null
```

### Symbol

Symbol은 ECMA Script 6에서 등장한 새로운 데이터 타입으로, 충돌 위험이 없는 고유한 프로퍼티를 만들기 위한 데이터 타입입니다.

```jsx
var tmp = Symbol('tmp');

console.log(typeof tmp); // symbol
console.log(tmp === Symbol('tmp')); // false (단순 디버깅을 위한 설명을 인자값으로 받는다.)
```

## 참조 타입

### 객체 (Object)

자바스크립트에서 기본 타입을 제외한 모든 값은 객체로 취급됩니다.

따라서 배열이나 함수 등도 모두 객체로 표현됩니다.

주로 key-value 쌍의 데이터를 저장하며, 하나의 값만 저장되는 기본 데이터 타입과는 다르게 여러 개의 프로퍼티를 저장할 수 있습니다.

이런 객체의 프로퍼티는 기본 데이터 타입의 값을 가지거나 다른 객체를 가리킬 수 있습니다.

이러한 성질로 함수도 객체의 프로퍼티로 지정할 수 있고, 자바스크립트에서는 이런 프로퍼티를 메서드라고 부릅니다.

```jsx
var obj = {
  name: 'John Doe',
  age: 30,
  passed: true,
  getInfo: function () {
    return this.name + ', ' + this.age;
  },
};

console.log(obj.name, obj.age, obj.passed); // John Doe 30 true
console.log(obj.getInfo()); // John Doe, 30
```

---

## Source

- 인사이드 자바스크립트 도서
