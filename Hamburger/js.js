class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }
  addTopping(topping) { // Добавить добавку
    this.toppings = topping;
  }
  removeTopping(topping) { // Убрать добавку
    this.toppings = [];
  }
  getToppings(topping) { // Получить список добавок
    console.log(this.toppings);

  }

  getSize() { // Узнать размер гамбургера
    console.log(this.size);
  }
  getStuffing() { // Узнать начинку гамбургера
    console.log(this.stuffing);
  }
  calculatePrice() { // Узнать цену
    let sum = 0;
    for (let Size of SizeObj) {
      if (Size.title === this.size) {
        sum += Size.price;
      }
    };
    for (let Stuff of StuffingObj) {
      if (Stuff.title === this.stuffing) {
        sum += Stuff.price;
      }
    };
    for (let i = 0; i < this.toppings.length; i++){
      for (let Topping of ToppingObj) {
        if (Topping.title === this.toppings[i]) {
          sum += Topping.price;
        }
      };
    }
    console.log('Цена:',sum);

  }
  calculateCalories() { // Узнать калорийность
    let sum = 0;
    for (let Size of SizeObj) {
      if (Size.title === this.size) {
        sum += Size.calories;
      }
    };
    for (let Stuff of StuffingObj) {
      if (Stuff.title === this.stuffing) {
        sum += Stuff.calories;
      }
    };
    for (let i = 0; i < this.toppings.length; i++) {
      for (let Topping of ToppingObj) {
        if (Topping.title === this.toppings[i]) {
          sum += Topping.calories;
        }
      };
    }
    console.log('Калории:',sum);
  }
  info(){
    this.getSize();
    this.getStuffing();
    this.getToppings();
    this.calculateCalories();
    this.calculatePrice();
  }
}

let SizeObj = [
  {title: 'Маленький', calories: 20, price: 50},
  {title: 'Большой', calories: 40, price: 100}
];
let StuffingObj = [
  {title: 'Сыр', calories: 20, price: 10},
  {title: 'Салат', calories: 5, price: 20},
  {title: 'Картофель', calories: 10, price: 15}
];
let ToppingObj = [
  {title: 'Приправа', calories: 0, price: 15},
  {title: 'Майонез', calories: 5, price: 20}
];

let HamburgerSize = 'Большой';
let HamburgerStuffing = 'Сыр';
let HamburgerTopping = ['Приправа', 'Майонез'];

const MyHamburger = new Hamburger(HamburgerSize, HamburgerStuffing);
MyHamburger.addTopping(HamburgerTopping);
MyHamburger.info();