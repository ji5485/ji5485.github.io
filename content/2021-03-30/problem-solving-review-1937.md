---
date: '2021-03-30'
title: 'BOJ#1937 - 욕심쟁이 판다 Review'
categories: ['Algorithm', 'DFS', 'Dynamic Programming']
summary: 'DFS 알고리즘에 다이나믹 프로그래밍 기법이 섞인 문제는 어떻게 접근해야 풀 수 있을지에 대한 내용을 담았습니다. / Baekjoon 1937번 욕심쟁이 판다 문제'
thumbnail: './problem-solving-review-1937.png'
---

### 풀이 방법

대나무숲의 최대 크기가 500 \* 500이므로, 각각의 자리에서 판다가 최대한 살 수 있는 일수를 구하기에는 시간 제한이 있어 어려움이 있습니다.

따라서 이전에 구한 값이 있다면 그 값을 활용하여 최대한 반복을 줄어야 합니다.

그러기 때문에 이 문제는 DFS에 다이나믹 프로그래밍 기법을 섞어 해결해야 제한된 시간 내에 구할 수 있습니다.

<br />

기본적인 다이나믹 프로그래밍 문제 접근 방법은 무엇일까요?

저는 보통 재귀 호출을 사용하는 Top-Down 방법을 사용하는데, 그 경우에는 하나의 문제를 2개 이상의 세부 문제로 나누어 그 값으로부터 해를 구합니다.

그리고 이 과정에서 나오는 값들은 모두 재사용할 수 있도록 Memoization합니다.

<br />

그러면 이 문제에서는 어떻게 적용할 수 있을까요?

각 자리에서 DFS 함수를 통해 구한 값을 대나무숲의 크기와 동일한 배열을 선언하여, 각 자리에 저장해놓으면 되겠죠.

따라서 탐색을 하다가 이미 저장되어 있는 값이 존재한다면, 굳이 다시 탐색하지 않고도 최대 일수를 구할 수 있습니다.

아래 코드는 위의 풀이 방법을 적용한 코드입니다.

```cpp
#include <iostream>
#include <algorithm>
using namespace std;

int n, map[500][500], dp[500][500], nextTo[4][2] = { { 1, 0 }, { 0, 1 }, { -1, 0 }, { 0, -1 } };
int dfs(int y, int x);

int main() {
  int result = 0;

  scanf("%d", &n);
  fill(&dp[0][0], &dp[n - 1][n], -1);

  for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++)
      scanf("%d", &map[i][j]);
  }

  for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++)
      result = max(result, dfs(i, j));
  }

  printf("%d \n", result);

  return 0;
}

int dfs(int y, int x) {
  // 만약 이미 저장된 값이 있다면 그대로 해당 값 반환
  int &ret = dp[y][x];
  if (ret != -1) return ret;

  // 해당 자리도 방문한 것이므로 판다가 살 수 있는 최대 일수는 기본적으로 하루
  ret = 1;

  // 상하좌우 탐색 후, 최대값을 Memoization
  for (int i = 0; i < 4; i++) {
    int nextY = y + nextTo[i][0], nextX = x + nextTo[i][1];

    if (0 <= nextY && nextY < n && 0 <= nextX && nextX < n && map[y][x] < map[nextY][nextX])
      ret = max(ret, 1 + dfs(nextY, nextX));
  }

  return ret;
}
```
