---
date: '2020-08-17'
title: 'When to useMemo and useCallback'
categories: ['Web', 'Frontend', 'React', 'Optimization']
summary: '보통 성능 최적화를 위해 사용하는 Hook인 useMemo와 useCallback은 어떤 상황에서 사용해야 효과를 볼 수 있을까?'
thumbnail: './abc_copy.png'
---

## A Situation That Optimization Is Adversely Affecting

Example Code

```jsx
function CandyDispenser() {
  const initialCandies = ['snickers', 'skittles', 'twix', 'milky way'];
  const [candies, setCandies] = React.useState(initialCandies);
  const dispense = (candy) => {
    setCandies((allCandies) => allCandies.filter((c) => c !== candy));
  };
  return (
    <div>
      <h1>Candy Dispenser</h1>
      <div>
        <div>Available Candy</div>
        {candies.length === 0 ? (
          <button onClick={() => setCandies(initialCandies)}>refill</button>
        ) : (
          <ul>
            {candies.map((candy) => (
              <li key={candy}>
                <button onClick={() => dispense(candy)}>grab</button> {candy}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
```

여기서 성능 최적화를 할 수 있는 부분을 떠올려보자면 dispense 함수를 생각하게 될 것이다.

아래와 같이 코드를 변경하면 성능을 최적화 할 수 있다고 생각했는데 실제로 최적화가 될까?

```jsx
const dispense = (candy) => {
  setCandies((allCandies) => allCandies.filter((c) => c !== candy));
};
const dispenseCallback = React.useCallback(dispense, []);
```

여기서는 useCallback을 사용하는 것이 오히려 더 성능에 악영향을 끼친다.

이유를 생각하기 전, React에서 모든 라인의 실행되는 코드는 비용과 함께 한다는 것을 고려해야 한다.

이 코드로 바꾸면서 우리는 새로운 함수를 정의하는 것 뿐만이 아니라 새로운 배열을 정의해야 하고, 논리적 표현을 통해 property를 세팅하고 실행하는 useCallback 함수를 불러야 한다.

오히려 함수 정의를 통해 더 많은 메모리를 할당하게 되는 것이다.

또, 컴포넌트 두 번째 렌더링시에는 원본 dispense 함수는 Garbage Collected 되는 반면에, useCallback를 감싼 함수는 Garbage Collected 되지 않기 때문에 메모리 관점에서 더 좋지 않은 결과를 얻게 된다.

useCallback 뿐만이 아니라 useMemo도 이에 해당된다.

CandyDispenser 컴포넌트가 매번 렌더링 될 때마다 initialCandies 배열을 초기화하는걸 막기 위해서 다음과 같이 코드를 변경하는 것은 과연 성능 최적화라고 부를 수 있을까?

```jsx
- const initialCandies = ['snickers', 'skittles', 'twix', 'milky way']
+ const initialCandies = React.useMemo(
+  () => ['snickers', 'skittles', 'twix', 'milky way'],
+  [],
+ )
```

언뜻 보기에는 간단한 코드를 오히려 더 복잡하게 만들었고, 또 다시 함수를 호출하였으며, 해당 코드는 메모리 할당을 하고 있기 때문에 사실상 가치가 없다고 할 수 있다.

이런 상황에서는 다음과 같은 코드가 더 효과적일 수도 있다.

```jsx
+ const initialCandies = ['snickers', 'skittles', 'twix', 'milky way']
  function CandyDispenser() {
-   const initialCandies = ['snickers', 'skittles', 'twix', 'milky way']
    const [candies, setCandies] = React.useState(initialCandies)
```

렌더링 단계에서 생성해 주는 것이 아닌 정적으로 만들어 넘겨주기 때문에 매번 초기화를 할 필요가 사라진다. 따라서 여기에서는 이 코드가 더 좋은 케이스이다.

이런 예제들을 보면서 성능 최적화는 자유롭지 않다는 것을 배울 수 있었다.

항상 그에 따른 비용이 들고, 항상 그 비용을 상쇄할 만큼의 이익을 가져다 주지는 않는다.

그럼 언제 useMemo와 useCallback을 사용해야 할까?

## When to useMemo and useCallback?

useMemo와 useCallback같은 Hooks이 React에 내장된 이유

1. 참조 동일성
2. 계산적으로 비용이 많이 드는 계산

참조 동일성에 관한 내용을 살펴보자.

먼저 객체는 리액트 함수형 컴포넌트 안에서 생성될 때에 제일 마지막에 생성된 같은 객체가 처음 정의된 것과 참조적으로 동일하지 않을 것이다.

같은 Property와 같은 값을 가지고 있다고 해도 마찬가지이다.

다음 예제 코드를 보자.

