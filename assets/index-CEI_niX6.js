(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();function f(){const t=document.querySelector("#All"),e=document.querySelectorAll(".indeterminate");return{getCheckboxAll:()=>t,getCheckboxes:()=>e}}function g(){const t=f(),e=t.getCheckboxAll(),o=t.getCheckboxes(),n=[...o].length,s=[...o].filter(l=>l.checked).length;if(s===0){e.checked=!1,e.indeterminate=!1;return}const r=s===n;e.indeterminate=!r,e.checked=r}function x(){const t=f(),e=t.getCheckboxAll(),o=t.getCheckboxes();for(const n of o)n.addEventListener("click",()=>g());e.addEventListener("click",()=>{for(const n of o)n.checked=e.checked})}const c={passwordLength:12,includesLowerCase:!0,includesUpperCase:!1,includesNumbers:!1,includesSymbols:!1,passwordStrength:0,progressInterval:null};function y(){const t=document.querySelector("#upper-checkbox"),e=document.querySelector("#lower-checkbox"),o=document.querySelector("#number-checkbox"),n=document.querySelector("#symbol-checkbox"),s=document.querySelector("#length");c.passwordLength=s.value,c.includesUpperCase=t.checked,c.includesLowerCase=e.checked,c.includesNumbers=o.checked,c.includesSymbols=n.checked}function b(t){const e=document.querySelector(".container"),o=document.createElement("div");o.classList.add("popup"),o.textContent=t,!e.querySelector(".popup")&&(setTimeout(()=>{o.classList.add("show")},20),e.append(o),setTimeout(()=>{o.classList.remove("show"),o.addEventListener("transitionend",()=>{o.remove()},{once:!0})},1500))}function v(){const t=document.querySelector("#input"),e=document.querySelector(".input-wrapper "),o=t.value.trim(),n=document.querySelector(".error-msg");if(!o){t.classList.add("error"),n.classList.add("show"),n.textContent="Brak hasła do skopiowania!";return}navigator.clipboard.writeText(o).then(()=>{b("Skopiowano"),e.classList.add("animate"),e.addEventListener("animationend",()=>{e.classList.remove("animate")})}).catch(()=>{b("Nie udało sie skopiować"),console.error("ERROR")})}function w(t,e,o,n,s){const r=document.querySelector("#input"),l=document.querySelector(".error-msg"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZ",i="abcdefghijklmnopqrstuvwxyz",u="0123456789",h="!@#$%^&*()_+[]{}|;:,.<>?";let d="",p="";if(d+=e?i:"",d+=o?a:"",d+=n?u:"",d+=s?h:"",t<=4){r.classList.add("error"),l.classList.add("show"),l.textContent="Hasło musi mieć co najmniej 5 znaków";return}if(d.length===0){r.classList.add("error"),l.classList.add("show"),l.textContent="Musisz wybrać przynajmniej jedną wartość";return}for(let m=0;m<=t;m++){const k=Math.floor(Math.random()*d.length);p+=d[k]}r.classList.remove("error"),l.classList.remove("show"),r.value=p,r.classList.add("success")}function C(){const t=document.querySelector("#app"),e=document.createElement("section");e.classList.add("container"),e.innerHTML=`
<h1>
				Password Gnerator
				<img src="./padlock.png" alt="generate-icon" />			</h1>

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
					<input type="number" value="6" id="length" min="5" />
					<label for="length">Length</label>
				</div>
			</div>

`,t.append(e)}function L(){const t=document.querySelector(".strength-progress-box");t&&t.remove();const e=document.createElement("section");e.classList.add("strength-progress-box"),e.innerHTML=`
    <div class="strength-container">
				<div class="strength-progress">
					<span class="strength-value">0%</span>
				</div>
				<p class="strength-label">Siła hasła</p>
			</div>
    `,document.body.append(e),setTimeout(()=>{e.classList.add("show")},10)}function S(t,e,o,n,s){const r=document.querySelector(".strength-progress"),l=document.querySelector(".strength-value"),a=document.querySelector(".strength-label");let i=0,u=0,h=10;if(!r||!l)return;c.progressInterval&&clearInterval(c.progressInterval),l.textContent="0",r.style.background="conic-gradient(#3399ff 0deg, #121212 0deg)",t>=6&&(i+=10),t>=8&&(i+=20),t>=9&&(i+=15),t>=17&&(i+=10),t>=19&&(i+=10),e&&(i+=10),o&&(i+=10),n&&(i+=15),s&&(i+=20),i<=30?(a.textContent="Low",a.style.color=" #74b9ffff"):i<=70?(a.textContent="Almost Good",a.style.color=" #359affff"):(a.textContent="Perfect!!",a.style.color="#0163c5ff",a.style.textDecoration="overline"),c.passwordStrength=i;let d=i,p=setInterval(()=>{u++,l.textContent=`${u}%`,r.style.background=`conic-gradient(#3399ff ${u*3.6}deg, #121212 0deg)`,u===d&&clearInterval(p)},h);c.progressInterval=p}C();g();x();const q=document.querySelector("#generate-btn"),A=document.querySelector(".copy-element");q.addEventListener("click",()=>{y(),w(c.passwordLength,c.includesLowerCase,c.includesUpperCase,c.includesNumbers,c.includesSymbols),L(),S(c.passwordLength,c.includesLowerCase,c.includesUpperCase,c.includesNumbers,c.includesSymbols)});A.addEventListener("click",v);
