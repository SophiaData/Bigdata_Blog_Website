"use strict";(self.webpackChunkbigdata_blog=self.webpackChunkbigdata_blog||[]).push([[9803],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(r),b=a,d=u["".concat(c,".").concat(b)]||u[b]||s[b]||o;return r?n.createElement(d,i(i({ref:t},m),{},{components:r})):n.createElement(d,i({ref:t},m))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7241:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={authors:[{name:"\u9752\u6da9\u7684\u8292\u679c\u6c41",url:"https://blog.csdn.net/weixin_40898246/article/details/109175222?spm=1001.2014.3001.5501"}],title:"Ambari Introduction and installation",date:new Date("2020-11-07T18:11:11.000Z"),tags:["Management platform"],keywords:["Ambari"],description:"\u4f7f\u7528 Ambari \u5bf9 apache \u6846\u67b6\u8fdb\u884c\u7ba1\u7406"},i="Ambari \u7b80\u8ff0",l={permalink:"/Bigdata_Blog_Website/en/blog/Ambari \u5165\u95e8\u53ca\u5b89\u88c5",source:"@site/i18n/en/docusaurus-plugin-content-blog/Ambari \u5165\u95e8\u53ca\u5b89\u88c5.md",title:"Ambari Introduction and installation",description:"\u4f7f\u7528 Ambari \u5bf9 apache \u6846\u67b6\u8fdb\u884c\u7ba1\u7406",date:"2020-11-07T18:11:11.000Z",formattedDate:"November 7, 2020",tags:[{label:"Management platform",permalink:"/Bigdata_Blog_Website/en/blog/tags/management-platform"}],readingTime:17.495,hasTruncateMarker:!0,authors:[{name:"\u9752\u6da9\u7684\u8292\u679c\u6c41",url:"https://blog.csdn.net/weixin_40898246/article/details/109175222?spm=1001.2014.3001.5501"}],frontMatter:{authors:[{name:"\u9752\u6da9\u7684\u8292\u679c\u6c41",url:"https://blog.csdn.net/weixin_40898246/article/details/109175222?spm=1001.2014.3001.5501"}],title:"Ambari Introduction and installation",date:"2020-11-07T18:11:11.000Z",tags:["Management platform"],keywords:["Ambari"],description:"\u4f7f\u7528 Ambari \u5bf9 apache \u6846\u67b6\u8fdb\u884c\u7ba1\u7406"},prevItem:{title:"debezium to oracle 11g Realtime synchronization",permalink:"/Bigdata_Blog_Website/en/blog/debezium to oracle 11g \u5b9e\u65f6\u540c\u6b65"}},c={authorsImageUrls:[void 0]},p=[{value:"\u4ec0\u4e48\u662f Ambari",id:"\u4ec0\u4e48\u662f-ambari",level:2}],m={toc:p};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4ec0\u4e48\u662f-ambari"},"\u4ec0\u4e48\u662f Ambari"),(0,a.kt)("p",null,"Apache Ambari \u9879\u76ee\u65e8\u5728\u901a\u8fc7\u5f00\u53d1\u7528\u4e8e\u914d\u7f6e\uff0c\u7ba1\u7406\u548c\u76d1\u63a7 Apache Hadoop \u96c6\u7fa4\u7684\u8f6f\u4ef6\u6765\u7b80\u5316 Hadoop \u7ba1\u7406\u3002Ambari \u63d0\u4f9b\u4e86\u4e00\u4e2a\u76f4\u89c2\uff0c\u6613\u7528\u7684 Hadoop \u7ba1\u7406 Web UI\u3002"))}s.isMDXComponent=!0}}]);