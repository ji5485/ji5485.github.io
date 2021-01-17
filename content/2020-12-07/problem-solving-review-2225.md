---
date: '2020-12-07'
title: 'BOJ#2225 - 합분해 Review'
categories: ['Algorithm', 'Dynamic Programming']
summary: '다이나믹 프로그래밍 알고리즘 문제는 어떻게 접근해야 풀 수 있을지에 대한 내용을 담았습니다. / Baekjoon 2225번 합분해 문제'
thumbnail: './problem-solving-review-2225.png'
---

## 최초 풀이 방법

### 처음 AC를 받은 소스 코드

```cpp
#include <iostream>
#include <algorithm>
using namespace std;

long long getResult(int sum, int cnt);
long long cache[201][201], MOD = 1000000000;

int main() {
  int n, k;

  scanf("%d %d", &n, &k);
  fill(&cache[0][0], &cache[200][201], -1);

  printf("%lld \n", getResult(n, k));

  return 0;
}

long long getResult(int sum, int cnt) {
  if (sum == 0 && cnt == 0) return 1;
  else if (cnt == 0) return 0;

  long long &ret = cache[sum][cnt];
  if (ret != -1) return ret;

  ret = 0;
  for (int i = 0; i <= sum; i++) {
    if (sum - i >= 0) ret += getResult(sum - i, cnt - 1) % MOD;
  }

  return ret % MOD;
}
```

### 해결 방법

1. N이 2이고, K가 1인 경우

   자기 자신 N만 더하면 되므로 1가지

   이는 N이 어떤 수가 와도 동일하다

2. N이 2이고, K가 2인 경우

   0 + 2 = 2

   1 + 1 = 2

   2 + 0 = 2

   이므로 총 3가지

3. N이 2이고, K가 3인 경우

   0 + 0 + 2

   0 + 1 + 1

   0 + 2 + 0

   1 + 0 + 1

   1 + 1 + 0

   2 + 0 + 0

   이므로 총 6가지

위의 경우에서 볼 수 있듯이, 맨 앞자리 숫자 num만 정한다면 그 뒤에 따라오는 경우는 N이 N - num이고, K가 K - 1인 부분 문제가 된다.

따라서 이 문제를 해결하기 위해서는 0부터 N까지의 모든 경우에 대해 앞에 올 숫자 num을 정하고, 그 뒤에 따라오는 부분 문제를 해결하는 방법으로 문제를 접근하였다.

그렇게 되면 점화식은 다음과 같아진다.

```cpp
dp[n][k] = dp[n - 0][k - 1] + dp[n - 1][k -1] + ... + dp[n - n][k - 1]
```

---

## 추가 풀이

### 더 간단한 해결 방법

위의 방식대로 풀이를 하게 되면 for문을 사용해야 하지만 이를 조금 더 간단하게 만들어 for문 없이 문제를 해결할 수 있다.

위의 점화식의 우항에서 두 번째 덧셈 부분부터 살펴보자.

```cpp
dp[n - 1][k - 1] + dp[n - 2][k - 1] + ... + dp[0][k - 1]
```

이는 위의 점화식과 변수는 다르더라도 식의 형태는 완전히 동일하다.

따라서 위의 식은 다음과 같이 나타낼 수 있다.

```cpp
dp[n - 1][k - 1] + dp[n - 2][k - 1] + ... + dp[0][k - 1] = dp[n - 1][k]
```

이에 따라 첫 번째 문제에서 사용한 점화식을 다음과 같이 바꿀 수 있다.

```cpp
dp[n][k] = dp[n][k - 1] + dp[n - 1][k]
```

여기서 n이 0일 때와 k가 1일 때에는 항상 그 값이 1이기 때문에 이에 신경써서 하면 재귀문은 기존 방식에 비해 코드량이 많이 줄어들게 된다.

아래는 추가 풀이 방법으로 바꾼 코드이다.

### 해당 방법으로 바꾼 소스 코드

```cpp
#include <iostream>
#include <algorithm>
using namespace std;

int getResult(int sum, int cnt);
int cache[201][201], MOD = 1000000000;

int main() {
  int n, k;

  scanf("%d %d", &n, &k);
  fill(&cache[0][0], &cache[200][201], -1);

  printf("%d \n", getResult(n, k));

  return 0;
}

int getResult(int n, int k) {
  if (n == 0 || k == 1) return 1;

  int &ret = cache[n][k];
  if (ret != -1) return ret;

  return ret = (getResult(n, k - 1) + getResult(n - 1, k)) % MOD;
}
```
