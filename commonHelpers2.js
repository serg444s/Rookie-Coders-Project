import{f as B,g as L,e as y,l as w,a as k,o as S,b as h,c as P,d as I}from"./assets/openbook-7071020a.js";import{P as b,a as E}from"./assets/vendor-9b4a9007.js";const O="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADjSURBVHgBnVKBDYIwEPwaB8AJ7AhsIBsYNmADGcERdALZwBXYQDYAJoAN6hWrvu0jDZdcvmmv1/7lFQkwxhQo2tvulFIVxQAGrQnRSlqFgwQ1pRXAj2r7WmnWo1TuyxnKHazB68LDJXgAc7Ah1ncH3hYuW13F89iwswHcOZEGHzYfvna6PdhLBiP4Fml6BZt66wDcoHfuS0jcY4FBLGybg2TQ0Xf6RrY/egY/GWxJAAakQWj5NCg0hfpZz8LOvxsO/UeTOk1BMy1YnGYu2/COnjYQnSPG98LvKMEkQ8lIRu1n8QSBQeOQY05IhwAAAABJRU5ErkJggg==",Q=document.querySelector('[data-action="open-modal"]'),Y=document.querySelector('[data-action="close-modal"]');Q.addEventListener("click",B);Y.addEventListener("click",L);async function $(o){return(await E.get(`https://books-backend.p.goit.global/books/${o}`)).data}const g=document.querySelector(".js-books-container"),A=document.querySelector(".empty-shopping-list-main"),m=document.querySelector("#shopping-list-loader"),l=document.getElementById("pagination2");let i,c=f();y();x();v();function x(){g.innerHTML="",A.style.display="none",w(m)}window.addEventListener("resize",()=>{i.length!==0&&(c=f(),new b(l,{totalItems:i.length,itemsPerPage:c,visiblePages:3,centerAlign:!0}),p(1))});function M(o,t){return new Promise(function(e,a){function n(s){o.removeEventListener(t,n),e(s)}o.addEventListener(t,s=>{s.target.classList.contains("tui-page-btn")&&!s.target.classList.contains("tui-is-selected")&&!s.target.classList.contains("tui-is-disabled")&&n()})})}function f(){return window.innerWidth<768?4:3}function v(){H().then(o=>{i=o,i.length===0?(k(m),A.style.display="block",g.innerHTML="",l.innerHTML=""):(k(m),new b(l,{totalItems:i.length,itemsPerPage:c,visiblePages:3,centerAlign:!0}),p(1))}).catch(()=>{S()})}function p(o){const a=[...i].splice(c*(o-1),c).map(n=>R(n)).join("");g.innerHTML=a,A.style.display="none",M(l,"click").then(function(n){p(parseInt(document.getElementsByTagName("strong")[0].innerHTML))})}function H(){return new Promise((o,t)=>{const e=localStorage.getItem("books");if(e){const a=JSON.parse(e),n=[];a.forEach(s=>{const r=$(s);n.push(r)}),Promise.all(n).then(s=>{o(s)}).catch(s=>{t(s)})}else o([])})}function R(o){const{book_image:t,title:e,list_name:a,description:n,author:s,buy_links:r,_id:u}=o;return`<div class="book-list">
<img class="book-card-img" src="${t}" alt="${e}" />
<div class="shop-card-info">
<div class="shop-card-hero">
<div class="shop-list-title-name">
<h3 class="shop-list-title">${e}</h3>
<p class="shop-list-list-name">${a}</p>
</div>
<button class="remove-shop-list-book" data-bookid="${u}">
<img 
  class="icon-basket-shop-list"
  data-bookid="${u}"
  src="${O}"
  alt="Delete book"
  />
</button>
</div>
<p class="shop-list-description">${n}<p>
<div class="shop-list-downpart">
<p class="shop-list-author"> Author: ${s}</p>
<div class="shop-list-links">
<a class="amazon-link" target="_blank" href="${r.find(d=>d.name==="Amazon").url}">
<img 
class="amazon-img  html.dark-mode & {}"
srcset="
${h} 1x,
${P} 2x
"
src="${h}"
alt="Amazon Shop"
/>
</a>
<a class="openbooks-link" target="_blank" href="${r.find(d=>d.name==="Apple Books").url}">
     <img 
  class="open-book-icon"
  src="${I}"
  alt="Open book"
  />
  </a>
</div>
</div>
</div>
</div>`}function j(o){if(o.target.classList.contains("remove-shop-list-book")||o.target.classList.contains("icon-basket-shop-list")||o.target.dataset.name==="remove-shop-list-book"){const t=o.target.getAttribute("data-bookid");z(t)}}function z(o){let t=localStorage.getItem("books");if(t){t=JSON.parse(t);const e=t.indexOf(o);e!==-1&&t.splice(e,1),localStorage.setItem("books",JSON.stringify(t)),v()}}document.addEventListener("click",j);function T(){document.querySelector(".navigation_link_shopping").classList.add("active")}T();
//# sourceMappingURL=commonHelpers2.js.map
