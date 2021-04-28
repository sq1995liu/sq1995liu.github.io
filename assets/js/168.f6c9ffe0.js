(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{775:function(t,s,a){"use strict";a.r(s);var n=a(21),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_01-线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_01-线程"}},[t._v("#")]),t._v(" 01.线程")]),t._v(" "),a("h3",{attrs:{id:"_1-1-什么是线程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-什么是线程"}},[t._v("#")]),t._v(" 1.1 什么是线程")]),t._v(" "),a("ul",[a("li",[t._v("1）线程是操作系统调度的最小单位")]),t._v(" "),a("li",[t._v("2）线程是进程正真的执行者，是一些指令的集合（进程资源的拥有者）")]),t._v(" "),a("li",[t._v("3）同一个进程下的多个"),a("code",[t._v("线程共享内存空间")]),t._v("，数据直接访问（数据共享）")]),t._v(" "),a("li",[t._v("4）为了保证数据安全，必须使用"),a("code",[t._v("线程锁")])])]),t._v(" "),a("p",[a("code",[t._v("说明：")]),t._v("下面利用for循环同时启动50个线程并行执行，执行时间是3秒而不是所有线程执行时间的总和")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" threading\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" time\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sayhi")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#定义每个线程要运行的函数")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"running on number:%s"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sleep"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    t "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" threading"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Thread"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("sayhi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'t-%s'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("h3",{attrs:{id:"_1-2-gil锁和线程锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-gil锁和线程锁"}},[t._v("#")]),t._v(" 1.2 GIL锁和线程锁")]),t._v(" "),a("ul",[a("li",[t._v("GIL全局解释器锁\n"),a("ul",[a("li",[t._v("在python全局解释器下，保证同一时间只有一个线程运行")]),t._v(" "),a("li",[t._v("防止多个线程都修改数据")])])]),t._v(" "),a("li",[t._v("线程锁（互斥锁）\n"),a("ul",[a("li",[t._v("GIL锁只能保证同一时间只能有一个线程对某个资源操作，但当上一个线程还未执行完毕时可能就会释放GIL，其他线程就可以操作了")]),t._v(" "),a("li",[t._v("线程锁本质把线程中的数据加了一把互斥锁\n"),a("ul",[a("li",[t._v("加上线程锁之后所有其他线程，读都不能读这个数据")])])]),t._v(" "),a("li",[t._v("有了GIL全局解释器锁为什么还需要线程锁\n"),a("ul",[a("li",[t._v("因为cpu是分时使用的")])])])])]),t._v(" "),a("li",[a("code",[t._v("在有GIL的情况下执行 count = count + 1 会出错原因解析，用线程锁解决方法")])])]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1）第一步：count = 0   count初始值为0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2）第二步：线程1要执行对count加1的操作首先申请GIL全局解释器锁")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3）第三步：调用操作系统原生线程在操作系统中执行")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 4）第四步：count加1还未执行完毕，时间到了被要求释放GIL")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 5）第五步：线程1释放了GIL后线程2此时也要对count进行操作，此时线程1还未执行完，所以count还是0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 6）第六步：线程2此时拿到count = 0后也要对count进行加1操作，假如线程2执行很快，一次就完成了")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    count加1的操作，那么count此时就从0变成了1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 7）第七步：线程2执行完加1后就赋值count=1并释放GIL")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 8）第八步：线程2执行完后cpu又交给了线程1，线程1根据上下文继续执行count加1操作，先拿到GIL")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    锁，完成加1操作，由于线程1先拿到的数据count=0，执行完加1后结果还是1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 9）第九步：线程1将count=1在次赋值给count并释放GIL锁，此时连个线程都对数据加1，但是值最终是1")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("ul",[a("li",[a("code",[t._v("死锁定义")]),t._v(" "),a("ul",[a("li",[t._v("两个以上的进程或线程在执行过程中，因争夺资源而造成的一种互相等待的现象，若无外力作用，它们都将无法推进下去")])])])]),t._v(" "),a("h3",{attrs:{id:"_1-3-多线程或者线程池"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-多线程或者线程池"}},[t._v("#")]),t._v(" 1.3 多线程或者线程池")]),t._v(" "),a("ul",[a("li",[t._v("线程有哪些模块？")]),t._v(" "),a("li",[t._v("线程池有哪些模块？")])]),t._v(" "),a("h3",{attrs:{id:"_1-4-join-和setdaemon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-join-和setdaemon"}},[t._v("#")]),t._v(" 1.4 join()和setDaemon()")]),t._v(" "),a("h4",{attrs:{id:"_2-4-1-join"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-1-join"}},[t._v("#")]),t._v(" 2.4.1 join()")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("实现所有线程都执行结束后再执行主线程")])])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" threading\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" time\nstart_time "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ndef "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sayhi")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" #定义每个线程要运行的函数\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"running on number:%s"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sleep")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    t "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" threading"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Thread")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("sayhi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'t-%s'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setDaemon")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("True"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  #把当前线程变成守护线程，必须在t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("前设置\n    t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("          #启动一个线程，程序不会阻塞\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cost time:'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" start_time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("h4",{attrs:{id:"_2-4-2-setdaemon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-2-setdaemon"}},[t._v("#")]),t._v(" 2.4.2 setDaemon()")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("守护线程，主线程退出时，需要子线程随主线程退出")])])]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" threading\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" time\nstart_time "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ndef "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sayhi")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" #定义每个线程要运行的函数\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"running on number:%s"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sleep")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    t "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" threading"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Thread")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("sayhi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'t-%s'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setDaemon")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("True"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  #把当前线程变成守护线程，必须在t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("前设置\n    t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("          #启动一个线程，程序不会阻塞\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cost time:'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" start_time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("h3",{attrs:{id:"_1-5-python中使用过的线程模块？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-python中使用过的线程模块？"}},[t._v("#")]),t._v(" 1.5 Python中使用过的线程模块？")]),t._v(" "),a("h4",{attrs:{id:"_1-5-1-threading"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-1-threading"}},[t._v("#")]),t._v(" 1.5.1 threading")]),t._v(" "),a("ul",[a("li",[t._v("Python提供了几个用于多线程编程的模块，包括thread、threading和Queue等。")]),t._v(" "),a("li",[t._v("thread和threading模块允许程序员创建和管理线程。")])]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" threading\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" time\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sayhi")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#定义每个线程要运行的函数")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"running on number:%s"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sleep"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    t "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" threading"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Thread"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("sayhi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'t-%s'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("h4",{attrs:{id:"_1-5-2-concurrent-futures"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-2-concurrent-futures"}},[t._v("#")]),t._v(" 1.5.2 concurrent.futures")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("1、简介")]),t._v(" "),a("a",{attrs:{href:"https://docs.python.org/3/library/concurrent.futures.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考官网"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("1、Python标准库为我们提供了threading和multiprocessing模块编写相应的多线程/多进程代码")]),t._v(" "),a("li",[t._v("2、但是当项目达到一定的规模，频繁创建/销毁进程或者线程是非常消耗资源的，这个时候我们就要编写自己的线程池/进程池，以空间换时间。")]),t._v(" "),a("li",[t._v("3、但从Python3.2开始，标准库为我们提供了concurrent.futures模块，它提供了ThreadPoolExecutor和ProcessPoolExecutor两个类，")]),t._v(" "),a("li",[t._v("4、实现了对threading和multiprocessing的进一步抽象，对编写线程池/进程池提供了直接的支持。")])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("2、Executor和Future")])]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("1. Executor")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("concurrent.futures模块的基础是Exectuor，Executor是一个抽象类，它不能被直接使用。")])]),t._v(" "),a("li",[a("p",[t._v("但是它提供的两个子类ThreadPoolExecutor和ProcessPoolExecutor却是非常有用")])]),t._v(" "),a("li",[a("p",[t._v("我们可以将相应的tasks直接放入线程池/进程池，不需要维护Queue来操心死锁的问题，线程池/进程池会自动帮我们调度。")])])])]),t._v(" "),a("li",[a("p",[a("code",[t._v("2. Future")])]),t._v(" "),a("ul",[a("li",[t._v("Future你可以把它理解为一个在未来完成的操作，这是异步编程的基础，")]),t._v(" "),a("li",[t._v("传统编程模式下比如我们操作queue.get的时候，在等待返回结果之前会产生阻塞，cpu不能让出来做其他事情")]),t._v(" "),a("li",[t._v("而Future的引入帮助我们在等待的这段时间可以完成其他的操作。")])])])])]),t._v(" "),a("li",[a("p",[t._v("concurrent.futures.ThreadPoolExecutor 抓取网页")])])]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" requests\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" concurrent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("futures "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" ThreadPoolExecutor\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch_request")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" requests"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nurl_list "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://www.baidu.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://www.google.com/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#google页面会卡住，知道页面超时后这个进程才结束")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://dig.chouti.com/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#chouti页面内容会直接返回，不会等待Google页面的返回")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\npool "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ThreadPoolExecutor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建一个线程池，最多开10个线程")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" url "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" url_list"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    pool"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("submit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fetch_request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 去线程池中获取一个线程，线程去执行fetch_request方法")]),t._v("\n\npool"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shutdown"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 主线程自己关闭，让子线程自己拿任务执行")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);