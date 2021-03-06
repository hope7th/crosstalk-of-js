var a = {
    n: 1
};
// a.x = a;
a.x = a = {
    n: 2
};
console.log(a.x); //undefined
console.log(a.y); //undefined
console.log(a); //
console.log("----------")
var x = y = 100;
/*  
  变量“y”会因为赋值操作而导致 JavaScript 引擎“意外”创建一个全局变量。
 所以，声明语句“var/let/const”的一个关键点在于：语句的关键字 var/let/const 只是用来“声明”变量名 x 的，
 去除掉“var x”之后剩下的部分，并不是一个严格意义上的“赋值运算”

 在语法“var x = 100”中，“= 100”是向 x 绑定值，那么“var x”就是单纯的标识符声明。这意味着非常重要的一点——“x”只是一个表达名字的、静态语法分析期作为标识符来理解的字面文本，而不是一个表达式。
*/

x2 = y2 = 100
console.log(x2);
console.log(y2);

/*
 其中的“x”却是一个表达式了，它被严格地称为“赋值表达式的左手端（lhs）操作数”。
 所以，关键的区别在于：（赋值表达式左侧的）操作数可以是另一个表达式——这在专栏的第一讲里就讲过了，而“var 声明”语句中的等号左边，绝不可能是一个表达式！
 也许你会置疑：难道 ECMAScript 6 之后的模板赋值的左侧，也不是表达式？确实，答案是：如果它用在声明语句中，那么就“不是”。
 */

try {
//    var a1.x = "sds"
} catch (e) {
    console.log(e) //Unexpected token .
}

// JavaScript 总是严格按照从左至右的顺序来计算表达式。

// 一切都是表达式，一切都是运算。这一现象在语言中是函数式的特性，类似“一切被操作的对象都是函数求值的结果，一切操作都是函数”。

// x 是一个标识符（不是表达式），而 y 和 100 都是表达式，且y = 100是一个赋值表达式。a.x 是一个表达式，而a = {n:2}也是表达式，并且后者的每一个操作数（本质上）也都是表达式。

// 所以严格地说，在上一讲的例子中，并不存在连续赋值运算，因为“var x = …”是值绑定操作，而不是“将…赋值给 x”。在代码var x = y = 100;中实际只存在一个赋值运算，那就是“y = 100”。

/* a.x = a = {n:2}

计算单值表达式a，得到a的引用；
将右侧的名字x理解为一个标识符，并作为“.”运算的右操作数；
计算“a.x”表达式的结果（Result）。

左操作数a作为一个引用被覆盖了，这个引用仍然是当前上下文中的那个变量a。
因此，这里真实地发生了一次a = {n:2}。取值或置值（GetValue/PutValue），以及作为一个引用向别的地方传递等。


有一个新的a产生，它覆盖了原始的变量a，它的值是{n:2}；最左侧的“a.x”的计算结果中的“原始的变量a”在引用传递的过程中丢失了，且“a.x”被同时丢弃。

*/
console.log("---------");
var a2 = {n:1};
Object.freeze(a2);

try {
    a2.x = a2 = {n:2};
}catch(e){
    console.log("第二次赋值异常")
}
console.log(a2);
console.log(a2.n)


console.log("---------")
var a3 = {n:1}, 
ref = a3;
a3.x = a3 = {n:2};
console.log(a3.x); 
console.log(ref.x);
console.log(ref)

// 先执行了  a3.x = (a3={n:2}) 的结果，然后再执行了 a3 = {n:3}


/**
 * 德云社的接班人问题，
 * 郭德纲开始选何云伟当接班人，var a = {n:1};
 * 后来又想选择曹云金为副接班人 a.x = 
 * 曹云金出走德云社，郭德纲一气之下选择 郭麒麟接班，a={n:2},曹云金直接丢弃。
 * 曹云金的接班计划直接丢弃，没有执行。
 */

