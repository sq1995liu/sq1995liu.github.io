(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{1056:function(t,a,s){"use strict";s.r(a);var _=s(21),e=Object(_.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"_01-redis持久化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_01-redis持久化"}},[t._v("#")]),t._v(" 01.redis持久化")]),t._v(" "),_("h2",{attrs:{id:"_1-1-cpa原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-cpa原理"}},[t._v("#")]),t._v(" 1.1 CPA原理")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("1、CPA原理是分布式存储理论的基石：C(一致性)；A(可用性)；P(分区容忍性);")])]),t._v(" "),_("li",[_("p",[t._v("2、当主从网络无法连通时，修改操作无法同步到节点，所以“一致性”无法满足")])]),t._v(" "),_("li",[_("p",[t._v("3、除非我们牺牲“可用性”，也就是暂停分布式节点服务，不再提供修改数据功能，直到网络恢复")])]),t._v(" "),_("li",[_("p",[_("code",[t._v("一句话概括CAP: 当网络分区发生时，一致性和可用性两难全")])])])]),t._v(" "),_("h2",{attrs:{id:"_1-2-全量同步（快照同步）-rdb"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-全量同步（快照同步）-rdb"}},[t._v("#")]),t._v(" 1.2 全量同步（快照同步）: RDB")]),t._v(" "),_("p",[_("img",{staticStyle:{width:"700px","margin-left":"50px"},attrs:{src:s(711)}})]),t._v(" "),_("ul",[_("li",[_("p",[t._v("注："),_("code",[t._v("Redis全量复制一般发生在Slave初始化阶段，这时Slave需要将Master上的所有数据都复制一份")])])]),t._v(" "),_("li",[_("p",[t._v("1）从服务器连接主服务器，发送SYNC命令；")])]),t._v(" "),_("li",[_("p",[t._v("2）主服务器接收到SYNC命名后，开始执行BGSAVE命令生成RDB文件并使用缓冲区记录此后执行的所有写命令；")])]),t._v(" "),_("li",[_("p",[t._v("3）主服务器BGSAVE执行完后，向所有从服务器发送快照文件，并在发送期间继续记录被执行的写命令；")])]),t._v(" "),_("li",[_("p",[t._v("4）从服务器收到快照文件后丢弃所有旧数据，载入收到的快照；")])]),t._v(" "),_("li",[_("p",[t._v("5）主服务器快照发送完毕后开始向从服务器发送缓冲区中的写命令；")])]),t._v(" "),_("li",[_("p",[t._v("6）从服务器完成对快照的载入，开始接收命令请求，并执行来自主服务器缓冲区的写命令；")])]),t._v(" "),_("li",[_("p",[t._v("7）"),_("code",[t._v("完成上面几个步骤后就完成了从服务器数据初始化的所有操作，从服务器此时可以接收来自用户的读请求。")])])])]),t._v(" "),_("p",[_("img",{staticStyle:{width:"800px","margin-left":"50px"},attrs:{src:s(712)}})]),t._v(" "),_("h2",{attrs:{id:"_1-3-增量同步：aof"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-增量同步：aof"}},[t._v("#")]),t._v(" 1.3 增量同步：AOF")]),t._v(" "),_("p",[_("img",{staticStyle:{width:"700px","margin-left":"50px"},attrs:{src:s(713)}})]),t._v(" "),_("ul",[_("li",[_("p",[t._v("1、Redis增量复制是指Slave初始化后开始正常工作时主服务器发生的写操作同步到从服务器的过程。")])]),t._v(" "),_("li",[_("p",[t._v("2、增量复制的过程主要是主服务器每执行一个写命令就会向从服务器发送相同的写命令，从服务器接收并执行收到的写命令。")])])]),t._v(" "),_("h2",{attrs:{id:"_1-4-redis主从同步策略"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-redis主从同步策略"}},[t._v("#")]),t._v(" 1.4 redis主从同步策略")]),t._v(" "),_("ul",[_("li",[_("p",[t._v("1、主从刚刚连接的时候，进行全量同步；全同步结束后，进行增量同步。")])]),t._v(" "),_("li",[_("p",[t._v("2、当然，如果有需要，slave 在任何时候都可以发起全量同步。")])]),t._v(" "),_("li",[_("p",[t._v("3、redis 策略是，无论如何，首先会尝试进行增量同步，如不成功，要求从机进行全量同步。")])])]),t._v(" "),_("h2",{attrs:{id:"_1-5-注意点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-注意点"}},[t._v("#")]),t._v(" 1.5 注意点")]),t._v(" "),_("ul",[_("li",[t._v("如果多个Slave断线了，需要重启的时候，因为只要Slave启动，就会发送sync请求和主机全量同步")]),t._v(" "),_("li",[t._v("当多个同时出现的时候，可能会导致Master IO剧增宕机。")])])])}),[],!1,null,null,null);a.default=e.exports},711:function(t,a,s){t.exports=s.p+"assets/img/image-20210119141558408.07c09b1b.png"},712:function(t,a,s){t.exports=s.p+"assets/img/image-20210115114732368.067555a9.png"},713:function(t,a,s){t.exports=s.p+"assets/img/image-20210119141652873.f4cfb850.png"}}]);