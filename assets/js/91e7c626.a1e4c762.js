"use strict";(self.webpackChunkbigdata_blog=self.webpackChunkbigdata_blog||[]).push([[8958],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),b=a,d=s["".concat(c,".").concat(b)]||s[b]||m[b]||i;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},7136:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={authors:[{name:"\u9752\u6da9\u7684\u8292\u679c\u6c41",url:"https://blog.csdn.net/weixin_40898246/article/details/120880414?spm=1001.2014.3001.5501"}],title:"debezium to oracle 11g \u5b9e\u65f6\u540c\u6b65",date:new Date("2021-11-21T09:24:31.000Z"),tags:["\u6570\u636e\u96c6\u6210"],keywords:["Debeziium"],description:"\u4f7f\u7528 debezium \u5bf9 oracle \u6570\u636e\u8fdb\u884c\u91c7\u96c6"},o=void 0,l={permalink:"/Bigdata_Blog_Website/blog/debezium to oracle 11g \u5b9e\u65f6\u540c\u6b65",source:"@site/blog/debezium to oracle 11g \u5b9e\u65f6\u540c\u6b65.md",title:"debezium to oracle 11g \u5b9e\u65f6\u540c\u6b65",description:"\u4f7f\u7528 debezium \u5bf9 oracle \u6570\u636e\u8fdb\u884c\u91c7\u96c6",date:"2021-11-21T09:24:31.000Z",formattedDate:"2021\u5e7411\u670821\u65e5",tags:[{label:"\u6570\u636e\u96c6\u6210",permalink:"/Bigdata_Blog_Website/blog/tags/\u6570\u636e\u96c6\u6210"}],readingTime:12.94,hasTruncateMarker:!0,authors:[{name:"\u9752\u6da9\u7684\u8292\u679c\u6c41",url:"https://blog.csdn.net/weixin_40898246/article/details/120880414?spm=1001.2014.3001.5501"}],frontMatter:{authors:[{name:"\u9752\u6da9\u7684\u8292\u679c\u6c41",url:"https://blog.csdn.net/weixin_40898246/article/details/120880414?spm=1001.2014.3001.5501"}],title:"debezium to oracle 11g \u5b9e\u65f6\u540c\u6b65",date:"2021-11-21T09:24:31.000Z",tags:["\u6570\u636e\u96c6\u6210"],keywords:["Debeziium"],description:"\u4f7f\u7528 debezium \u5bf9 oracle \u6570\u636e\u8fdb\u884c\u91c7\u96c6"},prevItem:{title:"Flink CDC 2.3.0 Announce",permalink:"/Bigdata_Blog_Website/blog/Flink CDC 2.3.0 Announce"},nextItem:{title:"Ambari \u5165\u95e8\u53ca\u5b89\u88c5",permalink:"/Bigdata_Blog_Website/blog/Ambari \u5165\u95e8\u53ca\u5b89\u88c5"}},c={authorsImageUrls:[void 0]},u=[{value:"\u7b2c1\u7ae0 debezium\u6982\u8ff0",id:"\u7b2c1\u7ae0-debezium\u6982\u8ff0",level:2},{value:"1.1 debezium\u662f\u4ec0\u4e48",id:"11-debezium\u662f\u4ec0\u4e48",level:3}],p={toc:u};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u7b2c1\u7ae0-debezium\u6982\u8ff0"},"\u7b2c1\u7ae0 debezium\u6982\u8ff0"),(0,a.kt)("h3",{id:"11-debezium\u662f\u4ec0\u4e48"},"1.1 debezium\u662f\u4ec0\u4e48"),(0,a.kt)("p",null," Debezium \u662f\u4e00\u7ec4\u5206\u5e03\u5f0f\u670d\u52a1\uff0c\u7528\u4e8e\u6355\u83b7\u6570\u636e\u5e93\u4e2d\u7684\u66f4\u6539\uff0c\u4ee5\u4fbf\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u67e5\u770b\u8fd9\u4e9b\u66f4\u6539\u5e76\u5bf9\u5176\u505a\u51fa\u54cd\u5e94\u3002 Debezium \u5728\u66f4\u6539\u4e8b\u4ef6\u6d41\u4e2d\u8bb0\u5f55\u6bcf\u4e2a\u6570\u636e\u5e93\u8868\u4e2d\u7684\u6240\u6709\u884c\u7ea7\u66f4\u6539\uff0c\u5e94\u7528\u7a0b\u5e8f\u53ea\u9700\u8bfb\u53d6\u8fd9\u4e9b\u6d41\u4ee5\u67e5\u770b\u66f4\u6539\u4e8b\u4ef6\u53d1\u751f\u7684\u76f8\u540c\u987a\u5e8f\u3002"))}m.isMDXComponent=!0}}]);