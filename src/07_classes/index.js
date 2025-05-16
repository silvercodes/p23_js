
//#region INTRO

// class User {
//     id = 101;

//     constructor(email) {
//         this.email = email;
//     }

//     get email() {
//         return this.email;
//     }
//     set email(val) {
//         this._email = val;
//     }

//     func_1() {}
//     func_2() {}
// }

// console.dir(User);

// // User();     // ERROR

// const user = new User('vasia@mail.com');
// console.log('🟢', user);


// // ------ ОТЛИЧИЯ ОТ КЛАССИЧЕСКОЙ ФУНКЦИИ --------
// // 1. Нельзя вызывать без new
// // 2. Методы класса НЕПЕРЕЧИСЛИМЫ
// // console.log('🟢', Object.getOwnPropertyDescriptors(User.prototype));
// // 3. Внутри класса действует 'use strict'

// const UserClass = class {
//     render() {
//         console.log('🟢', 'render');
//     }
// };

// new UserClass().render();

//#endregion


//#region INHERITANCE

// class User {
//     id = 101;

//     constructor(email) {
//         this.email = email;
//     }

//     get email() {
//         return this.email;
//     }
//     set email(val) {
//         this._email = val;
//     }

//     func_1() {}
//     func_2() {}
// }

// class Admin extends User {
//     render() {
//         console.log('🟢', this.email);
//     }
// }

// const a = new Admin();
// console.log('🟢', a);





// class User {
//     constructor(email) {
//         this.email = email;
//     }

//     connect() {
//         console.log('🟢', `User connected: ${this.email}`);
//     }
// }

// class Admin extends User {

//     // DEFAULT CTOR
//     // constructor(...args) {
//     //     super(...args);
//     // }

//     constructor(email, permissions) {
//         super(email);
//         this.permissions = permissions;
//     }

//     checkRules() {
//         console.log('🟢', `Rules was checked for Admin ${this.email}`);
//     }

//     connect() {
//         // console.log('🟢', `Admin connected: ${this.email}`);

//         super.connect();
//         this.checkRules();
//     }
// }

// const a = new Admin('vasia@mail.com', ['read']);
// a.connect();
// console.dir(a);





class User {
    permissions = ['read'];

    constructor(email) {
        this.email = email;
        console.log('🟢', `User ctor: ${this.permissions}`);
        console.log('🟢', `User ctor: ${this.hp}`);
        console.log('🟢', `User ctor: ${this.getSlug()}`);
        this.render();
        console.log('🟢', '------------------');
    }

    getSlug() {
        return 'user';
    }

    render() {
        console.log('🟢', this.getSlug());
    }
}

class Admin extends User {
    permissions = ['read', 'write'];
    hp = 200;

    constructor(email) {
        super(email);
        console.log('🟢', `Admin ctor: ${this.permissions}`);
        console.log('🟢', `Admin ctor: ${this.hp}`);
        console.log('🟢', `Admin ctor: ${this.getSlug()}`);
    }

    getSlug() {
        return 'admin';
    }
}

console.dir(Admin);
const a = new Admin('vasia@mail.com');
console.log('🟢', a);







//#endregion


