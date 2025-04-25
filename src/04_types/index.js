
//#region Number

// let a = 555;

// let b = 123_456_789;

// let c = 32e6;

// let d = 24e-3;

// let e = 0xFF;

// let f = 0b101;

// let g = 0o222;


// let val = 77;
// console.log(val.toString(10));
// console.log(val.toString(2));
// console.log(val.toString(16));

// console.log(77..toString(2));


// console.log(Math.floor(5.8));           // <---
// console.log(Math.floor(-5.8));          // <---

// console.log(Math.ceil(5.3));           // --->
// console.log(Math.ceil(-5.3));          // --->

// console.log(Math.round(5.5));           // <--->
// console.log(Math.round(-5.5));          // <--->

// console.log(Math.trunc(5.8));           // -/--
// console.log(Math.trunc(-5.8));          // -/--


// let val = 77.638764;
// console.log(val.toFixed(2));



// ----- ф-ции -----
// const val = NaN;
// console.log(val === NaN);  // :-(
// console.log(isNaN(val));

// console.log(isFinite('23'));             // TRUE
// console.log(isFinite('++23'));
// console.log(isFinite(Infinity));

// ------ методы ------
// console.log(Number.isFinite('23'));         // FALSE
// console.log(Number.isFinite(23));
// console.log(Number.isFinite(-Infinity));


// const val1 = '200px';
// const val2 = '1.2vw';
// console.log(+val1);
// console.log(parseInt(val1));
// console.log(parseFloat(val2));


// console.log(Math.random());             // [0;1)
// console.log(Math.min(3, 5, 1, 2));

//#endregion


//#region String

// const val = 34;
// const str = `vasia
//             ${val}
// Hello`;
// console.log(str);


// console.log('\n\t\\ttt');

// console.dir(String);

// const str = 'vasia@mail.com';
// console.log(str.length);


// const str = 'vasia@mail.com';
// console.log(str[0]);
// console.log(str.at(0));
// console.log(str[str.length - 1]);
// console.log(str.at(-1));


// const str = 'vasia@mail.com';
// for(let ch of str)
//     console.log(ch);
    

// let str = 'vasia@mail.com';
// str[3] = 'R';
// console.log(str);



// let str = 'Vasia@mail.com';

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());


// console.log(str.indexOf('@'));
// console.log(str.indexOf('@', 3));
// console.log(str.lastIndexOf('@', 3));


// console.log(str.slice(5));
// console.log(str.slice(5, 7));
// console.log(str.slice(-5));

// console.log(str.substring(5, 3));

// console.log(str.substr(2, 4));

// console.log(str.slice(str.indexOf('.')));

// console.log(str.repeat(3));

//#endregion


//#region Array

// PACK --> элементы одного типа --> непрерывная область памяти --> O(1)

// Holley Arrays --> элементы разного типа или дыры --> динамический массив

// Dictionary Mode --> для очень разреженных массивов --> хэш-таблица --> O(1)


// const arr0 = new Array();
// const arr1 = [];

// console.log(arr0);

// const a = ['Mercury', 'Venus', 'Earth'];

// const b = [2, 'Vasia', {id: 101}];

// console.log(a[0]);
// a[0] = 'Moon';
// console.log(a);

// console.log(b.length);

// console.log(a);
// console.dir(a);

// console.log(b[b.length - 1]);
// console.log(b.at(-1));




// ========== pop / push / shift / unshift ===========
// const arr = [];
// arr.push(4);
// arr.push(5);
// arr.push(6);
// console.log(arr);


// ============ перебор ============

// const a = ['Mercury', 'Venus', 'Earth'];
// a.val = 150;
// console.log(a);

// for (let i = 0; i < a.length; ++i)
//     console.log(a[i]);
// console.log('---------');

// for(let item of a)
//     console.log(item);
// console.log('---------');

// for(let item in a)
//     console.log(item);
// console.log('---------');
    


// const a = ['Mercury', 'Venus', 'Earth'];
// a.val = 150;

// // a.length = 100;
// a.length = 0;               // очистка
// console.log(a);


// ======= n-мерные массивы =======

// const matrix = [
//     [2, 5, 7],
//     [1, 1, 2],
//     [7, 8, 9],
// ];
// console.log(matrix);
// console.log(matrix[1][2]);



// const a = ['Mercury', 'Venus', 'Earth'];
// console.log(String(a));


// console.log([] + 5);
// console.log([101] + 5);
// console.log([101, 102] + 5);


// console.log(['vasia'] == 'vasia');



// -------------------------------------------------
// const a = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter'];
// const users = [
//     { id: 101, email: 'vasia@mail.com' },
//     { id: 102, email: 'petya@mail.com' },
//     { id: 103, email: 'dima@mail.com' },
// ];


// ===== splice                 :-))))))
// const arr = [1, 3, 5];
// delete arr[1]
// console.log(arr);


// a.splice(2, 1, 'Vasia');
// console.log(a);

// a.splice(1, 3);
// console.log(a);

// a.splice(1, 0, "VASIA", "PETYA");
// console.log(a);

// a.splice(-1, 0, "VASIA", "PETYA");
// console.log(a);


// ===== slice
// console.log(a.slice(1, 3));

// ===== concat
// console.log(a.concat(['vasia', 'petya']));

// ===== foreach
// a.forEach(item => console.log(item));
// a.forEach((item, i, arr) => console.log(`${i}: ${item}`));
// a.forEach(console.log);

