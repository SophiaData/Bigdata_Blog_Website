"use strict";(self.webpackChunkbigdata_blog=self.webpackChunkbigdata_blog||[]).push([[6397],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(r),u=n,d=b["".concat(c,".").concat(u)]||b[u]||m[u]||o;return r?a.createElement(d,i(i({ref:t},s),{},{components:r})):a.createElement(d,i({ref:t},s))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},2510:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={authors:[{name:"\u9752\u6da9\u7684\u8292\u679c\u6c41",url:"https://blog.csdn.net/weixin_40898246/article/details/109175222?spm=1001.2014.3001.5501"}],title:"Ambari \u5165\u95e8\u53ca\u5b89\u88c5",date:new Date("2020-11-07T18:11:11.000Z"),tags:["\u7ba1\u7406\u5e73\u53f0"],keywords:["Ambari"],description:"\u4f7f\u7528 Ambari \u5bf9 apache \u6846\u67b6\u8fdb\u884c\u7ba1\u7406"},i="Ambari \u7b80\u8ff0",l={permalink:"/Bigdata_Blog_Website/blog/Ambari \u5165\u95e8\u53ca\u5b89\u88c5",source:"@site/blog/Ambari \u5165\u95e8\u53ca\u5b89\u88c5.md",title:"Ambari \u5165\u95e8\u53ca\u5b89\u88c5",description:"\u4f7f\u7528 Ambari \u5bf9 apache \u6846\u67b6\u8fdb\u884c\u7ba1\u7406",date:"2020-11-07T18:11:11.000Z",formattedDate:"2020\u5e7411\u67087\u65e5",tags:[{label:"\u7ba1\u7406\u5e73\u53f0",permalink:"/Bigdata_Blog_Website/blog/tags/\u7ba1\u7406\u5e73\u53f0"}],readingTime:17.495,hasTruncateMarker:!0,authors:[{name:"\u9752\u6da9\u7684\u8292\u679c\u6c41",url:"https://blog.csdn.net/weixin_40898246/article/details/109175222?spm=1001.2014.3001.5501"}],frontMatter:{authors:[{name:"\u9752\u6da9\u7684\u8292\u679c\u6c41",url:"https://blog.csdn.net/weixin_40898246/article/details/109175222?spm=1001.2014.3001.5501"}],title:"Ambari \u5165\u95e8\u53ca\u5b89\u88c5",date:"2020-11-07T18:11:11.000Z",tags:["\u7ba1\u7406\u5e73\u53f0"],keywords:["Ambari"],description:"\u4f7f\u7528 Ambari \u5bf9 apache \u6846\u67b6\u8fdb\u884c\u7ba1\u7406"},prevItem:{title:"debezium to oracle 11g \u5b9e\u65f6\u540c\u6b65",permalink:"/Bigdata_Blog_Website/blog/debezium to oracle 11g \u5b9e\u65f6\u540c\u6b65"}},c={authorsImageUrls:[void 0]},p=[{value:"\u4ec0\u4e48\u662f Ambari",id:"\u4ec0\u4e48\u662f-ambari",level:2}],s={toc:p};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u4ec0\u4e48\u662f-ambari"},"\u4ec0\u4e48\u662f Ambari"),(0,n.kt)("p",null,"Apache Ambari \u9879\u76ee\u65e8\u5728\u901a\u8fc7\u5f00\u53d1\u7528\u4e8e\u914d\u7f6e\uff0c\u7ba1\u7406\u548c\u76d1\u63a7 Apache Hadoop \u96c6\u7fa4\u7684\u8f6f\u4ef6\u6765\u7b80\u5316 Hadoop \u7ba1\u7406\u3002Ambari \u63d0\u4f9b\u4e86\u4e00\u4e2a\u76f4\u89c2\uff0c\u6613\u7528\u7684 Hadoop \u7ba1\u7406 Web UI\u3002"))}m.isMDXComponent=!0}}]);