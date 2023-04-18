// 클래스
// 객체 생성 템플릿 => 객체를 만들기 위해 사용
// 객체 내부의 메소드는 정의할 때 function 안 붙여도 됨.

class Cat {
  // 생성자
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  //메소드
  mew() {
    console.log("야옹~");
    console.log(this.name);
  }

  eat() {
    console.log("밥먹자~");
  }
}

let navi = new Cat("나비", "2");

navi.mew();
navi.eat();

class TV {
  // 갑자기 js의 문법이 바뀌는게 아니라
  // 개발자에게 알려주기 위한 것.

  constructor(name, price, size) {
    this.name = name;
    this.price = price;
    this.size = size;
  }

  getPrice() {
    return this.price;
  }

  // 변수에 직접 접근할 수 있게 두지 않음.
  // 변수는 메서드를 통해 제어.
  setPrice(price) {
    this.price = price;
  }
}

const newTv1 = new TV("aaa tv", 2000, "56inch");
console.log(newTv1.name);
console.log(newTv1.getPrice());
newTv1.setPrice(4000);
console.log(newTv1.getPrice());

// 하위 클래스
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getPrice() {
    return this.price + "만원";
  }
}

// 상속
// 자식은 부모의 것을 모두 사용할 수 있지만
// 부모는 자식의 것 사용 못 함.
class Laptop extends Product {
  constructor(name, price, weight) {
    // 상속받는 부모 클래스 값을 불러옴
    super(name, price);
    this.weight = weight;
  }
}

let laptop = new Laptop("삼성tv", 5000, "55");
console.log(laptop.price);
console.log(laptop.getPrice());
