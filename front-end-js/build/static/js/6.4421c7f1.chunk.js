(this["webpackJsonpuko-react"]=this["webpackJsonpuko-react"]||[]).push([[6],{1001:function(t,e,a){"use strict";var r=a(21),n=a(222),c=a(1);e.a=function(t){return Object(c.jsxs)(n.a,Object(r.a)(Object(r.a)({viewBox:"0 0 10 12"},t),{},{children:[Object(c.jsx)("path",{d:"M4.23535 5.64706H4.94123V9.52942H4.23535V5.64706Z",fill:"currentColor"}),Object(c.jsx)("path",{d:"M2.82349 5.64706H3.52937V9.52942H2.82349V5.64706Z",fill:"currentColor"}),Object(c.jsx)("path",{d:"M5.64722 5.64706H6.3531V9.52942H5.64722V5.64706Z",fill:"currentColor"}),Object(c.jsx)("path",{d:"M9.17647 1.41176H6.35294V1.05882C6.35294 0.474988 5.87798 0 5.29412 0H3.88235C3.29849 0 2.82353 0.474988 2.82353 1.05882V1.41176H0V3.52941H0.735247L1.38428 10.994C1.41231 11.5588 1.87518 12 2.44179 12H6.73466C7.30127 12 7.76414 11.5588 7.79217 10.994L8.44123 3.52941H9.17647V1.41176ZM3.52941 1.05882C3.52941 0.864212 3.68774 0.705882 3.88235 0.705882H5.29412C5.48875 0.705882 5.64706 0.864212 5.64706 1.05882V1.41176H3.52941V1.05882ZM0.705882 2.11765H8.47059V2.82353H0.705882V2.11765ZM7.08732 10.9559C7.07941 11.1455 6.92452 11.2941 6.73468 11.2941H2.44179C2.25195 11.2941 2.09706 11.1456 2.08915 10.9559C1.39861 3.00981 1.44584 3.55313 1.44376 3.52941H7.73271C7.73082 3.55071 7.77478 3.04544 7.08732 10.9559Z",fill:"currentColor"})]}))}},1007:function(t,e,a){"use strict";var r=a(534),n=Object(r.a)();e.a=n},1008:function(t,e,a){"use strict";var r=a(1018),n=a(187),c=a(983),i=a(52),s=a(38),o=a(1);e.a=function(t){var e,a=t.item,l=t.handleTodoMore;return e="Completed"===a.status?"success.main":"Pending"===a.status?"info.main":"primary.main",Object(o.jsxs)(i.a,{justifyContent:"space-between",alignItems:"center",children:[Object(o.jsxs)(i.a,{alignItems:"center",children:[Object(o.jsx)(n.a,{sx:{width:32,height:32,opacity:.8,borderRadius:"4px",backgroundColor:e}}),Object(o.jsxs)(n.a,{ml:"1rem",children:[Object(o.jsx)(s.f,{children:a.title}),Object(o.jsx)(s.j,{color:"secondary.400",children:a.date})]})]}),Object(o.jsx)(c.a,{onClick:l,children:Object(o.jsx)(r.a,{sx:{color:"secondary.400"}})})]})}},1011:function(t,e,a){"use strict";var r=a(58),n=a(883),c=a(187),i=a(52),s=a(38),o=a(1);e.a=function(t){var e=t.conversation,a=Object(r.a)();return Object(o.jsxs)(i.a,{p:2,borderBottom:1,alignItems:"center",justifyContent:"space-between",borderColor:"light"===a.palette.mode?"secondary.300":"divider",sx:{"&:last-of-type":{borderBottom:0},cursor:"pointer"},children:[Object(o.jsxs)(i.a,{alignItems:"center",children:[Object(o.jsx)(n.a,{src:e.image,sx:{width:30,height:30,backgroundColor:"primary.200"}}),Object(o.jsxs)(c.a,{marginLeft:1,children:[Object(o.jsx)(s.f,{children:e.name}),Object(o.jsx)(s.j,{ellipsis:!0,display:"block",color:"text.disabled",children:e.lastMsg})]})]}),Object(o.jsx)(s.j,{color:"text.disabled",children:e.time})]})}},1012:function(t,e,a){"use strict";var r=a(1007),n=a(52),c=a(38),i=a(984),s=a(1);e.a=function(t){var e=t.activity,a=e.title,o=e.Icon,l=e.date,j=Object(i.a)().t;return Object(s.jsxs)(n.a,{marginBottom:2,sx:{"&:last-child":{mb:0}},children:[Object(s.jsx)(r.a,{marginRight:1.5,children:Object(s.jsx)(r.a,{sx:{width:30,height:30,display:"flex",marginTop:"5px",borderRadius:"50%",alignItems:"center",justifyContent:"center",backgroundColor:"secondary.400"},children:Object(s.jsx)(o,{sx:{color:"white",fontSize:16}})})}),Object(s.jsxs)(r.a,{children:[Object(s.jsx)(c.f,{children:j(a)}),Object(s.jsx)(c.h,{color:"text.disabled",children:l})]})]})}},1025:function(t,e,a){"use strict";var r=a(16),n=a(1018),c=a(967),i=a(58),s=a(882),o=a(983),l=a(1023),j=a(1030),d=a(1007),b=a(52),x=a(998),u=a(38),h=a(139),m=a(2),O=a(984),p=a(1);function g(t){var e=t.handleMoreOpen,a=Object(i.a)(),r=Object(O.a)().t;return Object(p.jsxs)(s.a,{sx:{padding:2,boxShadow:2},children:[Object(p.jsxs)(b.a,{alignItems:"center",justifyContent:"space-between",children:[Object(p.jsx)(u.h,{sx:{borderRadius:3,fontWeight:500,padding:"3px 12px",backgroundColor:"primary.100",color:"light"===a.palette.mode?"primary.main":"background.paper"},children:r("Web Design")}),Object(p.jsx)(o.a,{onClick:e,sx:{padding:0},children:Object(p.jsx)(n.a,{fontSize:"small"})})]}),Object(p.jsx)(u.h,{display:"block",my:2,children:r("Membuat konsep ilustrasi untuk halaman homepage dan about us")}),Object(p.jsx)(u.f,{textAlign:"right",mb:.5,children:"32%"}),Object(p.jsx)(l.a,{variant:"determinate",value:32}),Object(p.jsxs)(b.a,{alignItems:"center",justifyContent:"space-between",pt:"1.5rem",children:[Object(p.jsxs)(j.a,{children:[Object(p.jsx)(h.a,{alt:"Remy Sharp",src:"/static/avatar/001-man.svg"}),Object(p.jsx)(h.a,{alt:"Travis Howard",src:"/static/avatar/002-girl.svg"})]}),Object(p.jsx)(u.h,{sx:{marginLeft:1,fontWeight:500,padding:"5px 15px",borderRadius:"20px",color:"text.disabled",backgroundColor:"divider"},children:"3 Weeks Left"})]})]})}e.a=function(){var t=Object(O.a)().t,e=Object(m.useState)(null),a=Object(r.a)(e,2),n=a[0],i=a[1],s=function(t){i(t.currentTarget)};return Object(p.jsxs)(d.a,{pt:3,pb:5,px:3,children:[Object(p.jsx)(u.e,{marginBottom:2,children:t("Progress")}),Object(p.jsxs)(c.a,{container:!0,spacing:3,children:[[1,2,3,4].map((function(t){return Object(p.jsx)(c.a,{item:!0,xs:12,sm:6,children:Object(p.jsx)(g,{handleMoreOpen:s})},t)})),Object(p.jsx)(x.a,{anchorEl:n,handleMoreClose:function(){return i(null)}})]})]})}},1026:function(t,e,a){"use strict";var r=a(187),n=a(967),c=a(532),i=a(38),s=a(1033),o=(a(2),a(984)),l=a(1),j=[{name:"Project Nightfall",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",thumbnail:"/static/thumbnail/thumbnail-1.png",teamMember:["/static/avatar/010-girl-1.svg","/static/avatar/011-man-2.svg"]},{name:"Project Nightfall",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua.",thumbnail:"/static/thumbnail/thumbnail-2.png",teamMember:["/static/avatar/013-woman-3.svg","/static/avatar/012-woman-2.svg"]}];e.a=function(){var t=Object(o.a)().t;return Object(l.jsxs)(r.a,{pt:3,pb:5,px:3,children:[Object(l.jsx)(i.e,{marginBottom:2,children:t("Projects")}),Object(l.jsx)(n.a,{container:!0,spacing:3,children:j.map((function(t,e){return Object(l.jsx)(n.a,{item:!0,xs:12,sm:6,children:Object(l.jsx)(s.a,{project:t})},e)}))}),Object(l.jsx)(c.a,{variant:"contained",sx:{margin:"auto",marginTop:4,fontWeight:500,display:"block",textAlign:"center",padding:"0.5rem 3rem"},children:t("Load More")})]})}},1027:function(t,e,a){"use strict";var r=a(187),n=a(967),c=a(1030),i=a(999),s=a(38),o=a(139),l=a(984),j=a(1);e.a=function(){var t=Object(l.a)().t;return Object(j.jsxs)(r.a,{pt:3,pb:5,px:3,children:[Object(j.jsx)(s.e,{marginBottom:2,children:t("Teams")}),Object(j.jsxs)(n.a,{container:!0,spacing:3,children:[["Discord Nitro","Github","Stack Over"].map((function(t){return Object(j.jsxs)(n.a,{item:!0,xs:12,sm:6,children:[Object(j.jsx)(s.f,{children:t}),Object(j.jsxs)(c.a,{sx:{marginTop:1,justifyContent:"flex-end"},children:[Object(j.jsx)(o.a,{alt:"Remy Sharp",src:"/static/avatar/001-man.svg"}),Object(j.jsx)(o.a,{alt:"Travis",src:"/static/avatar/002-girl.svg"}),Object(j.jsx)(o.a,{alt:"Cindy Baker",src:"/static/avatar/003-boy.svg"}),Object(j.jsx)(o.a,{alt:"Cindy Baker",src:"/static/avatar/005-man-1.svg"})]})]},t)})),Object(j.jsxs)(n.a,{item:!0,xs:12,sm:6,children:[Object(j.jsx)(s.f,{children:"Create a new team"}),Object(j.jsx)(i.a,{sx:{mt:1,p:0}})]})]})]})}},1029:function(t,e,a){"use strict";var r=a(16),n=a(1005),c=a(77),i=a(1),s=Object(c.a)(Object(i.jsx)("path",{d:"m21.41 11.58-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"}),"LocalOffer"),o=Object(c.a)(Object(i.jsx)("path",{d:"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"PersonAdd"),l=a(15),j=a(882),d=a(58),b=a(967),x=a(1039),u=a(187),h=a(532),m=a(961),O=a(1194),p=a(871),g=a(883),f=a(999),v=a(52),C=a(535),y=a(1069),k=a(38),w=a(2),L=a(1016),M=a.n(L),H=a(984),S=Object(l.a)(j.a)((function(t){t.theme;return{width:400,top:"50%",left:"50%",padding:20,position:"absolute",transform:"translate(-50%, -50%)"}})),z=[{title:"Design",status:"Completed"},{title:"Development",status:"Ongoing"},{title:"Back End Development",status:"Upcoming"}];e.a=function(){var t=Object(d.a)(),e=Object(H.a)().t,a=Object(w.useState)(!1),c=Object(r.a)(a,2),l=c[0],L=c[1];return Object(i.jsx)(j.a,{sx:{p:3,mt:3},children:Object(i.jsxs)(b.a,{container:!0,spacing:3,children:[Object(i.jsxs)(b.a,{item:!0,xs:12,sm:7,children:[Object(i.jsx)(k.e,{marginBottom:2,children:e("Tasks")}),z.map((function(t){return Object(i.jsx)(x.a,{control:Object(i.jsx)(y.a,{checked:"Completed"===t.status}),label:Object(i.jsxs)(u.a,{children:[Object(i.jsx)(k.f,{lineHeight:1,mb:.3,children:t.title}),Object(i.jsx)(k.j,{color:"text.disabled",fontWeight:500,children:t.status})]}),sx:{margin:0,width:"100%",cursor:"default",paddingBottom:1.5,alignItems:"flex-start","& .MuiCheckbox-root":{padding:0,paddingRight:1.2},"&:last-child":{paddingBottom:0}}},t.title)})),Object(i.jsx)(h.a,{disableRipple:!0,startIcon:Object(i.jsx)(n.a,{fontSize:"small"}),onClick:function(){return L(!0)},sx:{padding:0,fontSize:13,fontWeight:500,color:"primary.main","&:hover":{backgroundColor:"transparent"}},children:"Create a new task"}),Object(i.jsx)(m.a,{open:l,onClose:function(){return L(!1)},children:Object(i.jsxs)(S,{children:[Object(i.jsx)(k.e,{mb:2,children:"Create New Task"}),Object(i.jsx)(C.a,{multiline:!0,fullWidth:!0,rows:5,placeholder:"Write new task...",sx:{"& textarea":{padding:"0 !important"},boxShadow:2}}),Object(i.jsxs)(v.a,{mt:3,alignItems:"center",justifyContent:"space-between",children:[Object(i.jsxs)(v.a,{alignItems:"center",children:[Object(i.jsx)(s,{fontSize:"small",sx:{mr:1.5,color:"text.disabled"}}),Object(i.jsx)(O.a,{label:"Chip Filled",size:"small",sx:{fontSize:12,fontWeight:500,backgroundColor:"primary.100",color:"light"===t.palette.mode?"primary.main":"background.paper"}})]}),Object(i.jsx)(f.a,{sx:{p:0}})]}),Object(i.jsx)(p.a,{sx:{my:1.5}}),Object(i.jsxs)(v.a,{alignItems:"center",justifyContent:"space-between",mb:5,children:[Object(i.jsxs)(v.a,{alignItems:"center",children:[Object(i.jsx)(o,{sx:{mr:1.5,color:"text.disabled"}}),Object(i.jsx)(g.a,{src:"/static/avatar/002-girl.svg",sx:{width:30,height:30,marginRight:1,backgroundColor:"primary.100"}}),Object(i.jsx)(k.h,{fontWeight:500,children:"Samantha"})]}),Object(i.jsx)(f.a,{sx:{p:0}})]}),Object(i.jsx)(h.a,{fullWidth:!0,variant:"contained",onClick:function(){return L(!1)},children:"Done"})]})})]}),Object(i.jsxs)(b.a,{item:!0,xs:12,sm:5,children:[Object(i.jsx)(k.e,{marginBottom:2,textAlign:"center",children:"Weekly Progress"}),Object(i.jsx)(M.a,{type:"radialBar",options:{colors:[t.palette.primary.main],chart:{background:"transparent"},plotOptions:{radialBar:{hollow:{size:"70%"},dataLabels:{name:{show:!1},value:{offsetY:10,fontSize:"28px",fontWeight:600,formatter:function(t){return"".concat(t,"%")},fontFamily:t.typography.fontFamily}},track:{strokeWidth:"100%",background:t.palette.divider}}},states:{normal:{filter:{type:"none"}},hover:{filter:{type:"none"}},active:{filter:{type:"none"}}},stroke:{curve:"smooth",lineCap:"round"},theme:{mode:t.palette.mode}},height:200,series:[75]})]})]})})}},1030:function(t,e,a){"use strict";var r=a(7),n=a(13),c=a(4),i=a(2),s=(a(25),a(188),a(18)),o=a(156),l=a(15),j=a(24),d=a(513),b=a(883),x=a(85),u=a(96);function h(t){return Object(x.a)("MuiAvatarGroup",t)}var m=Object(u.a)("MuiAvatarGroup",["root","avatar"]),O=a(1),p=["children","className","max","spacing","variant"],g={small:-16,medium:null},f=Object(l.a)("div",{name:"MuiAvatarGroup",slot:"Root",overridesResolver:function(t,e){return Object(c.a)(Object(r.a)({},"& .".concat(m.avatar),e.avatar),e.root)}})((function(t){var e,a=t.theme;return e={},Object(r.a)(e,"& .".concat(d.a.root),{border:"2px solid ".concat(a.palette.background.default),boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}}),Object(r.a)(e,"display","flex"),Object(r.a)(e,"flexDirection","row-reverse"),e})),v=Object(l.a)(b.a,{name:"MuiAvatarGroup",slot:"Avatar",overridesResolver:function(t,e){return e.avatar}})((function(t){var e=t.theme;return{border:"2px solid ".concat(e.palette.background.default),boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}}})),C=i.forwardRef((function(t,e){var a=Object(j.a)({props:t,name:"MuiAvatarGroup"}),r=a.children,l=a.className,d=a.max,b=void 0===d?5:d,x=a.spacing,u=void 0===x?"medium":x,m=a.variant,C=void 0===m?"circular":m,y=Object(n.a)(a,p),k=b<2?2:b,w=Object(c.a)({},a,{max:b,spacing:u,variant:C}),L=function(t){var e=t.classes;return Object(o.a)({root:["root"],avatar:["avatar"]},h,e)}(w),M=i.Children.toArray(r).filter((function(t){return i.isValidElement(t)})),H=M.length>k?M.length-k+1:0,S=u&&void 0!==g[u]?g[u]:-u;return Object(O.jsxs)(f,Object(c.a)({ownerState:w,className:Object(s.a)(L.root,l),ref:e},y,{children:[H?Object(O.jsxs)(v,{ownerState:w,className:L.avatar,style:{marginLeft:S},variant:C,children:["+",H]}):null,M.slice(0,M.length-H).reverse().map((function(t){return i.cloneElement(t,{className:Object(s.a)(t.props.className,L.avatar),style:Object(c.a)({marginLeft:S},t.props.style),variant:t.props.variant||C})}))]}))}));e.a=C},1033:function(t,e,a){"use strict";var r=a(7),n=a(882),c=a(1030),i=a(149),s=a(1007),o=a(999),l=a(52),j=a(38),d=a(139),b=a(984),x=a(117),u=a(1);e.a=function(t){var e=t.project,a=Object(i.a)(),h=Object(b.a)().t;return Object(u.jsx)(x.b,{to:"/dashboard/project-details",children:Object(u.jsxs)(n.a,{children:[Object(u.jsx)(s.a,{sx:{margin:"1rem",borderRadius:"8px",overflow:"hidden",height:165,"& img":{width:"100%",height:"100%",objectFit:"cover"}},children:Object(u.jsx)("img",{src:e.thumbnail,alt:"Project Thumbnail"})}),Object(u.jsxs)(s.a,{padding:2,paddingTop:0,children:[Object(u.jsx)(j.c,{children:h(e.name)}),Object(u.jsx)(j.h,{color:"text.disabled",letterSpacing:.5,fontWeight:500,children:e.description}),Object(u.jsxs)(l.a,{alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",pt:"1rem",children:[Object(u.jsxs)(l.a,{alignItems:"center",children:[Object(u.jsxs)(c.a,{children:[Object(u.jsx)(d.a,{alt:"Remy Sharp",src:e.teamMember[0]}),Object(u.jsx)(d.a,{alt:"Travis Howard",src:e.teamMember[1]})]}),Object(u.jsx)(o.a,{sx:{marginLeft:0}})]}),Object(u.jsx)(j.h,{sx:Object(r.a)({backgroundColor:"divider",padding:"5px 15px",borderRadius:"20px",color:"text.disabled",fontWeight:600},a.breakpoints.between(960,1050),{width:"100%",textAlign:"center",marginTop:1}),children:"3 Weeks Left"})]})]})]})})}},1034:function(t,e,a){"use strict";var r=a(21),n=a(222),c=(a(2),a(1));e.a=function(t){return Object(c.jsxs)(n.a,Object(r.a)(Object(r.a)({viewBox:"0 0 12 12"},t),{},{children:[Object(c.jsx)("circle",{cx:"6",cy:"6",r:"6",fill:"currentColor"}),Object(c.jsx)("path",{d:"M4.00007 5.84661L5.42338 7.26991L8.26998 4.4233",stroke:"white",strokeLinecap:"round",strokeLinejoin:"round"})]}))}},1069:function(t,e,a){"use strict";var r=a(21),n=a(1048),c=a(1034),i=a(222),s=a(1),o=function(t){return Object(s.jsx)(i.a,Object(r.a)(Object(r.a)({viewBox:"0 0 14 14"},t),{},{children:Object(s.jsx)("circle",{cx:"7",cy:"7",r:"6.5",fillOpacity:"0.06",stroke:"currentColor"})}))};e.a=function(t){return Object(s.jsx)(n.a,Object(r.a)({disableRipple:!0,checkedIcon:Object(s.jsx)(c.a,{fontSize:"small",color:"primary"}),icon:Object(s.jsx)(o,{fontSize:"small",color:"primary"})},t))}},1076:function(t,e,a){"use strict";var r=a(77),n=a(1);e.a=Object(r.a)(Object(n.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit")},1077:function(t,e,a){"use strict";var r=a(77),n=a(1);e.a=Object(r.a)(Object(n.jsx)("path",{d:"M14.4 6 14 4H5v17h2v-7h5.6l.4 2h7V6z"}),"Flag")},1098:function(t,e,a){"use strict";var r=a(77),n=a(1);e.a=Object(r.a)(Object(n.jsx)("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"}),"ChatBubble")},993:function(t,e,a){"use strict";var r=a(157),n=a(2);e.a=function(t){var e=Object(n.useContext)(r.a),a=e.title,c=e.setTitle;return Object(n.useEffect)((function(){return c(t)}),[t,c]),a}},997:function(t,e,a){"use strict";var r=a(21),n=a(222),c=a(1);e.a=function(t){return Object(c.jsx)(n.a,Object(r.a)(Object(r.a)({viewBox:"0 0 12 12"},t),{},{children:Object(c.jsx)("path",{d:"M10.6221 0.48305C9.97692 -0.161017 8.93219 -0.161017 8.28705 0.48305L7.70255 1.07081L1.48058 7.29007L1.46735 7.3034C1.46415 7.3066 1.46415 7.31001 1.46074 7.31001C1.45413 7.31993 1.44421 7.32974 1.43771 7.33966C1.43771 7.34297 1.4343 7.34297 1.4343 7.34627C1.42769 7.35619 1.42448 7.3628 1.41777 7.37272C1.41457 7.37603 1.41457 7.37923 1.41126 7.38264C1.40795 7.39256 1.40465 7.39917 1.40124 7.40909C1.40124 7.41229 1.39804 7.41229 1.39804 7.4157L0.0175678 11.5673C-0.0229278 11.6855 0.00785715 11.8164 0.096803 11.9041C0.159303 11.9658 0.2436 12.0003 0.331306 12C0.367153 11.9994 0.40269 11.9938 0.436987 11.9835L4.585 10.5996C4.58821 10.5996 4.58821 10.5996 4.59162 10.5964C4.60205 10.5933 4.61207 10.5888 4.62126 10.583C4.62385 10.5827 4.62612 10.5816 4.62798 10.5798C4.63779 10.5732 4.65102 10.5665 4.66093 10.5599C4.67075 10.5534 4.68077 10.5435 4.69069 10.5368C4.69399 10.5334 4.69719 10.5334 4.69719 10.5302C4.7006 10.5269 4.70721 10.5237 4.71052 10.517L11.517 3.70989C12.161 3.06469 12.161 2.01986 11.517 1.37476L10.6221 0.48305ZM4.47932 9.82336L2.18078 7.5247L7.93375 1.77118L10.2323 4.06984L4.47932 9.82336ZM1.85702 8.1357L3.86507 10.1438L0.849795 11.1479L1.85702 8.1357ZM11.0514 3.24745L10.7013 3.60089L8.40265 1.30203L8.75616 0.948691C9.14283 0.562292 9.76959 0.562292 10.1564 0.948691L11.0546 1.84702C11.4384 2.23548 11.4369 2.86085 11.0514 3.24745Z",fill:"currentColor"})}))}},998:function(t,e,a){"use strict";var r=a(526),n=a(985),c=a(1001),i=a(997),s=(a(2),a(38)),o=a(1);e.a=function(t){var e=t.anchorEl,a=t.handleMoreClose;return Object(o.jsxs)(r.a,{anchorEl:e,open:Boolean(e),onClose:a,children:[Object(o.jsxs)(n.a,{onClick:a,sx:{"&:hover":{color:"primary.main"}},children:[Object(o.jsx)(i.a,{sx:{fontSize:14,marginRight:1}}),Object(o.jsx)(s.h,{fontWeight:500,children:"Edit"})]}),Object(o.jsxs)(n.a,{onClick:a,sx:{"&:hover":{color:"primary.main"}},children:[Object(o.jsx)(c.a,{sx:{fontSize:14,marginRight:1}}),Object(o.jsx)(s.h,{fontWeight:500,children:"Remove"})]})]})}},999:function(t,e,a){"use strict";var r=a(21),n=a(1005),c=a(983),i=a(187),s=a(1);e.a=function(t){return Object(s.jsx)(c.a,Object(r.a)(Object(r.a)({sx:{p:0}},t),{},{children:Object(s.jsx)(i.a,{sx:{width:36,height:36,display:"flex",alignItems:"center",justifyContent:"center",border:"1px dashed",borderRadius:"50%",borderColor:"secondary.400"},children:Object(s.jsx)(n.a,{fontSize:"small",sx:{color:"secondary.400"}})})}))}}}]);
//# sourceMappingURL=6.4421c7f1.chunk.js.map