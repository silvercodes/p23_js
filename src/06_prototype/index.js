'use strict'

//#region PROPERTY-DATA

// const user = {
//     id: 101,
//     email: 'vasia@mail.com',
// };

// const d1 = Object.getOwnPropertyDescriptor(user, 'email');
// console.log('🟢', d1);

// Object.defineProperty(user, 'email', {
//     writable: false,
// });

// const d2 = Object.getOwnPropertyDescriptor(user, 'email');
// console.log('🟢', d2);

// // user.email = 'petya@mail.com';           // ERROR

// Object.defineProperty(user, 'email', {
//     enumerable: false,
// });

// const d3 = Object.getOwnPropertyDescriptor(user, 'email');
// console.log('🟢', d3);

// for (let key in user)
//     console.log('🟢', key);

// Object.defineProperty(user, 'email', {
//     configurable: false,
// });

// const d4 = Object.getOwnPropertyDescriptor(user, 'email');
// console.log('🟢', d4);

// // delete user.email;           // ERROR




// console.log('🟢', Math);
// console.log('🟢', Object.getOwnPropertyDescriptor(Math, 'PI'));


// console.log('🟢', Object.getOwnPropertyDescriptors(Math));



// const obj = Object.defineProperties({}, {
//     id: {
//         value: 101,
//         writable: true,
//         configurable: true,
//     },
//     render: {
//         value: function() {
//             console.log('🟢', this.id);
//         },
//         configurable: true,
//     }
// });

// obj.render();
// console.log('🟢', Object.getOwnPropertyDescriptors(obj));




// const user = {
//     id: 101,
//     email: 'vasia@mail.com',
// };

// // Object.seal(user);
// // console.log('🟢', Object.getOwnPropertyDescriptors(user));

// // Object.freeze(user);
// // console.log('🟢', Object.getOwnPropertyDescriptors(user));

// Object.preventExtensions(user);
// // user.pass = '123123123';             // ERROR
// console.log('🟢', Object.isExtensible(user));
// console.log('🟢', Object.isExtensible(Math));



//#endregion


//#region PROPERTY-ACCESSOR

// const user = {
//     id: 101,
//     _email: '',
//     _pass: '',

//     get email() {
//         return this._email;
//     },

//     set email(value) {
//         this._email = value;
//     },

//     get info() {
//         return `id: ${this.id}, email: ${this._email}`;
//     }
// }

// user.email = 'petya@mail.com';
// console.log('🟢', user.email);
// console.log('🟢', user.info);
// console.log('🟢', user);

// console.log('🟢', Object.getOwnPropertyDescriptors(user));


// Object.defineProperty(user, 'password', {
//     configurable: true,
//     get: function() {
//         return this._pass;
//     },
//     set: function(val) {
//         this._pass = val;
//     }
// });

// console.log('🟢', Object.getOwnPropertyDescriptors(user));

//#endregion


//#region PROTOTYPE

// const unit = {
//     hp: 100,
//     render() {
//         console.log('🟢', `render(): ${this.hp}`);
//     }
// };

// const archer = {
//     title: 'Vasia',
// };

// const warrior = {
//     title: 'Petya',
//     __proto__: unit,
// }

// // archer.[[Prototype]] = unit;     // ERROR
// archer.__proto__ = unit;

// // console.log('🟢', unit);
// // console.log('🟢', archer);
// // console.log('🟢', archer.title);
// // console.log('🟢', archer.hp);
// // archer.render();

// archer.hp = 200;
// console.log('🟢', unit);
// console.log('🟢', archer);
// console.log('🟢', warrior);




// const a = {
//     v0: 120,
//     v1: 130,
//     render() {
//         console.log('🟢', `${this.v0}, ${this.v1}`);
//     }
// };

// const b = {
//     v0: 140,
// };
// b.__proto__ = a;

// const c = {
//     v1: 150,
// };
// c.__proto__ = b;

// // b.render();
// // c.render();

// console.log('🟢', a);
// console.log('🟢', b);
// console.log('🟢', c);


// console.log('🟢', Object.getOwnPropertyDescriptors(Object.prototype));







// ---- with accessors and methods -----

