(window.webpackJsonp=window.webpackJsonp||[]).push([[268],{949:function(s,t,a){"use strict";a.r(t);var r=a(21),n=Object(r.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_01-crond简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_01-crond简介"}},[s._v("#")]),s._v(" 01. crond简介")]),s._v(" "),a("h3",{attrs:{id:"_1-1-什么是crond？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-什么是crond？"}},[s._v("#")]),s._v(" 1.1 什么是crond？")]),s._v(" "),a("blockquote",[a("h4",{attrs:{id:"_1-什么是crond？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是crond？"}},[s._v("#")]),s._v(" 1.什么是crond？")])]),s._v(" "),a("ul",[a("li",[s._v("crond 是linux用来定期执行程序的命令。")]),s._v(" "),a("li",[s._v("当安装完成操作系统之后，默认便会启动此任务调度命令。")]),s._v(" "),a("li",[s._v("crond命令每分锺会定期检查是否有要执行的工作，自动执行任务")])]),s._v(" "),a("h3",{attrs:{id:"_1-2-crond作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-crond作用"}},[s._v("#")]),s._v(" 1.2 crond作用")]),s._v(" "),a("blockquote",[a("h4",{attrs:{id:"_2-crond作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-crond作用"}},[s._v("#")]),s._v(" 2.crond作用")])]),s._v(" "),a("ul",[a("li",[s._v("**系统执行：**系统周期性所要执行的工作，如备份系统数据、清理缓存")]),s._v(" "),a("li",[s._v("**个人执行：**某个用户定期要做的工作，例如每隔10分钟检查邮件服务器是否有新信")])]),s._v(" "),a("h3",{attrs:{id:"_1-3-crond管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-crond管理"}},[s._v("#")]),s._v(" 1.3 crond管理")]),s._v(" "),a("blockquote",[a("h4",{attrs:{id:"_3-crond管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-crond管理"}},[s._v("#")]),s._v(" 3.crond管理")])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("sbin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("service crond start       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动服务")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("sbin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("service crond stop        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭服务")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("sbin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("service crond restart     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启服务")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("sbin"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("service crond "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("reload")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重新载入配置")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"_02-crond语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_02-crond语法"}},[s._v("#")]),s._v(" 02.crond语法")]),s._v(" "),a("h3",{attrs:{id:"_2-1-crond基本使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-crond基本使用"}},[s._v("#")]),s._v(" 2.1 crond基本使用")]),s._v(" "),a("blockquote",[a("h4",{attrs:{id:"_1-crond基本使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-crond基本使用"}},[s._v("#")]),s._v(" 1.crond基本使用")])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@linux"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("node1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# crontab -l      # 查看当前定时任务")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@linux"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("node1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# crontab -e      # 添加新的定时任务")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" echo "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello World!"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@linux"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("node1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tail -f /var/log/cron         # 查看定时任务执行日志")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@linux"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("node1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# crontab -r                    # 清空任务计划")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"_2-2-crond基本语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-crond基本语法"}},[s._v("#")]),s._v(" 2.2 crond基本语法")]),s._v(" "),a("blockquote",[a("h4",{attrs:{id:"_2-crond基本语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-crond基本语法"}},[s._v("#")]),s._v(" 2.crond基本语法")])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v("'''1. 每隔一分钟执行一次 ls 命令'''")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("    ls\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#分     时   日   月   周    |《==============命令行=======================》|")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v("'''2. 参数说明'''")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"*"')]),s._v("  ： 代表取值范围内的数字\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),s._v("  ： 代表"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"每"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-"')]),s._v("  ： 代表从某个数字到某个数字\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('","')]),s._v("  ： 分开几个离散的数字\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v("'''3. 定时任务常用配置'''")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("      ls             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 每2分钟执行一次ls命令")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("      ls             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定每小时的第5分钟执行一次ls命令")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("      ls             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定每天的 5:30 执行ls命令")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("      ls             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定每月8号的7：30分执行ls命令")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("      ls             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定每年的6月8日5：30执行ls命令")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("       "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      ls             "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定每星期日的6:30执行ls命令[注：0表示星期天，1表示星期1，以此类")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"_2-3-添加调度任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-添加调度任务"}},[s._v("#")]),s._v(" 2.3 添加调度任务")]),s._v(" "),a("blockquote",[a("h4",{attrs:{id:"_3-新增调度任务可用两种方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-新增调度任务可用两种方法"}},[s._v("#")]),s._v(" 3.新增调度任务可用两种方法")])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v("'''法1：在命令行输入: crontab -e 然后添加相应的任务，wq存盘退出 '''")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@linux"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("node1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# crontab -e            ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" echo "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello World!"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v("'''法2： 直接编辑/etc/crontab 文件'''")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@linux"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("node1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vim /etc/crontab")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" root  echo "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test02"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);