(this["webpackJsonpuko-react"]=this["webpackJsonpuko-react"]||[]).push([[5],{1e3:function(e,t,a){"use strict";var r=a(13),o=a(4),n=a(8),i=a(3),c=a(0),s=(a(21),a(11)),l=a(989),d=a(155),u=a(47),b=a(22),p=a(192),j=a(87),m=a(144),h=a(35),O=a(63),x=a(1),g=Object(O.a)(Object(x.jsx)("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),f=Object(O.a)(Object(x.jsx)("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder"),v=a(18),y=a(10),C=a(68),k=a(76);function S(e){return Object(C.a)("MuiRating",e)}var M=Object(k.a)("MuiRating",["root","sizeSmall","sizeMedium","sizeLarge","readOnly","disabled","focusVisible","visuallyHidden","pristine","label","labelEmptyValueActive","icon","iconEmpty","iconFilled","iconHover","iconFocus","iconActive","decimal"]),w=["value"],R=["className","defaultValue","disabled","emptyIcon","emptyLabelText","getLabelText","highlightSelectedOnly","icon","IconContainerComponent","max","name","onChange","onChangeActive","onMouseLeave","onMouseMove","precision","readOnly","size","value"];function H(e,t){if(null==e)return e;var a=Math.round(e/t)*t;return Number(a.toFixed(function(e){var t=e.toString().split(".")[1];return t?t.length:0}(t)))}var L=Object(y.a)("span",{name:"MuiRating",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[Object(o.a)({},"& .".concat(M.visuallyHidden),t.visuallyHidden),t.root,t["size".concat(Object(b.a)(a.size))],a.readOnly&&t.readOnly]}})((function(e){var t,a=e.theme,r=e.ownerState;return Object(i.a)((t={display:"inline-flex",position:"relative",fontSize:a.typography.pxToRem(24),color:"#faaf00",cursor:"pointer",textAlign:"left",WebkitTapHighlightColor:"transparent"},Object(o.a)(t,"&.".concat(M.disabled),{opacity:a.palette.action.disabledOpacity,pointerEvents:"none"}),Object(o.a)(t,"&.".concat(M.focusVisible," .").concat(M.iconActive),{outline:"1px solid #999"}),Object(o.a)(t,"& .".concat(M.visuallyHidden),l.a),t),"small"===r.size&&{fontSize:a.typography.pxToRem(18)},"large"===r.size&&{fontSize:a.typography.pxToRem(30)},r.readOnly&&{pointerEvents:"none"})})),A=Object(y.a)("label",{name:"MuiRating",slot:"Label",overridesResolver:function(e,t){return t.label}})((function(e){var t=e.ownerState;return Object(i.a)({cursor:"inherit"},t.emptyValueFocused&&{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"})})),P=Object(y.a)("span",{name:"MuiRating",slot:"Icon",overridesResolver:function(e,t){var a=e.ownerState;return[t.icon,a.iconEmpty&&t.iconEmpty,a.iconFilled&&t.iconFilled,a.iconHover&&t.iconHover,a.iconFocus&&t.iconFocus,a.iconActive&&t.iconActive]}})((function(e){var t=e.theme,a=e.ownerState;return Object(i.a)({display:"flex",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest}),pointerEvents:"none"},a.iconActive&&{transform:"scale(1.2)"},a.iconEmpty&&{color:t.palette.action.disabled})})),N=Object(y.a)("span",{name:"MuiRating",slot:"Decimal",shouldForwardProp:function(e){return Object(y.c)(e)&&"iconActive"!==e},overridesResolver:function(e,t){var a=e.iconActive;return[t.decimal,a&&t.iconActive]}})((function(e){var t=e.iconActive;return Object(i.a)({position:"relative"},t&&{transform:"scale(1.2)"})}));function V(e){var t=Object(n.a)(e,w);return Object(x.jsx)("span",Object(i.a)({},t))}function B(e){var t=e.classes,a=e.disabled,r=e.emptyIcon,o=e.focus,n=e.getLabelText,l=e.highlightSelectedOnly,d=e.hover,u=e.icon,b=e.IconContainerComponent,j=e.isActive,m=e.itemValue,h=e.labelProps,O=e.name,g=e.onBlur,f=e.onChange,v=e.onClick,y=e.onFocus,C=e.readOnly,k=e.ownerState,S=e.ratingValue,M=l?m===S:m<=S,w=m<=d,R=m<=o,H=m===e.ratingValueRounded,L=Object(p.a)(),N=Object(x.jsx)(P,{as:b,value:m,className:Object(s.a)(t.icon,M?t.iconFilled:t.iconEmpty,w&&t.iconHover,R&&t.iconFocus,j&&t.iconActive),ownerState:Object(i.a)({},k,{iconEmpty:!M,iconFilled:M,iconHover:w,iconFocus:R,iconActive:j}),children:r&&!M?r:u});return C?Object(x.jsx)("span",Object(i.a)({},h,{children:N})):Object(x.jsxs)(c.Fragment,{children:[Object(x.jsxs)(A,Object(i.a)({ownerState:Object(i.a)({},k,{emptyValueFocused:void 0}),htmlFor:L},h,{children:[N,Object(x.jsx)("span",{className:t.visuallyHidden,children:n(m)})]})),Object(x.jsx)("input",{className:t.visuallyHidden,onFocus:y,onBlur:g,onChange:f,onClick:v,disabled:a,value:m,id:L,type:"radio",name:O,checked:H})]})}var z=Object(x.jsx)(g,{fontSize:"inherit"}),F=Object(x.jsx)(f,{fontSize:"inherit"});function I(e){return"".concat(e," Star").concat(1!==e?"s":"")}var T=c.forwardRef((function(e,t){var a=Object(v.a)({name:"MuiRating",props:e}),o=a.className,l=a.defaultValue,O=void 0===l?null:l,g=a.disabled,f=void 0!==g&&g,y=a.emptyIcon,C=void 0===y?F:y,k=a.emptyLabelText,M=void 0===k?"Empty":k,w=a.getLabelText,P=void 0===w?I:w,T=a.highlightSelectedOnly,W=void 0!==T&&T,U=a.icon,E=void 0===U?z:U,D=a.IconContainerComponent,Y=void 0===D?V:D,q=a.max,Z=void 0===q?5:q,$=a.name,K=a.onChange,X=a.onChangeActive,G=a.onMouseLeave,J=a.onMouseMove,_=a.precision,Q=void 0===_?1:_,ee=a.readOnly,te=void 0!==ee&&ee,ae=a.size,re=void 0===ae?"medium":ae,oe=a.value,ne=Object(n.a)(a,R),ie=Object(p.a)($),ce=Object(j.a)({controlled:oe,default:O,name:"Rating"}),se=Object(r.a)(ce,2),le=se[0],de=se[1],ue=H(le,Q),be=Object(u.a)(),pe=c.useState({hover:-1,focus:-1}),je=Object(r.a)(pe,2),me=je[0],he=me.hover,Oe=me.focus,xe=je[1],ge=ue;-1!==he&&(ge=he),-1!==Oe&&(ge=Oe);var fe=Object(m.a)(),ve=fe.isFocusVisibleRef,ye=fe.onBlur,Ce=fe.onFocus,ke=fe.ref,Se=c.useState(!1),Me=Object(r.a)(Se,2),we=Me[0],Re=Me[1],He=c.useRef(),Le=Object(h.a)(ke,He),Ae=Object(h.a)(Le,t),Pe=function(e){var t=""===e.target.value?null:parseFloat(e.target.value);-1!==he&&(t=he),de(t),K&&K(e,t)},Ne=function(e){0===e.clientX&&0===e.clientY||(xe({hover:-1,focus:-1}),de(null),K&&parseFloat(e.target.value)===ue&&K(e,null))},Ve=function(e){Ce(e),!0===ve.current&&Re(!0);var t=parseFloat(e.target.value);xe((function(e){return{hover:e.hover,focus:t}}))},Be=function(e){if(-1===he){ye(e),!1===ve.current&&Re(!1);xe((function(e){return{hover:e.hover,focus:-1}}))}},ze=c.useState(!1),Fe=Object(r.a)(ze,2),Ie=Fe[0],Te=Fe[1],We=Object(i.a)({},a,{defaultValue:O,disabled:f,emptyIcon:C,emptyLabelText:M,emptyValueFocused:Ie,focusVisible:we,getLabelText:P,icon:E,IconContainerComponent:Y,max:Z,precision:Q,readOnly:te,size:re}),Ue=function(e){var t=e.classes,a=e.size,r=e.readOnly,o=e.disabled,n=e.emptyValueFocused,i=e.focusVisible,c={root:["root","size".concat(Object(b.a)(a)),o&&"disabled",i&&"focusVisible",r&&"readyOnly"],label:["label","pristine"],labelEmptyValue:[n&&"labelEmptyValueActive"],icon:["icon"],iconEmpty:["iconEmpty"],iconFilled:["iconFilled"],iconHover:["iconHover"],iconFocus:["iconFocus"],iconActive:["iconActive"],decimal:["decimal"],visuallyHidden:["visuallyHidden"]};return Object(d.a)(c,S,t)}(We);return Object(x.jsxs)(L,Object(i.a)({ref:Ae,onMouseMove:function(e){J&&J(e);var t,a=He.current,r=a.getBoundingClientRect(),o=r.right,n=r.left,i=a.firstChild.getBoundingClientRect().width;t="rtl"===be.direction?(o-e.clientX)/(i*Z):(e.clientX-n)/(i*Z);var c=H(Z*t+Q/2,Q);c=function(e,t,a){return e<t?t:e>a?a:e}(c,Q,Z),xe((function(e){return e.hover===c&&e.focus===c?e:{hover:c,focus:c}})),Re(!1),X&&he!==c&&X(e,c)},onMouseLeave:function(e){G&&G(e);xe({hover:-1,focus:-1}),X&&-1!==he&&X(e,-1)},className:Object(s.a)(Ue.root,o),ownerState:We,role:te?"img":null,"aria-label":te?P(ge):null},ne,{children:[Array.from(new Array(Z)).map((function(e,t){var a=t+1,r={classes:Ue,disabled:f,emptyIcon:C,focus:Oe,getLabelText:P,highlightSelectedOnly:W,hover:he,icon:E,IconContainerComponent:Y,name:ie,onBlur:Be,onChange:Pe,onClick:Ne,onFocus:Ve,ratingValue:ge,ratingValueRounded:ue,readOnly:te,ownerState:We},o=a===Math.ceil(ge)&&(-1!==he||-1!==Oe);if(Q<1){var n=Array.from(new Array(1/Q));return Object(x.jsx)(N,{className:Object(s.a)(Ue.decimal,o&&Ue.iconActive),ownerState:We,iconActive:o,children:n.map((function(e,t){var o=H(a-1+(t+1)*Q,Q);return Object(x.jsx)(B,Object(i.a)({},r,{isActive:!1,itemValue:o,labelProps:{style:n.length-1===t?{}:{width:o===ge?"".concat((t+1)*Q*100,"%"):"0%",overflow:"hidden",position:"absolute"}}}),o)}))},a)}return Object(x.jsx)(B,Object(i.a)({},r,{isActive:o,itemValue:a}),a)})),!te&&!f&&Object(x.jsxs)(A,{className:Object(s.a)(Ue.label,Ue.labelEmptyValue),ownerState:We,children:[Object(x.jsx)("input",{className:Ue.visuallyHidden,value:"",id:"".concat(ie,"-empty"),type:"radio",name:ie,checked:null==ue,onFocus:function(){return Te(!0)},onBlur:function(){return Te(!1)},onChange:Pe}),Object(x.jsx)("span",{className:Ue.visuallyHidden,children:M})]})]}))}));t.a=T},1036:function(e,t,a){"use strict";a.r(t),a.d(t,"HeadingWrapper",(function(){return k}));var r=a(13),o=a(4),n=a(929),i=a(10),c=a(154),s=a(478),l=a(47),d=a(1e3),u=a(940),b=a(45),p=a(32),j=a(114),m=a(0),h=a(960),O=a(1),x=[{Header:"Product Details",accessor:"productDetails",minWidth:250,Cell:function(e){var t=e.row.original,a=t.image,r=t.name,o=t.company;return Object(O.jsxs)(b.a,{alignItems:"center",children:[Object(O.jsx)(j.a,{src:a,alt:r,sx:{width:60,borderRadius:"10%"}}),Object(O.jsxs)(c.a,{ml:2,children:[Object(O.jsx)(p.f,{color:"text.primary",children:r}),Object(O.jsx)(p.h,{children:o})]})]})}},{Header:"Category",accessor:"category",Cell:function(e){var t=e.value,a=Object(l.a)();return Object(O.jsx)(p.h,{sx:{backgroundColor:"light"===a.palette.mode?"secondary.light":"divider",borderRadius:10,padding:".2rem 1rem"},children:t})}},{Header:"Stock",accessor:"stock"},{Header:"SKU",accessor:"sku"},{Header:"Price",accessor:"price"},{Header:"Rate",accessor:"rate",Cell:function(e){var t=e.value;return Object(O.jsxs)(c.a,{sx:{display:"flex",alignItems:"center"},children:[Object(O.jsx)(d.a,{name:"read-only",size:"small",value:5,readOnly:!0}),Object(O.jsxs)(c.a,{ml:.5,children:["(",t,")"]})]})}},{Header:"Action",accessor:"action",Cell:function(e){var t=e.row,a=Object(m.useState)(!1),o=Object(r.a)(a,2),n=o[0],i=o[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(u.a,{onClick:function(){return i(!0)}}),Object(O.jsx)(h.b,{editProduct:!0,open:n,data:t.original,onClose:function(){return i(!1)}})]})}}],g=a(936),f=a(959),v=a(921),y=a(918),C=a(910),k=Object(i.a)(b.a)((function(e){var t=e.theme;return Object(o.a)({marginBottom:20,flexWrap:"wrap"},t.breakpoints.down(530),{"& .MuiButton-root":{width:"100%"},"& .MuiInputBase-root":{maxWidth:"100%",marginBottom:15}})}));t.default=function(){Object(y.a)("Product List");var e=Object(C.a)().t,t=Object(m.useState)(!1),a=Object(r.a)(t,2),o=a[0],i=a[1];return Object(O.jsxs)(c.a,{pt:2,pb:4,children:[Object(O.jsxs)(k,{justifyContent:"space-between",alignItems:"center",children:[Object(O.jsx)(v.a,{placeholder:"Find Products"}),Object(O.jsx)(s.a,{variant:"contained",endIcon:Object(O.jsx)(n.a,{}),onClick:function(){return i(!0)},children:e("Add Products")})]}),Object(O.jsx)(g.a,{columnShape:x,data:f.c}),Object(O.jsx)(h.b,{open:o,onClose:function(){return i(!1)}})]})}},918:function(e,t,a){"use strict";var r=a(188),o=a(0);t.a=function(e){var t=Object(o.useContext)(r.a),a=t.title,n=t.setTitle;return Object(o.useEffect)((function(){return n(e)}),[e,n]),a}},919:function(e,t,a){"use strict";var r=a(16),o=a(187),n=a(1);t.a=function(e){return Object(n.jsxs)(o.a,Object(r.a)(Object(r.a)({viewBox:"0 0 20 20"},e),{},{children:[Object(n.jsx)("path",{d:"M8.80758 0C3.95121 0 0 3.95121 0 8.80758C0 13.6642 3.95121 17.6152 8.80758 17.6152C13.6642 17.6152 17.6152 13.6642 17.6152 8.80758C17.6152 3.95121 13.6642 0 8.80758 0ZM8.80758 15.9892C4.84769 15.9892 1.62602 12.7675 1.62602 8.80762C1.62602 4.84773 4.84769 1.62602 8.80758 1.62602C12.7675 1.62602 15.9891 4.84769 15.9891 8.80758C15.9891 12.7675 12.7675 15.9892 8.80758 15.9892Z",fill:"currentColor"}),Object(n.jsx)("path",{d:"M19.7617 18.6124L15.1005 13.9511C14.7829 13.6335 14.2685 13.6335 13.9509 13.9511C13.6332 14.2684 13.6332 14.7834 13.9509 15.1007L18.6121 19.762C18.7709 19.9208 18.9788 20.0002 19.1869 20.0002C19.3948 20.0002 19.6029 19.9208 19.7617 19.762C20.0794 19.4446 20.0794 18.9297 19.7617 18.6124Z",fill:"currentColor"})]}))}},921:function(e,t,a){"use strict";var r=a(16),o=a(4),n=a(10),i=a(52),c=a(919),s=a(1),l=Object(n.a)(i.c)((function(e){var t=e.theme;return Object(o.a)({height:45,fontSize:13,width:"100%",maxWidth:270,fontWeight:500,padding:"0 1rem",borderRadius:"8px",border:"1px solid ",borderColor:"light"===t.palette.mode?t.palette.secondary[300]:t.palette.divider,color:t.palette.text.primary,backgroundColor:t.palette.background.paper},t.breakpoints.down(500),{maxWidth:"100%"})}));t.a=function(e){return Object(s.jsx)(l,Object(r.a)(Object(r.a)({},e),{},{startAdornment:Object(s.jsx)(c.a,{sx:{fontSize:16,marginRight:1,color:"text.disabled"}})}))}},922:function(e,t,a){"use strict";var r=a(16),o=a(187),n=a(1);t.a=function(e){return Object(n.jsx)(o.a,Object(r.a)(Object(r.a)({viewBox:"0 0 12 12"},e),{},{children:Object(n.jsx)("path",{d:"M10.6221 0.48305C9.97692 -0.161017 8.93219 -0.161017 8.28705 0.48305L7.70255 1.07081L1.48058 7.29007L1.46735 7.3034C1.46415 7.3066 1.46415 7.31001 1.46074 7.31001C1.45413 7.31993 1.44421 7.32974 1.43771 7.33966C1.43771 7.34297 1.4343 7.34297 1.4343 7.34627C1.42769 7.35619 1.42448 7.3628 1.41777 7.37272C1.41457 7.37603 1.41457 7.37923 1.41126 7.38264C1.40795 7.39256 1.40465 7.39917 1.40124 7.40909C1.40124 7.41229 1.39804 7.41229 1.39804 7.4157L0.0175678 11.5673C-0.0229278 11.6855 0.00785715 11.8164 0.096803 11.9041C0.159303 11.9658 0.2436 12.0003 0.331306 12C0.367153 11.9994 0.40269 11.9938 0.436987 11.9835L4.585 10.5996C4.58821 10.5996 4.58821 10.5996 4.59162 10.5964C4.60205 10.5933 4.61207 10.5888 4.62126 10.583C4.62385 10.5827 4.62612 10.5816 4.62798 10.5798C4.63779 10.5732 4.65102 10.5665 4.66093 10.5599C4.67075 10.5534 4.68077 10.5435 4.69069 10.5368C4.69399 10.5334 4.69719 10.5334 4.69719 10.5302C4.7006 10.5269 4.70721 10.5237 4.71052 10.517L11.517 3.70989C12.161 3.06469 12.161 2.01986 11.517 1.37476L10.6221 0.48305ZM4.47932 9.82336L2.18078 7.5247L7.93375 1.77118L10.2323 4.06984L4.47932 9.82336ZM1.85702 8.1357L3.86507 10.1438L0.849795 11.1479L1.85702 8.1357ZM11.0514 3.24745L10.7013 3.60089L8.40265 1.30203L8.75616 0.948691C9.14283 0.562292 9.76959 0.562292 10.1564 0.948691L11.0546 1.84702C11.4384 2.23548 11.4369 2.86085 11.0514 3.24745Z",fill:"currentColor"})}))}},924:function(e,t,a){"use strict";var r=a(16),o=a(187),n=a(1);t.a=function(e){return Object(n.jsxs)(o.a,Object(r.a)(Object(r.a)({viewBox:"0 0 10 12"},e),{},{children:[Object(n.jsx)("path",{d:"M4.23535 5.64706H4.94123V9.52942H4.23535V5.64706Z",fill:"currentColor"}),Object(n.jsx)("path",{d:"M2.82349 5.64706H3.52937V9.52942H2.82349V5.64706Z",fill:"currentColor"}),Object(n.jsx)("path",{d:"M5.64722 5.64706H6.3531V9.52942H5.64722V5.64706Z",fill:"currentColor"}),Object(n.jsx)("path",{d:"M9.17647 1.41176H6.35294V1.05882C6.35294 0.474988 5.87798 0 5.29412 0H3.88235C3.29849 0 2.82353 0.474988 2.82353 1.05882V1.41176H0V3.52941H0.735247L1.38428 10.994C1.41231 11.5588 1.87518 12 2.44179 12H6.73466C7.30127 12 7.76414 11.5588 7.79217 10.994L8.44123 3.52941H9.17647V1.41176ZM3.52941 1.05882C3.52941 0.864212 3.68774 0.705882 3.88235 0.705882H5.29412C5.48875 0.705882 5.64706 0.864212 5.64706 1.05882V1.41176H3.52941V1.05882ZM0.705882 2.11765H8.47059V2.82353H0.705882V2.11765ZM7.08732 10.9559C7.07941 11.1455 6.92452 11.2941 6.73468 11.2941H2.44179C2.25195 11.2941 2.09706 11.1456 2.08915 10.9559C1.39861 3.00981 1.44584 3.55313 1.44376 3.52941H7.73271C7.73082 3.55071 7.77478 3.04544 7.08732 10.9559Z",fill:"currentColor"})]}))}},926:function(e,t,a){"use strict";var r=a(16),o=a(10),n=a(477),i=a(1),c=Object(o.a)(n.a)((function(e){var t=e.theme;return{"&:hover, & .MuiOutlinedInput-root:hover":{"& .MuiOutlinedInput-notchedOutline":{borderColor:t.palette.primary.main}},"& .MuiOutlinedInput-input":{fontSize:12,minHeight:35,fontWeight:500,borderRadius:"8px",padding:"0px 1rem",color:t.palette.text.primary},"& .MuiOutlinedInput-notchedOutline":{borderRadius:"8px",borderColor:"transparent",borderWidth:"1px !important"},"& .MuiInputBase-root":{backgroundColor:"light"===t.palette.mode?t.palette.text.secondary:t.palette.divider}}}));t.a=function(e){return Object(i.jsx)(c,Object(r.a)(Object(r.a)({},e),{},{fullWidth:!0}))}},929:function(e,t,a){"use strict";var r=a(63),o=a(1);t.a=Object(r.a)(Object(o.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add")},930:function(e,t,a){"use strict";a.d(t,"d",(function(){return l})),a.d(t,"a",(function(){return d})),a.d(t,"c",(function(){return u})),a.d(t,"b",(function(){return b}));var r=a(10),o=a(952),n=a(185),i=a(1085),c=a(52),s=a(919),l=Object(r.a)(o.a)((function(e){var t=e.theme;return"select"===e.selected_row?{backgroundColor:Object(n.a)(t.palette.primary.light,.5),position:"relative","&::after":{top:0,left:0,width:"3px",content:'""',height:"100%",position:"absolute",backgroundColor:t.palette.primary.main}}:{}})),d=Object(r.a)(i.a)((function(e){var t=e.theme;return{"& .MuiPaginationItem-root":{fontSize:12,fontWeight:500,color:t.palette.text.disabled},"& .MuiPaginationItem-page:hover":{borderRadius:20,backgroundColor:"transparent",color:t.palette.primary.main,border:"1px solid ".concat(t.palette.primary.main)},"& .MuiPaginationItem-page.Mui-selected":{borderRadius:20,backgroundColor:"transparent",color:t.palette.primary.main,border:"1px solid ".concat(t.palette.primary.main)},"& .MuiPaginationItem-previousNext":{margin:10,borderRadius:20,color:t.palette.primary.main,border:"1px solid ".concat(t.palette.primary.main),"&:hover":{backgroundColor:"transparent"}}}})),u=Object(r.a)(c.c)((function(e){return{height:40,fontSize:12,maxWidth:450,width:"100%",fontWeight:500,padding:"0.5rem",borderRadius:"4px",backgroundColor:"white",color:e.theme.palette.text.primary}})),b=Object(r.a)(s.a)((function(e){return{fontSize:16,marginLeft:"0.5rem",marginRight:"0.5rem",color:e.theme.palette.primary.main}}))},931:function(e,t,a){"use strict";var r=a(480),o=Object(r.a)();t.a=o},936:function(e,t,a){"use strict";var r=a(16),o=a(63),n=a(1),i=Object(o.a)(Object(n.jsx)("path",{d:"M16.01 11H4v2h12.01v3L20 12l-3.99-4z"}),"ArrowRightAlt"),c=a(47),s=a(154),l=a(963),d=a(964),u=a(952),b=a(962),p=a(965),j=a(976),m=a(818),h=a(930),O=a(45),x=a(32),g=a(0),f=a(938),v=a(189);t.a=function(e){var t=e.data,a=e.rowClick,o=e.showFooter,y=e.columnShape,C=e.hidePagination,k=Object(c.a)(),S=Object(g.useMemo)((function(){return t}),[t]),M=Object(g.useMemo)((function(){return y}),[y]),w=Object(f.useTable)({columns:M,data:S},f.useSortBy,f.useExpanded,f.usePagination,f.useRowSelect),R=w.getTableProps,H=w.getTableBodyProps,L=w.headerGroups,A=w.prepareRow,P=w.page,N=w.pageOptions,V=w.gotoPage,B="light"===k.palette.mode?"text.secondary":"divider";return Object(n.jsxs)(s.a,{children:[Object(n.jsx)(v.a,{children:Object(n.jsxs)(l.a,Object(r.a)(Object(r.a)({},R()),{},{sx:{borderSpacing:"0 1rem",borderCollapse:"separate"},children:[Object(n.jsx)(d.a,{children:L.map((function(e){return Object(n.jsx)(u.a,Object(r.a)(Object(r.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(n.jsx)(b.a,Object(r.a)(Object(r.a)({},e.getHeaderProps(e.getSortByToggleProps())),{},{sx:{paddingY:0,fontSize:13,fontWeight:600,borderBottom:0,color:"text.disabled",width:e.width,minWidth:e.minWidth,maxWidth:e.maxWidth,"&:last-child":{textAlign:"center"}},children:e.render("Header")}))}))}))}))}),Object(n.jsx)(p.a,Object(r.a)(Object(r.a)({},H()),{},{children:P.map((function(e){return A(e),Object(n.jsx)(u.a,Object(r.a)(Object(r.a)({},e.getRowProps()),{},{onClick:a&&a(e.original),sx:{backgroundColor:"background.paper",cursor:a?"pointer":"unset","& td:first-of-type":{borderLeft:"1px solid",borderTopLeftRadius:"8px",borderBottomLeftRadius:"8px",borderColor:B},"& td:last-of-type":{textAlign:"center",borderRight:"1px solid",borderTopRightRadius:"8px",borderBottomRightRadius:"8px",borderColor:B},"&:last-of-type .MuiTableCell-root":{borderBottom:"dark"===k.palette.mode?"1px solid ".concat(k.palette.divider," !important"):"1px solid ".concat(k.palette.text.secondary," !important")}},children:e.cells.map((function(e){return Object(n.jsx)(b.a,Object(r.a)(Object(r.a)({},e.getCellProps()),{},{sx:{fontSize:13,fontWeight:500,color:"text.disabled",borderTop:"1px solid",borderBottom:"1px solid",borderColor:B},children:e.render("Cell")}))}))}))}))}))]}))}),!C&&Object(n.jsx)(j.a,{alignItems:"flex-end",marginY:1,children:Object(n.jsx)(h.a,{count:N.length,shape:"rounded",onChange:function(e,t){V(t-1)}})}),o&&Object(n.jsxs)(O.a,{alignItems:"center",justifyContent:"space-between",children:[Object(n.jsx)(x.e,{color:"text.disabled",children:"Showing 1-12 of 24 result"}),Object(n.jsxs)(m.a,{disableRipple:!0,sx:{fontSize:14,fontWeight:600},children:["See All",Object(n.jsx)(i,{sx:{marginLeft:.5}})]})]})]})}},940:function(e,t,a){"use strict";var r=a(16),o=a(47),n=a(909),i=a(922),c=a(1);t.a=function(e){var t=Object(o.a)();return Object(c.jsx)(n.a,Object(r.a)(Object(r.a)({},e),{},{sx:{border:"1px solid",borderRadius:"10px",borderColor:"light"===t.palette.mode?"secondary.300":"divider"},children:Object(c.jsx)(i.a,{sx:{fontSize:16,color:"text.disabled"}})}))}},959:function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return c}));var r=a(472),o=[{image:"/static/products/shoe-3.png",name:"Nike Air Max 270",company:"Nike Official",category:"Shoe",sku:"UY3769",price:450,stock:48,rate:14},{image:"/static/products/shoe-4.png",name:"White Nike 270",company:"Rave BD",category:"Shoe",sku:"UY3769",price:450,stock:48,rate:14},{image:"/static/products/shoe-3.png",name:"Blue Revels Shoes",company:"Rave BD",category:"Shoe",sku:"UY3769",price:450,stock:48,rate:14},{image:"/static/products/shoe-4.png",name:"Nike Pro Max 270",company:"Nike BD",category:"Shoe",sku:"UY3769",price:450,stock:48,rate:14},{image:"/static/products/light.png",name:"Nike Lamp Light",company:"Super Start",category:"Electronics",sku:"UY3769",price:450,stock:48,rate:14},{image:"/static/products/chair.png",name:"Comfortable Chair",company:"Hatil",category:"Chair",sku:"UY3769",price:450,stock:48,rate:14}],n=[{orderNo:"UY3769",customer:"Mark Ruffle",date:Object(r.a)(new Date("12.02.2021"),"dd-MM-yyyy"),total:"$789",payment:"Paypal",status:"Unpaid"},{orderNo:"UY3770",customer:"Mark Ruffle",date:Object(r.a)(new Date("12.02.2021"),"dd-MM-yyyy"),total:"$789",payment:"Paypal",status:"Paid"},{orderNo:"UY3761",customer:"Mark Ruffle",date:Object(r.a)(new Date("12.02.2021"),"dd-MM-yyyy"),total:"$789",payment:"Paypal",status:"Unpaid"},{orderNo:"UY3762",customer:"Mark Ruffle",date:Object(r.a)(new Date("12.02.2021"),"dd-MM-yyyy"),total:"$789",payment:"Paypal",status:"Paid"}],i=Object(r.a)(new Date(2021,11,2),"MMM dd, yyyy"),c=[{date:i,name:"Natalie Dormer",position:"UI Designer",phone:"+00578115245",avatar:"/static/avatar/001-man.svg",email:"Uilib@gmail.com",location:"Austin, USA",status:"Active"},{date:i,name:"Natalie Dormer",position:"Editor",phone:"+00578115245",avatar:"/static/avatar/002-girl.svg",email:"Uilib@gmail.com",location:"Austin, USA",status:"Blocked"},{date:i,name:"Lily Collins",position:"UI Designer",phone:"+00578115245",avatar:"/static/avatar/003-boy.svg",email:"Uilib@gmail.com",location:"Corner View, Sylhet",status:"Active"},{name:"Natalie Dormer",phone:"+00578115245",avatar:"/static/avatar/004-woman.svg",date:Object(r.a)(new Date(2021,10,5),"MMM dd, yyyy"),email:"Uilib@gmail.com",location:"Corner View, Sylhet",status:"Blocked"}]},960:function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));var r=a(929),o=a(10),n=a(823),i=a(880),c=a(890),s=a(896),l=a(909),d=a(478),u=a(931),b=a(926),p=a(45),j=a(32),m=a(317),h=a(924),O=a(189),x=a(190),g=a(1),f=Object(o.a)(n.a)((function(e){return{top:"50%",left:"50%",maxWidth:700,minWidth:300,position:"absolute",padding:"1.5rem",boxShadow:e.theme.shadows[2],transform:"translate(-50%, -50%)",width:"100%",outline:"none"}})),v=Object(o.a)(u.a)((function(e){return{width:25,height:25,position:"absolute",top:5,right:5,backgroundColor:e.theme.palette.error.main,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center"}})),y=Object(o.a)(u.a)((function(e){return{backgroundColor:e.theme.palette.text.secondary,minHeight:140,borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"}})),C=["/static/products/watch.png","/static/products/camera.png","/static/products/headphone.png"];t.b=function(e){var t=e.open,a=e.data,o=e.onClose,n=e.editProduct,k=Object(i.a)((function(e){return e.breakpoints.down("xl")})),S=x.e().shape({productName:x.f().min(3,"Too Short").required("Product Name is Required!"),storeName:x.f().required("Store Name is Required!"),price:x.d().required("Price is Required!"),description:x.f().required("Description is Required!"),category:x.f().required("Category is Required!"),stock:x.d().required("Stock is Required!"),sku:x.f().required("SKU is Required!")}),M=Object(m.d)({initialValues:{productName:"",storeName:"",price:"",discountPrice:"",description:"",category:"",tags:"",stock:"",sku:"",images:""},validationSchema:S,onSubmit:function(e){console.log(e)}}),w=M.values,R=M.errors,H=M.handleChange,L=M.handleSubmit,A=M.touched;return Object(g.jsx)(c.a,{open:t,onClose:o,children:Object(g.jsxs)(f,{children:[Object(g.jsx)(j.b,{marginBottom:2,children:n&&a?"Edit Product":"Add new product"}),Object(g.jsxs)("form",{onSubmit:L,children:[Object(g.jsx)(O.a,{style:{maxHeight:k?500:"auto"},children:Object(g.jsxs)(s.a,{container:!0,spacing:2,children:[Object(g.jsxs)(s.a,{item:!0,sm:6,xs:12,children:[Object(g.jsx)(j.f,{mb:1,children:"Product Name"}),Object(g.jsx)(b.a,{name:"productName",placeholder:"Enter product name",value:w.productName,onChange:H,error:Boolean(A.productName&&R.productName),helperText:A.productName&&R.productName})]}),Object(g.jsxs)(s.a,{item:!0,sm:6,xs:12,children:[Object(g.jsx)(j.f,{mb:1,children:"Store Name"}),Object(g.jsx)(b.a,{name:"storeName",placeholder:"Enter store name",value:w.storeName,onChange:H,error:Boolean(A.storeName&&R.storeName),helperText:A.storeName&&R.storeName})]}),Object(g.jsxs)(s.a,{item:!0,sm:6,xs:12,children:[Object(g.jsx)(j.f,{mb:1,children:"Price"}),Object(g.jsx)(b.a,{name:"price",type:"number",placeholder:"Price",value:w.price,onChange:H,error:Boolean(A.price&&R.price),helperText:A.price&&R.price})]}),Object(g.jsxs)(s.a,{item:!0,sm:6,xs:12,children:[Object(g.jsx)(j.f,{mb:1,children:"Discount Price"}),Object(g.jsx)(b.a,{type:"number",name:"discountPrice",placeholder:"Discount price",value:w.discountPrice,onChange:H,error:Boolean(A.discountPrice&&R.discountPrice),helperText:A.discountPrice&&R.discountPrice})]}),Object(g.jsxs)(s.a,{item:!0,xs:12,children:[Object(g.jsx)(j.f,{mb:1,children:"Description"}),Object(g.jsx)(b.a,{fullWidth:!0,multiline:!0,rows:3,name:"description",placeholder:"Write about product",value:w.description,onChange:H,error:Boolean(A.description&&R.description),helperText:A.description&&R.description,sx:{"& .MuiOutlinedInput-root":{padding:0},"& .MuiOutlinedInput-input":{paddingY:1}}})]}),Object(g.jsxs)(s.a,{item:!0,sm:6,xs:12,children:[Object(g.jsx)(j.f,{mb:1,children:"Category"}),Object(g.jsx)(b.a,{name:"category",placeholder:"Category",value:w.category,onChange:H,error:Boolean(A.category&&R.category),helperText:A.category&&R.category})]}),Object(g.jsxs)(s.a,{item:!0,sm:6,xs:12,children:[Object(g.jsx)(j.f,{mb:1,children:"Tags"}),Object(g.jsx)(b.a,{name:"tags",placeholder:"Add Tags",value:w.tags,onChange:H,error:Boolean(A.tags&&R.tags),helperText:A.tags&&R.tags})]}),Object(g.jsxs)(s.a,{item:!0,sm:6,xs:12,children:[Object(g.jsx)(j.f,{mb:1,children:"Stock"}),Object(g.jsx)(b.a,{placeholder:"04",type:"number",name:"stock",value:w.stock,onChange:H,error:Boolean(A.stock&&R.stock),helperText:A.stock&&R.stock})]}),Object(g.jsxs)(s.a,{item:!0,sm:6,xs:12,children:[Object(g.jsx)(j.f,{mb:1,children:"SKU"}),Object(g.jsx)(b.a,{name:"sku",placeholder:"UY8076",value:w.sku,onChange:H,error:Boolean(A.sku&&R.sku),helperText:A.sku&&R.sku})]}),Object(g.jsxs)(s.a,{item:!0,xs:12,children:[Object(g.jsx)(j.f,{pb:1,children:"Product Image"}),Object(g.jsx)(u.a,{sx:{backgroundColor:"secondary.200",border:"1px dashed",borderColor:"text.disabled",borderRadius:"8px",padding:1},children:Object(g.jsxs)(s.a,{container:!0,spacing:1,children:[C.map((function(e){return Object(g.jsx)(s.a,{item:!0,sm:3,xs:4,children:Object(g.jsxs)(u.a,{sx:{minHeight:140,borderRadius:"8px",overflow:"hidden",position:"relative"},children:[Object(g.jsx)("img",{src:e,width:"100%",height:"100%",alt:""}),Object(g.jsx)(v,{children:Object(g.jsx)(l.a,{children:Object(g.jsx)(h.a,{sx:{fontSize:12,color:"white"}})})})]})},e)})),Object(g.jsx)(s.a,{item:!0,sm:3,xs:4,children:Object(g.jsxs)("label",{htmlFor:"image-upload",children:[Object(g.jsx)("input",{type:"file",accept:"image/*",id:"image-upload",style:{display:"none"}}),Object(g.jsx)(y,{textAlign:"center",children:Object(g.jsxs)(u.a,{children:[Object(g.jsx)(r.a,{color:"disabled"}),Object(g.jsx)(j.h,{fontWeight:600,display:"block",children:"Choose a file"}),Object(g.jsx)(j.h,{fontWeight:600,color:"text.disabled",children:"or drag it here"})]})})]})})]})})]})]})}),Object(g.jsx)(s.a,{container:!0,children:Object(g.jsx)(s.a,{item:!0,xs:12,children:Object(g.jsxs)(p.a,{justifyContent:"flex-end",marginTop:2,children:[Object(g.jsx)(d.a,{fullWidth:!0,variant:"outlined",onClick:o,sx:{fontSize:12,width:124,color:"text.disabled",borderColor:"text.disabled",marginRight:2},children:"Cancel"}),Object(g.jsx)(d.a,{fullWidth:!0,type:"submit",variant:"contained",sx:{width:124,fontSize:12},children:"Save"})]})})})]})]})})}},989:function(e,t,a){"use strict";t.a={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"}}}]);
//# sourceMappingURL=5.32af2a1b.chunk.js.map