// const unit = {
//     hp: 100,
//     _level: 0,

//     get level() {
//         return this._level;
//     },
//     set level(val) {
//         this._level = val;
//     },

//     render() {
//         console.log('🟢', `render(): ${this.hp}`);
//     },
//     showInfo() {
//         console.log('🟢', `hp: ${this.hp} level: ${this.level}`);
//     }
// };

// const archer = {
//     title: 'Vasia',
//     __proto__: unit,
// };

// archer.hp = 500;
// archer.level = 20;      // ~~~ archer.set level(20)

// console.log('🟢', unit);
// console.log('🟢', archer);

// unit.showInfo();
// archer.showInfo();

//#endregion


//#region FOR/IN

// const unit = {
//     hp: 100,
//     _level: 0,

//     get level() {
//         return this._level;
//     },
//     set level(val) {
//         this._level = val;
//     },

//     render() {
//         console.log('🟢', `render(): ${this.hp}`);
//     },
//     showInfo() {
//         console.log('🟢', `hp: ${this.hp} level: ${this.level}`);
//     }
// };

// const archer = {
//     title: 'Vasia',
//     __proto__: unit,
// };

// console.dir(archer);

// for (let prop in archer)
//     console.log('🟢', prop);

// console.log('🟢', Object.getOwnPropertyDescriptors(archer.__proto__.__proto__));

// for (let prop in archer)
//    if (archer.hasOwnProperty(prop))
//         console.log('🟢', prop);


//#endregion


//#region FUNCTION-CONSTRUCTOR

// const user = {
//     id: 101,
// };

// function Admin() {
//     // this = {};
//     this.role = 'admin';

//     this.__proto__ = user;
//     // return this;
// }

// const admin = new Admin();
// console.log('🟢', admin);




// const user = {
//     id: 101,
// };

// const test = {
//     test: 0,
// }

// function Admin() {
//     // this = {};
//     // this.__proto__ = Admin.prototype
//     this.role = 'admin';
//     // return this;
// }
// Admin.prototype = user;

// console.dir(Admin);

// const admin = new Admin();
// console.log('🟢', admin);

// Admin.prototype = test;
// console.log('🟢', new Admin());






// const user = {
//     id: 101,
// };

// function Admin() {
//     this.role = 'admin';
// }

// console.dir(Admin);
// const admin = new Admin();
// console.log('🟢', admin);
// const admin2 = new admin.constructor();
// console.log('🟢', admin2);




// function User(email) {
//     this.email = email;
// }


// User.prototype.render = function() {
//     console.log('🟢', `email: ${this.email}`);
// }
// console.dir(User);

// const user = new User('vasia@mail.com');
// console.log('🟢', user);
// user.render();

//#endregion


//#region Embedded prototypes

// const a = {};
// const b = new Object();

// console.dir(Object);
// console.log('🟢', a);
// console.log('🟢', b);
// console.dir(String(a));


// function f() {}
// const f1 = new Function();

// console.dir(Function);
// console.dir(f);
// console.dir(f1);



// const a = [1, 2, 3];
// const b = new Array();

// console.dir(Array);
// console.log('🟢', a);
// console.log('🟢', b);
// console.dir(String(a));



// console.dir(Map);

// console.dir(Number);
// console.dir(Boolean);
// console.dir(String);
// console.dir(Symbol);


// String.prototype.hohoho = function() {
//     console.log('🟢', 'hohoho');
// }

// 'vasia'.hohoho();



// const container = {
//     0: 101,
//     1: 202,
//     3: 303,
//     length: 3,
// };

// // console.dir(Object);
// // console.dir(container);


// // container.__proto__ = Array.prototype;
// // console.dir(container);

// // console.log('🟢', container.join('-'));


// container.join = Array.prototype.join;
// console.log('🟢', container);
// console.log('🟢', container.join('-'));




// console.dir(Object);
// const a = Object.create(null);
// console.dir( a);

// const b = Object.create(null, {
//     id: {
//         value: 101,
//         writable: true,
//     }
// });
// console.dir(b);



//---------------- глубокое клонирование --------
const obj = {};
const copy = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));

//#endregion





