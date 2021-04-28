(window.webpackJsonp=window.webpackJsonp||[]).push([[280],{966:function(s,a,t){"use strict";t.r(a);var e=t(21),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"_01-ansible基本使用（ad-hoc）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_01-ansible基本使用（ad-hoc）"}},[s._v("#")]),s._v(" 01.Ansible基本使用（ad-hoc）")]),s._v(" "),t("h2",{attrs:{id:"_1-1-ssh密码认证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-ssh密码认证"}},[s._v("#")]),s._v(" 1.1 SSH密码认证")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("webservers"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".56")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".66")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" ansible_ssh_user"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root ansible_ssh_pass"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".56")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".65")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" ansible_ssh_user"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root ansible_ssh_pass"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"_1-2-ssh密钥对认证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-ssh密钥对认证"}},[s._v("#")]),s._v(" 1.2 SSH密钥对认证")]),s._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("webservers"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".10")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" ansible_ssh_user"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root ansible_ssh_key"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("root")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ssh"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("id_rsa\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".11")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" ansible_ssh_user"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"_1-3-基本命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-基本命令"}},[s._v("#")]),s._v(" 1.3 基本命令")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("[root@k8s-node2 ~]# ansible webservers --list\n  hosts (2):\n    192.168.56.65\n    192.168.56.66\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);