'use strict'

//#region Intro

// let a = {};
// let b = new Object();


// const user = {
//     id: 101,
//     email: 'vasia@mail.com',
//     'main permission': 'read',
// };

// console.log(user.id);
// user.email = 'petya@mail.com';

// console.log(user);

// user['main permission'] = 'write';
// user['id'] = 102;

// console.log(user);





// const user = {
//     id: 101,
//     email: 'vasia@mail.com',
//     'main permission': 'read',
// };

// const key = 'email';
// console.log(user[key]);





// const key = 'age';

// const user = {
//     id: 101,
//     email: 'vasia@mail.com',
//     'main permission': 'read',
//     [key]: 23,
// };
// console.log(user);




// function f(id, email, key, val) {
//     return {
//         id,
//         email,
//         [key]: val,
//         1: 'test val',
//     };
// }

// const obj = f(101, 'vasia@mail.com', 'age', 31);
// console.log(obj);




// const obj = {
//     return: 123,
//     const: 'vasia',
//     let: {}
// };
// console.log(obj);




// function f(user) {
//     console.log('email' in user);

//     console.log(user.email === undefined);
// }

// f({
//     id: 101,
//     email: undefined,
// });




// const obj = {
//     return: 123,
//     const: 'vasia',
//     let: {}
// };
// // console.log(obj);
// obj.email = 'vasia@mail.com';
// console.log(obj);
// delete obj.email;
// console.log(obj);





// const user = {
//     id: 101,
//     email: 'vasia@mail.com',
//     'main permission': 'read',
// };

// for (let key in user) {
//     console.log(`key: ${key}, value: ${user[key]}`);
// }




// const obj = {
//     id: 101,
//     email: 'vasia@mail.com',
//     'main permission': 'read',
//     23: 'one',
//     12: 'tow',
//     34.5: 'three',
// };

// for (let key in obj)
//     console.log(`${key}: ${obj[key]}`);





// const codes = {
//     '+56': 'country_1',
//     '+43': 'country_2',
//     '+48': 'country_3',
// };
// console.log(codes);




// let a = {
//     id: 101,
// };

// let b = a;

// b.id = 202;

// console.log(a, b);

// console.log(a == b);
// console.log(a === b);





// const a = {
//     id: 101,
// };
// const b = {
//     id: 101,
// };

// console.log(a == b);
// console.log(a === b);

// console.log(a > b);
// console.log(a == 4);

//#endregion


//#region Clone

// const user = {
//     id: 101,
//     email: 'vasia@mail.com',
// };

// const copy = {};
// for(let k in user)
//     copy[k] = user[k];

// console.log(user, copy);
// console.log(user === copy);


// const obj = Object.assign(user, {role: 'admin'});
// console.log(user);
// console.log(obj);
// console.log(user == obj);


// const copy = Object.assign({}, user);
// console.log(user);
// console.log(copy);
// console.log(user == copy);




// const user = {
//     id: 101,
//     email: 'vasia@mail.com',
//     permissions: {
//         read: true,
//         write: true,
//         'delete': false,
//     },
// };

 // Поверхностное копирование
// const copy = Object.assign({}, user);
// copy.id = 202;
// copy.permissions.write = false;
// console.log(user);


// Глубокое клонирование
// const copy = structuredClone(user);
// copy.id = 202;
// copy.permissions.write = false;
// console.log(user);


// Глубокое клонирование
// const copy = _.cloneDeep(user);
// copy.id = 202;
// copy.permissions.write = false;
// console.log(user);

//#endregion


//#region Methods / this

// function showInfo() {
//     console.log('showInfo');
// }

// const user = {
//     id: 101,
//     email: 'vasia@mail.com',
// };

// user.render = function() {
//     console.log('test string');
// };

// user.info = showInfo;
// user.info();

// console.log(user);
// user.render();





// const user = {
//     id: 101,
//     email: 'vasia@mail.com',
//     render: function() {
//         console.log('test string');
//     },
//     func: () => {},
//     info() {
//         console.log('showInfo');
//     }
// };





// const user = {
//     id: 101,
//     email: 'vasia@mail.com',
//     render: function() {
//         // console.log(email);          // ERROR
//         // console.log(this.email);

//         // :-(((
//         console.log(user.email);
        
        
//     },
// };

// user.render();
// const client = user;
// client.render();





// function renderInfo() {
//     console.log(this.email);
// }

// const a = {email: 'vasia@mail.com'};
// const b = {email: 'petya@mail.com'};

// a.render = renderInfo;
// b.render = renderInfo;

// a.render();
// b.render();





// const user = {
//     id: 101,
//     render() {
//         // this === user
//         const handler = () => console.log(this.id);
//         handler();
//         const compare = () => console.log(this === user);
//         compare();
//     },
// };

// user.render();






// function creator() {
//     // this === undefined
//     return {
//         id: 101,
//         reference: this,
//     };
// }

// const user = creator();
// console.log(user);


// function creator() {
//     return {
//         id: 101,
//         reference() {
//             return this;
//         }
//     };
// }

// const user = creator();
// console.log(user);
// console.log(user.reference().id);





// const counter = {
//     count: 0,
//     add() {
//         this.count++;
//         return this;
//     },
//     render() {
//         console.log(`count = ${this.count}`);
//     }

// };

// counter.add().add().add();
// counter.render();


//#endregion 


//#region new

// function User(id, email) {
//     this.id = id;
//     this.email = email;
// }

// const obj = {};
// obj.func = User;
// obj.func(101, 'vasia@mail.com');
// console.log(obj);



// function User(id, email) {
//     // this = {};

//     this.id = id;
//     this.email = email;

//     // return this;
// }

// :-)))
// const obj = new User(101, 'vasia@mail.com');
// console.log(obj);


// :-(((
// const obj = {
//     func: User,
// };

// obj.func(102, 'petya@mail.com');
// console.log(obj);






// function f() {
//     console.log(new.target);
// }

// f();
// new f();





// function User(email) {
//     if (! new.target)
//         return new User(email);

//     this.email = email;
// }

// console.log(new User('Vasia'));
// console.log(User('Vasia'));





// function User(email) {
//     this.email = email;

//     // return {test: true};
//     // return 23;
//     return;
// }

// console.log(new User('vasia@mail.com'));





// function User(email) {
//     this.id = 101,
//     this.email = email;

//     this.render = function() {
//         console.log(`id: ${this.id}, email: ${this.email}`);
        
//     }
// }

// const u = new User('vasia@mail.com');
// u.render();





// const obj = {};

// function A() {
//     return obj;
// }

// function B() {
//     return obj;
// }

// const a = new A();
// const b = new B();
// console.log(a === b);






// function Counter(init) {
//     this.count = init;
//     this.add = function() {
//         this.count++;
//         return this;
//     };
//     this.render = function() {
//         console.log(`count = ${this.count}`);
//     }
// }


// const counter1 = new Counter(10);
// counter1.add().add().add();
// counter1.render();

// const counter2 = new Counter(0);
// counter2.add().add().add();
// counter2.render();





// const user = {};

// // const email = user.email ?? 'no_email';
// // console.log(email);

// console.log(user?.email);

// console.log(user?.role?.title);



// const user = {
//     email: 'vasia@mail.com',
//     render() {
//         console.log('render');
//     }
// };

// user.render?.();
// user.show?.();

// const key = 'email';
// console.log(user?.[key]);


//#endregion

