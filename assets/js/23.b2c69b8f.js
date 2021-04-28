(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{589:function(s,t,a){s.exports=a.p+"assets/img/1579669525117.faa97601.png"},590:function(s,t,a){s.exports=a.p+"assets/img/1579669640095.b4fc132a.png"},591:function(s,t,a){s.exports=a.p+"assets/img/1579669732853.c0143ac0.png"},592:function(s,t,a){s.exports=a.p+"assets/img/1579670855433.9d3d2fe7.png"},945:function(s,t,a){"use strict";a.r(t);var e=a(21),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"_01-安装linux操作系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_01-安装linux操作系统"}},[s._v("#")]),s._v(" 01.安装Linux操作系统")]),s._v(" "),e("h2",{attrs:{id:"_1-1-安装linux系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-安装linux系统"}},[s._v("#")]),s._v(" 1.1 安装Linux系统")]),s._v(" "),e("h3",{attrs:{id:"_1-1-1-硬件配置如下"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1-硬件配置如下"}},[s._v("#")]),s._v(" 1.1.1 硬件配置如下")]),s._v(" "),e("p",[e("img",{staticStyle:{width:"600px","margin-left":"50px"},attrs:{src:a(589)}})]),s._v(" "),e("h3",{attrs:{id:"_1-1-2-修改网卡默认名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-2-修改网卡默认名"}},[s._v("#")]),s._v(" 1.1.2 修改网卡默认名")]),s._v(" "),e("ul",[e("li",[s._v("先把光标放到”install CentOS 7”，按 Tab键编辑内核参数，添加 (net.ifnames=0 biosdevname=0)")])]),s._v(" "),e("p",[e("strong",[s._v("作用：")]),e("span",{staticStyle:{color:"red"}},[s._v("使网卡名称为 eth0 这样的格式")])]),s._v(" "),e("p",[e("img",{staticStyle:{width:"600px","margin-left":"50px"},attrs:{src:a(590)}})]),s._v(" "),e("h3",{attrs:{id:"_1-1-3-选择安装语言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-3-选择安装语言"}},[s._v("#")]),s._v(" 1.1.3 选择安装语言")]),s._v(" "),e("ul",[e("li",[s._v("建议安装语言改成 简体中文，其他保持默认即可")])]),s._v(" "),e("p",[e("img",{staticStyle:{width:"600px","margin-left":"50px"},attrs:{src:a(591)}})]),s._v(" "),e("blockquote",[e("h4",{attrs:{id:"_4-设置完root密码等待安装完成重启即可完成系统安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-设置完root密码等待安装完成重启即可完成系统安装"}},[s._v("#")]),s._v(" 4."),e("strong",[s._v("设置完root密码等待安装完成重启即可完成系统安装")])])]),s._v(" "),e("blockquote",[e("h4",{attrs:{id:"_5-配置-vmware-nat-模式默认地址池"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-配置-vmware-nat-模式默认地址池"}},[s._v("#")]),s._v(" 5."),e("strong",[s._v("配置 VMware NAT 模式默认地址池")])])]),s._v(" "),e("p",[e("img",{staticStyle:{width:"600px","margin-left":"50px"},attrs:{src:a(592)}})]),s._v(" "),e("hr"),s._v(" "),e("h2",{attrs:{id:"_1-2-优化系统配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-优化系统配置"}},[s._v("#")]),s._v(" 1.2 优化系统配置")]),s._v(" "),e("h3",{attrs:{id:"_1-2-1-配置网卡"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-配置网卡"}},[s._v("#")]),s._v(" 1.2.1 配置网卡")]),s._v(" "),e("p",[s._v("[root@linux-node1 ~]#  "),e("span",{staticStyle:{color:"red"}},[s._v(" vim /etc/sysconfig/network-scripts/ifcfg-eth0 ")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TYPE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Ethernet             "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 网卡类型")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("BOOTPROTO")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("static          "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用静态ip地址")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DEFROUTE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yes\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PEERDNS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("no\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PEERROUTES")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yes\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IPV4_FAILURE_FATAL")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("no\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NAME")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("eth0                 "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 网卡名称")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# UUID=3dacb9a3-62a4-41cc-b9ab-44a20ee9157e")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DEVICE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("eth0               "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 网卡设备名称")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ONBOOT")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yes                "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启用网卡")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IPADDR")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".56.11      "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 静态ip(必须与上面NAT中配置的地址同一网段)")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NETMASK")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("255.255")]),s._v(".255.0     "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 子网掩码")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GATEWAY")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".56.2      "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 网关地址(VMware默认网关地址为 xxx.xxx.xxx.2 网段地址) ")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("h3",{attrs:{id:"_1-2-2-重启网卡并关闭防火墙"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-重启网卡并关闭防火墙"}},[s._v("#")]),s._v(" 1.2.2 重启网卡并关闭防火墙")]),s._v(" "),e("div",{staticClass:"language-python line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v("'''1.配置网卡'''")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@linux"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("node1 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemctl restart network          # 重启网卡使配置生效")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@linux"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("node1 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemctl disable NetworkManager     # 禁用NetworkManager")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v("'''2.禁用防火墙'''")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@linux"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("node1 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemctl disable firewalld        # 禁用防火墙")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@linux"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("node1 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# firewall-cmd --state             # 防火墙是否关闭")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v("'''3.关闭selinux防火墙'''")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@linux"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("node1 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vim /etc/selinux/config           # 关闭内核防火墙(重启生效)")]),s._v("\nSELINUX"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("disabled\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@linux"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("node1 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# getenforce                    # selinux是否关闭")]),s._v("\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("h3",{attrs:{id:"_1-2-3-设置主机名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3-设置主机名"}},[s._v("#")]),s._v(" 1.2.3 设置主机名")]),s._v(" "),e("p",[s._v("[root@linux-node1 ~]#  "),e("span",{staticStyle:{color:"red"}},[s._v(" vi /etc/hostname")])]),s._v(" "),e("div",{staticClass:"language-python line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[s._v("linux"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("node1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("example"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"_1-2-4-设置主机名解析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-4-设置主机名解析"}},[s._v("#")]),s._v(" 1.2.4 设置主机名解析")]),s._v(" "),e("p",[s._v("[root@linux-node1 ~]#  "),e("span",{staticStyle:{color:"red"}},[s._v(" vi /etc/hosts ")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".56.11 linux-node1 linux-node1.example.com\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".56.12 linux-node2 linux-node2.example.com\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"_1-2-5-设置dns"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-5-设置dns"}},[s._v("#")]),s._v(" 1.2.5 设置DNS")]),s._v(" "),e("p",[s._v("[root@linux-node1 ~]#  "),e("span",{staticStyle:{color:"red"}},[s._v(" vi /etc/resolv.conf  ")])]),s._v(" "),e("div",{staticClass:"language-python line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[s._v("nameserver "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v(".56")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v(".2")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"_1-2-6-安装最新epel-yum源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-6-安装最新epel-yum源"}},[s._v("#")]),s._v(" 1.2.6 安装最新epel yum源")]),s._v(" "),e("p",[s._v("[root@linux-node1 ~]#  "),e("span",{staticStyle:{color:"red"}},[s._v(" rpm -ivh https://mirrors.aliyun.com/epel/epel-release-latest-7.noarch.rpm ")])]),s._v(" "),e("h3",{attrs:{id:"_1-2-7-yum安装-一些基础包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-7-yum安装-一些基础包"}},[s._v("#")]),s._v(" 1.2.7 yum安装 一些基础包")]),s._v(" "),e("p",[s._v("[root@linux-node1 ~]# "),e("span",{staticStyle:{color:"red"}},[s._v(" yum -y install net-tools vim lrzsz tree screen lsof tcpdump nc mtr nmap")])]),s._v(" "),e("h3",{attrs:{id:"_1-2-8-重启系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-8-重启系统"}},[s._v("#")]),s._v(" 1.2.8 重启系统")]),s._v(" "),e("p",[s._v("[root@linux-node1 ~]# "),e("span",{staticStyle:{color:"red"}},[s._v(" yum update -y && reboot  ")])]),s._v(" "),e("h1",{attrs:{id:"_02-系统基础服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_02-系统基础服务"}},[s._v("#")]),s._v(" 02.系统基础服务")]),s._v(" "),e("h2",{attrs:{id:"_2-1-网络"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-网络"}},[s._v("#")]),s._v(" 2.1 网络")]),s._v(" "),e("ul",[e("li",[s._v("像Windows机器一样，Linux也需要配置网卡才能连接网络")]),s._v(" "),e("li",[s._v("Centos网卡默认位置在："),e("span",{staticStyle:{color:"red"}},[s._v(" vim /etc/sysconfig/network-scripts/ifcfg-eth0 ")])])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TYPE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Ethernet             "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 网卡类型")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("BOOTPROTO")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("static          "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用静态ip地址")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DEFROUTE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yes\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PEERDNS")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("no\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PEERROUTES")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yes\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IPV4_FAILURE_FATAL")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("no\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NAME")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("eth0                 "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 网卡名称")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# UUID=3dacb9a3-62a4-41cc-b9ab-44a20ee9157e")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DEVICE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("eth0               "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 网卡设备名称")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ONBOOT")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yes                "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启用网卡")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IPADDR")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".56.11      "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 静态ip(必须与上面NAT中配置的地址同一网段)")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NETMASK")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("255.255")]),s._v(".255.0     "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 子网掩码")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GATEWAY")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".56.2      "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 网关地址(VMware默认网关地址为 xxx.xxx.xxx.2 网段地址) ")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])]),e("ul",[e("li",[s._v("网络服务管理命令")])]),s._v(" "),e("div",{staticClass:"language-python line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("node2 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemctl status networking       # 查看当前网络服务状态")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("node2 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemctl start networking       # 开启网络")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("node2 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemctl stop networking        # 关闭网络服务")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("node2 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemctl restart networking      # 重启网络服务")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@k8s"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("node2 "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemctl enable sshd           # 设置网络开机自启动")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h2",{attrs:{id:"_2-2-防火墙"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-防火墙"}},[s._v("#")]),s._v(" 2.2 防火墙")]),s._v(" "),e("ul",[e("li",[s._v("Linux的防火墙体系主要工作在网络层，针对TCP/IP数据包实施过滤和限制，属于典型的包过滤防火墙（或称网络层防火墙）。")]),s._v(" "),e("li",[s._v("Linux的防火墙体系基于内核编码实现，因此具有非常稳定的性能和高效率，也因此被更加广泛采纳和应用。")]),s._v(" "),e("li",[s._v("为什么大多数机器都会关闭防火墙？\n"),e("ul",[e("li",[s._v("1）防火墙的学习和管理较为复杂，需要专业人士维护")]),s._v(" "),e("li",[s._v("2）服务器一般部署在内网中，被外网攻击的可能性小")])])])]),s._v(" "),e("h2",{attrs:{id:"_2-3-sshd"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-sshd"}},[s._v("#")]),s._v(" 2.3 sshd")]),s._v(" "),e("ul",[e("li",[s._v("在linux系统操作中，经常需要连接其他的主机，连接其他主机的服务是openssh-server（ssh）")]),s._v(" "),e("li",[s._v("它的功能是让远程主机可以通过网络访问sshd服务，开始一个安全shell。")])]),s._v(" "),e("h1",{attrs:{id:"_03-配置源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_03-配置源"}},[s._v("#")]),s._v(" 03.配置源")]),s._v(" "),e("ul",[e("li",[s._v("yum源头")]),s._v(" "),e("li",[s._v("pip源")]),s._v(" "),e("li",[s._v("apt-get")])]),s._v(" "),e("p",[s._v("3.1")])])}),[],!1,null,null,null);t.default=n.exports}}]);