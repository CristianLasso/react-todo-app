(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{115:function(t,e,n){},116:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(10),s=n.n(r),i=(n(86),n(69)),u=n(54),o=n(19),j="Ascendente",l="Descendente",b=[j,l],d=n(5),O=a.a.createContext(),f=function(t){var e=t.children,n=Object(c.useState)([]),a=Object(o.a)(n,2),r=a[0],s=a[1],b={tasks:r,setTasks:s,setTaskStatus:function(t,e){var n=r.map((function(n){return n.id===t?Object(u.a)(Object(u.a)({},n),{},{completed:e}):n}));s(n)},deleteTask:function(t){var e=r.filter((function(e){return e.id!==t}));s(e)},saveTask:function(t){var e=[].concat(Object(i.a)(r),[t]);s(e)},sortTasks:function(t){var e=r.map((function(t){return t}));t===j?e.sort((function(t,e){return t.title>e.title?1:-1})):t===l&&e.sort((function(t,e){return t.title<e.title?1:-1})),s(e)}};return Object(d.jsx)(O.Provider,{value:b,displayName:"AppContext",children:e})},p=O,x=n(35),v=n.n(x),h=n(44),m=n(147),k=n(158),g=(n(89),n(151)),C=n(67),T=n.n(C),_=n(66),N=n.n(_),S=n(156),y=n(47),I=n.n(y),w=function(t){var e=t.id,n=t.title,a=t.completed,r=Object(c.useContext)(p),s=Object(c.useState)(!1),i=Object(o.a)(s,2),u=i[0],j=i[1],l=Object(c.useState)(n),b=Object(o.a)(l,2),O=b[0],f=b[1];return Object(d.jsxs)(m.a,{className:"taskItem",children:[Object(d.jsx)("div",{className:"taskItem__checkbox",children:Object(d.jsx)(k.a,{checked:a,onChange:function(t){r.setTaskStatus(e,t.target.checked)}})}),Object(d.jsx)("div",{className:"taskItem__title",children:u?Object(d.jsx)(S.a,{className:"taskItem__input",label:"Tarea...",value:O,onChange:function(t){f(t.target.value)}}):Object(d.jsx)("p",{children:O})}),Object(d.jsxs)("div",{className:"taskItem__buttons",children:[u?Object(d.jsx)(g.a,{color:"primary",onClick:function(){return j(!1)},disabled:!O.length,children:Object(d.jsx)(I.a,{})}):Object(d.jsx)(g.a,{color:"primary",onClick:function(){return j(!0)},children:Object(d.jsx)(N.a,{})}),Object(d.jsx)(g.a,{color:"secondary",onClick:function(){r.deleteTask(e)},children:Object(d.jsx)(T.a,{})})]})]})},A=(n(94),function(){var t=Object(c.useContext)(p);return Object(d.jsx)("div",{className:"TasksList",children:t.tasks.map((function(t){return Object(d.jsx)(w,{id:t.id,title:t.title,completed:t.completed},t.id)}))})}),E=(n(95),n(154)),F=(n(96),n(157)),D=function(){var t=Object(c.useContext)(p),e=Object(c.useState)(""),n=Object(o.a)(e,2),a=n[0],r=n[1];return Object(d.jsxs)("form",{className:"taskForm",onSubmit:function(e){var n=Object(F.a)();e.preventDefault();var c={id:n,title:a,selected:!1,userId:n};t.saveTask(c),r("")},children:[Object(d.jsx)(S.a,{className:"taskForm__input",required:!0,value:a,onChange:function(t){return r(t.target.value)},id:"taskForm__input",label:"Agrega un titulo a la tarea"}),Object(d.jsx)(E.a,{type:"submit",color:"primary",startIcon:Object(d.jsx)(I.a,{}),disabled:!a.length,children:"Guardar"})]})},J=n(68),q=n.n(J),B=function(){var t=Object(h.a)(v.a.mark((function t(){var e,n;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,q.a.get("https://jsonplaceholder.typicode.com/todos");case 3:return e=t.sent,n=e.data.slice(0,5),t.abrupt("return",n);case 8:return t.prev=8,t.t0=t.catch(0),t.abrupt("return",[]);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}(),G=n(155),L=(n(115),function(){var t=Object(c.useContext)(p),e=Object(c.useState)(b[0]),n=Object(o.a)(e,2),a=n[0],r=n[1];return Object(c.useEffect)((function(){t.sortTasks(a)}),[a]),Object(d.jsx)("div",{className:"tasksSorter",children:Object(d.jsx)(G.a,{native:!0,value:a,onChange:function(t){return r(t.target.value)},children:b.map((function(t){return Object(d.jsx)("option",{value:t,children:t},t)}))})})}),M=function(){var t=Object(c.useContext)(p),e=function(){var e=Object(h.a)(v.a.mark((function e(){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:n=e.sent,t.setTasks(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){e()}),[]),Object(d.jsxs)("div",{className:"tasksScreen",children:[Object(d.jsx)(D,{}),Object(d.jsx)(L,{}),Object(d.jsx)(A,{})]})},P=function(){return Object(d.jsx)(f,{children:Object(d.jsx)(M,{})})};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(P,{})}),document.getElementById("root"))},86:function(t,e,n){},89:function(t,e,n){},94:function(t,e,n){},95:function(t,e,n){},96:function(t,e,n){}},[[116,1,2]]]);
//# sourceMappingURL=main.8a86f798.chunk.js.map