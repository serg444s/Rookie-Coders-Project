import{l as b,a as y,o as f,b as g,c as I,d as $,e as O,f as q,g as x}from"./assets/openbook-010456ba.js";import{a as m,b as C}from"./assets/vendor-9b4a9007.js";async function M(t){return t.map(({author:e,book_image:o,title:a,description:n,_id:c})=>`<li class="books-item-about display-book" >
    <div class="book-wrap" data-id="${c}">
    <img class="book-img" src="${o}" data-id="${c}"  alt="${n}" />
    <p class="book_cover" data-id="${c}">QUICK VIEW</p>
    </div>
    <div class="book-info">
    <p class="info-title">${a}</p>
    <p class="info-author">${e}</p>
    </div>
    </li>`).join("")}async function T(t){return(await Promise.all(t.map(async({list_name:o,books:a})=>`
    <div class="container-books">
    <h3 class="book-categoty-title">${o}</h3>
    <ul class='list-books'>${await M(a)}</ul>
    <button class="book-button" data-category="${o}">See more</button>
    </div>
    `))).join("")}document.addEventListener("click",async t=>{if(t.target.classList.contains("book-button")){const e=t.target.dataset.category;B(e),await h(e)}});window.addEventListener("scroll",function(){const t=document.querySelector(".scroll-up-js");window.scrollY>2e3?t.classList.remove("js-scroll-up-hidden"):t.classList.add("js-scroll-up-hidden")});document.querySelector(".scroll-up-js").addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});function B(t){const e=document.querySelectorAll(".link_category-book");e.forEach(o=>o.classList.remove("active-category")),e.forEach(o=>{o.textContent===t&&o.classList.add("active-category")})}const u=document.querySelector("#modal-main");async function D(){sessionStorage.getItem("numberOfCongratulation")<1&&A(),sessionStorage.setItem("numberOfCongratulation",1),b(u);const e=document.querySelector(".top-categories-list");try{const o=await m.get("https://books-backend.p.goit.global/books/top-books");e.insertAdjacentHTML("afterbegin",'<h2 class="categories-title">Best Sellers<span> Books</span></h2>');const a=await T(o.data);return e.insertAdjacentHTML("beforeend",a),y(u),o.data}catch(o){console.log(o.message),f()}}function A(){const t=new Date,e=document.getElementById("womanModal");t.getMonth()===3&&t.getDate()===8&&(e.style.display="block");function o(){e.style.display="none"}setTimeout(o,2500)}async function h(t){b(u);const e=document.querySelector(".top-categories-list");e.innerHTML="";try{const a=(await m.get(`https://books-backend.p.goit.global/books/category?category=${t}`)).data;e.insertAdjacentHTML("afterbegin",await H(t,a)),y(u)}catch(o){console.log(o.message),f()}}async function H(t,e){const o=t.split(" "),a=Math.ceil(o.length/2),n=o.slice(0,a).join(" "),c=o.slice(a).join(" ");return`
  <h3 class="categories-title">${n+" <span>"+c+"<span>"}</h3>
  <ul class='list-books'>${await P(e)}</ul>`}async function P(t){return t.map(_).join("")}function _({author:t,book_image:e,title:o,description:a,_id:n}){return`<li class="category-item books-item-about" id=${n}>
    <div class="book-wrap" data-id="${n}">
    <img class="book-img" src="${e}"  alt="${a}" data-id="${n}"/>
        <p class="book_cover" data-id="${n}">QUICK VIEW</p>
    </div >
    <div class="book-info">
    <p class="info-title">${o}</p>
    <p class="info-author">${t}</p>
    </div>
    </li>`}async function S(){const t="https://books-backend.p.goit.global/books/category-list";try{return(await m.get(t)).data}catch(e){console.error("Error fetching books:",e)}}async function j(){try{const t=await S(),e=document.querySelector(".categories-list_books");t.forEach(o=>{const a=document.createElement("li");a.classList.add("item-list_category"),a.dataset.category=o.list_name;const n=document.createElement("a");n.textContent=o.list_name,n.href=`#${o.list_name}`,n.classList.add("link_category-book"),a.appendChild(n),e.appendChild(a),n.addEventListener("click",N),a.addEventListener("click",async c=>{const d=a.dataset.category;await h(d)})})}catch(t){console.error("Error rendering categories:",t)}}document.addEventListener("DOMContentLoaded",j);function N(t){document.querySelectorAll(".link_category-book").forEach(o=>o.classList.remove("active-category")),t.currentTarget.classList.add("active-category")}let r=JSON.parse(localStorage.getItem("books"))||[];function R(t){r=JSON.parse(localStorage.getItem("books"))||[],r.includes(t)||(r.push(t),localStorage.setItem("books",JSON.stringify(r)))}function v(t){const e=JSON.parse(localStorage.getItem("books")),o=e.findIndex(a=>a===t);o!==-1&&e.splice(o,1),localStorage.setItem("books",JSON.stringify(e))}async function G(t){const e=`https://books-backend.p.goit.global/books/${t}`;return(await m.get(e)).data}const z=document.querySelector(".top-categories-list");z.addEventListener("click",L);let i,s;async function L(t){if(t.preventDefault(),!t.target.hasAttribute("data-id"))return;i=t.target.dataset.id;const e=await G(i);let o;r.includes(i)||(o="ADD TO SHOPPING LIST"),r.includes(i)&&(o="REMOVE FROM THE SHOPPING LIST");const{book_image:a,title:n,author:c,description:d,amazon_product_url:w,buy_links:E}=e;s=C.create(`<div class="modal">
        <button type="button" class="modal-icon">
        <svg class="modal-icon-closed" width="24" height="24" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
  <path d="M21 7L7 21M7 7L21 21" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
</svg>
        </button>
        <div class="modal-content">
        <img class="modal-img" src="${a}"/>
        <div class="modal-content-text">
        <h3 class="modal-title">${n}</h3>
        <p class="modal-author">${c}</p> 
        <p class="modal-text">${d}</p>
        <div class="modal-link-icons">
            <a target="_blank" href="${w}">
            <img class="modal-link-amazon" srcset="${g} 1x,${I} 2x" src="${g}" alt="Amazon Shop" />
            </a>
            <a target="_blank" href="${E.find(l=>l.name==="Apple Books").url}">
            <img class="modal-link-applebook" src="${$}" alt="Open book" />
            </a>
        </div>
        </div>
        </div>
        <button class="modal-btn" type="button" data-action="add">${o}</button>
        <p class="modal-congrat-text"></p>
    </div>`,{onShow:l=>{document.addEventListener("keydown",k),l.element().querySelector(".modal-icon").onclick=l.close,document.querySelector("body").style.overflow="hidden",l.element().querySelector(".modal-btn").addEventListener("click",p),l.element().querySelector(".modal-btn").textContent==="REMOVE FROM THE SHOPPING LIST"&&(l.element().querySelector(".modal-btn").onclick=v)},onClose:()=>{document.removeEventListener("keydown",k),document.querySelector("body").style.overflow="auto",s.element().querySelector(".modal-btn").removeEventListener("click",p)}}),s.show()}function k(t){t.preventDefault(),t.code==="Escape"&&s.close()}function p(){s.element().querySelector(".modal-btn").textContent==="ADD TO SHOPPING LIST"?(s.element().querySelector(".modal-btn").onclick=s.element().querySelector(".modal-btn").textContent="REMOVE FROM THE SHOPPING LIST",s.element().querySelector(".modal-congrat-text").textContent='Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".',R(i)):(s.element().querySelector(".modal-btn").onclick=s.element().querySelector(".modal-btn").textContent="ADD TO SHOPPING LIST",s.element().querySelector(".modal-congrat-text").textContent="",v(i))}const J=document.querySelector(".top-categories-list"),V=document.querySelector('[data-action="open-modal"]'),F=document.querySelector('[data-action="close-modal"]');S();document.addEventListener("DOMContentLoaded",O);J.addEventListener("click",L);D();V.addEventListener("click",q);F.addEventListener("click",x);function U(){document.querySelector(".navigation_link_home").classList.add("active")}U();
//# sourceMappingURL=commonHelpers.js.map
