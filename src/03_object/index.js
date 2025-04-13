
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


















