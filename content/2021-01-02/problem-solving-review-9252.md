---
date: '2021-01-02'
title: 'BOJ#9252 - LCS 2 Review'
categories: ['Algorithm', 'Dynamic Programming']
summary: '다이나믹 프로그래밍 알고리즘 문제는 어떻게 접근해야 풀 수 있을지에 대한 내용을 담았습니다. / Baekjoon 9252번 LCS 2 문제'
thumbnail: './problem-solving-review-9252.png'
---

## BOJ#9251 LCS 문제 최초 해결 방법

### 처음 AC를 받은 소스 코드

```cpp
#include <iostream>
#include <algorithm>
#include <string>
using namespace std;

int getResult(int souIdx, int tarIdx);
int cache[1000][1000];
string sou, tar;

int main() {
  cin >> sou;
  cin >> tar;

  fill(&cache[0][0], &cache[999][1000], -1);
  printf("%d \n", getResult(0, 0));

  return 0;
}

int getResult(int souIdx, int tarIdx) {
  if (sou.length() == souIdx || tar.length() == tarIdx) return 0;

  int &ret = cache[souIdx][tarIdx];
  if (ret != -1) return ret;

  for (int i = tarIdx; i < tar.length(); i++) {
    if (sou[souIdx] == tar[i])
      ret = max(ret, 1 + getResult(souIdx + 1, i + 1));
  }

  ret = max(ret, getResult(souIdx + 1, tarIdx));

  return ret;
}
```

### 이를 통해 구현할 시의 문제점

위와 같이 코드를 구성한다고 하더라도 LCS 길이와 문자열을 구할 수 있지만, 추가적으로 역추적하는 함수를 구현해야 한다.

또, 적절한 점화식을 가지고 구현한 코드가 아니다 보니까 되게 복잡하다고 생각이 든다.

쓸 데 없이 순회하는 로직이 들어가 있어 소요되는 시간도 꽤 많은 편이다.

---

## 다른 해결 방법

### 점화식 도출

우선 점화식을 먼저 도출해보자.

위의 방법에서는 소스 인덱스를 고정시켜놓고, 타겟 인덱스를 순회하며 똑같은 문자열이 존재하면 재귀 함수를 호출하는 형태로 구현했다.

그러나 이 방법에서는 순회하는 과정 없이 문자열이 동일한 경우와 동일하지 않은 경우, 이렇게 2가지의 케이스로 나눠 재귀 함수를 호출하는 형태로 바꿔보려고 한다.

1. 해당 인덱스의 문자가 서로 동일한 경우

   동일한 경우에는 해당 인덱스에서 시작하는 LCS의 길이에 1을 더한 것이 해당 LCS의 길이가 된다.

   즉, `1 + getResult(souIdx + 1, tarIdx + 1)` 의 값이 결과가 되는 것이다.

2. 해당 인덱스의 문자가 서로 다른 경우

   다른 경우에는 첫 번째 문자열의 인덱스가 하나 늘어난 상황에서의 결과와 두 번째 문자열의 인덱스가 하나 늘어난 상황에서의 결과 중 더 큰 값이 해당 LCS의 길이가 된다.

   즉, `max(getResult(souIdx + 1, tarIdx), getResult(souIdx, tarIdx + 1)` 의 값이 결과가 되는 것이다.

이 과정을 점화식으로 나타내면 다음과 같다.

```cpp
ret = 1 + getResult(souIdx + 1, tarIdx + 1) (sou[souIdx] == tar[tarIdx])
ret = max(getResult(souIdx + 1, tarIdx), getResult(souIdx, tarIdx + 1) (sou[souIdx] != tar[tarIdx])
```

이렇게 문자열의 길이를 구하는 것까지는 구현이 가능하지만, 이를 통해 어떻게 LCS를 출력할 수 있을까?

우선, LCS와 LCS 2에서 주어진 예제를 통해 구한 cache의 값은 다음과 같다.

```cpp
    C  A  P  C  A  K
A   4  4 -1 -1 -1 -1
C   3 -1  3  3 -1 -1
A  -1  2  2  2  2 -1
Y  -1 -1  1  1  1  1
K  -1 -1  1  1  1  1
P  -1 -1  1  0  0  0
```

위의 결과는 각 인덱스에서 시작하는 LCS의 길이를 나타낸 것이다.

우선, LCS는 ACAK인데 이를 통해 결과가 도출되는 과정을 보면 다음과 같다.

1행 2열에서 두 문자가 A로 같으면서, 최대 길이가 4이다.

