---
date: '2021-03-19'
title: 'BOJ#2468 - 안전 영역 Review'
categories: ['Algorithm', 'DFS']
summary: 'DFS 알고리즘 문제는 어떻게 접근해야 풀 수 있을지에 대한 내용을 담았습니다. / Baekjoon 2468번 안전 영역 문제'
thumbnail: './problem-solving-review-2468.png'
---

### 풀이 방법

2468번 안전 영역 문제는 일반적인 DFS 알고리즘 문제여서 쉬운 편에 속하지만, 조건을 제대로 읽어보지 않으면 쉽게 헤맬 수 있는 문제였습니다.

단순히 DFS를 반복하여 풀 수 있지만, 비가 오지 않는 경우도 있다는 것에 주의해야 합니다.

그 부분을 제외하면 모든 영역 중에서의 최소값부터 최대값까지 영역을 찾는 알고리즘을 반복하면 됩니다.

자세한 풀이 과정은 아래와 같습니다.

1. 모든 영역의 높이를 입력받으며 최소값과 최대값을 구한다.
2. 최소값에서 1을 뺀 숫자를 높이로 삼아 물에 잠기지 않는 영역의 개수를 구한다.
3. 높이를 1칸 올린 후, 해당 값을 기준으로 물에 잠기지 않는 영역의 개수를 구한다.
4. 이전에 구한 값과 새로 구한 값을 비교해 최대값을 구한다.
5. 3번부터 4번까지 높이가 영역 높이의 최대값까지 반복한다.

최초로 물에 잠기지 않는 영역의 개수를 구할 때 영역 높이의 최소값에서 1을 뺀 값을 높이로 지정하는 이유가 비가 오지 않는 경우가 존재하기 때문입니다.

만약 이를 고려하지 않을 경우에는 모든 영역의 높이가 동일한 상황이 반례가 됩니다.

물에 잠기지 않는 영역의 최대 개수가 1이 되어야 하지만, 실제 값은 0이 나오기 때문입니다.

따라서 처음에는 최소값에서 1을 뺀 값을 높이로 지정해 영역 개수를 구해야합니다.

아래는 해당 방법을 코드로 구현한 것입니다.

```cpp
#include <iostream>
#include <algorithm>
#include <cmath>
using namespace std;

int n, visited[100][100];

void dfs(int y, int x);

int main() {
  int minimum = numeric_limits<int>::max(), maximum = numeric_limits<int>::min(), result = 0;

  scanf("%d", &n);

  int map[n][n];

  for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
      scanf("%d", &map[i][j]);

      minimum = min(minimum, map[i][j]);
      maximum = max(maximum, map[i][j]);
    }
  }

  for (int i = minimum - 1; i < maximum; i++) {
    fill(&visited[0][0], &visited[99][100], 1);

    for (int j = 0; j < n; j++) {
      for (int k = 0; k < n; k++) {
        if (map[j][k] <= i) visited[j][k] = 0;
      }
    }

    int val = 0;

    for (int j = 0; j < n; j++) {
      for (int k = 0; k < n; k++) {
        if (!visited[j][k]) continue;

        dfs(j, k);
        val++;
      }
    }

    result = max(result, val);
  }

  printf("%d \n", result);

  return 0;
}

void dfs(int y, int x) {
  int nextTo[4][2] = { { 1, 0 }, { 0, 1 }, { -1, 0 }, { 0, -1 } };

  visited[y][x] = 0;

  for (int i = 0; i < 4; i++) {
    int nextY = y + nextTo[i][0], nextX = x + nextTo[i][1];

    if (0 <= nextY && nextY < n && 0 <= nextX && nextX < n && visited[nextY][nextX] != 0)
      dfs(nextY, nextX);
  }

  return;
}
```
