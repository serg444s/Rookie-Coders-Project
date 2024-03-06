import{l as g,a as p,o as b,b as v,c as E,d as w,e as I,f as $}from"./assets/openbook-122e9fe2.js";import{a as m,b as O}from"./assets/vendor-9b4a9007.js";async function q(t){return t.map(({author:o,book_image:e,title:a,description:n,_id:c})=>`<li class="books-item-about display-book" >
    <div class="book-wrap">
    <img class="book-img" src="${e}" data-id="${c}"  alt="${n}" />
    <p class="book_cover">QUICK VIEW</p>
    </div>
    <div class="book-info">
    <p class="info-title">${a}</p>
    <p class="info-author">${o}</p>
    </div>
    </li>`).join("")}async function T(t){return(await Promise.all(t.map(async({list_name:e,books:a})=>`
    <div class="container-books">
    <h3 class="book-categoty-title">${e}</h3>
    <ul class='list-books'>${await q(a)}</ul>
    <button class="book-button" data-category="${e}">See more</button>
    </div>
    `))).join("")}document.addEventListener("click",async t=>{if(t.target.classList.contains("book-button")){const o=t.target.dataset.category;await k(o)}});window.addEventListener("scroll",function(){const t=document.querySelector(".scroll-up-js");window.scrollY>2e3?t.classList.remove("js-scroll-up-hidden"):t.classList.add("js-scroll-up-hidden")});document.querySelector(".scroll-up-js").addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});const d=document.querySelector("#modal-main");async function x(){g(d);const t=document.querySelector(".top-categories-list");try{const o=await m.get("https://books-backend.p.goit.global/books/top-books");t.insertAdjacentHTML("afterbegin",'<h2 class="categories-title">Best Sellers<span> Books</span></h2>');const e=await T(o.data);return t.insertAdjacentHTML("beforeend",e),p(d),o.data}catch(o){console.log(o.message),b()}}async function k(t){g(d);const o=document.querySelector(".top-categories-list");o.innerHTML="";try{const a=(await m.get(`https://books-backend.p.goit.global/books/category?category=${t}`)).data;o.insertAdjacentHTML("afterbegin",await M(t,a)),p(d)}catch(e){console.log(e.message),b()}}async function M(t,o){const e=t.split(" "),n="<span>"+e[e.length-1]+"</span>";return e[e.length-1]=n,`
  <h3 class="categories-title">${e.join(" ")}</h3>
  <ul class='list-books'>${await C(o)}</ul>`}async function C(t){return t.map(P).join("")}function P({author:t,book_image:o,title:e,description:a,_id:n}){return`<li class="category-item" id=${n}>
    <div class="book-wrap">
    <img class="book-img" src="${o}"  alt="${a}" data-id="${n}"/>
    </div >
    <div class="book-info">
    <p class="info-title">${e}</p>
    <p class="info-author">${t}</p>
    </div>
    </li>`}async function y(){const t="https://books-backend.p.goit.global/books/category-list";try{return(await m.get(t)).data}catch(o){console.error("Error fetching books:",o)}}async function B(){try{const t=await y(),o=document.querySelector(".categories-list_books");t.forEach(e=>{const a=document.createElement("li");a.classList.add("item-list_category"),a.dataset.category=e.list_name;const n=document.createElement("a");n.textContent=e.list_name,n.href=`#${e.list_name}`,n.classList.add("link_category-book"),a.appendChild(n),o.appendChild(a),a.addEventListener("click",async()=>{const c=a.dataset.category;await k(c)})})}catch(t){console.error("Error rendering categories:",t)}}document.addEventListener("DOMContentLoaded",B);let l=JSON.parse(localStorage.getItem("books"))||[];function D(t){l=JSON.parse(localStorage.getItem("books"))||[],l.includes(t)||(l.push(t),localStorage.setItem("books",JSON.stringify(l)))}function f(t){const o=JSON.parse(localStorage.getItem("books")),e=o.findIndex(a=>a===t);e!==-1&&o.splice(e,1),localStorage.setItem("books",JSON.stringify(o))}async function _(t){const o=`https://books-backend.p.goit.global/books/${t}`;return(await m.get(o)).data}const H=document.querySelector(".top-categories-list");document.querySelector(".modal-btn");document.querySelector(".modal-congrat-text");let r;H.addEventListener("click",S);let s;async function S(t){if(t.preventDefault(),t.target.nodeName!=="IMG")return;r=t.target.dataset.id;const o=await _(r);let e;l.includes(r)||(e="ADD TO SHOPPING LIST"),l.includes(r)&&(e="REMOVE FROM THE SHOPPING LIST");const{book_image:a,title:n,author:c,description:h,amazon_product_url:L}=o;s=O.create(`<div class="modal">
        <button type="button" class="modal-icon modal-icon-closed">X</button>
        <div class="modal-content">
        <img class="modal-img" src="${a}" width="330" height="485"/>
        <div class="modal-content-text">
        <h3 class="modal-title">${n}</h3>
        <p class="modal-author">${c}</p> 
        <p class="modal-text">${h}</p>
        <ul><li class="modal-link-icons"><a class="modal-link" href="${L}" target="_blank"><img src="${v}" alt="applebook" target="_blank" /></a>
        <img class="modal-link-img" src="${E}" />
        </li></ul>
        </div>
        </div>
        <button class="modal-btn" type="button" data-action="add">${e}</button>
        <p class="modal-congrat-text"></p>
    </div>`,{onShow:i=>{document.addEventListener("keydown",u),i.element().querySelector(".modal-icon").onclick=i.close,i.element().querySelector(".modal-btn").addEventListener("click",N),i.element().querySelector(".modal-btn").textContent==="REMOVE FROM THE SHOPPING LIST"&&(i.element().querySelector(".modal-btn").onclick=f)},onClose:()=>{document.removeEventListener("keydown",u)}}),s.show()}function u(t){t.preventDefault(),t.code==="Escape"&&s.close()}function N(){s.element().querySelector(".modal-btn").textContent==="ADD TO SHOPPING LIST"?(s.element().querySelector(".modal-btn").onclick=s.element().querySelector(".modal-btn").textContent="REMOVE FROM THE SHOPPING LIST",s.element().querySelector(".modal-congrat-text").textContent='Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".',D(r)):(s.element().querySelector(".modal-btn").onclick=s.element().querySelector(".modal-btn").textContent="ADD TO SHOPPING LIST",s.element().querySelector(".modal-congrat-text").textContent="",f(r))}const j=document.querySelector(".top-categories-list"),A=document.querySelector('[data-action="open-modal"]'),R=document.querySelector('[data-action="close-modal"]');y();document.addEventListener("DOMContentLoaded",w);j.addEventListener("click",S);x();A.addEventListener("click",I);R.addEventListener("click",$);function G(){document.querySelector(".navigation_link_home").classList.add("active")}G();
//# sourceMappingURL=commonHelpers.js.map
