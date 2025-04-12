
/*
    comment
    comment
*/

// comment

// console.log("34");
// alert('hello Vasia');


// ===== VARIABLE =====

// var a = 1;
// let b = 2;
// const c = 3;

// let d, e = 1, f = true;

// b = 'vasia@mail.com';

// let $ = 4;
// let _ = 5;

// let v = 4;
// let V = 5;

// const ROLE_ID = 12;



// ====== TYPES =======

// ---- Number -----

// let a = 34;
// let b = 4.56;

// let c = Infinity;
// console.log(1 / 0);
// let d = -Infinity;

// let e = NaN;            // Not a Number
// let f = 'vasia' / 2;
// console.log(f);
// console.log(NaN / NaN);



// ---- BigInt -----
// let a = 9827374987239468923476837465827492837492634n;



// ---- String ----
// let a = "string";
// let b = 'st"r"ing';
// let c = `string`;

// const val = 12;
// const str = `Val = ${val}`;
// console.log(str);


// ---- Boolean
// const a = true;
// const b = false;
// console.log(typeof a);



// ---- null / undefined

// let a;
// console.log(a);
// let b = null;

// console.log(typeof undefined);
// console.log(typeof null);

// console.log(undefined + 3);             // NaN
// console.log(null + 1);                  // 1

// console.log(!!undefined);
// console.log(!!null);

// console.log(undefined == null);         // true
// console.log(undefined === null);        // false



// ---- object


// ---- Symbol
// const a = Symbol();
// const b = Symbol();





// ======= TYPE CASTING ========

String(23);
Number('45');
Boolean(45);


// console.dir(String(12));                        // '12'
// console.dir(String(-12.45));                    // '-12.45'
// console.dir(String(null));                      // 'null'
// console.dir(String(undefined));                 // 'indefined'
// console.dir(String(true));                      // 'true'
// console.dir(String(false));                     // 'false'
// console.dir(String(NaN));                       // 'NaN'
// console.dir(String(function(){console.log('test')}));       // 'function(){console.log('test')})'
// console.dir(String({}));                        // '[object Object]'
// console.dir(String({id: 123}));                 // '[object Object]'
// console.dir(String([]));                        // ''
// console.dir(String([1, 2, 3]));                 // '1,2,3'



// console.dir(Number('12'));                              // 12
// console.dir(Number('-12.45'));                          // -12.45
// console.dir(Number('  -12.45  '));                      // -12.45
// console.dir(Number('  -12.45x  '));                     // NaN
// console.dir(Number(''));                                // 0
// console.dir(Number(null));                              // 0            <---
// console.dir(Number(undefined));                         // NaN          <---
// console.dir(Number(true));                              // 1
// console.dir(Number(false));                             // 0
// console.dir(Number(NaN));                               // NaN
// console.dir(Number(function(){console.log('test')}));   // NaN
// console.dir(Number({}));                                // NaN          <--- ???
// console.dir(Number({id: 123}));                         // NaN
// console.dir(Number([]));                                // 0
// console.dir(Number([1]));                               // 1
// console.dir(Number(['1']));                             // 1
// console.dir(Number(['1', 2, 3]));                       // NaN




// console.log(Boolean(''));// false
// console.log(Boolean('string'));// true
// console.log(Boolean('false'));// true
// console.log(Boolean(0));//false
// console.log(Boolean(23));//true
// console.log(Boolean(-23));//true
// console.log(Boolean(NaN));//false
// console.log(Boolean(null));//false
// console.log(Boolean(undefined));//false
// console.dir(Boolean(function(){console.log('test')}));//true
// console.dir(Boolean({}));//true
// console.dir(Boolean({id: 123}));//true
// console.dir(Boolean([]));//true
// console.dir(Boolean([23]));//true



// console.log(5 + '3');   // '53'
// console.log(5 - '3');   // 2
// console.log(5 + '-3');  // '5-3'
// console.log(5 - +3);    // 2
// console.log(5 + -3);    // 2
// console.log(5 + +'3');  // 8             <---


// +            --> string
// < > >= <=    --> Number
// - + * / %    --> Number
// +<unary>     --> Number
// ==           --> Number




// ==== OPERATOR ====
// + - * / % ** +<unary> -<unary>
// += -= ...

// =
// let a;
// console.log(a = 3 + 5 * 3);

// ++ --

// ,
// let c;
// let b = (c = 3 + 4, 5 + 6);
// console.log(b);                 // 11

// > >= < <= == === != !==
// let a = 0;
// let b = '0';
// console.log(a == b);

// console.log(12 == '12');
// console.log(12 === '12');

// console.log(null == undefined);         // <---
// console.log(null === undefined);

// console.log(undefined == 0);
// console.log(undefined < 0);
// console.log(undefined > 0);


// if ()
// if (condition) {

// } else if (condition) {

// } else {

// }

// let res = true ? 12 : 13;



// ------  || && ! ??       ||=  &&=  ??=
//console.log(1 || 0);                            // true || 0   ==> 1
//if (1 || 0){}                                   // if (true || 0)  ==> if (1)  ==> if (true)

// console.log(1 || 0);
// console.log(null || 1);
// console.log(undefined || null || 0);

// let email = '';
// let name = 'vasia';
// let pass = '123123123';
// console.log(email || name || pass);

// let age = 20;
// age <= 18 || f();


// a ||= b;            // a || (a = b)


// let nickname = 'vasia';
// nickname ||= 'no_nickname';
// console.log(nickname);


// let email = 'vasia@mail.com';
// let name = '';
// let pass = '123123123';

// console.log(email && name && pass);

// a &&= b;            // a && (a = b)

// let name = 'Vasia';
// name &&= `User: ${name}`;
// console.log(name);


// console.log(!!34);


// res = a ?? b;           // res = (a !== null && a !== indefined) ? a : b;

// let name = 'Vasia';

// // name = name ?? 'no_name';
// name ??= 'no_name';                 // name = name ?? 'no_name';





// ====== CYCLES ======
// while / do while         for         for in          for off

// label: for (let i = 0; i < 10; ++i)
//     for(let j = 0; j < 5; ++j)
//         if(i + j === 7)
//             break label;



// ====== SWITCH ======
// let a = 2;
// switch(a) {
//     case 1:
//         //
//         break;
//     case 2: 
//         //
//         break;
//     case 3:
//     case 4:
//         //
//         break;   
//     default:
//         //   
// }




































































