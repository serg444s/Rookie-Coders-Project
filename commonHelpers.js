import{o as h}from"./assets/dark-mode-f15d51d9.js";import{i as v,a as r,b as L}from"./assets/vendor-375581c1.js";function d(){v.error({message:"Sorry, there are no books matching your search query. Please try again!",position:"topRight"})}async function S(o){return o.map(({author:t,book_image:e,title:s,description:a,_id:n})=>`<li class="books-item-about" id=${n} >  
    <div class="book-wrap"> 
    <img class="book-img" src="${e}"  alt="${a}" /> 
    </div> 
    <div class="book-info">  
    <p class="info-title">${s}</p>  
    <p class="info-author">${t}</p>  
    </div>  
    </li>`).join("")}async function $(o){return(await Promise.all(o.map(async({list_name:e,books:s})=>`
    <div class="container-books">
    <h3 class="book-categoty-title">${e}</h3>
    <ul class='list-books'>${await S(s)}</ul>
    <button class="book-button" data-js="${e}">See more</button>
    </div>
    `))).join("")}async function E(){const o=document.querySelector(".top-categories-list");try{const t=await r.get("https://books-backend.p.goit.global/books/top-books");o.insertAdjacentHTML("afterbegin",'<h2 class="categories-title">Best Sellers<span> Books</span></h2>');const e=await $(t.data);return o.insertAdjacentHTML("beforeend",e),t.data}catch(t){console.log(t.message),d()}}async function w(o){const t=document.querySelector(".top-categories-list");console.log(t),t.innerHTML="";try{const e=await r.get(`https://books-backend.p.goit.global/books/category?category=${o}`);console.log(e);const s=e.data;t.insertAdjacentHTML("afterbegin",await I(o,s))}catch(e){console.log(e.message),d()}}async function I(o,t){return`
  <h3 class="book-categoty-title">${o}</h3>
  <ul class='list-books'>${await C(t)}</ul>`}async function C(o){return console.log(o),o.map(T).join("")}function T({author:o,book_image:t,title:e,description:s,_id:a}){return`<li class="category-item" id=${a}>
    <div class="book-wrap">
    <img class="book-img" src="${t}"  alt="${s}"/>
    </div >
    <div class="book-info">
    <p class="info-title">${e}</p>
    <p class="info-author">${o}</p>
    </div>
    </li>`}async function u(){const o="https://books-backend.p.goit.global/books/category-list";try{return(await r.get(o)).data}catch(t){console.error("Error fetching books:",t)}}async function O(){try{const o=await u(),t=document.querySelector(".categories-list_books");o.forEach(e=>{const s=document.createElement("li");s.classList.add("item-list_category"),s.dataset.category=e.list_name;const a=document.createElement("a");a.textContent=e.list_name,a.href=`#${e.list_name}`,a.classList.add("link_category-book"),s.appendChild(a),t.appendChild(s),s.addEventListener("click",async()=>{const n=s.dataset.category;await w(n)})})}catch(o){console.error("Error rendering categories:",o)}}document.addEventListener("DOMContentLoaded",O);function x(o){const t=JSON.parse(localStorage.getItem("books"))||[];t.push(o),localStorage.setItem("books",JSON.stringify(t))}function M(o){const t=JSON.parse(localStorage.getItem("books")),e=t.findIndex(s=>s===o);e!==-1&&t.splice(e,1),localStorage.setItem("books",JSON.stringify(t))}const m=document.querySelector(".top-categories-list"),_=document.querySelector(".modal-icon"),B=document.querySelector(".backdrop"),i=document.querySelector(".modal-btn"),q=document.querySelector(".modal-congrat-text");m.addEventListener("click",g);let c;function g(o){if(o.preventDefault(),o.target.nodeName!=="IMG")return;const e=+o.target.closest("li").dataset._id,s=m.find(y=>y._id===e),{book_image:a,title:n,author:p,description:k,buy_links:{url:b,name:f}}=s;c=L.create(`
        <div class="modal">
        <button type="button" class="modal-icon">
        <svg class="modal-icon-closed"><use href="../img/symbol-defs.svg#icon-closed"></use></svg>
        </button>
        <img class="modal-img" src="${a}" width="330" height="485"/>
        <h3 class="modal-title">${n}</h3>
        <p class="modal-author">${p}</p> 
        <p class="modal-text">${k}</p>
        <ul>
        <li class="modal-link"><a href="${buy_links[b]}">${buy_links[f]}</a></li>
        <button class="modal-btn" type="button">ADD TO SHOPPING LIST</button>
        <p class="modal-congrat-text"></p>
    </div>`,{onShow:()=>{document.addEventListener("keydown",l),i.addEventListener("click",N)},onClose:()=>{document.removeEventListener("keydown",l),_.addEventListener("click",D),B.addEventListener("click",A)}}),c.show()}function l(o){o.preventDefault(),o.code==="Escape"&&c.close()}function D(o){o.preventDefault(),c.close()}function A(o){o.preventDefault(),c.close()}function N(o){o.preventDefault(),i.textContent="REMOVE FROM THE SHOPPING LIST",q.textContent='Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".',x(),i.addEventListener("click",()=>{M()})}const P=document.querySelector(".top-categories-list");u();document.addEventListener("DOMContentLoaded",h);P.addEventListener("click",g);E();
//# sourceMappingURL=commonHelpers.js.map
