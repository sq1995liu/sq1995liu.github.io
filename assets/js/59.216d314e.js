(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{442:function(_,t,v){_.exports=v.p+"assets/img/image-20210217145158339.ef343d9c.png"},443:function(_,t,v){_.exports=v.p+"assets/img/image-20210217145342846.25a820ca.png"},818:function(_,t,v){"use strict";v.r(t);var r=v(21),s=Object(r.a)({},(function(){var _=this,t=_.$createElement,r=_._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[r("h2",{attrs:{id:"_01-drf核心任务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_01-drf核心任务"}},[_._v("#")]),_._v(" 01.DRF核心任务")]),_._v(" "),r("h3",{attrs:{id:"_1-1-drf核心任务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-drf核心任务"}},[_._v("#")]),_._v(" 1.1 DRF核心任务")]),_._v(" "),r("ul",[r("li",[r("p",[_._v("序列化：将对象转换为字典或者json的过程。")])]),_._v(" "),r("li",[r("p",[_._v("反序列化：将字典或json转换保存到对象中的过程。")])]),_._v(" "),r("li",[r("p",[_._v("RestAPI核心工作：")]),_._v(" "),r("ul",[r("li",[_._v("将数据库中的数据序列化为前端所需的格式，并进行返回。")]),_._v(" "),r("li",[_._v("将前端传递的数据反序列化保存为模型类对象，并保存到数据库。")])])]),_._v(" "),r("li",[r("p",[_._v("在开发REST API接口时，视图中主要做了三件事：")]),_._v(" "),r("ul",[r("li",[_._v("① 将请求的数据（如：JSON格式）转换为模型类对象")]),_._v(" "),r("li",[_._v("② 操作数据库")]),_._v(" "),r("li",[_._v("③ 将模型类对象转换为响应的数据（如：JSON格式）")])])])]),_._v(" "),r("h3",{attrs:{id:"_1-2-序列化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-序列化"}},[_._v("#")]),_._v(" 1.2 序列化")]),_._v(" "),r("ul",[r("li",[r("p",[r("strong",[_._v("广义的概念")]),_._v("：将一种数据转换为另外一种格式的过程。")])]),_._v(" "),r("li",[r("p",[r("strong",[_._v("本课程特指")]),_._v("："),r("code",[_._v("将对象转换为字典或json的过程")]),_._v("。")])])]),_._v(" "),r("p",[r("img",{staticStyle:{width:"600px","margin-left":"20px"},attrs:{src:v(442)}})]),_._v(" "),r("h3",{attrs:{id:"_1-3-反序列化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-反序列化"}},[_._v("#")]),_._v(" 1.3 反序列化")]),_._v(" "),r("ul",[r("li",[r("p",[r("strong",[_._v("广义的概念")]),_._v("：和序列化相反的转换过程。")])]),_._v(" "),r("li",[r("p",[r("strong",[_._v("本课程特指")]),_._v("：将字典或json转换为对象的过程。")])])]),_._v(" "),r("p",[r("img",{staticStyle:{width:"700px","margin-left":"20px"},attrs:{src:v(443)}})]),_._v(" "),r("h2",{attrs:{id:"_02-django-rest-framework-简介"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_02-django-rest-framework-简介"}},[_._v("#")]),_._v(" 02.Django REST framework 简介")]),_._v(" "),r("h3",{attrs:{id:"_2-1-作用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-作用"}},[_._v("#")]),_._v(" 2.1 作用")]),_._v(" "),r("ul",[r("li",[r("p",[r("strong",[_._v("Django REST framework可以帮助我们大大提高REST API的开发速度。")])])]),_._v(" "),r("li",[r("p",[_._v("在序列化与反序列化时，虽然操作的数据可能不同，但是过程是相似的，这部分操作DRF框架进行了封装。")])]),_._v(" "),r("li",[r("p",[_._v("在开发REST API的视图时，虽然每个视图操作的数据可能不同")])]),_._v(" "),r("li",[r("p",[_._v("但增、删、改、查的基本流程是一样的，这部分代码DRF框架也进行了封装。")]),_._v(" "),r("ul",[r("li",[r("strong",[_._v("增")]),_._v("：校验请求数据 → 反序列化-将数据保存到对象中 → 保存数据到数据库 → 将保存的对象序列化返回")]),_._v(" "),r("li",[r("strong",[_._v("删")]),_._v("：判断要删除的数据是否存在 → 执行数据库删除 → 返回响应")]),_._v(" "),r("li",[r("strong",[_._v("改")]),_._v("：判断要修改的数据是否存在 → 校验请求的数据 → 反序列化-将数据保存到对象中 → 保存数据到数据库 → 将保存的对象序列化返回")]),_._v(" "),r("li",[r("strong",[_._v("查(1个或多个)")]),_._v("：查询数据库 → 将数据序列化返回")])])])]),_._v(" "),r("h3",{attrs:{id:"_2-2-特点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-特点"}},[_._v("#")]),_._v(" 2.2 特点")]),_._v(" "),r("ul",[r("li",[r("strong",[_._v("提供了定义序列化器的方法，使用序列化器可以进行数据的序列化和反序列化")])]),_._v(" "),r("li",[r("strong",[_._v("提供了丰富的类视图、Mixin扩展类、子类视图、视图集，简化视图代码的编写")])]),_._v(" "),r("li",[_._v("多种身份认证和权限控制方式的支持")]),_._v(" "),r("li",[_._v("内置了限流系统")]),_._v(" "),r("li",[_._v("直观的API web界面")]),_._v(" "),r("li",[_._v("可扩展性，插件丰富")])]),_._v(" "),r("p",[r("strong",[_._v("参考资料")]),_._v("："),r("a",{attrs:{href:"http://www.django-rest-framework.org/",target:"_blank",rel:"noopener noreferrer"}},[_._v("DRF框架官方文档"),r("OutboundLink")],1)]),_._v(" "),r("p",[r("strong",[r("code",[_._v("总结")])]),_._v("：")]),_._v(" "),r("ul",[r("li",[_._v("作用：快速开发RestAPI接口。")]),_._v(" "),r("li",[_._v("特点：进行了大量封装，提高API开发速度。")]),_._v(" "),r("li",[_._v("核心功能：序列化器和视图。")])])])}),[],!1,null,null,null);t.default=s.exports}}]);