## Javascript 特性

- High-level 高级语言（自动资源管理）
- Garbage-collected 垃圾回收（自动垃圾回收，清理内存）
- Interpreted or just-in-time compiled 解释型即时编译语言（即时编译并执行）
- Multi-paradigm 多范式语言
  - FP 函数式
  - procedural 程序化
  - OOP 面对对象
- Prototype-based object-oriented 基于原型 面对对象方法
- First-class functions 函数只是一个变量
- Dynamic 动态语言 变量数据类型动态分配
- Single-threaded 单线程
  Concurrency model
- Non-blocking event loop 非阻塞事件循环并发模式

### Javascript engine and runtime

执行代码
engine 包含一个 call stack（调用栈） and Heap（堆）

1. call stack（调用栈） 代码实际执行的地方 execution contexts（执行上下文）
2. Heap（堆） 非结构化内存池 用于储存应用程序所需的对象

#### 机器码

- Compilation => Execution 把代码转换为机器码，可在任何计算机上执行的可移植文件 编译后执行
- Interpretation 行对行 编译运行
- Just-in-time compilation 编译后马上执行 没有可移植文件

#### runtime

bigCondition
engine
Heap
call stack
WEB APIs
Callback queue

#### Scoping asks the question “Where do variables live?” or “Where can we access a certain variable, and where not?”;()

1. There are 3 types of scope in JavaScript: the global scope, scopes defined by functions, and scopes defined by blocks;
2. Onlyletandconstvariablesareblock-scoped.Variablesdeclaredwithvarendupintheclosestfunctionscope;
3. In JavaScript, we have lexical scoping, so the rules of where we can access variables are based on exactly where in the code functions and blocks are written;
4. Every scope always has access to all the variables from all its outer scopes. This is the scope chain!
5. When a variable is not in the current scope, the engine looks up in the scope chain until it finds the variable it’s looking
   for. This is called variable lookup;
6. The scope chain is a one-way street: a scope will never, ever have access to the variables of an inner scope;
7. The scope chain in a certain scope is equal to adding together all the variable environments of the all parent scopes;
8. The scope chain has nothing to do with the order in which functions were called. It does not affect the scope chain at all!
