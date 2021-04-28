(window.webpackJsonp=window.webpackJsonp||[]).push([[249],{919:function(a,_,e){"use strict";e.r(_);var v=e(21),s=Object(v.a)({},(function(){var a=this,_=a.$createElement,e=a._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"_01-redis简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_01-redis简介"}},[a._v("#")]),a._v(" 01.redis简介")]),a._v(" "),e("h2",{attrs:{id:"_1-1-什么是redis？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-什么是redis？"}},[a._v("#")]),a._v(" 1.1 什么是Redis？")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("Redis本质上是一个Key-Value类型的内存数据库，很像memcached。")])]),a._v(" "),e("li",[e("p",[a._v("整个数据库统统加载在内存当中进行操作，定期通过异步操作把数据库数据flush到硬盘上进行保存。")])]),a._v(" "),e("li",[e("p",[a._v("因为是纯内存操作，Redis的性能非常出色，每秒可以处理超过 10万次读写操作，是已知性能最快的Key-Value DB。")])])]),a._v(" "),e("h2",{attrs:{id:"_1-2-redis特点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-redis特点"}},[a._v("#")]),a._v(" 1.2 redis特点")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("redis比memcached优点")]),a._v(" "),e("ul",[e("li",[a._v("数据类型：redis支持五中数据类型， memcached所有的值均是简单的字符串")]),a._v(" "),e("li",[a._v("value大小限制：redis单个value的最大限制是512M，memcached只能保存1MB的数据")]),a._v(" "),e("li",[a._v("持久化：redis可以持久化，memcached不支持持久化")])])]),a._v(" "),e("li",[e("p",[a._v("redis为什么快？")]),a._v(" "),e("ul",[e("li",[a._v("纯内存操作")]),a._v(" "),e("li",[a._v("单线程避免上下文切换")]),a._v(" "),e("li",[a._v("非阻塞IO多路复用机制")])])]),a._v(" "),e("li",[e("p",[a._v("redis缺点")]),a._v(" "),e("ul",[e("li",[a._v("内存限制，不能用作海量数据存储")]),a._v(" "),e("li",[a._v("注：如果需要存储海量数据，可以使用MongoDB")])])])]),a._v(" "),e("h1",{attrs:{id:"_02-redis五种数据类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_02-redis五种数据类型"}},[a._v("#")]),a._v(" 02.redis五种数据类型")]),a._v(" "),e("ul",[e("li",[a._v("说明：\n"),e("ul",[e("li",[a._v("1.redis中所有数据结构都以唯一的key字符串作为名称，然后通过这个唯一的key来获取对应的value")]),a._v(" "),e("li",[a._v("2.不同的数据类型数据结构差异就在于value的结构不一样")])])])]),a._v(" "),e("h2",{attrs:{id:"_2-1-字符串（string）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-字符串（string）"}},[a._v("#")]),a._v(" 2.1 字符串（string）")]),a._v(" "),e("blockquote",[e("h3",{attrs:{id:"_2-1-1-value的数据结构（数组）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-value的数据结构（数组）"}},[a._v("#")]),a._v(" 2.1.1 "),e("code",[a._v("value的数据结构")]),a._v("（数组）")])]),a._v(" "),e("ul",[e("li",[e("p",[a._v("1.字符串value数据结构类似于数组，采用与分配容易空间来减少内存频繁分配")])]),a._v(" "),e("li",[e("p",[a._v("2.当字符串长度小于1M时，扩容就是加倍现有空间")])]),a._v(" "),e("li",[e("p",[a._v("3.如果字符串长度操作1M时，扩容时最多扩容1M空间，字符串最大长度为 512M")])])]),a._v(" "),e("blockquote",[e("h3",{attrs:{id:"_2-1-2-字符串的使用场景（缓存）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-2-字符串的使用场景（缓存）"}},[a._v("#")]),a._v(" 2.1.2 "),e("code",[a._v("字符串的使用场景")]),a._v("（缓存）")])]),a._v(" "),e("ul",[e("li",[e("p",[a._v("1.字符串一个常见的用途是缓存用户信息，我们将用户信息使用JSON序列化成字符串")])]),a._v(" "),e("li",[e("p",[a._v("2.取用户信息时会经过一次反序列化的过程")])])]),a._v(" "),e("h2",{attrs:{id:"_2-2-list（列表）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-list（列表）"}},[a._v("#")]),a._v(" 2.2 list（列表）")]),a._v(" "),e("blockquote",[e("h3",{attrs:{id:"_2-1-1-value的数据结构（双向链表）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-value的数据结构（双向链表）"}},[a._v("#")]),a._v(" 2.1.1 "),e("code",[a._v("value的数据结构")]),a._v("（双向链表）")])]),a._v(" "),e("ul",[e("li",[e("p",[a._v("1.列表的数据结构是双向链表，这意味着插入和删除的时间复杂度是0(1)，索引的时间复杂度位0(n)")])]),a._v(" "),e("li",[e("p",[a._v("2.当列表弹出最后一个元素后，该数据结构会被自动删除，内存被回手")])])]),a._v(" "),e("blockquote",[e("h3",{attrs:{id:"_2-1-2-列表的使用场景（队列、栈）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-2-列表的使用场景（队列、栈）"}},[a._v("#")]),a._v(" 2.1.2 "),e("code",[a._v("列表的使用场景")]),a._v("（队列、栈）")])]),a._v(" "),e("h2",{attrs:{id:"_2-3-hash（字典）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-hash（字典）"}},[a._v("#")]),a._v(" 2.3 hash（字典）")]),a._v(" "),e("blockquote",[e("h3",{attrs:{id:"_2-3-1value的数据结构（hashmap）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-1value的数据结构（hashmap）"}},[a._v("#")]),a._v(" 2.3.1"),e("code",[a._v("value的数据结构")]),a._v("（HashMap）")])]),a._v(" "),e("ul",[e("li",[e("p",[a._v("1.redis中的字典也是HashMap（数组+列表）的二维结构")])]),a._v(" "),e("li",[e("p",[a._v("2.不同的是redis的字典的值只能是字符串")])])]),a._v(" "),e("blockquote",[e("h3",{attrs:{id:"_2-3-2-hash的使用场景（缓存）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-2-hash的使用场景（缓存）"}},[a._v("#")]),a._v(" 2.3.2 "),e("code",[a._v("hash的使用场景")]),a._v("（缓存）")])]),a._v(" "),e("ul",[e("li",[e("p",[a._v("1.hash结构也可以用来缓存用户信息，与字符串一次性全部序列化整个对象不同，hash可以对每个字段进行单独存储")])]),a._v(" "),e("li",[e("p",[a._v("2.这样可以部分获取用户信息，节约网络流量")])]),a._v(" "),e("li",[e("p",[a._v("3.hash也有缺点，hash结构的存储消耗要高于单个字符串")])])]),a._v(" "),e("h2",{attrs:{id:"_2-4-set（集合）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-set（集合）"}},[a._v("#")]),a._v(" 2.4 set（集合）")]),a._v(" "),e("blockquote",[e("h3",{attrs:{id:"_2-4-1-value的数据结构（字典）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-1-value的数据结构（字典）"}},[a._v("#")]),a._v(" 2.4.1 value的数据结构（字典）")])]),a._v(" "),e("ul",[e("li",[a._v("redis中的集合相当于一个特殊的字典，字典的所有value都位null")]),a._v(" "),e("li",[a._v("当集合中的最后一个元素被移除后，数据结构会被自动删除，内存被回收")])]),a._v(" "),e("blockquote",[e("h3",{attrs:{id:"_2-4-2-set使用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-2-set使用场景"}},[a._v("#")]),a._v(" 2.4.2 set使用场景")])]),a._v(" "),e("ul",[e("li",[a._v("set结构可以用来存储某个活动中中奖的用户ID,因为有去重功能，可以保证同一用户不会中间两次")])]),a._v(" "),e("h2",{attrs:{id:"_2-5-zset（有序集合）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-zset（有序集合）"}},[a._v("#")]),a._v(" 2.5 zset（有序集合）")]),a._v(" "),e("blockquote",[e("h3",{attrs:{id:"_2-5-1-value的数据结构（跳跃列表-字典）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-1-value的数据结构（跳跃列表-字典）"}},[a._v("#")]),a._v(" 2.5.1 "),e("code",[a._v("value的数据结构")]),a._v("（跳跃列表+字典）")])]),a._v(" "),e("ul",[e("li",[a._v("1.zset一方面是一个set，保证了内部的唯一性")]),a._v(" "),e("li",[a._v("2.另一方面它可以给每一个value赋予一个score，代表这个value的权重")]),a._v(" "),e("li",[a._v("3.zset内部实现用的是一种叫做“跳跃列表”的数据结构")]),a._v(" "),e("li",[a._v("4.zset最后一个元素被移除后，数据结构就会被自动删除，内存也会被回收")])]),a._v(" "),e("blockquote",[e("h3",{attrs:{id:"_2-5-2-zset应用场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-2-zset应用场景"}},[a._v("#")]),a._v(" 2.5.2 "),e("code",[a._v("zset应用场景")])])]),a._v(" "),e("ul",[e("li",[a._v("1.粉丝列表：value（粉丝ID），score（关注时间），这样可以轻松按关注事件排序")]),a._v(" "),e("li",[a._v("2.学生成绩：value（学生ID），score（考试成绩），这样可以轻松对成绩排序")]),a._v(" "),e("li",[a._v("排行榜")])])])}),[],!1,null,null,null);_.default=s.exports}}]);