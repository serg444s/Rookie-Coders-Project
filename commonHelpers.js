import{o as u,a as w}from"./assets/dark-mode-26719348.js";import{a as r,b as v}from"./assets/vendor-9b4a9007.js";async function i(t){return t.map(({author:o,book_image:e,title:a,description:s,_id:n})=>`<li class="books-item-about" >  
    <div class="book-wrap"> 
    <img class="book-img" src="${e}" data-id="${n}"  alt="${s}" /> 
    </div> 
    <div class="book-info">  
    <p class="info-title">${a}</p>  
    <p class="info-author">${o}</p>  
    </div>  
    </li>`).join("")}async function m(t){return c()<768>c()?i(t.slice(0,1)):c()<1439>c()?i(await t.slice(0,3)):i(t)}function c(){return window.innerWidth}async function S(t){return(await Promise.all(t.map(async({list_name:e,books:a})=>`
    <div class="container-books">
    <h3 class="book-categoty-title">${e}</h3>
    <ul class='list-books'>${await m(a)}</ul>
    <button class="book-button" data-category="${e}">See more</button>
    </div>
    `))).join("")}document.addEventListener("click",async t=>{if(t.target.classList.contains("book-button")){const o=t.target.dataset.category;await g(o)}});async function $(){const t=document.querySelector(".top-categories-list");try{const o=await r.get("https://books-backend.p.goit.global/books/top-books");t.insertAdjacentHTML("afterbegin",'<h2 class="categories-title">Best Sellers<span> Books</span></h2>');const e=await S(o.data);return t.insertAdjacentHTML("beforeend",e),o.data}catch(o){console.log(o.message),u()}}async function g(t){const o=document.querySelector(".top-categories-list");console.log(o),o.innerHTML="";try{const e=await r.get(`https://books-backend.p.goit.global/books/category?category=${t}`);console.log(e);const a=e.data;o.insertAdjacentHTML("afterbegin",await E(t,a))}catch(e){console.log(e.message),u()}}async function E(t,o){const e=t.split(" "),s="<span>"+e[e.length-1]+"</span>";return e[e.length-1]=s,`
  <h3 class="categories-title">${e.join(" ")}</h3>
  <ul class='list-books'>${await m(o)}</ul>`}async function p(){const t="https://books-backend.p.goit.global/books/category-list";try{return(await r.get(t)).data}catch(o){console.error("Error fetching books:",o)}}async function q(){try{const t=await p(),o=document.querySelector(".categories-list_books");t.forEach(e=>{const a=document.createElement("li");a.classList.add("item-list_category"),a.dataset.category=e.list_name;const s=document.createElement("a");s.textContent=e.list_name,s.href=`#${e.list_name}`,s.classList.add("link_category-book"),a.appendChild(s),o.appendChild(a),a.addEventListener("click",async()=>{const n=a.dataset.category;await g(n)})})}catch(t){console.error("Error rendering categories:",t)}}document.addEventListener("DOMContentLoaded",q);const b=document.querySelector('[data-action="open-modal"]'),y=document.querySelector('[data-action="close-modal"]'),k=document.querySelector("body");function M(){document.body.classList.add("show-modal"),y.style.display="flex",b.style.display="none",k.style.overflow="hidden"}function B(){document.body.classList.remove("show-modal"),y.style.display="none",b.style.display="flex",k.style.overflow="auto"}async function C(t){const o=`https://books-backend.p.goit.global/books/${t}`;return(await r.get(o)).data}const x=document.querySelector(".top-categories-list");document.querySelector(".modal-icon");document.querySelector(".backdrop");document.querySelector(".modal-btn");document.querySelector(".modal-congrat-text");x.addEventListener("click",h);let l;async function h(t){if(t.preventDefault(),t.target.nodeName!=="IMG")return;const o=t.target.dataset.id,e=await C(o),{book_image:a,title:s,author:n,description:f,amazon_product_url:L}=e;l=v.create(`<div class="modal">
        <button type="button" class="modal-icon">
        <svg class="modal-icon-closed" width="18" height="18"><use href="../img/symbol-defs.svg#icon-closed"></use></svg>
        </button>
        <div class="modal-content">
        <img class="modal-img" src="${a}" width="330" height="485"/>
        <div class="modal-content-text">
        <h3 class="modal-title">${s}</h3>
        <p class="modal-author">${n}</p> 
        <p class="modal-text">${f}</p>
        <ul><li class="modal-link"><a href="${L}">Amazon
        </a></li></ul>
        </div>
        </div>
        <button class="modal-btn" type="button">ADD TO SHOPPING LIST</button>
        <p class="modal-congrat-text"></p>
    </div>`,{onShow:()=>{document.addEventListener("keydown",d)},onClose:()=>{document.removeEventListener("keydown",d)}}),l.show()}function d(t){t.preventDefault(),t.code==="Escape"&&l.close()}const D=document.querySelector(".top-categories-list"),_=document.querySelector('[data-action="open-modal"]'),I=document.querySelector('[data-action="close-modal"]');p();document.addEventListener("DOMContentLoaded",w);D.addEventListener("click",h);$();_.addEventListener("click",M);I.addEventListener("click",B);
//# sourceMappingURL=commonHelpers.js.map
