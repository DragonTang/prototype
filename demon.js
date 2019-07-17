function A(name, color) {
  this.name = name;
  this.color = color;
}

A.prototype.getColor = function() {
  return this.color;
};

A.prototype.getName = function() {
  return this.name;
}

A.sayHello = function() {
  console.log('Hello World!');
};

function B(name, color, type) {
  A.call(this, name, color);
  this.type = type;
}

B.prototype.getType = function() {
  return this.type;
};

Object.setPrototypeOf(B.prototype, A.prototype);
Object.setPrototypeOf(B, A);

let b = new B('Tony', 'yellow', 'man');

console.log(b.name);
console.log(b.color);
console.log(b.getType());
console.log(b.getColor());

B.sayHello();