// ===== indexOf, lastIndexOf, includes
// console.log(a.indexOf('Earth'));
// console.log(a.includes('Earth'));           // :-)

// ===== find / findIndex
// console.log(a.find((item, index, arr) => {
//     return item === 'Earth';
// }));

// console.log(a.find(p => p === 'Earth'));

// console.log(users.find(u => u.email === 'petya@mail.com'));

// ===== filter

// console.log(users.filter(u => u.id > 101));

// ===== map

// console.log(a.map(item => item.length));

// ===== sort
// const nums = [4, 12, 3, 11, 2];
// // nums.sort();
// // console.log(nums);
// nums.sort((a, b) => a - b);
// console.log(nums);

// split, join

// reduce
// const nums = [4, 12, 3, 11, 2];
// const res = nums.reduce((sum, item) => sum + item);
// console.log(res);


//#endregion


//#region Symbol


// let id = Symbol();
// console.log('🟢', id);
// console.dir('🟣', id);

// let id0 = Symbol('id');
// let id1 = Symbol('id');

// console.log('🟢', id0 == id1);

// console.log('🟢', String(id0));

// console.log('🟢', id0.description);




// const id = Symbol();
// const role = 'role';
// const user = {
//     [id]: 101,
//     [role]: 'admin',
//     email: 'vasia@mail.com',
//     'name': 'Vasia',
//     34: 'value',
// };

// console.log('🟢', user);
// console.log('🟢', user[id]);
// for (let k in user)
//     console.log('🟢', k);




// const a = Symbol.for('a_key');
// const b = Symbol.for('a_key');
// const c = Symbol.for('app.user.id');
// console.log('🟢', a === b);

// console.log('🟢', Symbol.keyFor(a));


//#endregion


//#region Object type casting

// const a = {};
// const b = {};
// console.log('🟢', a + b);


// !!!!!!!!  STRING / NUMBER !!!!!!!!!!!

// !!!!!!!! хинт (hint) ==== 'string' / 'number' / 'default'

// const a = {};
// const b = {};

// // b[a] = 101;
// // console.log('🟢', b);
// // alert(a);

// const val = Number(a);
// console.log('🟢', val);
// console.log('🟢', +a);




// 1. obj[Symbol.toPrimitive](hint)
// 2. 'string' ==> obj.toString() --> obj.valueOf()
// 3. 'number' / 'default' ==> obj.valueOf() --> obj.toString()


// const user = {
//     id: 101,
//     email: 'vasia@mail.com',
//     [Symbol.toPrimitive](hint) {
//         console.log('🟢', hint);
//         return hint === 'string' ? `id: ${this.id} email: ${this.email}` : this.id;
//     }
// };

// console.log('🟢', String(user));
// console.log('🟢', +user);
// console.log('🟢', user + 100);


// const user = {
//     id: 101,
//     email: 'vasia@mail.com',
//     toString() {
//         return `id: ${this.id} email: ${this.email}`;
//     },
//     valueOf() {
//         return this.id;
//     }
    
// };

// console.log('🟢', String(user));
// console.log('🟢', +user);
// console.log('🟢', user + 100);



// const user = {
//     toString() {
//         return '100';
//     }
// }

// console.log('🟢', String(user));
// console.log('🟢', +user);
// console.log('🟢', user + 100);


//#endregion


//#region Itarable object / pseudoarray / array

// ----- Итерируемый объект

// const container = {
//     from: 0,
//     to: 10,

//     [Symbol.iterator]() {
//         return {                                // <-- Возвращается объект итератора!
//             current: this.from,
//             end: this.to,

//             next() {                            // <---
//                 if (this.current <= this.end)
//                     return {
//                         done: false,            // <----
//                         value: this.current++   // <----
//                     }
//                 else
//                     return {
//                         done: true,
//                     }
//             }
//         }
//     }
// };

// // for (let item of container)
// //     console.log('🟢', item);



// // for (let item of 'Vasia')
// //     console.log('🟢', item);

// // const str = 'Vasia';
// // console.log('🟢', str);
// // console.dir(str);
// // console.dir(String);


// // let iterator = container[Symbol.iterator]();
// // console.log('🟢', iterator);

// // while(true) {
// //     let next = iterator.next();

// //     if (next.done)
// //         break;
// //     console.log('🟢', next.value);
// // }


// // Псевдомассив
// const obj = {
//     0: 'Vasia',
//     1: 'Petya',
//     length: 2
// };

// // for(let item of obj)
// //     console.log('🟢', item);


// const arr1 = Array.from(obj);
// console.dir(arr1);
// const arr2 = Array.from(container);
// console.dir(arr2);
// const arr3 = Array.from(container, v => v * 2);
// console.log('🟢', arr3);

//#endregion


//#region Map / Set / WeakMap / WeakSet

// const map = new Map();

// map.set('101', 'vasia');
// map.set(101, 'petya');
// map.set(false, 'dima');

// console.log('🟢', map);
// console.log('🟢', map.get(101));
// console.log('🟢', map.size);

// map[1] = 123;
// console.log('🟢', map[1]);
// console.log('🟢', map);



// const user = {
//     id: 101,
//     email: 'vasia@mail.com',
// };
// const map = new Map();
// map.set(user, 1000);
// console.log('🟢', map);


// :-)))
// const map = new Map();
// map
//     .set(101, 'vasia')
//     .set(102, 'petya');


// :-)))
// const map = new Map([
//     ['vasia', 100],
//     ['petya', 200],
//     ['dima', 300],
// ]);
// console.log('🟢', map);




//#endregion
