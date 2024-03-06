import{l as b,a as k,o as y,b as u,c as $,d as I,e as O,f as q,g as x}from"./assets/openbook-1360c084.js";import{a as m,b as T}from"./assets/vendor-9b4a9007.js";async function C(o){return o.map(({author:t,book_image:e,title:a,description:s,_id:l})=>`<li class="books-item-about display-book" >
    <div class="book-wrap">
    <img class="book-img" src="${e}" data-id="${l}"  alt="${s}" />
    <p class="book_cover">QUICK VIEW</p>
    </div>
    <div class="book-info">
    <p class="info-title">${a}</p>
    <p class="info-author">${t}</p>
    </div>
    </li>`).join("")}async function M(o){return(await Promise.all(o.map(async({list_name:e,books:a})=>`
    <div class="container-books">
    <h3 class="book-categoty-title">${e}</h3>
    <ul class='list-books'>${await C(a)}</ul>
    <button class="book-button" data-category="${e}">See more</button>
    </div>
    `))).join("")}document.addEventListener("click",async o=>{if(o.target.classList.contains("book-button")){const t=o.target.dataset.category;await f(t)}});window.addEventListener("scroll",function(){const o=document.querySelector(".scroll-up-js");window.scrollY>2e3?o.classList.remove("js-scroll-up-hidden"):o.classList.add("js-scroll-up-hidden")});document.querySelector(".scroll-up-js").addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});const d=document.querySelector("#modal-main");async function P(){b(d);const o=document.querySelector(".top-categories-list");try{const t=await m.get("https://books-backend.p.goit.global/books/top-books");o.insertAdjacentHTML("afterbegin",'<h2 class="categories-title">Best Sellers<span> Books</span></h2>');const e=await M(t.data);return o.insertAdjacentHTML("beforeend",e),k(d),t.data}catch(t){console.log(t.message),y()}}async function f(o){b(d);const t=document.querySelector(".top-categories-list");t.innerHTML="";try{const a=(await m.get(`https://books-backend.p.goit.global/books/category?category=${o}`)).data;t.insertAdjacentHTML("afterbegin",await B(o,a)),k(d)}catch(e){console.log(e.message),y()}}async function B(o,t){const e=o.split(" "),s="<span>"+e[e.length-1]+"</span>";return e[e.length-1]=s,`
  <h3 class="categories-title">${e.join(" ")}</h3>
  <ul class='list-books'>${await _(t)}</ul>`}async function _(o){return o.map(D).join("")}function D({author:o,book_image:t,title:e,description:a,_id:s}){return`<li class="category-item" id=${s}>
    <div class="book-wrap">
    <img class="book-img" src="${t}"  alt="${a}" data-id="${s}"/>
    </div >
    <div class="book-info">
    <p class="info-title">${e}</p>
    <p class="info-author">${o}</p>
    </div>
    </li>`}async function h(){const o="https://books-backend.p.goit.global/books/category-list";try{return(await m.get(o)).data}catch(t){console.error("Error fetching books:",t)}}async function A(){try{const o=await h(),t=document.querySelector(".categories-list_books");o.forEach(e=>{const a=document.createElement("li");a.classList.add("item-list_category"),a.dataset.category=e.list_name;const s=document.createElement("a");s.textContent=e.list_name,s.href=`#${e.list_name}`,s.classList.add("link_category-book"),a.appendChild(s),t.appendChild(a),a.addEventListener("click",async()=>{const l=a.dataset.category;await f(l)})})}catch(o){console.error("Error rendering categories:",o)}}document.addEventListener("DOMContentLoaded",A);let r=JSON.parse(localStorage.getItem("books"))||[];function H(o){r=JSON.parse(localStorage.getItem("books"))||[],r.includes(o)||(r.push(o),localStorage.setItem("books",JSON.stringify(r)))}function S(o){const t=JSON.parse(localStorage.getItem("books")),e=t.findIndex(a=>a===o);e!==-1&&t.splice(e,1),localStorage.setItem("books",JSON.stringify(t))}async function N(o){const t=`https://books-backend.p.goit.global/books/${o}`;return(await m.get(t)).data}const j="/Rookie-Coders-Project/assets/symbol-defs-08aba503.svg#icon-closed",R=document.querySelector(".top-categories-list");R.addEventListener("click",v);let i,n;async function v(o){if(o.preventDefault(),o.target.nodeName!=="IMG")return;i=o.target.dataset.id;const t=await N(i);let e;r.includes(i)||(e="ADD TO SHOPPING LIST"),r.includes(i)&&(e="REMOVE FROM THE SHOPPING LIST");const{book_image:a,title:s,author:l,description:L,amazon_product_url:w,buy_links:E}=t;n=T.create(`<div class="modal">
        <button type="button" class="modal-icon">
        <svg class="icon modal-icon-closed" width="18" height="18">
        <use xmlns:href="${j}"></use>
      </svg>
        </button>
        <div class="modal-content">
        <img class="modal-img" src="${a}" width="330" height="485"/>
        <div class="modal-content-text">
        <h3 class="modal-title">${s}</h3>
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
    </div>`,{onShow:c=>{document.addEventListener("keydown",g),c.element().querySelector(".modal-icon").onclick=c.close,document.querySelector("body").style.overflow="hidden",c.element().querySelector(".modal-btn").addEventListener("click",p),c.element().querySelector(".modal-btn").textContent==="REMOVE FROM THE SHOPPING LIST"&&(c.element().querySelector(".modal-btn").onclick=S)},onClose:()=>{document.removeEventListener("keydown",g),document.querySelector("body").style.overflow="auto",n.element().querySelector(".modal-btn").removeEventListener("click",p)}}),n.show()}function g(o){o.preventDefault(),o.code==="Escape"&&n.close()}function p(){n.element().querySelector(".modal-btn").textContent==="ADD TO SHOPPING LIST"?(n.element().querySelector(".modal-btn").onclick=n.element().querySelector(".modal-btn").textContent="REMOVE FROM THE SHOPPING LIST",n.element().querySelector(".modal-congrat-text").textContent='Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".',H(i)):(n.element().querySelector(".modal-btn").onclick=n.element().querySelector(".modal-btn").textContent="ADD TO SHOPPING LIST",n.element().querySelector(".modal-congrat-text").textContent="",S(i))}const G=document.querySelector(".top-categories-list"),z=document.querySelector('[data-action="open-modal"]'),J=document.querySelector('[data-action="close-modal"]');h();document.addEventListener("DOMContentLoaded",O);G.addEventListener("click",v);P();z.addEventListener("click",q);J.addEventListener("click",x);function F(){document.querySelector(".navigation_link_home").classList.add("active")}F();
//# sourceMappingURL=commonHelpers.js.map
