import"./assets/styles-c6c4fe92.js";import{i as S,a as l,b as v}from"./assets/vendor-375581c1.js";function m(){S.error({message:"Sorry, there are no books matching your search query. Please try again!",position:"topRight"})}async function L(e){return e.map(({author:t,book_image:o,title:a,description:s,_id:n})=>`<li class="books-item-about" id=${n} >  
    <div class="book-wrap"> 
    <img class="book-img" src="${o}"  alt="${s}" /> 
    </div> 
    <div class="book-info">  
    <p class="info-title">${a}</p>  
    <p class="info-author">${t}</p>  
    </div>  
    </li>`).join("")}async function w(e){return(await Promise.all(e.map(async({list_name:o,books:a})=>`
    <div class="container-books">
    <h3 class="book-categoty-title">${o}</h3>
    <ul class='list-books'>${await L(a)}</ul>
    <button class="book-button" data-js="${o}">See more</button>
    </div>
    `))).join("")}async function E(){const e=document.querySelector(".top-categories-list");try{const t=await l.get("https://books-backend.p.goit.global/books/top-books");e.insertAdjacentHTML("afterbegin",'<h2 class="categories-title">Best Sellers<span> Books</span></h2>');const o=await w(t.data);return e.insertAdjacentHTML("beforeend",o),t.data}catch(t){console.log(t.message),m()}}async function $(e){const t=document.querySelector(".top-categories-list");console.log(t),t.innerHTML="";try{const o=await l.get(`https://books-backend.p.goit.global/books/category?category=${e}`);console.log(o);const a=o.data;t.insertAdjacentHTML("afterbegin",await I(e,a))}catch(o){console.log(o.message),m()}}async function I(e,t){return`
  <h3 class="book-categoty-title">${e}</h3>
  <ul class='list-books'>${await M(t)}</ul>`}async function M(e){return console.log(e),e.map(C).join("")}function C({author:e,book_image:t,title:o,description:a,_id:s}){return`<li class="category-item" id=${s}>
    <div class="book-wrap">
    <img class="book-img" src="${t}"  alt="${a}"/>
    </div >
    <div class="book-info">
    <p class="info-title">${o}</p>
    <p class="info-author">${e}</p>
    </div>
    </li>`}async function u(){const e="https://books-backend.p.goit.global/books/category-list";try{return(await l.get(e)).data}catch(t){console.error("Error fetching books:",t)}}async function q(){try{const e=await u(),t=document.querySelector(".categories-list_books");e.forEach(o=>{const a=document.createElement("li");a.classList.add("item-list_category"),a.dataset.category=o.list_name;const s=document.createElement("a");s.textContent=o.list_name,s.href=`#${o.list_name}`,s.classList.add("link_category-book"),a.appendChild(s),t.appendChild(a),a.addEventListener("click",async()=>{const n=a.dataset.category;await $(n)})})}catch(e){console.error("Error rendering categories:",e)}}document.addEventListener("DOMContentLoaded",q);function c(){localStorage.getItem("theme")==="dark-mode"?(document.querySelector("html").classList.add("dark-mode"),document.querySelector(".switch_input").checked=!0):(document.querySelector("html").classList.remove("dark-mode"),document.querySelector(".switch_input").checked=!1)}window.addEventListener("load",()=>{const e=window.matchMedia("(prefers-color-scheme: dark-mode)"),t=e.matches?"dark-mode":"light";localStorage.theme=localStorage.theme||t,c(),document.querySelector(".switch_input").addEventListener("change",a=>{a.target.checked?(localStorage.setItem("theme","dark-mode"),c()):(localStorage.setItem("theme","light"),c())}),e.addEventListener("change",a=>{const s=a.matches?"dark-mode":"light";localStorage.theme=s,c()})});function T(e){const t=JSON.parse(localStorage.getItem("books"))||[];t.push(e),localStorage.setItem("books",JSON.stringify(t))}function _(e){const t=JSON.parse(localStorage.getItem("books")),o=t.findIndex(a=>a===e);o!==-1&&t.splice(o,1),localStorage.setItem("books",JSON.stringify(t))}const g=document.querySelector(".top-categories-list"),O=document.querySelector(".modal-icon"),x=document.querySelector(".backdrop"),i=document.querySelector(".modal-btn"),B=document.querySelector(".modal-congrat-text");g.addEventListener("click",k);let r;function k(e){if(e.preventDefault(),e.target.nodeName!=="IMG")return;const o=+e.target.closest("li").dataset._id,a=g.find(f=>f._id===o),{book_image:s,title:n,author:p,description:h,buy_links:{url:b,name:y}}=a;r=v.create(`
        <div class="modal">
        <button type="button" class="modal-icon">
        <svg class="modal-icon-closed"><use href="../img/symbol-defs.svg#icon-closed"></use></svg>
        </button>
        <img class="modal-img" src="${s}" width="330" height="485"/>
        <h3 class="modal-title">${n}</h3>
        <p class="modal-author">${p}</p> 
        <p class="modal-text">${h}</p>
        <ul>
        <li class="modal-link"><a href="${buy_links[b]}">${buy_links[y]}</a></li>
        <button class="modal-btn" type="button">ADD TO SHOPPING LIST</button>
        <p class="modal-congrat-text"></p>
    </div>`,{onShow:()=>{document.addEventListener("keydown",d),i.addEventListener("click",N)},onClose:()=>{document.removeEventListener("keydown",d),O.addEventListener("click",D),x.addEventListener("click",A)}}),r.show()}function d(e){e.preventDefault(),e.code==="Escape"&&r.close()}function D(e){e.preventDefault(),r.close()}function A(e){e.preventDefault(),r.close()}function N(e){e.preventDefault(),i.textContent="REMOVE FROM THE SHOPPING LIST",B.textContent='Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".',T(),i.addEventListener("click",()=>{_()})}const P=document.querySelector(".top-categories-list");u();document.addEventListener("DOMContentLoaded",c);P.addEventListener("click",k);E();
//# sourceMappingURL=commonHelpers.js.map
