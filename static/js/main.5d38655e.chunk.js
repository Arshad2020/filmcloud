(this["webpackJsonpfilm-cloud"]=this["webpackJsonpfilm-cloud"]||[]).push([[0],{27:function(e,a,t){e.exports=t.p+"static/media/logo.a7bbc4d5.png"},30:function(e,a,t){e.exports=t(43)},35:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(24),r=t.n(c),s=t(3),m=(t(35),t(14)),i=t(4),o=t(12),u=t(5),d=t(11);var v=function(e){var a,t=e.handleRemove,c=e.emptyRentList,r=Object(n.useState)(!1),s=Object(i.a)(r,2),m=s[0],o=s[1],v=Object(n.useState)("Place Order"),p=Object(i.a)(v,2),E=p[0],g=p[1],b=JSON.parse(localStorage.getItem("rentMovies"))||[],h=(6.99*b.length).toLocaleString("en-US",{style:"currency",currency:"USD"});return a=b.map((function(e){return l.a.createElement("div",null,l.a.createElement("div",{key:e.id,className:"rent-list-container"},l.a.createElement(u.a,{icon:d.b,onClick:function(){return t(e.id)}}),l.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),alt:"Movie Poster"}),l.a.createElement("p",{className:"rent-list-price"},"$6.99")))})),m?l.a.createElement("h1",null,"Empty"):l.a.createElement("div",{className:"rent-list-page"},l.a.createElement("h1",{className:"rent-list-title"},"Check Out"),a,l.a.createElement("p",{className:"total-cost"},"Total: ",h),l.a.createElement("div",{className:"order-button"},l.a.createElement("button",{onClick:function(){g("Ordering..."),setTimeout((function(){g("Place Orde"),c(),o(!0)}),3e3)}},E)))};var p=function(e){return l.a.createElement("div",{className:"movie-item"},l.a.createElement("div",{className:"image-container"},l.a.createElement(s.b,{style:{textDecoration:"none"},to:"".concat(e.url,"/").concat(e.movie.id),key:e.movie.id},null===e.movie.poster_path?l.a.createElement("img",{className:"movie-image",src:"https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg",alt:"NoImage"}):l.a.createElement("img",{className:"movie-image",src:"https://image.tmdb.org/t/p/w500".concat(e.movie.poster_path),alt:"Movie Poster"}))),l.a.createElement("div",{className:"movie-tittle-container"},l.a.createElement("div",{className:"rating"},l.a.createElement(u.a,{className:"star-icon-homepage",icon:d.a}),l.a.createElement("span",{className:"movie-rating-homepage"},e.movie.vote_average)),l.a.createElement("div",{className:"movie-tittle"},e.movie.title),l.a.createElement("button",{onClick:function(){return e.addItem(e.movie)}},"+ Rentlist")))};var E=function(e){var a=Object(o.j)().url;return l.a.createElement("div",{className:"movie-container"},e.movies.map((function(t){return l.a.createElement("div",{key:t.id,className:"item-box"},l.a.createElement(p,{url:a,movie:t,addItem:e.addItem}))})))};var g=function(e){var a=Object(o.i)().pageId,t=e.movies.find((function(e){return e.id==a}));return t?l.a.createElement("div",{className:"movie-details-page"},l.a.createElement("div",{className:"movie-details-page-poster"},l.a.createElement("img",{className:"movie-details-image",src:"https://image.tmdb.org/t/p/w500".concat(t.poster_path),alt:"Movie Poster"})),l.a.createElement("section",{className:"movie-details-section"},l.a.createElement("div",{className:"title-div"},l.a.createElement("h1",{className:"movie-details-page-tittle"},t.title),l.a.createElement("span",{className:"release-date"},"(",new Date(t.release_date).getFullYear(),")")),l.a.createElement("div",{className:"sub-info"},l.a.createElement(u.a,{className:"star-icon-details-page",icon:d.a}),l.a.createElement("span",{className:"vote-average-details-page"},t.vote_average),l.a.createElement("span",{className:"vote-count-details-page"},"(".concat(t.vote_count,")")," Reviews"),l.a.createElement("span",{className:"original-language"},"Language (".concat(t.original_language,")"))),l.a.createElement("div",{className:"summary-div"},l.a.createElement("h3",{className:"overview-title"},"overview"),l.a.createElement("p",{className:"movie-summary"},t.overview)),l.a.createElement("div",{className:"movie-page-button"},l.a.createElement("button",null,"Rent $6.99"),l.a.createElement("button",{onClick:function(){return e.addItem(t)}},"Add to Rentlist")))):null};var b=function(e){var a=Object(n.useState)([]),t=Object(i.a)(a,2),c=t[0],r=t[1],s=Object(o.j)().path;return Object(n.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/popular?api_key=03d2fe94d662e5523e71720a226900bb").then((function(e){return e.json()})).then((function(e){return r(e.results)}))}),[]),l.a.createElement("div",null,l.a.createElement(o.d,null,l.a.createElement(o.b,{exact:!0,path:s},l.a.createElement(E,{movies:c,addItem:e.addItem})),l.a.createElement(o.b,{path:"/home/:pageId"},l.a.createElement(g,{movies:c,addItem:e.addItem}))))},h=t(27),f=t.n(h);var N=function(e){return l.a.createElement("nav",null,l.a.createElement("div",{className:"logo"},l.a.createElement(s.b,{style:{textDecoration:"none"},to:"/home"},l.a.createElement("img",{className:"logo-image",src:f.a,alt:"logo-image"}))),l.a.createElement("div",{className:"nav-links-container"},l.a.createElement("ul",{className:"nav-links"},l.a.createElement(s.b,{style:{textDecoration:"none"},to:"/home"},l.a.createElement("li",null,"Home")),l.a.createElement("div",{className:"search-area"},l.a.createElement("form",{action:"",onSubmit:e.handleSubmit},l.a.createElement("input",{className:"search-field",placeholder:"Search..",spellCheck:!1,type:"text",value:e.searchTerm,onChange:e.handleChange}))),l.a.createElement(s.b,{style:{textDecoration:"none"},to:"/rentlist"},l.a.createElement("li",null,"Rentlist")),e.isLogedIn?l.a.createElement(s.b,{className:"user-div",onClick:function(){return e.setIsLogedIn(!1)}},l.a.createElement("span",{className:"user-span-exit"},"Log out"),l.a.createElement("span",{className:"user-span-icon"},l.a.createElement(u.a,{style:{color:"#5799ef"},icon:d.c})),l.a.createElement("span",null,e.user.username)):l.a.createElement(s.b,{style:{textDecoration:"none"},to:"/login"},l.a.createElement("li",null,"Log in")))))};var O=function(e){var a=e.addItem,t=e.searchResult;return l.a.createElement("div",null,l.a.createElement(o.d,null,l.a.createElement(o.b,{exact:!0,path:"/searchmovies"},l.a.createElement(E,{movies:t,addItem:a}),"; }"),l.a.createElement(o.b,{path:"/searchmovies/:pageId"},l.a.createElement(g,{movies:t,handleClick:a}))))},j=t(8),y=t(28);var S=function(e){var a=Object(n.useState)(e),t=Object(i.a)(a,2),l=t[0],c=t[1];return[l,function(e){var a=e.target,t=a.name,n=a.value;c(Object(y.a)({},l,Object(j.a)({},t,n)))},function(){return c(e)}]};var I=function(e){var a,t=e.setIsLogedIn,n=e.setUser,c=S({email:"",password:""}),r=Object(i.a)(c,3),s=r[0],u=r[1],d=r[2],v=Object(o.g)(),p=S({username:"",email:"",password:""}),E=Object(i.a)(p,3),g=E[0],b=E[1],h=E[2];return l.a.createElement("div",{className:"signin-and-signup-container"},l.a.createElement("div",{className:"sign-in-div"},l.a.createElement("h2",{className:"sign-in-title"},"I already have an account"),l.a.createElement("span",{className:"sign-in-sub-title"},"Sign in with your email and password"),l.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault();var a=(JSON.parse(localStorage.getItem("signedUpUsers"))||[]).find((function(e){return e.email===s.email&&e.password===s.password}));d(),a&&(t(!0),v.push("/home"),n(a))}},l.a.createElement("label",null,"Email"),l.a.createElement("input",{className:"form-input",name:"email",type:"email",value:s.email,onChange:u,label:"email",required:!0}),l.a.createElement("label",null,"Password"),l.a.createElement("input",{className:"form-input",name:"password",type:"password",value:s.password,label:"password",onChange:u,required:!0}),l.a.createElement("input",{className:"submit-button",type:"submit",value:"Log in"}))),l.a.createElement("div",{className:"sign-up-div"},l.a.createElement("h2",{className:"sign-up-title"},"Create a new account"),l.a.createElement("span",{className:"sign-up-dub-title"},"Sign up with you email and password"),l.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault();var a=JSON.parse(localStorage.getItem("signedUpUsers"))||[],t=[].concat(Object(m.a)(a),[g]);localStorage.setItem("signedUpUsers",JSON.stringify(t)),h()}},l.a.createElement("label",null,"Username"),l.a.createElement("input",(a={className:"form-input",type:"text",id:"username",name:"username"},Object(j.a)(a,"type","text"),Object(j.a)(a,"placeholder","Display Name"),Object(j.a)(a,"value",g.username),Object(j.a)(a,"onChange",b),Object(j.a)(a,"required",!0),a)),l.a.createElement("label",null,"Email"),l.a.createElement("input",{className:"form-input",name:"email",type:"email",value:g.email,onChange:b,required:!0}),l.a.createElement("label",null,"Password"),l.a.createElement("input",{className:"form-input",name:"password",type:"password",value:g.password,onChange:b,required:!0}),l.a.createElement("input",{className:"submit-button",type:"submit",value:"Sign Up"}))))},w=t(15);var C=function(){return l.a.createElement("div",{className:"footer-conter"},l.a.createElement("div",{className:"footer-details"},l.a.createElement("div",{className:"social-container"},l.a.createElement("h3",null,"Social follow"),l.a.createElement(u.a,{style:{color:"#49a1eb"},className:"social-icon",icon:w.c,size:"2x"}),l.a.createElement(u.a,{style:{color:"#4968ad"},className:"social-icon",icon:w.a,size:"2x"}),l.a.createElement(u.a,{style:{color:"white"},className:"social-icon",icon:w.b,size:"2x"}),l.a.createElement(u.a,{style:{color:"#eb3223"},className:"social-icon",icon:w.d,size:"2x"})),l.a.createElement("div",{className:"col-div"},l.a.createElement("h4",null,"GET HELP"),l.a.createElement("ul",{className:"col-help-sub"},l.a.createElement("li",null,"Technical help"),l.a.createElement("li",null,"FAQ"))),l.a.createElement("div",{className:"col-div"},l.a.createElement("h4",null,"ABOUT"),l.a.createElement("ul",{className:"col-about-sub"},l.a.createElement("li",null,"About us"),l.a.createElement("li",null,"Contact us"))),l.a.createElement("div",{className:"col-div"},l.a.createElement("h4",null,"OUR APPS"),l.a.createElement("ul",{className:"col-help-sub"},l.a.createElement("li",null,"FilmCloud for iOS"),l.a.createElement("li",null,"FilmCloud for Android")))),l.a.createElement("div",null,l.a.createElement("p",{className:"copy-right"},"\xa9",(new Date).getFullYear()," FilmCloud | All rights reserved |"," ",l.a.createElement("span",{className:"serves-terms"},"Terms of service "),"|"," ",l.a.createElement("span",{className:"privacy"},"Privacy"))))},L=t(29);var x=function(e){var a=e.component,t=e.isLogedIn,n=Object(L.a)(e,["component","isLogedIn"]);return l.a.createElement(o.b,Object.assign({},n,{render:function(e){return t?l.a.createElement(a,e):l.a.createElement(o.a,{to:{pathname:"/login"}})}}))};var k=function(){var e=JSON.parse(localStorage.getItem("rentMovies"))||[],a=Object(n.useState)(e),t=Object(i.a)(a,2),c=t[0],r=t[1],s=Object(n.useState)(!1),u=Object(i.a)(s,2),d=u[0],p=u[1],E=Object(n.useState)({}),g=Object(i.a)(E,2),h=g[0],f=g[1],j=Object(o.j)(),y=(j.url,j.path,Object(o.h)());function S(e){d&&r((function(a){var t=[].concat(Object(m.a)(a),[e]).reduce((function(e,a){return e.includes(a)?e:[].concat(Object(m.a)(e),[a])}),[]);return localStorage.setItem("rentMovies",JSON.stringify(t)),t}))}function w(e){r((function(a){var t=a.filter((function(a){return a.id!==e}));return localStorage.setItem("rentMovies",JSON.stringify(t)),t}))}function L(){localStorage.setItem("rentMovies",JSON.stringify([])),r([])}var k=Object(n.useState)(""),U=Object(i.a)(k,2),D=U[0],R=U[1],P=Object(n.useState)([]),_=Object(i.a)(P,2),J=_[0],M=_[1],T=Object(o.g)();return"/FilmCloud"===y.pathname?l.a.createElement(o.a,{to:{pathname:"/home"}}):l.a.createElement("div",null,l.a.createElement(N,{handleChange:function(e){return R(e.target.value)},handleSubmit:function(e){e.preventDefault(),fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat("03d2fe94d662e5523e71720a226900bb","&query=").concat(D)).then((function(e){return e.json()})).then((function(e){return M(e.results)})).then((function(){return T.push("/searchmovies")})).then(R(""))},searchTerm:D,isLogedIn:d,setIsLogedIn:p,user:h}),l.a.createElement(o.d,null,l.a.createElement(o.b,{path:"/home"},l.a.createElement(b,{addItem:S})),l.a.createElement(o.b,{path:"/searchmovies"},l.a.createElement(O,{addItem:S,searchResult:J})),l.a.createElement(o.b,{path:"/login"},l.a.createElement(I,{setUser:f,isLogedIn:d,setIsLogedIn:p})),l.a.createElement(x,{path:"/rentlist",isLogedIn:d,component:function(){return l.a.createElement(v,{rentList:c,handleRemove:w,emptyRentList:L})}})),l.a.createElement(C,null))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(s.a,null,l.a.createElement(k,null))),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.5d38655e.chunk.js.map