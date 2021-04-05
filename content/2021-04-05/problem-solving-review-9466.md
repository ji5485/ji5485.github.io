---
date: '2021-04-05'
title: 'BOJ#9466 - 텀 프로젝트 Review'
categories: ['Algorithm', 'DFS']
summary: 'DFS 알고리즘 문제는 어떻게 접근해야 풀 수 있을지에 대한 내용을 담았습니다. / Baekjoon 9466번 텀 프로젝트 문제'
thumbnail: './problem-solving-review-9466.png'
---

### 풀이 방법

텀 프로젝트 문제는 생각보다 코드가 매우 간결해 놀랐던 문제였습니다.

풀이 과정은 아래와 같습니다.

1. 처음 노드부터 방문 처리 후, 해당 노드를 vector에 추가

   visited 배열에서 해당 노드 자리의 값을 1로 설정한 후, 노드의 인덱스를 vector에 추가합니다.

2. 해당 노드와 연결된 노드를 따라 1번 과정을 동일하게 수행

   연결된 노드에서 1번 과정을 그대로 수행하기 때문에, 마찬가지로 visited 배열에 방문 처리 후, vector에 추가합니다.

3. 만약 방문 처리된 노드를 만났다면, 이는 하나의 그룹을 형성했다는 의미이므로 벡터에서의 해당 노드 앞에 있는 모든 노드의 수를 반환합니다.

   해당 과정은 아래에서 더 자세하게 살펴보겠습니다.

4. 모든 노드가 방문 처리될 때까지 반복합니다.

### 첫 번째 예시

글로만 봐서는 정확하게 어떻게 과정이 이루어지는지 잘 모를 수 있습니다.

이제 그림으로 자세하게 살펴보겠습니다.

우선, 저희는 시작 노드와 탐색 경로 vector를 매개변수로 받는 함수를 정의했다고 가정해봅시다.

대략 아래와 같은 형태일 것이라고 생각하고 봐주시면 될 것 같습니다.

```cpp
int dfs(int student, vector<int> &path)
```

그리고 저희는 아래와 같이 학생들이 각자 선택한 희망 학생을 입력받았다고 가정해봅시다.

<br />

![problem-solving-review-9466-1.png](problem-solving-review-9466-1.png)

<br />

가장 먼저, 1번 학생부터 탐색을 시작하게 됩니다.

따라서 1번 노드를 방문 처리 후, vector에 해당 노드를 추가하기 때문에 dfs 함수 내에서는 아래와 같은 작업이 수행됩니다.

```cpp
visited[1] = 1; // visited = [1, 0, 0, 0]
path.push_back(1); // path = { 1 }
```

이제 1번 학생이 선택한 2번 학생을 탐색합니다.

1번 노드에 한 작업을 그대로 수행하기 때문에 아래와 같은 작업이 수행됩니다.

```cpp
visited[2] = 1; // visited = [1, 1, 0, 0]
path.push_back(2); // path = { 1, 2 }
```

다음은 3번 학생입니다.

마찬가지로 위의 과정과 동일하게 적용됩니다.

```cpp
visited[3] = 1; // visited = [1, 1, 1, 0]
path.push_back(3); // path = { 1, 2, 3 }
```

다음은 4번 학생입니다.

여기에서도 동일한 작업을 수행합니다.

```cpp
visited[4] = 1; // visited = [1, 1, 1, 1]
path.push_back(4); // path = { 1, 2, 3, 4 }
```

마지막으로 4번 학생이 선택한 2번 학생으로 다시 돌아옵니다.

하지만 2번 학생은 이미 탐색이 완료된 상태이므로, 위의 풀이 방법에서 설명한 방문 처리된 노드를 만났을 경우에 대한 작업을 수행해야 합니다.

여기에서는 path 벡터에 2번 노드가 존재하기 때문에 하나의 그룹이 형성된 상태입니다.

그럼 어떻게 그룹이 형성되었다는 것을 알 수 있을까요?

path는 지금까지 방문한 노드를 순서대로 저장한 벡터입니다.

따라서 해당 알고리즘은 **1 → 2 → 3 → 4 → 2** 순서대로 탐색을 진행했다는 것인데, 2번에서 함수가 끝났기 때문에 2, 3, 4번 노드가 한 그룹을 이루었다는 것을 알 수 있습니다.

그러기 때문에 1번 노드만 팀을 이루지 못했는데, path 벡터에서 2번 노드의 위치 전까지의 모든 노드 개수인 1을 반환하게 됩니다.

### 두 번째 예시

그럼 만약 아래와 같은 입력값을 받는다면 어떻게 될까요?

<br />

![problem-solving-review-9466-2.png](problem-solving-review-9466-2.png)

<br />

쉽게 말해 4번 학생은 자기 자신을 선택한 것입니다.

이 상황에서는 위의 예시에서 4번 노드를 탐색하는 순간까지는 동일하게 적용됩니다.

하지만 그 다음 과정이 달라집니다.

4번 노드를 방문 처리하고 path 벡터에 추가한 후, 다시 4번 노드를 탐색하는 함수를 실행하게 되면 어떻게 될까요?

path 벡터의 값은 { 1, 2, 3, 4 }가 되므로, 4번 노드 앞에 있는 모든 노드의 수인 3을 반환합니다.

실제로 4번 혼자 팀을 구성하였고, 나머지 1, 2, 3번 학생은 팀을 구성하지 못했기 때문에 올바른 결과가 출력됩니다.

### 풀이 코드

아래의 코드는 위의 풀이 과정을 코드로 작성한 것입니다.

```cpp
#include <iostream>
#include <algorithm>
using namespace std;

int n, students[100000], visited[100000];
int dfs(int student, vector<int> &path);

int main() {
  int t, result;

  scanf("%d", &t);

  for (int i = 0; i < t; i++) {
    scanf("%d", &n);
    fill(&visited[0], &visited[n], 0);
    result = 0;

    for (int j = 0; j < n; j++) {
      scanf("%d", &students[j]);
      students[j] -= 1;
    }

    for (int j = 0; j < n; j++) {
      vector<int> path;
      result += dfs(j, path);
    }

    printf("%d \n", result);
  }
}

int dfs(int student, vector<int> &path) {
  if (visited[student]) {
    vector<int>::iterator idx = find(path.begin(), path.end(), student);
    return distance(path.begin(), idx);
  }

  visited[student] = 1;
  path.push_back(student);

  return dfs(students[student], path);
}
```
