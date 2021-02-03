---
date: '2021-02-03'
title: 'BOJ#1260 - DFS와 BFS Review 및 기초 개념'
categories: ['Algorithm', 'DFS', 'BFS']
summary: 'DFS와 BFS 알고리즘 문제는 어떻게 접근해야 풀 수 있을지와 기초 개념에 대한 내용을 담았습니다. / Baekjoon 1260번 DFS와 BFS 문제'
thumbnail: './problem-solving-review-1260.png'
---

### 최초로 AC 받은 코드

```cpp
#include <iostream>
#include <vector>
#include <set>
#include <queue>
#include <algorithm>
using namespace std;

void dfs(vector<set<int>> &graph, int start, vector<bool> &visited);
void bfs(vector<set<int>> &graph, int start, vector<bool> &visited);

int main() {
  int n, m, v, a, b;

  scanf("%d %d %d", &n, &m, &v);

  vector<set<int>> vec(n + 1, set<int>());
  vector<bool> visited(n + 1, false);

  for (int i = 0; i < m; i++) {
    scanf("%d %d", &a, &b);

    vec[a].insert(b);
    vec[b].insert(a);
  }

  dfs(vec, v, visited);
  printf("\n");
  fill(visited.begin(), visited.end(), false);
  bfs(vec, v, visited);

  return 0;
}

void dfs(vector<set<int>> &graph, int start, vector<bool> &visited) {
  visited[start] = true;
  printf("%d ", start);

  for (set<int>::iterator it = graph[start].begin(); it != graph[start].end(); it++) {
    if (!visited[*it]) dfs(graph, *it, visited);
  }

  return;
}

void bfs(vector<set<int>> &graph, int start, vector<bool> &visited) {
  queue<int> q;

  q.push(start);
  visited[start] = true;

  while (!q.empty()) {
    int tmp = q.front();
    q.pop();
    printf("%d ", tmp);

    for (set<int>::iterator it = graph[tmp].begin(); it != graph[tmp].end(); it++) {
      if (visited[*it]) continue;

      q.push(*it);
      visited[*it] = true;
    }
  }

  return;
}
```

다른 BFS, DFS 풀이 코드와는 다르게 여기에서는 Set Container를 사용해보았다.

대부분 vector 배열을 선언하여 해당 인덱스에 연결되어있는 노드값을 추가하는데, 이 부분에서 단순히 중복을 없애보자는 생각으로 vector 배열 대신 set를 여러 개 담은 vector 변수를 정의했다.

중복이 없어진다는 점에서 쓸모없이 같은 노드를 확인한다는 문제점은 충분히 해결이 되었지만 과연 이 방법이 시간적으로나 공간적으로 효율적인지 의문이 들었다.

### Set Container을 사용한 방법은 더 효율적일까?

결론부터 말하자면 아니라고 생각한다.

우선 시간적으로 생각해본다면 Set Container를 사용하는 방법과 Vector Container 배열 형태를 사용하는 방법에서는 크게 시간 차이가 나지 않는 것 같다.

(1, 2)와 같은 형태가 1000개 정도 들어오는 극단적인 경우가 아닌 이상, 데이터를 입력하는 과정, 정렬하는 과정, 접근하는 과정 전부 조합하면 비슷비슷 할 것이라고 생각한다.

하지만 공간적으로는 너무나도 크게 차이난다.

Vector Container는 데이터 개수에 따라 가변적으로 그 길이가 늘어나는 자료 구조인데, 군더더기 없이 해당 자료형의 데이터만 배열의 형태로 저장되기 때문에 일반 배열과 메모리 사용량이 거의 비슷하다.

하지만 Set Container는 트리 형태의 자료구조이기 때문에 하나의 노드 안에 여러 데이터가 존재한다.

따라서 그만큼의 메모리를 소모하게 되는데, 이는 Vector Container에서 사용하는 메모리 사용량의 몇 배는 되는 수치였다.

위와 같은 이유로 단지 중복 제거라는 이유로 Set Container를 쓰기에는 꽤나 비효율적인 것 같다.

### DFS (Depth First Search)

DFS 알고리즘은 깊이 우선 탐색이라고 부르고, 그래프에서 깊은 부분을 우선적으로 탐색하는 알고리즘이라고 한다.

이를 위해 주로 스택 자료구조를 사용하며, 다음과 같이 동작한다.

1. 시작 노드를 스택에 추가하고 방문 처리
2. 스택의 최상단 노드에 미방문 인접 노드가 존재하면, 해당 노드를 스택에 추가하고 방문 처리

   만약 미방문 인접 노드가 존재하지 않다면 스택에서 최상단 노드를 제거

3. 2번의 과정을 더 이상 수행할 수 없을 때까지 반복

하지만 실제로는 스택을 사용하지 않아도 되며, 주로 재귀함수를 통해 구현한다.

DFS 동작 과정을 코드로 살펴보면 다음과 같다.

```cpp
void dfs(vector<set<int>> &graph, int start, vector<bool> &visited) {
	// 1. 현재 노드 방문 처리
  visited[start] = true;
  printf("%d ", start);

	// 2. 현재 노드에 미방문 인접 노드 존재시, 해당 노드로 재귀 호출
	// 이를 통해 그래프의 가장 깊숙한 노드까지 방문 처리 가능
  for (set<int>::iterator it = graph[start].begin(); it != graph[start].end(); it++) {
    if (!visited[*it]) dfs(graph, *it, visited);
  }

	// 3. 미방문 인접 노드가 존재하지 않으면 재귀 탈출
  return;
}
```

### BFS (Breadth First Search)

BFS 알고리즘은 너비 우선 탐색이라고 부르고, 그래프 시작 노드에서 가장 가까운 노드부터 탐색하는 알고리즘이라고 한다.

가장 깊숙한 곳에 위치한 노드부터 탐색하는 DFS 알고리즘과는 반대의 개념이다.

따라서 가장 가까운 노드를 추가하고, 방문했던 노드를 제거하기 위해 선입선출의 특징을 가지고 있는 큐 자로구조를 주로 사용한다.

BFS 알고리즘은 다음과 같이 동작한다.

1. 시작 노드를 큐에 추가하고 방문 처리
2. 큐에서 노드를 꺼내고, 꺼낸 노드의 미방문 인접 노드를 모두 큐에 추가하고 방문 처리
3. 2번의 과정을 더 이상 수행할 수 없을 때까지 반복

BFS 동작 과정을 코드로 살펴보면 다음과 같다.

```cpp
void bfs(vector<set<int>> &graph, int start, vector<bool> &visited) {
  queue<int> q;

	// 1. 시작 노드를 큐에 추가하고 방문 처리
  q.push(start);
  visited[start] = true;

	// 2번의 과정을 더 이상 수행할 수 없을 때까지 반복
  while (!q.empty()) {
		// 큐에서 노드를 꺼내고 방문 노드 출력
    int tmp = q.front();
    q.pop();
    printf("%d ", tmp);

		// 꺼낸 노드의 미방문 인접 노드를 모두 큐에 추가하고 방문 처리
    for (set<int>::iterator it = graph[tmp].begin(); it != graph[tmp].end(); it++) {
      if (visited[*it]) continue;

      q.push(*it);
      visited[*it] = true;
    }
  }

	// 탐색이 모두 끝나면 함수 탈출
  return;
}
```
