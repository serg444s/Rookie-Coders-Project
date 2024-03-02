import"./assets/styles-ce0cdb9a.js";import{a as n,i as d}from"./assets/vendor-8cce9181.js";async function c(){const e="https://books-backend.p.goit.global/books/category-list";try{return(await n.get(e)).data}catch(t){console.error("Error fetching books:",t)}}async function l(){try{const e=await c(),t=document.querySelector(".categories-list_books");e.forEach(o=>{const a=document.createElement("li");a.classList.add("item-list_category");const s=document.createElement("a");s.textContent=o.list_name,s.href=`${o.list_name}`,s.classList.add("link_category-book"),a.appendChild(s),t.appendChild(a)})}catch(e){console.error("Error rendering categories:",e)}}document.addEventListener("DOMContentLoaded",l);function r(){localStorage.getItem("theme")==="dark-mode"?(document.querySelector("html").classList.add("dark-mode"),document.querySelector(".switch_input").checked=!0):(document.querySelector("html").classList.remove("dark-mode"),document.querySelector(".switch_input").checked=!1)}window.addEventListener("load",()=>{const e=window.matchMedia("(prefers-color-scheme: dark-mode)"),t=e.matches?"dark-mode":"light";localStorage.theme=localStorage.theme||t,r(),document.querySelector(".switch_input").addEventListener("change",a=>{a.target.checked?(localStorage.setItem("theme","dark-mode"),r()):(localStorage.setItem("theme","light"),r())}),e.addEventListener("change",a=>{const s=a.matches?"dark-mode":"light";localStorage.theme=s,r()})});function m(){d.error({message:"Sorry, there are no books matching your search query. Please try again!",position:"topRight"})}async function u(e){return e.map(({author:t,book_image:o,title:a,description:s,_id:i})=>`<li class="books-item-about" id=${i} >  
    <div class="book-wrap"> 
    <img class="book-img" src="${o}"  alt="${s}"/> 
    </div> 
    <div class="book-info">  
    <p class="info-title">${a}</p>  
    <p class="info-author">${t}</p>  
    </div>  
    </li>`).join("")}async function h(e){return await Promise.all(e.map(async({list_name:t,books:o})=>` 
    <div class="container-books"> 
    <h3 class="book-categoty-title">${t}</h3> 
    <ul class='list-books'>${await u(o)}</ul>  
    <button class="book-button" data-js="${t}">See more</button> 
    </div> 
    `))}async function g(){const e=document.querySelector(".top-categories-list");try{const t=await n.get("https://books-backend.p.goit.global/books/top-books");e.insertAdjacentHTML("afterbegin",'<h2 class="categories-title">Best Sellers<span> Books</span></h2>');const o=await h(t.data);return e.insertAdjacentHTML("beforeend",o),t.data}catch(t){console.log(t.message),m()}}c();document.addEventListener("DOMContentLoaded",r);g();
//# sourceMappingURL=commonHelpers.js.map
