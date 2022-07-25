"use strict";(self.webpackChunkmemlab_website=self.webpackChunkmemlab_website||[]).push([[3306],{3905:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>k});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),c=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},s=function(e){var a=c(e.components);return n.createElement(p.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(t),k=r,N=d["".concat(p,".").concat(k)]||d[k]||m[k]||l;return t?n.createElement(N,o(o({ref:a},s),{},{components:t})):n.createElement(N,o({ref:a},s))}));function k(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3980:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=t(7462),r=(t(7294),t(3905));const l={id:"core_src",title:"Package: @memlab/core",sidebar_label:"core/src",sidebar_position:0,custom_edit_url:null},o=void 0,i={unversionedId:"api/modules/core_src",id:"api/modules/core_src",title:"Package: @memlab/core",description:"Interfaces",source:"@site/docs/api/modules/core_src.md",sourceDirName:"api/modules",slug:"/api/modules/core_src",permalink:"/memlab/docs/api/modules/core_src",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"core_src",title:"Package: @memlab/core",sidebar_label:"core/src",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"api/src",permalink:"/memlab/docs/api/modules/api_src"},next:{title:"heap-analysis/src",permalink:"/memlab/docs/api/modules/heap_analysis_src"}},p={},c=[{value:"Interfaces",id:"interfaces",level:2},{value:"Type Aliases",id:"type-aliases",level:2},{value:'<a id="checkpageloadcallback" name="checkpageloadcallback"></a> <strong>CheckPageLoadCallback</strong>: (<code>page</code>: <code>Page</code>) =&gt; <code>Promise</code>&lt;<code>boolean</code>&gt;',id:"-checkpageloadcallback-page-page--promiseboolean",level:3},{value:'<a id="cookies" name="cookies"></a> <strong>Cookies</strong>: { <code>domain?</code>: <code>string</code> ; <code>name</code>: <code>string</code> ; <code>value</code>: <code>string</code>  }[]',id:"-cookies--domain-string--name-string--value-string--",level:3},{value:'<a id="edgeiterationcallback" name="edgeiterationcallback"></a> <strong>EdgeIterationCallback</strong>: (<code>edge</code>: <code>IHeapEdge</code>) =&gt; <code>Optional</code>&lt;{ <code>stop</code>: <code>boolean</code>  }&gt;',id:"-edgeiterationcallback-edge-iheapedge--optional-stop-boolean--",level:3},{value:'<a id="initleakfiltercallback" name="initleakfiltercallback"></a> <strong>InitLeakFilterCallback</strong>: (<code>snapshot</code>: <code>IHeapSnapshot</code>, <code>leakedNodeIds</code>: <code>HeapNodeIdSet</code>) =&gt; <code>void</code>',id:"-initleakfiltercallback-snapshot-iheapsnapshot-leakednodeids-heapnodeidset--void",level:3},{value:'<a id="interactionscallback" name="interactionscallback"></a> <strong>InteractionsCallback</strong>: (<code>page</code>: <code>Page</code>, <code>args?</code>: <code>OperationArgs</code>) =&gt; <code>Promise</code>&lt;<code>void</code>&gt;',id:"-interactionscallback-page-page-args-operationargs--promisevoid",level:3},{value:'<a id="leakfiltercallback" name="leakfiltercallback"></a> <strong>LeakFilterCallback</strong>: (<code>node</code>: <code>IHeapNode</code>, <code>snapshot</code>: <code>IHeapSnapshot</code>, <code>leakedNodeIds</code>: <code>HeapNodeIdSet</code>) =&gt; <code>boolean</code>',id:"-leakfiltercallback-node-iheapnode-snapshot-iheapsnapshot-leakednodeids-heapnodeidset--boolean",level:3},{value:'<a id="predicator" name="predicator"></a> <strong>Predicator</strong>&lt;<code>T</code>&gt;: (<code>node</code>: <code>T</code>) =&gt; <code>boolean</code>',id:"-predicatort-node-t--boolean",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:'<a id="runmetainfo" name="runmetainfo"></a> <strong>RunMetaInfo</strong>: <code>Object</code>',id:"-runmetainfo-object",level:3},{value:"Functions",id:"functions",level:2},{value:'<a id="dumpnodeheapsnapshot"></a><strong>dumpNodeHeapSnapshot</strong>()',id:"dumpnodeheapsnapshot",level:3},{value:'<a id="getnodeinnocentheap"></a><strong>getNodeInnocentHeap</strong>()',id:"getnodeinnocentheap",level:3},{value:'<a id="tagobject"></a><strong>tagObject</strong>&lt;<code>T</code>&gt;(<code>o</code>, <code>tag</code>)',id:"tagobjectto-tag",level:3},{value:"Type parameters",id:"type-parameters-1",level:4}],s={toc:c};function m(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"interfaces"},"Interfaces"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/memlab/docs/api/interfaces/core_src.IHeapEdge"},"IHeapEdge")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/memlab/docs/api/interfaces/core_src.IHeapEdges"},"IHeapEdges")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/memlab/docs/api/interfaces/core_src.IHeapLocation"},"IHeapLocation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/memlab/docs/api/interfaces/core_src.IHeapNode"},"IHeapNode")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/memlab/docs/api/interfaces/core_src.IHeapNodes"},"IHeapNodes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/memlab/docs/api/interfaces/core_src.IHeapSnapshot"},"IHeapSnapshot")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/memlab/docs/api/interfaces/core_src.IHeapStringNode"},"IHeapStringNode")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/memlab/docs/api/interfaces/core_src.ILeakFilter"},"ILeakFilter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/memlab/docs/api/interfaces/core_src.IScenario"},"IScenario"))),(0,r.kt)("h2",{id:"type-aliases"},"Type Aliases"),(0,r.kt)("h3",{id:"-checkpageloadcallback-page-page--promiseboolean"},(0,r.kt)("a",{id:"checkpageloadcallback",name:"checkpageloadcallback"})," ",(0,r.kt)("strong",{parentName:"h3"},"CheckPageLoadCallback"),": (",(0,r.kt)("inlineCode",{parentName:"h3"},"page"),": ",(0,r.kt)("inlineCode",{parentName:"h3"},"Page"),") => ",(0,r.kt)("inlineCode",{parentName:"h3"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"h3"},"boolean"),">"),(0,r.kt)("p",null,"Callback function to provide if the page is loaded."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"page"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Page")," | puppeteer's ",(0,r.kt)("a",{parentName:"li",href:"https://pptr.dev/api/puppeteer.page/"},"Page")," object."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),">"," | a boolean value, if it returns ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", memlab will consider\nthe navigation completes, if it returns ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", memlab will keep calling\nthis callback until it returns ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),". This is an async callback, you can\nalso ",(0,r.kt)("inlineCode",{parentName:"p"},"await")," and returns ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," until some async logic is resolved.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Source"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/11fa80b/packages/core/src/lib/Types.ts#L745"},"core/src/lib/Types.ts:745"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-cookies--domain-string--name-string--value-string--"},(0,r.kt)("a",{id:"cookies",name:"cookies"})," ",(0,r.kt)("strong",{parentName:"h3"},"Cookies"),": { ",(0,r.kt)("inlineCode",{parentName:"h3"},"domain?"),": ",(0,r.kt)("inlineCode",{parentName:"h3"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"h3"},"name"),": ",(0,r.kt)("inlineCode",{parentName:"h3"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"h3"},"value"),": ",(0,r.kt)("inlineCode",{parentName:"h3"},"string"),"  }[]"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Source"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/11fa80b/packages/core/src/lib/Types.ts#L104"},"core/src/lib/Types.ts:104"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-edgeiterationcallback-edge-iheapedge--optional-stop-boolean--"},(0,r.kt)("a",{id:"edgeiterationcallback",name:"edgeiterationcallback"})," ",(0,r.kt)("strong",{parentName:"h3"},"EdgeIterationCallback"),": (",(0,r.kt)("inlineCode",{parentName:"h3"},"edge"),": ",(0,r.kt)("a",{parentName:"h3",href:"/memlab/docs/api/interfaces/core_src.IHeapEdge"},(0,r.kt)("inlineCode",{parentName:"a"},"IHeapEdge")),") => ",(0,r.kt)("inlineCode",{parentName:"h3"},"Optional"),"<{ ",(0,r.kt)("inlineCode",{parentName:"h3"},"stop"),": ",(0,r.kt)("inlineCode",{parentName:"h3"},"boolean"),"  }",">"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"edge"),": ",(0,r.kt)("a",{parentName:"li",href:"/memlab/docs/api/interfaces/core_src.IHeapEdge"},(0,r.kt)("inlineCode",{parentName:"a"},"IHeapEdge"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional"),"<{ ",(0,r.kt)("inlineCode",{parentName:"p"},"stop"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"  }",">")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Source"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/11fa80b/packages/core/src/lib/Types.ts#L1227"},"core/src/lib/Types.ts:1227"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-initleakfiltercallback-snapshot-iheapsnapshot-leakednodeids-heapnodeidset--void"},(0,r.kt)("a",{id:"initleakfiltercallback",name:"initleakfiltercallback"})," ",(0,r.kt)("strong",{parentName:"h3"},"InitLeakFilterCallback"),": (",(0,r.kt)("inlineCode",{parentName:"h3"},"snapshot"),": ",(0,r.kt)("a",{parentName:"h3",href:"/memlab/docs/api/interfaces/core_src.IHeapSnapshot"},(0,r.kt)("inlineCode",{parentName:"a"},"IHeapSnapshot")),", ",(0,r.kt)("inlineCode",{parentName:"h3"},"leakedNodeIds"),": ",(0,r.kt)("inlineCode",{parentName:"h3"},"HeapNodeIdSet"),") => ",(0,r.kt)("inlineCode",{parentName:"h3"},"void")),(0,r.kt)("p",null,"Lifecycle function callback that is invoked initially once before calling any\nleak filter function."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"snapshot"),": ",(0,r.kt)("a",{parentName:"li",href:"/memlab/docs/api/interfaces/core_src.IHeapSnapshot"},(0,r.kt)("inlineCode",{parentName:"a"},"IHeapSnapshot"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"leakedNodeIds"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"HeapNodeIdSet")," | the set of leaked object (node) ids."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"void"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Source"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/11fa80b/packages/core/src/lib/Types.ts#L321"},"core/src/lib/Types.ts:321"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-interactionscallback-page-page-args-operationargs--promisevoid"},(0,r.kt)("a",{id:"interactionscallback",name:"interactionscallback"})," ",(0,r.kt)("strong",{parentName:"h3"},"InteractionsCallback"),": (",(0,r.kt)("inlineCode",{parentName:"h3"},"page"),": ",(0,r.kt)("inlineCode",{parentName:"h3"},"Page"),", ",(0,r.kt)("inlineCode",{parentName:"h3"},"args?"),": ",(0,r.kt)("inlineCode",{parentName:"h3"},"OperationArgs"),") => ",(0,r.kt)("inlineCode",{parentName:"h3"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"h3"},"void"),">"),(0,r.kt)("p",null,"The callback defines browser interactions which are\nused by memlab to interact with the web app under test."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"page"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Page")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"args?"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"OperationArgs")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Source"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/11fa80b/packages/core/src/lib/Types.ts#L356"},"core/src/lib/Types.ts:356"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-leakfiltercallback-node-iheapnode-snapshot-iheapsnapshot-leakednodeids-heapnodeidset--boolean"},(0,r.kt)("a",{id:"leakfiltercallback",name:"leakfiltercallback"})," ",(0,r.kt)("strong",{parentName:"h3"},"LeakFilterCallback"),": (",(0,r.kt)("inlineCode",{parentName:"h3"},"node"),": ",(0,r.kt)("a",{parentName:"h3",href:"/memlab/docs/api/interfaces/core_src.IHeapNode"},(0,r.kt)("inlineCode",{parentName:"a"},"IHeapNode")),", ",(0,r.kt)("inlineCode",{parentName:"h3"},"snapshot"),": ",(0,r.kt)("a",{parentName:"h3",href:"/memlab/docs/api/interfaces/core_src.IHeapSnapshot"},(0,r.kt)("inlineCode",{parentName:"a"},"IHeapSnapshot")),", ",(0,r.kt)("inlineCode",{parentName:"h3"},"leakedNodeIds"),": ",(0,r.kt)("inlineCode",{parentName:"h3"},"HeapNodeIdSet"),") => ",(0,r.kt)("inlineCode",{parentName:"h3"},"boolean")),(0,r.kt)("p",null,"Callback that can be used to define a logic to filter the\nleaked objects. The callback is only called for every node\nallocated but not released from the target interaction\nin the heap snapshot."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Parameters"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node"),": ",(0,r.kt)("a",{parentName:"li",href:"/memlab/docs/api/interfaces/core_src.IHeapNode"},(0,r.kt)("inlineCode",{parentName:"a"},"IHeapNode"))," | the node that is kept alive in the memory in the heap snapshot"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"snapshot"),": ",(0,r.kt)("a",{parentName:"li",href:"/memlab/docs/api/interfaces/core_src.IHeapSnapshot"},(0,r.kt)("inlineCode",{parentName:"a"},"IHeapSnapshot"))," | the snapshot of target interaction"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"leakedNodeIds"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"HeapNodeIdSet")," | the set of leaked node ids"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Returns"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean")," | the value indicating whether the given node in the snapshot\nshould be considered as leaked."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Examples"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// any node in the heap snapshot that is greater than 1MB\nfunction leakFilter(node, _snapshot, _leakedNodeIds) {\n return node.retainedSize > 1000000;\n};\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Source"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/11fa80b/packages/core/src/lib/Types.ts#L346"},"core/src/lib/Types.ts:346"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-predicatort-node-t--boolean"},(0,r.kt)("a",{id:"predicator",name:"predicator"})," ",(0,r.kt)("strong",{parentName:"h3"},"Predicator"),"<",(0,r.kt)("inlineCode",{parentName:"h3"},"T"),">",": (",(0,r.kt)("inlineCode",{parentName:"h3"},"node"),": ",(0,r.kt)("inlineCode",{parentName:"h3"},"T"),") => ",(0,r.kt)("inlineCode",{parentName:"h3"},"boolean")),(0,r.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"T")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Returns"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Source"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/11fa80b/packages/core/src/lib/Types.ts#L45"},"core/src/lib/Types.ts:45"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"-runmetainfo-object"},(0,r.kt)("a",{id:"runmetainfo",name:"runmetainfo"})," ",(0,r.kt)("strong",{parentName:"h3"},"RunMetaInfo"),": ",(0,r.kt)("inlineCode",{parentName:"h3"},"Object")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"app")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"browserInfo")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"IBrowserInfo"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"interaction")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Source"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/11fa80b/packages/core/src/lib/Types.ts#L802"},"core/src/lib/Types.ts:802"))))),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"dumpnodeheapsnapshot"},(0,r.kt)("a",{id:"dumpnodeheapsnapshot"}),(0,r.kt)("strong",{parentName:"h3"},"dumpNodeHeapSnapshot"),"()"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Returns"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Source"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/11fa80b/packages/core/src/lib/NodeHeap.ts#L76"},"core/src/lib/NodeHeap.ts:76"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getnodeinnocentheap"},(0,r.kt)("a",{id:"getnodeinnocentheap"}),(0,r.kt)("strong",{parentName:"h3"},"getNodeInnocentHeap"),"()"),(0,r.kt)("p",null,"Take a heap snapshot of the current program state\nand parse it as ",(0,r.kt)("a",{parentName:"p",href:"/memlab/docs/api/interfaces/core_src.IHeapSnapshot"},"IHeapSnapshot"),". Notice that\nthis API does not calculate some heap analysis meta data\nfor heap analysis. But this also means faster heap parsing."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Returns"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"Promise"),"<",(0,r.kt)("a",{parentName:"li",href:"/memlab/docs/api/interfaces/core_src.IHeapSnapshot"},(0,r.kt)("inlineCode",{parentName:"a"},"IHeapSnapshot")),">"," | heap representation without heap analysis meta data.")),(0,r.kt)("p",null,"If you need to get the heap snapshot with heap analysis meta data\nuse ",(0,r.kt)("a",{parentName:"p",href:"/memlab/docs/api/modules/core_src#dumpnodeheapsnapshot"},"dumpNodeHeapSnapshot")," and ",(0,r.kt)("a",{parentName:"p",href:"/memlab/docs/api/modules/heap_analysis_src#getheapfromfile"},"getHeapFromFile"),",\nfor example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import type {IHeapSnapshot} from '@memlab/core';\nimport {dumpNodeHeapSnapshot} from '@memlab/core';\nimport {getHeapFromFile} from '@memlab/heap-analysis';\n\n(async function () {\n  const heapFile = dumpNodeHeapSnapshot();\n  const heap: IHeapSnapshot = await getHeapFromFile(heapFile);\n})();\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Source"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/11fa80b/packages/core/src/lib/NodeHeap.ts#L107"},"core/src/lib/NodeHeap.ts:107"))))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"tagobjectto-tag"},(0,r.kt)("a",{id:"tagobject"}),(0,r.kt)("strong",{parentName:"h3"},"tagObject"),"<",(0,r.kt)("inlineCode",{parentName:"h3"},"T"),">","(",(0,r.kt)("inlineCode",{parentName:"h3"},"o"),", ",(0,r.kt)("inlineCode",{parentName:"h3"},"tag"),")"),(0,r.kt)("p",null,"Tags a string marker to an object instance, which can later be checked by\n",(0,r.kt)("a",{parentName:"p",href:"/memlab/docs/api/interfaces/core_src.IHeapSnapshot#hasobjectwithtag"},"hasObjectWithTag"),". This API does not modify the object instance in\nany way (e.g., no additional or hidden properties added to the tagged\nobject)."),(0,r.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("inlineCode",{parentName:"td"},"object"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Parameters"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"o"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"T")," | specify the object instance you want to tag, you cannot tag a ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Glossary/Primitive"},"primitive"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tag"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," | marker name to tag on the object instance"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Returns"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"T")," | returns the tagged object instance (same reference as\nthe input argument ",(0,r.kt)("inlineCode",{parentName:"li"},"o"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Examples"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import type {IHeapSnapshot, AnyValue} from '@memlab/core';\nimport {config, getNodeInnocentHeap, tagObject} from '@memlab/core';\n\ntest('memory test', async () => {\n  config.muteConsole = true;\n  const o1: AnyValue = {};\n  let o2: AnyValue = {};\n\n  // tag o1 with marker: \"memlab-mark-1\", does not modify o1 in any way\n  tagObject(o1, 'memlab-mark-1');\n  // tag o2 with marker: \"memlab-mark-2\", does not modify o2 in any way\n  tagObject(o2, 'memlab-mark-2');\n\n  o2 = null;\n\n  const heap: IHeapSnapshot = await getNodeInnocentHeap();\n\n  // expect object with marker \"memlab-mark-1\" exists\n  expect(heap.hasObjectWithTag('memlab-mark-1')).toBe(true);\n\n  // expect object with marker \"memlab-mark-2\" can be GCed\n  expect(heap.hasObjectWithTag('memlab-mark-2')).toBe(false);\n\n}, 30000);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Source"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/memlab/blob/11fa80b/packages/core/src/lib/NodeHeap.ts#L68"},"core/src/lib/NodeHeap.ts:68"))))))}m.isMDXComponent=!0}}]);