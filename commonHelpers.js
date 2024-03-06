import{l as k,a as b,o as y,b as u,c as $,d as I,e as O,f as q,g as x}from"./assets/openbook-18c6f802.js";import{a as m,b as M}from"./assets/vendor-9b4a9007.js";async function T(t){return t.map(({author:o,book_image:e,title:a,description:n,_id:l})=>`<li class="books-item-about display-book" >
    <div class="book-wrap">
    <img class="book-img" src="${e}" data-id="${l}"  alt="${n}" />
    <p class="book_cover">QUICK VIEW</p>
    </div>
    <div class="book-info">
    <p class="info-title">${a}</p>
    <p class="info-author">${o}</p>
    </div>
    </li>`).join("")}async function C(t){return(await Promise.all(t.map(async({list_name:e,books:a})=>`
    <div class="container-books">
    <h3 class="book-categoty-title">${e}</h3>
    <ul class='list-books'>${await T(a)}</ul>
    <button class="book-button" data-category="${e}">See more</button>
    </div>
    `))).join("")}document.addEventListener("click",async t=>{if(t.target.classList.contains("book-button")){const o=t.target.dataset.category;await h(o)}});window.addEventListener("scroll",function(){const t=document.querySelector(".scroll-up-js");window.scrollY>2e3?t.classList.remove("js-scroll-up-hidden"):t.classList.add("js-scroll-up-hidden")});document.querySelector(".scroll-up-js").addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});const d=document.querySelector("#modal-main");async function B(){k(d);const t=document.querySelector(".top-categories-list");try{const o=await m.get("https://books-backend.p.goit.global/books/top-books");t.insertAdjacentHTML("afterbegin",'<h2 class="categories-title">Best Sellers<span> Books</span></h2>');const e=await C(o.data);return t.insertAdjacentHTML("beforeend",e),b(d),o.data}catch(o){console.log(o.message),y()}}async function h(t){k(d);const o=document.querySelector(".top-categories-list");o.innerHTML="";try{const a=(await m.get(`https://books-backend.p.goit.global/books/category?category=${t}`)).data;o.insertAdjacentHTML("afterbegin",await P(t,a)),b(d)}catch(e){console.log(e.message),y()}}async function P(t,o){const e=t.split(" "),n="<span>"+e[e.length-1]+"</span>";return e[e.length-1]=n,`
  <h3 class="categories-title">${e.join(" ")}</h3>
  <ul class='list-books'>${await _(o)}</ul>`}async function _(t){return t.map(D).join("")}function D({author:t,book_image:o,title:e,description:a,_id:n}){return`<li class="category-item" id=${n}>
    <div class="book-wrap">
    <img class="book-img" src="${o}"  alt="${a}" data-id="${n}"/>
    </div >
    <div class="book-info">
    <p class="info-title">${e}</p>
    <p class="info-author">${t}</p>
    </div>
    </li>`}async function f(){const t="https://books-backend.p.goit.global/books/category-list";try{return(await m.get(t)).data}catch(o){console.error("Error fetching books:",o)}}async function A(){try{const t=await f(),o=document.querySelector(".categories-list_books");t.forEach(e=>{const a=document.createElement("li");a.classList.add("item-list_category"),a.dataset.category=e.list_name;const n=document.createElement("a");n.textContent=e.list_name,n.href=`#${e.list_name}`,n.classList.add("link_category-book"),a.appendChild(n),o.appendChild(a),a.addEventListener("click",async()=>{const l=a.dataset.category;await h(l)})})}catch(t){console.error("Error rendering categories:",t)}}document.addEventListener("DOMContentLoaded",A);let r=JSON.parse(localStorage.getItem("books"))||[];function H(t){r=JSON.parse(localStorage.getItem("books"))||[],r.includes(t)||(r.push(t),localStorage.setItem("books",JSON.stringify(r)))}function S(t){const o=JSON.parse(localStorage.getItem("books")),e=o.findIndex(a=>a===t);e!==-1&&o.splice(e,1),localStorage.setItem("books",JSON.stringify(o))}async function N(t){const o=`https://books-backend.p.goit.global/books/${t}`;return(await m.get(o)).data}const j=document.querySelector(".top-categories-list");j.addEventListener("click",v);let i,s;async function v(t){if(t.preventDefault(),t.target.nodeName!=="IMG")return;i=t.target.dataset.id;const o=await N(i);let e;r.includes(i)||(e="ADD TO SHOPPING LIST"),r.includes(i)&&(e="REMOVE FROM THE SHOPPING LIST");const{book_image:a,title:n,author:l,description:L,amazon_product_url:w,buy_links:E}=o;s=M.create(`<div class="modal">
        <button type="button" class="modal-icon">
        <svg class="modal-icon-closed" width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
  <path d="M21 7L7 21M7 7L21 21" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
</svg>
        </button>
        <div class="modal-content">
        <img class="modal-img" src="${a}" width="330" height="485"/>
        <div class="modal-content-text">
        <h3 class="modal-title">${n}</h3>
        <p class="modal-author">${l}</p> 
        <p class="modal-text">${L}</p>
        <div class="modal-link-icons">
            <a target="_blank" href="${w}">
            <img class="modal-link-amazon" srcset="${u} 1x,${$} 2x" src="${u}" alt="Amazon Shop" />
            </a>
            <a target="_blank" href="${E.find(c=>c.name==="Apple Books").url}">
            <img class="modal-link-applebook" src="${I}" alt="Open book" />
            </a>
        </div>
        </div>
        </div>
        <button class="modal-btn" type="button" data-action="add">${e}</button>
        <p class="modal-congrat-text"></p>
    </div>`,{onShow:c=>{document.addEventListener("keydown",p),c.element().querySelector(".modal-icon").onclick=c.close,document.querySelector("body").style.overflow="hidden",c.element().querySelector(".modal-btn").addEventListener("click",g),c.element().querySelector(".modal-btn").textContent==="REMOVE FROM THE SHOPPING LIST"&&(c.element().querySelector(".modal-btn").onclick=S)},onClose:()=>{document.removeEventListener("keydown",p),document.querySelector("body").style.overflow="auto",s.element().querySelector(".modal-btn").removeEventListener("click",g)}}),s.show()}function p(t){t.preventDefault(),t.code==="Escape"&&s.close()}function g(){s.element().querySelector(".modal-btn").textContent==="ADD TO SHOPPING LIST"?(s.element().querySelector(".modal-btn").onclick=s.element().querySelector(".modal-btn").textContent="REMOVE FROM THE SHOPPING LIST",s.element().querySelector(".modal-congrat-text").textContent='Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".',H(i)):(s.element().querySelector(".modal-btn").onclick=s.element().querySelector(".modal-btn").textContent="ADD TO SHOPPING LIST",s.element().querySelector(".modal-congrat-text").textContent="",S(i))}const R=document.querySelector(".top-categories-list"),G=document.querySelector('[data-action="open-modal"]'),z=document.querySelector('[data-action="close-modal"]');f();document.addEventListener("DOMContentLoaded",O);R.addEventListener("click",v);B();G.addEventListener("click",q);z.addEventListener("click",x);function J(){document.querySelector(".navigation_link_home").classList.add("active")}J();
//# sourceMappingURL=commonHelpers.js.map
