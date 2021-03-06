// import { add } from "./33_import_export_trainning";

function Container() {
    var store = [];
    return {
        getItem:function (index) {
            return store[index]
        },
        addItem:function (obj) {
            var index = store.push(obj);
            //push并返回新的长度
            return index -1
        },
        length:function () {
            return store.length;
        }
    }
}

var c = Container();
console.log(c.length());
var index1 = c.addItem({name:"feipeng"});
console.log(index1);
console.log(c.length());
console.log(c.getItem(index1));
//js一切都是对象

function makeAdder(x) {
    function adds(y) {
        return y+x;
    }
    return adds;
}

var plusOne = makeAdder(1);
//记忆传入x的值，获得一个指向内层的add的一个引用
// 调用 makeAdder(1) 时得到了内层 add(..) 的一个引用，它会将 x 记为 1。我们将这个函 数引用命名为 plusOne()
console.log(plusOne(3))

function User() {
    var username,password;
    function doLogin(user,pw) {
        username = user;
        password = pw
    }

    var publicAPI = {
        login:doLogin
    }

    return publicAPI;
}

var fred = User();
fred.login('fred','12312312');
//函数执行后，保留对变量的记忆，就叫闭包
//内层的函数 doLogin() 在 username 和 password 上有一个闭包，这意味着即使在 User() 函 数运行完毕之后，函数 doLogin() 也保持着对它们的访问权。
//私有变量，外部不可访问，提供外部访问的api,就叫闭包

// 只要在某个内部作用域内访问在当前作用域之外定义的变量，就会创建闭包。 它允许你从内部函数访问外部函数的作用域。 在JS中，每次创建函数时都会创建闭包。 要使用闭包，只需在另一个函数内定义一个函数并暴露它。


