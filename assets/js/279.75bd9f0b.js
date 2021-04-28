(window.webpackJsonp=window.webpackJsonp||[]).push([[279],{964:function(s,a,t){"use strict";t.r(a);var r=t(21),e=Object(r.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"_01-inventory-主机清单"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_01-inventory-主机清单"}},[s._v("#")]),s._v(" 01.Inventory(主机清单)")]),s._v(" "),t("p",[t("code",[s._v("主机清单配置文件在：")]),s._v(" "),t("code",[s._v("/etc/ansible/hosts")])]),s._v(" "),t("h2",{attrs:{id:"_1-1-未分组的主机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-未分组的主机"}},[s._v("#")]),s._v(" 1.1 未分组的主机")]),s._v(" "),t("ul",[t("li",[s._v("未分配的主机会默认分配到一个"),t("code",[s._v("all")]),s._v("的组")])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("node2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("# vim "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("etc"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("ansible"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("hosts \n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".56")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".65")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".100")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".66")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"_1-2-属于webservers组主机集合"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-属于webservers组主机集合"}},[s._v("#")]),s._v(" 1.2 属于webservers组主机集合")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("中括号[]里是组名，用于服务器角色分组")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("默认内置两个组")]),s._v("：all 和 ungrouped")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("all")]),s._v(" 包含所有主机")]),s._v(" "),t("li",[t("code",[s._v("ungrouped")]),s._v(" 代表不属于任何组的主机。")]),s._v(" "),t("li",[s._v("all 和 ungrouped 是隐藏的，不会出现在组列表中。")])])])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("node2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("# vim "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("etc"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("ansible"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("hosts \n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("webservers"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".56")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".65")]),s._v("  ansible_ssh_user"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root  ansible_ssh_pass"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".56")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".66")]),s._v("  ansible_ssh_user"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root  ansible_ssh_pass"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"_1-3-主机变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-主机变量"}},[s._v("#")]),s._v(" 1.3 主机变量")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("node2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("# vim "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("etc"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("ansible"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("hosts \n# 主机变量\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("webservers"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".56")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".65")]),s._v("  ansible_ssh_user"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root  ansible_ssh_pass"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("  http_port"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".56")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".66")]),s._v("  ansible_ssh_user"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root  ansible_ssh_pass"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" \n\n# 组变量\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("webservers"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("vars"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" \nhttp_port"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("\nserver_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("www"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("example"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("ul",[t("li",[s._v("测试打印变量")])]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("node2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("# ansible webservers "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("a "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"echo {{http_port}}"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".56")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".66")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CHANGED")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" rc"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".56")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".65")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("CHANGED")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" rc"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h1",{attrs:{id:"_04-ansible基本使用（ad-hoc）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_04-ansible基本使用（ad-hoc）"}},[s._v("#")]),s._v(" 04.Ansible基本使用（ad-hoc）")]),s._v(" "),t("h2",{attrs:{id:"_4-1-ssh密码认证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-ssh密码认证"}},[s._v("#")]),s._v(" 4.1 SSH密码认证")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("webservers"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".56")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".66")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" ansible_ssh_user"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root ansible_ssh_pass"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".56")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".65")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" ansible_ssh_user"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root ansible_ssh_pass"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"_4-2-ssh密钥对认证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-ssh密钥对认证"}},[s._v("#")]),s._v(" 4.2 SSH密钥对认证")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("webservers"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".10")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" ansible_ssh_user"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root ansible_ssh_key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("root")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ssh"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("id_rsa\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".11")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" ansible_ssh_user"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"_4-3-基本命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-基本命令"}},[s._v("#")]),s._v(" 4.3 基本命令")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("[root@k8s-node2 ~]# ansible webservers --list\n  hosts (2):\n    192.168.56.65\n    192.168.56.66\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);