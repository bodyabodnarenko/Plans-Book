(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{411:function(e,t,a){e.exports=a(743)},595:function(e,t,a){},599:function(e,t,a){},601:function(e,t,a){},603:function(e,t,a){},743:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(70),l=a.n(c),i=a(18),o=a(7),s=a(307),u=a(92),m=a(31),p=(a(595),a(23)),d=a(24),h=a(27),E=a(25),f=a(26),b=a(747),g=a(749),N=a(745),O=a(598),j=a(746),v=Object(o.b)(null,function(e){return{signOut:function(){return e(function(e,t,a){(0,a.getFirebase)().auth().signOut().then(function(){e({type:"SIGNOUT_SUCCESS"})})})},toggleConfirmPopup:function(){return e(function(e,t){e({type:"TOGGLE_CONFIRM_POPUP",isOpen:t()})})}}})(function(e){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",{className:"link-wrapper"},r.a.createElement(j.a,{activeClassName:"active-link",to:"/create"},"New Project")),r.a.createElement("li",{className:"link-wrapper"},r.a.createElement("a",{onClick:e.toggleConfirmPopup,href:"#"},"Log Out")),r.a.createElement("li",{className:"link-wrapper"},r.a.createElement(j.a,{exact:!0,to:"/",style:{fontWeight:"500",backgroundColor:"#E3B505",borderRadius:"25px"},className:"btn btn-floating lighten-1"},e.profile.initials)))}),C=function(e){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",{className:"link-wrapper"},r.a.createElement(j.a,{to:"/signup"},"Signup")),r.a.createElement("li",{className:"link-wrapper"},r.a.createElement(j.a,{to:"/signin"},"Login")))},y=(a(599),Object(o.b)(function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}})(function(e){var t={color:"#E3B505",fontSize:"1.5em"},a=e.auth.uid?r.a.createElement(v,{toggleModal:e.toggleModal,profile:e.profile,activeStyle:t}):r.a.createElement(C,{activeStyle:t});return r.a.createElement("nav",{style:{backgroundColor:"#084C61"},className:"nav-wrapper darken-3"},r.a.createElement("div",{className:"container"},r.a.createElement(O.a,{to:"/",className:"left logo"},"Plan Book"),a))})),S=a(71),R=a.n(S),w=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},"Notifications"),r.a.createElement("ul",{className:"notifications"},e.notifications&&e.notifications.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("span",{style:{color:"#DB504A",fontWeight:"bold"}},e.user," "),r.a.createElement("span",null,e.content),r.a.createElement("div",{className:"grey-text note-date"},R()(e.time.toDate()).fromNow()),r.a.createElement("br",null))}))))))},P=Object(o.b)(function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}})(function(e){return r.a.createElement("div",{className:"card z-depth-0 "},r.a.createElement("div",{className:"card-content grey-text text-darken-3"},r.a.createElement("span",{className:"card-title"},e.title),r.a.createElement("p",null,e.content),r.a.createElement("p",{className:"grey-text"},R()(e.createdAt.toDate()).calendar())))}),k=function(e){return r.a.createElement("div",{className:"project-list section"},e.projects&&e.projects.map(function(e){return r.a.createElement(O.a,{to:"/project/".concat(e.id),key:e.id},r.a.createElement(P,{createdAt:e.createdAt,title:e.title,content:e.content}))}))},I=a(748),F=function(e){function t(){return Object(p.a)(this,t),Object(h.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("div",{className:"dashboard container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m5 offset-m1"},r.a.createElement(w,{notifications:this.props.notifications})),r.a.createElement("div",{className:"col s12 m6 l3"},r.a.createElement(k,{projects:this.props.projects})))):r.a.createElement(I.a,{to:"/signin"})}}]),t}(n.Component),U=Object(i.d)(Object(m.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"notifications",limit:5,orderBy:["time","desc"]}]),Object(o.b)(function(e){return{projects:e.firestore.ordered.projects,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications}}))(F),_=(a(601),function(){return r.a.createElement("div",{className:"spinner"},r.a.createElement("div",{className:"double-bounce1"}),r.a.createElement("div",{className:"double-bounce2"}))}),x=Object(i.d)(Object(m.firestoreConnect)(["projects"]),Object(o.b)(function(e,t){var a=t.match.params.id,n=e.firestore.ordered.projects;return{project:n?n.filter(function(e){return a===e.id})[0]:null,auth:e.firebase.auth}}))(function(e){return e.auth.uid?(console.log(e),e.project?r.a.createElement("div",{className:"container section project-details"},r.a.createElement("div",{className:"card z-depth-o",style:{borderRadius:"15px"}},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},e.project.title),r.a.createElement("p",null,e.project.content)),r.a.createElement("div",{style:{borderBottomRightRadius:"15px",borderBottomLeftRadius:"15px"},className:"card-action grey lighten-4 grey-text"},r.a.createElement("div",null,"Posted by ",e.project.authorFirstName," ",e.project.authorLastName),r.a.createElement("div",null,R()(e.project.createdAt.toDate()).calendar())))):r.a.createElement("div",{className:"container center"},r.a.createElement(_,null))):r.a.createElement(I.a,{to:"/signin"})}),A=a(36),G=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.submitHandler=function(e){e.preventDefault(),a.props.signIn(a.state)},a.changeHandler=function(e){a.setState(Object(A.a)({},e.target.id,e.target.value))},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement(I.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.submitHandler},r.a.createElement("h5",null,"Sign In"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.changeHandler})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.changeHandler})),r.a.createElement("div",null,r.a.createElement("button",{className:"btn"},"Login"),r.a.createElement("div",{className:"red-text center"},this.props.authError?r.a.createElement("p",null,this.props.authError):null)),r.a.createElement("div",{className:"center blue-text"},r.a.createElement(O.a,{to:"/signup"},"Haven't account? Create it!"))))}}]),t}(n.Component),H=Object(o.b)(function(e){return{authError:e.auth.authError,auth:e.firebase.auth}},function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then(function(){e({type:"LOGIN_SUCCESS"})}).catch(function(t){return e({type:"LOGIN_ERROR",error:t})})}));var a}}})(G),L=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",firstName:"",lastName:""},a.submitHandler=function(e){e.preventDefault(),a.props.signUp(a.state)},a.changeHandler=function(e){a.setState(Object(A.a)({},e.target.id,e.target.value))},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement(I.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.submitHandler},r.a.createElement("h5",null,"Sign Up"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"firstName"},"First Name"),r.a.createElement("input",{type:"text",id:"firstName",onChange:this.changeHandler})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"lastName"},"Second Name"),r.a.createElement("input",{type:"text",id:"lastName",onChange:this.changeHandler})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.changeHandler})),r.a.createElement("div",{className:"input-field "},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.changeHandler})),r.a.createElement("div",null,r.a.createElement("button",{className:"btn-large"},"Login")),r.a.createElement("div",{className:"red-text center"},this.props.authError?r.a.createElement("p",null,this.props.authError):null)))}}]),t}(n.Component),T=Object(o.b)(function(e){return{authError:e.auth.authError,auth:e.firebase.auth}},function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,c=n.getFirestore,l=r(),i=c();l.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(a){return i.collection("users").doc(a.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:(e.firstName[0]+e.lastName[0]).toUpperCase()}).then(function(e){t({type:"SIGNUP_SUCCESS",error:e})})}).catch(function(e){t({type:"SIGNUP_ERROR",error:e})})}}(t))}}})(L),B=a(53),D=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",content:""},a.submitHandler=function(e){e.preventDefault(),a.props.createProject(a.state),a.props.history.push("/")},a.changeHandler=function(e){a.setState(Object(A.a)({},e.target.id,e.target.value))},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.submitHandler,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"New Project"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",id:"title",onChange:this.changeHandler})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"content"},"Content"),r.a.createElement("textarea",{onChange:this.changeHandler,id:"content",className:"materialize-textarea"})),r.a.createElement("div",null,r.a.createElement("button",{className:"btn "},"Create")))):r.a.createElement(I.a,{to:"/signin"})}}]),t}(n.Component),z=Object(o.b)(function(e){return{auth:e.firebase.auth}},function(e){return{createProject:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),c=a().firebase.profile,l=a().firebase.auth.uid;r.collection("projects").add(Object(B.a)({},e,{authorFirstName:c.firstName,authorLastName:c.lastName,authorId:l,createdAt:new Date})).then(function(){t({type:"CREATE_PROJECT",project:e})}).catch(function(a){t({type:"CREATE_PROJECT_ERROR",project:e})})}}(t))}}})(D),J=a(308),M=(a(603),function(e){return r.a.createElement(J.a,{onClick:e.clicked,className:"modalWrapper","aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:e.open},r.a.createElement("div",{className:"contentWrapper"},e.children))}),W=Object(o.b)(function(e){return{open:e.popup}},function(e){return{signOut:function(){return e(function(e,t,a){(0,a.getFirebase)().auth().signOut().then(function(){e({type:"SIGNOUT_SUCCESS"})})})},toggleConfirmPopup:function(){return e(function(e,t){e({type:"TOGGLE_CONFIRM_POPUP",isOpen:t()})})}}})(function(e){return r.a.createElement(M,{clicked:e.toggleConfirmPopup,open:e.open},r.a.createElement("span",null,"Are you shure to log out?"),r.a.createElement("button",{onClick:e.signOut,className:"btn-large"},"Yes"),r.a.createElement("button",{className:"btn-large red"},"No"))}),X=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={isConfirmPopupOpen:!1},a.togglePopupOpen=function(){a.setState({isConfirmPopupOpen:!a.state.isConfirmPopupOpen})},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(b.a,null,r.a.createElement("div",null,r.a.createElement(W,null),r.a.createElement(y,{toggleModal:this.togglePopupOpen}),r.a.createElement(g.a,null,r.a.createElement(N.a,{exact:!0,path:"/",component:U}),r.a.createElement(N.a,{path:"/project/:id",component:x}),r.a.createElement(N.a,{path:"/signin",component:H}),r.a.createElement(N.a,{path:"/signup",component:T}),r.a.createElement(N.a,{path:"/signup",component:T}),r.a.createElement(N.a,{path:"/create",component:z}))))}}]),t}(n.Component),K={},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("login error"),Object(B.a)({},e,{authError:"Login failed!"});case"LOGIN_SUCCESS":return console.log("LOGIN_SUCCESS"),Object(B.a)({},e,{authError:null});case"SIGNUP_SUCCESS":return console.log("SIGNUP_SUCCESS"),Object(B.a)({},e,{authError:t.error});case"SIGNUP_ERROR":return console.log("SIGNUP_ERROR"),Object(B.a)({},e,{authError:t.error.message});case"SIGNOUT_SUCCESS":return console.log("SIGNOUT_SUCCESS"),e;default:return e}},V=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"TOGGLE_CONFIRM_POPUP":e=!e;break;default:return e}return e},Y={projects:[{id:"1",title:"first project",content:"blah blah blah"},{id:"2",title:"second project",content:"blah blah blah"},{id:"3",title:"third project",content:"blah blah blah"}]},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":console.log("created project");break;case"CREATE_PROJECT_ERROR":alert(t.error);break;default:return e}return e},q=Object(i.c)({auth:Q,project:Z,firestore:u.firestoreReducer,firebase:m.firebaseReducer,popup:V}),$=a(130),ee=a.n($);a(741),a(742);ee.a.initializeApp({apiKey:"AIzaSyAglZF2LkwSgh9kaD_SXIX-nrtj-5AVQ-8",authDomain:"plans-book.firebaseapp.com",databaseURL:"https://plans-book.firebaseio.com",projectId:"plans-book",storageBucket:"",messagingSenderId:"395465391527"}),ee.a.firestore().settings({timestampsInSnapshots:!0});var te=ee.a,ae=Object(i.e)(q,Object(i.d)(Object(i.a)(s.a.withExtraArgument({getFirebase:m.getFirebase,getFirestore:u.getFirestore})),Object(u.reduxFirestore)(te),Object(m.reactReduxFirebase)(te,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0})));ae.firebaseAuthIsReady.then(function(){l.a.render(r.a.createElement(o.a,{store:ae},r.a.createElement(X,null)),document.getElementById("root"))})}},[[411,2,1]]]);
//# sourceMappingURL=main.2a0c7cef.chunk.js.map