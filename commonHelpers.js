import{a as i,i as u}from"./assets/vendor-8cce9181.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();async function d(){const o="https://books-backend.p.goit.global/books/category-list";try{return(await i.get(o)).data}catch(e){console.error("Error fetching books:",e)}}async function g(){try{const o=await d(),e=document.querySelector(".categories-list_books");o.forEach(s=>{const n=document.createElement("li");n.classList.add("item-list_category");const t=document.createElement("a");t.textContent=s.list_name,t.href=`${s.list_name}`,t.classList.add("link_category-book"),n.appendChild(t),e.appendChild(n)})}catch(o){console.error("Error rendering categories:",o)}}document.addEventListener("DOMContentLoaded",g);const m=document.querySelector(".btn"),a="darkmode";m.addEventListener("click",p);function p(){const o=document.body,e=localStorage.getItem(a)==="true";o.classList.toggle("dark-mode",!e),localStorage.setItem(a,!e),console.log(localStorage.getItem(a))}function f(){document.body.classList.toggle("dark-mode",localStorage.getItem(a)==="true")}function l(){u.error({message:"Sorry, there are no books matching your search query. Please try again!",position:"topRight"})}async function b(o){return await o.data.map(({list_name:e})=>`<li class="category-item" data-category="${e}">${e}</li>`).join("")}async function y(o){return o.map(({author:e,book_image:s,title:n,description:t,_id:r})=>`<li class="books-item-about" id=${r} >  
    <div class="book-wrap"> 
    <img class="book-img" src="${s}"  alt="${t}"/> 
    </div> 
    <div class="book-info">  
    <p class="info-title">${n}</p>  
    <p class="info-author">${e}</p>  
    </div>  
    </li>`).join("")}async function k(o){return await Promise.all(o.map(async({list_name:e,books:s})=>` 
    <div class="container-books"> 
    <h3 class="book-categoty-title">${e}</h3> 
    <ul class='list-books'>${await y(s)}</ul>  
    <button class="book-button" data-js="${e}">See more</button> 
    </div> 
    `))}async function h(){const o=document.querySelector(".top-categories-list");try{const e=await i.get("https://books-backend.p.goit.global/books/category-list");o.insertAdjacentHTML("beforeend",b(e))}catch(e){console.log(e.message),l()}try{const e=await i.get("https://books-backend.p.goit.global/books/top-books");return o.insertAdjacentHTML("afterbegin",'<h2 class="categories-title">Best Sellers<span> Books</span></h2>'),o.insertAdjacentHTML("beforeend",await k(e.data)).join(""),e.data}catch(e){console.log(e.message),l()}}d();document.addEventListener("DOMContentLoaded",f);h();
//# sourceMappingURL=commonHelpers.js.map
