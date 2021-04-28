(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{792:function(s,t,a){"use strict";a.r(t);var n=a(21),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_01-os模块常用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_01-os模块常用方法"}},[s._v("#")]),s._v(" 01.os模块常用方法")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" os\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#1 当前工作目录，即当前python脚本工作的目录路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("getcwd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# C:\\Users\\admin\\PycharmProjects\\s14\\Day5\\test4")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#2 当前脚本工作目录；相当于shell下cd")]),s._v("\nos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("chdir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"C:\\\\Users\\\\admin\\\\PycharmProjects\\\\s14"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("chdir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('r"C:\\Users\\admin\\PycharmProjects\\s14"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("getcwd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# C:\\Users\\admin\\PycharmProjects\\s14")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#3 返回当前目录: ('.')")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("curdir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ('.')")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#4 获取当前目录的父目录字符串名：('..')")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pardir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ('..')")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#5 可生成多层递归目录")]),s._v("\nos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("makedirs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("r'C:\\aaa\\bbb'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可以发现在C盘创建了文件夹/aaa/bbb")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#6 若目录为空，则删除，并递归到上一级目录，如若也为空，则删除，依此类推")]),s._v("\nos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("removedirs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("r'C:\\aaa\\bbb'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除所有空目录")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#7 生成单级目录；相当于shell中mkdir dirname")]),s._v("\nos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mkdir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("r'C:\\bbb'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 仅能创建单个目录")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#8 删除单级空目录，若目录不为空则无法删除，报错；相当于shell中rmdir dirname")]),s._v("\nos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rmdir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("r'C:\\aaa'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 仅删除指定的一个空目录")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#9 列出指定目录下的所有文件和子目录，包括隐藏文件，并以列表方式打印")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("listdir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('r"C:\\Users\\admin\\PycharmProjects\\s14"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#10 删除一个文件")]),s._v("\nos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("remove"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("r'C:\\bbb\\test.txt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定删除test.txt文件")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#11 重命名文件/目录")]),s._v("\nos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("r'C:\\bbb\\test.txt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("r'C:\\bbb\\test00.bak'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#12 获取文件/目录信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("stat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("r'C:\\bbb\\test.txt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#13 输出操作系统特定的路径分隔符，win下为"\\\\",Linux下为"/"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sep"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# \\")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#14 输出当前平台使用的行终止符，win下为"\\r\\n",Linux下为"\\n"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("linesep"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#15 输出用于分割文件路径的字符串")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pathsep"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ;  （分号）")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#16 输出字符串指示当前使用平台。win->'nt'; Linux->'posix'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nt")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#17 运行shell命令，直接显示")]),s._v("\nos"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("system"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"bash command"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#18 获取系统环境变量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("environ"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("                "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# environ({'OS': 'Windows_NT', 'PUBLIC': ………….")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#19 返回path规范化的绝对路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("abspath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("r'C:/bbb/test.txt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# C:\\bbb\\test.txt")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#20 将path分割成目录和文件名二元组返回")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("split"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("r'C:/bbb/ccc'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ('C:/bbb', 'ccc')")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#21 返回path的目录。其实就是os.path.split(path)的第一个元素")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("r'C:/bbb/ccc'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# C:/bbb")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#22 返回path最后的文件名。如何path以／或\\结尾，那么就会返回空值。即os.path.split(path)的第二个元素")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("basename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("r'C:/bbb/ccc/ddd'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ddd")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#23 如果path存在，返回True；如果path不存在，返回False")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exists"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("r'C:/bbb/ccc/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# True")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#24 如果path是绝对路径，返回True        # True")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("isabs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('r"C:\\Users\\admin\\PycharmProjects\\s14\\Day5\\test4"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#25 如果path是一个存在的文件，返回True。否则返回False")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("isfile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("r'C:/bbb/ccc/test2.txt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# True")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#26 如果path是一个存在的目录，则返回True。否则返回False")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("isdir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("r'C:/bbb/ccc'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("            "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# True")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#28 返回path所指向的文件或者目录的最后存取时间")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("getatime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("r'C:/bbb/ccc/test2.txt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1483509254.9647143")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#29 返回path所指向的文件或者目录的最后修改时间")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("getmtime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("r'C:/bbb/ccc/test2.txt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1483510068.746478")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#30 无论linux还是windows，拼接出文件路径")]),s._v("\nput_filename "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%s%s%s'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("home"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sep"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#C:\\Users\\admin\\PycharmProjects\\s14\\day10select版FTP\\home")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br")])]),a("h2",{attrs:{id:"_02-os模块使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_02-os模块使用"}},[s._v("#")]),s._v(" 02.os模块使用")]),s._v(" "),a("h3",{attrs:{id:"_2-1-添加文件夹到环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-添加文件夹到环境变量"}},[s._v("#")]),s._v(" 2.1 添加文件夹到环境变量")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("sys\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("abspath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__file__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nBASE_DIR "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("abspath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__file__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nsys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("BASE_DIR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 代码解释：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 要想导入其他目录中的函数，其实就是将其他目录的绝对路径动态的添加到pyhton的环境变量中，这样python解释器就能够在运行时找到导入的模块而不报错：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 然后调用sys模块sys.path.append(BASE_DIR)就可以将这条路径添加到python环境变量中")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"_2-2-os-popen获取脚本执行结果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-os-popen获取脚本执行结果"}},[s._v("#")]),s._v(" 2.2 os.popen获取脚本执行结果")]),s._v(" "),a("ul",[a("li",[s._v("data.py")])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("data "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'aaa'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" json\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),s._v(" json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dumps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("ul",[a("li",[s._v("get_data.py")])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#! /usr/bin/env python")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -*- coding: utf-8 -*-")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("json\n\nret "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("popen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'python data.py'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ndata "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("read"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("strip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("close"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\ndata "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("loads"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),s._v(" data  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# {'name':'aaa'}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);