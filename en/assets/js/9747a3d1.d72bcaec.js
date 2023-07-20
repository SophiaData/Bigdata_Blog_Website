"use strict";(self.webpackChunkbigdata_blog=self.webpackChunkbigdata_blog||[]).push([[6538],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(r),g=a,f=m["".concat(u,".").concat(g)]||m[g]||p[g]||o;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4772:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={authors:[{name:"skylines",url:"https://github.com/rookiegao"}],tags:["data warehouse"]},l="Realtime DataWarehouse Development",i={permalink:"/Bigdata_Blog_Website/en/blog/\u5b9e\u65f6\u6570\u4ed3\u5f00\u53d1",source:"@site/i18n/en/docusaurus-plugin-content-blog/\u5b9e\u65f6\u6570\u4ed3\u5f00\u53d1.md",title:"Realtime DataWarehouse Development",description:"\u91c7\u96c6\u5230 Kafka \u7684 topiclog \u548c topicdb \u4e3b\u9898\u7684\u6570\u636e\u5373\u4e3a\u5b9e\u65f6\u6570\u4ed3\u7684 ODS \u5c42\uff0c\u8fd9\u4e00\u5c42\u7684\u4f5c\u7528\u662f\u5bf9\u6570\u636e\u505a\u539f\u6837\u5c55\u793a\u548c\u5907\u4efd\u3002",date:"2023-07-20T09:48:00.000Z",formattedDate:"July 20, 2023",tags:[{label:"data warehouse",permalink:"/Bigdata_Blog_Website/en/blog/tags/data-warehouse"}],readingTime:102.205,hasTruncateMarker:!0,authors:[{name:"skylines",url:"https://github.com/rookiegao"}],frontMatter:{authors:[{name:"skylines",url:"https://github.com/rookiegao"}],tags:["data warehouse"]},prevItem:{title:"Mysql \u6574\u5e93\u540c\u6b65",permalink:"/Bigdata_Blog_Website/en/blog/mysql cdc \u6574\u5e93\u540c\u6b65"},nextItem:{title:"Fundamentals of Realtime Digital Warehouse Theory",permalink:"/Bigdata_Blog_Website/en/blog/\u5b9e\u65f6\u6570\u4ed3\u7406\u8bba\u57fa\u7840"}},u={authorsImageUrls:[void 0]},c=[],s={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6570\u4ed3\u5f00\u53d1\u4e4bods\u5c42"},"\u6570\u4ed3\u5f00\u53d1\u4e4bODS\u5c42"),(0,a.kt)("p",null,"\u91c7\u96c6\u5230 Kafka \u7684 topic_log \u548c topic_db \u4e3b\u9898\u7684\u6570\u636e\u5373\u4e3a\u5b9e\u65f6\u6570\u4ed3\u7684 ODS \u5c42\uff0c\u8fd9\u4e00\u5c42\u7684\u4f5c\u7528\u662f\u5bf9\u6570\u636e\u505a\u539f\u6837\u5c55\u793a\u548c\u5907\u4efd\u3002"),(0,a.kt)("p",null,"\u6570\u4ed3\u5f00\u53d1\u4e4bDIM\u5c42"),(0,a.kt)("p",null,"DIM\u5c42\u8bbe\u8ba1\u8981\u70b9\uff1a"),(0,a.kt)("p",null,"\uff081\uff09DIM\u5c42\u7684\u8bbe\u8ba1\u4f9d\u636e\u662f\u7ef4\u5ea6\u5efa\u6a21\u7406\u8bba\uff0c\u8be5\u5c42\u5b58\u50a8\u7ef4\u5ea6\u6a21\u578b\u7684\u7ef4\u5ea6\u8868\u3002"),(0,a.kt)("p",null,"\uff082\uff09DIM\u5c42\u7684\u6570\u636e\u5b58\u50a8\u5728 HBase \u8868\u4e2d"),(0,a.kt)("p",null,"DIM \u5c42\u8868\u662f\u7528\u4e8e\u7ef4\u5ea6\u5173\u8054\u7684\uff0c\u8981\u901a\u8fc7\u4e3b\u952e\u53bb\u83b7\u53d6\u76f8\u5173\u7ef4\u5ea6\u4fe1\u606f\uff0c\u8fd9\u79cd\u573a\u666f\u4e0b K-V \u7c7b\u578b\u6570\u636e\u5e93\u7684\u6548\u7387\u8f83\u9ad8\u3002"),(0,a.kt)("p",null,"\u5e38\u89c1\u7684 K-V \u7c7b\u578b\u6570\u636e\u5e93\u6709 Redis\u3001HBase\uff0c\u800c Redis \u7684\u6570\u636e\u5e38\u9a7b\u5185\u5b58\uff0c\u4f1a\u7ed9\u5185\u5b58\u9020\u6210\u8f83\u5927\u538b\u529b\uff0c\u56e0\u800c\u9009\u7528 HBase \u5b58\u50a8\u7ef4\u5ea6\u6570\u636e\u3002"),(0,a.kt)("p",null,"\uff083\uff09DIM\u5c42\u8868\u540d\u7684\u547d\u540d\u89c4\u8303\u4e3adim_\u8868\u540d"))}p.isMDXComponent=!0}}]);