```jsx
function Foo({ bar, baz }) {
  const options = { bar, baz };
  React.useEffect(() => {
    buzz(options);
  }, [options]); // we want this to re-run if bar or baz change
  return <div>foobar</div>;
}
function Blub() {
  return <Foo bar="bar value" baz={3} />;
}
```

useEffect에서 options에 대해 매번 referential equality 체크를 하게 되는데, 자바스크립트 동작 방식에 따라 options 객체는 매번 새롭게 만들어진다.

따라서 React에서는 options가 매번 렌더링시마다 변화 했는지 체크를 할 때마다 true를 반환하기 때문에 useEffect는 렌더링 할 때마다 불리게 된다.

하지만 useEffect 두 번째 인자값인 의존성 객체를 bar, baz로 넣으면 해결될 것 같다. 그러나 여기서도 bar나 baz가 Non-Primitive 변수이면 여전히 쓸모가 없을 것이다.

이런 상황을 위해 useCallback과 useMemo가 존재하는 것이다.

```jsx
function Foo({ bar, baz }) {
  React.useEffect(() => {
    const options = { bar, baz };
    buzz(options);
  }, [bar, baz]);
  return <div>foobar</div>;
}
function Blub() {
  const bar = React.useCallback(() => {}, []);
  const baz = React.useMemo(() => [1, 2, 3], []);
  return <Foo bar={bar} baz={baz} />;
}
```

두 번째 예시를 살펴보자.

```jsx
function CountButton({ onClick, count }) {
  return <button onClick={onClick}>{count}</button>;
}

function DualCounter() {
  const [count1, setCount1] = React.useState(0);
  const increment1 = () => setCount1((c) => c + 1);
  const [count2, setCount2] = React.useState(0);
  const increment2 = () => setCount2((c) => c + 1);
  return (
    <>
      <CountButton count={count1} onClick={increment1} />
      <CountButton count={count2} onClick={increment2} />
    </>
  );
}
```

버튼을 누를 때마다 DualCounter의 상태들은 변화하기 때문에 DualCounter는 리렌더링 될 것이고, 마찬가지로 CountButton도 리렌더링 될 것이다.

그래서 첫 번째 버튼을 클릭하면 두 번째 CountButton은 아무 것도 바뀌지 않지만 리렌더링 된다.

따라서 DualCounter에서는 불필요한 렌더링이 발생하는 문제가 있는 것이다.

다음과 같이 코드를 바꾸면 어떻게 될까?

```jsx
const CountButton = React.memo(function CountButton({ onClick, count }) {
  return <button onClick={onClick}>{count}</button>;
});
```

이제 React는 CountButton의 Props만 바뀔 때마다 리렌더링 하게 될 것이다.

하지만 이게 끝은 아니다. 참조 동일성을 고려해보면 DualCounter 컴포넌트에서 리렌더링 될 때마다 increment1과 increment2 함수는 매번 새롭게 생성될 것이기 때문에 CountButton 컴포넌트는 항상 다른 Props를 받는다고 생각 할 것이기 때문에 매번 리렌더링 될 것이다.

이런 상황에서는 useCallback을 사용하는 것이 효과적이다.

```jsx
const CountButton = React.memo(function CountButton({ onClick, count }) {
  return <button onClick={onClick}>{count}</button>;
});
function DualCounter() {
  const [count1, setCount1] = React.useState(0);
  const increment1 = React.useCallback(() => setCount1((c) => c + 1), []);
  const [count2, setCount2] = React.useState(0);
  const increment2 = React.useCallback(() => setCount2((c) => c + 1), []);
  return (
    <>
      <CountButton count={count1} onClick={increment1} />
      <CountButton count={count2} onClick={increment2} />
    </>
  );
}
```

다음으로 계산적으로 비용이 많이 드는 계산에 대해 살펴보자.

동기적으로 복잡한 계산을 하는 함수를 가지고 있다고 생각해보자.

```jsx
function RenderPrimes({ iterations, multiplier }) {
  const primes = calculatePrimes(iterations, multiplier);
  return <div>Primes! {primes}</div>;
}
```

여기서는 iterations과 multiplier가 매우 느릴 수 있고, 그 부분에 대해서 우리가 할 수 있는 것은 없다.

하지만 같은 값을 두 번이나 계산할 필요 없이 메모이제이션을 통해 이전의 값을 반환하도록 useMemo를 사용하여 성능 최적화를 이뤄낼 수 있다.

```jsx
const primes = React.useMemo(() => calculatePrimes(iterations, multiplier), [
  iterations,
  multiplier,
]);
```

따라서 너무 성급하게 성능 최적화를 하는 것은 오히려 성능에 더 안 좋은 영향을 끼칠 수 있다.

파트너에게 더 복잡하게 만들 수도 있고, 위와 같은 부분을 모르고 지나칠 수 있다.

그러므로 성능 최적화 이전에 측정을 먼저 하여 진짜 필요할 때에 최적화를 하는 것이 좋을 것이다.