2행 4열에서 두 문자가 C로 같으면서, 최대 길이가 3이다.

3행 5열에서 두 문자가 A로 같으면서, 최대 길이가 2이다.

5행 6열에서 두 문자가 K로 같으면서, 최대 길이가 1이다.

그러나, 위의 표를 보면 두 문자가 서로 다른데 최대 길이가 중복되는 경우가 있다.

위의 점화식에서 두 문자가 서로 다른 경우를 보면 해당 자리에서 오른쪽, 아래쪽 결과 중 큰 값을 결과로 설정하기 때문에 다음과 같이 길이가 같게 나온다.

이렇게 LCS의 길이를 구하는 부분은 해결되었다.

이제 문제는 문자열을 구하는 부분인데, 이를 어떻게 구해야 할까?

먼저, 이 방법은 Top-Down 방식으로 구하는 것이기 때문에 끝에서부터 천천히 쌓아 올리며 길이를 구한다.

그러기 때문에 동일하게 문자열도 끝에서부터 쌓아 올려야 하는데, 이는 위에서 최대 길이를 구하면서 생각한 경우를 그대로 사용하면 된다.

단, 그러기 위해서는 최대 길이와 문자열을 동시에 저장해야 하는데 따로 배열을 만들어 줄 수 있지만 C++에서는 pair라는 STL을 제공한다.

pair를 사용하여 첫 번째 값으로 최대 길이를, 두 번째 값으로 문자열을 저장하자.

그럼 위에서 최대 길이를 구했던 것처럼 똑같이 문자열을 구하는 방법을 생각해보자.

1. 해당 인덱스의 문자가 서로 동일한 경우

   최대 길이를 구할 때에는 두 인덱스를 하나씩 올려준 상태에서 호출한 재귀 함수의 결과값에 1을 더하는 방식으로 값을 구했다.

   따라서 문자열도 마찬가지로 해당 재귀 함수를 호출했을 때 반환된 결과값 중 문자열 부분 앞에 현재 문자를 추가해주면 된다.

2. 해당 인덱스의 문자가 서로 다른 경우

   여기서는 앞의 문자열에서 인덱스를 하나 올려준 경우와 뒤의 문자열에서 인덱스를 하나 올려준 경우를 비교하여 더 큰 값을 결과로 설정하였다.

   문자열에서는 두 길이 중 더 긴 값과 같이 반환된 문자열을 그대로 결과로 지정해주면 된다.

이 방법을 통해 구한 cache는 다음과 같다.

```cpp
      C    A    P    C    A    K
A  ACAK ACAK    -    -    -    -
C   CAP    -  CAK  CAK    -    -
A     -   AP   AK   AK   AK    -
Y     -    -    P    K    K    K
K     -    -    P    K    K    K
P     -    -    P    -    -    -
```

위에서 구한 최대 길이를 저장하는 cache를 보면, 해당 길이에 맞게 문자열이 만들어진 것을 볼 수 있다.

아래는 추가 풀이 방법으로 바꾼 코드이다.

### 해당 방법으로 바꾼 소스 코드

```cpp
#include <iostream>
#include <algorithm>
#include <string>
using namespace std;

pair<int, string> getResult(int souIdx, int tarIdx);
pair<int, string> cache[1000][1000];
string sou, tar;

int main() {
  cin >> sou;
  cin >> tar;

  fill(&cache[0][0], &cache[999][1000], make_pair(-1, ""));

  pair<int, string> result = getResult(0, 0);

  printf("%d \n", result.first);
  if (result.first != 0) printf("%s \n", result.second.c_str());

  return 0;
}

pair<int, string> getResult(int souIdx, int tarIdx) {
  if (sou.length() == souIdx || tar.length() == tarIdx) return make_pair(0, "");

  pair<int, string> &ret = cache[souIdx][tarIdx];
  if (ret.first != -1) return ret;

  if (sou[souIdx] == tar[tarIdx]) {
    ret.first = 1 + getResult(souIdx + 1, tarIdx + 1).first;
    ret.second = sou[souIdx] + getResult(souIdx + 1, tarIdx + 1).second;
  }
  else {
    pair<int, string> tmp1 = getResult(souIdx + 1, tarIdx), tmp2 = getResult(souIdx, tarIdx + 1);
    ret.first = max(tmp1.first, tmp2.first);
    ret.second = tmp1.first >= tmp2.first ? tmp1.second : tmp2.second;
  }

  return ret;
}
```
