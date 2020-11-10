---
date: '2020-07-29'
title: 'Transition To Micro Service Architecture'
categories: ['Web', 'Architecture', 'Backend']
summary:
  [
    '마이크로서비스 아키텍처가 무엇이고 어떤 특징을 가지는가?',
    '마이크로서비스를 적용했을 때의 장단점은 무엇인가?',
    '이 아키텍처에서 각 컴포넌트가 통신하는 방법은 뭐가 있을까?',
  ]
thumbnail: './abc_copy.png'
---

## What is Micro Service Architecture?

- 작고, 독립적으로 배포 가능하며 개별의 기능을 수행하는 프로덕트들로 구성된 시스템
- 하나의 큰 어플리케이션을 여러 개의 작은 어플리케이션으로 쪼개어 변형과 조합이 가능하도록 한 아키텍쳐

## Why use Micro Service Architecture?

- 각각의 서비스는 독립적으로 개발 및 배포가 가능하여 유연한 서비스 운영이 가능함.
- 소비자의 피드백을 빠르게 수용하여 반영할 수 있음.
- 높은 확장성을 가지고 있어 빠르게 성장하는 대규모 서비스에 적합함.

## Problems of Monolithic Architecture

- 다양한 기능이 추가될수록 서비스의 복잡도 증가
- 작은 기능 하나의 배포를 위해 전체 서비스 재배포 필요
- 서비스 배포/빌드/테스트 시간이 오래 걸림
- 작은 버그 하나가 전체 서비스에 영향을 끼칠 가능성이 큼
- 높은 모듈간의 결합도로 인한 유지 보수의 어려움
- 시스템 확장이 유연하지 못 함

## Pros and Cons of Micro Service Architecture

### Advantages

- 단위 서비스에 집중하기 수월함으로 인한 높은 생산성
- 단위 서비스의 복잡도가 많이 낮아짐
- 트래픽이 높은 서비스에 한해서 독립적으로 서비스 스케일 조정이 가능함
- 서비스 특징에 맞는 개발 스택 사용 가능 및 유연한 신기술 적용

### Disadvantages

- 분산 환경이기 때문에 아키텍쳐 구성 비용 관리 및 모니터링 대상 증가
- 데이터베이스 트랜잭션 또는 테스트와 같은 문제로 인한 설계의 어려움

## Communications Pattern for Each Components in Service

1. API Gateway Pattern

   클라이언트로 받은 요청을 API Gateway를 통해 하위 컴포넌트로 전달하는 방식

   API Gateway를 통해 Authentication이나 Logging 작업과 같은 공통 작업을 처리

   Encapsulation의 장점이 있어 비즈니스 로직 노출의 최소화 가능

2. Event Driven Pattern

   Event Store를 통해 각 컴포넌트에서 이벤트 발행 및 구독을 통한 통신

   비즈니스의 흐름에 따라 서비스 기능 수행 가능

   비동기적인 로직 처리를 통한 응답 지연 시간의 감소 가능

   데이터베이스 트랙잭션이 용이함
