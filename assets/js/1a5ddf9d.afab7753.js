"use strict";(self.webpackChunkmemlab_website=self.webpackChunkmemlab_website||[]).push([[4787],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>p});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(n),p=a,b=u["".concat(s,".").concat(p)]||u[p]||d[p]||i;return n?r.createElement(b,o(o({ref:t},m),{},{components:n})):r.createElement(b,o({ref:t},m))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7925:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={id:"guides-find-leaks"},o="Find Memory Leaks Not Reported",l={unversionedId:"guides/guides-find-leaks",id:"guides/guides-find-leaks",title:"Find Memory Leaks Not Reported",description:"By default, memlab reports high-confidence memory leaks (filtered out by its",source:"@site/docs/guides/03-find-leak.md",sourceDirName:"guides",slug:"/guides/guides-find-leaks",permalink:"/memlab/docs/guides/guides-find-leaks",draft:!1,editUrl:"https://github.com/facebookincubator/memlab/blob/main/website/docs/guides/03-find-leak.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"guides-find-leaks"},sidebar:"sidebar",previous:{title:"Detect Oversized Object",permalink:"/memlab/docs/guides/guides-detect-oversized-object"},next:{title:"Set up Continuous Test",permalink:"/memlab/docs/guides/integration-and-file-structure"}},s={},c=[],m={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"find-memory-leaks-not-reported"},"Find Memory Leaks Not Reported"),(0,a.kt)("p",null,"By default, memlab reports high-confidence memory leaks (filtered out by its\nbuilt-in leak detector). In case some memory leaks exist but memlab\ndoes not report the leaks, this tutorial shows other options to surface\nsuspicious heap objects."),(0,a.kt)("p",null,"Let's start by running the following command. Make sure to not specify any leak\nfilter in the scenario file. MemLab will apply its build-in leak detectors\nwhich finds detached DOM elements and unmounted React Fiber nodes.\nSometimes this may not detect any memory leaks."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"memlab run --scenario ~/memlab/scenarios/unbound-object.js\n")),(0,a.kt)("p",null,"Now let's run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"memlab find-leaks --trace-all-objects\n")),(0,a.kt)("p",null,"This will ask memlab to treat every object allocated by the target interaction\nas a memory leak. In this case, there are a bunch of objects not\nreleased from the target interaction."),(0,a.kt)("p",null,"memlab clusters the retainer traces of the leaked objects and print them in\ndecreasing order based on the\n",(0,a.kt)("a",{parentName:"p",href:"https://developer.chrome.com/docs/devtools/memory-problems/memory-101/#retained_size"},"aggregated retained sizes"),"\nof leak clusters."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"MemLab found 46 leak(s)\n--Similar leaks in this run: 4--\n--Retained size of leaked objects: 8.3MB--\n[Window] (native) @35847 [8.3MB]\n  --20 (element)---\x3e  [InternalNode] (native) @130981728 [8.3MB]\n  --8 (element)---\x3e  [InternalNode] (native) @130980288 [8.3MB]\n  --1 (element)---\x3e  [EventListener] (native) @131009888 [8.3MB]\n  --1 (element)---\x3e  [V8EventListener] (native) @224808192 [8.3MB]\n  --1 (element)---\x3e  [eventHandler] (closure) @168079 [8.3MB]\n  --context (internal)---\x3e  [<function scope>] (object) @181905 [8.3MB]\n  --bigArray (variable)---\x3e  [Array] (object) @182925 [8.3MB]\n  --elements (internal)---\x3e  [(object elements)] (array) @182929 [8.3MB]\n\n\n--Similar leaks in this run: 79--\n--Retained size of leaked objects: 16.9KB--\n[Window] (native) @35847 [8.3MB]\n  --17 (element)---\x3e  [InternalNode] (native) @224820352 [0 byte]\n  --3 (element)---\x3e  [InternalNode] (native) @224766112 [0 byte]\n  --1 (element)---\x3e  [InternalNode] (native) @224771072 [0 byte]\n  --1 (element)---\x3e  [InternalNode] (native) @224723840 [540 bytes]\n  --1 (element)---\x3e  [InternalNode] (native) @224723680 [540 bytes]\n  --1 (element)---\x3e  [InternalNode] (native) @224818752 [84 bytes]\n\n\n--Similar leaks in this run: 62--\n--Retained size of leaked objects: 12.8KB--\n[Window] (native) @35847 [8.3MB]\n  --4 (element)---\x3e  [HTMLDocument] (native) @35845 [6KB]\n  --part of key -> value pair in ephemeron table (internal)---\x3e  [HTMLDocument] (object) @167199 [28 bytes]\n  --__proto__ (property)---\x3e  [HTMLDocument] (object) @173029 [144 bytes]\n  --properties (internal)---\x3e  [(object properties)] (array) @182697 [76 bytes]\n\n...\n")),(0,a.kt)("p",null,"One way to view the retainer traces in a slightly less verbose would be to apply\n",(0,a.kt)("a",{parentName:"p",href:"/docs/api/interfaces/core_src.ILeakFilter"},"leak-filter")," or to use ",(0,a.kt)("inlineCode",{parentName:"p"},"--trace-object-size-above"),".\nThe below will only show the traces whose ",(0,a.kt)("inlineCode",{parentName:"p"},"retainedSize")," is greater than ",(0,a.kt)("inlineCode",{parentName:"p"},"1MB")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"memlab find-leaks --trace-object-size-above 1000000\n")),(0,a.kt)("p",null,"The result will look like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"MemLab found 1 leak(s)\n--Similar leaks in this run: 4--\n--Retained size of leaked objects: 8.3MB--\n[Window] (native) @33651 [8.3MB]\n  --20 (element)---\x3e  [InternalNode] (native) @216691968 [8.3MB]\n  --8 (element)---\x3e  [InternalNode] (native) @216691168 [8.3MB]\n  --1 (element)---\x3e  [EventListener] (native) @216563936 [8.3MB]\n  --1 (element)---\x3e  [V8EventListener] (native) @216563776 [8.3MB]\n  --1 (element)---\x3e  [eventHandler] (closure) @160711 [8.3MB]\n  --context (internal)---\x3e  [<function scope>] (object) @176463 [8.3MB]\n  --bigArray (variable)---\x3e  [Array] (object) @176465 [8.3MB]\n  --elements (internal)---\x3e  [(object elements)] (array) @176489 [8.3MB]\n")),(0,a.kt)("p",null,"Another options is using ",(0,a.kt)("inlineCode",{parentName:"p"},"--ignore-leak-cluster-size-below")," which ignore memory\nleak clusters with aggregated retained size smaller than a specified threshold.\nTo learn more about the ",(0,a.kt)("inlineCode",{parentName:"p"},"find-leaks")," command, please run ",(0,a.kt)("inlineCode",{parentName:"p"},"memlab find-leaks -h"),"."))}d.isMDXComponent=!0}}]);