"use strict";(self.webpackChunkbigdata_blog=self.webpackChunkbigdata_blog||[]).push([[5214],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),g=a,b=m["".concat(s,".").concat(g)]||m[g]||u[g]||o;return n?r.createElement(b,i(i({ref:t},c),{},{components:n})):r.createElement(b,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6893:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={authors:[{name:"skylines",url:"https://github.com/rookiegao"}],title:"Mac M1 Datasophon install",date:new Date("2022-11-21T18:41:11.000Z"),tags:["Management platform"],keywords:["Datasophon"],description:"\u56fd\u4ea7\u5927\u6570\u636e\u8fd0\u7ef4\u90e8\u7f72\u7cfb\u7edf",image:"https://user-images.githubusercontent.com/34996528/203275795-397bdfb2-5510-4764-8948-9655016e8449.png"},i="Mac M1 Datasophon \u5b89\u88c5",l={permalink:"/Bigdata_Blog_Website/en/blog/Mac M1 Datasophon \u5b89\u88c5",source:"@site/i18n/en/docusaurus-plugin-content-blog/Mac M1 Datasophon \u5b89\u88c5.md",title:"Mac M1 Datasophon install",description:"\u56fd\u4ea7\u5927\u6570\u636e\u8fd0\u7ef4\u90e8\u7f72\u7cfb\u7edf",date:"2022-11-21T18:41:11.000Z",formattedDate:"November 21, 2022",tags:[{label:"Management platform",permalink:"/Bigdata_Blog_Website/en/blog/tags/management-platform"}],readingTime:5.83,hasTruncateMarker:!0,authors:[{name:"skylines",url:"https://github.com/rookiegao"}],frontMatter:{authors:[{name:"skylines",url:"https://github.com/rookiegao"}],title:"Mac M1 Datasophon install",date:"2022-11-21T18:41:11.000Z",tags:["Management platform"],keywords:["Datasophon"],description:"\u56fd\u4ea7\u5927\u6570\u636e\u8fd0\u7ef4\u90e8\u7f72\u7cfb\u7edf",image:"https://user-images.githubusercontent.com/34996528/203275795-397bdfb2-5510-4764-8948-9655016e8449.png"},prevItem:{title:"Centos \u914d\u7f6e\u96c6\u7fa4\u673a\u5668\u4e4b\u95f4\u514d\u5bc6\u767b\u5f55",permalink:"/Bigdata_Blog_Website/en/blog/Centos \u914d\u7f6e\u96c6\u7fa4\u673a\u5668\u4e4b\u95f4\u514d\u5bc6\u767b\u5f55"},nextItem:{title:"Flink CDC 2.3.0 Announce",permalink:"/Bigdata_Blog_Website/en/blog/Flink CDC 2.3.0 Announce"}},s={authorsImageUrls:[void 0]},p=[{value:"\u4ec0\u4e48\u662f Datasophon",id:"\u4ec0\u4e48\u662f-datasophon",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4ec0\u4e48\u662f-datasophon"},"\u4ec0\u4e48\u662f Datasophon"),(0,a.kt)("p",null,"DataSophon \u662f\u81f4\u529b\u4e8e\u81ea\u52a8\u5316\u76d1\u63a7\u3001\u8fd0\u7ef4\u3001\u7ba1\u7406\u5927\u6570\u636e\u57fa\u7840\u7ec4\u4ef6\u548c\u8282\u70b9\u7684\uff0c\u5e2e\u52a9\u60a8\u5feb\u901f\u6784\u5efa\u8d77\u7a33\u5b9a\uff0c\u9ad8\u6548\u7684\u5927\u6570\u636e\u96c6\u7fa4\u670d\u52a1\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/34996528/203275795-397bdfb2-5510-4764-8948-9655016e8449.png",alt:"img"})))}u.isMDXComponent=!0}}]);