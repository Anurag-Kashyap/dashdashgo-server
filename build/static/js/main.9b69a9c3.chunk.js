(this["webpackJsonprockstack-capital"]=this["webpackJsonprockstack-capital"]||[]).push([[0],{178:function(e,t,n){},239:function(e,t,n){e.exports=n.p+"static/media/header-user.4480ca39.svg"},240:function(e,t,n){e.exports=n.p+"static/media/settings.9425d9cf.svg"},241:function(e,t,n){e.exports=n.p+"static/media/logout.ec1e9378.svg"},269:function(e,t,n){e.exports=n.p+"static/media/user_image.1d0c0e6e.svg"},282:function(e,t,n){e.exports=n(506)},287:function(e,t,n){},288:function(e,t,n){},489:function(e,t,n){},490:function(e,t,n){},493:function(e,t,n){},494:function(e,t,n){},495:function(e,t,n){},496:function(e,t,n){},497:function(e,t,n){},501:function(e,t,n){},502:function(e,t,n){},503:function(e,t,n){},506:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(22),c=n.n(o),l=n(32),i=(n(287),n(273),n(52)),u=n(17),s=(n(178),n(527)),m=n(514),d=n(524),p=n(523),f=n(522),g=n(518),b=n(271),E=n(526),O=(n(288),n(239)),j=n.n(O),h=n(240),A=n.n(h),S=n(241),L=n.n(S),y={serverHost:""},_=function(){return y};console.log(_());var C={headerName:"Dash Dash Go",serverHost:_().serverHost},v=n(23),R=n(5),U=n(243),w=n.n(U),P=n(520),N=w.a.create({baseURL:C.serverHost}),T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return!(e.hasOwnProperty("handlerEnabled")&&!e.handlerEnabled)};N.interceptors.request.use((function(e){return function(e){return T(e)&&(e.headers["X-auth-token"]=localStorage.getItem("X-auth-token","")),e}(e)}));N.interceptors.response.use((function(e){return function(e){return T(e.config),e}(e)}),(function(e){return function(e){return P.a.error("".concat(e.response.statusText,": ").concat(e.response.data.errors[0].msg)),console.log("Axios-errorHandler",e.response),T(e.config),Promise.reject(Object(R.a)({},e))}(e)}));var I=N,k="RETRY_LOGIN",F="RETRY_LOGIN_SUCCESS",D="RETRY_LOGIN_FAILURE",G="LOGOUT",H="LOGOUT_SUCCESS",x="LOGOUT_FAILURE",z="AUTH_LOGIN",q="AUTH_LOGIN_SUCCESS",X="AUTH_LOGIN_FAILURE",W="AUTH_REGISTER",M="AUTH_REGISTER_SUCCESS",V="AUTH_REGISTER_FAILURE",Y="AUTH_RESET",B="AUTH_RESET_SUCCESS",Q="AUTH_RESET_FAILURE",$="AUTH_CHANGE_PASSWORD",J="AUTH_CHANGE_PASSWORD_SUCCESS",K="AUTH_CHANGE_PASSWORD_FAILURE",Z="INVITE_USERS",ee="INVITE_USERS_SUCCESS",te="INVITE_USERS_FAILURE",ne="GET_USER_DETAILS",ae="GET_USER_DETAILS_SUCCESS",re="GET_USER_DETAILS_FAILURE",oe="GET_ALL_APPS",ce="GET_ALL_APPS_SUCCESS",le="GET_ALL_APPS_FAILURE",ie="GET_ALL_USER_APPS",ue="GET_ALL_USER_APPS_SUCCESS",se="GET_ALL_USER_APPS_FAILURE",me="GET_ALL_FREQUENT_APPS",de="GET_ALL_FREQUENT_APPS_SUCCESS",pe="GET_ALL_FREQUENT_APPS_FAILURE",fe="ADD_USER_APPS",ge="ADD_USER_APPS_SUCCESS",be="ADD_USER_APPS_FAILURE",Ee="REMOVE_USER_APPS",Oe="REMOVE_USER_APPS_SUCCESS",je="REMOVE_USER_APPS_FAILURE",he="ADD_NEW_APP",Ae="ADD_NEW_APP_SUCCESS",Se="ADD_NEW_APP_FAILURE",Le="UPDATE_USER_DETAILS",ye="UPDATE_USER_DETAILS_SUCCESS",_e="UPDATE_USER_DETAILS_FAILURE",Ce=function(e){return console.log("Retry Login Action Success",e),{type:F,payload:e}},ve=function(e){return console.log("Retry Login Failure",e),{type:D,payload:e}},Re=function(e){return{type:H,payload:e}},Ue=function(e){return{type:x,payload:e}},we=function(e){return localStorage.setItem("X-auth-token",e.token),{type:q,payload:e}},Pe=function(e){return{type:X,payload:e}},Ne=function(e){return{type:W,payload:e}},Te=function(e){return{type:M,payload:e}},Ie=function(e){return{type:V,payload:e}},ke=function(e){return console.log(e),{type:ye,payload:e}},Fe=function(e){return{type:_e,payload:e}},De=function(e){return{type:ae,payload:e}},Ge=function(e){return{type:re,payload:e}},He=function(e){return{type:ge,payload:e}},xe=function(e){return{type:be,payload:e}},ze=function(e){return function(t){I.get("/apps/",e).then((function(e){console.log(e),t(qe(e.data))})).catch((function(e){return t(Xe(e))}))}},qe=function(e){return{type:ce,payload:e}},Xe=function(e){return{type:le,payload:e}},We={loginPage:"/",homePage:"/home",onboardingPage:"/onboarding"},Me=r.a.memo((function(e){var t=[{key:"settings-link",icon:A.a,text:"Settings",subheader:"Control your account settings",value:"Settings",logic:function(){}},{key:"logout-link",icon:L.a,text:"Logout",subheader:"",value:"Logout",logic:function(){e.logout()}}];Object(a.useEffect)((function(){e.isAuthenticated||e.history.push(We.loginPage)}),[e.isAuthenticated]);var n=Object(a.useState)(0),o=Object(u.a)(n,2),c=o[0],l=(o[1],Object(a.useState)(100)),i=Object(u.a)(l,2),O=i[0];i[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"mainContainer",style:{marginLeft:c-6,height:O+"%",overflowY:"auto"}},r.a.createElement(s.a,null,r.a.createElement(m.a,{fluid:!0,className:"home"},r.a.createElement(m.a,null,r.a.createElement(d.a.Row,{className:"home-header"},r.a.createElement(p.a,{icon:"labeled",size:"small",position:"right",className:"home-header-menu"},r.a.createElement("div",{className:"home-header-logo"},C.headerName),r.a.createElement(p.a.Menu,{position:"right",size:"small"},r.a.createElement(f.a,{negative:!0,className:"home-header-button",circular:!0,link:!0,as:"div",to:"/"},"ADD APPS"),r.a.createElement(g.a,{pointing:!0,item:!0,link:!0,className:"home-header-user-dropdown",text:r.a.createElement(b.a,{src:j.a,size:"massive",circular:!0}),options:t},r.a.createElement(g.a.Menu,null,t.map((function(e){return r.a.createElement(g.a.Item,{onClick:e.logic},r.a.createElement(E.a,{as:"h5",icon:r.a.createElement(b.a,{src:e.icon}),content:e.text,subheader:e.subheader}))})))))))))),r.a.createElement(m.a,{fluid:!0,className:"main-content"},e.children)))})),Ve=Object(i.g)(Object(v.b)((function(e){return console.log("Onboarding State: ",e),{isAuthenticated:e.isAuthenticated,error:e.err,isLoading:e.isLoading}}),(function(e){return{logout:function(){return e((function(e){e({type:G,payload:t});try{localStorage.removeItem("X-auth-token"),localStorage.getItem("X-auth-token")?e(Ue("Logout Failed")):e(Re("Logout"))}catch(n){e(Ue("Logout Failed"))}}));var t}}}))(Me)),Ye=(n(489),n(490),n(519)),Be=r.a.memo((function(e){var t=Object(a.useState)(!1),n=Object(u.a)(t,2),o=n[0],c=n[1],l=e.alreadySelected;Object(a.useEffect)((function(){l&&c(l)}),[l]),Object(a.useEffect)((function(){e.onClicked(o,{app:e.data._id,url:e.data.url})}),[o]);return r.a.createElement(Ye.a,{className:o?"AppCard active":"AppCard",onClick:e.clickable&&function(){c((function(e){return!e}))}},r.a.createElement(Ye.a.Content,{className:"AppCard-banner"},r.a.createElement(b.a,{src:e.data.icon,className:"AppCard-image"})),r.a.createElement(Ye.a.Content,{className:"AppCard-content"},r.a.createElement(Ye.a.Header,null,r.a.createElement("div",{className:"AppCard-content-title"},e.data.name))))})),Qe=n(521),$e=r.a.memo((function(){return r.a.createElement(Ye.a,null,r.a.createElement(Ye.a.Content,null,r.a.createElement(Qe.a,null,r.a.createElement(Qe.a.Image,null),r.a.createElement(Qe.a.Line,null))))})),Je=n(79),Ke=n(516),Ze=Object(v.b)((function(e){return console.log("Onboarding State: ",e),{userApps:e.userApps,frequentApps:e.frequentApps,error:e.err,isLoading:e.isLoading}}),(function(e){return{getAllApps:function(){return e(ze())},getUserDetails:function(){return e((function(e){e({type:ne,payload:t}),I.get("/profile/",t).then((function(t){return e(De(t.data))})).catch((function(t){return e(Ge(t))}))}));var t}}}))((function(e){return Object(a.useEffect)((function(){e.getAllApps(),e.getUserDetails()}),[]),r.a.createElement(Ve,null,r.a.createElement(d.a,{container:!0,columns:"4"},e.isLoading||e.frequentApps.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a.Row,{centered:!0},r.a.createElement(d.a.Column,{mobile:16,tablet:16,computer:10},r.a.createElement(E.a,null,r.a.createElement("div",{className:"Home-title"},"Frequent Apps",r.a.createElement(Je.a,{name:"edit outline",style:{marginLeft:"2rem",color:"grey",cursor:"pointer"}}))))),r.a.createElement(d.a.Row,{stretched:!0,centered:!0},r.a.createElement(d.a.Column,{mobile:16,tablet:16,computer:10},r.a.createElement(d.a,{columns:"4"},r.a.createElement(d.a.Row,{stretched:!0},e.isLoading&&[1,2,3,4,5,6].map((function(e){return r.a.createElement(d.a.Column,{mobile:6,tablet:4,computer:4,style:{margin:"2rem 0"}},r.a.createElement($e,null))})),e.userApps.map((function(e){return r.a.createElement(d.a.Column,{mobile:6,tablet:4,computer:4,style:{margin:"2rem 0"}},r.a.createElement(Be,{data:e,clickable:!1,onClicked:function(){}}))}))))))):"",r.a.createElement(d.a.Row,{centered:!0},r.a.createElement(d.a.Column,{mobile:16,tablet:16,computer:10},r.a.createElement(E.a,null,r.a.createElement("div",{className:"Home-title"},"All User Apps",e.userApps.length>0&&r.a.createElement(Je.a,{name:"edit outline",style:{marginLeft:"2rem",color:"grey",cursor:"pointer"}}))))),r.a.createElement(d.a.Row,{stretched:!0,centered:!0},r.a.createElement(d.a.Column,{mobile:16,tablet:16,computer:10},r.a.createElement(d.a,{columns:"4"},r.a.createElement(d.a.Row,{stretched:!0},e.isLoading&&[1,2,3,4,5,6].map((function(e){return r.a.createElement(d.a.Column,{mobile:6,tablet:4,computer:4,style:{margin:"2rem 0"}},r.a.createElement($e,null))})),e.userApps.map((function(e){return r.a.createElement(d.a.Column,{mobile:6,tablet:4,computer:4,style:{margin:"2rem 0"}},r.a.createElement(Be,{data:e,clickable:!1,onClicked:function(){}}))})),!e.userApps.length&&r.a.createElement(d.a.Column,{mobile:16,tablet:16,computer:16},r.a.createElement(Ke.a,{status:"warning",title:"No Apps Found.",subTitle:"To get application you need to App your application. Click below to add.",extra:r.a.createElement(f.a,{color:"primary",circular:!0,basic:!0},r.a.createElement(Je.a,{name:"add"})," ADD APPS")}))))))))})),et=(n(493),n(494),r.a.memo((function(e){return r.a.createElement(f.a,{content:r.a.createElement(r.a.Fragment,null,r.a.createElement(Je.a,{name:"google play"}),r.a.createElement(Je.a,{name:"apple"}),r.a.createElement(Je.a,{name:"windows"})),basic:!0,label:{as:"a",basic:!0,pointing:"right",content:"Get Apps"},labelPosition:"left"})})),r.a.memo((function(e){var t=Object(a.useState)({text:"",link:""}),n=Object(u.a)(t,2),o=(n[0],n[1]);Object(a.useEffect)((function(){c()}),[]);var c=function(){o((function(e){return{text:"Special Offer: Boost your career with our all-access membership and get all our current and future courses for one price!",link:"/home"}}))};return r.a.createElement(m.a,{fluid:!0,className:"default"},r.a.createElement(m.a,null,r.a.createElement(m.a,null,r.a.createElement(E.a,{className:"default-header"},r.a.createElement("div",{className:"logo",style:{display:"flex",alignContent:"center",alignItems:"center"}},r.a.createElement("span",{className:"default-header-logo"},C.headerName))))),r.a.createElement(m.a,{fluid:!0},r.a.createElement(m.a,null,e.children)),r.a.createElement(m.a,{fluid:!0},r.a.createElement(m.a,{className:"default-footer"},r.a.createElement(d.a,{doubling:!0,centered:!0,columns:"equal"},r.a.createElement(d.a.Row,null,r.a.createElement(d.a.Column,{mobile:16,tablet:16,computer:16,className:"default-footer-col"},"Copyright"," ",r.a.createElement("b",null," ","\xa9 ",(new Date).getFullYear()," ",C.headerName),", All right reserved"))))))}))),tt=(n(495),n(517)),nt=(n(496),r.a.memo((function(e){var t=Object(a.useState)({content:"",pointing:"below"}),n=Object(u.a)(t,2),o=n[0],c=n[1],l=Object(a.useState)({content:"",pointing:"below"}),i=Object(u.a)(l,2),s=i[0],m=i[1],d=Object(a.useState)({email:"",password:""}),p=Object(u.a)(d,2),f=p[0],g=p[1],b=Object(a.useState)(!0),E=Object(u.a)(b,2),O=E[0],j=E[1];Object(a.useEffect)((function(){h()}),[]),Object(a.useEffect)((function(){e.isAuthenticated&&e.history.push(We.homePage)}),[e.isAuthenticated]);var h=function(){c(null),m(null)},A=function(){c(null),j(!1);f.email?/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(f.email)||(c({content:"Invalid email address",pointing:"below"}),j(!0)):(c({content:"Enter your email address",pointing:"below"}),j(!0))},S=function(){m(null),j(!1),f.password||(m({content:"Enter your password",pointing:"below"}),j(!0))},L=function(t){t.preventDefault(),console.log(f),j(!1),h(),A(),S(),O||e.authLogin(f)};return r.a.createElement(tt.a,{className:"login-form",onSubmit:L},r.a.createElement(tt.a.Field,null,r.a.createElement(tt.a.Input,{id:"form-input-control-error-email",fluid:!0,icon:"envelope open outline",iconPosition:"left",placeholder:"Your email address",value:f.email,error:o,onChange:function(e){console.log(e.target.value);var t=e.target.value;g((function(e){return Object(R.a)(Object(R.a)({},e),{},{email:t})})),A()}})),r.a.createElement(tt.a.Field,null,r.a.createElement(tt.a.Input,{fluid:!0,type:"password",id:"form-input-control-error-password",icon:"eye slash outline",iconPosition:"left",placeholder:"Password",value:f.password,error:s,onChange:function(e){console.log(e.target.value);var t=e.target.value;g((function(e){return Object(R.a)(Object(R.a)({},e),{},{password:t})})),S()}})),r.a.createElement(tt.a.Field,null,r.a.createElement(tt.a.Button,{id:"form-button-control-public",fluid:!0,iconPosition:"left",color:"blue",onClick:L,loading:e.isLoading,disabled:O},"LOGIN")))}))),at=Object(i.g)(Object(v.b)((function(e){return{user:e.user,isAuthenticated:e.isAuthenticated,isLoading:e.isLoading}}),(function(e){return{authLogin:function(t){return e((n=t,function(e){e({type:z,payload:n}),I.post("/auth/",n).then((function(t){return e(we(t.data))})).catch((function(t){return e(Pe(t))}))}));var n}}}))(nt)),rt=n(528),ot=(n(497),r.a.memo((function(e){var t=Object(a.useState)(null),n=Object(u.a)(t,2),o=n[0],c=n[1],l=Object(a.useState)(null),i=Object(u.a)(l,2),s=i[0],m=i[1],d=Object(a.useState)(null),p=Object(u.a)(d,2),g=p[0],b=p[1],E=Object(a.useState)(null),O=Object(u.a)(E,2),j=O[0],h=O[1],A=Object(a.useState)({email:"",password:"",name:"",company:""}),S=Object(u.a)(A,2),L=S[0],y=S[1],_=Object(a.useState)(!0),C=Object(u.a)(_,2),v=C[0],U=C[1],w=Object(a.useState)(!0),P=Object(u.a)(w,2),N=P[0],T=P[1],I=Object(a.useState)(!1),k=Object(u.a)(I,2),F=k[0],D=k[1];Object(a.useEffect)((function(){e.user&&e.user.email&&(T(!1),D(!0),e.showSecondStep()),e.user&&e.user.organization&&y((function(t){return Object(R.a)(Object(R.a)({},t),{},{company:e.user.organization})})),e.user&&e.user.name&&y((function(t){return Object(R.a)(Object(R.a)({},t),{},{name:e.user.name})}))}),[e.user]),Object(a.useEffect)((function(){e.isOnboarded&&e.history.push(We.onboardingPage)}),[e.isOnboarded]);var G=function(){m(null),U(!1);L.email?/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(L.email)||(m({content:"Invalid email address",pointing:"below"}),U(!0)):(m({content:"Enter your email address",pointing:"below"}),U(!0))},H=function(){b(null),U(!1),L.password?L.password.length<8&&(b({content:"Password must be greater than length 7",pointing:"below"}),U(!0)):(b({content:"Enter your password",pointing:"below"}),U(!0))},x=function(t){t.preventDefault(),G(),H(),v||e.authRegister(L)},z=function(){c(null),U(!1),L.name||(c({content:"Enter your full name",pointing:"below"}),U(!0))},q=function(){c(null),U(!1),L.company||(h({content:"Enter your company name",pointing:"below"}),U(!0))},X=function(t){t.preventDefault(),c(null),m(null),b(null),U(!1),z(),q(),v||e.updateUserProfile(L)};return r.a.createElement(rt.a.Group,{animation:"horizontal flip",duration:"300"},N&&r.a.createElement(tt.a,{className:"signup-form",onSubmit:x},r.a.createElement(r.a.Fragment,null,r.a.createElement(tt.a.Field,null,r.a.createElement(tt.a.Input,{fluid:!0,icon:"envelope open outline",iconPosition:"left",placeholder:"Your email address",value:L.email,error:s,onChange:function(e){var t=e.target.value;y((function(e){return{email:t,password:e.password}})),G()}})),r.a.createElement(tt.a.Field,null,r.a.createElement(tt.a.Input,{fluid:!0,type:"password",icon:"eye slash outline",iconPosition:"left",placeholder:"Password",value:L.password,error:g,onChange:function(e){var t=e.target.value;y((function(e){return Object(R.a)(Object(R.a)({},e),{},{email:e.email,password:t})})),H()}})),r.a.createElement(f.a,{fluid:!0,color:"red",onClick:x,loading:e.isLoading,disabled:v},"REGISTER"))),F&&r.a.createElement(tt.a,{className:"signup-form",onSubmit:X},r.a.createElement(r.a.Fragment,null,r.a.createElement(tt.a.Field,null,r.a.createElement(tt.a.Input,{fluid:!0,icon:"user outline",iconPosition:"left",placeholder:"Full name",value:L.name,error:o,onChange:function(e){var t=e.target.value;y((function(e){return Object(R.a)(Object(R.a)({},e),{},{name:t})})),z()}})),r.a.createElement(tt.a.Field,null,r.a.createElement(tt.a.Input,{fluid:!0,icon:"building outline",iconPosition:"left",placeholder:"Company Name",value:L.company,error:j,onChange:function(e){var t=e.target.value;y((function(e){return Object(R.a)(Object(R.a)({},e),{},{company:t})})),q()}})),r.a.createElement(tt.a.Field,null,r.a.createElement(tt.a.Button,{fluid:!0,iconPosition:"left",color:"green",loading:e.isLoading,disabled:v,onClick:X},"SUBMIT")))))}))),ct=Object(i.g)(Object(v.b)((function(e){return console.log(e),{user:e.user,isOnboarded:e.isOnboarded,isLoading:e.isLoading}}),(function(e){return{authRegister:function(t){return e((n={email:t.email,password:t.password},function(e){e(Ne(n)),I.post("/users/",n).then((function(t){return e(Te(t.data))})).catch((function(t){return e(Ie(t))}))}));var n},updateUserProfile:function(t){return e((n={name:t.name,organization:t.company},function(e){e({type:Le,payload:n}),I.post("/profile/",n).then((function(t){return e(ke(t.data))})).catch((function(t){return e(Fe(t))}))}));var n}}}))(ot)),lt=(n(501),r.a.memo((function(e){var t=Object(a.useState)(!0),n=Object(u.a)(t,2),o=n[0],c=n[1],l=Object(a.useState)(!1),i=Object(u.a)(l,2),s=i[0],m=i[1],d=Object(a.useState)(!1),p=Object(u.a)(d,2),f=p[0],g=p[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"auth"},r.a.createElement(rt.a.Group,{animation:"horizontal flip",duration:"300"},s&&r.a.createElement(Ye.a,{fluid:!0,className:"loginCard"},r.a.createElement(Ye.a.Content,null,r.a.createElement("h1",{className:"loginCard-headline"},!f&&"Register with us",f&&"Complete your profile and Let's begin."),r.a.createElement(ct,{showSecondStep:function(){g(!0)}}),r.a.createElement("div",{style:{marginTop:"3rem"}},"Already have account?",r.a.createElement("span",{style:{color:"blue",cursor:"pointer"},onClick:function(){c(!0),m(!1)}}," ","Click Here")))),o&&r.a.createElement(Ye.a,{fluid:!0,className:"loginCard"},r.a.createElement(Ye.a.Content,null,r.a.createElement("h1",{className:"loginCard-headline"},"Welcome! Please Login to your account"),r.a.createElement(at,null),r.a.createElement("div",{style:{marginTop:"3rem"}},"New to RockStack Capital?",r.a.createElement("span",{style:{color:"blue",cursor:"pointer"},onClick:function(){c(!1),m(!0)}}," ","Click Here Register")))))))}))),it=Object(i.g)(Object(v.b)((function(e){return{userApps:e.userApps,isAuthenticated:e.isAuthenticated,allApps:e.allApps,isLoading:e.isLoading}}),null)((function(e){return Object(a.useEffect)((function(){}),[e.isAuthenticated]),r.a.createElement("div",{className:"login-banner"},r.a.createElement(et,null,r.a.createElement(d.a,{columns:"1",className:"login",style:{paddingTop:"10rem"}},r.a.createElement(d.a.Row,null,r.a.createElement(d.a.Column,{mobile:16,tablet:12,computer:5},r.a.createElement(lt,null))))))}))),ut=n(515),st=(n(502),n(269)),mt=n.n(st),dt=Object(i.g)(Object(v.b)((function(e){return console.log("Onboarding State: ",e),{userApps:e.userApps,user:e.user,isAuthenticated:e.isAuthenticated,allApps:e.allApps,isLoading:e.isLoading}}),(function(e){return{getAllApps:function(){return e(ze())},addUserApps:function(t){return e(function(e){return function(t){t({type:fe,payload:e}),I.post("/profile/",e).then((function(e){return t(He(e.data))})).catch((function(e){return t(xe(e))}))}}({userApps:t}))}}}))((function(e){var t=Object(a.useState)([]),n=Object(u.a)(t,2),o=n[0],c=n[1];Object(a.useEffect)((function(){}),[]),Object(a.useEffect)((function(){e.getAllApps()}),[]),Object(a.useEffect)((function(){e.userApps.length&&e.history.push(We.homePage)}),[e.userApps]);var l=function(e,t){c(e?function(e){return e.concat(t)}:function(e){return console.log(e),e.filter((function(e){return e.id!==t.id}))})},i=function(){e.addUserApps(o)};return r.a.createElement(et,null,r.a.createElement(d.a,{container:!0,columns:"3",className:"login"},r.a.createElement(d.a.Row,{centered:!0,className:"Onboarding"},r.a.createElement(d.a.Column,{mobile:16,tablet:16,computer:10,className:"Onboarding-header"},r.a.createElement(E.a,{as:"h2",icon:r.a.createElement(b.a,{src:mt.a}),content:"Hi ".concat(e.user&&e.user.name,","),subheader:"Select the apps that power your business"}),r.a.createElement(f.a,{floated:!0,color:"green",size:"large",disabled:!o.length,onClick:i,loading:e.isLoading},"Select Apps"))),r.a.createElement(d.a.Row,{stretched:!0,centered:!0},r.a.createElement(d.a.Column,{mobile:16,tablet:16,computer:10},r.a.createElement(d.a,{columns:"5"},r.a.createElement(d.a.Row,{style:{minHeight:400}},r.a.createElement(ut.a,{size:"large",active:!e.allApps.length},"Loading"),e.allApps.map((function(e){return e.header?r.a.createElement(d.a.Column,{mobile:16,tablet:16,computer:16,style:{margin:"1rem 0"}},r.a.createElement("div",{className:"Onboarding-title"},e.header)):r.a.createElement(d.a.Column,{mobile:6,tablet:4,computer:4,style:{margin:"2rem 0"}},r.a.createElement(Be,{data:e,onClicked:l,clickable:!0}))})),r.a.createElement(d.a.Column,{mobile:16,tablet:16,computer:16,style:{padding:"2rem 0"}},r.a.createElement(f.a,{fluid:!0,color:"green",size:"large",disabled:!o.length,onClick:i,loading:e.isLoading},"Select Apps"))))))))}))),pt=(n(503),n(504),Object(i.g)(Object(v.b)((function(e){return console.log("APP STATE: ",e),{isAuthenticated:e.isAuthenticated,isLoading:e.isLoading}}),(function(e){return{retryLogin:function(){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return console.log("Retry Login Action",e),function(t){t({type:k,payload:e}),localStorage.getItem("X-auth-token")?t(Ce(localStorage.getItem("X-auth-token"))):t(ve("No User Authentication Found"))}}())}}}))((function(e){Object(a.useEffect)((function(){console.log("retry mecahnism"),e.retryLogin()}),[e.isAuthenticated]);i.d,i.b,i.a;return e.isAuthenticated&&r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/home",component:Ze}),r.a.createElement(i.b,{path:"/onboarding",component:dt}),r.a.createElement(i.a,{path:"*",to:"/home"})),r.a.createElement(i.d,null,r.a.createElement(i.b,{path:We.loginPage,exact:!0,component:it}),r.a.createElement(i.b,{path:We.homePage,exact:!0,component:Ze}),r.a.createElement(i.b,{path:We.onboardingPage,exact:!0,component:dt}),r.a.createElement(i.a,{path:"*",to:We.LoginPage}))}))));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ft=n(76),gt=n(270),bt={user:null,frequentApps:[],userApps:[],allApps:[],isAuthenticated:!1,err:null,isLoading:!1},Et=function(e,t){return Object(R.a)(Object(R.a)({},e),{},{err:null,isLoading:!0})},Ot=function(e,t){return Object(R.a)(Object(R.a)({},e),{},{user:t.payload,isAuthenticated:!0,err:null,isLoading:!1})},jt=function(e,t){return Object(R.a)(Object(R.a)({},e),{},{err:t.error,isAuthenticated:!1,isLoading:!1})},ht=function(e,t){return console.log("Retry Login Reducer",e,t),Object(R.a)(Object(R.a)({},e),{},{err:null,isLoading:!0})},At=function(e,t){return console.log("Retry Login Success Reducer",e,t),Object(R.a)(Object(R.a)({},e),{},{isAuthenticated:!0,err:null,isLoading:!1})},St=function(e,t){return Object(R.a)(Object(R.a)({},e),{},{err:t.error,isAuthenticated:!1,isLoading:!1})},Lt=function(e,t){return Object(R.a)(Object(R.a)({},e),{},{err:null,isLoading:!0})},yt=function(e,t){return Object(R.a)(Object(R.a)({},e),{},{user:null,frequentApps:[],userApps:[],allApps:[],isAuthenticated:!1,err:null,isLoading:!1})},_t=function(e,t){return Object(R.a)(Object(R.a)({},e),{},{err:t.payload,isLoading:!1})},Ct=function(e,t){return Object(R.a)(Object(R.a)({},e),{},{err:null,isLoading:!0})},vt=function(e,t){return Object(R.a)(Object(R.a)({},e),{},{allApps:t.payload,err:null,isLoading:!1})},Rt=function(e,t){return Object(R.a)(Object(R.a)({},e),{},{err:t.error,isLoading:!1})},Ut=function(e,t){return Object(R.a)(Object(R.a)({},e),{},{err:null,isLoading:!0})},wt=function(e,t){return Object(R.a)(Object(R.a)({},e),{},{userApps:t.payload,err:null,isLoading:!1})},Pt=function(e,t){return Object(R.a)(Object(R.a)({},e),{},{err:t.error,isLoading:!1})},Nt=function(e,t){return Object(R.a)(Object(R.a)({},e),{},{err:null,isLoading:!0})},Tt=function(e,t){return localStorage.setItem("X-auth-token",t.payload.token),Object(R.a)(Object(R.a)({},e),{},{user:t.payload,isAuthenticated:!0,err:null,isLoading:!1})},It=function(e,t){return Object(R.a)(Object(R.a)({},e),{},{err:t.err,isLoading:!1})},kt=function(e,t){return Object(R.a)(Object(R.a)({},e),{},{err:null,isLoading:!0})},Ft=function(e,t){return Object(R.a)(Object(R.a)({},e),{},{err:null,isLoading:!1})},Dt=function(e,t){return Object(R.a)(Object(R.a)({},e),{},{err:t.err,isLoading:!1})},Gt=function(e,t){return Object(R.a)(Object(R.a)({},e),{},{err:null,isLoading:!0})},Ht=function(e,t){return Object(R.a)(Object(R.a)({},e),{},{err:null,isLoading:!1})},xt=function(e,t){return Object(R.a)(Object(R.a)({},e),{},{err:t.err,isLoading:!1})},zt=function(e,t){return Object(R.a)(Object(R.a)({},e),{},{err:null,isLoading:!0})},qt=function(e,t){return Object(R.a)(Object(R.a)({},e),{},{err:null,isLoading:!1})},Xt=function(e,t){return Object(R.a)(Object(R.a)({},e),{},{err:t.err,isLoading:!1})},Wt=function(e,t){return Object(R.a)(Object(R.a)({},e),{},{err:null,isLoading:!0})},Mt=function(e,t){return Object(R.a)(Object(R.a)({},e),{},{user:Object(R.a)(Object(R.a)({},e.user),{},{avatar:t.payload.avatar,name:t.payload.name,organisation:t.payload.organization.name}),userApps:t.payload.userApps,frequentApps:t.payload.frequentApps,isOnboarded:!0,err:null,isLoading:!1})},Vt=function(e,t){return Object(R.a)(Object(R.a)({},e),{},{isOnboarded:!1,err:t.err,isLoading:!1})},Yt=function(e,t){return Object(R.a)(Object(R.a)({},e),{},{err:null,isLoading:!0})},Bt=function(e,t){return Object(R.a)(Object(R.a)({},e),{},{err:null,isLoading:!1})},Qt=function(e,t){return Object(R.a)(Object(R.a)({},e),{},{err:t.err,isLoading:!1})},$t=function(e,t){return Object(R.a)(Object(R.a)({},e),{},{err:null,isLoading:!0})},Jt=function(e,t){return Object(R.a)(Object(R.a)({},e),{},{user:Object(R.a)(Object(R.a)({},e.user),{},{name:t.payload.name,avatar:t.payload.avatar,email:t.payload.email,organisation:t.payload.organization.name}),userApps:t.payload.userApps.map((function(e){return{_id:e._id,appId:e.app._id,name:e.app.name,url:e.url,icon:e.app.icon}})),frequentApps:t.payload.frequentApps,err:null,isLoading:!1})},Kt=function(e,t){return Object(R.a)(Object(R.a)({},e),{},{err:t.err,isLoading:!1})},Zt=function(e,t){return Object(R.a)(Object(R.a)({},e),{},{err:null,isLoading:!0})},en=function(e,t){return Object(R.a)(Object(R.a)({},e),{},{userApps:t.payload.userApps,err:null,isLoading:!1})},tn=function(e,t){return Object(R.a)(Object(R.a)({},e),{},{err:t.err,isLoading:!1})},nn=function(e,t){return Object(R.a)(Object(R.a)({},e),{},{err:null,isLoading:!0})},an=function(e,t){return Object(R.a)(Object(R.a)({},e),{},{err:null,isLoading:!1})},rn=function(e,t){return Object(R.a)(Object(R.a)({},e),{},{err:t.err,isLoading:!1})},on=function(e,t){return Object(R.a)(Object(R.a)({},e),{},{err:null,isLoading:!0})},cn=function(e,t){return Object(R.a)(Object(R.a)({},e),{},{err:null,isLoading:!1})},ln=function(e,t){return Object(R.a)(Object(R.a)({},e),{},{err:t.err,isLoading:!1})},un=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:bt,t=arguments.length>1?arguments[1]:void 0;switch(console.log("Reducer Called",t),t.type){case k:return ht(e,t);case F:return At(e,t);case D:return St(e,t);case G:return Lt(e);case H:return yt(e);case x:return _t(e,t);case z:return Et(e);case q:return Ot(e,t);case X:return jt(e,t);case W:return console.log("I Am HERE"),Nt(e);case M:return Tt(e,t);case V:return It(e,t);case Y:return kt(e);case B:return Ft(e);case Q:return Dt(e,t);case $:return Gt(e);case J:return Ht(e);case K:return xt(e,t);case he:return zt(e);case Ae:return qt(e);case Se:return Xt(e,t);case Le:return Wt(e);case ye:return Mt(e,t);case _e:return Vt(e,t);case Z:return Yt(e);case ee:return Bt(e);case te:return Qt(e,t);case ne:return $t(e);case ae:return Jt(e,t);case re:return Kt(e,t);case fe:return Zt(e);case ge:return en(e,t);case be:return tn(e,t);case Ee:return nn(e);case Oe:return an(e);case je:return rn(e,t);case oe:return Ct(e);case ce:return vt(e,t);case le:return Rt(e,t);case ie:return Ut(e);case ue:return wt(e,t);case se:return Pt(e,t);case me:return on(e);case de:return cn(e);case pe:return ln(e,t);default:return e}},sn=(n(505),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ft.c),mn=Object(ft.d)(un,sn(Object(ft.a)(gt.a))),dn=r.a.createElement(v.a,{store:mn},r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,null,r.a.createElement(pt,null))));c.a.render(dn,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[282,1,2]]]);
//# sourceMappingURL=main.9b69a9c3.chunk.js.map