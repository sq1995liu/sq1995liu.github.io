(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{611:function(s,t,a){s.exports=a.p+"assets/img/image-20200308104821866.56b6423b.png"},977:function(s,t,a){"use strict";a.r(t);var n=a(21),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"_01-什么是docker镜像？-what"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_01-什么是docker镜像？-what"}},[s._v("#")]),s._v(" 01.什么是docker镜像？(What)")]),s._v(" "),n("h3",{attrs:{id:"_1-1-docker镜像理论"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-docker镜像理论"}},[s._v("#")]),s._v(" 1.1 docker镜像理论")]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("docker镜像不包含Linux内核而又精简的Linux操作系统")])]),s._v(" "),n("li",[s._v("docker镜像是一个分层存储的文件，一个镜像可以创建N个容器")]),s._v(" "),n("li",[s._v("可以这么理解，"),n("strong",[s._v("docker 镜像是 docker 容器的静态视角，docker 容器是 docker 镜像的运行状态")]),s._v("。\n"),n("ul",[n("li",[s._v("docker镜像就是存储在磁盘里的没有linux内核只有linux文件系统的安装包")]),s._v(" "),n("li",[s._v("docker容器：docker镜像好比程序，docker容器好比我们把程序运行起来的进程")])])]),s._v(" "),n("li",[s._v("容器只是对docker镜像的引用，如果docker镜像删除，此镜像创建的容器也都失效")])]),s._v(" "),n("h3",{attrs:{id:"_1-2-docker镜像从哪里来"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-docker镜像从哪里来"}},[s._v("#")]),s._v(" 1.2 docker镜像从哪里来")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("Docker Hub是由Docker公司负责维护的公共注册中心，包含大量的容器镜像，Docker工具默认从这个公共镜像库下载镜像。")])]),s._v(" "),n("li",[n("p",[s._v("地址：https://hub.docker.com/explore     # docker官方镜像和使用方法参考地址")])]),s._v(" "),n("li",[n("p",[s._v("配置镜像加速器：https://www.daocloud.io/mirror")])])]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@linux"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("node2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  curl -sSL https://get.daocloud.io/daotools/set_mirror.sh | sh -s http://f1361db2.m.daocloud.io　　　　　　　")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@linux"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("node2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  cat /etc/docker/daemon.json              # 执行上面命令后就会将镜像源修改成国内的地址")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"registry-mirrors"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://f1361db2.m.daocloud.io"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@linux"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("node2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemctl restart docker                  # 重启docker生效")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h2",{attrs:{id:"_02-docker容器读写层"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_02-docker容器读写层"}},[s._v("#")]),s._v(" 02.docker容器读写层")]),s._v(" "),n("h3",{attrs:{id:"_2-1-docker容器本质"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-docker容器本质"}},[s._v("#")]),s._v(" 2.1 docker容器本质")]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("容器其实是在镜像的最上面加了一层读写层")]),s._v("，在运行容器里文件改动时，会先从镜像里要写的文件复制到容器自己的文件系统中（读写层）。")]),s._v(" "),n("li",[n("strong",[s._v("如果容器删除了，最上面的读写层也就删除了，改动也就丢失了")]),s._v("。")]),s._v(" "),n("li",[s._v("所以无论多少个容器共享一个镜像，所做的写操作都是从镜像的文件系统中复制过来操作的，并不会修改镜像的源文件")]),s._v(" "),n("li",[s._v("若想持久化这些改动，可以通过docker commit 将容器保存成一个新镜像")]),s._v(" "),n("li",[n("img",{staticStyle:{width:"800px","margin-left":"0px"},attrs:{src:a(611)}})])]),s._v(" "),n("h3",{attrs:{id:"_2-2-查看docker容器工作目录内容"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-查看docker容器工作目录内容"}},[s._v("#")]),s._v(" 2.2 查看docker容器工作目录内容")]),s._v(" "),n("div",{staticClass:"language-python line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@linux"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("node4 diff"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker run -itd --name=web1 -p 192.168.56.14:81:80 nginx:latest")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@linux"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("node4 diff"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker inspect web1")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 存储驱动")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"GraphDriver"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Data"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"LowerDir"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/var/lib/docker/overlay2/51692869029f819494bb402dc70aa2869b8d1848c3b65c549a010a260e44cc13-init/diff:/var/lib/docker/overlay2/09fa1314e484781dfc1fb25a6cf5df2502fe35dea9025a373a3cb0202732ccce/diff:/var/lib/docker/overlay2/162ec5c9be56e5d718011c09ed087eda04b755e1a68bd1953c60f175e6635e68/diff:/var/lib/docker/overlay2/7c1b27ff59a397ae7d6bd106db579e90476f57bb1ecef9fcb1a6f1ad5ce43b7c/diff"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MergedDir"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/var/lib/docker/overlay2/51692869029f819494bb402dc70aa2869b8d1848c3b65c549a010a260e44cc13/merged"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"UpperDir"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/var/lib/docker/overlay2/51692869029f819494bb402dc70aa2869b8d1848c3b65c549a010a260e44cc13/diff"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"WorkDir"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/var/lib/docker/overlay2/51692869029f819494bb402dc70aa2869b8d1848c3b65c549a010a260e44cc13/work"')]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Name"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"overlay2"')]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"NetworkSettings"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Ports"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"80/tcp"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n                    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"HostIp"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"192.168.56.14"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                        "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"HostPort"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"81"')]),s._v("\n                    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MacAddress"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"02:42:ac:11:00:02"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Networks"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bridge"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Gateway"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"172.17.0.1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"IPAddress"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"172.17.0.2"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                    "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"IPPrefixLen"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@linux"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("node4 diff"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd /var/lib/docker/overlay2/51692869029f819494bb402dc70aa2869b8d1848c3b65c549a010a260e44cc13")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@linux"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("node4 "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("51692869029f819494bb402dc70aa2869b8d1848c3b65c549a010a260e44cc13")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ll    # 查看docker工作目录都哪些内容")]),s._v("\ndiff  link  lower  merged  work\ndiff      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 读写层的差异（在读写层做的操作由这个容器单独管理）")]),s._v("\nmerged    "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 引用docker进行中的文件系统")]),s._v("\nwork      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 项目工作目录")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);