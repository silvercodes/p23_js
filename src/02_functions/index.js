'use strict'

//#region Function declaration

// render();
// function render() {
//     console.log('test string');
// }
// render();



// function render() {
//     let val = 34;
//     console.log(val);
// }
// render();



// let email = 'vasia@mail.com';
// function render() {
//     let email = 'dima@mail.com';
//     email = 'petya@mail.com';
//     console.log(email);
    
// }
// render();
// console.log(email);




// function render1(message) {
//     console.log(message);
// }
// function render2(message = 'mo_message') {
//     console.log(message);
// }

// render1('vasia');
// render1();
// render2();
// render2('petya')
// console.log(render1());




// function getRandom() {
//     return 4;
// }
// function render(val = getRandom()) {
//     console.log(val);
// }

// render(23);
// render();



// function f() {
//     console.log(1);
// }
// function f(val) {
//     console.log(2);
// }

// f();




// function f(message) {
//     // if (message === undefined)
//     //     console.log('error');
//     // console.log(message);
    
//     // console.log(message ?? 'error');

//     message ??= 'error';
//     console.log(message);
// }

// f();

//#endregion


//#region Function expression

// let render = function() {
//     console.log('test string');
// };

// render();

// f();
// function f() {
//     console.log('f');
// }

// render = f;
// render();





// function validate(val, success, error) {
//     if (val < 0)
//         error();
//     else
//         success();
// }

// function successHandler() {
//     console.log('success');
// }

// function errorHandler() {
//     console.log('error');
// }

// validate(12, successHandler, errorHandler);

// validate(
//     -4, 
//     function() {console.log('OK')},
//     function() {console.log('error')}
// );



// let f;
// {
//     f = function() {
//         console.log('f');
//     }
// }

// f();


//#endregion


//#region Arrow function

let f = () => console.log('test');
f();

let g = (a, b) => {
    //
    //
    return a + b;
};

console.log(g(4, 5));


function validate(val, success, error) {
    if (val < 0)
        error();
    else
        success();
}

validate(
    -4, 
    () => console.log('ok'),
    () => console.log('error')
);

//#endregion


