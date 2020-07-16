(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{123:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var r=a(2),n=a(6),o=(a(0),a(136)),c=a(142),b=a(143),s={title:"Methods"},l={id:"formatting/methods",isDocsHomePage:!1,title:"Methods",description:"format",source:"@site/docs/formatting/methods.mdx",permalink:"/fast-csv/docs/formatting/methods",editUrl:"https://github.com/C2FO/fast-csv/edit/master/documentation/docs/formatting/methods.mdx",sidebar:"docs",previous:{title:"Row Types",permalink:"/fast-csv/docs/formatting/row-types"},next:{title:"Examples",permalink:"/fast-csv/docs/formatting/examples"}},i=[{value:"format",id:"format",children:[]},{value:"write",id:"write",children:[]},{value:"writeToStream",id:"writetostream",children:[]},{value:"writeToPath",id:"writetopath",children:[]},{value:"writeToString",id:"writetostring",children:[]},{value:"writeToBuffer",id:"writetobuffer",children:[]}],u={rightToc:i};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"format"},"format"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"csv.format(options): CsvFormatterStream")),Object(o.b)("p",null,"This is the main entry point for formatting CSVs. It is used by all other helper methods."),Object(o.b)(c.a,{defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Output",value:"output"}],mdxType:"Tabs"},Object(o.b)(b.a,{value:"ts",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { format } from '@fast-csv/format';\n\nconst stream = format();\nstream.pipe(process.stdout);\n\nstream.write(['a', 'b']);\nstream.write(['a1', 'b1']);\nstream.write(['a2', 'b2']);\nstream.end();\n"))),Object(o.b)(b.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const { format } = require('@fast-csv/format');\n\nconst stream = format();\nstream.pipe(process.stdout);\n\nstream.write(['a', 'b']);\nstream.write(['a1', 'b1']);\nstream.write(['a2', 'b2']);\nstream.end();\n"))),Object(o.b)(b.a,{value:"output",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"a,b\na1,b1\na2,b2\n")))),Object(o.b)("h2",{id:"write"},"write"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"write(rows[, options]): CsvFormatterStream")),Object(o.b)("p",null,"Create a formatter, writes the rows and returns the ",Object(o.b)("inlineCode",{parentName:"p"},"CsvFormatterStream"),"."),Object(o.b)(c.a,{defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Output",value:"output"}],mdxType:"Tabs"},Object(o.b)(b.a,{value:"ts",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { write } from '@fast-csv/format';\n\nconst rows = [\n    ['a', 'b'],\n    ['a1', 'b1'],\n    ['a2', 'b2'],\n];\nwrite(rows).pipe(process.stdout);\n"))),Object(o.b)(b.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const { write } = require('@fast-csv/format');\n\nconst rows = [\n    ['a', 'b'],\n    ['a1', 'b1'],\n    ['a2', 'b2'],\n];\nwrite(rows).pipe(process.stdout);\n"))),Object(o.b)(b.a,{value:"output",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"a,b\na1,b1\na2,b2\n")))),Object(o.b)("h2",{id:"writetostream"},"writeToStream"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"writeToStream(stream, rows[, options])")),Object(o.b)("p",null,"Write an array of values to a ",Object(o.b)("inlineCode",{parentName:"p"},"WritableStream"),", and returns the original stream"),Object(o.b)(c.a,{defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Output",value:"output"}],mdxType:"Tabs"},Object(o.b)(b.a,{value:"ts",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { writeToStream } from '@fast-csv/format';\n\nconst rows = [\n    ['a', 'b'],\n    ['a1', 'b1'],\n    ['a2', 'b2'],\n];\nwriteToStream(process.stdout, rows);\n"))),Object(o.b)(b.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const { writeToStream } = require('@fast-csv/format');\n\nconst rows = [\n    ['a', 'b'],\n    ['a1', 'b1'],\n    ['a2', 'b2'],\n];\nwriteToStream(process.stdout, rows);\n"))),Object(o.b)(b.a,{value:"output",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"a,b\na1,b1\na2,b2\n")))),Object(o.b)("h2",{id:"writetopath"},"writeToPath"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"writeToPath(path, rows[, options])")),Object(o.b)("p",null,"Write an array of values to the specified path"),Object(o.b)(c.a,{defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Output",value:"output"}],mdxType:"Tabs"},Object(o.b)(b.a,{value:"ts",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { writeToPath } from '@fast-csv/format';\n\nconst rows = [\n    ['a', 'b'],\n    ['a1', 'b1'],\n    ['a2', 'b2'],\n];\nwriteToPath(path.resolve(__dirname, 'tmp.csv'), rows)\n    .on('error', err => console.error(err))\n    .on('finish', () => console.log('Done writing.'));\n\n"))),Object(o.b)(b.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const { writeToPath } = require('@fast-csv/format');\n\nconst rows = [\n    ['a', 'b'],\n    ['a1', 'b1'],\n    ['a2', 'b2'],\n];\nwriteToPath(path.resolve(__dirname, 'tmp.csv'), rows)\n    .on('error', err => console.error(err))\n    .on('finish', () => console.log('Done writing.'));\n\n"))),Object(o.b)(b.a,{value:"output",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"a,b\na1,b1\na2,b2\n")))),Object(o.b)("h2",{id:"writetostring"},"writeToString"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"writeToString(arr[, options]): Promise<string>")),Object(o.b)("p",null,"Formats the rows and returns a ",Object(o.b)("inlineCode",{parentName:"p"},"Promise")," that will resolve with the CSV content as a ",Object(o.b)("inlineCode",{parentName:"p"},"string"),"."),Object(o.b)(c.a,{defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Output",value:"output"}],mdxType:"Tabs"},Object(o.b)(b.a,{value:"ts",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { writeToString } from '@fast-csv/format';\n\nconst rows = [\n    ['a', 'b'],\n    ['a1', 'b1'],\n    ['a2', 'b2'],\n];\nwriteToString(rows).then(data => console.log(data));\n"))),Object(o.b)(b.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const { writeToString } = require('@fast-csv/format');\n\nconst rows = [\n    ['a', 'b'],\n    ['a1', 'b1'],\n    ['a2', 'b2'],\n];\nwriteToString(rows).then(data => console.log(data));\n"))),Object(o.b)(b.a,{value:"output",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"a,b\na1,b1\na2,b2\n")))),Object(o.b)("h2",{id:"writetobuffer"},"writeToBuffer"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"writeToBuffer(arr[, options]): Promise<Buffer>")),Object(o.b)("p",null,"Formats the rows and returns a ",Object(o.b)("inlineCode",{parentName:"p"},"Promise")," that will resolve with the CSV content as a ",Object(o.b)("inlineCode",{parentName:"p"},"Buffer"),"."),Object(o.b)(c.a,{defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Output",value:"output"}],mdxType:"Tabs"},Object(o.b)(b.a,{value:"ts",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { writeToBuffer } from '@fast-csv/format';\n\nconst rows = [\n    ['a', 'b'],\n    ['a1', 'b1'],\n    ['a2', 'b2'],\n];\nwriteToBuffer(rows).then(data => console.log(data.toString()));\n"))),Object(o.b)(b.a,{value:"js",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const { writeToBuffer } = require('@fast-csv/format');\n\nconst rows = [\n    ['a', 'b'],\n    ['a1', 'b1'],\n    ['a2', 'b2'],\n];\nwriteToBuffer(rows).then(data => console.log(data.toString()));\n"))),Object(o.b)(b.a,{value:"output",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"a,b\na1,b1\na2,b2\n")))))}p.isMDXComponent=!0},136:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return f}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),i=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},u=function(e){var t=i(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=i(a),m=r,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return a?n.a.createElement(f,b(b({ref:t},l),{},{components:a})):n.a.createElement(f,b({ref:t},l))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=m;var b={};for(var s in t)hasOwnProperty.call(t,s)&&(b[s]=t[s]);b.originalType=e,b.mdxType="string"==typeof e?e:r,c[1]=b;for(var l=2;l<o;l++)c[l]=a[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},137:function(e,t,a){"use strict";function r(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}t.a=function(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},139:function(e,t,a){"use strict";var r=a(0);const n=Object(r.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{},isAnnouncementBarClosed:!1,closeAnnouncementBar:()=>{}});t.a=n},140:function(e,t,a){"use strict";var r=a(0),n=a(139);t.a=function(){return Object(r.useContext)(n.a)}},142:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(140),c=a(137),b=a(92),s=a.n(b);const l=37,i=39;t.a=function(e){const{block:t,children:a,defaultValue:b,values:u,groupId:p}=e,{tabGroupChoices:m,setTabGroupChoices:f}=Object(o.a)(),[d,O]=Object(r.useState)(b);if(null!=p){const e=m[p];null!=e&&e!==d&&u.some(t=>t.value===e)&&O(e)}const j=e=>{O(e),null!=p&&f(p,e)},v=[];return n.a.createElement("div",null,n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t})},u.map(({value:e,label:t})=>n.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":d===e,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":d===e}),key:e,ref:e=>v.push(e),onKeyDown:e=>((e,t,a)=>{switch(a.keyCode){case i:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case l:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(v,e.target,e),onFocus:()=>j(e),onClick:()=>j(e)},t))),n.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(a).filter(e=>e.props.value===d)[0]))}},143:function(e,t,a){"use strict";var r=a(0),n=a.n(r);t.a=function(e){return n.a.createElement("div",null,e.children)}}}]);