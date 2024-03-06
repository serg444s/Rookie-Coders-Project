import{l as b,a as k,o as y,b as I,c as O,d as q,e as T,f as $}from"./assets/openbook-cb16cce0.js";import{a as m,b as x}from"./assets/vendor-9b4a9007.js";async function g(t){return t.map(({author:e,book_image:o,title:a,description:n,_id:c})=>`<li class="books-item-about" >
    <div class="book-wrap">
    <img class="book-img" src="${o}" data-id="${c}"  alt="${n}" />
    <p class="book_cover">QUICK VIEW</p>
    </div>
    <div class="book-info">
    <p class="info-title">${a}</p>
    <p class="info-author">${e}</p>
    </div>
    </li>`).join("")}async function S(t){return d()<768>d()?g(t.slice(0,1)):d()<1439>d()?g(await t.slice(0,3)):g(t)}function d(){return window.innerWidth}async function C(t){return(await Promise.all(t.map(async({list_name:o,books:a})=>`
    <div class="container-books">
    <h3 class="book-categoty-title">${o}</h3>
    <ul class='list-books'>${await S(a)}</ul>
    <button class="book-button" data-category="${o}">See more</button>
    </div>
    `))).join("")}document.addEventListener("click",async t=>{if(t.target.classList.contains("book-button")){const e=t.target.dataset.category;await f(e)}});window.addEventListener("scroll",function(){const t=document.querySelector(".scroll-up-js");window.scrollY>2e3?t.classList.remove("js-scroll-up-hidden"):t.classList.add("js-scroll-up-hidden")});document.querySelector(".scroll-up-js").addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});const u=document.querySelector("#modal-main");async function M(){b(u);const t=document.querySelector(".top-categories-list");try{const e=await m.get("https://books-backend.p.goit.global/books/top-books");t.insertAdjacentHTML("afterbegin",'<h2 class="categories-title">Best Sellers<span> Books</span></h2>');const o=await C(e.data);return t.insertAdjacentHTML("beforeend",o),k(u),e.data}catch(e){console.log(e.message),y()}}async function f(t){b(u);const e=document.querySelector(".top-categories-list");e.innerHTML="";try{const a=(await m.get(`https://books-backend.p.goit.global/books/category?category=${t}`)).data;e.insertAdjacentHTML("afterbegin",await P(t,a)),k(u)}catch(o){console.log(o.message),y()}}async function P(t,e){const o=t.split(" "),n="<span>"+o[o.length-1]+"</span>";return o[o.length-1]=n,`
  <h3 class="categories-title">${o.join(" ")}</h3>
  <ul class='list-books'>${await S(e)}</ul>`}async function h(){const t="https://books-backend.p.goit.global/books/category-list";try{return(await m.get(t)).data}catch(e){console.error("Error fetching books:",e)}}async function _(){try{const t=await h(),e=document.querySelector(".categories-list_books");t.forEach(o=>{const a=document.createElement("li");a.classList.add("item-list_category"),a.dataset.category=o.list_name;const n=document.createElement("a");n.textContent=o.list_name,n.href=`#${o.list_name}`,n.classList.add("link_category-book"),a.appendChild(n),e.appendChild(a),a.addEventListener("click",async()=>{const c=a.dataset.category;await f(c)})})}catch(t){console.error("Error rendering categories:",t)}}document.addEventListener("DOMContentLoaded",_);let l=JSON.parse(localStorage.getItem("books"))||[];function B(t){l=JSON.parse(localStorage.getItem("books"))||[],l.includes(t)||(l.push(t),localStorage.setItem("books",JSON.stringify(l)))}function L(t){const e=JSON.parse(localStorage.getItem("books")),o=e.findIndex(a=>a===t);o!==-1&&e.splice(o,1),localStorage.setItem("books",JSON.stringify(e))}async function D(t){const e=`https://books-backend.p.goit.global/books/${t}`;return(await m.get(e)).data}const H=document.querySelector(".top-categories-list");document.querySelector(".modal-btn");document.querySelector(".modal-congrat-text");let r;H.addEventListener("click",v);let s;async function v(t){if(t.preventDefault(),t.target.nodeName!=="IMG")return;r=t.target.dataset.id;const e=await D(r);let o;l.includes(r)||(o="ADD TO SHOPPING LIST"),l.includes(r)&&(o="REMOVE FROM THE SHOPPING LIST");const{book_image:a,title:n,author:c,description:w,amazon_product_url:E}=e;s=x.create(`<div class="modal">
        <button type="button" class="modal-icon modal-icon-closed">X</button>
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
        <button class="modal-btn" type="button" data-action="add">${o}</button>
        <p class="modal-congrat-text"></p>
    </div>`,{onShow:i=>{document.addEventListener("keydown",p),i.element().querySelector(".modal-icon").onclick=i.close,i.element().querySelector(".modal-btn").addEventListener("click",N),i.element().querySelector(".modal-btn").textContent==="REMOVE FROM THE SHOPPING LIST"&&(i.element().querySelector(".modal-btn").onclick=L)},onClose:()=>{document.removeEventListener("keydown",p)}}),s.show()}function p(t){t.preventDefault(),t.code==="Escape"&&s.close()}function N(){s.element().querySelector(".modal-btn").textContent==="ADD TO SHOPPING LIST"?(s.element().querySelector(".modal-btn").onclick=s.element().querySelector(".modal-btn").textContent="REMOVE FROM THE SHOPPING LIST",s.element().querySelector(".modal-congrat-text").textContent='Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".',B(r)):(s.element().querySelector(".modal-btn").onclick=s.element().querySelector(".modal-btn").textContent="ADD TO SHOPPING LIST",s.element().querySelector(".modal-congrat-text").textContent="",L(r))}const A=document.querySelector(".top-categories-list"),j=document.querySelector('[data-action="open-modal"]'),R=document.querySelector('[data-action="close-modal"]');h();document.addEventListener("DOMContentLoaded",q);A.addEventListener("click",v);M();j.addEventListener("click",T);R.addEventListener("click",$);function G(){document.querySelector(".navigation_link_home").classList.add("active")}G();
//# sourceMappingURL=commonHelpers.js.map
