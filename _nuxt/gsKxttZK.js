const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./IOGu5iF8.js","./ZI4xVPk_.js","./DlAUqK2U.js","./BSATFB-H.js","./entry.Dh0XgGvm.css","./wV2dXhWE.js","./jUil1X7l.js","./About.gVmlhg9l.css","./BXq06AZE.js","./DBYTsfFG.js","./D9FJlH7I.js","./C-84-2SA.js","./BkID7Sb9.js","./BhNCZP6o.js","./C-doXl6T.js","./BfsBA_bm.js","./EopYeKCA.js","./D3EzAPb4.js"])))=>i.map(i=>d[i]);
import{H as ln,I as Nn,u as zn,J as Hn,L as gn,M as Fn,N as Wn,m as rn,O as Vn,P as Q,d as on,q as Kn,x as qn,z as R,Q as mn,R as Xn,S as hn,U as Yn,V as sn,W as yn,X as I,Y as Z,Z as F,$ as vn,a0 as Qn,a1 as Zn,_ as E,i as Gn,E as Jn,n as ne,D as cn,a2 as ee,a3 as te,r as le,a4 as re,a5 as oe,a6 as ae,a7 as ie}from"./BSATFB-H.js";import{t as ue}from"./jUil1X7l.js";function se(){return rn().public["nuxt-scripts"]}const ce=["onNuxtReady","client"],pe=["preconnect","dns-prefetch"];function de(n,e,t){const{src:l}=n,o=Vn(l),r=e&&pe.includes(e),i=r?`${o.protocol}${o.host}`:l,s=!!o.host;if(!e||r&&!s)return;const c={href:i,rel:e,...Se(n,["crossorigin","referrerpolicy","fetchpriority","integrity"])},u={fetchpriority:"low"};return e==="preload"&&(u.as="script"),s&&(u.crossorigin="anonymous",u.referrerpolicy="no-referrer"),Q({link:[ln(c,u)]},{head:t,tagPriority:"high"})}function fe(n,e){var c,u,p;n=typeof n=="string"?{src:n}:n,e=ln(e,(c=se())==null?void 0:c.defaultScriptOptions);const t=String(Nn(n)),l=zn(),o=e.head||Hn();l.$scripts=l.$scripts||gn({});const r=!!((u=l.$scripts)!=null&&u[t]);!e.warmupStrategy&&ce.includes(String(e.trigger))&&(e.warmupStrategy="preload"),e.trigger==="onNuxtReady"&&(e.trigger=Fn),r||(p=performance==null?void 0:performance.mark)==null||p.call(performance,"mark_feature_usage",{detail:{feature:e.performanceMarkFeature??`nuxt-scripts:${t}`}});const i=Wn(n,e);i.warmup=d=>{i._warmupEl||(i._warmupEl=de(n,d,o))},e.warmupStrategy&&i.warmup(e.warmupStrategy);const s=i.remove;return i.remove=()=>{var d;return(d=i._warmupEl)==null||d.dispose(),l.$scripts[t]=void 0,s()},l.$scripts[t]=i,i}const $=Object.assign(()=>{},{__unenv__:!0}),ge=$,me=$,he=$,ye=$,D=$,X=$;function ve(n){return(rn().public.scripts||{})[n]}function be(n,e,t){const l=ve(n),o=Object.assign(t,typeof l=="object"?l:{}),r=e(o),i=ln(o.scriptInput,r.scriptInput,{key:n}),s=Object.assign((o==null?void 0:o.scriptOptions)||{},r.scriptOptions||{}),c=s.beforeInit;return s.beforeInit=()=>{var u;c==null||c(),(u=r.clientInit)==null||u.call(r)},fe(i,s)}function Se(n,e){const t={};for(const l of e)l in n&&(t[l]=n[l]);return t}const pn=[D("hash"),D("outbound-links"),D("file-downloads"),D("tagged-events"),D("revenue"),D("pageview-props"),D("compat"),D("local"),D("manual")];ge({domain:he(),extension:ye(X([X(pn),me(X(pn))]))});function Ce(n){return be("plausibleAnalytics",e=>{const t=Array.isArray(e==null?void 0:e.extension)?e.extension.join("."):[e==null?void 0:e.extension];return{scriptInput:{src:e!=null&&e.extension?`https://plausible.io/js/script.${t}.js`:"https://plausible.io/js/script.js","data-domain":e==null?void 0:e.domain},schema:void 0,scriptOptions:{use(){return{plausible:window.plausible}}}}},n)}const we=on({__name:"FolioMeta",props:{page:{},isWriting:{type:Boolean}},setup(n){Ce({domain:"canvas.hrcd.fr",scriptInput:{src:"https://analytics.hrcd.fr/js/script.js"}});const e=Kn(),{link:t,seo:l,profile:o}=qn(),r=R(()=>{var s,c,u,p;return{title:n.isWriting?(s=n.page)==null?void 0:s.title:((c=n.page)==null?void 0:c.title)||l.title,description:n.isWriting?(u=n.page)==null?void 0:u.description:((p=n.page)==null?void 0:p.description)||l.description}}),i=s=>e.path==="/"?s||`${l.title}`:n.isWriting?s:`${s} | ${l.title}`;return Q({title:r.value.title,meta:[{property:"og:site_name",content:l.title},{property:"og:title",content:r.value.title},{property:"og:description",content:r.value.description},{property:"og:type",content:n.isWriting?"article":"website"},{property:"og:url",content:l.url},{name:"author",content:o.name},{name:"description",content:r.value.description},{name:"twitter:title",content:r.value.title},{name:"twitter:description",content:r.value.description},{name:"twitter:card",content:"summary_large_image"}]}),Q({title:r.value.title,titleTemplate:i,meta:[{name:"viewport",content:"width=device-width, initial-scale=1.0"},{name:"charset",content:"utf-8"},{name:"robots",content:"index, follow"},{name:"color-scheme",content:"light dark"}],link:t}),(s,c)=>mn(s.$slots,"default")}}),mt=Object.assign(we,{__name:"FolioMeta"}),z=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"];class H{constructor(e,t,l){this.property=e,this.normal=t,l&&(this.space=l)}}H.prototype.property={};H.prototype.normal={};H.prototype.space=null;function bn(n,e){const t={},l={};let o=-1;for(;++o<n.length;)Object.assign(t,n[o].property),Object.assign(l,n[o].normal);return new H(t,l,e)}function G(n){return n.toLowerCase()}class P{constructor(e,t){this.property=e,this.attribute=t}}P.prototype.space=null;P.prototype.boolean=!1;P.prototype.booleanish=!1;P.prototype.overloadedBoolean=!1;P.prototype.number=!1;P.prototype.commaSeparated=!1;P.prototype.spaceSeparated=!1;P.prototype.commaOrSpaceSeparated=!1;P.prototype.mustUseProperty=!1;P.prototype.defined=!1;let ke=0;const f=L(),b=L(),Sn=L(),a=L(),h=L(),j=L(),x=L();function L(){return 2**++ke}const J=Object.freeze(Object.defineProperty({__proto__:null,boolean:f,booleanish:b,commaOrSpaceSeparated:x,commaSeparated:j,number:a,overloadedBoolean:Sn,spaceSeparated:h},Symbol.toStringTag,{value:"Module"})),Y=Object.keys(J);class an extends P{constructor(e,t,l,o){let r=-1;if(super(e,t),dn(this,"space",o),typeof l=="number")for(;++r<Y.length;){const i=Y[r];dn(this,Y[r],(l&J[i])===J[i])}}}an.prototype.defined=!0;function dn(n,e,t){t&&(n[e]=t)}const xe={}.hasOwnProperty;function B(n){const e={},t={};let l;for(l in n.properties)if(xe.call(n.properties,l)){const o=n.properties[l],r=new an(l,n.transform(n.attributes||{},l),o,n.space);n.mustUseProperty&&n.mustUseProperty.includes(l)&&(r.mustUseProperty=!0),e[l]=r,t[G(l)]=l,t[G(r.attribute)]=l}return new H(e,t,n.space)}const Cn=B({space:"xlink",transform(n,e){return"xlink:"+e.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),wn=B({space:"xml",transform(n,e){return"xml:"+e.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function kn(n,e){return e in n?n[e]:e}function xn(n,e){return kn(n,e.toLowerCase())}const Pn=B({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:xn,properties:{xmlns:null,xmlnsXLink:null}}),On=B({transform(n,e){return e==="role"?e:"aria-"+e.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:b,ariaAutoComplete:null,ariaBusy:b,ariaChecked:b,ariaColCount:a,ariaColIndex:a,ariaColSpan:a,ariaControls:h,ariaCurrent:null,ariaDescribedBy:h,ariaDetails:null,ariaDisabled:b,ariaDropEffect:h,ariaErrorMessage:null,ariaExpanded:b,ariaFlowTo:h,ariaGrabbed:b,ariaHasPopup:null,ariaHidden:b,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:h,ariaLevel:a,ariaLive:null,ariaModal:b,ariaMultiLine:b,ariaMultiSelectable:b,ariaOrientation:null,ariaOwns:h,ariaPlaceholder:null,ariaPosInSet:a,ariaPressed:b,ariaReadOnly:b,ariaRelevant:null,ariaRequired:b,ariaRoleDescription:h,ariaRowCount:a,ariaRowIndex:a,ariaRowSpan:a,ariaSelected:b,ariaSetSize:a,ariaSort:null,ariaValueMax:a,ariaValueMin:a,ariaValueNow:a,ariaValueText:null,role:null}}),Pe=B({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:xn,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:j,acceptCharset:h,accessKey:h,action:null,allow:null,allowFullScreen:f,allowPaymentRequest:f,allowUserMedia:f,alt:null,as:null,async:f,autoCapitalize:null,autoComplete:h,autoFocus:f,autoPlay:f,blocking:h,capture:null,charSet:null,checked:f,cite:null,className:h,cols:a,colSpan:null,content:null,contentEditable:b,controls:f,controlsList:h,coords:a|j,crossOrigin:null,data:null,dateTime:null,decoding:null,default:f,defer:f,dir:null,dirName:null,disabled:f,download:Sn,draggable:b,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:f,formTarget:null,headers:h,height:a,hidden:f,high:a,href:null,hrefLang:null,htmlFor:h,httpEquiv:h,id:null,imageSizes:null,imageSrcSet:null,inert:f,inputMode:null,integrity:null,is:null,isMap:f,itemId:null,itemProp:h,itemRef:h,itemScope:f,itemType:h,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:f,low:a,manifest:null,max:null,maxLength:a,media:null,method:null,min:null,minLength:a,multiple:f,muted:f,name:null,nonce:null,noModule:f,noValidate:f,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:f,optimum:a,pattern:null,ping:h,placeholder:null,playsInline:f,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:f,referrerPolicy:null,rel:h,required:f,reversed:f,rows:a,rowSpan:a,sandbox:h,scope:null,scoped:f,seamless:f,selected:f,shadowRootClonable:f,shadowRootDelegatesFocus:f,shadowRootMode:null,shape:null,size:a,sizes:null,slot:null,span:a,spellCheck:b,src:null,srcDoc:null,srcLang:null,srcSet:null,start:a,step:null,style:null,tabIndex:a,target:null,title:null,translate:null,type:null,typeMustMatch:f,useMap:null,value:b,width:a,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:h,axis:null,background:null,bgColor:null,border:a,borderColor:null,bottomMargin:a,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:f,declare:f,event:null,face:null,frame:null,frameBorder:null,hSpace:a,leftMargin:a,link:null,longDesc:null,lowSrc:null,marginHeight:a,marginWidth:a,noResize:f,noHref:f,noShade:f,noWrap:f,object:null,profile:null,prompt:null,rev:null,rightMargin:a,rules:null,scheme:null,scrolling:b,standby:null,summary:null,text:null,topMargin:a,valueType:null,version:null,vAlign:null,vLink:null,vSpace:a,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:f,disableRemotePlayback:f,prefix:null,property:null,results:a,security:null,unselectable:null}}),Oe=B({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:kn,properties:{about:x,accentHeight:a,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:a,amplitude:a,arabicForm:null,ascent:a,attributeName:null,attributeType:null,azimuth:a,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:a,by:null,calcMode:null,capHeight:a,className:h,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:a,diffuseConstant:a,direction:null,display:null,dur:null,divisor:a,dominantBaseline:null,download:f,dx:null,dy:null,edgeMode:null,editable:null,elevation:a,enableBackground:null,end:null,event:null,exponent:a,externalResourcesRequired:null,fill:null,fillOpacity:a,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:j,g2:j,glyphName:j,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:a,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:a,horizOriginX:a,horizOriginY:a,id:null,ideographic:a,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:a,k:a,k1:a,k2:a,k3:a,k4:a,kernelMatrix:x,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:a,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:a,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:a,overlineThickness:a,paintOrder:null,panose1:null,path:null,pathLength:a,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:h,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:a,pointsAtY:a,pointsAtZ:a,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:x,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:x,rev:x,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:x,requiredFeatures:x,requiredFonts:x,requiredFormats:x,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:a,specularExponent:a,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:a,strikethroughThickness:a,string:null,stroke:null,strokeDashArray:x,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:a,strokeOpacity:a,strokeWidth:null,style:null,surfaceScale:a,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:x,tabIndex:a,tableValues:null,target:null,targetX:a,targetY:a,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:x,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:a,underlineThickness:a,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:a,values:null,vAlphabetic:a,vMathematical:a,vectorEffect:null,vHanging:a,vIdeographic:a,version:null,vertAdvY:a,vertOriginX:a,vertOriginY:a,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:a,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),_e=/^data[-\w.:]+$/i,fn=/-[a-z]/g,Te=/[A-Z]/g;function De(n,e){const t=G(e);let l=e,o=P;if(t in n.normal)return n.property[n.normal[t]];if(t.length>4&&t.slice(0,4)==="data"&&_e.test(e)){if(e.charAt(4)==="-"){const r=e.slice(5).replace(fn,Ae);l="data"+r.charAt(0).toUpperCase()+r.slice(1)}else{const r=e.slice(4);if(!fn.test(r)){let i=r.replace(Te,Re);i.charAt(0)!=="-"&&(i="-"+i),e="data"+i}}o=an}return new o(l,e)}function Re(n){return"-"+n.toLowerCase()}function Ae(n){return n.charAt(1).toUpperCase()}const Ee=bn([wn,Cn,Pn,On,Pe],"html");bn([wn,Cn,Pn,On,Oe],"svg");const Le=["p","h1","h2","h3","h4","h5","h6","li"];function W(n,e){return n.type===e||typeof n.type=="object"&&n.type.tag===e||n.tag===e}function un(n){return W(n,"text")||W(n,Symbol.for("v-txt"))}function _n(n){var e;return Array.isArray(n.children)||typeof n.children=="string"?n.children:typeof((e=n.children)==null?void 0:e.default)=="function"?n.children.default():[]}function nn(n){if(!n)return"";if(Array.isArray(n))return n.map(nn).join("");if(un(n))return n.value||n.children||"";const e=_n(n);return Array.isArray(e)?e.map(nn).filter(Boolean).join(""):""}function Tn(n,e=[]){if(Array.isArray(n))return n.flatMap(l=>Tn(l,e));let t=n;return e.some(l=>l==="*"||W(n,l))&&(t=_n(n)||n,!Array.isArray(t)&&Le.some(l=>W(n,l))&&(t=[t])),t}function Dn(n,e=[]){return n=Array.isArray(n)?n:[n],e.length?n.flatMap(t=>Dn(Tn(t,[e[0]]),e.slice(1))).filter(t=>!(un(t)&&nn(t).trim()==="")):n}function Rn(n,e=[]){return typeof e=="string"&&(e=e.split(/[,\s]/).map(t=>t.trim()).filter(Boolean)),e.length?Dn(n,e).reduce((t,l)=>(un(l)?typeof t[t.length-1]=="string"?t[t.length-1]+=l.children:t.push(l.children):t.push(l),t),[]):n}function Me(n,e){return e.reduce((t,l)=>{const o=Ie(n,l);return o!==void 0&&(t[l]=o),t},{})}function Ie(n,e){return e.split(".").reduce((t,l)=>t&&t[l],n)}const en="default",An=/^@|^v-on:/,En=/^:|^v-bind:/,je=/^v-model/,$e=["select","textarea","input"],Be=["math","svg"],Ue=Object.fromEntries(["p","a","blockquote","code","pre","code","em","h1","h2","h3","h4","h5","h6","hr","img","ul","ol","li","strong","table","thead","tbody","td","th","tr","script"].map(n=>[n,`prose-${n}`])),Ne=on({name:"MDCRenderer",props:{body:{type:Object,required:!0},data:{type:Object,default:()=>({})},class:{type:[String,Object],default:void 0},tag:{type:[String,Boolean],default:void 0},prose:{type:Boolean,default:void 0},components:{type:Object,default:()=>({})},unwrap:{type:[Boolean,String],default:!1}},async setup(n){var c,u,p,d,m,v,k,w;const e=(p=(u=(c=Xn())==null?void 0:c.appContext)==null?void 0:u.app)==null?void 0:p.$nuxt,t=(e==null?void 0:e.$route)||(e==null?void 0:e._route),{mdc:l}=((d=e==null?void 0:e.$config)==null?void 0:d.public)||{},o={...(m=l==null?void 0:l.components)!=null&&m.prose&&n.prose!==!1?Ue:{},...((v=l==null?void 0:l.components)==null?void 0:v.map)||{},...hn(((w=(k=n.data)==null?void 0:k.mdc)==null?void 0:w.components)||{}),...n.components},r=R(()=>{var O;const S=(((O=n.body)==null?void 0:O.children)||[]).map(T=>T.tag||T.type).filter(T=>!z.includes(T));return Array.from(new Set(S)).sort().join(".")}),i=gn({...n.data});Yn(()=>n.data,S=>{Object.assign(i,S)}),await Ze(n.body,{tags:o});function s(S,O){const T=S.split(".").length-1;return S.split(".").reduce((A,g,y)=>y==T&&A?(A[g]=O,A[g]):typeof A=="object"?A[g]:void 0,i)}return{tags:o,contentKey:r,route:t,runtimeData:i,updateRuntimeData:s}},render(n){var v,k;const{tags:e,tag:t,body:l,data:o,contentKey:r,route:i,unwrap:s,runtimeData:c,updateRuntimeData:u}=n;if(!l)return null;const p={...o,tags:e,$route:i,runtimeData:c,updateRuntimeData:u},d=t!==!1?tn(t||((v=p.component)==null?void 0:v.name)||p.component||"div"):void 0;return d?sn(d,{...(k=p.component)==null?void 0:k.props,class:n.class,...this.$attrs,key:r},{default:m}):m==null?void 0:m();function m(){const w=Ln(l,sn,{documentMeta:p,parentScope:p,resolveComponent:tn});return w!=null&&w.default?s?Rn(w.default(),typeof s=="string"?s.split(" "):["*"]):w.default():null}}});function ze(n,e,t){const{documentMeta:l,parentScope:o,resolveComponent:r}=t;if(n.type==="text")return e(F,n.value);if(n.type==="comment")return e(Qn,null,n.value);const i=n.tag,s=In(n,l.tags);if(n.tag==="binding")return He(n,e,l,o);const c=Mn(s)?d=>d:r,u=c(s);typeof u=="object"&&(u.tag=i);const p=Fe(n,l);return e(u,p,Ln(n,e,{documentMeta:l,parentScope:{...o,...p},resolveComponent:c}))}function Ln(n,e,t){const{documentMeta:l,parentScope:o,resolveComponent:r}=t,s=(n.children||[]).reduce((u,p)=>{if(!Ye(p))return u[en].children.push(p),u;const d=Xe(p);return u[d]=u[d]||{props:{},children:[]},p.type==="element"&&(u[d].props=p.props,u[d].children.push(...p.children||[])),u},{[en]:{props:{},children:[]}});return Object.entries(s).reduce((u,[p,{props:d,children:m}])=>(m.length&&(u[p]=(v={})=>{const k=Me(v,Object.keys(d||{}));let w=m.map(S=>ze(S,e,{documentMeta:l,parentScope:{...o,...k},resolveComponent:r}));return d!=null&&d.unwrap&&(w=Rn(w,d.unwrap)),Qe(w)}),u),{})}function He(n,e,t,l={}){var u,p;const o={...t.runtimeData,...l,$document:t,$doc:t},r=/\.|\[(\d+)\]/,s=((u=n.props)==null?void 0:u.value.trim().split(r).filter(Boolean)).reduce((d,m)=>{if(d&&m in d)return typeof d[m]=="function"?d[m]():d[m]},o),c=(p=n.props)==null?void 0:p.defaultValue;return e(F,s??c??"")}function Fe(n,e){const{tag:t="",props:l={}}=n;return Object.keys(l).reduce(function(o,r){if(r==="__ignoreMap")return o;const i=l[r];if(je.test(r))return We(r,i,o,e,{native:$e.includes(t)});if(r==="v-bind")return Ve(r,i,o,e);if(An.test(r))return Ke(r,i,o,e);if(En.test(r))return qe(r,i,o,e);const{attribute:s}=De(Ee,r);return Array.isArray(i)&&i.every(c=>typeof c=="string")?(o[s]=i.join(" "),o):(o[s]=i,o)},{})}function We(n,e,t,l,{native:o}){var c;const r=((c=n.match(/^v-model:([^=]+)/))==null?void 0:c[1])||"modelValue",i=o?"value":r,s=o?"onInput":`onUpdate:${r}`;return t[i]=q(e,l.runtimeData),t[s]=u=>{var p;l.updateRuntimeData(e,o?(p=u.target)==null?void 0:p.value:u)},t}function Ve(n,e,t,l){const o=q(e,l);return t=Object.assign(t,o),t}function Ke(n,e,t,l){return n=n.replace(An,""),t.on=t.on||{},t.on[n]=()=>q(e,l),t}function qe(n,e,t,l){return n=n.replace(En,""),t[n]=q(e,l),t}const tn=n=>{if(typeof n=="string"){if(z.includes(n))return n;const e=yn(I(n),!1);return!n||(e==null?void 0:e.name)==="AsyncComponentWrapper"||typeof e=="string"?e:"setup"in e?Z(()=>new Promise(t=>t(e))):e}return n};function q(n,e){const t=n.split(".").reduce((l,o)=>typeof l=="object"?l[o]:void 0,e);return typeof t>"u"?Zn(n):t}function Xe(n){let e="";for(const t of Object.keys(n.props||{}))if(!(!t.startsWith("#")&&!t.startsWith("v-slot:"))){e=t.split(/[:#]/,2)[1];break}return e||en}function Ye(n){return n.tag==="template"}function Mn(n){return Be.includes(n)}function Qe(n){const e=[];for(const t of n){const l=e[e.length-1];t.type===F&&(l==null?void 0:l.type)===F?l.children=l.children+t.children:e.push(t)}return e}async function Ze(n,e){if(!n)return;const t=Array.from(new Set(l(n,e)));await Promise.all(t.map(async o=>{if(o!=null&&o.render||o!=null&&o.ssrRender||o!=null&&o.__ssrInlineRender)return;const r=tn(o);r!=null&&r.__asyncLoader&&!r.__asyncResolved&&await r.__asyncLoader()}));function l(o,r){const i=o.tag;if(o.type==="text"||i==="binding"||o.type==="comment")return[];const s=In(o,r.tags);if(Mn(s))return[];const c=[];o.type!=="root"&&!z.includes(s)&&c.push(s);for(const u of o.children||[])c.push(...l(u,r));return c}}function In(n,e){var l;const t=n.tag;return!t||typeof((l=n.props)==null?void 0:l.__ignoreMap)<"u"?t:e[t]||e[I(t)]||e[vn(n.tag)]||t}const Ge=Object.assign(Ne,{__name:"MDCRenderer"});function Je(n){return{type:"root",children:n.value.map(jn)}}function jn(n){if(typeof n=="string")return{type:"text",value:n};const[e,t,...l]=n;return{type:"element",tag:e,props:t,children:l.map(jn)}}const nt=()=>E(()=>import("./IOGu5iF8.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url),et=()=>E(()=>import("./BXq06AZE.js"),__vite__mapDeps([8,1,2,3,4,9,10,11,5,6]),import.meta.url),tt=()=>E(()=>import("./BkID7Sb9.js"),__vite__mapDeps([12,3,4]),import.meta.url),lt=()=>E(()=>import("./BhNCZP6o.js"),__vite__mapDeps([13,3,4,14,10,11,6,1,2,5]),import.meta.url),rt=()=>E(()=>import("./BfsBA_bm.js"),__vite__mapDeps([15,1,2,3,4,5,6]),import.meta.url),ot=()=>E(()=>import("./EopYeKCA.js"),__vite__mapDeps([16,1,2,3,4,9,5,6]),import.meta.url),$n=["ProseA","ProseBlockquote","ProseCode","ProseEm","ProseH1","ProseH2","ProseH3","ProseH4","ProseH5","ProseH6","ProseHr","ProseImg","ProseLi","ProseOl","ProseP","ProsePre","ProseScript","ProseStrong","ProseTable","ProseTbody","ProseTd","ProseTh","ProseThead","ProseTr","ProseUl","Icon"],Bn=["About","Contact","Experiences","Home","Works","Writing"],at=Object.freeze(Object.defineProperty({__proto__:null,About:nt,Contact:et,Experiences:tt,Home:lt,Works:rt,Writing:ot,globalComponents:$n,localComponents:Bn},Symbol.toStringTag,{value:"Module"})),it=on({__name:"ContentRenderer",props:{value:{type:Object,required:!0},excerpt:{type:Boolean,default:!1},tag:{type:String,default:"div"},components:{type:Object,default:()=>({})},data:{type:Object,default:()=>({})},prose:{type:Boolean,default:void 0},class:{type:[String,Object],default:void 0},unwrap:{type:[Boolean,String],default:!1}},setup(n){var S,O,T,A;const e=["render","ssrRender","__ssrInlineRender"],t=n,l=!1,o=R(()=>{let g=t.value.body||t.value;return t.excerpt&&t.value.excerpt&&(g=t.value.excerpt),g.type==="minimal"?Je(g):g}),r=R(()=>{var g,y;return!((y=(g=o.value)==null?void 0:g.children)!=null&&y.length)}),i=R(()=>{const{body:g,excerpt:y,...C}=t.value;return{...C,...t.data}}),s=Object.fromEntries(["p","a","blockquote","code","pre","code","em","h1","h2","h3","h4","h5","h6","hr","img","ul","ol","li","strong","table","thead","tbody","td","th","tr","script"].map(g=>[g,`prose-${g}`])),{mdc:c}=rn().public||{},u={...(S=c==null?void 0:c.components)!=null&&S.prose&&t.prose!==!1?s:{},...((O=c==null?void 0:c.components)==null?void 0:O.map)||{},...hn(((A=(T=t.data)==null?void 0:T.mdc)==null?void 0:A.components)||{}),...t.components},p=R(()=>{}),d=R(()=>o.value?v(o.value,{tags:u}):{});function m(g){let y=g;if(typeof g=="string"){if(z.includes(g))return g;if($n.includes(I(g))?y=yn(g,!1):Bn.includes(I(g))&&(y=Z(()=>E(()=>Promise.resolve().then(()=>at),void 0,import.meta.url).then(_=>_[I(g)]()))),typeof y=="string")return y}if(!y)return y;const C=y;return"__asyncLoader"in C?C:"setup"in C?Z(()=>Promise.resolve(C)):C}function v(g,y){if(!g)return;const C=Array.from(new Set(k(g,y))),_={};for(const[M,U]of C)typeof U=="object"&&e.some(Un=>Object.hasOwnProperty.call(U,Un))||_[M]||(_[M]=m(U));return _}function k(g,y){const C=g.tag;if(g.type==="text"||C==="binding"||g.type==="comment")return[];const _=w(g,y.tags),M=[];g.type!=="root"&&!z.includes(_)&&M.push([C,_]);for(const U of g.children||[])M.push(...k(U,y));return M}function w(g,y){var _;const C=g.tag;return!C||typeof((_=g.props)==null?void 0:_.__ignoreMap)<"u"?C:y[C]||y[I(C)]||y[vn(g.tag)]||C}return(g,y)=>r.value?mn(g.$slots,"empty",{key:1,body:o.value,data:i.value,dataContentId:cn(l)?n.value.id:void 0}):(Gn(),Jn(Ge,{key:p.value,body:o.value,data:i.value,class:ne(t.class),tag:t.tag,prose:t.prose,unwrap:t.unwrap,components:d.value,"data-content-id":cn(l)?n.value.id:void 0},null,8,["body","data","class","tag","prose","unwrap","components","data-content-id"]))}}),ht=Object.assign(it,{__name:"ContentRenderer"}),V=(n,e)=>{const t=n._conditions;return t.length>0?`(${t.join(` ${e} `)})`:""},K=n=>{const e=[],t={_conditions:e,where(l,o,r){let i;switch(o.toUpperCase()){case"IN":case"NOT IN":if(Array.isArray(r)){const s=r.map(c=>N(c)).join(", ");i=`"${String(l)}" ${o.toUpperCase()} (${s})`}else throw new TypeError(`Value for ${o} must be an array`);break;case"BETWEEN":case"NOT BETWEEN":if(Array.isArray(r)&&r.length===2)i=`"${String(l)}" ${o.toUpperCase()} ${N(r[0])} AND ${N(r[1])}`;else throw new Error(`Value for ${o} must be an array with two elements`);break;case"IS NULL":case"IS NOT NULL":i=`"${String(l)}" ${o.toUpperCase()}`;break;case"LIKE":case"NOT LIKE":i=`"${String(l)}" ${o.toUpperCase()} ${N(r)}`;break;default:i=`"${String(l)}" ${o} ${N(typeof r=="boolean"?Number(r):r)}`}return e.push(`${i}`),t},andWhere(l){const o=l(K());return e.push(V(o,"AND")),t},orWhere(l){const o=l(K());return e.push(V(o,"OR")),t}};return t},ut=(n,e)=>{const t={conditions:[],selectedFields:[],offset:0,limit:0,orderBy:[],count:{field:"",distinct:!1}},l={__params:t,andWhere(r){const i=r(K());return t.conditions.push(V(i,"AND")),l},orWhere(r){const i=r(K());return t.conditions.push(V(i,"OR")),l},path(r){return l.where("path","=",ee(r))},skip(r){return t.offset=r,l},where(r,i,s){return l.andWhere(c=>c.where(String(r),i,s)),l},limit(r){return t.limit=r,l},select(...r){return r.length&&t.selectedFields.push(...r),l},order(r,i){return t.orderBy.push(`"${String(r)}" ${i}`),l},async all(){return e(n,o()).then(r=>r||[])},async first(){return e(n,o({limit:1})).then(r=>r[0]||null)},async count(r="*",i=!1){return e(n,o({count:{field:String(r),distinct:i}})).then(s=>s[0].count)}};function o(r={}){let i="SELECT ";if(r!=null&&r.count)i+=`COUNT(${r.count.distinct?"DISTINCT ":""}${r.count.field}) as count`;else{const c=Array.from(new Set(t.selectedFields));i+=c.length>0?c.map(u=>`"${String(u)}"`).join(", "):"*"}i+=` FROM ${ue[String(n)]}`,t.conditions.length>0&&(i+=` WHERE ${t.conditions.join(" AND ")}`),t.orderBy.length>0?i+=` ORDER BY ${t.orderBy.join(", ")}`:i+=" ORDER BY stem ASC";const s=(r==null?void 0:r.limit)||t.limit;return s>0&&(t.offset>0?i+=` LIMIT ${s} OFFSET ${t.offset}`:i+=` LIMIT ${s}`),i}return l};function N(n){return`'${String(n).replace(/'/g,"''")}'`}const yt=n=>{var t,l;const e=(l=(t=te())==null?void 0:t.ssrContext)==null?void 0:l.event;return ut(n,(o,r)=>st(e,o,r))};async function st(n,e,t){return ct(e,t)}async function ct(n,e){return await E(()=>import("./D3EzAPb4.js"),__vite__mapDeps([17,3,4,6]),import.meta.url).then(l=>l.loadDatabaseAdapter(n)).then(l=>l.all(e))}const pt=/^[^-]+.*-.*[^-]+$/,dt=/^[^_]+.*_.*[^_]+$/;function vt(n,e={}){const t=le([]),l=()=>{t.value.splice(0,t.value.length)},o=re(l,e.chainDelay??800),r=oe(),i=u=>{if(!u.key)return;const p=/^[a-z]{1}$/i.test(u.key);let d;if(t.value.push(u.key),t.value.length>=2){d=t.value.slice(-2).join("-");for(const m of c.value.filter(v=>v.chained))if(m.key===d){m.enabled&&(u.preventDefault(),m.handler(u)),l();return}}for(const m of c.value.filter(v=>!v.chained))if(u.key.toLowerCase()===m.key&&u.metaKey===m.metaKey&&u.ctrlKey===m.ctrlKey&&!(p&&u.shiftKey!==m.shiftKey)){m.enabled&&(u.preventDefault(),m.handler()),l();return}o()},s=R(()=>{var m,v,k;const u=(m=r.value)==null?void 0:m.tagName,p=(v=r.value)==null?void 0:v.contentEditable;return u==="INPUT"||u==="TEXTAREA"||p==="true"||p==="plaintext-only"?((k=r.value)==null?void 0:k.name)||!0:!1}),c=R(()=>Object.entries(ae(n)).map(([u,p])=>{var k,w;if(!p)return null;let d;u.includes("-")&&u!=="-"&&!((k=u.match(pt))!=null&&k.length)&&console.trace(`[Shortcut] Invalid key: "${u}"`),u.includes("_")&&u!=="_"&&!((w=u.match(dt))!=null&&w.length)&&console.trace(`[Shortcut] Invalid key: "${u}"`);const m=u.includes("-")&&u!=="-";if(m)d={key:u.toLowerCase(),metaKey:!1,ctrlKey:!1,shiftKey:!1,altKey:!1};else{const S=u.toLowerCase().split("_").map(O=>O);d={key:S.filter(O=>!["meta","command","ctrl","shift","alt","option"].includes(O)).join("_"),metaKey:S.includes("meta")||S.includes("command"),ctrlKey:S.includes("ctrl"),shiftKey:S.includes("shift"),altKey:S.includes("alt")||S.includes("option")}}if(d.chained=m,typeof p=="function"?d.handler=p:typeof p=="object"&&(d={...d,handler:p.handler}),!d.handler)return console.trace("[Shortcut] Invalid value"),null;let v=!0;return p.usingInput?typeof p.usingInput=="string"&&(v=s.value===p.usingInput):v=!s.value,d.enabled=v,d}).filter(Boolean));return ie("keydown",i)}export{mt as _,ht as a,vt as d,Rn as f,yt as q};
