(this["webpackJsonpuko-react"]=this["webpackJsonpuko-react"]||[]).push([[39],{1097:function(e,t,a){"use strict";a.r(t);var o=a(154),n=a(4),r=a(16),i=a(13),c=a(25),s=a(929),d=a(939),l=a(896),u=a(823),b=a(478),j=a(909),p=a(941),h=a(944),m=a(923),x=a(45),O=a(32),g=a(114),f=a(0),v=a(1033),y=a(910),C=a(1088),w=a(870),k=a(1035),I=a(1034),T=a(926),A=a(317),S=a(190),P=a(1),W=function(e){var t=e.showAddTodoForm,a=e.setShowAddTodoForm,n=S.e().shape({title:S.f().min(3,"Too Short").required("Title is Required!"),date:S.c().required("Date is Required!"),description:S.f().min(10,"Too Short").required("Description is Required!")}),i=Object(A.d)({initialValues:{title:"",date:"",description:"",statusColor:"#61A9FF",mentionClient:""},validationSchema:n,onSubmit:function(e){console.log(e),a(!1)}}),c=i.errors,s=i.values,d=i.handleChange,l=i.handleSubmit,u=i.touched,j=i.setFieldValue;return Object(P.jsx)("form",{onSubmit:l,children:Object(P.jsxs)(o.a,{sx:{marginTop:2,display:t?"auto":"none"},children:[Object(P.jsx)(T.a,{fullWidth:!0,name:"title",placeholder:"Title",value:s.title,onChange:d,helperText:u.title&&c.title,error:Boolean(u.title&&c.title),sx:{mb:1}}),Object(P.jsx)(C.a,{value:s.date,onChange:function(e){return j("date",e)},renderInput:function(e){return Object(P.jsx)(T.a,Object(r.a)(Object(r.a)({},e),{},{name:"date",fullWidth:!0,error:Boolean(u.date&&c.date),helperText:u.date&&c.date,sx:{mb:1,"& .MuiSvgIcon-root":{color:"text.disabled"}}}))}}),Object(P.jsx)(T.a,{fullWidth:!0,name:"mentionClient",placeholder:"@mention Client",onChange:d,value:s.mentionClient,sx:{mb:1}}),Object(P.jsx)(T.a,{fullWidth:!0,rows:5,multiline:!0,name:"description",placeholder:"Description",value:s.description,onChange:d,error:Boolean(u.description&&c.description),helperText:u.description&&c.description,sx:{"& .MuiOutlinedInput-root":{padding:0,"& textarea":{paddingY:1}}}}),Object(P.jsxs)(x.a,{alignItems:"center",mb:"1rem",children:[Object(P.jsx)(w.a,{component:"small",sx:{color:"text.disabled"},children:"Select Color"}),Object(P.jsxs)(k.a,{row:!0,name:"statusColor",value:s.statusColor,onChange:d,children:[Object(P.jsx)(I.a,{value:"#61A9FF",size:"small",color:"primary"}),Object(P.jsx)(I.a,{value:"#2CC5BD",size:"small",color:"success"}),Object(P.jsx)(I.a,{value:"#FD396D",size:"small",color:"error"}),Object(P.jsx)(I.a,{value:"#A798FF",size:"small",color:"info"})]})]}),Object(P.jsxs)(x.a,{children:[Object(P.jsx)(b.a,{variant:"contained",fullWidth:!0,type:"submit",children:"Save"}),Object(P.jsx)(o.a,{width:"2rem"}),Object(P.jsx)(b.a,{fullWidth:!0,onClick:function(){return a(!1)},sx:{backgroundColor:"secondary.300",color:"text.disabled","&:hover":{backgroundColor:"secondary.300"}},children:"Cancel"})]})]})})},F=a(10),H=Object(F.a)(o.a)((function(){return{maxHeight:"calc(100% - 53px)",minHeight:"calc(100% - 53px)",padding:"1rem",overflow:"auto","&[data-rbd-droppable-id='todo']":{maxHeight:"calc(100% - 129px)",minHeight:"calc(100% - 129px)"}}})),R=(Object(F.a)(o.a)((function(e){return{width:6,height:6,marginTop:6,marginRight:10,borderRadius:"50%",backgroundColor:e.color}})),[{id:"01",title:"Create Minimal Logo",date:"9/17/2021",description:"Hey, Pixy can we get on a quick call? i need to show you something. You need to do some work for me ASAP. And you need to do it before Aug 25. Thanks get back to me.",author:{name:"Tom Cruise",image:"/static/avatar/001-man.svg"},statusColor:"primary.main"},{id:"02",title:"Therapy Session",date:"9/17/2021",description:"Hey, Pixy can we get on a quick call? i need to show you something. You need to do some work for me ASAP. And you need to do it before Aug 25. Thanks get back to me.",author:{name:"Tom Cruise",image:"/static/avatar/002-girl.svg"},statusColor:"primary.red"},{id:"03",title:"Create Minimal Logo",date:"9/17/2021",description:"Hey, Pixy can we get on a quick call? i need to show you something. You need to do some work for me ASAP. And you need to do it before Aug 25. Thanks get back to me.",author:{name:"Tom Cruise",image:"/static/avatar/005-man-1.svg"},statusColor:"primary.main"},{id:"04",title:"Website UI Design",date:"9/17/2021",description:"Hey, Pixy can we get on a quick call? i need to show you something. You need to do some work for me ASAP. And you need to do it before Aug 25. Thanks get back to me.",author:{name:"Tom Cruise",image:"/static/avatar/011-man-2.svg"},statusColor:"primary.yellow"}]),D={todo:{name:"To do",todos:R.slice(0,2)},progress:{name:"In Progress",todos:[R[2]]},done:{name:"Done",todos:[R[3]]}},q=function(){var e=Object(f.useState)(D),t=Object(i.a)(e,2),a=t[0],C=t[1],w=Object(f.useState)(!1),k=Object(i.a)(w,2),I=k[0],T=k[1],A=Object(y.a)().t;return Object(P.jsx)(l.a,{container:!0,spacing:3,children:Object(P.jsx)(v.a,{onDragEnd:function(e){return function(e,t,a){if(e.destination){var o=e.source,s=e.destination;if(o.droppableId!==s.droppableId||o.index!==s.index)if(o.droppableId!==s.droppableId){var d,l=t[o.droppableId],u=t[s.droppableId],b=Object(c.a)(l.todos),j=Object(c.a)(u.todos),p=b.splice(o.index,1),h=Object(i.a)(p,1)[0];j.splice(s.index,0,h),a(Object(r.a)(Object(r.a)({},t),{},(d={},Object(n.a)(d,o.droppableId,Object(r.a)(Object(r.a)({},l),{},{todos:b})),Object(n.a)(d,s.droppableId,Object(r.a)(Object(r.a)({},u),{},{todos:j})),d)))}else{var m=t[o.droppableId],x=Object(c.a)(m.todos),O=x.splice(o.index,1),g=Object(i.a)(O,1)[0];x.splice(s.index,0,g),a(Object(r.a)(Object(r.a)({},t),{},Object(n.a)({},o.droppableId,Object(r.a)(Object(r.a)({},m),{},{todos:x}))))}}}(e,a,C)},children:Object.entries(a).map((function(e,t){var a=Object(i.a)(e,2),n=a[0],c=a[1];return Object(P.jsx)(l.a,{item:!0,xs:12,sm:6,lg:4,children:Object(P.jsxs)(u.a,{sx:{height:"100%",maxHeight:700},children:["todo"===n?Object(P.jsxs)(o.a,{padding:"1rem",children:[Object(P.jsx)(O.e,{children:A(c.name)}),Object(P.jsx)(b.a,{fullWidth:!0,variant:"contained",onClick:function(){return T(!0)},sx:{marginY:"1rem",display:I?"none":"auto"},children:Object(P.jsx)(s.a,{})}),Object(P.jsx)(W,{showAddTodoForm:I,setShowAddTodoForm:T})]}):Object(P.jsx)(O.e,{padding:"1rem",children:A(c.name)}),Object(P.jsx)(v.c,{droppableId:n,children:function(e){return Object(P.jsxs)(H,Object(r.a)(Object(r.a)({},e.droppableProps),{},{ref:e.innerRef,children:[c.todos.map((function(e,t){return Object(P.jsx)(v.b,{draggableId:e.id,index:t,children:function(t){return Object(P.jsxs)(u.a,Object(r.a)(Object(r.a)(Object(r.a)({ref:t.innerRef},t.draggableProps),t.dragHandleProps),{},{style:Object(r.a)({},t.draggableProps.style),sx:{boxShadow:2,padding:"1rem",marginBottom:"1.5rem"},children:[Object(P.jsxs)(x.a,{alignItems:"center",justifyContent:"space-between",children:[Object(P.jsx)(O.h,{children:"July 2, 2020"}),Object(P.jsx)(j.a,{sx:{padding:0},children:Object(P.jsx)(d.a,{})})]}),Object(P.jsxs)(o.a,{sx:{textAlign:"center",pt:6,pb:4},children:[Object(P.jsx)(O.c,{children:"Web Designing"}),Object(P.jsx)(O.f,{color:"text.disabled",fontWeight:500,mt:.5,children:"Prototyping"})]}),Object(P.jsxs)(x.a,{justifyContent:"space-between",py:1,children:[Object(P.jsx)(O.g,{fontWeight:600,children:"Project Progress"}),Object(P.jsx)(O.g,{fontWeight:600,children:"32%"})]}),Object(P.jsx)(p.a,{value:32,variant:"determinate",sx:{"& .MuiLinearProgress-bar":{backgroundColor:e.statusColor}}}),Object(P.jsxs)(x.a,{alignItems:"center",justifyContent:"space-between",pt:"1.5rem",children:[Object(P.jsxs)(x.a,{alignItems:"center",children:[Object(P.jsxs)(h.a,{children:[Object(P.jsx)(g.a,{alt:"Remy Sharp",src:"/static/avatar/001-man.svg"}),Object(P.jsx)(g.a,{alt:"Travis Howard",src:"/static/avatar/002-girl.svg"})]}),Object(P.jsx)(m.a,{sx:{marginLeft:0}})]}),Object(P.jsx)(O.h,{sx:{backgroundColor:"divider",padding:"5px 15px",borderRadius:"20px",marginLeft:1,color:"text.disabled",fontWeight:600},children:"3 Weeks Left"})]})]}),e.id)}},e.id)})),e.placeholder]}))}})]})},t)}))})})},M=a(918);t.default=function(){return Object(M.a)("To Do List"),Object(P.jsx)(o.a,{pt:2,pb:4,children:Object(P.jsx)(q,{})})}},918:function(e,t,a){"use strict";var o=a(188),n=a(0);t.a=function(e){var t=Object(n.useContext)(o.a),a=t.title,r=t.setTitle;return Object(n.useEffect)((function(){return r(e)}),[e,r]),a}},923:function(e,t,a){"use strict";var o=a(16),n=a(929),r=a(909),i=a(154),c=a(1);t.a=function(e){return Object(c.jsx)(r.a,Object(o.a)(Object(o.a)({sx:{p:0}},e),{},{children:Object(c.jsx)(i.a,{sx:{width:36,height:36,display:"flex",alignItems:"center",justifyContent:"center",border:"1px dashed",borderRadius:"50%",borderColor:"secondary.400"},children:Object(c.jsx)(n.a,{fontSize:"small",sx:{color:"secondary.400"}})})}))}},926:function(e,t,a){"use strict";var o=a(16),n=a(10),r=a(477),i=a(1),c=Object(n.a)(r.a)((function(e){var t=e.theme;return{"&:hover, & .MuiOutlinedInput-root:hover":{"& .MuiOutlinedInput-notchedOutline":{borderColor:t.palette.primary.main}},"& .MuiOutlinedInput-input":{fontSize:12,minHeight:35,fontWeight:500,borderRadius:"8px",padding:"0px 1rem",color:t.palette.text.primary},"& .MuiOutlinedInput-notchedOutline":{borderRadius:"8px",borderColor:"transparent",borderWidth:"1px !important"},"& .MuiInputBase-root":{backgroundColor:"light"===t.palette.mode?t.palette.text.secondary:t.palette.divider}}}));t.a=function(e){return Object(i.jsx)(c,Object(o.a)(Object(o.a)({},e),{},{fullWidth:!0}))}}}]);
//# sourceMappingURL=39.8070315d.chunk.js.map