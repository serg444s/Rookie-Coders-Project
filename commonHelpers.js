import{o as L}from"./assets/dark-mode-a17f1fd0.js";import{i as v,a as c,b as w}from"./assets/vendor-352bdbf3.js";function l(){v.error({message:"Sorry, there are no books matching your search query. Please try again!",position:"topRight"})}async function $(o){return o.map(({author:t,book_image:e,title:s,description:a,_id:n})=>`<li class="books-item-about" data-id="${n}" >  
    <div class="book-wrap"> 
    <img class="book-img" src="${e}"  alt="${a}" /> 
    </div> 
    <div class="book-info">  
    <p class="info-title">${s}</p>  
    <p class="info-author">${t}</p>  
    </div>  
    </li>`).join("")}async function E(o){return(await Promise.all(o.map(async({list_name:e,books:s})=>`
    <div class="container-books">
    <h3 class="book-categoty-title">${e}</h3>
    <ul class='list-books'>${await $(s)}</ul>
    <button class="book-button" data-category="${e}">See more</button>
    </div>
    `))).join("")}document.addEventListener("click",async o=>{if(o.target.classList.contains("book-button")){const t=o.target.dataset.category;await d(t)}});async function S(){const o=document.querySelector(".top-categories-list");try{const t=await c.get("https://books-backend.p.goit.global/books/top-books");o.insertAdjacentHTML("afterbegin",'<h2 class="categories-title">Best Sellers<span> Books</span></h2>');const e=await E(t.data);return o.insertAdjacentHTML("beforeend",e),t.data}catch(t){console.log(t.message),l()}}async function d(o){const t=document.querySelector(".top-categories-list");console.log(t),t.innerHTML="";try{const e=await c.get(`https://books-backend.p.goit.global/books/category?category=${o}`);console.log(e);const s=e.data;t.insertAdjacentHTML("afterbegin",await q(o,s))}catch(e){console.log(e.message),l()}}async function q(o,t){return`
  <h3 class="book-categoty-title">${o}</h3>
  <ul class='list-books'>${await M(t)}</ul>`}async function M(o){return console.log(o),o.map(B).join("")}function B({author:o,book_image:t,title:e,description:s,_id:a}){return`<li class="category-item" id=${a}>
    <div class="book-wrap">
    <img class="book-img" src="${t}"  alt="${s}"/>
    </div >
    <div class="book-info">
    <p class="info-title">${e}</p>
    <p class="info-author">${o}</p>
    </div>
    </li>`}async function u(){const o="https://books-backend.p.goit.global/books/category-list";try{return(await c.get(o)).data}catch(t){console.error("Error fetching books:",t)}}async function _(){try{const o=await u(),t=document.querySelector(".categories-list_books");o.forEach(e=>{const s=document.createElement("li");s.classList.add("item-list_category"),s.dataset.category=e.list_name;const a=document.createElement("a");a.textContent=e.list_name,a.href=`#${e.list_name}`,a.classList.add("link_category-book"),s.appendChild(a),t.appendChild(s),s.addEventListener("click",async()=>{const n=s.dataset.category;await d(n)})})}catch(o){console.error("Error rendering categories:",o)}}document.addEventListener("DOMContentLoaded",_);const m=document.querySelector('[data-action="open-modal"]'),g=document.querySelector('[data-action="close-modal"]'),p=document.querySelector("body");function C(){document.body.classList.add("show-modal"),g.style.display="flex",m.style.display="none",p.style.overflow="hidden"}function T(){document.body.classList.remove("show-modal"),g.style.display="none",m.style.display="flex",p.style.overflow="auto"}async function x(){const e="https://books-backend.p.goit.global/books/top-books";return(await c.get(e)).data}const A=document.querySelector(".top-categories-list");document.querySelector(".modal-icon");document.querySelector(".backdrop");document.querySelector(".modal-btn");document.querySelector(".modal-congrat-text");A.addEventListener("click",b);let i;async function b(o){if(o.preventDefault(),o.target.nodeName!=="IMG")return;const t=await x(),s=o.target.closest("li").dataset._id,a=t.find(h=>h._id==s),{book_image:n,title:y,author:k,description:f}=a;i=w.create(`<div class="modal">
        <button type="button" class="modal-icon">
        <svg class="modal-icon-closed"><use href="../img/symbol-defs.svg#icon-closed"></use></svg>
        </button>
        <img class="modal-img" src="${n}" width="330" height="485"/>
        <h3 class="modal-title">${y}</h3>
        <p class="modal-author">${k}</p> 
        <p class="modal-text">${f}</p>
        <ul>
        <button class="modal-btn" type="button">ADD TO SHOPPING LIST</button>
        <p class="modal-congrat-text"></p>
    </div>`,{onShow:()=>{document.addEventListener("keydown",r)},onClose:()=>{document.removeEventListener("keydown",r)}}),i.show()}function r(o){o.preventDefault(),o.code==="Escape"&&i.close()}const D=document.querySelector(".top-categories-list"),O=document.querySelector('[data-action="open-modal"]'),I=document.querySelector('[data-action="close-modal"]');u();document.addEventListener("DOMContentLoaded",L);D.addEventListener("click",b);S();O.addEventListener("click",C);I.addEventListener("click",T);
//# sourceMappingURL=commonHelpers.js.map
