import"./assets/styles-d00b55fa.js";import{a as d,i as y,b as S}from"./assets/vendor-375581c1.js";async function m(){const e="https://books-backend.p.goit.global/books/category-list";try{return(await d.get(e)).data}catch(t){console.error("Error fetching books:",t)}}async function L(){try{const e=await m(),t=document.querySelector(".categories-list_books");e.forEach(o=>{const s=document.createElement("li");s.classList.add("item-list_category");const a=document.createElement("a");a.textContent=o.list_name,a.href=`${o.list_name}`,a.classList.add("link_category-book"),s.appendChild(a),t.appendChild(s)})}catch(e){console.error("Error rendering categories:",e)}}document.addEventListener("DOMContentLoaded",L);function n(){localStorage.getItem("theme")==="dark-mode"?(document.querySelector("html").classList.add("dark-mode"),document.querySelector(".switch_input").checked=!0):(document.querySelector("html").classList.remove("dark-mode"),document.querySelector(".switch_input").checked=!1)}window.addEventListener("load",()=>{const e=window.matchMedia("(prefers-color-scheme: dark-mode)"),t=e.matches?"dark-mode":"light";localStorage.theme=localStorage.theme||t,n(),document.querySelector(".switch_input").addEventListener("change",s=>{s.target.checked?(localStorage.setItem("theme","dark-mode"),n()):(localStorage.setItem("theme","light"),n())}),e.addEventListener("change",s=>{const a=s.matches?"dark-mode":"light";localStorage.theme=a,n()})});function v(){y.error({message:"Sorry, there are no books matching your search query. Please try again!",position:"topRight"})}async function E(e){return e.map(({author:t,book_image:o,title:s,description:a,_id:r})=>`<li class="books-item-about" id=${r} >  
    <div class="book-wrap"> 
    <img class="book-img" src="${o}"  alt="${a}" /> 
    </div> 
    <div class="book-info">  
    <p class="info-title">${s}</p>  
    <p class="info-author">${t}</p>  
    </div>  
    </li>`).join("")}async function w(e){return await Promise.all(e.map(async({list_name:t,books:o})=>` 
    <div class="container-books"> 
    <h3 class="book-categoty-title">${t}</h3> 
    <ul class='list-books'>${await E(o)}</ul>  
    <button class="book-button" data-js="${t}">See more</button> 
    </div> 
    `))}async function I(){const e=document.querySelector(".top-categories-list");try{const t=await d.get("https://books-backend.p.goit.global/books/top-books");e.insertAdjacentHTML("afterbegin",'<h2 class="categories-title">Best Sellers<span> Books</span></h2>');const o=await w(t.data);return e.insertAdjacentHTML("beforeend",o),t.data}catch(t){console.log(t.message),v()}}function $(e){const t=JSON.parse(localStorage.getItem("books"))||[];t.push(e),localStorage.setItem("books",JSON.stringify(t))}function q(e){const t=JSON.parse(localStorage.getItem("books")),o=t.findIndex(s=>s===e);o!==-1&&t.splice(o,1),localStorage.setItem("books",JSON.stringify(t))}const u=document.querySelector(".top-categories-list"),C=document.querySelector(".modal-icon"),M=document.querySelector(".backdrop"),i=document.querySelector(".modal-btn"),_=document.querySelector(".modal-congrat-text");u.addEventListener("click",g);let c;function g(e){if(e.preventDefault(),e.target.nodeName!=="IMG")return;const o=+e.target.closest("li").dataset._id,s=u.find(f=>f._id===o),{book_image:a,title:r,author:k,description:h,buy_links:{url:p,name:b}}=s;c=S.create(`
        <div class="modal">
        <button type="button" class="modal-icon">
        <svg class="modal-icon-closed"><use href="../img/symbol-defs.svg#icon-closed"></use></svg>
        </button>
        <img class="modal-img" src="${a}" width="330" height="485"/>
        <h3 class="modal-title">${r}</h3>
        <p class="modal-author">${k}</p> 
        <p class="modal-text">${h}</p>
        <ul>
        <li class="modal-link"><a href="${buy_links[p]}">${buy_links[b]}</a></li>
        <button class="modal-btn" type="button">ADD TO SHOPPING LIST</button>
        <p class="modal-congrat-text"></p>
    </div>`,{onShow:()=>{document.addEventListener("keydown",l),i.addEventListener("click",O)},onClose:()=>{document.removeEventListener("keydown",l),C.addEventListener("click",T),M.addEventListener("click",x)}}),c.show()}function l(e){e.preventDefault(),e.code==="Escape"&&c.close()}function T(e){e.preventDefault(),c.close()}function x(e){e.preventDefault(),c.close()}function O(e){e.preventDefault(),i.textContent="REMOVE FROM THE SHOPPING LIST",_.textContent='Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".',$(),i.addEventListener("click",()=>{q()})}const D=document.querySelector(".top-categories-list");m();document.addEventListener("DOMContentLoaded",n);D.addEventListener("click",g);I();
//# sourceMappingURL=commonHelpers.js.map
