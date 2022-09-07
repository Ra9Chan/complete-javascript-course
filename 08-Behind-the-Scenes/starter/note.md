## Javascript 特性

- High-level 高级
- Garbage-collected 垃圾回收
- Interpreted or just-in-time compiled 解释型即时编译语言
- Multi-paradigm 多范式语言
  - FP 函数式
  - procedural 程序化
  - OOP 面对对象
- Prototype-based object-oriented 基于原型 面对对象方法
- First-class functions 函数只是一个变量
- Dynamic 动态语言
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
