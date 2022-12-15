"use strict";(self.webpackChunkbigdata_blog=self.webpackChunkbigdata_blog||[]).push([[3862],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),f=p(n),u=l,k=f["".concat(c,".").concat(u)]||f[u]||s[u]||o;return n?r.createElement(k,a(a({ref:t},d),{},{components:n})):r.createElement(k,a({ref:t},d))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},705:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7462),l=(n(7294),n(3905));const o={},a=void 0,i={unversionedId:"\u8ba1\u7b97\u6846\u67b6/Flink/FLINK_FAQ",id:"version-1.0/\u8ba1\u7b97\u6846\u67b6/Flink/FLINK_FAQ",title:"FLINK_FAQ",description:"Q1: Flink standalone \u96c6\u7fa4\u62a5\u9519 \u8fdb\u800c\u5bfc\u81f4\u96c6\u7fa4\u975e\u6b63\u5e38\u5b95\u673a",source:"@site/versioned_docs/version-1.0/\u8ba1\u7b97\u6846\u67b6/Flink/FLINK_FAQ.md",sourceDirName:"\u8ba1\u7b97\u6846\u67b6/Flink",slug:"/\u8ba1\u7b97\u6846\u67b6/Flink/FLINK_FAQ",permalink:"/Bigdata_Blog_Website/docs/1.0/\u8ba1\u7b97\u6846\u67b6/Flink/FLINK_FAQ",draft:!1,tags:[],version:"1.0",lastUpdatedBy:"xingjieshitu",lastUpdatedAt:1671078044,formattedLastUpdatedAt:"2022\u5e7412\u670815\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"A Scala-free Flink",permalink:"/Bigdata_Blog_Website/docs/1.0/\u8ba1\u7b97\u6846\u67b6/Flink/A Scala-free Flink"},next:{title:"Flink OLAP \u4e0e Trino TPC-DS \u5bf9\u6bd4",permalink:"/Bigdata_Blog_Website/docs/1.0/\u8ba1\u7b97\u6846\u67b6/Flink/Flink OLAP \u4e0e Trino TPC-DS \u5bf9\u6bd4"}},c={},p=[{value:"Q1: Flink standalone \u96c6\u7fa4\u62a5\u9519 \u8fdb\u800c\u5bfc\u81f4\u96c6\u7fa4\u975e\u6b63\u5e38\u5b95\u673a",id:"q1-flink-standalone-\u96c6\u7fa4\u62a5\u9519-\u8fdb\u800c\u5bfc\u81f4\u96c6\u7fa4\u975e\u6b63\u5e38\u5b95\u673a",level:2},{value:"Q2: Flink \u5b98\u65b9\u4ec0\u4e48\u65f6\u5019\u652f\u6301 oracle sql \u8fde\u63a5\u5668\uff1f",id:"q2-flink-\u5b98\u65b9\u4ec0\u4e48\u65f6\u5019\u652f\u6301-oracle-sql-\u8fde\u63a5\u5668",level:2},{value:"Q3 Flink Web ui \u4e71\u7801\u600e\u4e48\u529e\uff1f",id:"q3-flink-web-ui-\u4e71\u7801\u600e\u4e48\u529e",level:2},{value:"Q4 Flink Per-Job Mode (deprecated)?",id:"q4-flink-per-job-mode-deprecated",level:2}],d={toc:p};function s(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"q1-flink-standalone-\u96c6\u7fa4\u62a5\u9519-\u8fdb\u800c\u5bfc\u81f4\u96c6\u7fa4\u975e\u6b63\u5e38\u5b95\u673a"},"Q1: Flink standalone \u96c6\u7fa4\u62a5\u9519 \u8fdb\u800c\u5bfc\u81f4\u96c6\u7fa4\u975e\u6b63\u5e38\u5b95\u673a"),(0,l.kt)("p",null,"2022-01-15 10:06:53,481 ERROR org.apache.flink.runtime.blob.BlobServerConnection           [] - GET operation failed for BLOB 150aa5a2e247e759f21ff93c424edd3e/p-e8b09031cd0\ne01ba83667bef8a0b956dcfe18006-8d149618809ae4df5d911e989054527d from /10.176.xx.xx.\njava.nio.file.NoSuchFileException: /tmp/blobStore-39487a05-032e-4605-81f8-d1e9c7d2e1ff/incoming/temp-00000134"),(0,l.kt)("p",null,"\u539f\u56e0\uff1a \u7fa4\u53cb\uff1a\u4e4b\u524d\u9047\u5230\u8fc7 \u6211\u7684\u662f\u88ab\u8fd0\u7ef4\u6e05\u7406\u5de5\u5177\u7ed9\u6e05\u7406\u4e86\uff1b \u4f60\u770b\u770b \u53ef\u6709\u8fd9\u4e2a\u6587\u4ef6\u4e86\uff1b\u4e00\u4e9b\u914d\u7f6e \u6709\u4e09\u56db\u4e2a \u9ed8\u8ba4\u90fd\u662f /tmp \u4e0b\uff0c\u90fd\u662f\n\u53ef\u4ee5\u81ea\u5b9a\u4e49\u8def\u5f84\u7684\u3002"),(0,l.kt)("p",null,"\u4e34\u65f6\u76ee\u5f55\u88ab\u6e05\u7a7a\uff0c\u5bfc\u81f4\u6587\u4ef6\u65e0\u6cd5\u627e\u5230\u3002"),(0,l.kt)("p",null,"\u6211\u7684\u89e3\u51b3\u65b9\u6848\uff1a\u5c06 io \u76ee\u5f55\u4ece\u4e34\u65f6\u76ee\u5f55\u6539\u4e3a\u5176\u4ed6\u76ee\u5f55\u5373\u53ef\u3002"),(0,l.kt)("h2",{id:"q2-flink-\u5b98\u65b9\u4ec0\u4e48\u65f6\u5019\u652f\u6301-oracle-sql-\u8fde\u63a5\u5668"},"Q2: Flink \u5b98\u65b9\u4ec0\u4e48\u65f6\u5019\u652f\u6301 oracle sql \u8fde\u63a5\u5668\uff1f"),(0,l.kt)("p",null,"\u6839\u636eFlink 1.15 \u7684\u6700\u65b0\u5feb\u7167\u6587\u6863\uff0cFlink JDBC \u5c06\u5728 1.15 \u652f\u6301 Flink "),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-master/docs/connectors/table/jdbc/"},"https://nightlies.apache.org/flink/flink-docs-master/docs/connectors/table/jdbc/")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/34996528/149879850-b7c1164f-5505-4905-a162-b6105f945866.png",alt:"image"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"flink 1.15 \u5df2\u53d1\u5e03 oracle \u65b9\u8a00\u5df2\u652f\u6301")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/connectors/table/jdbc/"},"flink 1.15 JDBC SQL Connector")),(0,l.kt)("h2",{id:"q3-flink-web-ui-\u4e71\u7801\u600e\u4e48\u529e"},"Q3 Flink Web ui \u4e71\u7801\u600e\u4e48\u529e\uff1f"),(0,l.kt)("p",null,"\u5728 FLink conf \u76ee\u5f55\u4e0b\u7684 flink.conf.ymal \u6587\u4ef6\u91cc\u6dfb\u52a0"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'env.java.opts: "-Dfile.encoding=utf-8"\n')),(0,l.kt)("h2",{id:"q4-flink-per-job-mode-deprecated"},"Q4 Flink Per-Job Mode (deprecated)?"),(0,l.kt)("p",null,"\u4ece Flink 1.15 \u5f00\u59cb per-job \u88ab\u6807\u6ce8\u4e3a deprecated\uff0c\u5b98\u65b9\u5728\u4e00\u6708\u4efd\u7684\u4e00\u6b21\u6295\u7968\u4e2d\u51b3\u5b9a\u5c06 per-job \u6807\u6ce8\u4e3a deprecated\uff0c\u9884\u8ba1\u5728 flink 1.17 \u8fdb\u884c\u5177\u4f53\u5b9e\u65bd"),(0,l.kt)("p",null,"\u539f\u56e0: Per-job mode is only supported by YARN and has been deprecated in Flink 1.15."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/deployment/resource-providers/yarn/#per-job-mode-deprecated"},"Per-Job Mode (deprecated)")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://lists.apache.org/thread/v6oz92dfp95qcox45l0f8393089oyjv4"},"\u6295\u7968\u94fe\u63a5")))}s.isMDXComponent=!0}}]);