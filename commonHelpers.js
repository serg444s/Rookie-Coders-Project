import{l as p,a as k,o as y,b as $,c as x,d as M}from"./assets/openbook-5f5da516.js";import{a as u,b as T}from"./assets/vendor-9b4a9007.js";async function g(t){return t.map(({author:o,book_image:e,title:a,description:n,_id:c})=>`<li class="books-item-about" >
    <div class="book-wrap">
    <img class="book-img" src="${e}" data-id="${c}"  alt="${n}" />
    <p class="book_cover">QUICK VIEW</p>
    </div>
    <div class="book-info">
    <p class="info-title">${a}</p>
    <p class="info-author">${o}</p>
    </div>
    </li>`).join("")}async function f(t){return d()<768>d()?g(t.slice(0,1)):d()<1439>d()?g(await t.slice(0,3)):g(t)}function d(){return window.innerWidth}async function C(t){return(await Promise.all(t.map(async({list_name:e,books:a})=>`
    <div class="container-books">
    <h3 class="book-categoty-title">${e}</h3>
    <ul class='list-books'>${await f(a)}</ul>
    <button class="book-button" data-category="${e}">See more</button>
    </div>
    `))).join("")}document.addEventListener("click",async t=>{if(t.target.classList.contains("book-button")){const o=t.target.dataset.category;await S(o)}});const m=document.querySelector("#modal-main");async function B(){p(m);const t=document.querySelector(".top-categories-list");try{const o=await u.get("https://books-backend.p.goit.global/books/top-books");t.insertAdjacentHTML("afterbegin",'<h2 class="categories-title">Best Sellers<span> Books</span></h2>');const e=await C(o.data);return t.insertAdjacentHTML("beforeend",e),k(m),o.data}catch(o){console.log(o.message),y()}}async function S(t){p(m);const o=document.querySelector(".top-categories-list");console.log(o),o.innerHTML="";try{const e=await u.get(`https://books-backend.p.goit.global/books/category?category=${t}`);console.log(e);const a=e.data;o.insertAdjacentHTML("afterbegin",await P(t,a)),k(m)}catch(e){console.log(e.message),y()}}async function P(t,o){const e=t.split(" "),n="<span>"+e[e.length-1]+"</span>";return e[e.length-1]=n,`
  <h3 class="categories-title">${e.join(" ")}</h3>
  <ul class='list-books'>${await f(o)}</ul>`}async function h(){const t="https://books-backend.p.goit.global/books/category-list";try{return(await u.get(t)).data}catch(o){console.error("Error fetching books:",o)}}async function D(){try{const t=await h(),o=document.querySelector(".categories-list_books");t.forEach(e=>{const a=document.createElement("li");a.classList.add("item-list_category"),a.dataset.category=e.list_name;const n=document.createElement("a");n.textContent=e.list_name,n.href=`#${e.list_name}`,n.classList.add("link_category-book"),a.appendChild(n),o.appendChild(a),a.addEventListener("click",async()=>{const c=a.dataset.category;await S(c)})})}catch(t){console.error("Error rendering categories:",t)}}document.addEventListener("DOMContentLoaded",D);const L=document.querySelector('[data-action="open-modal"]'),v=document.querySelector('[data-action="close-modal"]'),w=document.querySelector("body");function H(){document.body.classList.add("show-modal"),v.style.display="flex",L.style.display="none",w.style.overflow="hidden"}function N(){document.body.classList.remove("show-modal"),v.style.display="none",L.style.display="flex",w.style.overflow="auto"}let l=JSON.parse(localStorage.getItem("books"))||[];function _(t){l=JSON.parse(localStorage.getItem("books"))||[],l.includes(t)||(l.push(t),localStorage.setItem("books",JSON.stringify(l)))}function I(t){const o=JSON.parse(localStorage.getItem("books")),e=o.findIndex(a=>a===t);e!==-1&&o.splice(e,1),localStorage.setItem("books",JSON.stringify(o))}async function A(t){const o=`https://books-backend.p.goit.global/books/${t}`;return(await u.get(o)).data}const R=document.querySelector(".top-categories-list");document.querySelector(".modal-btn");document.querySelector(".modal-congrat-text");let r;R.addEventListener("click",E);let s;async function E(t){if(t.preventDefault(),t.target.nodeName!=="IMG")return;r=t.target.dataset.id;const o=await A(r);let e;l.includes(r)||(e="ADD TO SHOPPING LIST"),l.includes(r)&&(e="REMOVE FROM THE SHOPPING LIST");const{book_image:a,title:n,author:c,description:O,amazon_product_url:q}=o;s=T.create(`<div class="modal">
        <button type="button" class="modal-icon modal-icon-closed">X</button>
        <div class="modal-content">
        <img class="modal-img" src="${a}" width="330" height="485"/>
        <div class="modal-content-text">
        <h3 class="modal-title">${n}</h3>
        <p class="modal-author">${c}</p> 
        <p class="modal-text">${O}</p>
        <ul><li class="modal-link-icons"><a class="modal-link" href="${q}" target="_blank"><img src="${$}" alt="applebook" target="_blank" /></a>
        <img class="modal-link-img" src="${x}" />
        </li></ul>
        </div>
        </div>
        <button class="modal-btn" type="button" data-action="add">${e}</button>
        <p class="modal-congrat-text"></p>
    </div>`,{onShow:i=>{document.addEventListener("keydown",b),i.element().querySelector(".modal-icon").onclick=i.close,i.element().querySelector(".modal-btn").addEventListener("click",G),i.element().querySelector(".modal-btn").textContent==="REMOVE FROM THE SHOPPING LIST"&&(i.element().querySelector(".modal-btn").onclick=I)},onClose:()=>{document.removeEventListener("keydown",b)}}),s.show()}function b(t){t.preventDefault(),t.code==="Escape"&&s.close()}function G(){s.element().querySelector(".modal-btn").textContent==="ADD TO SHOPPING LIST"?(s.element().querySelector(".modal-btn").onclick=s.element().querySelector(".modal-btn").textContent="REMOVE FROM THE SHOPPING LIST",s.element().querySelector(".modal-congrat-text").textContent='Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".',_(r)):(s.element().querySelector(".modal-btn").onclick=s.element().querySelector(".modal-btn").textContent="ADD TO SHOPPING LIST",s.element().querySelector(".modal-congrat-text").textContent="",I(r))}const j=document.querySelector(".top-categories-list"),J=document.querySelector('[data-action="open-modal"]'),W=document.querySelector('[data-action="close-modal"]');h();document.addEventListener("DOMContentLoaded",M);j.addEventListener("click",E);B();J.addEventListener("click",H);W.addEventListener("click",N);
//# sourceMappingURL=commonHelpers.js.map
