(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(2),o=a.n(r);a(12),a(13);const m=e=>{const[t,a]=Object(n.useState)(""),[r,o]=Object(n.useState)("");return l.a.createElement("div",{className:"auth-form-container"},l.a.createElement("h2",null,"Login"),l.a.createElement("form",{className:"login-form",onSubmit:e=>{e.preventDefault(),console.log(t)}},l.a.createElement("label",{htmlFor:"email"},"email"),l.a.createElement("input",{value:t,onChange:e=>a(e.target.value),type:"email",placeholder:"youemail@gmail.com",id:"email",name:"email"}),l.a.createElement("label",{htmlFor:"password"},"password"),l.a.createElement("input",{value:r,onChange:e=>o(e.target.value),type:"password",placeholder:"******",id:"password",name:"password"}),l.a.createElement("button",{type:"submit"},"Log In")),l.a.createElement("button",{className:"link-btn",onClick:()=>e.onFormSwitch("register")},"Don't have and account? Register here."))},c=e=>{const[t,a]=Object(n.useState)(""),[r,o]=Object(n.useState)(""),[m,c]=Object(n.useState)("");return l.a.createElement("div",{className:"auth-form-container"},l.a.createElement("h2",null,"Register"),l.a.createElement("form",{className:"register-form",onSubmit:e=>{e.preventDefault(),console.log(t)}},l.a.createElement("label",{htmlFor:"name"},"Full name"),l.a.createElement("input",{value:m,name:"name",id:"name",placeholder:"full name"}),l.a.createElement("label",{htmlFor:"email"},"email"),l.a.createElement("input",{value:t,onChange:e=>a(e.target.value),type:"email",placeholder:"youemail@gmail.com",id:"email",name:"email"}),l.a.createElement("label",{htmlFor:"password"},"password"),l.a.createElement("input",{value:r,onChange:e=>o(e.target.value),type:"password",placeholder:"******",id:"password",name:"password"}),l.a.createElement("button",{type:"submit"},"Register")),l.a.createElement("button",{className:"link-btn",onClick:()=>e.onFormSwitch("Login")},"Already have and account? Login here."))};var i=function(){const[e,t]=Object(n.useState)("Login"),a=e=>{t(e)};return l.a.createElement("div",{className:"App"},"Login"==e?l.a.createElement(m,{onFormSwitch:a}):l.a.createElement(c,{onFormSwitch:a}))};var s=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,15)).then(t=>{let{getCLS:a,getFID:n,getFCP:l,getLCP:r,getTTFB:o}=t;a(e),n(e),l(e),r(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(i,null))),s()},3:function(e,t,a){e.exports=a(14)}},[[3,1,2]]]);
//# sourceMappingURL=main.80a96c66.chunk.js.map