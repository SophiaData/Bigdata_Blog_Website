"use strict";(self.webpackChunkbigdata_blog=self.webpackChunkbigdata_blog||[]).push([[7944],{3905:(t,e,l)=>{l.d(e,{Zo:()=>o,kt:()=>s});var n=l(7294);function a(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function p(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function r(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?p(Object(l),!0).forEach((function(e){a(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):p(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function u(t,e){if(null==t)return{};var l,n,a=function(t,e){if(null==t)return{};var l,n,a={},p=Object.keys(t);for(n=0;n<p.length;n++)l=p[n],e.indexOf(l)>=0||(a[l]=t[l]);return a}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(n=0;n<p.length;n++)l=p[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(a[l]=t[l])}return a}var d=n.createContext({}),i=function(t){var e=n.useContext(d),l=e;return t&&(l="function"==typeof t?t(e):r(r({},e),t)),l},o=function(t){var e=i(t.components);return n.createElement(d.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var l=t.components,a=t.mdxType,p=t.originalType,d=t.parentName,o=u(t,["components","mdxType","originalType","parentName"]),m=i(l),s=a,c=m["".concat(d,".").concat(s)]||m[s]||k[s]||p;return l?n.createElement(c,r(r({ref:e},o),{},{components:l})):n.createElement(c,r({ref:e},o))}));function s(t,e){var l=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var p=l.length,r=new Array(p);r[0]=m;var u={};for(var d in e)hasOwnProperty.call(e,d)&&(u[d]=e[d]);u.originalType=t,u.mdxType="string"==typeof t?t:a,r[1]=u;for(var i=2;i<p;i++)r[i]=l[i];return n.createElement.apply(null,r)}return n.createElement.apply(null,l)}m.displayName="MDXCreateElement"},7734:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>d,contentTitle:()=>r,default:()=>k,frontMatter:()=>p,metadata:()=>u,toc:()=>i});var n=l(7462),a=(l(7294),l(3905));const p={authors:[{name:"skylines",url:"https://github.com/rookiegao"}],tags:["data warehouse"]},r="Digital warehouse architecture",u={permalink:"/Bigdata_Blog_Website/en/blog/\u6570\u4ed3\u67b6\u6784\u4f53\u7cfb",source:"@site/i18n/en/docusaurus-plugin-content-blog/\u6570\u4ed3\u67b6\u6784\u4f53\u7cfb.md",title:"Digital warehouse architecture",description:"\u5206\u5c42\u5b9a\u4e49",date:"2022-12-10T15:12:13.000Z",formattedDate:"December 10, 2022",tags:[{label:"data warehouse",permalink:"/Bigdata_Blog_Website/en/blog/tags/data-warehouse"}],readingTime:19.27,hasTruncateMarker:!0,authors:[{name:"skylines",url:"https://github.com/rookiegao"}],frontMatter:{authors:[{name:"skylines",url:"https://github.com/rookiegao"}],tags:["data warehouse"]},prevItem:{title:"Fundamentals of Realtime Digital Warehouse Theory",permalink:"/Bigdata_Blog_Website/en/blog/\u5b9e\u65f6\u6570\u4ed3\u7406\u8bba\u57fa\u7840"},nextItem:{title:"Offline digital Warehouse, real-time digital Warehouse and DataLakeHouse",permalink:"/Bigdata_Blog_Website/en/blog/\u79bb\u7ebf\u6570\u4ed3\u3001\u5b9e\u65f6\u6570\u4ed3\u4e0e Data Lakehouse"}},d={authorsImageUrls:[void 0]},i=[{value:"\u5206\u5c42\u5b9a\u4e49",id:"\u5206\u5c42\u5b9a\u4e49",level:2},{value:"\u4e3a\u4ec0\u4e48\u8981\u5206\u5c42\uff1f",id:"\u4e3a\u4ec0\u4e48\u8981\u5206\u5c42",level:3},{value:"\u5c42\u7ea7\u5212\u5206",id:"\u5c42\u7ea7\u5212\u5206",level:3},{value:"ODS \u6570\u636e\u6765\u6e90\u5c42",id:"ods-\u6570\u636e\u6765\u6e90\u5c42",level:4},{value:"\u6570\u4ed3\u6a21\u578b\u5c42\uff1a",id:"\u6570\u4ed3\u6a21\u578b\u5c42",level:4},{value:"\u5e94\u7528\u6570\u636e\u5c42",id:"\u5e94\u7528\u6570\u636e\u5c42",level:4},{value:"\u6570\u636e\u6d41\u5411",id:"\u6570\u636e\u6d41\u5411",level:2},{value:"\u6570\u4ed3\u642d\u5efa\u601d\u8def",id:"\u6570\u4ed3\u642d\u5efa\u601d\u8def",level:2},{value:"\u4e1a\u52a1\u5206\u5168\u5c40\u4e1a\u52a1\u548c\u5404\u4e1a\u52a1\u7ebf",id:"\u4e1a\u52a1\u5206\u5168\u5c40\u4e1a\u52a1\u548c\u5404\u4e1a\u52a1\u7ebf",level:2},{value:"\u603b\u7ebf\u77e9\u9635\u5212\u5206\u89c4\u5219(DW)",id:"\u603b\u7ebf\u77e9\u9635\u5212\u5206\u89c4\u5219dw",level:2},{value:"\u6570\u636e\u4e3b\u9898\u57df\u5212\u5206\u89c4\u5219(DM)",id:"\u6570\u636e\u4e3b\u9898\u57df\u5212\u5206\u89c4\u5219dm",level:2},{value:"\u5e94\u7528\u4e3b\u9898\u57df\u5212\u5206\u89c4\u5219(ADS)",id:"\u5e94\u7528\u4e3b\u9898\u57df\u5212\u5206\u89c4\u5219ads",level:2},{value:"\u8bbe\u8ba1\u6587\u6863\u6a21\u677f",id:"\u8bbe\u8ba1\u6587\u6863\u6a21\u677f",level:2},{value:"DW\u4e8b\u5b9e\u8868\u793a\u4f8b\u8bf4\u660e",id:"dw\u4e8b\u5b9e\u8868\u793a\u4f8b\u8bf4\u660e",level:3},{value:"DW\u7ef4\u5ea6\u8868\u793a\u4f8b\u8bf4\u660e\u5982\u4e0a",id:"dw\u7ef4\u5ea6\u8868\u793a\u4f8b\u8bf4\u660e\u5982\u4e0a",level:3},{value:"DM\u96c6\u5e02\u8868\u540c\u4e0a",id:"dm\u96c6\u5e02\u8868\u540c\u4e0a",level:3},{value:"\u65b0\u5efa\u8868\u89c4\u8303",id:"\u65b0\u5efa\u8868\u89c4\u8303",level:2},{value:"\u5206\u5c42\u5e93\u5e93\u540d\uff1axxxx",id:"\u5206\u5c42\u5e93\u5e93\u540dxxxx",level:3},{value:"\u5404\u5c42\u5b58\u50a8\u5f62\u5f0f\uff1a",id:"\u5404\u5c42\u5b58\u50a8\u5f62\u5f0f",level:3},{value:"\u8d34\u6e90\u5c42\u8868\u547d\u540d\u89c4\u8303",id:"\u8d34\u6e90\u5c42\u8868\u547d\u540d\u89c4\u8303",level:3}],o={toc:i};function k(t){let{components:e,...l}=t;return(0,a.kt)("wrapper",(0,n.Z)({},o,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5206\u5c42\u5b9a\u4e49"},"\u5206\u5c42\u5b9a\u4e49"),(0,a.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u8981\u5206\u5c42"},"\u4e3a\u4ec0\u4e48\u8981\u5206\u5c42\uff1f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6e05\u6670\u6570\u636e\u7ed3\u6784"),(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u8840\u7f18\u8ffd\u8e2a"),(0,a.kt)("li",{parentName:"ul"},"\u51cf\u5c11\u91cd\u590d\u5f00\u53d1"),(0,a.kt)("li",{parentName:"ul"},"\u628a\u590d\u6742\u95ee\u9898\u7b80\u5355\u5316"),(0,a.kt)("li",{parentName:"ul"},"\u5c4f\u853d\u539f\u59cb\u6570\u636e\u7684\u5f02\u5e38"),(0,a.kt)("li",{parentName:"ul"},"\u5c4f\u853d\u4e1a\u52a1\u7684\u5f71\u54cd")),(0,a.kt)("h3",{id:"\u5c42\u7ea7\u5212\u5206"},"\u5c42\u7ea7\u5212\u5206"),(0,a.kt)("h4",{id:"ods-\u6570\u636e\u6765\u6e90\u5c42"},"ODS \u6570\u636e\u6765\u6e90\u5c42"),(0,a.kt)("p",null,"\u6570\u636e\u6765\u6e90\u5c42\uff0c\u4e3b\u8981\u5305\u542b\u4e1a\u52a1\u6570\u636e\u5e93\u5feb\u7167\u6570\u636e\uff08db\uff09\u3001\u57cb\u70b9\u6570\u636e(data)\u3001\u5176\u4ed6\u4e1a\u52a1\u7b49\u6570\u636e\u3002"),(0,a.kt)("h4",{id:"\u6570\u4ed3\u6a21\u578b\u5c42"},"\u6570\u4ed3\u6a21\u578b\u5c42\uff1a"),(0,a.kt)("p",null,"TMP\uff1a\u4e34\u65f6\u5c42\uff0c \u6570\u636e\u5904\u7406\u7684\u8f85\u52a9\u5904\u7406\u5c42\uff0c\u670d\u52a1\u4e8eDW\u3001DM\u5c42\uff0c\u4e3b\u8981\u662f\u4e00\u4e9b\u4e34\u65f6\u5b58\u50a8\u7684\u6570\u636e,\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u9009\u62e9\u521b\u5efa\u4e0e\u4e0d\u521b\u5efa\uff0c\u5305\u62ec\uff1a\u8ba1\u7b97\u4efb\u52a1\u7684\u4e2d\u95f4\u7ed3\u679c\u6570\u636e\u3001RAW\u5c42\u6bcf\u65e5\u589e\u91cf\u6570\u636e\u62bd\u53d6\u4e34\u65f6\u843d\u5730\u7b49\uff0c\u4e00\u822c\u6700\u591a\u4fdd\u5b581-2\u5929\u5373\u53ef\u6e05\u7406\u3002"),(0,a.kt)("p",null,"DIM\uff1a\u7ef4\u5ea6\u6570\u636e\u5c42\uff0c\u4e3b\u8981\u5305\u542b\u4e00\u4e9b\u5b57\u5178\u8868\u3001\u7ef4\u5ea6\u6570\u636e\u3002\u5b9e\u4f8b\uff1a\u54c1\u7c7b\u5b57\u5178\u8868\u3001\u57ce\u5e02\u5b57\u5178\u8868\u3001\u6e20\u9053\u5b57\u5178\u8868\u3001\u7ec8\u7aef\u7c7b\u578b\u8868\u3001\u652f\u4ed8\u72b6\u6001\u8868\u3001\u5708\u5b50\u5217\u8868"),(0,a.kt)("p",null,"DW\uff1adata warehouse\uff0c\u5b58\u50a8\u7ecf\u8fc7\u6807\u51c6\u89c4\u8303\u5316\u5904\u7406\uff08\u5373\u6570\u636e\u6e05\u6d17\uff09\u540e\u7684\u8fd0\u8425\u6570\u636e\uff0c\u662f\u57fa\u7840\u4e8b\u5b9e\u6570\u636e\u660e\u7ec6\u5c42\u3002\u5b9e\u4f8b\uff1a\u540e\u7aef\u65e5\u5fd7\u660e\u7ec6\u8868\u3001\u524d\u7aef\u57cb\u70b9\u65e5\u5fd7\u660e\u7ec6\u8868\u3001mysql\u5404\u4e1a\u52a1\u6570\u636e\u7ecf\u8fc7ETL\u5904\u7406\u540e\u7684\u8868\u3002"),(0,a.kt)("p",null,"DWS\uff1a\u8f7b\u5ea6\u6c47\u603b\u5c42\uff0c\u57fa\u4e8e\u5355\u4e8b\u5b9e\u8868\u8fdb\u884c\u6307\u6807\u8f7b\u5ea6\u52a0\u5de5\u3002"),(0,a.kt)("p",null,"DM\uff1adata market(\u4e5f\u53ebDWS\uff1adata warehouse service)\uff0c\u6570\u636e\u4e3b\u9898\u5c42\u6216\u8005\u5bbd\u8868\u5c42\uff0c\u6309\u90e8\u95e8\u6309\u4e13\u9898\u8fdb\u884c\u5212\u5206\uff0c\u652f\u6301OLAP\u5206\u6790\u3001\u6570\u636e\u5206\u53d1\u7b49\uff0c\u5176\u4fe1\u606f\u4e3b\u8981\u6765\u6e90\u4e8eDW \u6216TMP\u5c42\u6c47\u603b\u6570\u636e\u3002\u5b9e\u4f8b\uff1a\u65b0\u6fc0\u6d3b\u7528\u6237\u4e1a\u52a1\u5206\u6790\u8868\u3001\u65e5\u6d3b\u7528\u6237\u4e1a\u52a1\u5206\u6790\u8868\u3001\u5386\u53f2\u6fc0\u6d3b\u7528\u6237\u4e1a\u52a1\u5206\u6790\u8868\u3001\u7528\u6237\u884c\u4e3a\u8f68\u8ff9\u8868\u3001\u7ea2\u5305\u4e1a\u52a1\u8868\u3001\u4ea4\u6613\u54c1\u7c7b\u6765\u6e90\u591a\u7ef4\u8868\u3001\u5546\u4e1a\u5e7f\u544a\u591a\u7ef4\u5206\u6790\u62a5\u8868"),(0,a.kt)("h4",{id:"\u5e94\u7528\u6570\u636e\u5c42"},"\u5e94\u7528\u6570\u636e\u5c42"),(0,a.kt)("p",null,"ADS\uff1aapplication database service,\u5e94\u7528\u6570\u636e\u5c42, \u9762\u5411\u5177\u4f53\u5e94\u7528\u7684\u8868\uff0c\u8981\u521b\u5efa\u5728\u8fd9\u5c42\uff0c\u53ef\u5bfc\u5165hbase\u6216mysql\u7b49\u4f7f\u7528\u3002\u5b9e\u4f8b\uff1a\u6309\u5929\u3001\u5c0f\u65f6\u30015\u5206\u949f\u7c92\u5ea6\u8ba1\u7b97\u6c47\u603b\u7684\u7ed3\u679c\u5b58\u5165mysql\u3001hbase\u7684\u62a5\u8868"),(0,a.kt)("h2",{id:"\u6570\u636e\u6d41\u5411"},"\u6570\u636e\u6d41\u5411"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u5355\u5411\u52a0\u5de5\u4e0d\u53ef\u9006"),(0,a.kt)("li",{parentName:"ul"},"\u9664\u56fe\u91cc\u6807\u6ce8\u7684\u6d41\u5411\u5916\u6570\u636e\u4e0d\u53ef\u8de8\u5c42\u8c03\u7528")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/34996528/160243905-4ceb72ea-ca09-4807-95c5-4b371c0bccfd.png",alt:"image"})),(0,a.kt)("h2",{id:"\u6570\u4ed3\u642d\u5efa\u601d\u8def"},"\u6570\u4ed3\u642d\u5efa\u601d\u8def"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6240\u6709\u6570\u636e\u7684\u8d34\u6e90\u5c42\u8868\u90fd\u5b58\u653e\u5728 \u4e1a\u52a1global \u5373\u53ef\uff0c\u4e1a\u52a1\u7ebf\u4e0d\u9700\u8981\u5355\u72ec\u7ef4\u62a4\u4e1a\u52a1\u7ebf\u81ea\u5df1\u7684\u8d34\u6e90\u5c42\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6240\u6709\u6570\u636e\u6e90\u8fdb\u6570\u4ed3\u9996\u8981\u8981\u843d\u5730\u5230ods\u5c42\uff0c\u4e0d\u53ef\u8df3\u8fc7\u8d34\u6e90\u5c42\u5728\u5176\u4ed6\u5c42\u76f4\u63a5\u843d\u5730\u548c\u4f7f\u7528(\u624b\u5de5\u914d\u7f6e\u8868\u9664\u5916) \u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6240\u6709\u4ece\u6570\u4ed3\u51fa\u53bb\u7684\u8868\u5fc5\u987b\u5728ads\u9996\u5148\u843d\u5730\uff0c\u624d\u80fd\u5bf9\u5916\u8f93\u51fa\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5168\u5c40\u57fa\u7840\u6570\u636e\u653e\u5728 global\uff08\u5982\u8ba2\u5355\u3001\u5546\u54c1\u3001\u7528\u6237\u6a21\u578b\u8868\u7b49\uff09\u4e0b\uff0c\u529f\u80fd\u5305\u62ec\uff1a\u5168\u5c40\u6570\u636e\u3001\u6e05\u6d17\u810f\u6570\u636e\u7b49"),(0,a.kt)("li",{parentName:"ul"},"\u6839\u636e\u5b9e\u9645\u4e1a\u52a1\u60c5\u51b5\uff0c\u4e1a\u52a1\u7ebf\u6570\u636e\u5e93\u91cd\u65b0\u5b9a\u4e49B2C/B2B/C2C/C2B 4\u6761\uff0c\u6570\u636e\u4ed3\u5e93\u7684\u5e93\u5355\u72ec\u7ef4\u62a4\uff0c\u5373 dw_b2c/b2b/c2c/c2b\uff0c\u5176\u4ed6\u4e1a\u52a1\u7ebf\u653e\u5728GLOBAL\u4e0b\u5373\u53ef\uff08\u641c\u7d22\u63a8\u8350\u3001\u5546\u4e1a\u7b49\u6709\u81ea\u4e3b\u642d\u5efa\u6570\u4ed3\u80fd\u529b\u7684\u4ecd\u7136\u662f\u81ea\u5df1\u7ef4\u62a4\uff0c\u6682\u65f6\u4e0d\u505a\u7ba1\u63a7\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u5168\u5c40/\u4e1a\u52a1\u7ebf\u7684\u6c89\u6dc0\u5927\u5bbd\u8868\u3001\u4e13\u9898\u8868\u3001\u6307\u6807\u8868\u653e\u5728 dm_global/b2c/b2b/c2b/c2c"),(0,a.kt)("li",{parentName:"ul"},"dm_global\u4e0d\u53ef\u7528\u4e0d\u540c\u4e1a\u52a1\u7ebf\u7684\u6570\u636e\u7684dm\u5c42\uff0c\u9700global\u81ea\u5df1\u52a0\u5de5\uff08\u76ee\u7684\u662f\u4e3a\u4e86\u8ba9\u5168\u5c40\u6709\u4e1a\u52a1\u6c89\u6dc0\uff0c\u6709\u81ea\u4e3b\u6570\u636e\u52a0\u5de5\u80fd\u529b\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u5206\u6790\u7ed3\u679c\u8868\u653e\u5728 ads_global/b2c/b2b/c2b/c2c"),(0,a.kt)("li",{parentName:"ul"},"ads_global\u53ef\u7ec4\u5408\u4e0d\u540c\u4e1a\u52a1\u7ebf\u7684\u6570\u636e\u7684dm,ads\u5c42\uff08\u4e3a\u7684\u662f\u5feb\u901f\u54cd\u5e94\u4e1a\u52a1\u9700\u6c42\uff0c\u540c\u65f6\u4e2a\u6027\u5316\u4e1a\u52a1\u9700\u6c42\u6ca1\u5fc5\u8981\u5728\u5168\u5c40\u5c42\u9762\u4fdd\u7559\uff09"),(0,a.kt)("li",{parentName:"ul"},"\u6ce8\u610f\uff1a\u5bf9\u4e8e\u5df2\u56fa\u5316\u7684\u4e1a\u52a1\uff1a\u5148\u653e\u5728global,\u4e1a\u52a1\u7ebf\u4eceglobal\u83b7\u53d6\u6570\u636e\uff1b\u5bf9\u4e8e\u65b0\u4e1a\u52a1\u6216\u63a2\u7d22\u6027\u4e1a\u52a1\uff1a\u5148\u5728\u4e1a\u52a1\u7ebf\u6570\u4ed3\u6ee1\u8db3\u8bc9\u6c42\u6216\u642d\u5efa\u6a21\u578b\uff0c\u5f85\u4e1a\u52a1\u7a33\u5b9a\u540e\u518d\u5b8c\u5584global\uff09")),(0,a.kt)("h1",{id:"\u4e1a\u52a1\u677f\u5757\u5212\u5206"},"\u4e1a\u52a1\u677f\u5757\u5212\u5206"),(0,a.kt)("h2",{id:"\u4e1a\u52a1\u5206\u5168\u5c40\u4e1a\u52a1\u548c\u5404\u4e1a\u52a1\u7ebf"},"\u4e1a\u52a1\u5206\u5168\u5c40\u4e1a\u52a1\u548c\u5404\u4e1a\u52a1\u7ebf"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5efa\u8bbe\u8981\u6c42 \u4f18\u5148\u5efa\u8bbe\u5168\u5c40\u4e1a\u52a1\u677f\u5757\uff0c\u7279\u6b8a\u573a\u666f\u4e0b\u53ef\u4ee5\u6309\u4e1a\u52a1\u7ebf\u5efa\u8bbe\u5177\u4f53\u7684\u4e1a\u52a1\u7ebf\u677f\u5757")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u547d\u540d\u89c4\u5219"))),(0,a.kt)("p",null,"\u5168\u5c40\u4e3a global"),(0,a.kt)("p",null,"\u5404\u4e1a\u52a1\u7ebf b2b c2c\u7b49"),(0,a.kt)("p",null,"\u5177\u4f53\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,"odsdb_global  \u4ece\u516c\u53f8\u5404\u4e1a\u52a1mysql\u8868\u4ee5\u53ca\u5176\u4ed6\u6570\u636e\u6e90 \u540c\u6b65\u7684\u5feb\u7167\u4fe1\u606f\uff1b\u4ece\u65e5\u5fd7\u8bfb\u53d6\u7684\u539f\u59cb\u65e5\u5fd7\u6570\u636e\ndw_global     \u5305\u542b\u516c\u53f8\u5404\u4e1a\u52a1\u7ecf\u8fc7ETL\u540e\u7684\u57fa\u7840\u4e8b\u5b9e\u660e\u7ec6\u8868\u548c\u8f7b\u5ea6\u6c47\u603b\u8868\ndim_global    \u5305\u542b\u516c\u53f8\u6240\u6709\u7684\u5b57\u5178\u4fe1\u606f\u548c\u7ef4\u5ea6\u8868\ndm_global   \u9762\u5411\u516c\u53f8\u7684\u4e0d\u540c\u4e3b\u9898\u4e1a\u52a1\u7684\u516c\u5171\u5206\u6790\u6570\u636e\uff08\u65e5\u6d3b\u3001\u4ea4\u6613\u3001\u7528\u6237\u6807\u7b7e\u7b49\uff09\nads_global\t\u9762\u5411\u516c\u53f8\u7684\u4e0d\u540c\u4e3b\u9898\u4e1a\u52a1\u7684\u7ed3\u679c\u5206\u6790\u6570\u636e\uff0c\u53ef\u7528\u4e8eBI\u5c55\u793a\u3001\u63a8\u9001\u3001\u5206\u6790\u7b49\u4f7f\u7528\ntmp_global  \u5305\u542b\u57fa\u4e8e\u516c\u53f8\u5c42\u9762\u5206\u6790\u4ea7\u751f\u7684\u4e00\u4e9b\u4e34\u65f6\u8868"),(0,a.kt)("p",null,"\u5404\u4e1a\u52a1\u7ebf\u7c7b\u4f3c"),(0,a.kt)("h2",{id:"\u603b\u7ebf\u77e9\u9635\u5212\u5206\u89c4\u5219dw"},"\u603b\u7ebf\u77e9\u9635\u5212\u5206\u89c4\u5219(DW)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u603b\u7ebf\u77e9\u9635\uff1a\u5728\u4f01\u4e1a\u8303\u56f4\u5185\u5177\u6709\u7edf\u4e00\u89e3\u91ca\u7684\u6807\u51c6\u5316\u7ef4\u5ea6\u4e0e\u4e8b\u5b9e\u7684\u4e00\u6574\u5957\u6570\u636e\u4f53\u7cfb\uff0c\u6240\u6709\u4e1a\u52a1\u521b\u5efa\u7684\u7ef4\u5ea6\u6a21\u578b\u5171\u4eab\u4e00\u7ec4\u5177\u6709\u4e00\u81f4\u6027\u7684\u5171\u7528\u7efc\u5408\u7ef4\u5ea6\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4e00\u81f4\u6027\u7ef4\u5ea6\uff1a\u7ef4\u5ea6\u540c\u4e00\uff0c\u5177\u6709\u4e00\u81f4\u7684\u7ef4\u5ea6\u5173\u952e\u5b57\u3001\u4e00\u81f4\u7684\u5c5e\u6027\u5217\u540d\u5b57\u3001\u4e00\u81f4\u7684\u5c5e\u6027\u5b9a\u4e49\u4ee5\u53ca\u4e00\u81f4\u7684\u5c5e\u6027\u503c\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6570\u636e\u57df\uff1a\u5c06\u6240\u6709\u7684\u4e1a\u52a1\u8fc7\u7a0b\u8fdb\u884c\u805a\u7c7b\uff0c\u9ad8\u5ea6\u62bd\u8c61\u540e\u5f62\u6210\u7684\u4e00\u4e2a\u5206\u6790\u4e3b\u9898\u3002\u4e3b\u8981\u53c2\u80032\u4e2a\u539f\u52191\u4e2a\u601d\u60f3\u8bbe\u8ba1\uff1a"),(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u539f\u5219\uff1a\u9ad8\u5185\u805a\u4f4e\u8026\u5408\uff0c\u5c06\u6982\u5ff5\u63a5\u8fd1\uff0c\u5173\u8054\u5ea6\u9ad8\u7684\u653e\u5728\u4e00\u7c7b\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u539f\u5219\uff1a\u4fdd\u8bc1\u62bd\u8c61\u903b\u8f91\u7684\u4e00\u81f4\u6027\uff0c\u5f62\u6210\u6700\u7ec8\u7684\u6570\u636e\u57df\u548c\u76f8\u5173\u4e1a\u52a1\u8fc7\u7a0b\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u601d\u60f3\uff1a\u87ba\u65cb\u9012\u8fdb\uff0c\u6570\u636e\u57df\u7684\u5212\u5206\u6ca1\u6709\u5b8c\u7f8e\u7684\u72b6\u6001\uff0c\u53ea\u6709\u63a5\u8fd1\u5b8c\u7f8e\uff0c\u5728\u5b9e\u8df5\u8fc7\u7a0b\u4e2d\u4ee5\u87ba\u65cb\u9012\u8fdb\u7684\u65b9\u5f0f\u8fed\u4ee3\u4f18\u5316\u3002\n\u5e38\u89c1\u7684\u62bd\u8c61\u65b9\u6cd5\uff1a"),(0,a.kt)("li",{parentName:"ul"},"\u6309\u4e1a\u52a1\u6216\u4e1a\u52a1\u8fc7\u7a0b\u5212\u5206\uff1a\u6bd4\u5982\u9500\u552e\u3001\u56de\u6536\u3001\u79df\u8d41\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u6309\u9700\u6c42\u65b9\u5212\u5206\uff1a\u6bd4\u5982\u9700\u6c42\u65b9\u4e3a\u8d22\u52a1\u90e8\uff0c\u5c31\u53ef\u4ee5\u8bbe\u5b9a\u5bf9\u5e94\u7684\u8d22\u52a1\u4e3b\u9898\u57df\uff0c\u800c\u8d22\u52a1\u4e3b\u9898\u57df\u91cc\u9762\u53ef\u80fd\u5c31\u4f1a\u6709\u5458\u5de5\u5de5\u8d44\u5206\u6790\uff0c\u6295\u8d44\u56de\u62a5\u6bd4\u5206\u6790\u7b49\u4e3b\u9898\uff1b"),(0,a.kt)("li",{parentName:"ul"},"\u6309\u529f\u80fd\u6216\u5e94\u7528\u5212\u5206\uff1a\u6bd4\u5982\u5c65\u7ea6\u80fd\u529b\u3001\u8425\u9500\u6d3b\u52a8\u7b49"),(0,a.kt)("li",{parentName:"ul"},"\u6309\u90e8\u95e8\u5212\u5206\uff1a\u6bd4\u5982\u5546\u4e1a\u5e7f\u544a\u3001\u98ce\u63a7")),(0,a.kt)("p",null,"\u4e00\u81f4\u6027\u7ef4\u5ea6 \uff1a \u65e5\u671f \u5e73\u53f0 \u7ec8\u7aef \u7ec8\u7aef\u7248\u672c\u53f7 \u6e20\u9053 \u4e1a\u52a1\u7ebf \u54c1\u7c7b \u54c1\u724c \u578b\u53f7 \u57ce\u5e02 \u8bbe\u5907id \u7528\u6237id \u5546\u54c1id \u9500\u552eid \u7b49"),(0,a.kt)("p",null,"\u6570\u636e\u57df(\u4e00\u7ea7\u5b50\u57df\uff08\u4e8c\u7ea7\u5b50\u57df\uff09) \uff1a "),(0,a.kt)("p",null,"\u4ea4\u6613 (\u4ea4\u6613( \u7ebf\u4e0a\uff0c\u7ebf\u4e0b ))\n\u5c65\u7ea6 (\u5ba2\u670d( \u4f1a\u8bdd\uff0c\u5916\u547c\uff0c\u76f4\u64ad ))\n\u5546\u54c1 (\u4f9b\u7ed9( \u7ebf\u4e0b))\n\u8425\u9500 (\u79c1\u57df\uff0c\u65b0\u5a92\u4f53\uff0c\u7ea2\u5305)"),(0,a.kt)("p",null,"\u4e1a\u52a1\u8fc7\u7a0b\u4e3e\u4f8b "),(0,a.kt)("p",null,"\u5ba2\u670d --- \u4f1a\u8bdd ---- \u7528\u6237\u8fdb\u7ebf\uff0c\u673a\u5668\u4eba\u63a5\u5f85\uff0c\u7528\u6237\u8f6c\u4eba\u5de5\uff0c\u7528\u6237\u8bc4\u4ef7\uff0c\u5ba2\u670d\u521b\u5efa\u5de5\u5355\uff0c\u5904\u7406\u5de5\u5355"),(0,a.kt)("h2",{id:"\u6570\u636e\u4e3b\u9898\u57df\u5212\u5206\u89c4\u5219dm"},"\u6570\u636e\u4e3b\u9898\u57df\u5212\u5206\u89c4\u5219(DM)"),(0,a.kt)("p",null,"DM\u5c42\u7528\u4e8e\u5efa\u8bbe\u8de8\u4e3b\u9898\u5bbd\u8868\u3001\u8de8\u4e3b\u9898\u6c47\u603b\u8868\u3001\u9879\u76ee\u6216\u4e13\u9898\u7ea7\u57fa\u7840\u8868"),(0,a.kt)("p",null,"DM\u6570\u636e\u4e3b\u9898\u57df\u662f\u6839\u636e\u4e1a\u52a1\u770b\u6570\u636e\u7684\u65b9\u5f0f\u5236\u5b9a\uff0c\u5982\u9700\u65b0\u589e\u8054\u7cfb\u5bf9\u5e94\u8d1f\u8d23\u4eba"),(0,a.kt)("p",null,"\u4e00\u7ea7\u4e3b\u9898"),(0,a.kt)("p",null,"channel \u6e20\u9053  \tfinance\t\u8d22\u52a1  price\t\u4ef7\u683c\u7cfb\u7edf  user\t\u7528\u6237  scm\t\u4f9b\u5e94\u94fe  recommend\t\u641c\u7d22\u63a8\u8350  \tafs\t\u552e\u540e  \tspam\t\u98ce\u63a7"),(0,a.kt)("h2",{id:"\u5e94\u7528\u4e3b\u9898\u57df\u5212\u5206\u89c4\u5219ads"},"\u5e94\u7528\u4e3b\u9898\u57df\u5212\u5206\u89c4\u5219(ADS)"),(0,a.kt)("p",null,"ADS\u5c42\u662f\u5e94\u7528\u5c42\uff0c\u57fa\u4e8e\u5e94\u7528\u5c42\u7684\u591a\u6837\u5316\uff0c\u6b64\u5904\u5236\u5b9aADS\u5c42\u7684\u5e94\u7528\u4e3b\u9898\u547d\u540d\u89c4\u8303\uff0c\u4fbf\u4e8e\u5feb\u901f\u8bc6\u522b\u6570\u636e\u7684\u4f7f\u7528\u5f62\u5f0f\u3002"),(0,a.kt)("p",null,"bi\t\u5206\u6790\u62a5\u8868\u4f7f\u7528  ads_bi_ei_type_pur_online_sum_inc_1d  \u201cbi\u201d\u5360\u636e\u7b2c\u4e8c\u4f4d\uff0c\u5982\u6709\u6570\u636e\u57df\uff0c\u6570\u636e\u57df\u653e\u5728\u7b2c\u4e09\u4f4d"),(0,a.kt)("p",null,"ana\t\u5206\u6790\u5e08\u81ea\u4e3b\u5206\u6790\u4e13\u7528"),(0,a.kt)("p",null,"app\napp\u5ba2\u6237\u7aef\u63a8\u9001\u4f7f\u7528\uff0c\u5176\u4ed6\u4e1a\u52a1\u90e8\u95e8\u6570\u636e\u5e93\u63a8\u9001\u4f7f\u7528\u3002"),(0,a.kt)("h1",{id:"\u5f00\u53d1\u6d41\u7a0b\u89c4\u8303"},"\u5f00\u53d1\u6d41\u7a0b\u89c4\u8303"),(0,a.kt)("p",null,"\u5f00\u53d1\u6d41\u7a0b\u9700\u9075\u5faa \u5f00\u53d1\u6d41\u7a0b\u89c4\u8303\uff0c\u65b0\u5efa\u8868\u89c4\u8303\uff0c\u8868\u6743\u9650\u89c4\u8303\uff0c\u811a\u672c\u89c4\u8303\uff0c\u8c03\u5ea6\u89c4\u8303\uff0c\u76d1\u63a7\u89c4\u8303\uff0c\u62a5\u8868\u4e0b\u7ebf\u89c4\u8303\uff0c\u751f\u547d\u5468\u671f\u7ba1\u7406\u89c4\u8303"),(0,a.kt)("p",null,"\u603b\u4f53\u6d41\u7a0b\u4e3a"),(0,a.kt)("p",null,"\u4e1a\u52a1\u8c03\u7814 -> \u6a21\u578b\u8bbe\u8ba1 -> \u6a21\u578b\u8bc4\u5ba1 -> \u6a21\u578b\u5f00\u53d1 -> \u6a21\u578b\u81ea\u6d4b -> \u4e0a\u7ebf\u5ba1\u6838"),(0,a.kt)("p",null,"\u4e1a\u52a1\u8c03\u7814\uff1a \u4e1a\u52a1\u8c03\u7814\u91cd\u70b9\u5728\u4e8e\u641e\u6e05\u695a\u6d89\u53ca\u5230\u7684\u4e1a\u52a1\u677f\u5757\u3001\u6570\u636e\u57df\u3001\u4e1a\u52a1\u8fc7\u7a0b\uff0c\u4ee5\u53ca\u68b3\u7406\u9700\u8981\u770b\u6570\u636e\u7684\u7ef4\u5ea6\u548c\u91cd\u70b9\u5173\u6ce8\u7684\u6307\u6807\u3002\u4e3a\u540e\u7eed\u6a21\u578b\u8bbe\u8ba1\u63d0\u4f9b\u53c2\u8003\u3002\u53ef\u914c\u60c5\u4ea7\u51famrd\u6587\u6863\u3001prd\u6587\u6863\uff0c\u6682\u4e0d\u505a\u5f3a\u5236\u8981\u6c42\u3002"),(0,a.kt)("p",null,"\u6a21\u578b\u8bbe\u8ba1\uff1a \u6a21\u578b\u8bbe\u8ba1\u5e94\u9075\u5faa\u6570\u4ed3\u67b6\u6784\u4f53\u7cfb\u4e2d\u5bf9\u6570\u636e\u52a0\u5de5\u6d41\u5411\uff0c\u7ed3\u5408\u4e1a\u52a1\u8c03\u7814\u7684\u7ed3\u679c\u548c\u603b\u7ebf\u77e9\u9635\u7684\u89c4\u5212\uff0c\u4f18\u5148\u8fdb\u884cDW\u5c42\u7684\u4e8b\u5b9e\u8868\u548cDIM\u7ef4\u8868\u8bbe\u8ba1\uff0c\u5176\u6b21\u8fdb\u884cDM\u5c42\u6a21\u578b\u8bbe\u8ba1\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/34996528/160246308-4f0422f7-b80d-488a-b7ea-8d5ad86dbcb1.png",alt:"image"})),(0,a.kt)("p",null,"\u6a21\u578b\u8bc4\u5ba1\uff1a\n\u91cd\u70b9\u5bf9\u89c4\u8303\u6267\u884c\u60c5\u51b5\u3001\u662f\u5426\u91cd\u590d\u5efa\u8bbe\u3001\u8bbe\u8ba1\u662f\u5426\u5168\u9762\u5bcc\u6709\u524d\u77bb\u6027\u3001\u7ef4\u5ea6\u8bbe\u8ba1\u662f\u5426\u5408\u7406\u8fdb\u884c\u8bc4\u5ba1\uff0c\u662f\u6a21\u578b\u5f00\u53d1\u524d\u7684\u7b2c\u4e00\u9053\u628a\u63a7\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/34996528/160246346-0c8dd841-863b-4bb8-b2ae-7efdc9aa53c4.png",alt:"image"})),(0,a.kt)("p",null,"\u6a21\u578b\u5f00\u53d1\uff1a\n\u6a21\u578b\u5f00\u53d1\u5e94\u9075\u5faa\u5efa\u8868\u89c4\u8303\u3001\u8868\u6743\u9650\u89c4\u8303\u3001\u811a\u672c\u89c4\u8303\u3001\u8c03\u5ea6\u89c4\u8303\u3001\u76d1\u63a7\u89c4\u8303\u3001\u62a5\u8868\u4e0b\u7ebf\u89c4\u8303\u3001\u751f\u547d\u5468\u671f\u7ba1\u7406\u89c4\u8303\u7b49\u89c4\u8303\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/34996528/160246371-c4f27e8e-4c9f-4637-880a-f9691d899854.png",alt:"image"})),(0,a.kt)("p",null,"\u6a21\u578b\u81ea\u6d4b\uff1a\n\u6a21\u578b\u81ea\u6d4b\u662f\u4e0a\u7ebf\u524d\u5bf9\u6a21\u578b\u7684\u6570\u636e\u8d28\u91cf\u3001\u7c92\u5ea6\u7b49\u8fdb\u884c\u68c0\u9a8c\uff0c\u662f\u5fc5\u987b\u6267\u884c\u7684\u4e00\u4e2a\u73af\u8282\uff0c\u81ea\u6d4b\u6587\u6863\u6682\u4e0d\u505a\u5f3a\u5236\u8981\u6c42\uff0c\u4e8c\u671f\u518d\u8865\u5145\u5b8c\u5584\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/34996528/160246401-7fa25ad5-3a5c-420f-a0ab-0526b98e74e0.png",alt:"image"})),(0,a.kt)("p",null,"\u6a21\u578b\u4e0a\u7ebf\uff1a\n\u6a21\u578b\u4e0a\u7ebf\u9700\u8981\u5728\u6570\u4ed3\u5730\u56fe\u8fdb\u884c\u6ce8\u518c\uff0c\u6ce8\u518c\u9700\u7ef4\u62a4\u6a21\u578b\u7684\u57fa\u672c\u4fe1\u606f\uff0c\u5982\u6240\u5c5e\u4e1a\u52a1\u677f\u5757\u3001\u6570\u636e\u57df\u3001\u4e1a\u52a1\u8fc7\u7a0b\u3001\u7c92\u5ea6\u3001\u4e8b\u5b9e\u5c5e\u6027\u3001\u7ef4\u5ea6\u3001\u5ea6\u91cf\u3001\u4f7f\u7528\u8bf4\u660e\u7b49\u7b49\u3002\u6570\u4ed3\u5730\u56fe\u4f5c\u4e3a\u6a21\u578b\u5bf9\u5916\u7684\u51fa\u53e3\uff0c\u89e3\u51b3\u627e\u8868\u96be\u95ee\u9898\u7684\u540c\u65f6\uff0c\u6ce8\u518c\u5ba1\u6838\u901a\u8fc7\u65b9\u80fd\u4e0a\u7ebf\u7684\u673a\u5236\uff0c\u4e5f\u662f\u6570\u4ed3\u89c4\u8303\u843d\u5730\u60c5\u51b5\u7684\u6700\u540e\u4e00\u9053\u5c4f\u969c\u3002"),(0,a.kt)("p",null,"\u8be6\u7ec6\u6a21\u578b\u6ce8\u518c\u89c4\u8303\u53ef\u67e5\u770b \u6570\u4ed3\u5730\u56fe\u6a21\u578b\u6ce8\u518c\u89c4\u8303\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/34996528/160246438-717448bf-6b7f-4859-81e9-0b2e98c6e342.png",alt:"image"})),(0,a.kt)("h2",{id:"\u8bbe\u8ba1\u6587\u6863\u6a21\u677f"},"\u8bbe\u8ba1\u6587\u6863\u6a21\u677f"),(0,a.kt)("h3",{id:"dw\u4e8b\u5b9e\u8868\u793a\u4f8b\u8bf4\u660e"},"DW\u4e8b\u5b9e\u8868\u793a\u4f8b\u8bf4\u660e"),(0,a.kt)("p",null,"\u6a21\u578b\u8868\n\u8868\u4e2d\u6587\u540d\n\u4e1a\u52a1\u677f\u5757\n\u6570\u636e\u57df\n\u4e1a\u52a1\u8fc7\u7a0b\n\u6a21\u578b\u8868\u6ce8\u91ca\n\u8868\u4e3b\u952e/\u7c92\u5ea6\n\u751f\u547d\u5468\u671f\n\u4f7f\u7528\u8bf4\u660e\n\u8dd1\u6570\u65b9\u5f0f\n\u4e3b\u8981\u6765\u6e90\u8868    \u8868\u540d   \u522b\u540d   \u5173\u8054\u6761\u4ef6 \u5907\u6ce8"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u5b57\u6bb5\u8bf4\u660e\u5982\u4e0b\uff1a")),(0,a.kt)("p",null,"\u5e8f\u53f7\t\u5206\u7c7b\t\u76ee\u6807\u5b57\u6bb5\t\u5b57\u6bb5\u7c7b\u578b\t\u5b57\u6bb5\u6ce8\u91ca\t\u6570\u636e\u903b\u8f91"),(0,a.kt)("h3",{id:"dw\u7ef4\u5ea6\u8868\u793a\u4f8b\u8bf4\u660e\u5982\u4e0a"},"DW\u7ef4\u5ea6\u8868\u793a\u4f8b\u8bf4\u660e\u5982\u4e0a"),(0,a.kt)("h3",{id:"dm\u96c6\u5e02\u8868\u540c\u4e0a"},"DM\u96c6\u5e02\u8868\u540c\u4e0a"),(0,a.kt)("h2",{id:"\u65b0\u5efa\u8868\u89c4\u8303"},"\u65b0\u5efa\u8868\u89c4\u8303"),(0,a.kt)("p",null,"\u6bcf\u5c42\u662f\u4e00\u4e2a\u5355\u72ec\u5e93"),(0,a.kt)("h3",{id:"\u5206\u5c42\u5e93\u5e93\u540dxxxx"},"\u5206\u5c42\u5e93\u5e93\u540d\uff1axxxx"),(0,a.kt)("h3",{id:"\u5404\u5c42\u5b58\u50a8\u5f62\u5f0f"},"\u5404\u5c42\u5b58\u50a8\u5f62\u5f0f\uff1a"),(0,a.kt)("p",null,"\u6570\u4ed3\u5c42\u7ea7\t\u8868\u7c7b\u578b\t\u5b58\u50a8\u683c\u5f0f\nods\t\u9ed8\u8ba4\uff08\u7ba1\u7406\u8868\uff09\t\u9ed8\u8ba4\uff08TEXTFILE\uff09\ndim\t\u5916\u90e8\u8868\tPARQUET\ndw\t\u5916\u90e8\u8868\tPARQUET\ndm\t\u5916\u90e8\u8868\tPARQUET\ntmp\t\u9ed8\u8ba4\uff08\u7ba1\u7406\u8868\uff09\t\u9ed8\u8ba4\uff08TEXTFILE\uff09\nads\t\u9ed8\u8ba4\uff08\u7ba1\u7406\u8868\uff09\t\u9ed8\u8ba4\uff08TEXTFILE\uff09"),(0,a.kt)("h3",{id:"\u8d34\u6e90\u5c42\u8868\u547d\u540d\u89c4\u8303"},"\u8d34\u6e90\u5c42\u8868\u547d\u540d\u89c4\u8303"),(0,a.kt)("p",null,"1 \u6570\u636e\u6e90\u662fmysql\uff0c\u4f7f\u7528sqoop\u79bb\u7ebf\u62bd\u6570\u7684\uff1a"),(0,a.kt)("p",null,"\u8868\u547d\u540d\u89c4\u5219\uff1aods",(0,a.kt)("em",{parentName:"p"},"mysql"),"{\u6e90\u6570\u636e\u5e93\u540d}",(0,a.kt)("em",{parentName:"p"},"{\u6e90\u6570\u636e\u5e93\u8868\u540d}"),"{\u589e\u5168\u91cf}_{\u8c03\u5ea6\u9891\u7387} \u3002\u547d\u540d\u5206\u4e3a\u56db\u90e8\u5206\uff1a"),(0,a.kt)("p",null,"\u7b2c\u4e00\u90e8\u5206\u4e3a\u6570\u636e\u4ed3\u5e93\u5206\u5c42\u7684\u533a\u5206\uff0c\u6570\u636e\u51c6\u5907\u533a\u547d\u540d\u4e3araw\uff1b"),(0,a.kt)("p",null,"\u7b2c\u4e8c\u90e8\u5206\u4e3a\u6570\u636e\u6e90\u7c7b\u578b\uff1b"),(0,a.kt)("p",null,"\u7b2c\u4e09\u90e8\u5206{\u6e90\u6570\u636e\u5e93\u540d}\u4e3a\u6e90\u6570\u636e\u5e93\u540d\uff0c\u53ef\u4ee5\u4fdd\u8bc1\u6570\u636e\u51c6\u5907\u533a\u5e93\u7684\u76f8\u5bf9\u7a33\u5b9a\uff0c\u5efa\u7acb\u4e0e\u6e90\u5e93\u5e93\u540d\u5bf9\u5e94\u5173\u7cfb\u3002\u6b64\u9879\u907f\u514d\u4e0d\u540c\u6e90\u6570\u636e\u5e93\u5b58\u5728\u76f8\u540c\u8868\u540d\u60c5\u51b5"),(0,a.kt)("p",null,"\u7b2c\u56db\u90e8\u5206{\u6e90\u6570\u636e\u5e93\u8868\u540d}\u4e3a\u6e90\u6570\u636e\u5e93\u8868\u540d\uff0c\u6240\u6709\u8868\u8868\u540d\u4e0e\u6e90\u8868\u8868\u540d\u4fdd\u6301\u4e00\u81f4"),(0,a.kt)("p",null,"\u7b2c\u4e94\u90e8\u5206\u5bf9\u5e94\u8868\u540d\u540e\u7f00\u89c4\u5219\uff0c\u89c1 \u5efa\u8868\u89c4\u8303\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982panda\u5e93pdi_product\u8868\u5bf9\u5e94ods\u5e93\u547d\u540d\u4e3a\uff1aods_mysql_panda_pdi_product_full_1d \u3002"),(0,a.kt)("p",null,"2 \u6570\u636e\u6e90\u662fmysql\uff0c\u4f7f\u7528\u5b9e\u65f6\u5e73\u53f0\u62bd\u53d6\u7684\uff1a"),(0,a.kt)("p",null,"hdfs\u5143\u6570\u636e\u5168\u90e8\u5b58\u653e\u5728 odsdb_global.ods_cdc_binlog_ori_inc_1h \uff0c\u9700\u8981\u4ece\u8be5\u8868\u62bd\u53d6\u89e3\u6790\u51fa\u5355\u8868\u7684\u5c0f\u65f6\u5206\u533a\u6570\u636e\uff0c\u5982\u9700\u8981\uff0c\u518d\u6b21\u52a0\u5de5\u4e3a\u5168\u91cf\u8868\u3002"),(0,a.kt)("p",null,"\u8868\u547d\u540d\u89c4\u5219\uff1araw",(0,a.kt)("em",{parentName:"p"},"mysql"),"{\u6e90\u6570\u636e\u5e93\u540d}",(0,a.kt)("em",{parentName:"p"},"{\u6e90\u6570\u636e\u5e93\u8868\u540d}"),"{\u589e\u5168\u91cf}_{\u8c03\u5ea6\u9891\u7387} \u3002"),(0,a.kt)("p",null,"\u6bd4\u5982 odsdb_global.ods_cdc_binlog_ori_inc_1h \u2192 ods_mysql_panda_pdi_product_inc_1h (dt='yyyy-MM-dd')(\u5f53\u5929\u6570\u636e\u505amerge)\u2192 ods_mysql_panda_pdi_product_full_1h  (dt='yyyy-MM-dd')(\u5f53\u5929\u6570\u636e\u548c\u5386\u53f2\u6240\u6709\u6570\u636e\u505amerge)\u3002"),(0,a.kt)("p",null,"3 \u6570\u636e\u6e90\u662fTidb\u5e93\uff1a"),(0,a.kt)("p",null,"\u8868\u547d\u540d\u89c4\u5219\uff1aods",(0,a.kt)("em",{parentName:"p"},"tidb"),"{\u6e90\u6570\u636e\u5e93\u540d}",(0,a.kt)("em",{parentName:"p"},"{\u6e90\u6570\u636e\u5e93\u8868\u540d}"),"{\u589e\u5168\u91cf}_{\u8c03\u5ea6\u9891\u7387} \u3002"),(0,a.kt)("p",null,"\u6bd4\u5982: ods_tidb_tdb_zzinfoarchived_t_info_ext_archived_full_1d \u3002"),(0,a.kt)("p",null,"4 \u6570\u636e\u6e90\u662f\u65e5\u5fd7\uff1a"),(0,a.kt)("p",null,"\u8868\u547d\u540d\u89c4\u5219\uff1aods",(0,a.kt)("em",{parentName:"p"},"log"),"\u65e5\u5fd7\u5e73\u53f0\u6216\u6765\u6e90",(0,a.kt)("em",{parentName:"p"},"{\u81ea\u5b9a\u4e49\u8868\u540d}"),"{\u589e\u5168\u91cf}_{\u8c03\u5ea6\u9891\u7387} \u3002"),(0,a.kt)("p",null,"\u6bd4\u5982 ods_log_sensors_bury_cold_inc_1d \u3002"),(0,a.kt)("p",null,"5 \u6570\u636e\u6e90\u662fes/mongo/redis/hbase/mq\uff1a"),(0,a.kt)("p",null,"\u8868\u547d\u540d\u89c4\u5219\uff1aods",(0,a.kt)("em",{parentName:"p"},"es/mongo/redis/hbase/mq"),"{\u81ea\u5b9a\u4e49\u8868\u540d}",(0,a.kt)("em",{parentName:"p"},"{\u589e\u5168\u91cf}"),"{\u8c03\u5ea6\u9891\u7387} \u3002"),(0,a.kt)("p",null,"\u6bd4\u5982 ods_es_pdi_product_full_1d \u3002"),(0,a.kt)("p",null,"6 \u6570\u636e\u6e90\u662f\u5916\u90e8\u7684\uff08\u5982excel\uff09\uff1a"),(0,a.kt)("p",null,"\u8868\u547d\u540d\u89c4\u5219\uff1aods",(0,a.kt)("em",{parentName:"p"},"outside"),"{\u81ea\u5b9a\u4e49\u8868\u540d}",(0,a.kt)("em",{parentName:"p"},"{\u589e\u5168\u91cf}"),"{\u8c03\u5ea6\u9891\u7387} \u3002"),(0,a.kt)("p",null,"\u6bd4\u5982 ods_outside_pdi_product_full_1d \u3002"),(0,a.kt)("p",null,"4 \u6570\u4ed3\u8868\u547d\u540d\u89c4\u8303\uff1a"),(0,a.kt)("p",null,"1 \u5206\u5c42\u57df\u547d\u540d\u89c4\u8303\uff1a"),(0,a.kt)("p",null,"dw",(0,a.kt)("em",{parentName:"p"},"global/b2c/b2b/c2b/c2c . dw|dws"),"{\u4e00\u7ea7\u6570\u636e\u57df}",(0,a.kt)("em",{parentName:"p"},"{\u4e8c\u7ea7\u6570\u636e\u57df}"),"{\u4e1a\u52a1\u8fc7\u7a0b}",(0,a.kt)("em",{parentName:"p"},"XXXXX"),"{\u589e\u5168\u91cf}_{\u8dd1\u6570\u9891\u7387}   "),(0,a.kt)("p",null,"dim",(0,a.kt)("em",{parentName:"p"},"global/b2c/b2b/c2b/c2c . dim"),"({\u4e00\u7ea7\u6570\u636e\u57df}",(0,a.kt)("em",{parentName:"p"},"{\u4e8c\u7ea7\u6570\u636e\u57df})_XXXXX"),"{\u589e\u5168\u91cf}_{\u8dd1\u6570\u9891\u7387}"),(0,a.kt)("p",null,"dm",(0,a.kt)("em",{parentName:"p"},"global/b2c/b2b/c2b/c2c . dm"),"{\u6570\u636e\u4e3b\u9898\u57df}",(0,a.kt)("em",{parentName:"p"},"XXXXX"),"{\u589e\u5168\u91cf}_{\u8dd1\u6570\u9891\u7387}"),(0,a.kt)("p",null,"ads",(0,a.kt)("em",{parentName:"p"},"global/b2c/b2b/c2b/c2c/afs/media/core. ads"),"{\u5e94\u7528\u4e3b\u9898\u57df}",(0,a.kt)("em",{parentName:"p"},"XXXXX"),"{\u589e\u5168\u91cf}_{\u8dd1\u6570\u9891\u7387}"),(0,a.kt)("p",null,"tmp",(0,a.kt)("em",{parentName:"p"},"global/b2c/b2b/c2b/c2c . tmp"),"\u76ee\u6807\u8868\u540d",(0,a.kt)("em",{parentName:"p"},"oa\u8d26\u53f7"),"[01...99]","_yyyyMMdd"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"       \u4e34\u65f6\u8868\u4f7f\u7528\uff1a\u6309\u60c5\u51b5\u7075\u6d3b\u8003\u8651\uff0c\u5efa\u8bae\u4f18\u5148\u4f7f\u7528with as\u8bed\u6cd5\uff08\u5982\u679c\u7ed3\u679c\u4e0d\u5360\u7528\u592a\u5927\u5185\u5b58\u60c5\u51b5\u4e0b\uff09\u4ee3\u66ff\u4e34\u65f6\u8868\n       \u4e34\u65f6\u8868\u6e05\u7406\uff1a\u4efb\u52a1\u4e2d\u9ed8\u8ba4\u6e05\u74062\u5929\u524d\u521b\u5efa\u4e34\u65f6\u8868\n       \u4e34\u65f6\u8868\u6ce8\u610f\u70b9\uff1a\u4efb\u52a1\u4e2d\u4f7f\u7528\u4e34\u65f6\u8868\u5982\u679c\u6ca1\u6709\u6e05\u7406\u673a\u5236\uff0c\u53d1\u73b0\u4e00\u6b21\uff0c\u503c\u73ed\u4e00\u6b21\n")),(0,a.kt)("p",null,"***\u4e1a\u52a1\u4e3b\u9898\u57df \u4e1a\u52a1\u4e3b\u9898\u57df\u5212\u5206\u89c4\u5219(DW)\u2019"),(0,a.kt)("p",null,"***\u6570\u636e\u4e3b\u9898\u57df  \u6570\u636e\u4e3b\u9898\u57df\u5212\u5206\u89c4\u5219(DM)\u2019"),(0,a.kt)("p",null,"***\u5e94\u7528\u4e3b\u9898\u57df  \u5e94\u7528\u4e3b\u9898\u57df\u5212\u5206\u89c4\u5219(ADS)\u2019"),(0,a.kt)("p",null,"2 \u589e\u5168\u91cf\u66f4\u65b0\u65b9\u5f0f\u547d\u540d\u89c4\u8303\uff1a"),(0,a.kt)("p",null,"\u589e\u91cf\uff1ainc\n\u5168\u91cf\uff1afull\n\u2026\u2026\n3 \u5206\u533a\u8868\u8c03\u5ea6\u9891\u7387\u547d\u540d\u89c4\u8303\uff1a"),(0,a.kt)("p",null,"\u79d2\u3001\u5206\u949f\uff1a1s\n\u5c0f\u65f6(hour)\uff1a1h\n\u5929(day)\uff1a1d\n\u5468(week)\uff1a1w\n\u6708(month)\uff1a1m\n\u5b63\u5ea6(quarter)\uff1a1q\n\u5e74(year)\uff1a1y\n......\n\u6ce8\u610f\uff1a\u5355\u5f20\u8868\u7684\u5206\u533a\u6bcf\u65e5\u65b0\u589e\u4e0d\u5b9c\u8d85\u8fc7200\u4e2a\uff0c\u5206\u533a\u592a\u591a\u5bfc\u81f4\u6587\u4ef6\u5206\u5e03\u592a\u7ec6\uff0c\u5bf9\u96c6\u7fa4namenode\u538b\u529b\u8fc7\u5927"),(0,a.kt)("p",null,"4 \u975e\u5206\u533a\u8868\u8868\u540d\u65f6\u95f4\u7c92\u5ea6\u540e\u9762\u52a0\uff1a\u7edf\u4e00\u4e3a\u201d_0p\u201d"),(0,a.kt)("p",null,"\u793a\u4f8b"),(0,a.kt)("p",null,"\u5206\u533a\u8868"),(0,a.kt)("p",null,"\u589e\u91cf&\u5c0f\u65f6 \u66f4\u65b0\txxx_inc_1h\tdt=yyyy-MM-dd-HH"),(0,a.kt)("p",null,"\u5168\u91cf&\u5c0f\u65f6 \u66f4\u65b0\txxx_full_1h\t dt=yyyy-MM-dd"),(0,a.kt)("p",null,"\u589e\u91cf&\u5929 \u66f4\u65b0\txxx_inc_1d\tdt=yyyy-MM-dd"),(0,a.kt)("p",null,"\u5168\u91cf&\u5929 \u66f4\u65b0\txxx_full_1d\tdt=yyyy-MM-dd"),(0,a.kt)("p",null,"\u589e\u91cf&\u5468 \u66f4\u65b0\txxx_inc_1w\tdt=yyyy-MM-dd"),(0,a.kt)("p",null,"\u5168\u91cf&\u5468 \u66f4\u65b0\txxx_full_1w\tdt=yyyy-MM-dd"),(0,a.kt)("p",null,"5 \u5206\u533a\u5b57\u6bb5"),(0,a.kt)("p",null,"ods \u3001dw\u3001dm\u3001dim\u3001ads \u53ef\u89c6\u60c5\u51b5\u5efa\u5206\u533a\u8868\uff0c\u5206\u533a\u5b57\u6bb5\u7edf\u4e00\u4e3adt  \u3002"),(0,a.kt)("p",null,"ods \u53ef\u89c6\u60c5\u51b5\u5efa\u5206\u533a\u8868\uff0c\u975e\u5206\u533a\u8868\u65e0\u9700\u4fdd\u7559dt\u5b57\u6bb5\u3002"),(0,a.kt)("p",null,"dim\u4e0d\u5efa\u8bae\u4f7f\u7528\u5206\u533a\u8868\uff0c\u4fdd\u7559\u4e00\u4efd\u6700\u65b0\u6570\u636e\u5373\u53ef\u3002"),(0,a.kt)("p",null,"dw\u3001dm\u5efa\u8bae\u4f7f\u7528\u5206\u533a\u8868\uff0c\u4e0d\u662f\u5206\u533a\u8868\u7684\uff0c\u8868\u4e2d\u4ecd\u7136\u9700\u8981\u4fdd\u7559dt\u5b57\u6bb5\uff0c\u4f5c\u7528\u548c\u5206\u533a\u5b57\u6bb5dt\u540c\u7406\uff0c\u683c\u5f0f\u4e5f\u540cdt\u3002"),(0,a.kt)("p",null,"ads \u662f\u5426\u4f7f\u7528\u5206\u533a\u8868\u53d6\u51b3\u4e8e\u6bcf\u5929\u7684\u8ba1\u7b97\u7ed3\u679c\u91cf\uff0c \u6bcf\u5929\u8dd1\u6279\u8ba1\u7b97\u7ed3\u679c\u6570\u636e\u91cf\u5343\u6761\u4ee5\u5185\u7684\uff0cads\u4e0d\u4f7f\u7528\u5206\u533a\uff0c\u5176\u4ed6\u53ef\u8003\u8651\u5206\u533a\u3002"),(0,a.kt)("p",null,"ads \u4e0d\u7ba1\u662f\u4e0d\u662f\u5206\u533a \u90fd\u9700\u8981\u52a0 stat_date \uff0c\u4f5c\u7528\u548c\u5206\u533a\u5b57\u6bb5dt\u540c\u7406\uff0c\u683c\u5f0f\u4e5f\u540cdt\u3002\uff08\u4e3b\u8981\u662f\u4e3a\u4e86\u548c\u56de\u5bfcmysql\u89c4\u8303\u4e00\u81f4\uff09"),(0,a.kt)("p",null,"\u5efa\u8868\u8bed\u53e5\u793a\u4f8b\uff1a"),(0,a.kt)("p",null,"partitioned by (dt string comment '\u65f6\u95f4\u5206\u533a\u5b57\u6bb5\uff0c\u5f62\u5f0fyyyy-MM-dd')"),(0,a.kt)("p",null,"partitioned by (dt string comment '\u65f6\u95f4\u5206\u533a\u5b57\u6bb5\uff0c\u5f62\u5f0fyyyy-MM-dd-HH')"),(0,a.kt)("p",null,"partitioned by (dt string comment '\u65f6\u95f4\u5206\u533a\u5b57\u6bb5\uff0c\u5f62\u5f0fyyyy-MM')"),(0,a.kt)("p",null,"partitioned by (dt string comment '\u65f6\u95f4\u5206\u533a\u5b57\u6bb5\uff0c\u5f62\u5f0fyyyy')"),(0,a.kt)("p",null,"6 \u8868\u6ce8\u91ca\u89c4\u8303"),(0,a.kt)("p",null,"1\u3001\u6240\u6709\u8868(\u4e0d\u533a\u5206hive\u8868\u6216ysql\u8868)\u548c\u5b57\u6bb5\u7684\u6ce8\u91ca\u90fd\u5fc5\u987b\u4f7f\u7528comment\u8bed\u53e5\u589e\u52a0\u6ce8\u91ca,\u539f\u5219\u662f\u7b80\u5355\u660e\u4e86\u4e14\u5b8c\u6574\uff0c\u80fd\u53cd\u6620\u771f\u5b9e\u6570\u636e\u7684\u3002"),(0,a.kt)("p",null,"2\u3001\u5b57\u6bb5\u5355\u4f4d\u6ce8\u91ca\u89c4\u8303\uff0c\u5982\uff1a"),(0,a.kt)("p",null,"\u91d1\u989d\u4e3e\u4f8b \uff1a\u9500\u552e\u989d(\u5143)\n\u4ef7\u683c\u4e3e\u4f8b\uff1a\u56de\u6536\u4ef7(\u5206)\n\u91cd\u91cf\u4e3e\u4f8b\uff1a\u5305\u88f9\u91cd\u91cf(kg)\n\u65f6\u95f4\u4e3e\u4f8b\uff1a\u53d1\u8d27\u65f6\u957f(\u6beb\u79d2)"),(0,a.kt)("p",null,"7 \u5b57\u6bb5\u9ed8\u8ba4\u503c\u89c4\u8303"),(0,a.kt)("p",null,"\u6570\u4ed3\u5185\u90e8\u7684\u5b57\u6bb5\u8981\u6c42\u5168\u90e8\u6e05\u6d17\uff0c\u6e05\u6d17\u4ee5\u540e\u9664\u6709\u610f\u4e49\u503c\u4ee5\u5916\uff0c\u5168\u90e8\u4f7f\u7528\u9ed8\u8ba4\u503c\u3002"),(0,a.kt)("p",null,"\u5ea6\u91cf\u6570\u503c\u7c7b\u578b\u9ed8\u8ba4\u503c\uff1a0"),(0,a.kt)("p",null,"\u5176\u4ed6\u6570\u503c\u7c7b\u578b\u9ed8\u8ba4\u503c\uff1a-9"),(0,a.kt)("p",null,"\u5b57\u7b26\u4e32\u7c7b\u578b\u5b57\u6bb5\u9ed8\u8ba4\u503c\uff1a''"))}k.isMDXComponent=!0}}]);