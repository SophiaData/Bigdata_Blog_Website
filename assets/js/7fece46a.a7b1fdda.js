"use strict";(self.webpackChunkbigdata_blog=self.webpackChunkbigdata_blog||[]).push([[5896],{3905:(e,o,n)=>{n.d(o,{Zo:()=>g,kt:()=>s});var t=n(7294);function r(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function c(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?c(Object(n),!0).forEach((function(o){r(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function a(e,o){if(null==e)return{};var n,t,r=function(e,o){if(null==e)return{};var n,t,r={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],o.indexOf(n)>=0||(r[n]=e[n]);return r}(e,o);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=t.createContext({}),d=function(e){var o=t.useContext(i),n=o;return e&&(n="function"==typeof e?e(o):l(l({},o),e)),n},g=function(e){var o=d(e.components);return t.createElement(i.Provider,{value:o},e.children)},p={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},u=t.forwardRef((function(e,o){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,g=a(e,["components","mdxType","originalType","parentName"]),u=d(n),s=r,m=u["".concat(i,".").concat(s)]||u[s]||p[s]||c;return n?t.createElement(m,l(l({ref:o},g),{},{components:n})):t.createElement(m,l({ref:o},g))}));function s(e,o){var n=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=u;var a={};for(var i in o)hasOwnProperty.call(o,i)&&(a[i]=o[i]);a.originalType=e,a.mdxType="string"==typeof e?e:r,l[1]=a;for(var d=2;d<c;d++)l[d]=n[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1708:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var t=n(7462),r=(n(7294),n(3905));const c={sidebar_position:1},l="MongoDB_CDC_FAQ",a={unversionedId:"\u5927\u6570\u636e\u6846\u67b6_FAQ/MongoDB_CDC_FAQ",id:"version-1.1/\u5927\u6570\u636e\u6846\u67b6_FAQ/MongoDB_CDC_FAQ",title:"MongoDB_CDC_FAQ",description:"MongoDB CDC FAQ \u53c2\u8003 \u672c\u6587\u4f5c\u4e86\u5206\u7c7b\u5904\u7406",source:"@site/versioned_docs/version-1.1/\u5927\u6570\u636e\u6846\u67b6_FAQ/MongoDB_CDC_FAQ.md",sourceDirName:"\u5927\u6570\u636e\u6846\u67b6_FAQ",slug:"/\u5927\u6570\u636e\u6846\u67b6_FAQ/MongoDB_CDC_FAQ",permalink:"/Bigdata_Blog_Website/docs/\u5927\u6570\u636e\u6846\u67b6_FAQ/MongoDB_CDC_FAQ",draft:!1,tags:[],version:"1.1",lastUpdatedBy:"skylines",lastUpdatedAt:1671077419,formattedLastUpdatedAt:"2022\u5e7412\u670815\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Hive_Operation",permalink:"/Bigdata_Blog_Website/docs/\u5927\u6570\u636e\u6846\u67b6_FAQ/Hive_operation"},next:{title:"MySql_FAQ",permalink:"/Bigdata_Blog_Website/docs/\u5927\u6570\u636e\u6846\u67b6_FAQ/MySQL_FAQ"}},i={},d=[{value:"MongoDB CDC FAQ \u53c2\u8003 \u672c\u6587\u4f5c\u4e86\u5206\u7c7b\u5904\u7406",id:"mongodb-cdc-faq-\u53c2\u8003-\u672c\u6587\u4f5c\u4e86\u5206\u7c7b\u5904\u7406",level:2},{value:"Q1: MongoDB CDC \u652f\u6301 \u5168\u91cf+\u589e\u91cf\u8bfb \u548c \u53ea\u8bfb\u589e\u91cf\u5417\uff1f",id:"q1-mongodb-cdc-\u652f\u6301-\u5168\u91cf\u589e\u91cf\u8bfb-\u548c-\u53ea\u8bfb\u589e\u91cf\u5417",level:2},{value:"Q2: MongoDB CDC \u652f\u6301\u4ece checkpoint \u6062\u590d\u5417? \u539f\u7406\u662f\u600e\u4e48\u6837\u7684\u5462\uff1f",id:"q2-mongodb-cdc-\u652f\u6301\u4ece-checkpoint-\u6062\u590d\u5417-\u539f\u7406\u662f\u600e\u4e48\u6837\u7684\u5462",level:2},{value:"Q3: MongoDB CDC \u652f\u6301\u8f93\u51fa -U\uff08update_before\uff0c\u66f4\u65b0\u524d\u955c\u50cf\u503c\uff09\u6d88\u606f\u5417\uff1f",id:"q3-mongodb-cdc-\u652f\u6301\u8f93\u51fa--uupdate_before\u66f4\u65b0\u524d\u955c\u50cf\u503c\u6d88\u606f\u5417",level:2},{value:"Q4: MongoDB CDC \u652f\u6301\u8ba2\u9605\u591a\u4e2a collection \u5417\uff1f",id:"q4-mongodb-cdc-\u652f\u6301\u8ba2\u9605\u591a\u4e2a-collection-\u5417",level:2},{value:"Q5: MongoDB CDC \u652f\u6301\u8bbe\u7f6e\u591a\u5e76\u53d1\u5ea6\u8bfb\u53d6\u5417\uff1f",id:"q5-mongodb-cdc-\u652f\u6301\u8bbe\u7f6e\u591a\u5e76\u53d1\u5ea6\u8bfb\u53d6\u5417",level:2},{value:"Q6: MongoDB CDC \u652f\u6301 MongoDB \u7684\u7248\u672c\u662f\u54ea\u4e9b\uff1f",id:"q6-mongodb-cdc-\u652f\u6301-mongodb-\u7684\u7248\u672c\u662f\u54ea\u4e9b",level:2},{value:"Q7: MongoDB CDC \u652f\u6301 MongoDB \u7684\u8fd0\u884c\u6a21\u5f0f\u662f\u4ec0\u4e48\uff1f",id:"q7-mongodb-cdc-\u652f\u6301-mongodb-\u7684\u8fd0\u884c\u6a21\u5f0f\u662f\u4ec0\u4e48",level:2},{value:"Q8: MongoDB CDC \u62a5\u9519\u7528\u6237\u540d\u5bc6\u7801\u9519\u8bef, \u4f46\u5176\u4ed6\u7ec4\u4ef6\u4f7f\u7528\u8be5\u7528\u6237\u540d\u5bc6\u7801\u90fd\u80fd\u6b63\u5e38\u8fde\u63a5\uff0c\u8fd9\u662f\u4ec0\u4e48\u539f\u56e0\uff1f",id:"q8-mongodb-cdc-\u62a5\u9519\u7528\u6237\u540d\u5bc6\u7801\u9519\u8bef-\u4f46\u5176\u4ed6\u7ec4\u4ef6\u4f7f\u7528\u8be5\u7528\u6237\u540d\u5bc6\u7801\u90fd\u80fd\u6b63\u5e38\u8fde\u63a5\u8fd9\u662f\u4ec0\u4e48\u539f\u56e0",level:2},{value:"Q9: MongoDB CDC \u662f\u5426\u652f\u6301 debezium \u76f8\u5173\u7684\u53c2\u6570\uff1f",id:"q9-mongodb-cdc-\u662f\u5426\u652f\u6301-debezium-\u76f8\u5173\u7684\u53c2\u6570",level:2},{value:"Q10\uff1aMongoDB CDC \u5168\u91cf\u8bfb\u53d6\u9636\u6bb5\uff0c\u4f5c\u4e1a\u5931\u8d25\u540e\uff0c\u53ef\u4ee5\u4ece checkpoint \u7ee7\u7eed\u8bfb\u53d6\u5417\uff1f",id:"q10mongodb-cdc-\u5168\u91cf\u8bfb\u53d6\u9636\u6bb5\u4f5c\u4e1a\u5931\u8d25\u540e\u53ef\u4ee5\u4ece-checkpoint-\u7ee7\u7eed\u8bfb\u53d6\u5417",level:2}],g={toc:d};function p(e){let{components:o,...n}=e;return(0,r.kt)("wrapper",(0,t.Z)({},g,n,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mongodb_cdc_faq"},"MongoDB_CDC_FAQ"),(0,r.kt)("h2",{id:"mongodb-cdc-faq-\u53c2\u8003-\u672c\u6587\u4f5c\u4e86\u5206\u7c7b\u5904\u7406"},"MongoDB CDC FAQ \u53c2\u8003 \u672c\u6587\u4f5c\u4e86\u5206\u7c7b\u5904\u7406"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/ververica/flink-cdc-connectors/wiki/FAQ(ZH)"},"https://github.com/ververica/flink-cdc-connectors/wiki/FAQ(ZH)")),(0,r.kt)("h2",{id:"q1-mongodb-cdc-\u652f\u6301-\u5168\u91cf\u589e\u91cf\u8bfb-\u548c-\u53ea\u8bfb\u589e\u91cf\u5417"},"Q1: MongoDB CDC \u652f\u6301 \u5168\u91cf+\u589e\u91cf\u8bfb \u548c \u53ea\u8bfb\u589e\u91cf\u5417\uff1f"),(0,r.kt)("p",null,"\u652f\u6301\uff0c\u9ed8\u8ba4\u4e3a \u5168\u91cf+\u589e\u91cf \u8bfb\u53d6\uff1b\u4f7f\u7528copy.existing=false\u53c2\u6570\u8bbe\u7f6e\u4e3a\u53ea\u8bfb\u589e\u91cf\u3002"),(0,r.kt)("h2",{id:"q2-mongodb-cdc-\u652f\u6301\u4ece-checkpoint-\u6062\u590d\u5417-\u539f\u7406\u662f\u600e\u4e48\u6837\u7684\u5462"},"Q2: MongoDB CDC \u652f\u6301\u4ece checkpoint \u6062\u590d\u5417? \u539f\u7406\u662f\u600e\u4e48\u6837\u7684\u5462\uff1f"),(0,r.kt)("p",null,"\u652f\u6301\uff0ccheckpoint \u4f1a\u8bb0\u5f55 ChangeStream \u7684 resumeToken\uff0c\u6062\u590d\u7684\u65f6\u5019\u53ef\u4ee5\u901a\u8fc7resumeToken\u91cd\u65b0\u6062\u590dChangeStream\u3002\u5176\u4e2d resumeToken \u5bf9\u5e94 oplog.rs (MongoDB \u53d8\u66f4\u65e5\u5fd7collection) \u7684\u4f4d\u7f6e\uff0coplog.rs \u662f\u4e00\u4e2a\u56fa\u5b9a\u5bb9\u91cf\u7684 collection\u3002\u5f53 resumeToken \u5bf9\u5e94\u7684\u8bb0\u5f55\u5728 oplog.rs \u4e2d\u4e0d\u5b58\u5728\u7684\u65f6\u5019\uff0c\u53ef\u80fd\u4f1a\u51fa\u73b0 Invalid resumeToken \u7684\u5f02\u5e38\u3002\u8fd9\u79cd\u60c5\u51b5\uff0c\u5728\u4f7f\u7528\u65f6\u53ef\u4ee5\u8bbe\u7f6e\u5408\u9002oplog.rs\u7684\u96c6\u5408\u5927\u5c0f\uff0c\u907f\u514doplog.rs\u4fdd\u7559\u65f6\u95f4\u8fc7\u77ed\uff0c\u53ef\u4ee5\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/tutorial/change-oplog-size/"},"https://docs.mongodb.com/manual/tutorial/change-oplog-size/")," \u53e6\u5916\uff0cresumeToken \u53ef\u4ee5\u901a\u8fc7\u65b0\u5230\u7684\u53d8\u66f4\u8bb0\u5f55\u548c heartbeat \u8bb0\u5f55\u6765\u5237\u65b0\u3002"),(0,r.kt)("h2",{id:"q3-mongodb-cdc-\u652f\u6301\u8f93\u51fa--uupdate_before\u66f4\u65b0\u524d\u955c\u50cf\u503c\u6d88\u606f\u5417"},"Q3: MongoDB CDC \u652f\u6301\u8f93\u51fa -U\uff08update_before\uff0c\u66f4\u65b0\u524d\u955c\u50cf\u503c\uff09\u6d88\u606f\u5417\uff1f"),(0,r.kt)("p",null,"MongoDB \u539f\u59cb\u7684 oplog.rs \u53ea\u6709 INSERT, UPDATE, REPLACE, DELETE \u8fd9\u51e0\u79cd\u64cd\u4f5c\u7c7b\u578b\uff0c\u6ca1\u6709\u4fdd\u7559\u66f4\u65b0\u524d\u7684\u4fe1\u606f\uff0c\u4e0d\u80fd\u8f93\u51fa-U \u6d88\u606f\uff0c\u5728 Flink \u4e2d\u53ea\u80fd\u5b9e\u73b0 UPSERT \u8bed\u4e49\u3002\u5728\u4f7f\u7528MongoDBTableSource \u65f6\uff0cFlink planner \u4f1a\u81ea\u52a8\u8fdb\u884c ChangelogNormalize \u4f18\u5316\uff0c\u8865\u9f50\u7f3a\u5931\u7684 -U \u6d88\u606f\uff0c\u8f93\u51fa\u5b8c\u6574\u7684 +I, -U\uff0c +U\uff0c -D \u56db\u79cd\u6d88\u606f\uff0c \u4ee3\u4ef7\u662f ChangelogNormalize \u4f18\u5316\u7684\u4ee3\u4ef7\u662f\u8be5\u8282\u70b9\u4f1a\u4fdd\u5b58\u4e4b\u524d\u6240\u6709 key \u7684\u72b6\u6001\u3002\u6240\u4ee5\uff0c\u5982\u679c\u662f DataStream \u4f5c\u4e1a\u76f4\u63a5\u4f7f\u7528 MongoDBSource\uff0c\u5982\u679c\u6ca1\u6709 Flink planner \u7684\u4f18\u5316\uff0c\u5c06\u4e0d\u4f1a\u81ea\u52a8\u8fdb\u884c ChangelogNormalize\uff0c\u6240\u4ee5\u4e0d\u80fd\u76f4\u63a5\u83b7\u53d6 \u2014U \u6d88\u606f\u3002\u60f3\u8981\u83b7\u53d6\u66f4\u65b0\u524d\u955c\u50cf\u503c\uff0c\u9700\u8981\u81ea\u5df1\u7ba1\u7406\u72b6\u6001\uff0c\u5982\u679c\u4e0d\u5e0c\u671b\u81ea\u5df1\u7ba1\u7406\u72b6\u6001\uff0c\u53ef\u4ee5\u5c06 MongoDBTableSource \u8f6c\u6362\u4e3a ChangelogStream \u6216\u8005 RetractStream\uff0c\u501f\u52a9 Flink planner \u7684\u4f18\u5316\u80fd\u529b\u8865\u9f50\u66f4\u65b0\u524d\u955c\u50cf\u503c\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'    tEnv.executeSql("CREATE TABLE orders ( ... ) WITH ( \'connector\'=\'mongodb-cdc\',... )");\n\n    Table table = tEnv.from("orders")\n            .select($("*"));\n\n    tEnv.toChangelogStream(table)\n            .print()\n            .setParallelism(1);\n\n    env.execute();\n')),(0,r.kt)("h2",{id:"q4-mongodb-cdc-\u652f\u6301\u8ba2\u9605\u591a\u4e2a-collection-\u5417"},"Q4: MongoDB CDC \u652f\u6301\u8ba2\u9605\u591a\u4e2a collection \u5417\uff1f"),(0,r.kt)("p",null,"\u4ec5\u652f\u6301\u8ba2\u9605\u6574\u5e93\u7684 collection\uff0c\u7b5b\u9009\u90e8\u5206 collection \u529f\u80fd\u8fd8\u4e0d\u652f\u6301\uff0c\u4f8b\u5982\u914d\u7f6e database \u4e3a 'mgdb'\uff0ccollection \u4e3a\u7a7a\u5b57\u7b26\u4e32\uff0c\u5219\u4f1a\u8ba2\u9605 'mgdb' \u5e93\u4e0b\u6240\u6709 collection\u3002"),(0,r.kt)("h2",{id:"q5-mongodb-cdc-\u652f\u6301\u8bbe\u7f6e\u591a\u5e76\u53d1\u5ea6\u8bfb\u53d6\u5417"},"Q5: MongoDB CDC \u652f\u6301\u8bbe\u7f6e\u591a\u5e76\u53d1\u5ea6\u8bfb\u53d6\u5417\uff1f"),(0,r.kt)("p",null,"\u76ee\u524d\u8fd8\u4e0d\u652f\u6301\u3002"),(0,r.kt)("h2",{id:"q6-mongodb-cdc-\u652f\u6301-mongodb-\u7684\u7248\u672c\u662f\u54ea\u4e9b"},"Q6: MongoDB CDC \u652f\u6301 MongoDB \u7684\u7248\u672c\u662f\u54ea\u4e9b\uff1f"),(0,r.kt)("p",null,"MongoDB CDC \u57fa\u4e8e ChangeStream \u7279\u6027\u5b9e\u73b0\uff0cChangeStream \u662f MongoDB 3.6 \u63a8\u51fa\u7684\u65b0\u7279\u6027\u3002MongoDB CDC \u7406\u8bba\u4e0a\u652f\u6301 3.6 \u4ee5\u4e0a\u7248\u672c\uff0c\u5efa\u8bae\u8fd0\u884c\u7248\u672c >= 4.0, \u5728\u4f4e\u4e8e3.6\u7248\u672c\u6267\u884c\u65f6\uff0c\u4f1a\u51fa\u73b0\u9519\u8bef: Unrecognized pipeline stage name: '$changeStream' \u3002"),(0,r.kt)("h2",{id:"q7-mongodb-cdc-\u652f\u6301-mongodb-\u7684\u8fd0\u884c\u6a21\u5f0f\u662f\u4ec0\u4e48"},"Q7: MongoDB CDC \u652f\u6301 MongoDB \u7684\u8fd0\u884c\u6a21\u5f0f\u662f\u4ec0\u4e48\uff1f"),(0,r.kt)("p",null,"ChangeStream \u9700\u8981 MongoDB \u4ee5\u526f\u672c\u96c6\u6216\u8005\u5206\u7247\u6a21\u5f0f\u8fd0\u884c\uff0c\u672c\u5730\u6d4b\u8bd5\u53ef\u4ee5\u4f7f\u7528\u5355\u673a\u7248\u526f\u672c\u96c6 rs.initiate() \u3002\u5728 standalone \u6a21\u5f0f\u4e0b\u4f1a\u51fa\u73b0\u9519\u8bef\uff1aThe $changestage is only supported on replica sets."),(0,r.kt)("h2",{id:"q8-mongodb-cdc-\u62a5\u9519\u7528\u6237\u540d\u5bc6\u7801\u9519\u8bef-\u4f46\u5176\u4ed6\u7ec4\u4ef6\u4f7f\u7528\u8be5\u7528\u6237\u540d\u5bc6\u7801\u90fd\u80fd\u6b63\u5e38\u8fde\u63a5\u8fd9\u662f\u4ec0\u4e48\u539f\u56e0"},"Q8: MongoDB CDC \u62a5\u9519\u7528\u6237\u540d\u5bc6\u7801\u9519\u8bef, \u4f46\u5176\u4ed6\u7ec4\u4ef6\u4f7f\u7528\u8be5\u7528\u6237\u540d\u5bc6\u7801\u90fd\u80fd\u6b63\u5e38\u8fde\u63a5\uff0c\u8fd9\u662f\u4ec0\u4e48\u539f\u56e0\uff1f"),(0,r.kt)("p",null,"\u5982\u679c\u7528\u6237\u662f\u521b\u5efa\u5728\u9700\u8981\u8fde\u63a5\u7684db \u4e0b\uff0c\u9700\u8981\u5728with\u53c2\u6570\u91cc\u52a0\u4e0b 'connection.options' = 'authSource=\u7528\u6237\u6240\u5728\u7684db'\u3002"),(0,r.kt)("h2",{id:"q9-mongodb-cdc-\u662f\u5426\u652f\u6301-debezium-\u76f8\u5173\u7684\u53c2\u6570"},"Q9: MongoDB CDC \u662f\u5426\u652f\u6301 debezium \u76f8\u5173\u7684\u53c2\u6570\uff1f"),(0,r.kt)("p",null,"\u4e0d\u652f\u6301\u7684\uff0c\u56e0\u4e3a MongoDB CDC \u8fde\u63a5\u5668\u662f\u5728 Flink CDC \u9879\u76ee\u4e2d\u72ec\u7acb\u5f00\u53d1\uff0c\u5e76\u4e0d\u4f9d\u8d56Debezium\u9879\u76ee\uff0c\u6240\u4ee5\u4e0d\u652f\u6301\u3002"),(0,r.kt)("h2",{id:"q10mongodb-cdc-\u5168\u91cf\u8bfb\u53d6\u9636\u6bb5\u4f5c\u4e1a\u5931\u8d25\u540e\u53ef\u4ee5\u4ece-checkpoint-\u7ee7\u7eed\u8bfb\u53d6\u5417"},"Q10\uff1aMongoDB CDC \u5168\u91cf\u8bfb\u53d6\u9636\u6bb5\uff0c\u4f5c\u4e1a\u5931\u8d25\u540e\uff0c\u53ef\u4ee5\u4ece checkpoint \u7ee7\u7eed\u8bfb\u53d6\u5417\uff1f"),(0,r.kt)("p",null,"MongoDB CDC \u5168\u91cf\u8bfb\u53d6\u9636\u6bb5\u662f\u4e0d\u505a checkpoint \u7684\uff0c\u76f4\u5230\u5168\u91cf\u9636\u6bb5\u8bfb\u53d6\u5b8c\u540e\u624d\u5f00\u59cb\u4f5c checkpoint\uff0c\u5982\u679c\u5728\u5168\u91cf\u8bfb\u53d6\u9636\u6bb5\u5931\u8d25\uff0cMongoDB CDC \u4f1a\u91cd\u65b0\u8bfb\u53d6\u5b58\u91cf\u6570\u636e\u3002"))}p.isMDXComponent=!0}}]);