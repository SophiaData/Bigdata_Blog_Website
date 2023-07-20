"use strict";(self.webpackChunkbigdata_blog=self.webpackChunkbigdata_blog||[]).push([[9639],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),g=u(r),m=o,b=g["".concat(c,".").concat(m)]||g[m]||p[m]||a;return r?n.createElement(b,l(l({ref:t},s),{},{components:r})):n.createElement(b,l({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},2285:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={authors:[{name:"skylines",url:"https://github.com/rookiegao"}],tags:["Tool configuration"]},l="IDEA CheckStyle to configure",i={permalink:"/Bigdata_Blog_Website/en/blog/IDEA CheckStyle \u914d\u7f6e",source:"@site/i18n/en/docusaurus-plugin-content-blog/IDEA CheckStyle \u914d\u7f6e.md",title:"IDEA CheckStyle to configure",description:"\u65e5\u5e38\u5f00\u53d1\u901a\u5e38\u9700\u8981\u914d\u7f6e code style \uff0c\u800c idea \u65e0\u7591\u662f\u6700\u53d7\u6b22\u8fce\u7684\u5f00\u53d1\u5de5\u5177\u4e4b\u4e00\uff0c\u4e0b\u9762\u4ecb\u7ecd\u5982\u4f55\u5e94\u7528 checkstyle \u63d2\u4ef6",date:"2023-07-20T09:48:00.000Z",formattedDate:"July 20, 2023",tags:[{label:"Tool configuration",permalink:"/Bigdata_Blog_Website/en/blog/tags/tool-configuration"}],readingTime:.58,hasTruncateMarker:!0,authors:[{name:"skylines",url:"https://github.com/rookiegao"}],frontMatter:{authors:[{name:"skylines",url:"https://github.com/rookiegao"}],tags:["Tool configuration"]},prevItem:{title:"Hbase and ClickHouse application scenarios",permalink:"/Bigdata_Blog_Website/en/blog/Hbase \u4e0e ClickHouse \u5e94\u7528\u573a\u666f"},nextItem:{title:"jupyter notebook \u5728 linux \u4e0b\u5b89\u88c5\uff0c\u5e76\u5b9e\u73b0\u8fdc\u7a0b\u767b\u9646",permalink:"/Bigdata_Blog_Website/en/blog/jupyter notebook \u5728 linux \u4e0b\u5b89\u88c5\uff0c\u5e76\u5b9e\u73b0\u8fdc\u7a0b\u767b\u9646"}},c={authorsImageUrls:[void 0]},u=[{value:"1 \u4e0b\u8f7d\u63d2\u4ef6",id:"1-\u4e0b\u8f7d\u63d2\u4ef6",level:2},{value:"2 \u9009\u62e9 checkstyle \u7248\u672c",id:"2-\u9009\u62e9-checkstyle-\u7248\u672c",level:2},{value:"3 \u6dfb\u52a0 checkstyle \u6587\u4ef6",id:"3-\u6dfb\u52a0-checkstyle-\u6587\u4ef6",level:2},{value:"4 \u6dfb\u52a0\u5c5e\u6027\u503c",id:"4-\u6dfb\u52a0\u5c5e\u6027\u503c",level:2}],s={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u65e5\u5e38\u5f00\u53d1\u901a\u5e38\u9700\u8981\u914d\u7f6e code style \uff0c\u800c idea \u65e0\u7591\u662f\u6700\u53d7\u6b22\u8fce\u7684\u5f00\u53d1\u5de5\u5177\u4e4b\u4e00\uff0c\u4e0b\u9762\u4ecb\u7ecd\u5982\u4f55\u5e94\u7528 checkstyle \u63d2\u4ef6"),(0,o.kt)("h2",{id:"1-\u4e0b\u8f7d\u63d2\u4ef6"},"1 \u4e0b\u8f7d\u63d2\u4ef6"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/34996528/166152027-93d88971-8308-4867-97ed-97da085577b5.png",alt:"img"})),(0,o.kt)("h2",{id:"2-\u9009\u62e9-checkstyle-\u7248\u672c"},"2 \u9009\u62e9 checkstyle \u7248\u672c"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/34996528/166152107-cf0db426-8942-49bd-9c42-4eb966852254.png",alt:"img"})),(0,o.kt)("h2",{id:"3-\u6dfb\u52a0-checkstyle-\u6587\u4ef6"},"3 \u6dfb\u52a0 checkstyle \u6587\u4ef6"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/34996528/166152064-a764fbfc-dbff-49fd-a619-96189d96ca2a.png",alt:"img"})),(0,o.kt)("h2",{id:"4-\u6dfb\u52a0\u5c5e\u6027\u503c"},"4 \u6dfb\u52a0\u5c5e\u6027\u503c"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/34996528/166152134-43bbd5e2-c085-43e4-86d1-ad96570d6644.png",alt:"img"})),(0,o.kt)("p",null,"\u5e94\u7528\u540e\u5373\u53ef\u5b8c\u6210 checkstyle \u914d\u7f6e"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u8be5\u63d2\u4ef6\u53ef\u4ee5\u5b9e\u65f6\u626b\u63cf\u4ee3\u7801\u89c4\u7ea6")),(0,o.kt)("p",null,"\u4e5f\u53ef\u901a\u8fc7\u5728 pom \u914d\u7f6e maven \u63d2\u4ef6\u7684\u5f62\u5f0f\u6765\u68c0\u67e5 code style"),(0,o.kt)("p",null,"\u793a\u4f8b\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SophiaData/Bigdata_Code_Tutorial/blob/master/Code_Tutorial/pom.xml"},"https://github.com/SophiaData/Bigdata_Code_Tutorial/blob/master/Code_Tutorial/pom.xml")))}p.isMDXComponent=!0}}]);