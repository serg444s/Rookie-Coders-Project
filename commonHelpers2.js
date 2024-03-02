import"./assets/styles-90b7f055.js";import{a as b}from"./assets/vendor-8cce9181.js";function h(o){o.classList.add("loader")}function m(o){o.classList.remove("loader")}async function k(o){return(await b.get(`https://books-backend.p.goit.global/books/${o}`)).data}const c=document.querySelector(".js-books-container"),r=document.querySelector(".empty-shopping-list-main"),p=document.querySelector("#shopping-list-loader");g();u();function g(){c.innerHTML="",r.style.display="none",h(p)}function u(){f().then(o=>{const s=o;if(s.length===0)m(p),r.style.display="block",c.innerHTML="";else{const t=s.map(e=>v(e)).join("");m(p),c.innerHTML=t,r.style.display="none"}}).catch(o=>{console.error(o)})}function f(){return new Promise((o,s)=>{const t=localStorage.getItem("books");if(t){const e=JSON.parse(t),n=[];e.forEach(a=>{const i=k(a);n.push(i)}),Promise.all(n).then(a=>{o(a)}).catch(a=>{s(a)})}else o([])})}function v(o){const{book_image:s,title:t,list_name:e,description:n,author:a,buy_links:i,_id:d}=o;return`<div class="book-list">
<img class="book-card-img" src="${s}" alt="${t}" />
<div class="shop-card-info">
<div class="shop-card-hero">
<div class="shop-list-title-name">
<h3 class="shop-list-title">${t}<h3>
<p class="shop-list-list-name>${e}"></p>
</div>
<button class="remove-shop-list-book" data-bookid="${d}">
<svg class="icon-basket-shop-list" width="28" height="26" data-bookid="${d}">
 <use data-name="icon-removebook" href="./img/symbol-defs.svg#icon-removebook"></use>
</svg>
</button>
</div>
<p class="shop-list-description">${n}<p>
<div class="shop-list-downpart">
<p class="shop-list-author"> Author: ${a}</p>
<div class="shop-list-links">
<a class="amazon-link" target="_blank" href="${i.find(l=>l.name==="Amazon").url}">
<img 
class="amazon-img"
srcset="./img/shopping_list/amazon1x.png 1x,
./img/shopping_list/amazon2x.png 2x"
src="./img/shopping_list/amazon1x.png"
alt="Amazon Shop"
/>
</a>
<a class="openbooks-link" target="_blank" href="${i.find(l=>l.name==="Apple Books").url}">
     <img 
  class="open-book-icon"
  src="./img/shopping_list/openbook.png"
  alt="Open book"
  />
  </a>
</div>
</div>
</div>
</div>`}const y=document.querySelector(".add-book");y.addEventListener("click",o=>{const s=["643282b1e85766588626a080","643282b1e85766588626a0ba","643282b1e85766588626a0dc","643282b2e85766588626a0fc","643282b2e85766588626a118","643282b1e85766588626a085","643282b1e85766588626a0b2"];localStorage.setItem("books",JSON.stringify(s))});
//# sourceMappingURL=commonHelpers2.js.map
