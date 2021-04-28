(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{616:function(s,t,a){s.exports=a.p+"assets/img/image-20200308192045028.58a2c9c7.png"},617:function(s,t,a){s.exports=a.p+"assets/img/image-20200308192255298.709f8fd0.png"},982:function(s,t,a){"use strict";a.r(t);var n=a(21),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("**更多内容见博客：**https://www.cnblogs.com/xiaonq/p/10256414.html")]),s._v(" "),n("h2",{attrs:{id:"_01-docker-compose理论部分"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_01-docker-compose理论部分"}},[s._v("#")]),s._v(" 01.docker-compose理论部分")]),s._v(" "),n("h3",{attrs:{id:"_1-1-什么是docker-compose-（what）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-什么是docker-compose-（what）"}},[s._v("#")]),s._v(" 1.1 什么是docker-compose?（What）")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("Compose是一个"),n("strong",[s._v("定义和管理多容器的工具")]),s._v("，使用Python语言编写。")])]),s._v(" "),n("li",[n("p",[s._v("使用Compose配置文件描述多个容器应用的架构，比如使用什么镜像、数据卷、网络、映射端口等；")])]),s._v(" "),n("li",[n("p",[s._v("然后一条命令管理所有服务，比如启动、停止、重启等。")])])]),s._v(" "),n("h3",{attrs:{id:"_1-2-docker-compose作用？（where-why）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-docker-compose作用？（where-why）"}},[s._v("#")]),s._v(" 1.2 docker compose作用？（Where/Why）")]),s._v(" "),n("ul",[n("li",[s._v("现在我们要部署django项目，"),n("strong",[s._v("需要django+nginx+mysql+redis")]),s._v("等")]),s._v(" "),n("li",[s._v("我们需要开启四个docker容器进行部署每一个组件，如果"),n("strong",[s._v("每个容器单独管理太过于复杂,而且容器间启动先后顺序有依赖")]),s._v("，而且可能是给客户部署项目")]),s._v(" "),n("li",[s._v("docker compose就是一个可以同时管理一个项目中的多个docker容器的工具，一键部署启动")])]),s._v(" "),n("h3",{attrs:{id:"_1-3-docker-compose安装与基本使用？（how）"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-docker-compose安装与基本使用？（how）"}},[s._v("#")]),s._v(" 1.3 docker-compose安装与基本使用？（How）")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@linux"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("node4 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# curl -L https://github.com/docker/compose/releases/download/1.15.0/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@linux"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("node4 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chmod +x /usr/local/bin/docker-compose")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h2",{attrs:{id:"_02-docker-compose语法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_02-docker-compose语法"}},[s._v("#")]),s._v(" 02. docker-compose语法")]),s._v(" "),n("h3",{attrs:{id:"_2-1-compose-配置常用字段"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-compose-配置常用字段"}},[s._v("#")]),s._v(" 2.1 compose 配置常用字段")]),s._v(" "),n("p",[n("img",{staticStyle:{width:"1100px","margin-left":"50px"},attrs:{src:a(616)}})]),s._v(" "),n("h3",{attrs:{id:"_2-2-docker-compose常用命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-docker-compose常用命令"}},[s._v("#")]),s._v(" 2.2 docker-compose常用命令")]),s._v(" "),n("p",[n("img",{staticStyle:{width:"1100px","margin-left":"50px"},attrs:{src:a(617)}})]),s._v(" "),n("h3",{attrs:{id:"_2-3-docker-compose配置文件说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-docker-compose配置文件说明"}},[s._v("#")]),s._v(" 2.3 docker-compose配置文件说明")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[s._v("version"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3'")]),s._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker-compose版本号")]),s._v("\n\nservices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 一级服务名称")]),s._v("\n  mysql"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("       "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 服务名，可以通过服务名对容器进行管理（自己定义）")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#1.docker容器主机名")]),s._v("\n    hostname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" mysql\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#2.指定拉取镜像或者使用Dockerfile构建")]),s._v("\n    image"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" mysql"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.7")]),s._v("             "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定拉取的镜像版本（方法1）")]),s._v("\n    build"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("                       "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 构建nginx 容器（方法2）")]),s._v("\n      context"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nginx           "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定环境在当前目录的 nginx文件夹中")]),s._v("\n      dockerfile"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Dockerfile     "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定使用nginx文件夹中的Dockerfile进行构建")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#3.执行命令")]),s._v("\n    command"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" python manage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py migrate "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" python manage"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py runserver "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n    command"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" uwsgi "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("ini uwsgi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ini                 "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动uwsgi")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#4.指定容器挂载路径进行持久化")]),s._v("\n    volumes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("              "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将mysql的 /var/lib/mysql数据路径挂载到本地进行持久化")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mysql"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("var"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("lib"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("mysql\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#5. 暴露端口 或者 映射端口")]),s._v("\n    expose"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("               "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开放的端口号，给docker容器之间通信访问")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3306"')]),s._v("\n    ports"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"80:80"')]),s._v("           "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 把端口映射给宿主机，提供服务")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#6.指定使用的网络")]),s._v("\n    networks"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("             \n      "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" lnmp\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#7.当宿主机重启docker容器也自动重启")]),s._v("\n    restart"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" always\n\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#8. 添加环境变量   ")]),s._v("\n    environment"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("          \n      "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" MYSQL_ROOT_PASSWORD"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root         "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# root密码")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" MYSQL_DATABASE"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("djangodocker      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建数据库")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" MYSQL_USER"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("django                "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建一个普通用户")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" MYSQL_PASSWORD"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("django            "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 普通用户密码")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#9. 添加依赖，必须先启动redis容器")]),s._v("\n    depends_on"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" redis\n\nnetworks"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建网络")]),s._v("\n  lnmp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);