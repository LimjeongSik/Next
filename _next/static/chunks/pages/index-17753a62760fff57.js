(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(85)}])},3740:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(6495).Z,r=i(2648).Z,o=i(1598).Z,a=i(7273).Z,l=o(i(7294)),s=r(i(2636)),c=i(7757),u=i(3735),d=i(3341);i(4210);var f=r(i(7746));let g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e){return void 0!==e.default}function p(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,i,r,o,a,l){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===i&&a(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,o=!1;r.current(n({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}}))}(null==o?void 0:o.current)&&o.current(e)}})}let v=l.forwardRef((e,t)=>{var{imgAttributes:i,heightInt:r,widthInt:o,qualityInt:s,className:c,imgStyle:u,blurStyle:d,isLazy:f,fill:g,placeholder:h,loading:p,srcString:v,config:w,unoptimized:b,loader:y,onLoadRef:_,onLoadingCompleteRef:E,setBlurComplete:j,setShowAltText:S,onLoad:x,onError:C}=e,z=a(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return p=f?"lazy":p,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},z,{loading:p,width:o,height:r,decoding:"async","data-nimg":g?"fill":"1",className:c,style:n({},u,d)},i,{ref:l.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(C&&(e.src=e.src),e.complete&&m(e,v,h,_,E,j,b))},[v,h,_,E,j,C,b,t]),onLoad:e=>{let t=e.currentTarget;m(t,v,h,_,E,j,b)},onError:e=>{S(!0),"blur"===h&&j(!0),C&&C(e)}})))}),w=l.forwardRef((e,t)=>{let i,r;var o,{src:m,sizes:w,unoptimized:b=!1,priority:y=!1,loading:_,className:E,quality:j,width:S,height:x,fill:C,style:z,onLoad:O,onLoadingComplete:P,placeholder:R="empty",blurDataURL:k,layout:I,objectFit:M,objectPosition:N,lazyBoundary:A,lazyRoot:L}=e,T=a(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let B=l.useContext(d.ImageConfigContext),D=l.useMemo(()=>{let e=g||B||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return n({},e,{allSizes:t,deviceSizes:i})},[B]),F=T,W=F.loader||f.default;delete F.loader;let Z="__next_img_default"in W;if(Z){if("custom"===D.loader)throw Error('Image with src "'.concat(m,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=W;W=t=>{let{config:i}=t,n=a(t,["config"]);return e(n)}}if(I){"fill"===I&&(C=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[I];e&&(z=n({},z,e));let t={responsive:"100vw",fill:"100vw"}[I];t&&!w&&(w=t)}let q="",G=p(S),U=p(x);if("object"==typeof(o=m)&&(h(o)||void 0!==o.src)){let e=h(m)?m.default:m;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(i=e.blurWidth,r=e.blurHeight,k=k||e.blurDataURL,q=e.src,!C){if(G||U){if(G&&!U){let t=G/e.width;U=Math.round(e.height*t)}else if(!G&&U){let t=U/e.height;G=Math.round(e.width*t)}}else G=e.width,U=e.height}}let V=!y&&("lazy"===_||void 0===_);((m="string"==typeof m?m:q).startsWith("data:")||m.startsWith("blob:"))&&(b=!0,V=!1),D.unoptimized&&(b=!0),Z&&m.endsWith(".svg")&&!D.dangerouslyAllowSVG&&(b=!0);let[J,X]=l.useState(!1),[Y,H]=l.useState(!1),$=p(j),K=Object.assign(C?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:M,objectPosition:N}:{},Y?{}:{color:"transparent"},z),Q="blur"===R&&k&&!J?{backgroundSize:K.objectFit||"cover",backgroundPosition:K.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:G,heightInt:U,blurWidth:i,blurHeight:r,blurDataURL:k,objectFit:K.objectFit}),'")')}:{},ee=function(e){let{config:t,src:i,unoptimized:n,width:r,quality:o,sizes:a,loader:l}=e;if(n)return{src:i,srcSet:void 0,sizes:void 0};let{widths:s,kind:c}=function(e,t,i){let{deviceSizes:n,allSizes:r}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(i);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:r.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:r,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let o=[...new Set([t,2*t].map(e=>r.find(t=>t>=e)||r[r.length-1]))];return{widths:o,kind:"x"}}(t,r,a),u=s.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:s.map((e,n)=>"".concat(l({config:t,src:i,quality:o,width:e})," ").concat("w"===c?e:n+1).concat(c)).join(", "),src:l({config:t,src:i,quality:o,width:s[u]})}}({config:D,src:m,unoptimized:b,width:G,quality:$,sizes:w,loader:W}),et=m,ei={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:F.crossOrigin},en=l.useRef(O);l.useEffect(()=>{en.current=O},[O]);let er=l.useRef(P);l.useEffect(()=>{er.current=P},[P]);let eo=n({isLazy:V,imgAttributes:ee,heightInt:U,widthInt:G,qualityInt:$,className:E,imgStyle:K,blurStyle:Q,loading:_,config:D,fill:C,unoptimized:b,placeholder:R,loader:W,srcString:et,onLoadRef:en,onLoadingCompleteRef:er,setBlurComplete:X,setShowAltText:H},F);return l.default.createElement(l.default.Fragment,null,l.default.createElement(v,Object.assign({},eo,{ref:t})),y?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},ei))):null)});t.default=w,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:i,blurWidth:n,blurHeight:r,blurDataURL:o,objectFit:a}=e,l=n||t,s=r||i,c=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(l," ").concat(s,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&r?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E")}},7746:function(e,t){"use strict";function i(e){let{config:t,src:i,width:n,quality:r}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(r||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i.__next_img_default=!0,t.default=i},85:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return u}});var n=i(7297),r=i(5893),o=i(9521),a=i(5675),l=i.n(a),s=i(3372);function c(){let e=(0,n.Z)(["\n    background: red;\n"]);return c=function(){return e},e}function u(){return(0,r.jsxs)(d,{children:[(0,r.jsx)(l(),{src:"".concat(s.O,"/images/ic__logo.png"),width:31,height:26,alt:"로고",priority:!0}),(0,r.jsx)("h2",{children:"메인페이지 테스트입니다."}),(0,r.jsx)("br",{}),(0,r.jsx)("h3",{children:"MainPage Test"})]})}let d=o.ZP.div.withConfig({componentId:"sc-53ff8eb4-0"})(c())},5675:function(e,t,i){e.exports=i(3740)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);