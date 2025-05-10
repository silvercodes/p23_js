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




