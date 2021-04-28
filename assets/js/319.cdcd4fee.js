(window.webpackJsonp=window.webpackJsonp||[]).push([[319],{1048:function(s,t,a){"use strict";a.r(t);var e=a(21),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_01-mysql中的锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_01-mysql中的锁"}},[s._v("#")]),s._v(" 01.mysql中的锁")]),s._v(" "),a("h2",{attrs:{id:"_1-1-锁分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-锁分类"}},[s._v("#")]),s._v(" 1.1 锁分类")]),s._v(" "),a("ul",[a("li",[a("p",[a("code",[s._v("按使用方式划分")]),s._v("：乐观锁、悲观锁")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("按锁级别划分")]),s._v("：共享锁、排他锁")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("按锁的粒度划分")]),s._v("：表级锁、行级锁、页级锁")])]),s._v(" "),a("li",[a("p",[s._v("按操作划分：DML锁，DDL锁")])]),s._v(" "),a("li",[a("p",[s._v("按加锁方式划分：自动锁、显示锁")])])]),s._v(" "),a("h2",{attrs:{id:"_1-2-共享锁和排它锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-共享锁和排它锁"}},[s._v("#")]),s._v(" 1.2 共享锁和排它锁")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("共享锁（"),a("code",[s._v("读锁")]),s._v("）")]),s._v(" "),a("ul",[a("li",[s._v("共享锁又叫读锁，如果事务T对A加上共享锁，则其它事务只能对A再加共享锁，不能加其它锁。")]),s._v(" "),a("li",[s._v("获准共享锁的事务只能读数据，不能写数据。")]),s._v(" "),a("li",[s._v("用法： SELECT … LOCK IN SHARE MODE;")])])]),s._v(" "),a("li",[a("p",[s._v("排它锁（"),a("code",[s._v("写锁")]),s._v("）")]),s._v(" "),a("ul",[a("li",[s._v("排它锁又叫写锁，如果事务T对A加上排它锁，则其它事务都不能对A加任何类型的锁。获准排它锁的事务既能读数据，又能写数据。")]),s._v(" "),a("li",[s._v("用法 ：  SELECT … FOR UPDATE")])])])]),s._v(" "),a("h2",{attrs:{id:"_1-3-乐观锁和悲观锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-乐观锁和悲观锁"}},[s._v("#")]),s._v(" 1.3 乐观锁和悲观锁")]),s._v(" "),a("h3",{attrs:{id:"_2-3-1-悲观锁：写少读多"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-1-悲观锁：写少读多"}},[s._v("#")]),s._v(" 2.3.1 悲观锁：写少读多")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("MySQL会对查询结果集中"),a("code",[s._v("每行数据都添加排他锁")]),s._v("，"),a("code",[s._v("其他线程对该记录的更新与删除操作都会阻塞")])])]),s._v(" "),a("li",[a("p",[s._v("申请前提："),a("code",[s._v("没有线程对该结果集中的任何行数据使用排他锁或共享锁，否则申请会阻塞")]),s._v("。")])]),s._v(" "),a("li",[a("p",[s._v("适用场景：悲观锁适合写入频繁的场景。")])])]),s._v(" "),a("blockquote",[a("p",[a("code",[s._v("对商品数量-1操作，悲观锁实现")])]),s._v(" "),a("ul",[a("li",[s._v("每次获取商品时，对该商品加排他锁")]),s._v(" "),a("li",[s._v("也就是在用户A获取获取 id=1 的商品信息时对该行记录加锁，期间其他用户阻塞等待访问该记录。")])])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#### 悲观锁实现加一操作代码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 我们可以看到，首先通过begin开启一个事物，在获得shop信息和修改数据的整个过程中都对数据加锁，保证了数据的一致性。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v("'''\nbegin;\nselect id,name,stock as old_stock from shop  where id=1 for update;\nupdate shop set stock=stock-1 where id=1 and stock=old_stock;\ncommit\n'''")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"_2-3-2-乐观锁：读多写少"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-2-乐观锁：读多写少"}},[s._v("#")]),s._v(" 2.3.2 乐观锁：读多写少")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("在更新数据的时候需要比较程序中的库存量与数据库中的库存量是否相等，如果相等则进行更新。")])]),s._v(" "),a("li",[a("p",[s._v("反之"),a("code",[s._v("程序重新获取库存量，再次进行比较，直到两个库存量的数值相等才进行数据更新")]),s._v("。")])])]),s._v(" "),a("blockquote",[a("p",[a("code",[s._v("乐观锁实现对商品-1操作")])]),s._v(" "),a("ul",[a("li",[s._v("每次获取商品时，不对该商品加锁。")]),s._v(" "),a("li",[s._v("在更新数据的时候需要比较程序中的库存量与数据库中的库存量是否相等，如果相等则进行更新")]),s._v(" "),a("li",[s._v("反之程序重新获取库存量，再次进行比较，直到两个库存量的数值相等才进行数据更新。")])])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#### 乐观锁实现加一操作代码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 我们可以看到，只有当对数量-1操作时才会加锁，只有当程序中值和数据库中的值相等时才正真执行。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v("'''\n//不加锁\nselect id,name,stock where id=1;\n//业务处理\nbegin;\nupdate shop set stock=stock-1 where id=1 and stock=stock;\ncommit;\n'''")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"_1-4-行级锁-表级锁"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-行级锁-表级锁"}},[s._v("#")]),s._v(" 1.4 行级锁 & 表级锁")]),s._v(" "),a("ul",[a("li",[s._v("行级锁（写多读少）开销大，加锁慢，锁定粒度最小，"),a("strong",[s._v("发生锁冲突概率最低")]),s._v("，并发度最高")]),s._v(" "),a("li",[s._v("表级锁（适合大量的读操作）开销小，加锁快，锁定粒度大、发生锁冲突最高，并发度最低")])])])}),[],!1,null,null,null);t.default=n.exports}}]);