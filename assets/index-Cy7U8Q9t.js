(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function c(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=c(t);fetch(t.href,n)}})();function p(){const o=document.querySelector("#All"),e=document.querySelectorAll(".indeterminate");return{getCheckboxAll:()=>o,getCheckboxes:()=>e}}function h(){const o=p(),e=o.getCheckboxAll(),c=o.getCheckboxes(),s=[...c].length,t=[...c].filter(r=>r.checked).length;if(t===0){e.checked=!1,e.indeterminate=!1;return}const n=t===s;e.indeterminate=!n,e.checked=n}function y(){const o=p(),e=o.getCheckboxAll(),c=o.getCheckboxes();for(const s of c)s.addEventListener("click",()=>h());e.addEventListener("click",()=>{for(const s of c)s.checked=e.checked})}function l(){passwordLength=12,includesUpperCase=!1,inclucedNumbers=!1,inclucedSymbols=!1}function w(){const o=document.querySelector("#upper-checkbox"),e=document.querySelector("#lower-checkbox"),c=document.querySelector("#number-checkbox"),s=document.querySelector("#symbol-checkbox"),t=document.querySelector("#length");l.passwordLength=t.value,l.includesUpperCase=o.checked,l.includesLowerCase=e.checked,l.includesNumbers=c.checked,l.includesSymbols=s.checked}function u(o){const e=document.querySelector(".container"),c=document.createElement("div");c.classList.add("popup"),c.textContent=o,!e.querySelector(".popup")&&(setTimeout(()=>{c.classList.add("show")},20),e.append(c),setTimeout(()=>{c.classList.remove("show"),c.addEventListener("transitionend",()=>{c.remove()},{once:!0})},1500))}function g(){const o=document.querySelector("#input"),e=document.querySelector(".input-wrapper "),c=o.value.trim(),s=document.querySelector(".error-msg");if(!c){o.classList.add("error"),s.classList.add("show"),s.textContent="Brak hasła do skopiowania!";return}navigator.clipboard.writeText(c).then(()=>{u("Skopiowano"),e.classList.add("animate"),e.addEventListener("animationend",()=>{e.classList.remove("animate")})}).catch(()=>{u("Nie udało sie skopiować"),console.error("ERROR")})}function v(o,e,c,s,t){const n=document.querySelector("#input"),r=document.querySelector(".error-msg"),m="ABCDEFGHIJKLMNOPQRSTUVWXYZ",b="abcdefghijklmnopqrstuvwxyz",f="0123456789",k="!@#$%^&*()_+[]{}|;:,.<>?";let i="",a="";if(i+=e?b:"",i+=c?m:"",i+=s?f:"",i+=t?k:"",o<=4){n.classList.add("error"),r.classList.add("show"),r.textContent="Hasło musi mieć co najmniej 5 znaków";return}if(i.length===0){n.classList.add("error"),r.classList.add("show"),r.textContent="Musisz wybrać przynajmniej jedną wartość";return}for(let d=0;d<=o;d++){const x=Math.floor(Math.random()*i.length);a+=i[x]}n.classList.remove("error"),r.classList.remove("show"),n.value=a,n.classList.add("success")}function L(){const o=document.querySelector("#app"),e=document.createElement("section");e.classList.add("container"),e.innerHTML=`
<h1>
				Password Gnerator
				<img src="public/padlock.png" alt="" />
			</h1>

			<div class="input-container">
				<div class="input-wrapper">
					<input
						id="input"
						type="text"
						placeholder="Your Password will show here..."
						autocomplete="off"
						readonly />
					<i class="bx bx-copy copy-element"></i>
					<p class="error-msg"></p>
				</div>

				<button class="generate-bnt" id="generate-btn">
					<i class="bx bxs-magic-wand"></i>
				</button>
			</div>

			<h2>Choose Your Options</h2>
			<div class="checkboxes-container">
				<div class="check-wrapper">
					<input type="checkbox" id="All" />
					<label for="All">All Chars</label>
				</div>
				<div class="check-wrapper">
					<input
						type="checkbox"
						class="indeterminate"
						id="lower-checkbox"
						checked />
					<label for="lower-checkbox">aaa</label>
				</div>
				<div class="check-wrapper">
					<input type="checkbox" class="indeterminate" id="upper-checkbox" />
					<label for="upper-checkbox">AAA</label>
				</div>
				<div class="check-wrapper">
					<input type="checkbox" class="indeterminate" id="number-checkbox" />
					<label for="number-checkbox">123</label>
				</div>
				<div class="check-wrapper">
					<input type="checkbox" class="indeterminate" id="symbol-checkbox" />
					<label for="symbol-checkbox">?/&$</label>
				</div>
				<div class="number-wrapper">
					<input type="number" value="12" id="length" min="5" />
					<label for="length">Length</label>
				</div>
			</div>

`,o.append(e)}L();h();y();const C=document.querySelector("#generate-btn"),S=document.querySelector(".copy-element");C.addEventListener("click",()=>{w(),v(l.passwordLength,l.includesLowerCase,l.includesUpperCase,l.includesNumbers,l.includesSymbols)});S.addEventListener("click",g);
