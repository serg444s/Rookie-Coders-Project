import{o as f}from"./assets/dark-mode-34cf531e.js";import{i as h,a as c,b as L}from"./assets/vendor-352bdbf3.js";function d(){h.error({message:"Sorry, there are no books matching your search query. Please try again!",position:"topRight"})}async function $(o){return o.map(({author:t,book_image:e,title:a,description:s,_id:n})=>`<li class="books-item-about" data-id="${n}" >  
    <div class="book-wrap"> 
    <img class="book-img" src="${e}"  alt="${s}" data-id="${n}" /> 
    </div> 
    <div class="book-info">  
    <p class="info-title">${a}</p>  
    <p class="info-author">${t}</p>  
    </div>  
    </li>`).join("")}async function v(o){return(await Promise.all(o.map(async({list_name:e,books:a})=>`
    <div class="container-books">
    <h3 class="book-categoty-title">${e}</h3>
    <ul class='list-books'>${await $(a)}</ul>
    <button class="book-button" data-category="${e}">See more</button>
    </div>
    `))).join("")}document.addEventListener("click",async o=>{if(o.target.classList.contains("book-button")){const t=o.target.dataset.category;await u(t)}});async function w(){const o=document.querySelector(".top-categories-list");try{const t=await c.get("https://books-backend.p.goit.global/books/top-books");o.insertAdjacentHTML("afterbegin",'<h2 class="categories-title">Best Sellers<span> Books</span></h2>');const e=await v(t.data);return o.insertAdjacentHTML("beforeend",e),t.data}catch(t){console.log(t.message),d()}}async function u(o){const t=document.querySelector(".top-categories-list");console.log(t),t.innerHTML="";try{const e=await c.get(`https://books-backend.p.goit.global/books/category?category=${o}`);console.log(e);const a=e.data;t.insertAdjacentHTML("afterbegin",await S(o,a))}catch(e){console.log(e.message),d()}}async function S(o,t){return`
  <h3 class="book-categoty-title">${o}</h3>
  <ul class='list-books'>${await E(t)}</ul>`}async function E(o){return console.log(o),o.map(q).join("")}function q({author:o,book_image:t,title:e,description:a,_id:s}){return`<li class="category-item" id=${s}>
    <div class="book-wrap">
    <img class="book-img" src="${t}"  alt="${a}" data-id="${s}"/>
    </div >
    <div class="book-info">
    <p class="info-title">${e}</p>
    <p class="info-author">${o}</p>
    </div>
    </li>`}async function m(){const o="https://books-backend.p.goit.global/books/category-list";try{return(await c.get(o)).data}catch(t){console.error("Error fetching books:",t)}}async function M(){try{const o=await m(),t=document.querySelector(".categories-list_books");o.forEach(e=>{const a=document.createElement("li");a.classList.add("item-list_category"),a.dataset.category=e.list_name;const s=document.createElement("a");s.textContent=e.list_name,s.href=`#${e.list_name}`,s.classList.add("link_category-book"),a.appendChild(s),t.appendChild(a),a.addEventListener("click",async()=>{const n=a.dataset.category;await u(n)})})}catch(o){console.error("Error rendering categories:",o)}}document.addEventListener("DOMContentLoaded",M);const g=document.querySelector('[data-action="open-modal"]'),p=document.querySelector('[data-action="close-modal"]'),b=document.querySelector("body");function B(){document.body.classList.add("show-modal"),p.style.display="flex",g.style.display="none",b.style.overflow="hidden"}function C(){document.body.classList.remove("show-modal"),p.style.display="none",g.style.display="flex",b.style.overflow="auto"}async function D(o){const t=`https://books-backend.p.goit.global/books/${o}`;return(await c.get(t)).data}const x=document.querySelector(".top-categories-list");document.querySelector(".modal-icon");document.querySelector(".backdrop");document.querySelector(".modal-btn");document.querySelector(".modal-congrat-text");x.addEventListener("click",y);let r;async function y(o){if(o.preventDefault(),o.target.nodeName!=="IMG")return;const t=o.target.dataset.id,e=await D(t),{book_image:a,title:s,author:n,description:k,buy_links:i}=e;r=L.create(`<div class="modal">
        <button type="button" class="modal-icon">
        <svg class="modal-icon-closed"><use href="../img/symbol-defs.svg#icon-closed"></use></svg>
        </button>
        <img class="modal-img" src="${a}" width="330" height="485"/>
        <h3 class="modal-title">${s}</h3>
        <p class="modal-author">${n}</p> 
        <p class="modal-text">${k}</p>
        <ul>
        <li><a href="${i.url}"></a>${i.name}</li> 
        <button class="modal-btn" type="button">ADD TO SHOPPING LIST</button>
        <p class="modal-congrat-text"></p>
    </div>`,{onShow:()=>{document.addEventListener("keydown",l)},onClose:()=>{document.removeEventListener("keydown",l)}}),r.show()}function l(o){o.preventDefault(),o.code==="Escape"&&r.close()}const I=document.querySelector(".top-categories-list"),A=document.querySelector('[data-action="open-modal"]'),O=document.querySelector('[data-action="close-modal"]');m();document.addEventListener("DOMContentLoaded",f);I.addEventListener("click",y);w();A.addEventListener("click",B);O.addEventListener("click",C);
//# sourceMappingURL=commonHelpers.js.map
