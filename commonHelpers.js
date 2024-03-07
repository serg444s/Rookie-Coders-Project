import{l as b,a as k,o as y,b as u,c as I,d as $,e as O,f as q,g as x}from"./assets/openbook-a11d4e80.js";import{a as m,b as M}from"./assets/vendor-9b4a9007.js";async function T(t){return t.map(({author:e,book_image:o,title:a,description:n,_id:l})=>`<li class="books-item-about display-book" >
    <div class="book-wrap">
    <img class="book-img" src="${o}" data-id="${l}"  alt="${n}" />
    <p class="book_cover">QUICK VIEW</p>
    </div>
    <div class="book-info">
    <p class="info-title">${a}</p>
    <p class="info-author">${e}</p>
    </div>
    </li>`).join("")}async function C(t){return(await Promise.all(t.map(async({list_name:o,books:a})=>`
    <div class="container-books">
    <h3 class="book-categoty-title">${o}</h3>
    <ul class='list-books'>${await T(a)}</ul>
    <button class="book-button" data-category="${o}">See more</button>
    </div>
    `))).join("")}document.addEventListener("click",async t=>{if(t.target.classList.contains("book-button")){const e=t.target.dataset.category;await f(e)}});window.addEventListener("scroll",function(){const t=document.querySelector(".scroll-up-js");window.scrollY>2e3?t.classList.remove("js-scroll-up-hidden"):t.classList.add("js-scroll-up-hidden")});document.querySelector(".scroll-up-js").addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});const d=document.querySelector("#modal-main");async function B(){sessionStorage.getItem("numberOfCongratulation")<1&&D(),sessionStorage.setItem("numberOfCongratulation",1),b(d);const e=document.querySelector(".top-categories-list");try{const o=await m.get("https://books-backend.p.goit.global/books/top-books");e.insertAdjacentHTML("afterbegin",'<h2 class="categories-title">Best Sellers<span> Books</span></h2>');const a=await C(o.data);return e.insertAdjacentHTML("beforeend",a),k(d),o.data}catch(o){console.log(o.message),y()}}function D(){const t=document.getElementById("womanModal");t.style.display="block";function e(){t.style.display="none"}setTimeout(e,2500)}async function f(t){b(d);const e=document.querySelector(".top-categories-list");e.innerHTML="";try{const a=(await m.get(`https://books-backend.p.goit.global/books/category?category=${t}`)).data;e.insertAdjacentHTML("afterbegin",await P(t,a)),k(d)}catch(o){console.log(o.message),y()}}async function P(t,e){const o=t.split(" "),n="<span>"+o[o.length-1]+"</span>";return o[o.length-1]=n,`
  <h3 class="categories-title">${o.join(" ")}</h3>
  <ul class='list-books'>${await _(e)}</ul>`}async function _(t){return t.map(A).join("")}function A({author:t,book_image:e,title:o,description:a,_id:n}){return`<li class="category-item" id=${n}>
    <div class="book-wrap">
    <img class="book-img" src="${e}"  alt="${a}" data-id="${n}"/>
    </div >
    <div class="book-info">
    <p class="info-title">${o}</p>
    <p class="info-author">${t}</p>
    </div>
    </li>`}async function h(){const t="https://books-backend.p.goit.global/books/category-list";try{return(await m.get(t)).data}catch(e){console.error("Error fetching books:",e)}}async function H(){try{const t=await h(),e=document.querySelector(".categories-list_books");t.forEach(o=>{const a=document.createElement("li");a.classList.add("item-list_category"),a.dataset.category=o.list_name;const n=document.createElement("a");n.textContent=o.list_name,n.href=`#${o.list_name}`,n.classList.add("link_category-book"),a.appendChild(n),e.appendChild(a),a.addEventListener("click",async()=>{const l=a.dataset.category;await f(l)})})}catch(t){console.error("Error rendering categories:",t)}}document.addEventListener("DOMContentLoaded",H);let r=JSON.parse(localStorage.getItem("books"))||[];function N(t){r=JSON.parse(localStorage.getItem("books"))||[],r.includes(t)||(r.push(t),localStorage.setItem("books",JSON.stringify(r)))}function S(t){const e=JSON.parse(localStorage.getItem("books")),o=e.findIndex(a=>a===t);o!==-1&&e.splice(o,1),localStorage.setItem("books",JSON.stringify(e))}async function j(t){const e=`https://books-backend.p.goit.global/books/${t}`;return(await m.get(e)).data}const R=document.querySelector(".top-categories-list");R.addEventListener("click",v);let i,s;async function v(t){if(t.preventDefault(),t.target.nodeName!=="IMG")return;i=t.target.dataset.id;const e=await j(i);let o;r.includes(i)||(o="ADD TO SHOPPING LIST"),r.includes(i)&&(o="REMOVE FROM THE SHOPPING LIST");const{book_image:a,title:n,author:l,description:L,amazon_product_url:w,buy_links:E}=e;s=M.create(`<div class="modal">
        <button type="button" class="modal-icon">
        <svg class="modal-icon-closed" width="24" height="24" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
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
            <img class="modal-link-amazon" srcset="${u} 1x,${I} 2x" src="${u}" alt="Amazon Shop" />
            </a>
            <a target="_blank" href="${E.find(c=>c.name==="Apple Books").url}">
            <img class="modal-link-applebook" src="${$}" alt="Open book" />
            </a>
        </div>
        </div>
        </div>
        <button class="modal-btn" type="button" data-action="add">${o}</button>
        <p class="modal-congrat-text"></p>
    </div>`,{onShow:c=>{document.addEventListener("keydown",g),c.element().querySelector(".modal-icon").onclick=c.close,document.querySelector("body").style.overflow="hidden",c.element().querySelector(".modal-btn").addEventListener("click",p),c.element().querySelector(".modal-btn").textContent==="REMOVE FROM THE SHOPPING LIST"&&(c.element().querySelector(".modal-btn").onclick=S)},onClose:()=>{document.removeEventListener("keydown",g),document.querySelector("body").style.overflow="auto",s.element().querySelector(".modal-btn").removeEventListener("click",p)}}),s.show()}function g(t){t.preventDefault(),t.code==="Escape"&&s.close()}function p(){s.element().querySelector(".modal-btn").textContent==="ADD TO SHOPPING LIST"?(s.element().querySelector(".modal-btn").onclick=s.element().querySelector(".modal-btn").textContent="REMOVE FROM THE SHOPPING LIST",s.element().querySelector(".modal-congrat-text").textContent='Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".',N(i)):(s.element().querySelector(".modal-btn").onclick=s.element().querySelector(".modal-btn").textContent="ADD TO SHOPPING LIST",s.element().querySelector(".modal-congrat-text").textContent="",S(i))}const G=document.querySelector(".top-categories-list"),z=document.querySelector('[data-action="open-modal"]'),J=document.querySelector('[data-action="close-modal"]');h();document.addEventListener("DOMContentLoaded",O);G.addEventListener("click",v);B();z.addEventListener("click",q);J.addEventListener("click",x);function F(){document.querySelector(".navigation_link_home").classList.add("active")}F();
//# sourceMappingURL=commonHelpers.js.map
