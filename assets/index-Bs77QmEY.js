(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function c(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=c(o);fetch(o.href,s)}})();function f(){const t=document.querySelector("#All"),e=document.querySelectorAll(".indeterminate");return{getCheckboxAll:()=>t,getCheckboxes:()=>e}}function g(){const t=f(),e=t.getCheckboxAll(),c=t.getCheckboxes(),r=[...c].length,o=[...c].filter(i=>i.checked).length;if(o===0){e.checked=!1,e.indeterminate=!1;return}const s=o===r;e.indeterminate=!s,e.checked=s}function x(){const t=f(),e=t.getCheckboxAll(),c=t.getCheckboxes();for(const r of c)r.addEventListener("click",()=>g());e.addEventListener("click",()=>{for(const r of c)r.checked=e.checked})}const n={passwordLength:12,includesLowerCase:!0,includesUpperCase:!1,includesNumbers:!1,includesSymbols:!1,passwordStrength:0,progressInterval:null};function v(){const t=document.querySelector("#upper-checkbox"),e=document.querySelector("#lower-checkbox"),c=document.querySelector("#number-checkbox"),r=document.querySelector("#symbol-checkbox"),o=document.querySelector("#length");n.passwordLength=o.value,n.includesUpperCase=t.checked,n.includesLowerCase=e.checked,n.includesNumbers=c.checked,n.includesSymbols=r.checked}function b(t){const e=document.querySelector(".container"),c=document.createElement("div");c.classList.add("popup"),c.textContent=t,!e.querySelector(".popup")&&(setTimeout(()=>{c.classList.add("show")},20),e.append(c),setTimeout(()=>{c.classList.remove("show"),c.addEventListener("transitionend",()=>{c.remove()},{once:!0})},1500))}function k(){const t=document.querySelector("#input"),e=document.querySelector(".input-wrapper "),c=t.value.trim(),r=document.querySelector(".error-msg");if(!c){t.classList.add("error"),r.classList.add("show"),r.textContent="No password to copy!";return}navigator.clipboard.writeText(c).then(()=>{b("Skopiowano"),e.classList.add("animate"),e.addEventListener("animationend",()=>{e.classList.remove("animate")})}).catch(()=>{b("Copying failed"),console.error("ERROR")})}function C(t,e,c,r,o){const s=document.querySelector("#input"),i=document.querySelector(".error-msg"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZ",l="abcdefghijklmnopqrstuvwxyz",u="0123456789",p="!@#$%^&*()_+[]{}|;:,.<>?";let d="",h="";if(d+=e?l:"",d+=c?a:"",d+=r?u:"",d+=o?p:"",t<=4){s.classList.remove("success"),s.classList.add("error"),s.value="",i.classList.add("show"),i.textContent="Password must be at least 5 characters long";return}if(d.length===0){s.classList.remove("success"),s.classList.add("error"),s.value="",i.classList.add("show"),i.textContent="You must select at least one option";return}for(let m=0;m<t;m++){const y=Math.floor(Math.random()*d.length);h+=d[y]}s.classList.remove("error"),i.classList.remove("show"),s.value=h,s.classList.add("success")}function w(){const t=document.querySelector("#app"),e=document.createElement("section");e.classList.add("container"),e.innerHTML=`
<h1>
				Password Gnerator
				<img src="./padlock.png" alt="generate-icon" />			</h1>

			<div class="input-container">
				<div class="input-wrapper">
					<input
						id="input"
						type="text"
						placeholder="Just Generate..."
						autocomplete="off"
						readonly />
						<p class="error-msg"></p>
						<button class="copy-element" id="copy-element">
							<i class="bx bx-copy copy-icon"></i>
						</button>
						<button class="generate-bnt" id="generate-btn">
							<i class="bx bxs-magic-wand"></i>
						</button>
						</div>
						
						
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
					<input type="number" value="6" id="length" min="5" />
					<label for="length">Length</label>
				</div>
			</div>

`,t.append(e)}function L(){if(document.querySelector(".strength-progress-box"))return;const e=document.createElement("section");e.classList.add("strength-progress-box"),e.innerHTML=`
    <div class="strength-container">
				<div class="strength-progress">
					<span class="strength-value">0%</span>
				</div>
				<p class="strength-label">Siła hasła</p>
			</div>
    `,document.body.append(e),setTimeout(()=>{e.classList.add("show")},10)}function S(t,e,c,r,o){const s=document.querySelector(".strength-progress"),i=document.querySelector(".strength-value"),a=document.querySelector(".strength-label");if(!s||!i)return;let l=0,u=0,p=15;n.progressInterval&&(clearInterval(n.progressInterval),n.progressInterval=null),i.textContent="0",s.style.background="conic-gradient(#3399ff 0deg, #121212 0deg)",t>=6&&(l+=10),t>=8&&(l+=20),t>=9&&(l+=15),t>=17&&(l+=10),t>=19&&(l+=10),e&&(l+=10),c&&(l+=10),r&&(l+=15),o&&(l+=20),l=Math.min(l,100),l<=30?(a.textContent="Low",a.style.color=" #74b9ffff",a.style.textDecoration="none"):l<=70?(a.textContent="Almost Good",a.style.color=" #359affff",a.style.textDecoration="none"):(a.textContent="Perfect!!",a.style.color="#0163c5ff",a.style.textDecoration="overline"),n.passwordStrength=l;let d=l;n.progressInterval=setInterval(()=>{u++,i.textContent=`${u}%`,s.style.background=`conic-gradient(#3399ff ${u*3.6}deg, #121212 0deg)`,u>=d&&(clearInterval(n.progressInterval),n.progressInterval=null)},p)}w();g();x();const q=document.querySelector("#generate-btn"),A=document.querySelector(".copy-element");q.addEventListener("click",()=>{v();const t=!n.includesLowerCase&&!n.includesUpperCase&&!n.includesNumbers&&!n.includesSymbols;C(n.passwordLength,n.includesLowerCase,n.includesUpperCase,n.includesNumbers,n.includesSymbols),!t&&(L(),S(n.passwordLength,n.includesLowerCase,n.includesUpperCase,n.includesNumbers,n.includesSymbols))});A.addEventListener("click",k);
