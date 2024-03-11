import{l as b,a as y,o as f,b as g,c as I,d as $,e as O,f as q,g as x}from"./assets/openbook-a2e870e2.js";import{a as u,b as T}from"./assets/vendor-9b4a9007.js";async function M(t){return t.map(({author:e,book_image:o,title:a,description:n,_id:i})=>`<li class="books-item-about display-book" >
    <div class="book-wrap">
    <img class="book-img" src="${o}" data-id="${i}"  alt="${n}" />
    <p class="book_cover">QUICK VIEW</p>
    </div>
    <div class="book-info">
    <p class="info-title">${a}</p>
    <p class="info-author">${e}</p>
    </div>
    </li>`).join("")}async function C(t){return(await Promise.all(t.map(async({list_name:o,books:a})=>`
    <div class="container-books">
    <h3 class="book-categoty-title">${o}</h3>
    <ul class='list-books'>${await M(a)}</ul>
    <button class="book-button" data-category="${o}">See more</button>
    </div>
    `))).join("")}document.addEventListener("click",async t=>{if(t.target.classList.contains("book-button")){const e=t.target.dataset.category;await h(e)}});window.addEventListener("scroll",function(){const t=document.querySelector(".scroll-up-js");window.scrollY>2e3?t.classList.remove("js-scroll-up-hidden"):t.classList.add("js-scroll-up-hidden")});document.querySelector(".scroll-up-js").addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});const d=document.querySelector("#modal-main");async function B(){sessionStorage.getItem("numberOfCongratulation")<1&&_(),sessionStorage.setItem("numberOfCongratulation",1),b(d);const e=document.querySelector(".top-categories-list");try{const o=await u.get("https://books-backend.p.goit.global/books/top-books");e.insertAdjacentHTML("afterbegin",'<h2 class="categories-title">Best Sellers<span> Books</span></h2>');const a=await C(o.data);return e.insertAdjacentHTML("beforeend",a),y(d),o.data}catch(o){console.log(o.message),f()}}function _(){const t=document.getElementById("womanModal");t.style.display="block";function e(){t.style.display="none"}setTimeout(e,2500)}async function h(t){b(d);const e=document.querySelector(".top-categories-list");e.innerHTML="";try{const a=(await u.get(`https://books-backend.p.goit.global/books/category?category=${t}`)).data;e.insertAdjacentHTML("afterbegin",await D(t,a)),y(d)}catch(o){console.log(o.message),f()}}async function D(t,e){const o=t.split(" "),n="<span>"+o[o.length-1]+"</span>";return o[o.length-1]=n,`
  <h3 class="categories-title">${o.join(" ")}</h3>
  <ul class='list-books'>${await P(e)}</ul>`}async function P(t){return t.map(A).join("")}function A({author:t,book_image:e,title:o,description:a,_id:n}){return`<li class="category-item books-item-about" id=${n}>
    <div class="book-wrap">
    <img class="book-img" src="${e}"  alt="${a}" data-id="${n}"/>
        <p class="book_cover">QUICK VIEW</p>
    </div >
    <div class="book-info">
    <p class="info-title">${o}</p>
    <p class="info-author">${t}</p>
    </div>
    </li>`}async function S(){const t="https://books-backend.p.goit.global/books/category-list";try{return(await u.get(t)).data}catch(e){console.error("Error fetching books:",e)}}async function H(){try{const t=await S(),e=document.querySelector(".categories-list_books");t.forEach(o=>{const a=document.createElement("li");a.classList.add("item-list_category"),a.dataset.category=o.list_name;const n=document.createElement("a");n.textContent=o.list_name,n.href=`#${o.list_name}`,n.classList.add("link_category-book"),a.appendChild(n),e.appendChild(a),n.addEventListener("click",N),a.addEventListener("click",async i=>{const m=a.dataset.category;await h(m)})})}catch(t){console.error("Error rendering categories:",t)}}document.addEventListener("DOMContentLoaded",H);function N(t){const e=document.querySelectorAll(".link_category-book");console.log(e),e.forEach(o=>o.classList.remove("active-category")),t.currentTarget.classList.add("active-category"),console.log(t.currentTarget)}let l=JSON.parse(localStorage.getItem("books"))||[];function j(t){l=JSON.parse(localStorage.getItem("books"))||[],l.includes(t)||(l.push(t),localStorage.setItem("books",JSON.stringify(l)))}function v(t){const e=JSON.parse(localStorage.getItem("books")),o=e.findIndex(a=>a===t);o!==-1&&e.splice(o,1),localStorage.setItem("books",JSON.stringify(e))}async function R(t){const e=`https://books-backend.p.goit.global/books/${t}`;return(await u.get(e)).data}const G=document.querySelector(".top-categories-list");G.addEventListener("click",L);let r,s;async function L(t){if(t.preventDefault(),t.target.nodeName!=="IMG")return;r=t.target.dataset.id;const e=await R(r);let o;l.includes(r)||(o="ADD TO SHOPPING LIST"),l.includes(r)&&(o="REMOVE FROM THE SHOPPING LIST");const{book_image:a,title:n,author:i,description:m,amazon_product_url:w,buy_links:E}=e;s=T.create(`<div class="modal">
        <button type="button" class="modal-icon">
        <svg class="modal-icon-closed" width="24" height="24" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
  <path d="M21 7L7 21M7 7L21 21" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
</svg>
        </button>
        <div class="modal-content">
        <img class="modal-img" src="${a}"/>
        <div class="modal-content-text">
        <h3 class="modal-title">${n}</h3>
        <p class="modal-author">${i}</p> 
        <p class="modal-text">${m}</p>
        <div class="modal-link-icons">
            <a target="_blank" href="${w}">
            <img class="modal-link-amazon" srcset="${g} 1x,${I} 2x" src="${g}" alt="Amazon Shop" />
            </a>
            <a target="_blank" href="${E.find(c=>c.name==="Apple Books").url}">
            <img class="modal-link-applebook" src="${$}" alt="Open book" />
            </a>
        </div>
        </div>
        </div>
        <button class="modal-btn" type="button" data-action="add">${o}</button>
        <p class="modal-congrat-text"></p>
    </div>`,{onShow:c=>{document.addEventListener("keydown",p),c.element().querySelector(".modal-icon").onclick=c.close,document.querySelector("body").style.overflow="hidden",c.element().querySelector(".modal-btn").addEventListener("click",k),c.element().querySelector(".modal-btn").textContent==="REMOVE FROM THE SHOPPING LIST"&&(c.element().querySelector(".modal-btn").onclick=v)},onClose:()=>{document.removeEventListener("keydown",p),document.querySelector("body").style.overflow="auto",s.element().querySelector(".modal-btn").removeEventListener("click",k)}}),s.show()}function p(t){t.preventDefault(),t.code==="Escape"&&s.close()}function k(){s.element().querySelector(".modal-btn").textContent==="ADD TO SHOPPING LIST"?(s.element().querySelector(".modal-btn").onclick=s.element().querySelector(".modal-btn").textContent="REMOVE FROM THE SHOPPING LIST",s.element().querySelector(".modal-congrat-text").textContent='Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".',j(r)):(s.element().querySelector(".modal-btn").onclick=s.element().querySelector(".modal-btn").textContent="ADD TO SHOPPING LIST",s.element().querySelector(".modal-congrat-text").textContent="",v(r))}const z=document.querySelector(".top-categories-list"),J=document.querySelector('[data-action="open-modal"]'),V=document.querySelector('[data-action="close-modal"]');S();document.addEventListener("DOMContentLoaded",O);z.addEventListener("click",L);B();J.addEventListener("click",q);V.addEventListener("click",x);function W(){document.querySelector(".navigation_link_home").classList.add("active")}W();
//# sourceMappingURL=commonHelpers.js.map
