import"./assets/styles-b352df1e.js";import{a as k}from"./assets/vendor-8cce9181.js";function g(o){o.classList.add("loader")}function m(o){o.classList.remove("loader")}async function h(o){return(await k.get(`https://books-backend.p.goit.global/books/${o}`)).data}const l=document.querySelector(".js-books-container"),r=document.querySelector(".empty-shopping-list-main"),d=document.querySelector("#shopping-list-loader");u();b();function u(){l.innerHTML="",r.style.display="none",g(d)}function b(){f().then(o=>{const s=o;if(s.length===0)m(d),r.style.display="block",l.innerHTML="";else{const t=s.map(a=>v(a)).join("");m(d),l.innerHTML=t,r.style.display="none"}}).catch(o=>{console.error(o)})}function f(){return new Promise((o,s)=>{const t=localStorage.getItem("books");if(t){const a=JSON.parse(t),i=[];a.forEach(e=>{const n=h(e);i.push(n)}),Promise.all(i).then(e=>{o(e)}).catch(e=>{s(e)})}else o([])})}function v(o){const{book_image:s,title:t,list_name:a,description:i,author:e,buy_links:n,_id:p}=o;return`<div class="book-list">
<img class="book-card-img" src="${s}" alt="${t}" />
<div class="shop-card-info">
<div class="shop-card-hero">
<div class="shop-list-title-name">
<h3 class="shop-list-title">${t}<h3>
<p class="shop-list-list-name>${a}"></p>
</div>
<button class="remove-shop-list-book" data-bookid="${p}">
<svg class="icon-basket-shop-list" width="28" height="26" data-bookid="${p}">
 <use data-name="icon-removebook" href="/img/symbol-defs.svg#icon-removebook"></use>
</svg>
</button>
</div>
<p class="shop-list-description">${i}<p>
<div class="shop-list-downpart">
<p class="shop-list-author"> Author: ${e}</p>
<div class="shop-list-links">
<a class="amazon-link" target="_blank" href="${n.find(c=>c.name==="Amazon").url}">
<img 
class="amazon-img"
srcset="/img/shopping_list/amazon1x.png 1x,
/img/shopping_list/amazon2x.png 2x"
src="/img/shopping_list/amazon1x.png"
alt="Amazon Shop"
/>
</a>
<a class="openbooks-link" target="_blank" href="${n.find(c=>c.name==="Apple Books").url}">
     <img 
  class="open-book-icon"
  src="/img/shopping_list/openbook.png"
  alt="Open book"
  />
  </a>
</div>
</div>
</div>
</div>`}function y(o){if(o.target.classList.contains("remove-shop-list-book")||o.target.classList.contains("icon-basket-shop-list")||o.target.dataset.name==="remove-shop-list-book"){const s=o.target.getAttribute("data-bookid");L(s)}}function L(o){let s=localStorage.getItem("books");if(s){s=JSON.parse(s);const t=s.indexOf(o);t!==-1&&s.splice(t,1),localStorage.setItem("books",JSON.stringify(s)),b()}}document.addEventListener("click",y);const S=document.querySelector(".add-book");S.addEventListener("click",o=>{const s=["643282b1e85766588626a080","643282b1e85766588626a0ba","643282b1e85766588626a0dc","643282b2e85766588626a0fc","643282b2e85766588626a118","643282b1e85766588626a085","643282b1e85766588626a0b2"];localStorage.setItem("books",JSON.stringify(s))});
//# sourceMappingURL=commonHelpers2.js.map
