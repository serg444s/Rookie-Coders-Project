import{o as u,a as v}from"./assets/dark-mode-f266396a.js";import{a as r,b as w}from"./assets/vendor-9b4a9007.js";async function i(o){return o.map(({author:t,book_image:e,title:a,description:s,_id:c})=>`<li class="books-item-about" >  
    <div class="book-wrap"> 
    <img class="book-img" src="${e}" data-id="${c}"  alt="${s}" /> 
    </div> 
    <div class="book-info">  
    <p class="info-title">${a}</p>  
    <p class="info-author">${t}</p>  
    </div>  
    </li>`).join("")}async function g(o){return l()<768>l()?i(o.slice(0,1)):l()<1439>l()?i(await o.slice(0,3)):i(o)}function l(){return window.innerWidth}async function E(o){return(await Promise.all(o.map(async({list_name:e,books:a})=>`
    <div class="container-books">
    <h3 class="book-categoty-title">${e}</h3>
    <ul class='list-books'>${await g(a)}</ul>
    <button class="book-button" data-category="${e}">See more</button>
    </div>
    `))).join("")}document.addEventListener("click",async o=>{if(o.target.classList.contains("book-button")){const t=o.target.dataset.category;await p(t)}});async function $(){const o=document.querySelector(".top-categories-list");try{const t=await r.get("https://books-backend.p.goit.global/books/top-books");o.insertAdjacentHTML("afterbegin",'<h2 class="categories-title">Best Sellers<span> Books</span></h2>');const e=await E(t.data);return o.insertAdjacentHTML("beforeend",e),t.data}catch(t){console.log(t.message),u()}}async function p(o){const t=document.querySelector(".top-categories-list");console.log(t),t.innerHTML="";try{const e=await r.get(`https://books-backend.p.goit.global/books/category?category=${o}`);console.log(e);const a=e.data;t.insertAdjacentHTML("afterbegin",await q(o,a))}catch(e){console.log(e.message),u()}}async function q(o,t){const e=o.split(" "),s="<span>"+e[e.length-1]+"</span>";return e[e.length-1]=s,`
  <h3 class="categories-title">${e.join(" ")}</h3>
  <ul class='list-books'>${await g(t)}</ul>`}async function b(){const o="https://books-backend.p.goit.global/books/category-list";try{return(await r.get(o)).data}catch(t){console.error("Error fetching books:",t)}}async function I(){try{const o=await b(),t=document.querySelector(".categories-list_books");o.forEach(e=>{const a=document.createElement("li");a.classList.add("item-list_category"),a.dataset.category=e.list_name;const s=document.createElement("a");s.textContent=e.list_name,s.href=`#${e.list_name}`,s.classList.add("link_category-book"),a.appendChild(s),t.appendChild(a),a.addEventListener("click",async()=>{const c=a.dataset.category;await p(c)})})}catch(o){console.error("Error rendering categories:",o)}}document.addEventListener("DOMContentLoaded",I);const k=document.querySelector('[data-action="open-modal"]'),y=document.querySelector('[data-action="close-modal"]'),h=document.querySelector("body");function M(){document.body.classList.add("show-modal"),y.style.display="flex",k.style.display="none",h.style.overflow="hidden"}function x(){document.body.classList.remove("show-modal"),y.style.display="none",k.style.display="flex",h.style.overflow="auto"}function O(o){const t=JSON.parse(localStorage.getItem("books"))||[];t.push(o),localStorage.setItem("books",JSON.stringify(t))}function B(o){const t=JSON.parse(localStorage.getItem("books")),e=t.findIndex(a=>a===o);e!==-1&&t.splice(e,1),localStorage.setItem("books",JSON.stringify(t))}async function C(o){const t=`https://books-backend.p.goit.global/books/${o}`;return(await r.get(t)).data}const _=document.querySelector(".top-categories-list");document.querySelector(".modal-btn");document.querySelector(".modal-congrat-text");_.addEventListener("click",f);let d;async function f(o){if(o.preventDefault(),o.target.nodeName!=="IMG")return;const t=o.target.dataset.id,e=await C(t),{book_image:a,title:s,author:c,description:S,amazon_product_url:L}=e;d=w.create(`<div class="modal">
        <button type="button" class="modal-icon">
        <svg class="modal-icon-closed" width="18" height="18"><use href="../img/symbol-defs.svg#icon-closed"></use></svg>
        </button>
        <div class="modal-content">
        <img class="modal-img" src="${a}" width="330" height="485"/>
        <div class="modal-content-text">
        <h3 class="modal-title">${s}</h3>
        <p class="modal-author">${c}</p> 
        <p class="modal-text">${S}</p>
        <ul><li class="modal-link-icons"><a class="modal-link" href="${L}" target="_blank"><img src="../img/shopping_list/amazon1x.png" alt="applebook" target="_blank" /></a>
        <img class="modal-link-img" src="../img/shopping_list/openbook.png" />
        </li></ul>
        </div>
        </div>
        <button class="modal-btn" type="button">ADD TO SHOPPING LIST</button>
        <p class="modal-congrat-text"></p>
    </div>`,{onShow:n=>{document.addEventListener("keydown",m),n.element().querySelector(".modal-icon").onclick=n.close,n.element().querySelector(".modal-btn").onclick=O(t),n.element().querySelector(".modal-btn").onclick=n.element().querySelector(".modal-btn").innerHTML="REMOVE ",n.element().querySelector(".modal-btn").onclick=n.element().querySelector(".modal-congrat-text").textContent='Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".',n.element().querySelector(".modal-btn").textContent==="REMOVE FROM THE SHOPPING LIST"&&(n.element().querySelector(".modal-btn").onclick=B)},onClose:()=>{document.removeEventListener("keydown",m)}}),d.show()}function m(o){o.preventDefault(),o.code==="Escape"&&d.close()}const T=document.querySelector(".top-categories-list"),D=document.querySelector('[data-action="open-modal"]'),A=document.querySelector('[data-action="close-modal"]');b();document.addEventListener("DOMContentLoaded",v);T.addEventListener("click",f);$();D.addEventListener("click",M);A.addEventListener("click",x);
//# sourceMappingURL=commonHelpers.js.map
