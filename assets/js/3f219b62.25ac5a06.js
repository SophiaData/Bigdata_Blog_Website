"use strict";(self.webpackChunkbigdata_blog=self.webpackChunkbigdata_blog||[]).push([[4812],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(r),g=o,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||l;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,i=new Array(l);i[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6128:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const l={},i=void 0,a={unversionedId:"\u5927\u6570\u636e\u6846\u67b6_FAQ/Postgres_CDC_FAQ",id:"version-1.1/\u5927\u6570\u636e\u6846\u67b6_FAQ/Postgres_CDC_FAQ",title:"Postgres_CDC_FAQ",description:"Q1: \u53d1\u73b0 PG \u670d\u52a1\u5668\u78c1\u76d8\u4f7f\u7528\u7387\u9ad8\uff0cWAL \u4e0d\u91ca\u653e \u662f\u4ec0\u4e48\u539f\u56e0\uff1f",source:"@site/versioned_docs/version-1.1/\u5927\u6570\u636e\u6846\u67b6_FAQ/Postgres_CDC_FAQ.md",sourceDirName:"\u5927\u6570\u636e\u6846\u67b6_FAQ",slug:"/\u5927\u6570\u636e\u6846\u67b6_FAQ/Postgres_CDC_FAQ",permalink:"/Bigdata_Blog_Website/docs/\u5927\u6570\u636e\u6846\u67b6_FAQ/Postgres_CDC_FAQ",draft:!1,tags:[],version:"1.1",lastUpdatedBy:"skylines",lastUpdatedAt:1671077419,formattedLastUpdatedAt:"2022\u5e7412\u670815\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MySQL_CDC_FAQ",permalink:"/Bigdata_Blog_Website/docs/\u5927\u6570\u636e\u6846\u67b6_FAQ/MySQL_CDC_FAQ"},next:{title:"Open_Source_Book",permalink:"/Bigdata_Blog_Website/docs/\u7535\u5b50\u4e66/Open_Source_Book"}},s={},c=[{value:"Q1: \u53d1\u73b0 PG \u670d\u52a1\u5668\u78c1\u76d8\u4f7f\u7528\u7387\u9ad8\uff0cWAL \u4e0d\u91ca\u653e \u662f\u4ec0\u4e48\u539f\u56e0\uff1f",id:"q1-\u53d1\u73b0-pg-\u670d\u52a1\u5668\u78c1\u76d8\u4f7f\u7528\u7387\u9ad8wal-\u4e0d\u91ca\u653e-\u662f\u4ec0\u4e48\u539f\u56e0",level:2},{value:"Q2: Flink Postgres CDC \u540c\u6b65 Postgres \u4e2d\u5c06 \u8d85\u8fc7\u6700\u5927\u7cbe\u5ea6\uff0838\uff0c18\uff09\u7684 DECIMAL \u7c7b\u578b\u8fd4\u56de NULL",id:"q2-flink-postgres-cdc-\u540c\u6b65-postgres-\u4e2d\u5c06-\u8d85\u8fc7\u6700\u5927\u7cbe\u5ea63818\u7684-decimal-\u7c7b\u578b\u8fd4\u56de-null",level:2},{value:"Q3: Flink Postgres CDC \u63d0\u793a\u672a\u4f20\u8f93 TOAST \u6570\u636e\uff0c\u662f\u4ec0\u4e48\u539f\u56e0\uff1f",id:"q3-flink-postgres-cdc-\u63d0\u793a\u672a\u4f20\u8f93-toast-\u6570\u636e\u662f\u4ec0\u4e48\u539f\u56e0",level:2},{value:"Q4: \u4f5c\u4e1a\u62a5\u9519 Replication slot &quot;xxxx&quot; is active\uff0c \u600e\u4e48\u529e\uff1f",id:"q4-\u4f5c\u4e1a\u62a5\u9519-replication-slot-xxxx-is-active-\u600e\u4e48\u529e",level:2},{value:"Q5: \u4f5c\u4e1a\u6709\u810f\u6570\u636e\uff0c\u6bd4\u5982\u975e\u6cd5\u7684\u65e5\u671f\uff0c\u6709\u53c2\u6570\u53ef\u4ee5\u914d\u7f6e\u53ef\u4ee5\u8fc7\u6ee4\u5417\uff1f",id:"q5-\u4f5c\u4e1a\u6709\u810f\u6570\u636e\u6bd4\u5982\u975e\u6cd5\u7684\u65e5\u671f\u6709\u53c2\u6570\u53ef\u4ee5\u914d\u7f6e\u53ef\u4ee5\u8fc7\u6ee4\u5417",level:2},{value:"Q6: \u5728DataStream API\u4e2d\u6784\u5efaPostgres CDC\u6e90\u65f6\u5982\u4f55\u914d\u7f6etableList\u9009\u9879\uff1f",id:"q6-\u5728datastream-api\u4e2d\u6784\u5efapostgres-cdc\u6e90\u65f6\u5982\u4f55\u914d\u7f6etablelist\u9009\u9879",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"q1-\u53d1\u73b0-pg-\u670d\u52a1\u5668\u78c1\u76d8\u4f7f\u7528\u7387\u9ad8wal-\u4e0d\u91ca\u653e-\u662f\u4ec0\u4e48\u539f\u56e0"},"Q1: \u53d1\u73b0 PG \u670d\u52a1\u5668\u78c1\u76d8\u4f7f\u7528\u7387\u9ad8\uff0cWAL \u4e0d\u91ca\u653e \u662f\u4ec0\u4e48\u539f\u56e0\uff1f"),(0,o.kt)("p",null,"Flink Postgres CDC \u53ea\u4f1a\u5728 checkpoint \u5b8c\u6210\u7684\u65f6\u5019\u66f4\u65b0 Postgres slot \u4e2d\u7684 LSN\u3002\u56e0\u6b64\u5982\u679c\u53d1\u73b0\u78c1\u76d8\u4f7f\u7528\u7387\u9ad8\u7684\u60c5\u51b5\u4e0b\uff0c\u8bf7\u5148\u786e\u8ba4 checkpoint \u662f\u5426\u5f00\u542f\u3002"),(0,o.kt)("h2",{id:"q2-flink-postgres-cdc-\u540c\u6b65-postgres-\u4e2d\u5c06-\u8d85\u8fc7\u6700\u5927\u7cbe\u5ea63818\u7684-decimal-\u7c7b\u578b\u8fd4\u56de-null"},"Q2: Flink Postgres CDC \u540c\u6b65 Postgres \u4e2d\u5c06 \u8d85\u8fc7\u6700\u5927\u7cbe\u5ea6\uff0838\uff0c18\uff09\u7684 DECIMAL \u7c7b\u578b\u8fd4\u56de NULL"),(0,o.kt)("p",null,"Flink \u4e2d\u5982\u679c\u6536\u5230\u6570\u636e\u7684 precision \u5927\u4e8e\u5728 Flink \u4e2d\u58f0\u660e\u7684\u7c7b\u578b\u7684 precision \u65f6\uff0c\u4f1a\u5c06\u6570\u636e\u5904\u7406\u6210 NULL\u3002\u6b64\u65f6\u53ef\u4ee5\u914d\u7f6e\u76f8\u5e94'debezium.decimal.handling.mode' = 'string' \u5c06\u8bfb\u53d6\u7684\u6570\u636e\u7528 STRING \u7c7b\u578b \u6765\u5904\u7406\u3002"),(0,o.kt)("h2",{id:"q3-flink-postgres-cdc-\u63d0\u793a\u672a\u4f20\u8f93-toast-\u6570\u636e\u662f\u4ec0\u4e48\u539f\u56e0"},"Q3: Flink Postgres CDC \u63d0\u793a\u672a\u4f20\u8f93 TOAST \u6570\u636e\uff0c\u662f\u4ec0\u4e48\u539f\u56e0\uff1f"),(0,o.kt)("p",null,"\u8bf7\u5148\u786e\u4fdd REPLICA IDENTITY \u662f FULL\u3002 TOAST \u7684\u6570\u636e\u6bd4\u8f83\u5927\uff0c\u4e3a\u4e86\u8282\u7701 wal \u7684\u5927\u5c0f\uff0c\u5982\u679c TOAST \u6570\u636e\u6ca1\u6709\u53d8\u66f4\uff0c\u90a3\u4e48 wal2json plugin \u5c31\u4e0d\u4f1a\u5728\u66f4\u65b0\u540e\u7684\u6570\u636e\u4e2d\u5e26\u4e0a toast \u6570\u636e\u3002\u4e3a\u4e86\u907f\u514d\u8fd9\u4e2a\u95ee\u9898\uff0c\u53ef\u4ee5\u901a\u8fc7 'debezium.schema.refresh.mode'='columns_diff_exclude_unchanged_toast'\u6765\u89e3\u51b3\u3002"),(0,o.kt)("h2",{id:"q4-\u4f5c\u4e1a\u62a5\u9519-replication-slot-xxxx-is-active-\u600e\u4e48\u529e"},'Q4: \u4f5c\u4e1a\u62a5\u9519 Replication slot "xxxx" is active\uff0c \u600e\u4e48\u529e\uff1f'),(0,o.kt)("p",null,"\u5f53\u524d Flink Postgres CDC \u5728\u4f5c\u4e1a\u9000\u51fa\u540e\u5e76\u4e0d\u4f1a\u624b\u52a8\u91ca\u653e slot\uff0c\u6709\u4e24\u79cd\u65b9\u5f0f\u53ef\u4ee5\u89e3\u51b3\u8be5\u95ee\u9898"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u524d\u5f80 Postgres \u4e2d\u624b\u52a8\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"select pg_drop_replication_slot('rep_slot');\n    ERROR:  replication slot \"rep_slot\" is active for PID 162564\nselect pg_terminate_backend(162564); select pg_drop_replication_slot('rep_slot');\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"pg source with \u53c2\u6570\u4e2d\u6dfb\u52a0 'debezium.slot.drop.on.stop' = 'true'\uff0c\u5728\u4f5c\u4e1a\u505c\u6b62\u540e\u81ea\u52a8\u6e05\u7406 slot")),(0,o.kt)("h2",{id:"q5-\u4f5c\u4e1a\u6709\u810f\u6570\u636e\u6bd4\u5982\u975e\u6cd5\u7684\u65e5\u671f\u6709\u53c2\u6570\u53ef\u4ee5\u914d\u7f6e\u53ef\u4ee5\u8fc7\u6ee4\u5417"},"Q5: \u4f5c\u4e1a\u6709\u810f\u6570\u636e\uff0c\u6bd4\u5982\u975e\u6cd5\u7684\u65e5\u671f\uff0c\u6709\u53c2\u6570\u53ef\u4ee5\u914d\u7f6e\u53ef\u4ee5\u8fc7\u6ee4\u5417\uff1f"),(0,o.kt)("p",null,"\u53ef\u4ee5\u7684\uff0c\u53ef\u4ee5\u5728 Flink CDC \u8868\u7684with \u53c2\u6570\u91cc \u52a0\u4e0b 'debezium.event.deserialization.failure.handling.mode'='warn' \u53c2\u6570\uff0c\u8df3\u8fc7\u810f\u6570\u636e\uff0c\u5c06\u810f\u6570\u636e\u6253\u5370\u5230WARN\u65e5\u5fd7\u91cc\u3002 \u4e5f\u53ef\u4ee5\u914d\u7f6e 'debezium.event.deserialization.failure.handling.mode'='ignore'\uff0c \u76f4\u63a5\u8df3\u8fc7\u810f\u6570\u636e\uff0c\u4e0d\u6253\u5370\u810f\u6570\u636e\u5230\u65e5\u5fd7\u3002"),(0,o.kt)("h2",{id:"q6-\u5728datastream-api\u4e2d\u6784\u5efapostgres-cdc\u6e90\u65f6\u5982\u4f55\u914d\u7f6etablelist\u9009\u9879"},"Q6: \u5728DataStream API\u4e2d\u6784\u5efaPostgres CDC\u6e90\u65f6\u5982\u4f55\u914d\u7f6etableList\u9009\u9879\uff1f"),(0,o.kt)("p",null,"tableList\u9009\u9879\u8981\u6c42\u8868\u540d\u4f7f\u7528\u67b6\u6784\u540d\uff0c\u800c\u4e0d\u662fDataStream API\u4e2d\u7684\u8868\u540d\u3002\u5bf9\u4e8ePostgres CDC source\uff0ctableList\u9009\u9879\u503c\u5e94\u4e3a\u2018my_schema.my_table\u2019\u3002"))}u.isMDXComponent=!0}}]);