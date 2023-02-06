(()=>{"use strict";function e(e){return e<10?"0"+e:e}const t=()=>{const n=new Date,a=document.createElement("div");a.className="clock";const o=document.createElement("p");return o.className="clock__info",o.innerText=`${e(n.getHours())} : ${e(n.getMinutes())} : ${e(n.getSeconds())}`,setTimeout(t,1e3),a.append(o),a};function n(e,t,n,a){const o=document.createElement("button");return o.className=t,o.id=e,o.textContent=n,o.type=a,o}function a(e){const t=document.createElement("section");t.className=`panel  panel-${e}`,t.id=`panel-${e}`;const a=document.createElement("div");a.className="panel__header",t.append(a);const o=document.createElement("h2");o.className="panel__title",o.textContent=`${e}:`,a.append(o);const c=document.createElement("h2");c.className="panel__count",c.id=`panel-count-${e}`,a.append(c);const r=document.createElement("div");switch(r.className="panel__container",r.id=`panel-container-${e}`,t.append(r),e){case"todo":n("panel-todo-button","panel__button","New card","button");break;case"done":n("panel-done-button","panel__button","Delete All","button")}return t}function o(){const e=document.createElement("main");e.className="board container";const t=document.createElement("div");t.className="board__panels-container";const o=a("todo"),c=a("progress"),r=a("done");return t.append(o,c,r),e.append(function(){const e=document.createElement("header");e.className="board__header";const t=document.createElement("h1");t.className="board__header-title";const a=n("#board-menu-button","board__menu-button","","button");return e.append(t,a),e}(),t),e}function c(e){const n=document.createElement("div");n.className="main-wrapper";const a=function(){const e=document.createElement("header");e.className="main-header container";const n=document.createElement("img");return n.className="main-header__logo",n.src="logo.svg",n.alt="Trollo-lo Logo",e.append(n,t()),e}();n.append(a);const c=document.createElement("main");c.className="boards-container container",c.append(o()),n.append(c),e.append(n)}const r=()=>({boardHeader:document.querySelector(".board__header"),boardTitle:document.querySelector(".board__header-title"),todoCount:"",progressCount:"",doneCount:""});function d(e){return JSON.parse(localStorage.getItem(e)??"[]")}const s=(e,t)=>{const a=document.querySelector(`#panel-${e}-container`),o=function(e,t){const a=document.createElement("div");a.className="task-card",a.id=`task-card-${e}`;const o=document.createElement("div");o.className="task-card__info-container",a.append(o);const c=document.createElement("h3");c.className="task-card__title",c.id=`task-card-title-${e}`,o.append(c);const r=document.createElement("p");r.className="taskCard__description",r.id=`task-card-description-${e}`,o.append(r);const d=document.createElement("div");d.className="task-card__footer",o.append(d);const s=document.createElement("div");s.className="task-card__user-container",d.append(s);const m=document.createElement("img");m.className="task-card__user-img",m.id=`task-card-user-img-${e}`,m.src="#",m.alt="user photo",s.append(m);const l=document.createElement("p");l.className="taskCard__user-name",l.id=`task-card-user-name-${e}`,s.append(l);const u=document.createElement("p");u.className="taskCard__time",u.id=`task-card-time-${e}`,d.append(u);const i=document.createElement("div");i.className="taskCard__buttons-container",a.append(i),i.append(n(e,"card__button-delete","","button")),i.append(n(e,"card__button-edit","","button")),"todo"===t&&i.append(n(e,"card__button-move-forward","","button")),"progress"===t&&(i.append(n(e,"card__button-move-forward","","button")),i.append(n(e,"card__button-move-back","","button")))}(t.id,e);document.querySelector(`#task-card-title-${t.id}`).innerText(t.title);document.querySelector(`#task-card-description-${t.id}`).innerText(t.description);document.querySelector(`#task-card-Time-${t.id}`).innerText(t.creationTime);document.querySelector(`#task-card-User-${t.id}`).innerText(t.user),a.append(o)},m=(e,t)=>{const n=d().tasksArray;e[`${t}Count`].innerText=function(e,t){return e.filter((e=>e.type===t)).length}(n,t),e.panelType.innerHTML="",n.forEach((e=>{e.type===t&&s(t,e)}))},l=e=>{(e=>{const t=d();e.boardTitle.innerText=t.title})(e),m(e,"todo"),m(e,"progress"),m(e,"done")},u=e=>{};!function(e){c(e);const t=r();l(t),u(t)}(document.querySelector("#root"))})();