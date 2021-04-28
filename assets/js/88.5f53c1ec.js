(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{1022:function(e,t,s){"use strict";s.r(t);var a=s(21),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"_01-b-tree-b-tree"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_01-b-tree-b-tree"}},[e._v("#")]),e._v(" 01.B-tree/B+tree")]),e._v(" "),a("h3",{attrs:{id:"_2-1-b-tree"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-b-tree"}},[e._v("#")]),e._v(" 2.1 B-Tree")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("每个节点占用一个盘块的磁盘空间，一个节点上有两个升序排序的关键字和三个指向子树根节点的指针，指针存储的是子节点所在磁盘块的地址。")])]),e._v(" "),a("li",[a("p",[e._v("两个关键词划分成的三个范围域对应三个指针指向的子树的数据的范围域。")])]),e._v(" "),a("li",[a("p",[e._v("以根节点为例，关键字为17和35，P1指针指向的子树的数据范围为小于17，P2指针指向的子树的数据范围为17~35，P3指针指向的子树的数据范围为大于35。")])])]),e._v(" "),a("p",[a("img",{staticStyle:{width:"800px","margin-left":"20px"},attrs:{src:s(693)}})]),e._v(" "),a("ul",[a("li",[e._v("模拟查找关键字29的过程")])]),e._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[e._v("'''模拟查找关键字29的过程：'''")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 根据根节点找到磁盘块1，读入内存。【磁盘I/O操作第1次】")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 比较关键字29在区间（17,35），找到磁盘块1的指针P2。")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 根据P2指针找到磁盘块3，读入内存。【磁盘I/O操作第2次】")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 比较关键字29在区间（26,30），找到磁盘块3的指针P2。")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 根据P2指针找到磁盘块8，读入内存。【磁盘I/O操作第3次】")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 在磁盘块8中的关键字列表中找到关键字29。")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("h3",{attrs:{id:"_2-2-b-tree"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-b-tree"}},[e._v("#")]),e._v(" 2.2 B+tree")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("B+Tree是在B-Tree基础上的一种优化")]),e._v("，使其更适合实现外存储索引结构，"),a("code",[e._v("InnoDB存储引擎就是用B+Tree实现其索引结构")]),e._v("。")]),e._v(" "),a("li",[e._v("B-Tree结构图中可以看到每个节点中不仅包含数据的key值，还有data值")]),e._v(" "),a("li",[e._v("而每一个页的存储空间是有限的，如果data数据较大时将会导致每个节点（即一个页）能存储的key的数量很小")]),e._v(" "),a("li",[e._v("当存储的数据量很大时同样会导致B-Tree的深度较大，增大查询时的磁盘I/O次数，进而影响查询效率。")]),e._v(" "),a("li",[a("code",[e._v("在B+Tree中，所有根节点只存储 键和指针，只有叶子节点才存放数据")])])]),e._v(" "),a("p",[a("img",{staticStyle:{width:"700px","margin-left":"20px"},attrs:{src:s(694)}})]),e._v(" "),a("p",[e._v("2.3 MySQL底层索引存储")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("1.InnoDB存储引擎中页的大小为16KB，一般表的主键类型为INT（占用4个字节）或BIGINT（占用8个字节），指针类型也一般为4或8个字节")])]),e._v(" "),a("li",[a("p",[e._v("2.也就是说一个页（B+Tree中的一个节点）中大概存储16KB/(8B+8B)=1K个键值（这里的K取值为〖10〗^3）。")])]),e._v(" "),a("li",[a("p",[e._v("3.也就是说一个深度为3的B+Tree索引可以维护10^3 * 10^3 * 10^3 = 10亿 条记录。")])]),e._v(" "),a("li",[a("p",[e._v("说明：")]),e._v(" "),a("ul",[a("li",[e._v("实际情况中每个节点可能不能填充满，因此在数据库中，B+Tree的高度一般都在2~4层。")]),e._v(" "),a("li",[e._v("mysql的InnoDB存储引擎在设计时是将根节点常驻内存的，也就是说查找某一键值的行记录时最多只需要1~3次磁盘I/O操作。")])])])])])}),[],!1,null,null,null);t.default=r.exports},693:function(e,t,s){e.exports=s.p+"assets/img/image-20210304112609914.33de5b5e.png"},694:function(e,t,s){e.exports=s.p+"assets/img/image-20210304112655635.d13944f7.png"}}]);