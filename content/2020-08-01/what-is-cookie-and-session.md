---
date: '2020-08-01'
title: '쿠키(Cookie)와 세션(Session)은 무엇일까?'
categories: ['Web', 'Security', 'Authentication']
summary: 'HTTP 통신의 특성이자 약점을 보완하기 위해 사용하는 쿠키(Cookie)와 세션(Session)은 각자 어떤 역할을 하고, 왜 사용하는지 알아보자.'
thumbnail: './what-is-cookie-and-session.png'
---

## 왜 쿠키와 세션에 대해 알아야 할까?

### HTTP 통신의 특성

HTTP 통신은 다음과 같은 특성을 가지고 있습니다.

1. Connectionless

   클라이언트와 서버 간의 HTTP 통신은 한 번 이루어지고 나서 바로 끊어지는 독립적인 성격을 가지고 있습니다.

   따라서 두 플랫폼 사이에는 어떠한 연결 고리도 존재하지 않으며, 그 전에 이루어진 HTTP 통신에 대해서는 알 방법이 없습니다.

   이로 인해 서버에 가해지는 부담이 많이 줄어들어 리소스 낭비를 방지할 수 있습니다.

   다만, HTTP 1.1버전 부터는 keep-alive라는 커넥션을 유지하여 요청을 재사용하는 옵선이 기본값으로 설정되어 있습니다.

2. Stateless

   HTTP 통신은 State(상태)를 가지고 있지 않습니다.

   서버에서는 어떠한 클라이언트가 보낸 요청인지 분간할 수 없기 때문에 통신을 위해서는 해당 요청에 필요한 모든 데이터를 다시 보내야 합니다.

   즉, 매번 통신을 할 때마다 인증이 필요하다는 뜻입니다.

### 문제점

이런 HTTP 통신의 특성으로 인해 만약 사용자 인증 기능을 구현한 상태라면, 다른 페이지로 이동하거나 새로 고침을 하는 경우마다 인증과 관련된 통신을 진행하여야 합니다.

심지어 계정과 묶여있는 데이터를 요청한 경우에도 항상 인증과 관련된 통신이 수반되어야만 문제 없이 처리가 가능합니다.

이로 인해 오히려 더 많은 리소스를 낭비할 가능성이 존재하기 때문에 쿠키와 세션에 대해 알아야 합니다.

## 쿠키 (Cookie)

### 정의

쿠키는 서버가 클라이언트 단에 전송하는 Key-Value 쌍의 작은 데이터 조각입니다.

브라우저에서는 서버로부터 받은 쿠키값을 저장해 놓았다가, 서버에 같은 요청을 보낼 때 이 값을 헤더에 담아 같이 보내게 됩니다.

### 사용 예시

인증과 관련하여 쿠키를 사용하는 경우를 예시로 들 수 있습니다.

이 경우에는 사용자의 개인 정보를 쿠키에 저장하게 되는데, 처음으로 인증을 시도하면 서버에서는 쿠키 값을 클라이언트로 보내게 됩니다.

브라우저에서는 쿠키값을 저장하게 되고, 다음 인증 시에는 쿠키값을 HTTP 헤더에 담아 보내게 됩니다.

하지만 예시를 위해 다음과 같은 과정을 설명한 것이지, 통신 중에 네트워크 상에서 탈취될 가능성이 존재하기 때문에 사용자 정보를 쿠키에 저장하지 않습니다.

### 사용 목적

1. 세션 관리 - 서버에 저장해야 할 데이터 관리
2. 개인 맞춤 데이터 - 테마 등과 같은 세팅값
3. 트래킹 - 사용자의 행동을 기록 및 분석

## 세션 (Session)

### 정의

세션은 여러 페이지에 걸쳐서 사용되는 클라이언트의 상태 정보를 일정하게 유지시키는 기술을 뜻합니다.

보통 웹 서버에 접속한 다음부터 브라우저를 닫아 서버와의 연결을 끊는 시점까지를 세션이라고 합니다.

주로 보안에 취약한 쿠키를 보완해주는 역할을 하고 있습니다.

### 세션 수립 과정

먼저 클라이언트가 서버와의 연결을 수립하고, 인증을 위한 요청을 전송하게 됩니다.

클라이언트로부터 요청을 받은 서버는 세션을 생성하여 저장하고, 클라이언트로 세션 ID 값을 전송합니다.

그리고 클라이언트는 서버로부터 받은 세션 ID 값을 쿠키에 저장하게 되어, HTTP 통신을 할 때마다 세션 ID를 헤더에 담아 같이 전송합니다.

### 특징

사용자의 데이터를 담는 쿠키는 통신 중 탈취당하면 쉽게 개인 정보가 유출될 수 있는 쿠키와는 다르게, 세션은 서버측에 저장된 데이터를 사용할 뿐더러 유일하게 클라이언트에 저장하는 세션 ID는 탈취당하더라도 역으로 정보 확인이 불가능합니다.

이와 같이 네트워크 상으로 사용자의 개인 정보가 흘러 가지 않아 쿠키보다 보안성은 높습니다.

하지만, 사용자의 수가 많은 대형 서비스의 경우에는 세션 정보까지 관리해야하는 서버에 부담이 갈 수 있다는 단점이 존재합니다.

---

## Source

- HTTP 쿠키

  [https://developer.mozilla.org/ko/docs/Web/HTTP/Cookies](https://developer.mozilla.org/ko/docs/Web/HTTP/Cookies)

- HTTP 세션

  [https://developer.mozilla.org/ko/docs/Web/HTTP/Session](https://developer.mozilla.org/ko/docs/Web/HTTP/Session)

- 쿠키(Cookie), 세션(Session) 특징 및 차이

  [https://hahahoho5915.tistory.com/32](https://hahahoho5915.tistory.com/32)
