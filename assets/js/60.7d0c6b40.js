(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{445:function(s,t,a){s.exports=a.p+"assets/img/image-20210217161335502.50100fe9.png"},446:function(s,t,a){s.exports=a.p+"assets/img/image-20210217161518715.c3c049c3.png"},821:function(s,t,a){"use strict";a.r(t);var n=a(21),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"_01-安装djangorestframework"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_01-安装djangorestframework"}},[s._v("#")]),s._v(" 01.安装djangorestframework")]),s._v(" "),n("ul",[n("li",[s._v("DRF框架依赖于Django，"),n("code",[s._v("需要先安装Django环境，再安装djangorestframework")])])]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[s._v("pip install djangorestframework"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.11")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),s._v("        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装djangorestframework")]),s._v("\npip install django"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("filter")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.3")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),s._v("             "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装过滤器")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("ul",[n("li",[s._v("创建django环境")])]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ① 创建一个名为django2.2的虚拟环境")]),s._v("\nmkvirtualenv "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("p python django2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ② 进入django2.2虚拟环境")]),s._v("\nworkon django2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ③ 安装Django环境")]),s._v("\npip install Django"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.2")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".5")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h2",{attrs:{id:"_02-drf配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_02-drf配置"}},[s._v("#")]),s._v(" 02.DRF配置")]),s._v(" "),n("h3",{attrs:{id:"_2-1-创建一个测试项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-创建一个测试项目"}},[s._v("#")]),s._v(" 2.1 创建一个测试项目")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("django2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" C"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\\Users\\Lenovo"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  cd C"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\\tmp\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("django2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" C"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\\tmp"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  django"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("admin startproject drf_demo\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("django2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" C"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\\tmp\\drf_demo"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  python manage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py startapp book\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h3",{attrs:{id:"_2-2-drf应用注册"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-drf应用注册"}},[s._v("#")]),s._v(" 2.2 DRF应用注册")]),s._v(" "),n("ul",[n("li",[s._v("setting.py中注册djangorestframework")])]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[s._v("INSTALLED_APPS "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rest_framework'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("             "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注册 djangorestframework")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'book.apps.BookConfig'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("         "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注册刚刚创建的APP：book")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h3",{attrs:{id:"_2-3-路由分发"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-路由分发"}},[s._v("#")]),s._v(" 2.3 路由分发")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("drf_demo/urls.py")])])]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" django"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("contrib "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" admin\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" django"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("urls "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("include\n\nurlpatterns "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'admin/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" admin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("site"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("urls"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'book/'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" include"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'book.urls'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'book'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" namespace"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'book'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h3",{attrs:{id:"_2-4-定义模型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-定义模型"}},[s._v("#")]),s._v(" 2.4 定义模型")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" django"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("db "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" models\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#定义图书模型类BookInfo")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BookInfo")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("models"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Model"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    btitle "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" models"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CharField"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("max_length"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" verbose_name"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'名称'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    bpub_date "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" models"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("DateField"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("verbose_name"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'发布日期'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    bread "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" models"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("IntegerField"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" verbose_name"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'阅读量'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    bcomment "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" models"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("IntegerField"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" verbose_name"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'评论量'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    is_delete "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" models"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("BooleanField"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("False")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" verbose_name"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'逻辑删除'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Meta")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        db_table "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'tb_books'")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指明数据库表名")]),s._v("\n        verbose_name "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'图书'")]),s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在admin站点中显示的名称")]),s._v("\n        verbose_name_plural "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" verbose_name  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示的复数名称")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("__str__")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""定义每个数据对象的显示信息"""')]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" self"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("btitle\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("ul",[n("li",[s._v("创建表")])]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("django2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" C"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\\tmp\\drf_demo"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("   python manage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py makemigrations\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("django2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" C"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\\tmp\\drf_demo"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("   python manage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py migrate\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h2",{attrs:{id:"_03-drf框架功能演示"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_03-drf框架功能演示"}},[s._v("#")]),s._v(" 03.DRF框架功能演示")]),s._v(" "),n("h3",{attrs:{id:"_3-1-步骤1：创建序列化器类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-步骤1：创建序列化器类"}},[s._v("#")]),s._v(" 3.1 步骤1：创建序列化器类")]),s._v(" "),n("ul",[n("li",[s._v("在 "),n("code",[s._v("book")]),s._v(" 应用中新建 "),n("code",[s._v("serializers.py")]),s._v(" 用于保存所要创建的序列化器类。")])]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" rest_framework "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" serializers\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" book"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("models "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" BookInfo\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BookInfoSerializer")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("serializers"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ModelSerializer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""图书序列化器类"""')]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Meta")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        model "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" BookInfo\n        fields "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'__all__'")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[n("strong",[s._v("小知识")]),s._v("：")]),s._v(" "),n("ul",[n("li",[s._v("model：指定该序列化器类所对应的模型类")]),s._v(" "),n("li",[s._v("fields：指定依据模型类的哪些字段生成对应序列化器类的字段，__all__代表所有")])]),s._v(" "),n("h3",{attrs:{id:"_3-2-步骤2：编写视图"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-步骤2：编写视图"}},[s._v("#")]),s._v(" 3.2 步骤2：编写视图")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("book/views.py")])])]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" rest_framework"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("viewsets "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" ModelViewSet\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" book"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("serializers "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" BookInfoSerializer\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" book"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("models "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" BookInfo\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BookInfoViewSet")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ModelViewSet"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""视图集"""')]),s._v("\n    queryset "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" BookInfo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("objects"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("all")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    serializer_class "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" BookInfoSerializer\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[n("strong",[s._v("小知识")]),s._v("：")]),s._v(" "),n("ul",[n("li",[s._v("queryset：指定视图在进行数据查询时所使用的查询集")]),s._v(" "),n("li",[s._v("serializer_class：指定视图在进行序列化或反序列化时所使用的序列化器类")])]),s._v(" "),n("h3",{attrs:{id:"_3-3-步骤3：定义路由"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-步骤3：定义路由"}},[s._v("#")]),s._v(" 3.3 步骤3：定义路由")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("book/urls.py")])])]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" django"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("urls "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" re_path\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" book "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" views\n\nurlpatterns "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 路由Router")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" rest_framework"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("routers "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" DefaultRouter\n\nrouter "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" DefaultRouter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nrouter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("register"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'books'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" views"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("BookInfoViewSet"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" basename"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'books'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nurlpatterns "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" router"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("urls\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("ul",[n("li",[n("p",[n("strong",[s._v("小知识：什么是路由Router？")])])]),s._v(" "),n("li",[n("p",[n("strong",[s._v("答：动态生成视图集中的处理方法的url配置项。")])])])]),s._v(" "),n("h3",{attrs:{id:"_3-4-步骤四：测试接口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-步骤四：测试接口"}},[s._v("#")]),s._v(" 3.4 步骤四：测试接口")]),s._v(" "),n("h4",{attrs:{id:"_4-1-测试获取所有图书接口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-测试获取所有图书接口"}},[s._v("#")]),s._v(" 4.1 测试获取所有图书接口")]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[s._v("http"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8000")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("book"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("book"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("返回结果")])]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"code"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"msg"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"success"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"books"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"id"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"btitle"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"西游记"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bpub_date"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2020-08-11"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bread"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1234")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bcomment"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("779")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"id"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"btitle"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"红楼梦"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bpub_date"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2020-09-19"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bread"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bcomment"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5555")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"id"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"btitle"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"水浒传"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bpub_date"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2020-02-12"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bread"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bcomment"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br")])]),n("h4",{attrs:{id:"_4-2-测试创建图书接口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-测试创建图书接口"}},[s._v("#")]),s._v(" 4.2 测试创建图书接口")]),s._v(" "),n("p",[n("img",{staticStyle:{width:"600px","margin-left":"20px"},attrs:{src:a(445)}})]),s._v(" "),n("h4",{attrs:{id:"_4-3-测试修改图书接口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-测试修改图书接口"}},[s._v("#")]),s._v(" 4.3 测试修改图书接口")]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[s._v("http"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8000")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("book"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("book"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[n("img",{staticStyle:{width:"600px","margin-left":"20px"},attrs:{src:a(446)}})]),s._v(" "),n("h4",{attrs:{id:"_4-4-测试删除数据接口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-测试删除数据接口"}},[s._v("#")]),s._v(" 4.4 测试删除数据接口")]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[s._v("http"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8000")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("book"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("book"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);