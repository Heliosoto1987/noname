(this.webpackJsonpnoname=this.webpackJsonpnoname||[]).push([[0],{53:function(e,s,t){},58:function(e,s,t){},59:function(e,s,t){},67:function(e,s,t){},68:function(e,s,t){"use strict";t.r(s);var c=t(12),n=t(44),a=t.n(n),r=t(15),i=t(45),l=t(16),o=t(0),j=t.n(o),d=t(1),b=(t(53),Object(c.createContext)(null)),u=t(34);t(69),t(55);u.a.initializeApp({apiKey:"AIzaSyC1KUliSqlRKl-PcYoAa3Ci6LustMgWQLA",authDomain:"clannoname-a5969.firebaseapp.com",projectId:"clannoname-a5969",storageBucket:"clannoname-a5969.appspot.com",messagingSenderId:"1090696907193",appId:"1:1090696907193:web:4e85f197a45f1974360e68",measurementId:"G-5PS33GH4DS"});u.a.firestore();var m=new u.a.auth.GoogleAuthProvider,h=t(11),_=function(e){var s=Object(c.useContext)(b),t=s.userState,n=s.setUserState,a=function(){var e=Object(d.a)(j.a.mark((function e(){var s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.auth().signInWithPopup(m).then((function(e){return{name:e.user.displayName,email:e.user.email,uid:e.user.uid}}));case 2:s=e.sent,n(s);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){var s;(null===(s=t.name)||void 0===s?void 0:s.length)>1&&e.history.push("/")}),[t,e.history]),Object(h.jsx)("div",{className:"login",children:Object(h.jsxs)("div",{className:"login__box",children:[Object(h.jsx)("div",{className:"login__icon",children:Object(h.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})}),Object(h.jsx)("p",{className:"login__text",children:Object(h.jsx)("b",{children:"Conectate con tu cuenta Google"})}),Object(h.jsx)("button",{onClick:a,className:"login__btn",children:"Entrar"}),Object(h.jsx)("button",{onClick:function(){e.history.push("/")},className:"login__btn",children:"Volver atras"})]})})},x=(t(58),t(59),function(e){var s=e.props,t=Object(c.useContext)(b),n=t.userState,a=t.setUserState;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("nav",{className:"nav",children:""===n?Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("button",{onClick:function(){s.history.push("/login")},className:"nav__buttton",children:"login"})}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("button",{onClick:function(){a("")},className:"nav__buttton",children:"logout"}),Object(h.jsxs)("span",{className:"nav__name",children:["Bienvenido: ",n.name]})]})})})}),O=function(e){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(x,{props:e}),Object(h.jsx)("div",{className:"landing",children:Object(h.jsx)("h1",{className:"landing__title",children:"Bienvenidos"})}),Object(h.jsxs)("div",{className:"rosters",children:[Object(h.jsx)("h2",{className:"rosters__title",children:"Rosters"}),Object(h.jsxs)("div",{className:"rosters__flexul",children:[Object(h.jsxs)("div",{className:"rosters__ul",children:[Object(h.jsx)("div",{className:"rosters__div",children:"Equipo A:"}),Object(h.jsx)("li",{className:"rosters__li",children:"Carryoff"}),Object(h.jsx)("li",{className:"rosters__li",children:"swag"}),Object(h.jsx)("li",{className:"rosters__li",children:"Saxman"}),Object(h.jsx)("li",{className:"rosters__li",children:"Deykar"}),Object(h.jsx)("li",{className:"rosters__li",children:"style"}),Object(h.jsx)("li",{className:"rosters__li",children:"iLubb"}),Object(h.jsx)("li",{className:"rosters__li",children:"Boruto"}),Object(h.jsx)("li",{className:"rosters__li",children:"Luisfer"}),Object(h.jsx)("li",{className:"rosters__li",children:"Kalaw"})]}),Object(h.jsxs)("div",{className:"rosters__ul",children:[Object(h.jsx)("div",{className:"rosters__div",children:" Equipo B:"}),Object(h.jsx)("li",{className:"rosters__li",children:"Grillo"}),Object(h.jsx)("li",{className:"rosters__li",children:"Sanbau"}),Object(h.jsx)("li",{className:"rosters__li",children:"Carolina"}),Object(h.jsx)("li",{className:"rosters__li",children:"Alvaro"}),Object(h.jsx)("li",{className:"rosters__li",children:"carlosss"}),Object(h.jsx)("li",{className:"rosters__li",children:"Todox"}),Object(h.jsx)("li",{className:"rosters__li",children:"Willy"}),Object(h.jsx)("li",{className:"rosters__li",children:"rumano"}),Object(h.jsx)("li",{className:"rosters__li",children:"Abril"})]})]})]})]})},p=function(){return Object(h.jsx)(i.a,{children:Object(h.jsx)("div",{children:Object(h.jsxs)(l.d,{children:[Object(h.jsx)(l.b,{exact:!0,path:"/login",component:_}),Object(h.jsx)(l.b,{exact:!0,path:"/",component:O}),Object(h.jsx)(l.a,{to:"/"})]})})})},N=function(){var e=Object(c.useState)(""),s=Object(r.a)(e,2),t=s[0],n=s[1];return Object(h.jsx)(b.Provider,{value:{userState:t,setUserState:n},children:Object(h.jsx)(p,{})})};t(67);a.a.render(Object(h.jsx)(N,{}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.80ae580b.chunk.js.map