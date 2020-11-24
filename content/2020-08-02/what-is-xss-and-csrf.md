---
date: '2020-08-02'
title: 'What is XSS and CSRF?'
categories: ['Backend', 'Security']
summary: '오픈소스 웹 애플리케이션 보안 프로젝트 OWASP에서 선정한 웹 취약점에 항상 이름을 올리는 XSS와 CSRF은 무엇이고, 해당 해킹 기법에 대한 조치 방법으로는 무엇이 있을까?'
thumbnail: './abc_copy.png'
---

## What is Cross-Site Scripting?

악의적인 사용자가 공격 대상 홈페이지에 악성 스크립트를 주입하는 웹 해킹 기법

로그인된 사용자의 쿠키나 토큰 같은 개인 정보를 탈취하거나 비정상적인 기능을 수행하게 하는 공격 기법

경우에 따라 시스템 전체에도 피해를 끼칠 수 있는 공격 기법

공격 방법에 따라서 Stored XSS와 Reflected XSS로 나뉨

1. Stored XSS

   가장 많이 사용되는 XSS 해킹 방법

   악성 스크립트를 게시판이나 댓글 등에 저장시켜 사용자가 해당 페이지에 접근할 시에 실행되는 방식

2. Reflected XSS

   일반적으로 URL Parameter에 악성 스크립트를 삽입하는 해킹 방법

   스크립트를 서버에 저장하지 않고 그 즉시 만드는 방법

   브라우저 자체에서 필터링하는 경우가 많음

## What is Cross-Site Request Forgery?

사용자가 자신의 의지와는 무관하게 공격자가 의도한 행위를 특정 웹사이트에 요청하게 하는 웹 해킹 기법

즉, 악의적인 사용자가 희생자의 권한을 도용하여 특정 요청을 실행하는 해킹 방법

해당 웹사이트가 아닌 외부 피싱 사이트에서도 공격이 가능하다는 점이 특징

## Protection Method for Cross-Site Scripting

1. 사용자의 개인 정보를 쿠키에 담지 않음
2. 사이트에서 필요한 일부 태그를 제외한 모든 태그를 이스케이프 처리
3. 서버에서 클라이언트로 보내준 문자를 인코딩하여 출력

## Protection Method for Cross-Site Request Forgery?

1. Referrer 검증 - 서버에서 Request의 Referrer를 확인하여 Domain이 일치하는 지 확인
2. Security Token 사용 - 사용자 세션에 난수값을 저장하고 요청을 할 때마다 토큰 값 검사
