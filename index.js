import{a as g,S as y,i as p}from"./assets/vendor-DOgVoBmD.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const f=s=>`
    <li class="gallery-card">
        <a href="${s.largeImageURL}">
            <img class="gallery-img" src="${s.webformatURL}" alt="${s.tags}">
        </a>
        <div class="info-div">
            <div class="info-one-template">
                <p class="name">Likes</p>
                <p>${s.likes}</p>
            </div>
            <div class="info-one-template">
                <p class="name">Views</p>
                <p>${s.views}</p>
            </div>
            <div class="info-one-template">
                <p class="name">Comments</p>
                <p>${s.comments}</p>
            </div>
            <div class="info-one-template">
                <p class="name">Downloads</p>
                <p>${s.downloads}</p>
            </div>
        </div>
    </li>
    `;g.defaults.baseURL="https://pixabay.com";const L=async(s,e)=>{const a={params:{key:"45500129-782b0efec7a4b6e4cb35c382f",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}};return await g.get("/api/",a)},d=document.querySelector(".gallery"),c=document.querySelector(".search-form"),o=document.querySelector("span"),n=document.querySelector(".load-btn");let u=0,m=1,h="",v=new y(".gallery a");v.on("show.simplelightbox",function(){});const b=async s=>{try{if(s.preventDefault(),o.classList.remove("is-hidden"),h=c.elements.user_query.value,u=0,m=1,h===""){p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),d.innerHTML="",c.reset(),o.classList.add("is-hidden"),n.classList.add("is-hidden");return}const e=await L(h,m);if(e.data.hits.length===0){p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),d.innerHTML="",c.reset(),o.classList.add("is-hidden"),n.classList.add("is-hidden");return}u+=e.data.hits.length;const a=e.data.hits.map(i=>f(i)).join("");d.innerHTML=a,v.refresh(),n.classList.remove("is-hidden"),e.data.hits.length<15&&n.classList.add("is-hidden")}catch(e){p.error({message:e,position:"topRight"})}finally{o.classList.add("is-hidden")}c.reset()},w=async s=>{try{m++,o.classList.remove("is-hidden");const e=await L(h,m),a=e.data.hits.map(l=>f(l)).join("");d.insertAdjacentHTML("beforeend",a),u+=e.data.hits.length;let i=new y(".gallery a");i.refresh(),i.on("show.simplelightbox",function(){});const r=d.querySelector(".gallery-card").getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"}),u===e.data.totalHits&&(n.classList.add("is-hidden"),p.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(e){console.log(e)}finally{o.classList.add("is-hidden")}};c.addEventListener("submit",b);n.addEventListener("click",w);
//# sourceMappingURL=index.js.map
