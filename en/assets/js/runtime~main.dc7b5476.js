(()=>{"use strict";var e,a,b,d,c,f={},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var b=t[e]={exports:{}};return f[e].call(b.exports,b,b.exports,r),b.exports}r.m=f,e=[],r.O=(a,b,d,c)=>{if(!b){var f=1/0;for(i=0;i<e.length;i++){b=e[i][0],d=e[i][1],c=e[i][2];for(var t=!0,o=0;o<b.length;o++)(!1&c||f>=c)&&Object.keys(r.O).every((e=>r.O[e](b[o])))?b.splice(o--,1):(t=!1,c<f&&(f=c));if(t){e.splice(i--,1);var n=d();void 0!==n&&(a=n)}}return a}c=c||0;for(var i=e.length;i>0&&e[i-1][2]>c;i--)e[i]=e[i-1];e[i]=[b,d,c]},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a:a}),a},b=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,d){if(1&d&&(e=this(e)),8&d)return e;if("object"==typeof e&&e){if(4&d&&e.__esModule)return e;if(16&d&&"function"==typeof e.then)return e}var c=Object.create(null);r.r(c);var f={};a=a||[null,b({}),b([]),b(b)];for(var t=2&d&&e;"object"==typeof t&&!~a.indexOf(t);t=b(t))Object.getOwnPropertyNames(t).forEach((a=>f[a]=()=>e[a]));return f.default=()=>e,r.d(c,f),c},r.d=(e,a)=>{for(var b in a)r.o(a,b)&&!r.o(e,b)&&Object.defineProperty(e,b,{enumerable:!0,get:a[b]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((a,b)=>(r.f[b](e,a),a)),[])),r.u=e=>"assets/js/"+({38:"e8df869d",53:"935f2afb",135:"115ff368",145:"74acb599",154:"8c0b800d",194:"aeb51e84",277:"5b908ea7",349:"8cc59184",364:"b9db4503",399:"15b9904c",434:"90f7e015",496:"9973c4ef",552:"0d322912",673:"4f861af3",676:"af3e0a0d",708:"fe4b4813",712:"6001be20",742:"3bdb8ba3",929:"96cbbd11",939:"21e724c4",988:"2ede07ec",1168:"42173eb3",1197:"cb4588db",1324:"a1486d1a",1335:"145a8114",1372:"1db64337",1411:"0bffbe57",1414:"3bd1b9f6",1485:"a00d4bf3",1528:"2548a83b",1550:"34260d5b",1645:"86aa1ec7",1911:"35b8b35e",1934:"4b3d7b8c",2101:"76d88d3e",2220:"33aaaf65",2264:"6bbb8d1f",2294:"b0f9939c",2297:"c0ab28eb",2535:"814f3328",2650:"19954c47",2657:"352e0155",2682:"6f8d14ae",2790:"0b24e3ff",2810:"beb9a12f",2957:"fb12e417",3039:"230dafbd",3085:"1f391b9e",3089:"a6aa9e1f",3224:"8a696ad8",3231:"4d8e85ec",3237:"1df93b7f",3354:"2d8cb44d",3404:"a47ae04f",3562:"8ed881c9",3608:"9e4087bc",3632:"01090736",3638:"a3ccc8b4",3655:"366bfd68",3665:"5438abba",3680:"a19496bb",3836:"d6d319c4",3854:"210ee00c",3862:"f2e3b661",3865:"983c7feb",3933:"22c4c8f0",3936:"c57f5152",4013:"01a85c17",4020:"466c7570",4109:"7ba63e69",4134:"3a1b65f6",4135:"016edd61",4217:"d0081ddd",4310:"b6745d47",4441:"a15d2f9e",4566:"cd3818b5",4633:"12afebb9",4748:"043d36e8",4882:"77b8df98",4926:"b57ae1d4",5023:"3124e0c9",5095:"78ab25b4",5135:"8ee55d8e",5214:"553d35f2",5470:"ff1189ca",5513:"87a07da6",5517:"b9eb7138",5730:"5371e1b0",5782:"d083e984",5795:"90da410b",5850:"e1e7daa9",5855:"b11848ff",6103:"ccc49370",6124:"e95c6f99",6206:"70b31c1a",6353:"c8b3fb97",6405:"deb4b8de",6472:"2772b047",6538:"9747a3d1",6553:"c52180bd",6612:"ba4c4f48",6714:"51ab2a22",6759:"79899b69",6769:"653489e6",6821:"91d423dc",6834:"d30e4235",6961:"5835c5ef",7112:"688659e2",7287:"47daa06a",7412:"d2b6660c",7414:"393be207",7431:"d36b506c",7553:"3455cd1b",7564:"3e780085",7570:"516cc97c",7609:"7afc886f",7692:"b11f3d3b",7729:"01fb95f6",7746:"7064129c",7760:"017ca03e",7784:"78fcf910",7809:"943f2e09",7918:"17896441",7920:"1a4e3797",7923:"509af1ff",7944:"66282345",8001:"2d16b401",8051:"84c049fd",8066:"bde83f05",8325:"ee5ae550",8352:"453e787f",8378:"c2430c78",8379:"02c5169e",8404:"eff36d9d",8455:"9c46b559",8610:"6875c492",8636:"cd965ec1",8707:"2c6a0774",8804:"28b93ca2",8852:"5db6e33c",8983:"cd524a94",9047:"7701e15a",9075:"a0713d5a",9115:"67694980",9212:"4d43ea50",9232:"1758d1cd",9252:"8e44921a",9353:"cc15be68",9514:"1be78505",9554:"17927f41",9639:"3dee0937",9737:"8b9fa83b",9747:"4cff8a86",9803:"d07ff3c1",9900:"02f445d2",9963:"9d3fd337"}[e]||e)+"."+{38:"79c0d7da",53:"c618a07e",135:"99e5a47e",143:"dc3d98df",145:"508b46bf",154:"2aaa5254",194:"9fb35200",277:"58446038",349:"1801e7f5",364:"339834a6",399:"c8dcc5b4",434:"b39bceca",496:"59a2d2d7",552:"8c0008fa",673:"d225a579",676:"2dfb3aed",708:"040b45d9",712:"bb0e78a2",742:"c00e33a2",929:"c9b9f9e8",939:"ccea59ba",988:"e0bfdf29",1168:"61b10030",1197:"f1ddfd0d",1324:"ef84f71a",1335:"57900e8c",1372:"79f1bf60",1411:"6673d131",1414:"ab615320",1485:"e7310e84",1528:"7559d275",1550:"f406968c",1645:"f9a3418a",1911:"e81d52fd",1934:"1a55f452",2101:"9115ed6c",2220:"70b2454b",2264:"e7b61adf",2294:"231368ba",2297:"782524c5",2529:"25a70e32",2535:"9e8cfa8a",2650:"a70e2c83",2657:"7b20ef20",2682:"06bdd533",2790:"b17a82c9",2810:"4f34ed29",2957:"87acae46",3039:"a7aedfb2",3085:"64dc36cc",3089:"af45a8e1",3224:"bf5a6c43",3231:"9c413c21",3237:"dfcb2b21",3354:"5a2e047f",3404:"dc5133e8",3562:"bf293c4c",3608:"41d4c7b3",3632:"8cc028e7",3638:"9ec7a25b",3655:"f8cf67cc",3665:"f4480967",3680:"a30f2d04",3836:"7641960f",3854:"69aa77ac",3862:"a50a79ee",3865:"823cdb90",3933:"02a0b289",3936:"bf78e1a3",4013:"9d71aac2",4020:"efb225cc",4109:"56738f4c",4134:"15f31933",4135:"06d02d64",4217:"31d481f3",4310:"759c7915",4441:"9e69b114",4566:"4c5fc7ef",4633:"303d2895",4748:"fbca3828",4882:"c1276fc1",4926:"cbd8bc5c",4972:"eae48bad",5023:"568e265c",5095:"2df84785",5135:"31924a0f",5214:"b810e524",5470:"ae80510f",5513:"a0ed1562",5517:"5e9e7eef",5525:"faf6b173",5730:"72833eca",5782:"db50215c",5795:"bb3f5021",5850:"485705e9",5855:"3aee5b3e",6103:"cf51a50a",6124:"91402bb6",6206:"b141775e",6353:"129d56a9",6405:"bc888e0e",6472:"b4782fdb",6538:"eeb9162f",6553:"0deae8d0",6612:"8d721e0c",6714:"e30600da",6759:"1972030c",6769:"bf5e16e9",6821:"2eb0faab",6834:"ef88d22e",6961:"440d2212",7112:"5b51b3bc",7287:"6849e5a7",7412:"32782cad",7414:"1bf9e07f",7431:"7a5e47d2",7553:"663bcc30",7564:"2a963337",7570:"f4eab713",7609:"dfb868d8",7692:"28dd1e01",7729:"add124cc",7746:"d639992c",7760:"c6bbcd32",7784:"b5246fa7",7809:"e2a9fec2",7918:"e5706da2",7920:"492b9a91",7923:"49af589e",7944:"0b8e941d",8001:"66f3b833",8051:"7b397f57",8066:"9855f127",8325:"f9988702",8352:"1f7abd58",8378:"d269208c",8379:"23104c60",8404:"c2a37fab",8443:"6d96fce8",8455:"e3a6640e",8610:"c30c289e",8636:"283e81b4",8707:"5c8725be",8804:"62beb3e3",8852:"4908e343",8983:"7545b498",9047:"3609e6f0",9075:"f36a3195",9115:"93964308",9212:"cb03d363",9232:"a2f3bf90",9252:"ebba2182",9353:"a9b85653",9514:"bed1760f",9554:"d433a2f8",9639:"88e19cfc",9737:"4d367ebb",9747:"ad6be7c0",9803:"36bb97c1",9900:"f22037ca",9963:"3663873f"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),d={},c="bigdata-blog:",r.l=(e,a,b,f)=>{if(d[e])d[e].push(a);else{var t,o;if(void 0!==b)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var l=n[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==c+b){t=l;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",c+b),t.src=e),d[e]=[a];var u=(a,b)=>{t.onerror=t.onload=null,clearTimeout(s);var c=d[e];if(delete d[e],t.parentNode&&t.parentNode.removeChild(t),c&&c.forEach((e=>e(b))),a)return a(b)},s=setTimeout(u.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=u.bind(null,t.onerror),t.onload=u.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/Bigdata_Blog_Website/en/",r.gca=function(e){return e={17896441:"7918",66282345:"7944",67694980:"9115",e8df869d:"38","935f2afb":"53","115ff368":"135","74acb599":"145","8c0b800d":"154",aeb51e84:"194","5b908ea7":"277","8cc59184":"349",b9db4503:"364","15b9904c":"399","90f7e015":"434","9973c4ef":"496","0d322912":"552","4f861af3":"673",af3e0a0d:"676",fe4b4813:"708","6001be20":"712","3bdb8ba3":"742","96cbbd11":"929","21e724c4":"939","2ede07ec":"988","42173eb3":"1168",cb4588db:"1197",a1486d1a:"1324","145a8114":"1335","1db64337":"1372","0bffbe57":"1411","3bd1b9f6":"1414",a00d4bf3:"1485","2548a83b":"1528","34260d5b":"1550","86aa1ec7":"1645","35b8b35e":"1911","4b3d7b8c":"1934","76d88d3e":"2101","33aaaf65":"2220","6bbb8d1f":"2264",b0f9939c:"2294",c0ab28eb:"2297","814f3328":"2535","19954c47":"2650","352e0155":"2657","6f8d14ae":"2682","0b24e3ff":"2790",beb9a12f:"2810",fb12e417:"2957","230dafbd":"3039","1f391b9e":"3085",a6aa9e1f:"3089","8a696ad8":"3224","4d8e85ec":"3231","1df93b7f":"3237","2d8cb44d":"3354",a47ae04f:"3404","8ed881c9":"3562","9e4087bc":"3608","01090736":"3632",a3ccc8b4:"3638","366bfd68":"3655","5438abba":"3665",a19496bb:"3680",d6d319c4:"3836","210ee00c":"3854",f2e3b661:"3862","983c7feb":"3865","22c4c8f0":"3933",c57f5152:"3936","01a85c17":"4013","466c7570":"4020","7ba63e69":"4109","3a1b65f6":"4134","016edd61":"4135",d0081ddd:"4217",b6745d47:"4310",a15d2f9e:"4441",cd3818b5:"4566","12afebb9":"4633","043d36e8":"4748","77b8df98":"4882",b57ae1d4:"4926","3124e0c9":"5023","78ab25b4":"5095","8ee55d8e":"5135","553d35f2":"5214",ff1189ca:"5470","87a07da6":"5513",b9eb7138:"5517","5371e1b0":"5730",d083e984:"5782","90da410b":"5795",e1e7daa9:"5850",b11848ff:"5855",ccc49370:"6103",e95c6f99:"6124","70b31c1a":"6206",c8b3fb97:"6353",deb4b8de:"6405","2772b047":"6472","9747a3d1":"6538",c52180bd:"6553",ba4c4f48:"6612","51ab2a22":"6714","79899b69":"6759","653489e6":"6769","91d423dc":"6821",d30e4235:"6834","5835c5ef":"6961","688659e2":"7112","47daa06a":"7287",d2b6660c:"7412","393be207":"7414",d36b506c:"7431","3455cd1b":"7553","3e780085":"7564","516cc97c":"7570","7afc886f":"7609",b11f3d3b:"7692","01fb95f6":"7729","7064129c":"7746","017ca03e":"7760","78fcf910":"7784","943f2e09":"7809","1a4e3797":"7920","509af1ff":"7923","2d16b401":"8001","84c049fd":"8051",bde83f05:"8066",ee5ae550:"8325","453e787f":"8352",c2430c78:"8378","02c5169e":"8379",eff36d9d:"8404","9c46b559":"8455","6875c492":"8610",cd965ec1:"8636","2c6a0774":"8707","28b93ca2":"8804","5db6e33c":"8852",cd524a94:"8983","7701e15a":"9047",a0713d5a:"9075","4d43ea50":"9212","1758d1cd":"9232","8e44921a":"9252",cc15be68:"9353","1be78505":"9514","17927f41":"9554","3dee0937":"9639","8b9fa83b":"9737","4cff8a86":"9747",d07ff3c1:"9803","02f445d2":"9900","9d3fd337":"9963"}[e]||e,r.p+r.u(e)},(()=>{var e={1303:0,532:0};r.f.j=(a,b)=>{var d=r.o(e,a)?e[a]:void 0;if(0!==d)if(d)b.push(d[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var c=new Promise(((b,c)=>d=e[a]=[b,c]));b.push(d[2]=c);var f=r.p+r.u(a),t=new Error;r.l(f,(b=>{if(r.o(e,a)&&(0!==(d=e[a])&&(e[a]=void 0),d)){var c=b&&("load"===b.type?"missing":b.type),f=b&&b.target&&b.target.src;t.message="Loading chunk "+a+" failed.\n("+c+": "+f+")",t.name="ChunkLoadError",t.type=c,t.request=f,d[1](t)}}),"chunk-"+a,a)}},r.O.j=a=>0===e[a];var a=(a,b)=>{var d,c,f=b[0],t=b[1],o=b[2],n=0;if(f.some((a=>0!==e[a]))){for(d in t)r.o(t,d)&&(r.m[d]=t[d]);if(o)var i=o(r)}for(a&&a(b);n<f.length;n++)c=f[n],r.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return r.O(i)},b=self.webpackChunkbigdata_blog=self.webpackChunkbigdata_blog||[];b.forEach(a.bind(null,0)),b.push=a.bind(null,b.push.bind(b))})()})();