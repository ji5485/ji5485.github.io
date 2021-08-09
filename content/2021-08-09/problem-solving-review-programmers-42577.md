---
date: '2021-08-09'
title: '프로그래머스#해시 - 전화번호 목록 Review'
categories: ['Algorithm']
summary: '가장 기초적인 자료구조를 다루는 알고리즘 문제는 어떻게 접근해야 하는지에 대한 내용을 담았습니다. / 프로그래머스 전화번호 목록 문제'
thumbnail: './problem-solving-review-programmers-42577.png'
---

### 정확도 테스트만 통과한 첫 풀이 방법

```cpp
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

bool solution(vector<string> phone_book) {
  bool answer = true;

  sort(phone_book.begin(), phone_book.end());

  for (vector<string>::iterator iter = phone_book.begin(); iter + 1 != phone_book.end(); iter++) {
    for (vector<string>::iterator comp = iter; comp != phone_book.end(); comp++) {
      if ((*iter).length() <= (*comp).length()) continue;
      if (*iter == (*comp).substr(0, (*iter).length())) return false;
    }
  }

    return answer;
}
```

처음 위의 방법으로 답안을 제출했을 때에는 절반만 맞았다는 결과를 받았습니다.

정확도 테스트에서는 모두 통과를 했지만, 효율성 테스트에서 절반이 시간 초과로 실패를 하며 결국 통과하지는 못했습니다.

전화번호부 목록의 길이가 최대 백만이기 때문에 시간 제한이 걸려있다면 O(n^2)으로는 절대 테스트를 통과할 수 없기에 어떻게 반복문을 줄일 수 있을지 생각했습니다.

### C++ STL의 sort 함수 정렬 방식

C++ STL에서 제공하는 sort 함수는 문자열 정렬 기능도 포함하고 있습니다.

기본적으로 **문자열은 사전 순서**로 정렬된다고 합니다.

이 부분에 대해 파악하지 못해 반복문을 더 줄이지 못했었습니다.

```cpp
vector<string> str = { "10", "202", "20", "1010", "1011" };
```

그래서 처음에는 위의 벡터를 정렬하면 아래와 같은 결과가 나올 것이라고 생각했었습니다.

```cpp
{ "10", "20", "202", "1010", "1011" }
```

가장 먼저 길이를 기준으로 정렬된 다음, 사전순으로 정렬되는 줄 알고 있었습니다.

그래서 처음에는 이렇게 생각하고 비교 문자열과 같은 길이를 가진 것은 모두 제외한 후, 뒤의 문자열을 모두 비교했습니다.

하지만 sort 함수는 기본적으로 사전순 정렬이기 때문에 아래와 같이 결과가 나옵니다.

```cpp
{ "10", "1010", "1011", "20", "202" }
```

위와 같이 정렬되기 때문에 해당 위치의 전화번호가 바로 뒤의 전화번호의 접두사가 아니라면, 그 뒤의 모든 전화번호의 접두사가 될 수 없습니다.

결국 2중 반복문까지 사용하지 않고 반복문 하나로도 충분히 문제를 해결할 수 있었던 것이죠.

### 효율성 테스트까지 통과한 풀이 방법

```cpp
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

bool solution(vector<string> phone_book) {
    bool answer = true;

    sort(phone_book.begin(), phone_book.end());

    for (vector<string>::iterator iter = phone_book.begin(); iter + 1 != phone_book.end(); iter++) {
        if (*iter == (*(iter + 1)).substr(0, (*iter).length())) return false;
    }

    return answer;
}
```

이렇게 반복문 하나로 해당 위치의 문자열과 바로 다음 위치의 문자열을 비교하면 효율성 테스트까지 통과할 수 있습니다.
