import{a as i,i as d}from"./assets/vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();async function l(){const o="https://books-backend.p.goit.global/books/category-list";try{return(await i.get(o)).data}catch(t){console.error("Error fetching books:",t)}}async function u(){try{const o=await l(),t=document.querySelector(".categories-list_books");o.forEach(s=>{const n=document.createElement("li");n.classList.add("item-list_category");const e=document.createElement("a");e.textContent=s.list_name,e.href=`${s.list_name}`,e.classList.add("link_category-book"),n.appendChild(e),t.appendChild(n)})}catch(o){console.error("Error rendering categories:",o)}}document.addEventListener("DOMContentLoaded",u);const g=document.querySelector(".btn"),a="darkmode";g.addEventListener("click",m);function m(){const o=document.body,t=localStorage.getItem(a)==="true";o.classList.toggle("dark-mode",!t),localStorage.setItem(a,!t),console.log(localStorage.getItem(a))}function f(){document.body.classList.toggle("dark-mode",localStorage.getItem(a)==="true")}function p(){d.error({message:"Sorry, there are no books matching your search query. Please try again!",position:"topRight"})}async function b(o){return o.map(({author:t,book_image:s,title:n,description:e,_id:r})=>`<li class="books-item-about" id=${r} >  
    <div class="book-wrap"> 
    <img class="book-img" src="${s}"  alt="${e}"/> 
    </div> 
    <div class="book-info">  
    <p class="info-title">${n}</p>  
    <p class="info-author">${t}</p>  
    </div>  
    </li>`).join("")}async function y(o){return await Promise.all(o.map(async({list_name:t,books:s})=>` 
    <div class="container-books"> 
    <h3 class="book-categoty-title">${t}</h3> 
    <ul class='list-books'>${await b(s)}</ul>  
    <button class="book-button" data-js="${t}">See more</button> 
    </div> 
    `))}async function k(){const o=document.querySelector(".top-categories-list");try{const t=await i.get("https://books-backend.p.goit.global/books/top-books");o.insertAdjacentHTML("afterbegin",'<h2 class="categories-title">Best Sellers<span> Books</span></h2>');const s=await y(t.data);return o.insertAdjacentHTML("beforeend",s),t.data}catch(t){console.log(t.message),p()}}l();document.addEventListener("DOMContentLoaded",f);k();
//# sourceMappingURL=commonHelpers.js.map
