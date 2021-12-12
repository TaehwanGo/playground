# SOLID

## 1. Single responsibility principle

- 단일 책임 원칙
- 모듈, 클래스, 함수는 하나의 파트에서만 책임을 가져야 한다는 원칙

- 객체는 단 하나의 책임만 가져야 한다

```ts
// bad
class Calculator {
  add(a, b);
  sub(a, b);
  mul(a, b);
  div(a, b);
  playMusic();
}
```

- Calculator라는 클래스에 playMusic을 추가하는 것은 단일 책임 원칙에 위배 됨

```ts
// good
class Calculator {
  add(a, b);
  sub(a, b);
  mul(a, b);
  div(a, b);
}

class MusicPlayer {
  play();
}
```

- 새로운 클래스를 선언하여 메서드를 구현

## 2. Open / closed principle

- 개방 폐쇄 원칙
- 소프트웨어 요소는 확장에는 열려 있으나 변경에는 닫혀 있어야 한다

```ts
// bad
class Light {
  on() {
    console.log("빨간색 불이 켜졌습니다");
  }
}
```

- on 메서드는 빨간색 불을 키지만 파란색 불이 켜지도록 바꾸고 싶다면?

```ts
// good
interface Light {
  on();
}

class BlueLight implements Light {
  on() {
    console.log("파란색 불이 켜졌습니다");
  }
}

class RedLight implements Light {
  on() {
    console.log("빨간색 불이 켜졌습니다");
  }
}
```

- Light 인터페이스를 통해 새로운 조명이 추가되면 Light의 구현체를 만들어 확장

## 3. Liskov substitution principle

- 리스코프 치환 원칙
- 프로그램의 객체는 프로그램의 정확성을 깨뜨리지 않으면서 하위 타입의 인스턴스로 바꿀 수 있어야 한다
- 자식 클래스는 자신의 부모 클래스의 역할을 대체할 수 있어야 한다

```ts
// e.g.,
abstract class Animal {
  abstract sound();
}

class Cat extends Animal {
  sound() {
    console.log("meow");
  }
}
```

## 4. Interface segregation principle

- 인터페이스 분리 원칙
- 특정 클라이언트를 위한 인터페이스 여러개가 범용 인터페이스 하나보다 낫다
- 거대한 인터페이스 보다 구체적인 여러 인터페이스가 낫다

```ts
// bad
interface Phone {
  call();
  sms();
  internet();
}

class OldPhone implements Phone {
  call();
  sms();
  internet(); // old phone에서 지원하지 않는데 구현해야되는 오류가 생김
}

class NewPhone implements Phone {
  call();
  sms();
  internet();
}
```

```ts
// good
interface Call {
  call();
}

interface SMS {
  sms();
}

interface Internet {
  internet();
}

class OldPhone implements Call, SMS {
  call();
  sms();
}

class NewPhone implements Call, SMS, Internet {
  call();
  sms();
  internet();
}
```

## Dependency inversion principle

- 의존관계 역전 원칙
- 프로그래머는 추상화에 의존해야지, 구체화에 의존하면 안된다
  - 의존성 주입(Dependency injection)
- 고수준 모듈은 저수준 모듈의 구현에 의존해서는 안된다

```ts
// bad
class Car {
  tire: SnowTire = new SnowTire();
}

class SnowTire {}
```

- Car의 타이어를 바꾸기 위해선 새로운 타이어 클래스를 만들고 Car의 코드들도 모두 수정해야 함

```ts
// also bad
class Car {
  tire: Tire = new SnowTire();
}

interface Tire {}

class SnowTire implements Tire {}
```

- 여전히 Car 클래스는 SnowTire에 의존하고 있음

```ts
// good : 의존성 주입(Dependency Injection)
class Car {
  tire: Tire;

  constructor(tire: Tire) {
    this.tire = tire;
  }
}

interface Tire {}

class SnowTire implements Tire {}

const snowTireCar = new Car(new SnowTire());
```

## 참고

- [위키 백과 SOLID(객체 지향 설계](<https://ko.wikipedia.org/wiki/SOLID_(%EA%B0%9D%EC%B2%B4_%EC%A7%80%ED%96%A5_%EC%84%A4%EA%B3%84)>)
- https://wlswoo.tistory.com/51
