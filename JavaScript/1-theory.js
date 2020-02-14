'use strict';

class AbstractClass {
  constructor() {
    const proto = Object.getPrototypeOf(this);
    if (proto.constructor === AbstractClass) {
      throw new Error('Abstract class should not be instanciated');
    }
  }

  method1(value) {
    const s = JSON.stringify({ method1: { value } });
    throw new Error('Method is not implemented: ' + s);
  }

  method2() {
    throw new Error('Method is not implemented');
  }
}

class Implementation extends AbstractClass {
  constructor(value) {
    super();
    this.field = value;
  }

  method1(value) {
    this.field = value;
  }
}

// Usage

try {
  const ac = new AbstractClass();
  ac.method1('value1');
} catch (error) {
  console.log(`Error: ${error.message}`);
}

const instance = new Implementation('value2');
instance.method1('value3');
console.dir(instance);

try {
  instance.method2('value4');
} catch (error) {
  console.log(`Error: ${error.message}`);
}
