console.log(eval(null));
console.log(eval(false));
console.log(eval(Object('1234')))
console.log(eval(Object("1234").toString()))
console.log(eval(012))
console.log(parseInt("012"))
console.log(Number("012"))
console.log(eval('{abc:1}'))

/**
 * 由于第一个字符被理解为块语句，
 * 那么“abc:”就将被解析成标签语句；
 * 接下来，"1"会成为一个“单值表达式语句”
 */

 /**
  * eval 总是将代码执行在当前上下文的“当前位置”。
  * 这里的所谓的“当前上下文”并不是它字面意思中的“代码文本上下文”，
  * 而是指“（与执行环境相关的）执行上下文”
  * 
  * 环境是 JavaScript 在语言系统中的静态组件，而上下文是它在执行系统中的动态组件。
  */

  /**
   * 全局（Global）、函数（Function）、模块（Module）和 Eval 环境；两个基础组件的类别分别是：声明环境（Declarative Environment）和对象环境（Object Environment）。
   */

  /**
   * 声明环境就是名字表，可以是引擎内核用任何方式来实现的一个“名字 -> 数据”的对照表；
   * 对象环境是 JavaScript 的一个对象，用来“模拟 / 映射”成上述的对照表的一个结果，你也可以把它看成一个具体的实现
   * 所有的“环境”本质上只有一个功能，就是用来管理“名字 -> 数据”的对照表；
   * ：“对象环境”只为全局环境的 global 对象，或with (obj)...语句中的对象obj创建，其他情况下创建的环境，都必然是“声明环境”
   * 全局（Global）环境是一个复合环境，它由一对“对象环境 + 声明环境”组成；其他 3 种环境，都是一个单独的声明环境。
   */


   /**
    * 因为 JavaScript 的早期有一个“能够超越词法环境”的东西存在，就是“var 变量”。
    * 所谓词法环境，就是一个能够表示标识符在源代码（词法）中的位置的环境，
    * 由于源代码分块，所以词法环境就可以用“链式访问”来映射“块之间的层级关系”。
    */
   var x = 1;
   if(true){
       var x =2;
       with(new Object){
           var x = 3;
       }
   }
   /**
    * “1、2、3”所在的“var 变量”x，都突破了它们所在的词法作用域（或对应的词法环境），而指向全局的x。
    */

    

