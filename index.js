import{a as c,S as u,i as n}from"./assets/vendor-5YrzWRhu.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const d=c.create({baseURL:"https://pixabay.com/api/",params:{key:"51736098-e561806c369733f177830f298",q:"query",image_type:"photo",orientation:"horizontal",safesearch:!0}});function p(a){return d.get("",{params:{q:a}}).then(t=>t.data)}let i=document.querySelector(".gallery"),y=new u(".gallery a");function f(a){const t=a.map(r=>`<li class="gallery-item">
            <a class="gallery-link" href="${r.largeImageURL}">
            <img
            class="gallery-image"
            src="${r.webformatURL}"
            data-source="${r.largeImageURL}"
            alt="${r.tags}"
            />
            <div class = "gallery-box">
            <p class="gallery-box-text">Likes <span class="gallery-box-span">${r.likes}</span></p>
            <p class="gallery-box-text">Views <span class="gallery-box-span">${r.views}</span></p>
            <p class="gallery-box-text">Comments <span class="gallery-box-span">${r.comments}</span></p>
            <p class="gallery-box-text">Downloads <span class="gallery-box-span">${r.downloads}</span></p>
            </div>
            </a>
            </li>`).join("");i.insertAdjacentHTML("beforeend",t),y.refresh()}function m(){i.innerHTML=""}function g(){document.querySelector(".loader").classList.add("is-hidden")}function h(){document.querySelector(".loader").classList.remove("is-hidden")}const b=document.querySelector(".form");b.addEventListener("submit",async a=>{a.preventDefault();const t=a.target.elements.searchText.value.trim();if(!(t===""||t===" ")){m(),g();try{const r=await p(t);r.hits.length===0?n.error({message:"Sorry, there are no images matching your search query. Please try again!"}):f(r.hits)}catch{n.error({message:"An error occurred while fetching images. Please try again."})}finally{h()}}});
//# sourceMappingURL=index.js.map
