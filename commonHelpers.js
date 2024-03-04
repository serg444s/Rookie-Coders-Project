import{o as u,a as L}from"./assets/dark-mode-eacae607.js";import{a as i,b as v}from"./assets/vendor-9b4a9007.js";async function l(o){return o.map(({author:t,book_image:e,title:a,description:s,_id:n})=>`<li class="books-item-about" >  
    <div class="book-wrap"> 
    <img class="book-img" src="${e}" data-id="${n}"  alt="${s}" /> 
    </div> 
    <div class="book-info">  
    <p class="info-title">${a}</p>  
    <p class="info-author">${t}</p>  
    </div>  
    </li>`).join("")}async function w(o){return c()<768>c()?l(o.slice(0,1)):c()<1439>c()?l(await o.slice(0,3)):l(o)}function c(){return window.innerWidth}async function $(o){return(await Promise.all(o.map(async({list_name:e,books:a})=>`
    <div class="container-books">
    <h3 class="book-categoty-title">${e}</h3>
    <ul class='list-books'>${await w(a)}</ul>
    <button class="book-button" data-category="${e}">See more</button>
    </div>
    `))).join("")}document.addEventListener("click",async o=>{if(o.target.classList.contains("book-button")){const t=o.target.dataset.category;await m(t)}});async function S(){const o=document.querySelector(".top-categories-list");try{const t=await i.get("https://books-backend.p.goit.global/books/top-books");o.insertAdjacentHTML("afterbegin",'<h2 class="categories-title">Best Sellers<span> Books</span></h2>');const e=await $(t.data);return o.insertAdjacentHTML("beforeend",e),t.data}catch(t){console.log(t.message),u()}}async function m(o){const t=document.querySelector(".top-categories-list");console.log(t),t.innerHTML="";try{const e=await i.get(`https://books-backend.p.goit.global/books/category?category=${o}`);console.log(e);const a=e.data;t.insertAdjacentHTML("afterbegin",await E(o,a))}catch(e){console.log(e.message),u()}}async function E(o,t){return`
  <h3 class="categories-title">${o}</h3>
  <ul class='list-books'>${await M(t)}</ul>`}async function M(o){return console.log(o),o.map(q).join("")}function q({author:o,book_image:t,title:e,description:a,_id:s}){return`<li class="category-item" id=${s}>
    <div class="book-wrap">
    <img class="book-img" src="${t}"  alt="${a}" data-id="${s}"/>
    </div >
    <div class="book-info">
    <p class="info-title">${e}</p>
    <p class="info-author">${o}</p>
    </div>
    </li>`}async function g(){const o="https://books-backend.p.goit.global/books/category-list";try{return(await i.get(o)).data}catch(t){console.error("Error fetching books:",t)}}async function B(){try{const o=await g(),t=document.querySelector(".categories-list_books");o.forEach(e=>{const a=document.createElement("li");a.classList.add("item-list_category"),a.dataset.category=e.list_name;const s=document.createElement("a");s.textContent=e.list_name,s.href=`#${e.list_name}`,s.classList.add("link_category-book"),a.appendChild(s),t.appendChild(a),a.addEventListener("click",async()=>{const n=a.dataset.category;await m(n)})})}catch(o){console.error("Error rendering categories:",o)}}document.addEventListener("DOMContentLoaded",B);const p=document.querySelector('[data-action="open-modal"]'),b=document.querySelector('[data-action="close-modal"]'),y=document.querySelector("body");function C(){document.body.classList.add("show-modal"),b.style.display="flex",p.style.display="none",y.style.overflow="hidden"}function x(){document.body.classList.remove("show-modal"),b.style.display="none",p.style.display="flex",y.style.overflow="auto"}async function D(o){const t=`https://books-backend.p.goit.global/books/${o}`;return(await i.get(t)).data}const I=document.querySelector(".top-categories-list");document.querySelector(".modal-icon");document.querySelector(".backdrop");document.querySelector(".modal-btn");document.querySelector(".modal-congrat-text");I.addEventListener("click",k);let r;async function k(o){if(o.preventDefault(),o.target.nodeName!=="IMG")return;const t=o.target.dataset.id,e=await D(t),{book_image:a,title:s,author:n,description:f,amazon_product_url:h}=e;r=v.create(`<div class="modal">
        <button type="button" class="modal-icon">
        <svg class="modal-icon-closed" width="18" height="18"><use href="../img/symbol-defs.svg#icon-closed"></use></svg>
        </button>
        <div class="modal-content">
        <img class="modal-img" src="${a}" width="330" height="485"/>
        <div class="modal-content-text">
        <h3 class="modal-title">${s}</h3>
        <p class="modal-author">${n}</p> 
        <p class="modal-text">${f}</p>
        <ul><li class="modal-link"><a href="${h}">Amazon
        </a></li></ul>
        </div>
        </div>
        <button class="modal-btn" type="button">ADD TO SHOPPING LIST</button>
        <p class="modal-congrat-text"></p>
    </div>`,{onShow:()=>{document.addEventListener("keydown",d)},onClose:()=>{document.removeEventListener("keydown",d)}}),r.show()}function d(o){o.preventDefault(),o.code==="Escape"&&r.close()}const _=document.querySelector(".top-categories-list"),A=document.querySelector('[data-action="open-modal"]'),O=document.querySelector('[data-action="close-modal"]');g();document.addEventListener("DOMContentLoaded",L);_.addEventListener("click",k);S();A.addEventListener("click",C);O.addEventListener("click",x);
//# sourceMappingURL=commonHelpers.js.map
