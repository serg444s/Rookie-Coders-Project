import{o as p,a as O}from"./assets/dark-mode-c1c40af2.js";import{a as m,b as q}from"./assets/vendor-9b4a9007.js";async function u(t){return t.map(({author:o,book_image:e,title:a,description:n,_id:c})=>`<li class="books-item-about" >  
    <div class="book-wrap"> 
    <img class="book-img" src="${e}" data-id="${c}"  alt="${n}" /> 
    </div> 
    <div class="book-info">  
    <p class="info-title">${a}</p>  
    <p class="info-author">${o}</p>  
    </div>  
    </li>`).join("")}async function b(t){return d()<768>d()?u(t.slice(0,1)):d()<1439>d()?u(await t.slice(0,3)):u(t)}function d(){return window.innerWidth}async function x(t){return(await Promise.all(t.map(async({list_name:e,books:a})=>`
    <div class="container-books">
    <h3 class="book-categoty-title">${e}</h3>
    <ul class='list-books'>${await b(a)}</ul>
    <button class="book-button" data-category="${e}">See more</button>
    </div>
    `))).join("")}document.addEventListener("click",async t=>{if(t.target.classList.contains("book-button")){const o=t.target.dataset.category;await k(o)}});async function $(){const t=document.querySelector(".top-categories-list");try{const o=await m.get("https://books-backend.p.goit.global/books/top-books");t.insertAdjacentHTML("afterbegin",'<h2 class="categories-title">Best Sellers<span> Books</span></h2>');const e=await x(o.data);return t.insertAdjacentHTML("beforeend",e),o.data}catch(o){console.log(o.message),p()}}async function k(t){const o=document.querySelector(".top-categories-list");console.log(o),o.innerHTML="";try{const e=await m.get(`https://books-backend.p.goit.global/books/category?category=${t}`);console.log(e);const a=e.data;o.insertAdjacentHTML("afterbegin",await T(t,a))}catch(e){console.log(e.message),p()}}async function T(t,o){const e=t.split(" "),n="<span>"+e[e.length-1]+"</span>";return e[e.length-1]=n,`
  <h3 class="categories-title">${e.join(" ")}</h3>
  <ul class='list-books'>${await b(o)}</ul>`}async function y(){const t="https://books-backend.p.goit.global/books/category-list";try{return(await m.get(t)).data}catch(o){console.error("Error fetching books:",o)}}async function M(){try{const t=await y(),o=document.querySelector(".categories-list_books");t.forEach(e=>{const a=document.createElement("li");a.classList.add("item-list_category"),a.dataset.category=e.list_name;const n=document.createElement("a");n.textContent=e.list_name,n.href=`#${e.list_name}`,n.classList.add("link_category-book"),a.appendChild(n),o.appendChild(a),a.addEventListener("click",async()=>{const c=a.dataset.category;await k(c)})})}catch(t){console.error("Error rendering categories:",t)}}document.addEventListener("DOMContentLoaded",M);const h=document.querySelector('[data-action="open-modal"]'),S=document.querySelector('[data-action="close-modal"]'),f=document.querySelector("body");function C(){document.body.classList.add("show-modal"),S.style.display="flex",h.style.display="none",f.style.overflow="hidden"}function B(){document.body.classList.remove("show-modal"),S.style.display="none",h.style.display="flex",f.style.overflow="auto"}let i=JSON.parse(localStorage.getItem("books"))||[];function L(t){i=JSON.parse(localStorage.getItem("books"))||[],i.includes(t)||(i.push(t),localStorage.setItem("books",JSON.stringify(i)))}function v(t){const o=JSON.parse(localStorage.getItem("books")),e=o.findIndex(a=>a===t);e!==-1&&o.splice(e,1),localStorage.setItem("books",JSON.stringify(o))}async function P(t){const o=`https://books-backend.p.goit.global/books/${t}`;return(await m.get(o)).data}const D=document.querySelector(".top-categories-list");document.querySelector(".modal-btn");document.querySelector(".modal-congrat-text");let r;D.addEventListener("click",w);let s;async function w(t){if(t.preventDefault(),t.target.nodeName!=="IMG")return;r=t.target.dataset.id;const o=await P(r);let e;i.includes(r)?e="REMOVE FROM THE SHOPPING LIST":e="ADD TO SHOPPING LIST";const{book_image:a,title:n,author:c,description:E,amazon_product_url:I}=o;s=q.create(`<div class="modal">
        <button type="button" class="modal-icon">
        <svg class="modal-icon-closed" width="18" height="18"><use href="../img/symbol-defs.svg#icon-closed"></use></svg>
        </button>
        <div class="modal-content">
        <img class="modal-img" src="${a}" width="330" height="485"/>
        <div class="modal-content-text">
        <h3 class="modal-title">${n}</h3>
        <p class="modal-author">${c}</p> 
        <p class="modal-text">${E}</p>
        <ul><li class="modal-link-icons"><a class="modal-link" href="${I}" target="_blank"><img src="../img/shopping_list/amazon1x.png" alt="applebook" target="_blank" /></a>
        <img class="modal-link-img" src="../img/shopping_list/openbook.png" />
        </li></ul>
        </div>
        </div>
        <button class="modal-btn" type="button" data-action="add">${e}</button>
        <p class="modal-congrat-text"></p>
    </div>`,{onShow:l=>{document.addEventListener("keydown",g),l.element().querySelector(".modal-icon").onclick=l.close,l.element().querySelector(".modal-btn").onclick=L(r),l.element().querySelector(".modal-btn").addEventListener("click",_),l.element().querySelector(".modal-btn").textContent==="REMOVE FROM THE SHOPPING LIST"&&(l.element().querySelector(".modal-btn").onclick=v)},onClose:()=>{document.removeEventListener("keydown",g)}}),s.show()}function g(t){t.preventDefault(),t.code==="Escape"&&s.close()}function _(){s.element().querySelector(".modal-btn").textContent==="ADD TO SHOPPING LIST"?(s.element().querySelector(".modal-btn").onclick=s.element().querySelector(".modal-btn").textContent="REMOVE FROM THE SHOPPING LIST",s.element().querySelector(".modal-congrat-text").textContent='Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".',L(r)):(s.element().querySelector(".modal-btn").onclick=s.element().querySelector(".modal-btn").textContent="ADD TO SHOPPING LIST",s.element().querySelector(".modal-congrat-text").textContent="",v(r))}const H=document.querySelector(".top-categories-list"),N=document.querySelector('[data-action="open-modal"]'),A=document.querySelector('[data-action="close-modal"]');y();document.addEventListener("DOMContentLoaded",O);H.addEventListener("click",w);$();N.addEventListener("click",C);A.addEventListener("click",B);
//# sourceMappingURL=commonHelpers.js.map
