
document.addEventListener('DOMContentLoaded',()=>{
 const root=document.querySelector('[data-menu-page]'); if(!root||!window.menuData)return;
 const key=root.getAttribute('data-menu-page'), data=window.menuData[key]; if(!data)return;
 document.querySelector('[data-title]').textContent=data.title;
 document.querySelector('[data-subtitle]').textContent=data.subtitle;
 document.querySelector('[data-list]').innerHTML=data.items.map(([n,d,p])=>`<article class="item"><div><h4>${n}</h4><p>${d}</p></div><div class="price">${p}</div></article>`).join('');
});
