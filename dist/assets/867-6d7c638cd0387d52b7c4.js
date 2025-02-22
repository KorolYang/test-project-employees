"use strict";(self.webpackChunktest_project_employee_employment=self.webpackChunktest_project_employee_employment||[]).push([[867],{2867:(e,t,s)=>{s.r(t),s.d(t,{default:()=>ne});var a=s(4848),n=s(6540),r=s(913),i=s(8852),c=s(8249),l=s(9893),o=s(1678);const d=e=>{var t;return null===(t=e.employeeByID)||void 0===t?void 0:t.employee};var m=s(7754);const h=()=>{console.log("cardProfile");const{avatar:e,firstName:t,lastName:s,birthdate:n,phone:r,jobType:c,sickCount:l,id:h,status:u,description:p}=(0,i.GV)(d);return(0,m.I)(e,'width="200"','height="200"'),(0,a.jsxs)("div",{className:"card",children:[(0,a.jsx)("div",{className:"employee-card__avatar",children:(0,a.jsx)("img",{src:"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20baseProfile%3D%22full%22%20width%3D%22undefined%22%20height%3D%22undefined%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22grey%22%2F%3E%3Ctext%20x%3D%22NaN%22%20y%3D%22NaN%22%20font-size%3D%2220%22%20alignment-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22white%22%3Eundefinedxundefined%3C%2Ftext%3E%3C%2Fsvg%3E",alt:"employee-avatar"})}),(0,a.jsxs)("div",{className:"employee-card__profile",children:[(0,a.jsxs)("p",{children:[t," ",s]}),(0,a.jsxs)("p",{children:["Дата Рождения: ",(g=n,new Date(g).toLocaleDateString("ru-RU",{day:"2-digit",month:"2-digit",year:"numeric"}))]}),(0,a.jsxs)("p",{children:["Телефон: ",r]}),(0,a.jsxs)("p",{children:["Должность: ",c]}),(0,a.jsxs)("p",{children:["Количество больничных: ",l]}),(0,a.jsxs)("p",{children:["О себе: ",p]})]}),(0,a.jsx)(o.A,{currentStatus:u,id:h})]});var g};var u=s(118),p=s(5452),g=s(6291),k=function(e,t,s,a){return new(s||(s=Promise))((function(n,r){function i(e){try{l(a.next(e))}catch(e){r(e)}}function c(e){try{l(a.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(i,c)}l((a=a.apply(e,t||[])).next())}))};const x=(0,p.zD)("tasksList/getTasksList",((e,t)=>k(void 0,void 0,void 0,(function*(){try{const{data:t}=yield g.n.employees.getEmployeeByID(e);return t}catch(e){return t.rejectWithValue(e.response.data)}})))),v=(0,p.zD)("tasksList/createTask",((e,t)=>k(void 0,[e,t],void 0,(function*({id:e,newTask:t},s){try{const a=[...s.getState().tasksList.tasks,t],{data:n}=yield g.n.employees.createTask(e,a);return t}catch(e){return s.rejectWithValue(e.response.data)}})))),f=(0,p.zD)("tasksList/editTask",((e,t)=>k(void 0,[e,t],void 0,(function*({id:e,newTask:t},s){try{const a=s.getState().tasksList.tasks.map((e=>e.taskId===t.taskId?Object.assign(Object.assign({},e),{isDone:t.isDone}):e)),{data:n}=yield g.n.employees.createTask(e,a);return t}catch(e){return s.rejectWithValue(e.response.data)}})))),j=(0,p.zD)("tasksList/deleteTask",((e,t)=>k(void 0,[e,t],void 0,(function*({id:e,taskId:t},s){try{const a=s.getState().tasksList.tasks.filter((e=>e.taskId!==t)),{data:n}=yield g.n.employees.createTask(e,a);return t}catch(e){return s.rejectWithValue(e.response.data)}})))),y=(0,p.Z0)({name:"tasksList",initialState:{isLoading:!1,tasks:[],error:""},reducers:{},extraReducers:e=>{e.addCase(x.pending,(e=>{e.isLoading=!0})).addCase(x.fulfilled,((e,t)=>{e.isLoading=!1,e.tasks=t.payload.tasks})).addCase(x.rejected,((e,t)=>{e.isLoading=!1,e.error=t.error.message})).addCase(v.pending,(e=>{e.isLoading=!0})).addCase(v.fulfilled,((e,t)=>{e.isLoading=!1,e.tasks.push(t.payload)})).addCase(v.rejected,((e,t)=>{e.isLoading=!1,e.error=t.error.message})).addCase(f.pending,(e=>{e.isLoading=!0})).addCase(f.fulfilled,((e,t)=>{e.isLoading=!1;const s=t.payload,a=e.tasks.findIndex((e=>e.taskId===s.taskId));-1!==a&&(e.tasks[a]=s)})).addCase(f.rejected,((e,t)=>{e.isLoading=!1,e.error=t.error.message})).addCase(j.pending,(e=>{e.isLoading=!0})).addCase(j.fulfilled,((e,t)=>{const s=t.payload;e.isLoading=!1,e.tasks=e.tasks.filter((e=>e.taskId!==s))})).addCase(j.rejected,((e,t)=>{e.isLoading=!1,e.error=t.error.message}))}});y.reducer;var w=s(9785);const N=({setIsOpen:e,titleBtn:t,task:s,type:n})=>{var c;const{handleSubmit:o,register:d,formState:{errors:m}}=(0,w.mN)({values:{taskName:null!==(c=null==s?void 0:s.taskName)&&void 0!==c?c:"",taskDescription:(null==s?void 0:s.taskDescription)||"",isUrgently:(null==s?void 0:s.isUrgently)||!1}}),h=(0,i.jL)(),{id:u}=(0,r.g)();return(0,a.jsxs)("form",{className:"form",onSubmit:o((t=>{switch(n){case"create":const a={taskName:t.taskName,taskDescription:t.taskDescription,taskId:Math.floor(1e5+9e5*Math.random()).toString(),isDone:!1,isUrgently:t.isUrgently};h(v({id:u,newTask:a})),e(!1);break;case"edit":const n=Object.assign(Object.assign({},s),{taskName:t.taskName,taskDescription:t.taskDescription,isUrgently:t.isUrgently});h(f({id:u,newTask:n})),e(!1)}})),children:[(0,a.jsx)("label",{className:"form__label",htmlFor:"taskName",children:"Название задания"}),m.taskName&&(0,a.jsx)("span",{className:"error-message",children:m.taskName.message}),(0,a.jsx)("input",Object.assign({className:"form__input",id:"taskName",type:"text"},d("taskName",{required:"Введите название задания",maxLength:{value:15,message:"Задание не должно превышать 15 символов"}}))),(0,a.jsx)("label",{className:"form__label",htmlFor:"taskDescription",children:"Описание"}),(0,a.jsx)("textarea",Object.assign({className:"form__textarea",id:"taskDescription"},d("taskDescription",{}))),(0,a.jsx)("label",{className:"form__label",htmlFor:"isUrgently",children:"Срочно"}),(0,a.jsx)("input",Object.assign({className:"form__checkbox",type:"checkbox",id:"isUrgently"},d("isUrgently"))),(0,a.jsx)(l.$,{children:t})]})};var b=s(6634);const L=({isOpen:e,setIsOpen:t,children:s})=>{const r=(0,n.useRef)(null),i=(0,n.useRef)(null);return(0,a.jsx)(b.A,{nodeRef:r,in:e,timeout:300,classNames:"modal",unmountOnExit:!0,children:(0,a.jsx)("div",{ref:r,className:"modal",onClick:()=>{t(!1)},children:(0,a.jsx)(b.A,{nodeRef:i,in:e,timeout:500,classNames:"modal__content",unmountOnExit:!0,children:(0,a.jsx)("div",{ref:i,className:"modal__content",onClick:e=>e.stopPropagation(),children:s})})})})},_=e=>{var t;return null===(t=e.tasksList)||void 0===t?void 0:t.tasks};var D,O,C,z;function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)({}).hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e},E.apply(null,arguments)}const I=function(e){return n.createElement("svg",E({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-trash-2"},e),D||(D=n.createElement("polyline",{points:"3 6 5 6 21 6"})),O||(O=n.createElement("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})),C||(C=n.createElement("line",{x1:10,y1:11,x2:10,y2:17})),z||(z=n.createElement("line",{x1:14,y1:11,x2:14,y2:17})))};var S;function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)({}).hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e},T.apply(null,arguments)}const A=function(e){return n.createElement("svg",T({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-check"},e),S||(S=n.createElement("polyline",{points:"20 6 9 17 4 12"})))};var U,F,B,P,V,W,R,M;function $(){return $=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)({}).hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e},$.apply(null,arguments)}const G=function(e){return n.createElement("svg",$({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-loader"},e),U||(U=n.createElement("line",{x1:12,y1:2,x2:12,y2:6})),F||(F=n.createElement("line",{x1:12,y1:18,x2:12,y2:22})),B||(B=n.createElement("line",{x1:4.93,y1:4.93,x2:7.76,y2:7.76})),P||(P=n.createElement("line",{x1:16.24,y1:16.24,x2:19.07,y2:19.07})),V||(V=n.createElement("line",{x1:2,y1:12,x2:6,y2:12})),W||(W=n.createElement("line",{x1:18,y1:12,x2:22,y2:12})),R||(R=n.createElement("line",{x1:4.93,y1:19.07,x2:7.76,y2:16.24})),M||(M=n.createElement("line",{x1:16.24,y1:7.76,x2:19.07,y2:4.93})))};var Z,q;function H(){return H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)({}).hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e},H.apply(null,arguments)}const K=function(e){return n.createElement("svg",H({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-edit-3"},e),Z||(Z=n.createElement("path",{d:"M12 20h9"})),q||(q=n.createElement("path",{d:"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"})))};var J=s(362);const Q=({task:e})=>{const t=(0,i.jL)(),[s,c]=(0,n.useState)(!1),[l,o]=(0,n.useState)(!1),{id:d}=(0,r.g)(),m=e.taskId;return(0,a.jsxs)(a.Fragment,{children:[l&&(0,a.jsx)(L,{isOpen:l,setIsOpen:o,children:(0,a.jsx)(N,{setIsOpen:o,titleBtn:"Сохранить",task:e,type:"edit"})}),(0,a.jsx)(J.A,{title:"Изменить",placement:"top",children:(0,a.jsx)("span",{children:(0,a.jsx)(K,{onClick:()=>{o(!0)},className:"edit-icon"})})}),(0,a.jsx)(J.A,{title:"Сделано",placement:"top",children:(0,a.jsx)("span",{children:(0,a.jsx)(A,{onClick:()=>{const s=Object.assign(Object.assign({},e),{isDone:!e.isDone});t(f({id:d,newTask:s}))},className:"is-done-icon"})})}),(0,a.jsx)(J.A,{title:"Удалить",placement:"top",children:(0,a.jsx)("span",{children:s?(0,a.jsx)(G,{className:"loading-icon"}):(0,a.jsx)(I,{onClick:()=>{c(!0),t(j({id:d,taskId:m})).then((()=>c(!1)))},className:"delete-icon"})})})]})};var X;function Y(){return Y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)({}).hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e},Y.apply(null,arguments)}const ee=function(e){return n.createElement("svg",Y({id:"Layer_1",enableBackground:"new 0 0 512 512",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em"},e),X||(X=n.createElement("path",{d:"m469.528 179.188 6.005-6.005c6.581-6.582 6.581-17.292 0-23.874l-21.313-21.312c-6.583-6.583-17.292-6.583-23.874 0l-6.005 6.004c-21.686-15.244-46.784-25.942-73.904-30.697v-16.723h16.604c9.309 0 16.882-7.573 16.882-16.882v-10.376c0-9.309-7.573-16.882-16.882-16.882h-97.113c-9.309 0-16.882 7.573-16.882 16.882v10.376c0 9.309 7.573 16.882 16.882 16.882h16.604v16.724c-27.121 4.755-52.219 15.453-73.905 30.696l-6.005-6.005c-6.582-6.581-17.292-6.581-23.874 0l-21.312 21.312c-6.583 6.582-6.583 17.292 0 23.875l6.005 6.005c-21.079 29.987-33.473 66.499-33.473 105.856 0 101.742 82.773 184.515 184.515 184.515s184.517-82.773 184.517-184.515c0-39.357-12.394-75.869-33.472-105.856zm-29.282-41.292c1.124-1.123 2.952-1.123 4.075 0l21.312 21.311c1.124 1.124 1.124 2.953 0 4.076l-4.659 4.659c-7.623-9.259-16.129-17.765-25.388-25.388zm-173.199-68.197v-10.376c0-1.589 1.293-2.882 2.882-2.882h97.113c1.589 0 2.882 1.293 2.882 2.882v10.376c0 1.589-1.293 2.882-2.882 2.882h-97.113c-1.589 0-2.882-1.293-2.882-2.882zm33.486 16.882h35.904v14.823c-5.909-.573-11.896-.875-17.952-.875s-12.043.302-17.952.875zm-129.196 76.703c-1.124-1.124-1.124-2.952 0-4.076l21.312-21.312c1.124-1.124 2.953-1.124 4.076 0l4.659 4.659c-9.259 7.623-17.765 16.129-25.388 25.388zm147.148 292.275c-94.022 0-170.515-76.493-170.515-170.515s76.493-170.515 170.515-170.515 170.515 76.492 170.515 170.515-76.493 170.515-170.515 170.515zm0-315.861c-80.145 0-145.347 65.202-145.347 145.347 0 80.144 65.202 145.346 145.347 145.346s145.347-65.202 145.347-145.346c0-80.145-65.203-145.347-145.347-145.347zm0 276.693c-72.425 0-131.347-58.922-131.347-131.346 0-72.425 58.922-131.347 131.347-131.347s131.347 58.922 131.347 131.347c0 72.424-58.922 131.346-131.347 131.346zm65.167-230.219-9.917 17.176c-1.296 2.246-3.649 3.501-6.068 3.501-1.188 0-2.391-.302-3.494-.939-3.348-1.933-4.495-6.214-2.562-9.562l9.917-17.176c1.933-3.348 6.214-4.496 9.562-2.562 3.348 1.933 4.495 6.214 2.562 9.562zm13.967 53.184c-1.933-3.348-.786-7.629 2.562-9.562l17.176-9.917c3.349-1.933 7.629-.786 9.562 2.562s.786 7.629-2.562 9.562l-17.176 9.917c-1.103.637-2.306.939-3.494.939-2.418 0-4.771-1.255-6.068-3.501zm46.076 45.688c0 3.866-3.134 7-7 7h-19.834c-3.866 0-7-3.134-7-7s3.134-7 7-7h19.834c3.866 0 7 3.134 7 7zm-16.776 62.605c-1.296 2.246-3.649 3.501-6.068 3.501-1.188 0-2.391-.302-3.494-.939l-17.176-9.917c-3.348-1.933-4.495-6.214-2.562-9.562 1.934-3.349 6.214-4.496 9.562-2.562l17.176 9.917c3.349 1.933 4.496 6.214 2.562 9.562zm-43.267 36.268c1.933 3.348.786 7.629-2.562 9.562-1.102.637-2.306.939-3.494.939-2.419 0-4.772-1.255-6.068-3.501l-9.917-17.177c-1.933-3.348-.786-7.629 2.562-9.562s7.63-.786 9.562 2.562zm-58.167-.497v19.833c0 3.866-3.134 7-7 7s-7-3.134-7-7v-19.833c0-3.866 3.134-7 7-7s7 3.134 7 7zm-50.126-9.68-9.916 17.177c-1.297 2.246-3.65 3.501-6.069 3.501-1.188 0-2.391-.302-3.494-.939-3.348-1.933-4.495-6.214-2.562-9.562l9.916-17.177c1.934-3.349 6.215-4.495 9.563-2.562s4.495 6.214 2.562 9.562zm-36.008-43.008c1.933 3.348.786 7.629-2.562 9.562l-17.176 9.917c-1.103.637-2.306.939-3.494.939-2.419 0-4.772-1.255-6.068-3.501-1.933-3.348-.786-7.629 2.562-9.562l17.176-9.917c3.348-1.932 7.629-.785 9.562 2.562zm-19.242-38.688h-19.833c-3.866 0-7-3.134-7-7s3.134-7 7-7h19.833c3.866 0 7 3.134 7 7s-3.134 7-7 7zm19.242-52.688c-1.296 2.246-3.649 3.501-6.068 3.501-1.188 0-2.391-.302-3.494-.939l-17.176-9.917c-3.348-1.933-4.495-6.214-2.562-9.562 1.933-3.349 6.215-4.495 9.562-2.562l17.176 9.917c3.348 1.933 4.495 6.214 2.562 9.562zm36.008-43.008c1.933 3.348.786 7.629-2.562 9.562-1.103.637-2.306.939-3.494.939-2.419 0-4.772-1.255-6.068-3.501l-9.917-17.176c-1.933-3.348-.786-7.629 2.562-9.562 3.349-1.933 7.629-.786 9.562 2.562zm50.126 70.046v-52.666c0-3.866-3.134-7-7-7s-7 3.134-7 7v52.666c-7.548 2.844-12.942 10.119-12.942 18.65 0 10.996 8.946 19.942 19.942 19.942s19.942-8.946 19.942-19.942c0-8.53-5.394-15.806-12.942-18.65zm-7 24.593c-3.277 0-5.942-2.666-5.942-5.942s2.666-5.943 5.942-5.943 5.942 2.666 5.942 5.943-2.665 5.942-5.942 5.942zm-7-104.319v-19.834c0-3.866 3.134-7 7-7s7 3.134 7 7v19.834c0 3.866-3.134 7-7 7s-7-3.133-7-7zm-276.342 75.784c0-3.866 3.134-7 7-7h65.902c3.866 0 7 3.134 7 7s-3.134 7-7 7h-65.902c-3.866 0-7-3.134-7-7zm90.199-45.185c0 3.866-3.134 7-7 7h-57.48c-3.866 0-7-3.134-7-7s3.134-7 7-7h57.479c3.867 0 7.001 3.133 7.001 7zm-16.904 97.37h-92.438c-3.866 0-7-3.134-7-7s3.134-7 7-7h92.438c3.866 0 7 3.134 7 7s-3.133 7-7 7zm16.904 38.185c0 3.866-3.134 7-7 7h-61.318c-3.866 0-7-3.134-7-7s3.134-7 7-7h61.317c3.867 0 7.001 3.134 7.001 7z"})))};var te=s(4164);const se=(0,n.memo)((({task:e})=>(console.log("taskItem"),(0,a.jsxs)("li",{className:(0,te.A)("task-item",{"task-item__done":e.isDone}),children:[(0,a.jsx)("div",{className:"task-item__name",children:(0,a.jsx)("p",{children:e.taskName})}),(0,a.jsx)("div",{className:"task-item__descr",children:(0,a.jsx)("p",{children:e.taskDescription})}),(0,a.jsx)("div",{className:"task-item__urgently",children:e.isUrgently&&(0,a.jsx)(ee,{className:"urgently-icon"})}),(0,a.jsx)("div",{className:"task-item__setting",children:(0,a.jsx)(Q,{task:e})})]})))),ae=(0,u.A)((()=>{console.log("taskList");const e=(0,i.jL)(),{id:t}=(0,r.g)(),[s,c]=(0,n.useState)(!1),o=(0,i.GV)(_);return(0,n.useEffect)((()=>{e(x(t))}),[]),(0,a.jsxs)("div",{className:"task-container",children:[(0,a.jsx)(l.$,{onClick:()=>{c(!0)},className:"create-task-btn",children:"Назначить Задание"}),(0,a.jsx)(L,{isOpen:s,setIsOpen:c,children:(0,a.jsx)(N,{setIsOpen:c,titleBtn:"Создать",type:"create"})}),(0,a.jsx)("div",{className:"employee-card__tasks",children:(0,a.jsx)("ul",{className:"task-list",children:null==o?void 0:o.map((e=>(0,a.jsx)(se,{task:e},e.taskId)))})})]})}),{name:"tasksList",reducer:y.reducer}),ne=()=>{console.log("employeeCard");const e=(0,i.jL)(),{id:t}=(0,r.g)(),s=(0,r.Zp)();return(0,n.useEffect)((()=>{e((0,c.T)(t))}),[]),(0,a.jsxs)("div",{className:"employee-card",children:[(0,a.jsx)("div",{className:"employee-card__buttons",children:(0,a.jsx)(l.$,{onClick:()=>s(-1),children:"Назад"})}),(0,a.jsx)(h,{}),(0,a.jsx)(ae,{})]})}},1678:(e,t,s)=>{s.d(t,{A:()=>m});var a=s(4848),n=s(8303),r=s(6540),i=s(4957),c=s(8363),l=s(8852),o=s(845);const d={working:"На работе",dayOff:"Выходной",sick:"Болеет"},m=({currentStatus:e,id:t})=>{const s=(0,l.jL)(),[m,h]=(0,r.useState)(e);return(0,a.jsx)(n.A,{sx:{m:1},variant:"standard",children:(0,a.jsx)(i.A,{value:m,onChange:e=>{const a=e.target.value;h(a),s((0,o.Kv)({id:t,status:a}))},children:Object.keys(d).map((e=>(0,a.jsx)(c.A,{value:e,children:d[e]},e)))})})}},7754:(e,t,s)=>{s.d(t,{I:()=>a});const a=(e,t,s)=>{const a=e.indexOf(",")+1,n=e.slice(a),r=decodeURIComponent(n).replace(/width="undefined"/g,t).replace(/height="undefined"/g,s).replace(/x="NaN"/g,'x="50%"').replace(/y="NaN"/g,'y="50%"').replace(/undefinedxundefined/g,"Avatar");return`data:image/svg+xml;base64,${btoa(r)}`}}}]);