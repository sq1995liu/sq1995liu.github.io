(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{1027:function(e,g,A){"use strict";A.r(g);var v=A(21),n=Object(v.a)({},(function(){var e=this,g=e.$createElement,v=e._self._c||g;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h2",{attrs:{id:"_01-时间复杂度"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_01-时间复杂度"}},[e._v("#")]),e._v(" 01.时间复杂度")]),e._v(" "),v("h3",{attrs:{id:"_1-1-各种算法比较"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-各种算法比较"}},[e._v("#")]),e._v(" 1.1 各种算法比较")]),e._v(" "),v("ul",[v("li",[e._v("2层for循环都是 O（n²）")]),e._v(" "),v("li",[e._v("log(n)：每次循环减半（二分查找）")]),e._v(" "),v("li",[e._v("快排：nlog(n)")])]),e._v(" "),v("p",[v("img",{staticStyle:{width:"600px","margin-left":"50px"},attrs:{src:A(696)}})]),e._v(" "),v("h3",{attrs:{id:"_1-2-算法不稳定定义"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-算法不稳定定义"}},[e._v("#")]),e._v(" 1.2 算法不稳定定义")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("**定义：**在排序之前,有两个数相等，但是在排序结束之后,它们两个有可能改变顺序.")])]),e._v(" "),v("li",[v("p",[e._v("**说明：**在一个待排序队列中,A和B相等,且A排在B的前面,而排序之后,A排在了B的后面.这个时候,我们说这种算法是不稳定的.")])])]),e._v(" "),v("h3",{attrs:{id:"_1-3-不稳定的几种算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-不稳定的几种算法"}},[e._v("#")]),e._v(" 1.3 不稳定的几种算法")]),e._v(" "),v("ul",[v("li",[v("p",[v("strong",[e._v("1）快排为什么不稳定")])]),e._v(" "),v("ul",[v("li",[e._v("3 2 2 4 经过第一次快排后结果：2 2 3 4 （第3号位置的2第一次排序后跑到第1号位置了）")])])]),e._v(" "),v("li",[v("p",[v("strong",[e._v("2）堆排序为什么不稳定")])]),e._v(" "),v("ul",[v("li",[e._v("如果堆顶3先输出，则，第三层的27（最后一个27）跑到堆顶，然后堆稳定，继续输出堆顶，是刚才那个27")]),e._v(" "),v("li",[e._v("这样说明后面的27先于第二个位置的27输出，不稳定")])])])]),e._v(" "),v("p",[v("img",{staticStyle:{width:"200px","margin-left":"120px"},attrs:{src:A(697)}})]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("3）选择排序为什么不稳定")]),e._v(" "),v("ul",[v("li",[e._v("5 8 5 2 9 第一次假定1号位置的5最小，但是实际最小的是4号位置的2")]),e._v(" "),v("li",[e._v("第一次排序后为：2 8 5 5 9 以前1号位置的5跑到3号位置5的后面了")])])])])])}),[],!1,null,null,null);g.default=n.exports},696:function(e,g,A){e.exports=A.p+"assets/img/image-20210120163218109.7cd84854.png"},697:function(e,g){e.exports="data:image/png;base64,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"}}]);