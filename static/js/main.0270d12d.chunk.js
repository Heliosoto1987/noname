(this.webpackJsonpnoname=this.webpackJsonpnoname||[]).push([[0],{52:function(e,s,t){},58:function(e,s,t){},59:function(e,s,t){},67:function(e,s,t){},68:function(e,s,t){"use strict";t.r(s);var c=t(12),i=t(44),l=t.n(i),n=t(15),a=t(45),r=t(16),o=(t(52),Object(c.createContext)(null)),j=t(34);t(69),t(55);j.a.initializeApp({apiKey:"AIzaSyC1KUliSqlRKl-PcYoAa3Ci6LustMgWQLA",authDomain:"clannoname-a5969.firebaseapp.com",projectId:"clannoname-a5969",storageBucket:"clannoname-a5969.appspot.com",messagingSenderId:"1090696907193",appId:"1:1090696907193:web:4e85f197a45f1974360e68",measurementId:"G-5PS33GH4DS"});j.a.firestore();var d=new j.a.auth.GoogleAuthProvider,b=t(11),u=function(e){var s=Object(c.useContext)(o),t=s.userState,i=s.setUserState;return Object(c.useEffect)((function(){var s;(null===(s=t.name)||void 0===s?void 0:s.length)>1&&e.history.push("/")}),[t,e.history]),Object(b.jsx)("div",{className:"login",children:Object(b.jsxs)("div",{className:"login__box",children:[Object(b.jsx)("div",{className:"login__icon",children:Object(b.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})}),Object(b.jsx)("p",{className:"login__text",children:Object(b.jsx)("b",{children:"Conectate con tu cuenta Google"})}),Object(b.jsx)("button",{onClick:function(){j.a.auth().signInWithPopup(d).then((function(e){i({name:e.user.displayName,email:e.user.email,uid:e.user.uid})}))},className:"login__btn",children:"Entrar"}),Object(b.jsx)("button",{onClick:function(){e.history.push("/")},className:"login__btn",children:"Volver atras"})]})})},m=(t(58),t(59),function(e){var s=e.props,t=Object(c.useContext)(o),i=t.userState,l=t.setUserState;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("nav",{className:"nav",children:""===i?Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("button",{onClick:function(){s.history.push("/login")},className:"nav__buttton",children:"login"})}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("button",{onClick:function(){l("")},className:"nav__buttton",children:"logout"}),Object(b.jsxs)("span",{className:"nav__name",children:["Bienvenido: ",i.name]})]})})})}),h=function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(m,{props:e}),Object(b.jsx)("div",{className:"landing",children:Object(b.jsx)("h1",{className:"landing__title",children:"Bienvenidos"})}),Object(b.jsxs)("div",{className:"rosters",children:[Object(b.jsx)("h2",{className:"rosters__title",children:"Rosters"}),Object(b.jsxs)("div",{className:"rosters__flexul",children:[Object(b.jsxs)("div",{className:"rosters__ul",children:[Object(b.jsx)("div",{className:"rosters__div",children:"Equipo A:"}),Object(b.jsx)("li",{className:"rosters__li",children:"Carryoff"}),Object(b.jsx)("li",{className:"rosters__li",children:"swag"}),Object(b.jsx)("li",{className:"rosters__li",children:"Saxman"}),Object(b.jsx)("li",{className:"rosters__li",children:"Deykar"}),Object(b.jsx)("li",{className:"rosters__li",children:"style"}),Object(b.jsx)("li",{className:"rosters__li",children:"iLubb"}),Object(b.jsx)("li",{className:"rosters__li",children:"Boruto"}),Object(b.jsx)("li",{className:"rosters__li",children:"Luisfer"}),Object(b.jsx)("li",{className:"rosters__li",children:"Kalaw"})]}),Object(b.jsxs)("div",{className:"rosters__ul",children:[Object(b.jsx)("div",{className:"rosters__div",children:" Equipo B:"}),Object(b.jsx)("li",{className:"rosters__li",children:"Grillo"}),Object(b.jsx)("li",{className:"rosters__li",children:"Sanbau"}),Object(b.jsx)("li",{className:"rosters__li",children:"Carolina"}),Object(b.jsx)("li",{className:"rosters__li",children:"Alvaro"}),Object(b.jsx)("li",{className:"rosters__li",children:"carlosss"}),Object(b.jsx)("li",{className:"rosters__li",children:"Todox"}),Object(b.jsx)("li",{className:"rosters__li",children:"Willy"}),Object(b.jsx)("li",{className:"rosters__li",children:"rumano"}),Object(b.jsx)("li",{className:"rosters__li",children:"Abril"})]})]})]})]})},_=function(){return Object(b.jsx)(a.a,{children:Object(b.jsx)("div",{children:Object(b.jsxs)(r.d,{children:[Object(b.jsx)(r.b,{exact:!0,path:"/login",component:u}),Object(b.jsx)(r.b,{exact:!0,path:"/",component:h}),Object(b.jsx)(r.a,{to:"/"})]})})})},x=function(){var e=Object(c.useState)(""),s=Object(n.a)(e,2),t=s[0],i=s[1];return Object(b.jsx)(o.Provider,{value:{userState:t,setUserState:i},children:Object(b.jsx)(_,{})})};t(67);l.a.render(Object(b.jsx)(x,{}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.0270d12d.chunk.js.map