---
date: '2021-01-23'
title: 'JavaScript 핵심 개념 - 객체 (Object)'
categories: ['JavaScript']
summary: '자바스크립트에서 필수적으로 알아야 할 핵심 개념들을 정리해보았습니다. / 자바스크립트에서의 객체 (Object)'
thumbnail: './javascript-core-concept-summary-object.png'
---

## 객체 생성 방법

### Object 생성자 함수 사용

자바스크립트에 내장된 생성자 함수를 통해 객체를 생성하는 방법입니다.

Object 생성자 함수를 통해 빈 객체를 생성하고, 동적으로 프로퍼티를 추가할 수 있습니다.

```jsx
var person = new Object();

person.name = 'John Doe';
person.age = 22;

console.log(person); // { name: 'John Doe', age: 22 }
```

### 객체 리터럴 방식 사용

간단한 표기법으로 객체를 생성할 수 있는 방법입니다.

중괄호 내부에 프로퍼티 이름과 값 형태로 표기함으로써 프로퍼티를 추가할 수 있습니다.

프로퍼티 값으로는 어떠한 표현식도 올 수 있고, 함수도 가능합니다.

함수가 프로퍼티 값으로 온 경우에는 이를 메서드라고 부릅니다.

```jsx
var person = {
  name: 'John Doe',
  age: 22,
};

console.log(person); // { name: 'John Doe', age: 22 }
```

### 생성자 함수 사용

객체를 생성하는 함수를 선언해 이를 통해 동일한 형태의 여러 객체를 생성할 수 있는 방법입니다.

```jsx
function Person(name, age) {
  this.name = name;
  this.age = age;
}

var person1 = new Person('John Doe', 22);
console.log(person1); // { name: 'John Doe', age: 22 }
```

## for in 문을 통한 프로퍼티 출력

for in 문은 객체 내에 있는 모든 프로퍼티를 출력할 수 있는 문법입니다.

다음과 같이 해당 문법을 사용할 수 있습니다.

```jsx
var person = {
  name: 'John Doe',
  age: 22,
};

for (var key in person) {
  console.log(key, person[key]);
}
```

## 참조 타입의 특징

### 객체 할당과 비교

참조 타입은 이름에서도 드러나듯이 모든 연산에서 실제 값이 아닌 참조 값을 통해 처리됩니다.

다음 예제를 살펴봅시다.

```jsx
var obj1 = { num: 1 };
var obj2 = obj1;

console.log(obj1.num, obj2.num); // 1 1
console.log(obj1 == obj2); // true

var obj3 = { num: 1 };
console.log(obj1 == obj3); // false
```

먼저 1번째 코드부터 확인해봅시다.

객체 리터럴 방식으로 생성하여 변수 obj1에 할당하는 코드인데, 여기서 유의할 점은 객체 자체를 저장하고 있는 것이 아닌 생성된 객체를 가리키는 참조 값을 저장하고 있다는 점입니다.

2번째 코드는 obj2에 obj1 값을 할당하는 것인데, 마찬가지로 실제 값이 저장되는 것이 아닌 해당 값의 참조 값을 저장하고 있습니다.

따라서 4번째 줄의 객체 비교 코드에서 두 변수의 참조 값이 동일하므로 true 값이 출력됩니다.

그럼 obj1과 동일한 객체를 리터럴 방식으로 하나 더 만들고, 두 객체를 비교해보면 어떤 값이 출력될까요?

객체의 값이 같다고 하더라도 두 변수의 참조 값이 다르기 때문에 다음과 같이 false가 출력됩니다.

### 참조에 의한 호출 방식

기본 타입과 참조 타입은 함수 호출 방식에서도 차이점이 드러납니다.

먼저 기본 타입은 Call By Value 방식으로 동작하기 때문에 기본 타입의 값을 넘길 경우, 파라미터에 복사된 값이 전달되기 때문에 함수 내부에서 값을 변경해도 실제로 호출된 값은 변경되지 않습니다.

하지만 참조 타입은 Call By Reference 방식으로 동작하기 때문에 객체의 참조값이 전달됩니다.

따라서 함수 내부에서 값을 변경하면 실제 값도 동일하게 변경됩니다.

다음 예제를 확인해봅시다.

```jsx
var num = 1;
var person = { name: 'John Doe', age: 22 };

function changeVar(number, obj) {
  number = 100;
  obj.age = 25;

  console.log(number, obj.age);
}

changeVar(num, person); // 100 25 (함수 호출 시 변경된 값 출력)

console.log(num, person.age); // 1 25 (함수 호출 이후 기존 값 출력)
```

---

## Source

- 인사이드 자바스크립트 도서
