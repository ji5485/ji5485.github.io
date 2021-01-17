---
date: '2020-12-08'
title: 'BOJ#12865 - 평범한 배낭 Review'
categories: ['Algorithm', 'Dynamic Programming']
summary: '다이나믹 프로그래밍 알고리즘 문제는 어떻게 접근해야 풀 수 있을지에 대한 내용을 담았습니다. / Baekjoon 12865번 평범한 배낭 문제'
thumbnail: './problem-solving-review-12865.png'
---

## 최초 풀이 방법

### 처음 AC를 받은 소스 코드

```cpp
#include <iostream>
#include <algorithm>
#include <cmath>
using namespace std;

int getResult(int index, int weight);
int cache[101][100001], stuff[2][100], n, k;

int main() {
  scanf("%d %d", &n, &k);
  fill(&cache[0][0], &cache[100][100001], -1);

  for (int i = 0; i < n; i++)
    scanf("%d %d", &stuff[0][i], &stuff[1][i]);

  printf("%d \n", getResult(-1, 0));

  return 0;
}

int getResult(int index, int weight) {
  if (weight > k) return numeric_limits<int>::min();

  int &ret = cache[index + 1][weight];
  if (ret != -1) return ret;

  ret = 0;
  for (int i = index + 1; i < n; i++)
    ret = max(ret, stuff[1][i] + getResult(i, weight + stuff[0][i]));

  return ret;
}
```

### 해결 방법

우선, 이와 같이 배낭에 담을 수 있는 무게의 최댓값이 정해져 있고, 일정 가치와 무게가 있는 짐들을 배낭에 넣을 때, 가치의 합이 최대가 되도록 짐을 고르는 방법을 찾는 알고리즘을 Knapsack Algorithm이라고 칭한다.

나는 이 문제를 보고 첫 번째로 생각한 방법은 for문을 통해 시작점에서부터 하나씩 물건을 고른 후, 나머지 것들에 대해 값을 구하는 방법을 생각했다.

그럼 처음부터 하나하나 물건을 넣어보며 가치가 최대가 되는 것을 찾을 수 있기 때문이었다.

그러나 쓸 데 없이 for문이 도는 부분이 있어 시간적으로 효율적인 코드는 아니었다.

---

## 추가 풀이

### 더 간단한 해결 방법

굳이 for문을 돌리지 않더라도 식 하나로도 충분히 해결 가능했다.

우선, index가 정해져 있을 때 구할 수 있는 경우의 수는 그 물건을 배낭에 담을 지, 안 담을 지와 같이 2가지 밖에 존재하지 않는다.

만약 배낭에 담는다고 가정하면 그 만큼 weight를 추가해주면 되는 것이다.

따라서 다음과 같은 점화식이 세워진다.

```cpp
// stuff[2][100] = { { weight, value }, ... }
ret = max(
	stuff[1][index] + getResult(index + 1, weight + stuff[0][index]),
	getResult(index + 1, weight)
)
```

아래는 추가 풀이 방법으로 바꾼 코드이다.

### 해당 방법으로 바꾼 소스 코드

```cpp
#include <iostream>
#include <algorithm>
#include <cmath>
using namespace std;

int getResult(int index, int weight);
int cache[101][100001], stuff[2][100], n, k;

int main() {
  scanf("%d %d", &n, &k);
  fill(&cache[0][0], &cache[100][100001], -1);

  for (int i = 0; i < n; i++)
    scanf("%d %d", &stuff[0][i], &stuff[1][i]);

  printf("%d \n", getResult(0, 0));

  return 0;
}

int getResult(int index, int weight) {
  if (weight > k) return numeric_limits<int>::min();
  if (index == n) return 0;

  int &ret = cache[index][weight];
  if (ret != -1) return ret;

  return ret = max(stuff[1][index] + getResult(index + 1, weight + stuff[0][index]), getResult(index + 1, weight));
}
```
