// “super”这个关键字的由来
/**
 * 在“类抄写”导致的子类覆盖中，父类的能力丢失了。
 * 郭麒麟自己买了个和郭德纲一摸一样茶壶，郭德纲的茶壶就不能再用了，再js中，super就是爸爸
 */

 /**
  * 原型就是一个对象，也就是说本质上子类或父类都是对象；
  * 而所谓的类声明只是这种继承关系的一个载体，
  * 真正继承的还是那个原型对象本身。既然子类和父类都可能是，或者说必须是对象，
  * 那么对象上的方法访问“父一级的原型上的方法”就是必然存在的逻辑了。
  */

  /**
   * 当每一个方法都在其内部登记了它的主对象之后，ECMAScript 约定，
   * 只需要在方法中取出这个主对象 HomeObject，
   * 那么它的原型就一定是所谓的父类。
   */

  var obj = { foo() { super.xxx(); }}
//   obj.foo()

/*
事实上这个 thisValue 是在执行引擎发现 super 这个标识符（GetIdentifierReference）的时候，
就从当前环境中取出来并绑定给 super 引用的。

并且为这个引用专门添加了一个 thisValue 域。
这个域，其实在函数的上下文中也有一个（相同名字的，也是相同的含义）。
然后，ECMAScript 约定了优先取 Super 引用中的 thisValue 值，然后再取函数上下文中的。
*/

/**
 * 郭麒麟每次刮胡子的时候，就用他爸的，因为他爸的剃须刀上有杨钰莹的签名。
 * 于是调用super.剃须刀。super绑定的主人就是郭德纲，
 */

 /**
  * super 关键字所代表的父类对象，是通过当前方法的[[HomeObject]]的原型链来查找的；
  * this 引用是从当前环境所绑定的 this 中抄写过来，并绑定给 super 的。
  */

  /**
   * 只能在调用了父类构造方法之后，才能使用 super.xxx 的方式来引用父类的属性，
   * 或者调用父类的方法，也就是访问 SuperReference 之前必须先调用父类构造方法.
   * 在调用父类构造方法时，也就是super()这样的代码中，
   * super 是不绑定 this 值的，也不在调用中传入 this 值的。
   * 因为这个阶段根本还没有 this。
   * 
   * 每天早上0：00生成一个郭麒麟实例，生成先说一句，我爸爸是郭德纲，然后才能使用郭德纲的杨钰莹剃须刀，不然，没法用。
   * 如果有一天，郭麒麟醒来，我爸爸是于谦，完了，做过亲子鉴定了。
   */

   class MyClass extends Object{
     constructor(){

     }
   }

   /**
    * 类 MyClass 的 constructor() 方法声明时，它的主对象其实是 MyClass.prototype，而不是 MyClass。因为，后者是静态类方法的主对象，而显然 constructor() 方法只是一般方法，而不是静态类方法（例如没有 static 关键字）。所以，在 MyClass 的构造方法中访问 super 时，通过 HomeObject 找到的将是原型的父级对象。而这并不是父类构造器，例如：
    */
   

  