"use strict";(self.webpackChunkbigdata_blog=self.webpackChunkbigdata_blog||[]).push([[8983],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=c(r),m=a,f=g["".concat(u,".").concat(m)]||g[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},6256:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={authors:[{name:"skylines",url:"https://github.com/rookiegao"}],tags:["data warehouse"]},i="Fundamentals of Realtime Digital Warehouse Theory",l={permalink:"/Bigdata_Blog_Website/en/blog/\u5b9e\u65f6\u6570\u4ed3\u7406\u8bba\u57fa\u7840",source:"@site/i18n/en/docusaurus-plugin-content-blog/\u5b9e\u65f6\u6570\u4ed3\u7406\u8bba\u57fa\u7840.md",title:"Fundamentals of Realtime Digital Warehouse Theory",description:"\u6570\u636e\u4ed3\u5e93\u6982\u8ff0",date:"2023-08-17T02:43:37.000Z",formattedDate:"August 17, 2023",tags:[{label:"data warehouse",permalink:"/Bigdata_Blog_Website/en/blog/tags/data-warehouse"}],readingTime:31.355,hasTruncateMarker:!0,authors:[{name:"skylines",url:"https://github.com/rookiegao"}],frontMatter:{authors:[{name:"skylines",url:"https://github.com/rookiegao"}],tags:["data warehouse"]},prevItem:{title:"Realtime DataWarehouse Development",permalink:"/Bigdata_Blog_Website/en/blog/\u5b9e\u65f6\u6570\u4ed3\u5f00\u53d1"},nextItem:{title:"Digital warehouse architecture",permalink:"/Bigdata_Blog_Website/en/blog/\u6570\u4ed3\u67b6\u6784\u4f53\u7cfb"}},u={authorsImageUrls:[void 0]},c=[{value:"\u6570\u636e\u4ed3\u5e93\u6982\u8ff0",id:"\u6570\u636e\u4ed3\u5e93\u6982\u8ff0",level:2},{value:"\u6570\u636e\u4ed3\u5e93\u6982\u5ff5",id:"\u6570\u636e\u4ed3\u5e93\u6982\u5ff5",level:3},{value:"\u6570\u636e\u4ed3\u5e93\u6838\u5fc3\u67b6\u6784",id:"\u6570\u636e\u4ed3\u5e93\u6838\u5fc3\u67b6\u6784",level:3}],s={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u6570\u636e\u4ed3\u5e93\u6982\u8ff0"},"\u6570\u636e\u4ed3\u5e93\u6982\u8ff0"),(0,a.kt)("h3",{id:"\u6570\u636e\u4ed3\u5e93\u6982\u5ff5"},"\u6570\u636e\u4ed3\u5e93\u6982\u5ff5"),(0,a.kt)("p",null,"\u6570\u636e\u4ed3\u5e93\u662f\u4e00\u4e2a\u4e3a\u6570\u636e\u5206\u6790\u800c\u8bbe\u8ba1\u7684\u4f01\u4e1a\u7ea7\u6570\u636e\u7ba1\u7406\u7cfb\u7edf\u3002\u6570\u636e\u4ed3\u5e93\u53ef\u96c6\u4e2d\u3001\u6574\u5408\u591a\u4e2a\u4fe1\u606f\u6e90\u7684\u5927\u91cf\u6570\u636e\uff0c\u501f\u52a9\u6570\u636e\u4ed3\u5e93\u7684\u5206\u6790\u80fd\u529b\uff0c\u4f01\u4e1a\u53ef\u4ece\u6570\u636e\u4e2d\u83b7\u5f97\u5b9d\u8d35\u7684\u4fe1\u606f\u8fdb\u800c\u6539\u8fdb\u51b3\u7b56\u3002\u540c\u65f6\uff0c\u968f\u7740\u65f6\u95f4\u7684\u63a8\u79fb\uff0c\u6570\u636e\u4ed3\u5e93\u4e2d\u79ef\u7d2f\u7684\u5927\u91cf\u5386\u53f2\u6570\u636e\u5bf9\u4e8e\u6570\u636e\u79d1\u5b66\u5bb6\u548c\u4e1a\u52a1\u5206\u6790\u5e08\u4e5f\u662f\u5341\u5206\u5b9d\u8d35\u7684\u3002"),(0,a.kt)("h3",{id:"\u6570\u636e\u4ed3\u5e93\u6838\u5fc3\u67b6\u6784"},"\u6570\u636e\u4ed3\u5e93\u6838\u5fc3\u67b6\u6784"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/34996528/166153501-915f456b-b22c-4810-95b4-209239568655.png",alt:"img"})))}p.isMDXComponent=!0}}]);