//#region CALLBACKS

// ===== ERROR

// function load(src) {
//     const script = document.createElement('script');
//     script.src = src;
//     document.head.append(script);
// }

// load('script1.js');

// render('hello Vasia');


// ===== with callback

// function load(src, onLoadCallback) {
//     const script = document.createElement('script');
//     script.src = src;
//     script.onload = () => onLoadCallback();
//     document.head.append(script);
// }

// load('script1.js', () => {
//     render('hello Vasia');
// });

// console.log('🟢', 1);
// console.log('🟢', 2);
// console.log('🟢', 3);



// ===== with callbacks

// function load(src, onLoadCallback, onErrorcallback) {
//     const script = document.createElement('script');
//     script.src = src;
//     script.onload = () => onLoadCallback();
//     script.onerror = () => onErrorcallback();

//     document.head.append(script);
// }

// load('script1.js', () => {
//     console.log('🟢', 'script1 was loaded...');
//     load('script2.js', () => {
//         console.log('🟢', 'script2 was loaded...');
//         render('message');
//         log('vasia');
//     }, () => { console.log('🟢', 'error2'); });
// }, () => { console.log('🟢', 'error1'); });

// console.log('🟢', 1);
// console.log('🟢', 2);
// console.log('🟢', 3);

//#endregion


//#region PROMISE

// const p = new Promise((resolve, reject) => {
//     //
//     //
//     resolve(value);
//     // OR
//     reject(error);
// });

// // state        pending ->        fulfilled           rejected

// // result       undefined ->      value               error



// const p = new Promise((resolve, reject) => {
//     //
//     reject(new Error('error'));
//     setTimeout(() => resolve(101) , 2000);
// });

// console.dir(p);
// console.log('🟢', 'test');



// new Promise((res, rej) => {
//     // setTimeout(() => res(101), 1000);
//     setTimeout(() => rej(new Error('error')), 1000);
// })
//     .then(res => {
//             console.log('🟢', `RESULT: ${res}`);
//         }, err => {
//             console.log('🟢', `ERROR: ${err}`);
//         })
//     .catch(err => {})
//     .finally(() => {})




// ---------- with callbacks
// function load(src, onLoadCallback, onErrorcallback) {
//     const script = document.createElement('script');
//     script.src = src;
//     script.onload = () => onLoadCallback();
//     script.onerror = () => onErrorcallback();

//     document.head.append(script);
// }

// load('script1.js', () => {
//     console.log('🟢', 'script1 was loaded...');
//     render('message');
// }, () => { console.log('🟢', 'error1'); });


// ---------- with promises

// function load(src) {
//     return new Promise((res, rej) => {
//         const script = document.createElement('script');
//         script.src = src;
//         script.onload = () => res(script);
//         script.onerror = () => rej(new Error('Script loading failed...'));

//         document.head.append(script);
//     });
// }

// load('script1.js')
//     .then(
//         script => {
//             return 150;
//         },
//         err => {}
//     ).then(
//         val => {console.log('🟢', val);},
//         err => {}
//     );

//#endregion


//#region Task

// fetch('data.json')
// .then(response => response.json())
// .then(user => console.log('🟢', user));

// console.log('🟢', 'test');

//#endregion


//#region async / await

// async function func() {
//     return 101;
// }

// async function func() {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             res(101);
//         }, 1000);
//     } )
// }

// func().then(val => console.log('🟢', val));


// async function func() {
//     const p = new Promise((res, rej) => {
//         setTimeout(() => res(101), 2000);
//     });

//     const result = await p;

//     console.log('🟢', result);
// }

// func();





// function mockFetch(url) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({
//                 json: () => Promise.resolve({
//                     id: 101,
//                     email: 'vasia@mail.com',
//                     age: 23,
//                 }),
//             });
//         }, 1000);
//     });
// }

// const path = 'data.json'


// function getUserDataPromise(userId) {
//     return fetch(`${path}`)
//         .then(response => response.json())
//         .then(data => {
//             console.log('🟢', 'Promise: User data received...');
//             return data;
//         })
//         .catch(error => {
//             console.error('🟢', 'Promise ERROR: ', error);
//         })
// }

// async function getUserDataAsync(userId) {
//     try {
//         const response = await fetch(`${path}`);
//         const data = await response.json();

//         console.log('🟢', 'Async/await: User data received...');
//         return data;
//     } catch (error) {
//         console.error('🟢', 'Async/await ERROR: ', error);
//     }
// }

// getUserDataPromise(1).then(data => console.log('🟢', data));
// getUserDataAsync(1).then(data => console.log('🟢', data));


//#endregion

//#region EventLoop

console.log('🟢', 'Start');

setTimeout(() => console.log('🟢', 'Timeout1'), 0);
setTimeout(() => console.log('🟢', 'Timeout2'), 0);

Promise.resolve().then(() => console.log('🟢', 'Promise1'));
Promise.resolve().then(() => console.log('🟢', 'Promise2'));
Promise.resolve().then(() => console.log('🟢', 'Promise3'));

console.log('🟢', 'End');

//#endregion
