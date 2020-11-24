---
date: '2020-08-08'
title: 'IoC Container in Spring'
categories: ['Web', 'Backend']
summary: '오픈소스 웹 애플리케이션 보안 프로젝트 OWASP에서 선정한 웹 취약점에 항상 이름을 올리는 XSS와 CSRF은 무엇이고, 해당 해킹 기법에 대한 조치 방법으로는 무엇이 있을까?'
thumbnail: './abc_copy.png'
---

## What is Container?

컨테이너는 보통 인스턴스의 생명주기를 관리하며, 생성된 인스턴스들에게 추가적인 기능을 제공하도록하는 것이라 할 수 있다. 즉, 작성한 코드의 처리과정을 위임받은 독립적인 존재라고 생각하면 된다. 컨테이너는 적절한 설정만 되어있다면 누구의 도움없이도 프로그래머가 작성한 코드를 스스로 참조한 뒤 알아서 객체의 생성과 소멸을 컨트롤해준다.

## Types of Spring Container

1. BeanFactory

   DI의 기본사항을 제공하는 가장 단순한 컨테이너

   Bean을 생성하고 분배하는 클래스

   Bean의 정의는 즉시 로딩하지만, Bean 자체가 필요하게 되기 전까지는 인스턴스화를 하지 않음

   ```java
   BeanFactory factory = new XmlBeanFactory(new FileInputStream("bean.xml"));
   MyBean myBean = (Mybean) factory.getBean("myBean");
   ```

   getBean 메소드가 호출될 시에 Bean이 인스턴스화되며 특성을 설정하기 시작함 (Lazy Loading)

2. ApplicationContext

   Bean Factory와 유사한 기능을 제공하지만 국제화가 지원되는 텍스트 메시지 관리, 더 포괄적인 파일 자원 로드 방법 제공, Listener로 등록된 Bean에게 이벤트 발생을 알리는 등의 더 많은 기능을 제공

   ApplicationContext는 BeanFactory를 상속받고 있기 때문에 대부분의 경우 BeanFactory보다 ApplicationContext 사용을 권장

   컨텍스트 초기화 시점에 모든 Singleton Bean을 미리 로드한 후 애플리케이션 기동 후에 Bean을 바로 사용할 수 있게 지연 없이 얻을 수 있음

## What is IoC Container?

IoC란 Inversion of Control의 약어이며, 이는 즉 제어권의 역전을 의미한다.

제어권의 역전이라는 것은 외부에서 제어를 한다는 말이고 다시 말해, 객체의 생성에서부터 생명주기의 관리까지 모든 객체에 대한 제어권이 바뀌었다는 것을 뜻한다.

## Relationship IoC with DI(Dependency Injection)

우선 Dependency Injection이란 외부에서 객체를 생성하여 생성자나, 메소드를 통해 주입해주는 것이다.

Spring Framework에서 다루는 IoC Container와 DI는 다른 개념이 아니다.

Dependency Injection은 IoC를 구현하기 위한 방법 중 하나이며, 다시 말해 DI는 IoC의 하위 개념이다.
