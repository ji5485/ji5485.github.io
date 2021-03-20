---
date: '2021-03-20'
title: 'BOJ#1987 - 알파벳 Review'
categories: ['Algorithm', 'DFS']
summary: 'DFS 알고리즘 문제는 어떻게 접근해야 풀 수 있을지에 대한 내용을 담았습니다. / Baekjoon 1987번 알파벳 문제'
thumbnail: './problem-solving-review-1987.png'
---

### 풀이 방법

이 문제는 기본적으로 각 위치별로 저장되는 정보가 숫자가 아닌 문자이기 때문에 문자 처리 방법을 알아야 해결할 수 있었습니다.

또, 비트마스크의 개념과 사용 방법을 알고 있다면 사용된 문자를 손쉽게 가려낼 수 있었습니다.

위의 특징을 제외한다면 알파벳 문제는 기본적인 DFS 알고리즘 문제에 해당됩니다.

풀이 과정은 아래와 같습니다.

1. 입력받은 R과 C만큼 문자를 입력받아 2차원 배열에 저장
2. 좌측 상단에서 DFS 알고리즘을 구현한 함수를 호출
3. 비트마스크를 통해 사용한 알파벳 저장

   해당 자리의 알파벳을 사용했다는 것은 결국 이 자리를 지났다는 것을 의미하기 때문에 방문 여부를 저장하는 배열이 불필요함.

4. 각 다음 방향 위치가 각각 범위 내에 있는지, 다음 자리의 알파벳이 사용되었는지 탐색
5. 다음 위치가 범위 내에 있으면서, 사용되지 않은 알파벳이 있는 경우 DFS 알고리즘 호출
6. DFS 알고리즘 함수 탈출 전, 기존 결과값과 함수 호출 횟수를 비교해 최대값 지정
7. 더 이상 진행할 수 없을 때까지 3 ~ 6번 과정 반복

위의 방식대로 진행하기 위해서는 DFS 알고리즘 함수에 위치값뿐만이 아닌 사용한 알파벳 정보와 함수 호출 횟수를 같이 전달해주어야 합니다.

이렇게 글로만 봤을 때에는 정확하게 어떻게 흐름이 이어지는지 확인하기 어려울 수 있기 때문에 코드와 함께 확인해보는 것을 추천드립니다.

아래 코드는 위의 방식대로 구현한 것입니다.

```cpp
#include <iostream>
#include <algorithm>
using namespace std;

char map[20][21];
int r, c, result = 0;
void dfs(int y, int x, int used, int val);

int main() {
  scanf("%d %d", &r, &c);

  for (int i = 0; i < r; i++)
    scanf("%s", map[i]);

  dfs(0, 0, 0, 0);

  printf("%d \n", result);

  return 0;
}

void dfs(int y, int x, int used, int val) {
  // 사용된 알파벳 정보 갱신
  used = used | (1 << (map[y][x] - 'A'));
  val++;

  int nextTo[4][2] = { { 1, 0 }, { 0, 1 }, { -1, 0 }, { 0, -1 } };

  for (int i = 0; i < 4; i++) {
    int nextY = y + nextTo[i][0], nextX = x + nextTo[i][1];
    // 다음 자리의 알파벳이 사용되었는지에 대한 값
    int isUsedNextAlpha = used & (1 << (map[nextY][nextX] - 'A'));

    if (0 <= nextY && nextY < r && 0 <= nextX && nextX < c && !isUsedNextAlpha)
      dfs(nextY, nextX, used, val);
  }

  result = max(result, val);

  return;
}
```
