"use strict";(self.webpackChunkbigdata_blog=self.webpackChunkbigdata_blog||[]).push([[1901],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(r),y=o,b=m["".concat(c,".").concat(y)]||m[y]||u[y]||a;return r?n.createElement(b,l(l({ref:t},p),{},{components:r})):n.createElement(b,l({ref:t},p))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3741:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={authors:[{name:"skylines",url:"https://github.com/rookiegao"}],title:"Mysql \u6574\u5e93\u540c\u6b65",tags:["\u6570\u636e\u96c6\u6210"]},l="\u6280\u672f\u601d\u60f3",i={permalink:"/Bigdata_Blog_Website/blog/mysql cdc \u6574\u5e93\u540c\u6b65",source:"@site/blog/mysql cdc \u6574\u5e93\u540c\u6b65.md",title:"Mysql \u6574\u5e93\u540c\u6b65",description:"\u5229\u7528 mysql catalog\uff0cmysql cdc\uff0cflink jdbc \u7b49\u6280\u672f\u5b9e\u73b0 mysql \u6574\u5e93\u8fc1\u79fb\u81f3\u4e0b\u6e38\u6570\u636e\u5e93\uff0c\u8fd9\u91cc\u662f\u793a\u8303 mysql to mysql \uff0c\u5176\u4ed6 sink \u7ec4\u4ef6\u53ef\u81ea\u884c\u6269\u5c55\u5b9e\u73b0\u3002",date:"2022-12-15T04:20:44.000Z",formattedDate:"2022\u5e7412\u670815\u65e5",tags:[{label:"\u6570\u636e\u96c6\u6210",permalink:"/Bigdata_Blog_Website/blog/tags/\u6570\u636e\u96c6\u6210"}],readingTime:11.595,hasTruncateMarker:!0,authors:[{name:"skylines",url:"https://github.com/rookiegao"}],frontMatter:{authors:[{name:"skylines",url:"https://github.com/rookiegao"}],title:"Mysql \u6574\u5e93\u540c\u6b65",tags:["\u6570\u636e\u96c6\u6210"]},prevItem:{title:"jupyter notebook \u5728 linux \u4e0b\u5b89\u88c5\uff0c\u5e76\u5b9e\u73b0\u8fdc\u7a0b\u767b\u9646",permalink:"/Bigdata_Blog_Website/blog/jupyter notebook \u5728 linux \u4e0b\u5b89\u88c5\uff0c\u5e76\u5b9e\u73b0\u8fdc\u7a0b\u767b\u9646"},nextItem:{title:"\u5b9e\u65f6\u6570\u4ed3\u5f00\u53d1",permalink:"/Bigdata_Blog_Website/blog/\u5b9e\u65f6\u6570\u4ed3\u5f00\u53d1"}},c={authorsImageUrls:[void 0]},s=[],p={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5229\u7528 mysql catalog\uff0cmysql cdc\uff0cflink jdbc \u7b49\u6280\u672f\u5b9e\u73b0 mysql \u6574\u5e93\u8fc1\u79fb\u81f3\u4e0b\u6e38\u6570\u636e\u5e93\uff0c\u8fd9\u91cc\u662f\u793a\u8303 mysql to mysql \uff0c\u5176\u4ed6 sink \u7ec4\u4ef6\u53ef\u81ea\u884c\u6269\u5c55\u5b9e\u73b0\u3002")),(0,o.kt)("p",null,"\u901a\u8fc7 flink ParameterTool\uff0c\u53ef\u4ee5\u9009\u62e9\u662f\u6574\u5e93\u540c\u6b65\u8fd8\u662f\u591a\u8868\u4ea6\u6216\u5355\u8868\u540c\u6b65\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u5168\u5c40\u5e76\u53d1\uff0c\u6e90\u8868 mysql \u53c2\u6570\uff0c\u76ee\u6807\u8868 mysql \u53c2\u6570"))}u.isMDXComponent=!0}}]);