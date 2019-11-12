class Car {
  constructor(owner = "Unknown Owner", name = "Unknown Name") {
    this.owner = owner;
    this.name = name;
  }

  drive() {
    console.log(
      `The ${this.name} car owned by ${this.owner} drives on the road)`
    );
  }

  getOwner() {
    return this.owner;
  }

  getBrand() {
    return this.name;
  }
}

const myCar = new Car("Elon", "Tesla Model S");

console.log(myCar);

myCar.drive();

console.log(myCar.getOwner());

class SportsCar extends Car {
  constructor({ owner, name, color, price, engine }) {
    super(owner, name);
    this.color = color;
    this.price = price;
    this.engine = engine;
  }

  getColor() {
    return this.color;
  }

  getPrice() {
    const formattedPrice = new Intl.NumberFormat("en-IDR", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0
    }).format(this.price);

    return formattedPrice;
  }

  getEngine() {
    return this.engine;
  }
}

const coolCar = new SportsCar({
  owner: "Starman",
  name: "Tesla Roadster",
  color: "Red",
  price: "200000",
  engine: "Electric"
});

console.log(coolCar);

coolCar.drive();

console.log(coolCar.getColor());

console.log(coolCar.getPrice());

stopWatch

class Stopwatch {
  constructor(start, stop) {
    this.start = start;
    this.stop = stop;
  }
  setStart(startTime) {
    this.start = startTime;
  }

  setStop(stopTime) {
    this.start = stopTime;
  }

  getStart() {
    return this.start;
  }
  getStop() {
    return this.stop;
  }
  getDuration() {
    const duration = this.stop - this.start;
    return `${duration} ms`;
    console.log(this.start);
    console.log(this.stop);
    console.log(duration);
  }
}
let setStartTimeFull;
let setStopTimeFull;
let setStartTime;
let setStopTime;

function getStartTime() {
  event.preventDefault();

  let d = new Date();
  setStartTimeFull = d;
  setStartTime = d.toLocaleTimeString();
  document.getElementById("startTime").value = setStartTime;
  return setStartTime;
}

function getStopTime() {
  event.preventDefault();

  let d = new Date();
  setStopTimeFull = d;
  setStopTime = d.toLocaleTimeString();
  document.getElementById("stopTime").value = setStopTime;
  return setStopTime;
}

function getStopwatchDuration() {
  event.preventDefault();
  const newStopwatch = new Stopwatch(setStartTimeFull, setStopTimeFull);
  newStopwatch.getDuration();
  document.getElementById("durationTime").value = newStopwatch.getDuration();
}

startStopwatch.onclick = getStartTime;
stopStopwatch.onclick = getStopTime;
stopwatchDuration.onclick = getStopwatchDuration;
