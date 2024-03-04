import{o as b,a as I,b as O,c as $}from"./assets/openbook-036a8c1e.js";import{a as m,b as q}from"./assets/vendor-9b4a9007.js";async function u(t){return t.map(({author:o,book_image:e,title:a,description:n,_id:c})=>`<li class="books-item-about" >  
    <div class="book-wrap"> 
    <img class="book-img" src="${e}" data-id="${c}"  alt="${n}" /> 
    </div> 
    <div class="book-info">  
    <p class="info-title">${a}</p>  
    <p class="info-author">${o}</p>  
    </div>  
    </li>`).join("")}async function p(t){return d()<768>d()?u(t.slice(0,1)):d()<1439>d()?u(await t.slice(0,3)):u(t)}function d(){return window.innerWidth}async function x(t){return(await Promise.all(t.map(async({list_name:e,books:a})=>`
    <div class="container-books">
    <h3 class="book-categoty-title">${e}</h3>
    <ul class='list-books'>${await p(a)}</ul>
    <button class="book-button" data-category="${e}">See more</button>
    </div>
    `))).join("")}document.addEventListener("click",async t=>{if(t.target.classList.contains("book-button")){const o=t.target.dataset.category;await k(o)}});async function T(){const t=document.querySelector(".top-categories-list");try{const o=await m.get("https://books-backend.p.goit.global/books/top-books");t.insertAdjacentHTML("afterbegin",'<h2 class="categories-title">Best Sellers<span> Books</span></h2>');const e=await x(o.data);return t.insertAdjacentHTML("beforeend",e),o.data}catch(o){console.log(o.message),b()}}async function k(t){const o=document.querySelector(".top-categories-list");console.log(o),o.innerHTML="";try{const e=await m.get(`https://books-backend.p.goit.global/books/category?category=${t}`);console.log(e);const a=e.data;o.insertAdjacentHTML("afterbegin",await M(t,a))}catch(e){console.log(e.message),b()}}async function M(t,o){const e=t.split(" "),n="<span>"+e[e.length-1]+"</span>";return e[e.length-1]=n,`
  <h3 class="categories-title">${e.join(" ")}</h3>
  <ul class='list-books'>${await p(o)}</ul>`}async function y(){const t="https://books-backend.p.goit.global/books/category-list";try{return(await m.get(t)).data}catch(o){console.error("Error fetching books:",o)}}async function C(){try{const t=await y(),o=document.querySelector(".categories-list_books");t.forEach(e=>{const a=document.createElement("li");a.classList.add("item-list_category"),a.dataset.category=e.list_name;const n=document.createElement("a");n.textContent=e.list_name,n.href=`#${e.list_name}`,n.classList.add("link_category-book"),a.appendChild(n),o.appendChild(a),a.addEventListener("click",async()=>{const c=a.dataset.category;await k(c)})})}catch(t){console.error("Error rendering categories:",t)}}document.addEventListener("DOMContentLoaded",C);const f=document.querySelector('[data-action="open-modal"]'),h=document.querySelector('[data-action="close-modal"]'),S=document.querySelector("body");function B(){document.body.classList.add("show-modal"),h.style.display="flex",f.style.display="none",S.style.overflow="hidden"}function P(){document.body.classList.remove("show-modal"),h.style.display="none",f.style.display="flex",S.style.overflow="auto"}let l=JSON.parse(localStorage.getItem("books"))||[];function D(t){l=JSON.parse(localStorage.getItem("books"))||[],l.includes(t)||(l.push(t),localStorage.setItem("books",JSON.stringify(l)))}function L(t){const o=JSON.parse(localStorage.getItem("books")),e=o.findIndex(a=>a===t);e!==-1&&o.splice(e,1),localStorage.setItem("books",JSON.stringify(o))}async function H(t){const o=`https://books-backend.p.goit.global/books/${t}`;return(await m.get(o)).data}const N=document.querySelector(".top-categories-list");document.querySelector(".modal-btn");document.querySelector(".modal-congrat-text");let r;N.addEventListener("click",v);let s;async function v(t){if(t.preventDefault(),t.target.nodeName!=="IMG")return;r=t.target.dataset.id;const o=await H(r);let e;l.includes(r)||(e="ADD TO SHOPPING LIST"),l.includes(r)&&(e="REMOVE FROM THE SHOPPING LIST");const{book_image:a,title:n,author:c,description:w,amazon_product_url:E}=o;s=q.create(`<div class="modal">
        <button type="button" class="modal-icon">
        <svg class="modal-icon-closed" width="18" height="18"><use href="../img/symbol-defs.svg#icon-closed"></use></svg>
        </button>
        <div class="modal-content">
        <img class="modal-img" src="${a}" width="330" height="485"/>
        <div class="modal-content-text">
        <h3 class="modal-title">${n}</h3>
        <p class="modal-author">${c}</p> 
        <p class="modal-text">${w}</p>
        <ul><li class="modal-link-icons"><a class="modal-link" href="${E}" target="_blank"><img src="${I}" alt="applebook" target="_blank" /></a>
        <img class="modal-link-img" src="${O}" />
        </li></ul>
        </div>
        </div>
        <button class="modal-btn" type="button" data-action="add">${e}</button>
        <p class="modal-congrat-text"></p>
    </div>`,{onShow:i=>{document.addEventListener("keydown",g),i.element().querySelector(".modal-icon").onclick=i.close,i.element().querySelector(".modal-btn").addEventListener("click",_),i.element().querySelector(".modal-btn").textContent==="REMOVE FROM THE SHOPPING LIST"&&(i.element().querySelector(".modal-btn").onclick=L)},onClose:()=>{document.removeEventListener("keydown",g)}}),s.show()}function g(t){t.preventDefault(),t.code==="Escape"&&s.close()}function _(){s.element().querySelector(".modal-btn").textContent==="ADD TO SHOPPING LIST"?(s.element().querySelector(".modal-btn").onclick=s.element().querySelector(".modal-btn").textContent="REMOVE FROM THE SHOPPING LIST",s.element().querySelector(".modal-congrat-text").textContent='Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".',D(r)):(s.element().querySelector(".modal-btn").onclick=s.element().querySelector(".modal-btn").textContent="ADD TO SHOPPING LIST",s.element().querySelector(".modal-congrat-text").textContent="",L(r))}const A=document.querySelector(".top-categories-list"),R=document.querySelector('[data-action="open-modal"]'),G=document.querySelector('[data-action="close-modal"]');y();document.addEventListener("DOMContentLoaded",$);A.addEventListener("click",v);T();R.addEventListener("click",B);G.addEventListener("click",P);
//# sourceMappingURL=commonHelpers.js.map
