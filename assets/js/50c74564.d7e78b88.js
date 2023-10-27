"use strict";(self.webpackChunkbigdata_blog=self.webpackChunkbigdata_blog||[]).push([[5558],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>g});var r=a(7294);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var p=r.createContext({}),l=function(e){var n=r.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},c=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(a),g=t,m=u["".concat(p,".").concat(g)]||u[g]||d[g]||o;return a?r.createElement(m,s(s({ref:n},c),{},{components:a})):r.createElement(m,s({ref:n},c))}));function g(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:t,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8171:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=a(7462),t=(a(7294),a(3905));const o={authors:[{name:"skylines",url:"https://github.com/rookiegao"}],tags:["\u6570\u636e\u5e93","Doris"]},s="Doris \u96c6\u6210\u5176\u4ed6\u7cfb\u7edf",i={permalink:"/Bigdata_Blog_Website/blog/Doris \u96c6\u6210\u5176\u4ed6\u7cfb\u7edf",source:"@site/blog/Doris \u96c6\u6210\u5176\u4ed6\u7cfb\u7edf.md",title:"Doris \u96c6\u6210\u5176\u4ed6\u7cfb\u7edf",description:"\u51c6\u5907\u8868\u548c\u6570\u636e",date:"2023-10-27T08:28:53.000Z",formattedDate:"2023\u5e7410\u670827\u65e5",tags:[{label:"\u6570\u636e\u5e93",permalink:"/Bigdata_Blog_Website/blog/tags/\u6570\u636e\u5e93"},{label:"Doris",permalink:"/Bigdata_Blog_Website/blog/tags/doris"}],readingTime:4.035,hasTruncateMarker:!0,authors:[{name:"skylines",url:"https://github.com/rookiegao"}],frontMatter:{authors:[{name:"skylines",url:"https://github.com/rookiegao"}],tags:["\u6570\u636e\u5e93","Doris"]},prevItem:{title:"A Scala-free Flink",permalink:"/Bigdata_Blog_Website/blog/A Scala-free Flink"},nextItem:{title:"Flink OLAP \u4e0e Trino TPC-DS \u5bf9\u6bd4",permalink:"/Bigdata_Blog_Website/blog/Flink OLAP \u4e0e Trino TPC-DS \u5bf9\u6bd4"}},p={authorsImageUrls:[void 0]},l=[{value:"Spark \u8bfb\u5199 Doris",id:"spark-\u8bfb\u5199-doris",level:2},{value:"\u51c6\u5907  Spark \u73af\u5883",id:"\u51c6\u5907--spark-\u73af\u5883",level:3},{value:"\u4f7f\u7528  Spark Doris Connector",id:"\u4f7f\u7528--spark-doris-connector",level:3},{value:"SQL \u65b9\u5f0f\u8bfb\u5199\u6570\u636e",id:"sql-\u65b9\u5f0f\u8bfb\u5199\u6570\u636e",level:4},{value:"DataFrame \u65b9\u5f0f\u8bfb\u5199\u6570\u636e\uff08batch\uff09",id:"dataframe-\u65b9\u5f0f\u8bfb\u5199\u6570\u636ebatch",level:4},{value:"RDD \u65b9\u5f0f\u8bfb\u53d6\u6570\u636e",id:"rdd-\u65b9\u5f0f\u8bfb\u53d6\u6570\u636e",level:4},{value:"\u914d\u7f6e\u548c\u5b57\u6bb5\u7c7b\u578b\u6620\u5c04",id:"\u914d\u7f6e\u548c\u5b57\u6bb5\u7c7b\u578b\u6620\u5c04",level:4},{value:"\u4f7f\u7528 JDBC \u7684\u65b9\u5f0f\uff08\u4e0d\u63a8\u8350\uff09",id:"\u4f7f\u7528-jdbc-\u7684\u65b9\u5f0f\u4e0d\u63a8\u8350",level:3}],c={toc:l};function d(e){let{components:n,...a}=e;return(0,t.kt)("wrapper",(0,r.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"\u51c6\u5907\u8868\u548c\u6570\u636e"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"show full builtin  functions in test_db like 'year';\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"CREATE TABLE table1 \n(\nsiteid INT DEFAULT '10', \ncitycode SMALLINT,\nusername VARCHAR(32) DEFAULT '', \npv BIGINT SUM DEFAULT '0'\n)\nAGGREGATE KEY(siteid, citycode, username) \nDISTRIBUTED BY HASH(siteid) BUCKETS 10 \nPROPERTIES(\"replication_num\" = \"1\");\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"insert into table1 values \n(1,1,'jim',2),\n(2,1,'grace',2), \n(3,2,'tom',2),\n(4,3,'bush',3), \n(5,3,'helen',3);\n")),(0,t.kt)("h2",{id:"spark-\u8bfb\u5199-doris"},"Spark \u8bfb\u5199 Doris"),(0,t.kt)("h3",{id:"\u51c6\u5907--spark-\u73af\u5883"},"\u51c6\u5907  Spark \u73af\u5883"),(0,t.kt)("p",null,"\u521b\u5efa maven \u5de5\u7a0b\uff0c\u7f16\u5199 pom.xml \u6587\u4ef6"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0"\n         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0\nhttp://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n    <groupId>com.atguigu.doris</groupId>\n    <artifactId>spark-demo</artifactId>\n    <version>1.0-SNAPSHOT</version>\n    <properties>\n        <scala.binary.version>2.12</scala.binary.version>\n        <spark.version>3.0.0</spark.version>\n        <maven.compiler.source>8</maven.compiler.source>\n        <maven.compiler.target>8</maven.compiler.target>\n    </properties>\n    <dependencies>\n        \x3c!-- Spark\u7684\u4f9d\u8d56\u5f15\u5165   --\x3e\n        <dependency>\n            <groupId>org.apache.spark</groupId>\n            <artifactId>spark-core_${scala.binary.version}</artifactId>\n            <scope>provided</scope>\n            <version>${spark.version}</version>\n        </dependency>\n        <dependency>\n            <groupId>org.apache.spark</groupId>\n            <artifactId>spark-sql_${scala.binary.version}</artifactId>\n            <scope>provided</scope>\n            <version>${spark.version}</version>\n        </dependency>\n        <dependency>\n            <groupId>org.apache.spark</groupId>\n            <artifactId>spark-hive_${scala.binary.version}</artifactId>\n            <scope>provided</scope>\n            <version>${spark.version}</version>\n        </dependency>\n        \x3c!-- \u5f15\u5165 Scala --\x3e\n        <dependency>\n            <groupId>org.scala-lang</groupId>\n            <artifactId>scala-library</artifactId>\n            <version>2.12.10</version>\n        </dependency>\n        <dependency>\n            <groupId>com.alibaba</groupId>\n            <artifactId>fastjson</artifactId>\n            <version>1.2.47</version>\n        </dependency>\n        <dependency>\n            <groupId>mysql</groupId>\n            <artifactId>mysql-connector-java</artifactId>\n            <version>5.1.49</version>\n        </dependency>\n        \x3c!--spark-doris-connector--\x3e\n        <dependency>\n            <groupId>org.apache.doris</groupId>\n            <artifactId>spark-doris-connector-3.1_2.12</artifactId>\n            \x3c!--<artifactId>spark-doris-connector-2.3_2.11</artifactId>--\x3e\n            <version>1.0.1</version>\n        </dependency>\n    </dependencies>\n    <build>\n        <plugins>\n            \x3c!--\u7f16\u8bd1  scala\u6240\u9700\u63d2\u4ef6--\x3e\n            <plugin>\n                <groupId>org.scala-tools</groupId>\n                <artifactId>maven-scala-plugin</artifactId>\n                <version>2.15.1</version>\n                <executions>\n                    <execution>\n                        <id>compile-scala</id>\n                        <goals>\n                            <goal>add-source</goal>\n                            <goal>compile</goal>\n                        </goals>\n                    </execution>\n                    <execution>\n                        <id>test-compile-scala</id>\n                        <goals>\n                            <goal>add-source</goal>\n                            <goal>testCompile</goal>\n                        </goals>\n                    </execution>\n                </executions>\n            </plugin>\n            <plugin>\n                <groupId>net.alchim31.maven</groupId>\n                <artifactId>scala-maven-plugin</artifactId>\n                <version>3.2.2</version>\n                <executions>\n                    <execution>\n                        \x3c!-- \u58f0\u660e\u7ed1\u5b9a\u5230 maven\u7684 compile\u9636\u6bb5    --\x3e\n                        <goals>\n                            <goal>compile</goal>\n                            <goal>testCompile</goal>\n                        </goals>\n                    </execution>\n                </executions>\n            </plugin>\n            \x3c!-- assembly\u6253\u5305\u63d2\u4ef6   --\x3e\n            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-assembly-plugin</artifactId>\n                <version>3.0.0</version>\n                <executions>\n                    <execution>\n                        <id>make-assembly</id>\n                        <phase>package</phase>\n                        <goals>\n                            <goal>single</goal>\n                        </goals>\n                    </execution>\n                </executions>\n                <configuration>\n                    <archive>\n                        <manifest>\n                        </manifest>\n                    </archive>\n                    <descriptorRefs>\n                        <descriptorRef>jar-with-dependencies</descriptorRef>\n                    </descriptorRefs>\n                </configuration>\n            </plugin>\n\n            \x3c!--<plugin>\n            <groupId>org.apache.maven.plugins</groupId>\n            <artifactId>maven-compiler-plugin</artifactId>\n            <version>3.6.1</version>\n            &lt;!&ndash; \u6240\u6709\u7684\u7f16\u8bd1\u90fd\u4f9d\u7167  JDK1.8 &ndash;&gt;\n            <configuration>\n            <source>1.8</source>\n            <target>1.8</target>\n            </configuration>\n            </plugin>--\x3e\n        </plugins>\n    </build>\n</project>\n')),(0,t.kt)("h3",{id:"\u4f7f\u7528--spark-doris-connector"},"\u4f7f\u7528  Spark Doris Connector"),(0,t.kt)("p",null,"Spark Doris Connector \u53ef\u4ee5\u652f\u6301\u901a\u8fc7 Spark \u8bfb\u53d6 Doris \u4e2d\u5b58\u50a8\u7684\u6570\u636e\uff0c\u4e5f\u652f\u6301\u901a\u8fc7 Spark \u5199\u5165\u6570\u636e\u5230 Doris\u3002"),(0,t.kt)("h4",{id:"sql-\u65b9\u5f0f\u8bfb\u5199\u6570\u636e"},"SQL \u65b9\u5f0f\u8bfb\u5199\u6570\u636e"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},'import org.apache.spark.SparkConf\nimport org.apache.spark.sql.SparkSession\n/**\n * TODO\n *\n * @version 1.0\n * @author cjp\n */\nobject SQLDemo {\n  def main( args: Array[String] ): Unit = {\n    =\n    val sparkConf = new SparkConf().setAppName("SQLDemo")\n      .setMaster("local[*]") //TODO \u8981\u6253\u5305\u63d0\u4ea4\u96c6\u7fa4\u6267\u884c\uff0c\u6ce8\u91ca\u6389\n    sparkSession\n    val\n    SparkSession.builder().config(sparkConf).getOrCreate()\n    sparkSession.sql(\n      """\n        |CREATE TEMPORARY VIEW spark_doris\n        |USING doris\n        |OPTIONS(\n        |  "table.identifier"="test_db.table1",\n        |  "fenodes"="hadoop1:8030",\n        |  "user"="test",\n        |  "password"="test"\n        |);\n""".stripMargin)\n//\u8bfb\u53d6\u6570\u636e\n//    sparkSession.sql("select * from spark_doris").show()\n    //\u5199\u5165\u6570\u636e\n    sparkSession.sql("insert \n      values(99,99,\'haha\',5)")\n  }\n}\n')),(0,t.kt)("h4",{id:"dataframe-\u65b9\u5f0f\u8bfb\u5199\u6570\u636ebatch"},"DataFrame \u65b9\u5f0f\u8bfb\u5199\u6570\u636e\uff08batch\uff09"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},'\n\nimport org.apache.spark.SparkConf\nimport org.apache.spark.sql.SparkSession\n/**\n * TODO\n *\n * @version 1.0\n * @author cjp\n */\nobject DataFrameDemo {\n  def main(args: Array[String]): Unit = {\n    val sparkConf = new SparkConf().setAppName("DataFrameDemo")\n      .setMaster("local[*]") //TODO \u8981\u6253\u5305\u63d0\u4ea4\u96c6\u7fa4\u6267\u884c\uff0c\u6ce8\u91ca\u6389\n\n    val sparkSession = SparkSession.builder().config(sparkConf).getOrCreate()\n\n    // \u8bfb\u53d6\u6570\u636e\n    //    val dorisSparkDF = sparkSession.read.format("doris")\n    //      .option("doris.table.identifier", "test_db.table1")\n    //      .option("doris.fenodes", "hadoop1:8030")\n    //    .option("user", "test")\n    //      .option("password", "test")\n    //      .load()\n    //    dorisSparkDF.show()\n    // \u5199\u5165\u6570\u636e\n    import sparkSession.implicits._\n    val mockDataDF = List(\n      (11, 23, "haha", 8),\n      (11, 3, "hehe", 9),\n      (11, 3, "heihei", 10)\n    ).toDF("siteid", "citycode", "username", "pv")\n    mockDataDF.show(5)\n    mockDataDF.write.format("doris")\n      .option("doris.table.identifier", "test_db.table1")\n      .option("doris.fenodes", "hadoop1:8030")\n      .option("user", "test")\n      .option("password", "test")\n      //\u6307\u5b9a\u4f60\u8981\u5199\u5165\u7684\u5b57\u6bb5\n      //      .option("doris.write.fields", "user")\n      .save()\n  }\n\n}\n')),(0,t.kt)("h4",{id:"rdd-\u65b9\u5f0f\u8bfb\u53d6\u6570\u636e"},"RDD \u65b9\u5f0f\u8bfb\u53d6\u6570\u636e"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},'\nimport org.apache.spark.{SparkConf, SparkContext}\nimport org.apache.spark.sql.SparkSession\n/**\n * TODO\n *\n * @version 1.0\n * @author cjp\n */\nobject RDDDemo {\n  def main(args: Array[String]): Unit = {\n    val sparkConf = new SparkConf().setAppName("RDDDemo")\n      .setMaster("local[*]") //TODO \u8981\u6253\u5305\u63d0\u4ea4\u96c6\u7fa4\u6267\u884c\uff0c\u6ce8\u91ca\u6389\n    val sc = new SparkContext(sparkConf)\n    import org.apache.doris.spark._\n    val dorisSparkRDD = sc.dorisRDD(\n      tableIdentifier = Some("test_db.table1"),\n      cfg = Some(Map(\n        "doris.fenodes" -> "hadoop1:8030",\n        "doris.request.auth.user" -> "test",\n        "doris.request.auth.password" -> "test"\n      ))\n    )\n    dorisSparkRDD.collect().foreach(println)\n  }\n}\n')),(0,t.kt)("h4",{id:"\u914d\u7f6e\u548c\u5b57\u6bb5\u7c7b\u578b\u6620\u5c04"},"\u914d\u7f6e\u548c\u5b57\u6bb5\u7c7b\u578b\u6620\u5c04"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"1 \u901a\u7528\u914d\u7f6e\u9879")),(0,t.kt)("p",null,"![",(0,t.kt)("a",{parentName:"p",href:"https://user-images.githubusercontent.com/34996528/167132236-a3a95203-7845-4ee0-901d-1675367e7cf2.png"},"img")),(0,t.kt)("p",null,"![",(0,t.kt)("a",{parentName:"p",href:"https://user-images.githubusercontent.com/34996528/167132163-23461f7a-1fca-462f-a612-91e1993d7aab.png"},"img")),(0,t.kt)("p",null,"![",(0,t.kt)("a",{parentName:"p",href:"https://user-images.githubusercontent.com/34996528/167132357-47304220-e8f8-4d21-8aab-c00cd4107baf.png"},"img")),(0,t.kt)("p",null,"![",(0,t.kt)("a",{parentName:"p",href:"https://user-images.githubusercontent.com/34996528/167132534-ed6190d0-cb0f-4f69-b992-e55edfecf099.png"},"img")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"2 SQL \u548c Dataframe \u4e13\u6709\u914d\u7f6e")),(0,t.kt)("p",null,"![",(0,t.kt)("a",{parentName:"p",href:"https://user-images.githubusercontent.com/34996528/167132622-aea37038-c877-4fa4-81c4-bae5658d8b60.png"},"img")),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"3 RDD \u4e13\u6709\u914d\u7f6e")),(0,t.kt)("p",null,(0,t.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/34996528/167132684-3a3dcbb1-b1c5-4c0d-a5c9-7ce65f63a08b.png",alt:"img"})),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"4 Doris \u548c Spark \u5217\u7c7b\u578b\u6620\u5c04\u5173\u7cfb:")),(0,t.kt)("p",null,(0,t.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/34996528/167132772-19c41625-5c50-47cd-97eb-f97df6983431.png",alt:"img"})),(0,t.kt)("p",null,(0,t.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/34996528/167133133-0f219de7-2410-4e48-b576-892f7a6e5064.png",alt:"img"})),(0,t.kt)("p",null,(0,t.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/34996528/167132972-38a871bf-2057-4cfa-baf1-37ff494ab00e.png",alt:"img"})),(0,t.kt)("h3",{id:"\u4f7f\u7528-jdbc-\u7684\u65b9\u5f0f\u4e0d\u63a8\u8350"},"\u4f7f\u7528 JDBC \u7684\u65b9\u5f0f\uff08\u4e0d\u63a8\u8350\uff09"),(0,t.kt)("p",null,"\u8fd9\u79cd\u65b9\u5f0f\u662f\u65e9\u671f\u5199\u6cd5\uff0cSpark \u65e0\u6cd5\u611f\u77e5 Doris \u7684\u6570\u636e\u5206\u5e03\uff0c\u4f1a\u5bfc\u81f4\u6253\u5230 Doris \u7684\u67e5\u8be2\u538b\u529b\u975e\u5e38\u5927\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-scala"},'\nimport java.util.Properties\nimport org.apache.spark.SparkConf\nimport org.apache.spark.sql.{SaveMode, SparkSession}\n\nobject JDBCDemo {\n  def main(args: Array[String]): Unit = {\n  val sparkConf =  SparkConf().setAppName("JDBCDemo").setMaster("local[*]")\n\nval  sparkSession =  SparkSession.builder().config(sparkConf).getOrCreate()\n// \u8bfb\u53d6\u6570\u636e\n//    val df=sparkSession.read.format("jdbc")\n//      .option("url","jdbc:mysql://hadoop1:9030/test_db")\n//      .option("user","test")\n//      .option("password","test")\n//      .option("dbtable","table1")\n//      .load()\n//\n//    df.show()\n// \u5199\u5165\u6570\u636e\n\nimport sparkSession.implicits._\n\n   val mockDataDF = List (\n      (11, 23, "haha", 8),\n      (11, 3, "hehe", 9),\n      (11, 3, "heihei", 10)\n        ).toDF ("siteid", "citycode", "username", "pv")\n     val prop = new Properties ()\n     prop.setProperty ("user", "root")\n     prop.setProperty ("password", "123456")\n     df.write.mode (SaveMode.Append)\n       .jdbc ("jdbc:mysql://hadoop1:9030/test_db", "table1", prop)\n  }\n}\n')))}d.isMDXComponent=!0}}]);