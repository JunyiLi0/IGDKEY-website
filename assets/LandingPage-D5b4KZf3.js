import{j as e,r,_ as I,L as P}from"./index-DCN7oTW9.js";import{N as T}from"./NavBar-CqbCDOA6.js";import{w as L,e as q,F as D}from"./Footer-BZrW74_B.js";import{T as y}from"./TitleHeader-Dzr_js28.js";import{c as v,C as $}from"./check-gwRSfRTU.js";import{S as _}from"./shield-check-F1N6rFHQ.js";import{L as R}from"./lock-keyhole-CPZ-4DVV.js";const F=()=>null,S=({text:c,className:d,id:l})=>{const m=p=>{p.preventDefault();const x=document.getElementById(l);if(x&&l){const u=window.innerHeight*.15,t=x.getBoundingClientRect().top+window.pageYOffset-u;window.scrollTo({top:t,behavior:"smooth"})}};return e.jsx("a",{onClick:m,className:`${d??""} cta-wrapper group`,children:e.jsx("div",{className:"cta-button",children:e.jsx("p",{className:"button-text",children:c})})})},B=({children:c,className:d=""})=>{const l=r.useRef(null),[m,p]=r.useState({x:0,y:0}),[x,u]=r.useState({x:50,y:50}),[t,s]=r.useState(!1),o=r.useRef(null),a=r.useRef(null),n=r.useRef({x:0,y:0}),f=g=>{const j=l.current;if(!j)return;const h=o.current??j.getBoundingClientRect();o.current=h,n.current={x:g.clientX-h.left,y:g.clientY-h.top},!a.current&&(a.current=window.requestAnimationFrame(()=>{a.current=null;const{x:N,y:w}=n.current,k=h.width/2,A=h.height/2,M=(w-A)/A*-10,z=(N-k)/k*10;p({x:M,y:z}),u({x:N/h.width*100,y:w/h.height*100})}))},i=()=>{s(!0),l.current&&(o.current=l.current.getBoundingClientRect())},b=()=>{p({x:0,y:0}),s(!1),o.current=null,a.current&&(window.cancelAnimationFrame(a.current),a.current=null)};return r.useEffect(()=>{const g=()=>{o.current=l.current?l.current.getBoundingClientRect():null};return window.addEventListener("resize",g,{passive:!0}),()=>{window.removeEventListener("resize",g),a.current&&window.cancelAnimationFrame(a.current)}},[]),e.jsxs("div",{ref:l,onMouseMove:f,onMouseEnter:i,onMouseLeave:b,className:`relative transform-gpu transition-all duration-300 ease-out group ${d}`,style:{transform:`perspective(1000px) rotateX(${m.x}deg) rotateY(${m.y}deg)`},children:[e.jsx("div",{className:"absolute inset-0 bg-onyx rounded-2xl border-2 border-dusty-grape shadow-xl overflow-hidden transition-colors duration-300 group-hover:border-pale-sky",children:e.jsx("div",{className:"absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",style:{background:`radial-gradient(600px circle at ${x.x}% ${x.y}%, rgba(138, 148, 166, 0.15), transparent 40%)`}})}),e.jsx("div",{className:"relative z-10 h-full w-full",children:c})]})},C=[{src:"/images/partenaires-igdkey/efrei-logo.webp",alt:"Efrei"},{src:"/images/partenaires-igdkey/france-2030-logo.png",alt:"France 2030"},{src:"/images/partenaires-igdkey/logo-neorecoovre-scaled.png",alt:"Neorecoovre"},{src:"/images/partenaires-igdkey/logo-veoma-1.webp",alt:"Veoma"},{src:"/images/partenaires-igdkey/permabilis-logo.png",alt:"Permabilis"},{src:"/images/partenaires-igdkey/logo_panthéon_assas.png",alt:"Panthéon Assas"},{src:"/images/partenaires-igdkey/logo_v2-1.png",alt:"Partenaire"},{src:"/images/partenaires-igdkey/universite-paris-cite-logo.png",alt:"Université Paris Cité"},{src:"/images/partenaires-igdkey/bforge-logo.png",alt:"BForge"}],O=()=>e.jsx("div",{className:"trust-band md:mt-20 mt-10",children:e.jsx("div",{className:"trust-carousel",children:e.jsx("div",{className:"trust-carousel-track",children:[...C,...C].map((c,d)=>e.jsx("div",{className:"trust-logo-item",children:e.jsx("img",{src:c.src,alt:c.alt,loading:"lazy"})},d))})})});/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],G=v("arrow-up-right",V);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],Y=v("building-2",H);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]],K=v("crosshair",W);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],E=v("external-link",X);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]],Q=v("gauge",U);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=[["path",{d:"M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0",key:"11u0oz"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712",key:"q8zwxj"}]],Z=v("map-pinned",J);/**
 * @license lucide-react v0.577.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=[["path",{d:"M11 17h3v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a3.16 3.16 0 0 0 2-2h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1a5 5 0 0 0-2-4V3a4 4 0 0 0-3.2 1.6l-.3.4H11a6 6 0 0 0-6 6v1a5 5 0 0 0 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z",key:"1piglc"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M2 8v1a2 2 0 0 0 2 2h1",key:"1env43"}]],te=v("piggy-bank",ee),se=[{Icon:Q,title:"Productivité accrue",desc:"Plus de résultats en moins de temps",iconColor:"text-cyan-400",glowFrom:"from-cyan-400/15",glowTo:"to-cyan-900/25",border:"border-cyan-400/40",hoverBorder:"group-hover:border-cyan-400/50"},{Icon:G,title:"Revenus Boostés",desc:"Convertissez plus, vendez mieux",iconColor:"text-emerald-400",glowFrom:"from-emerald-400/15",glowTo:"to-emerald-900/25",border:"border-emerald-400/40",hoverBorder:"group-hover:border-emerald-400/50"},{Icon:K,title:"Avantage Décisif",desc:"Dépassez vos concurrents",iconColor:"text-amber-400",glowFrom:"from-amber-400/15",glowTo:"to-amber-900/25",border:"border-amber-400/40",hoverBorder:"group-hover:border-amber-400/50"}],ne=[{name:"STARTER",audience:"TPE · PME · Startup",subtitle:"Qui veulent avancer vite, éliminer les tâches chronophages et capter leurs premiers gains de productivité, jusqu'à 30 % dès les premiers mois.",price:"À partir de 3 000 €",color:"cyan",features:["Cadrage rapide du besoin","Définition d'un cas d'usage principal","Déploiement initial","Documentation + prise en main"],modules:["LLM / IA Générative","Chatbot","Site Web Intelligent","Application Intelligente","Automatisation (flux simple)"],unavailable:["Agent IA non disponible","Auto-hébergement non disponible"]},{name:"SCALE",audience:"PME structurée · ETI",subtitle:"Qui souhaitent booster leurs indicateurs de performance en connectant l'IA directement à leurs outils du quotidien (CRM, ERP, bases de données).",price:"À partir de 8 000 €",featured:!0,color:"violet",features:["Cadrage approfondi","Conception de l'architecture technique","1 à 2 cas d'usage intégrés","Intégration aux outils existants","Mise en production"],modules:["LLM / IA Générative avancée","Chatbot connecté","Site Web Intelligent","Application métier IA","Automatisation flux complexes","Agent IA (1 à 3 agents)","Auto-hébergement (option)"]},{name:"CORE",audience:"ETI · Grand Compte",subtitle:"Pour qui la sécurité des données, la maîtrise de la propriété intellectuelle et le retour sur investissement à grande échelle sont essentiels.",price:"À partir de 20 000 €",color:"emerald",features:["Audit complet (technique + business)","Conception sur mesure","Architecture scalable","Déploiement multi-cas d'usage","Pilotage projet"],modules:["LLM / IA sur mesure","Chatbot avancé omnicanal","Applications métier critiques","Automatisation complète","Agents IA multi-agents","Auto-hébergement sécurisé","Fine-tuning & optimisation continue"]}],xe=()=>{const c=r.useRef(null),d=r.useRef(null),l=r.useRef(null),m=r.useRef(null),p=r.useRef(null),x=r.useRef(null),u=r.useRef(null);return r.useEffect(()=>{let t=!1;const s=window.requestIdleCallback??(n=>window.setTimeout(n,500)),o=window.cancelIdleCallback??(n=>window.clearTimeout(n)),a=s(async()=>{try{const n=await I(()=>import("./index-DYOH8PGY.js"),[],import.meta.url),f=await I(()=>import("./ScrollTrigger-B8Wtmuvt.js"),[],import.meta.url);if(t)return;const i=n.gsap??n.default??n,b=f.ScrollTrigger;if(i.registerPlugin(b),window.__gsap=i,window.__ScrollTrigger=b,c.current&&i.from(c.current,{opacity:0,y:50,duration:1.5,ease:"power3.out"}),d.current&&i.from(d.current,{opacity:0,y:50,duration:1,scrollTrigger:{trigger:d.current,start:"top 80%"}}),l.current){const g=i.utils.toArray(".engagement-card");i.fromTo(g,{y:40,opacity:0,scale:.95},{y:0,opacity:1,scale:1,duration:.7,stagger:.12,ease:"power2.out",scrollTrigger:{trigger:l.current,start:"top 80%"}})}m.current&&i.fromTo(".service-card",{scale:.8,opacity:0},{scale:1,opacity:1,duration:.6,stagger:.1,scrollTrigger:{trigger:m.current,start:"top 85%"}}),p.current&&i.fromTo(".audience-card",{scale:.8,opacity:0},{scale:1,opacity:1,duration:.5,stagger:.05,scrollTrigger:{trigger:p.current,start:"top 95%"}}),x.current&&i.fromTo(".investment-item",{scale:.8,opacity:0},{scale:1,opacity:1,duration:.6,stagger:.1,scrollTrigger:{trigger:x.current,start:"top 95%"}}),u.current&&i.from(u.current,{opacity:0,scale:.9,duration:.8,scrollTrigger:{trigger:u.current,start:"top 85%"}})}catch(n){console.warn("GSAP deferred load failed:",n)}},{timeout:2500});return()=>{t=!0,o(a)}},[]),e.jsxs(e.Fragment,{children:[e.jsx(T,{}),e.jsxs("section",{id:"hero",className:"relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-dusty-grape/20 rounded-full blur-[100px] -z-10"}),e.jsx("div",{ref:c,className:"hero-container",children:e.jsx("div",{className:"hero-content-wrapper",children:e.jsxs("header",{className:"hero-header",children:[e.jsxs("div",{className:"space-y-6",children:[e.jsx("h1",{className:"hero-title text-1xl",children:e.jsxs("div",{className:"hero-text-animated",children:[e.jsx("div",{className:"flex items-center justify-center gap-3",children:e.jsx("span",{className:"slide",children:e.jsx("span",{className:"wrapper",children:L.map((t,s)=>e.jsx("span",{className:"bg-gradient-to-r from-pale-sky via-white to-dusty-grape bg-clip-text text-transparent",children:t.text},s))})})}),e.jsxs("div",{className:"mt-2 text-center ",children:[e.jsx("span",{className:"text-[55px]",children:"Votre Entreprise avec votre"}),e.jsx("br",{}),e.jsx("span",{className:"text-[45px] bg-gradient-to-r from-pale-sky via-white to-dusty-grape bg-clip-text text-transparent font-semibold",children:"IA auto hébergée et sécurisée"})]})]})}),e.jsx("p",{className:"hero-subtitle font-bold",children:"L'agence qui fusionne vos technologies avec celles de demain"})]}),e.jsx("div",{className:"hero-cta-wrapper flex flex-col md:flex-row gap-4",children:e.jsx(S,{text:"Découvrir notre programme ENOR.IA",className:"md:w-auto w-full h-14",id:"services"})})]})})}),e.jsx(F,{})]}),e.jsxs("section",{className:"padding-x-lg overflow-hidden",children:[e.jsxs("div",{ref:d,className:"w-full mb-32 relative",children:[e.jsx("div",{className:"absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-pale-sky/10 rounded-full blur-[80px] -z-10"}),e.jsxs("div",{className:"max-w-4xl mx-auto text-center",children:[e.jsxs("h2",{className:"text-white font-bold md:text-5xl text-4xl mb-8 leading-tight",children:["Transformez Votre Entreprise Avec"," ",e.jsx("span",{className:"bg-gradient-to-r from-pale-sky via-white to-dusty-grape bg-clip-text text-transparent",children:"l'Intelligence Artificielle"})]}),e.jsx("p",{className:"text-slate-grey md:text-xl text-lg leading-relaxed max-w-3xl mx-auto mb-10",children:"L'IA n'est plus une option. C'est l'avantage concurrentiel qui sépare les leaders du reste. Nous déployons des solutions intelligentes qui travaillent pour vous 24/7."}),e.jsx("div",{className:"w-full p-1 rounded-2xl bg-gradient-to-r from-dusty-grape via-pale-sky to-dusty-grape",children:e.jsx("div",{className:"bg-onyx rounded-xl px-6 py-8 md:px-12",children:e.jsx("p",{className:"text-mint-cream md:text-2xl text-xl font-semibold",children:"Notre mission : gagner du temps, réduire vos coûts, augmenter vos revenus."})})})]})]}),e.jsxs("div",{className:"w-full mb-32",children:[e.jsx(y,{title:"Ils Nous Font Confiance"}),e.jsx(O,{})]}),e.jsxs("div",{ref:l,className:"w-full mb-32",children:[e.jsx(y,{title:"Nos Engagements"}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto mt-16",children:q.map(({imgPath:t,title:s,desc:o,featured:a,wide:n})=>e.jsx(B,{className:`engagement-card ${a?"md:row-span-2":n?"md:col-span-2 lg:col-span-3":""}`,children:a?e.jsxs("div",{className:"relative p-8 h-full flex flex-col",children:[e.jsx("div",{className:"absolute inset-0 bg-[url('/images/noise.svg')] opacity-[0.03] pointer-events-none rounded-2xl"}),e.jsx("div",{className:"w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-dusty-grape/30 to-pale-sky/10 flex items-center justify-center",children:e.jsx("img",{src:t,alt:s,className:"w-10 h-10"})}),e.jsx("h3",{className:"text-white text-2xl lg:text-3xl font-bold mb-4",children:s}),e.jsx("p",{className:"text-slate-grey text-lg leading-relaxed flex-grow",children:o}),e.jsx("div",{className:"mt-6 w-16 h-1 rounded-full bg-gradient-to-r from-pale-sky to-dusty-grape group-hover:w-24 transition-all duration-500"})]}):n?e.jsxs("div",{className:"p-6 h-full flex items-center gap-6",children:[e.jsx("div",{className:"w-12 h-12 flex-shrink-0 rounded-xl bg-dusty-grape/20 flex items-center justify-center group-hover:bg-dusty-grape/40 transition-colors duration-300",children:e.jsx("img",{src:t,alt:s,className:"w-7 h-7"})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-white text-xl font-bold mb-1",children:s}),e.jsx("p",{className:"text-slate-grey text-base leading-relaxed group-hover:text-pale-sky transition-colors duration-300",children:o})]})]}):e.jsxs("div",{className:"p-6 h-full flex flex-col",children:[e.jsx("div",{className:"w-12 h-12 mb-5 rounded-xl bg-dusty-grape/20 flex items-center justify-center group-hover:bg-dusty-grape/40 transition-colors duration-300",children:e.jsx("img",{src:t,alt:s,className:"w-7 h-7"})}),e.jsx("h3",{className:"text-white text-xl font-bold mb-3",children:s}),e.jsx("p",{className:"text-slate-grey text-base leading-relaxed group-hover:text-pale-sky transition-colors duration-300",children:o})]})},s))})]}),e.jsxs("section",{className:"relative overflow-hidden py-0",children:[e.jsx("div",{className:`
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[700px]
            h-[700px]
            bg-pale-sky/10
            rounded-full
            blur-[120px]
            -z-10
          `}),e.jsxs("div",{className:"max-w-6xl mx-auto px-6 text-center",children:[e.jsxs("h2",{className:`
              text-white
              text-5xl
              md:text-6xl
              font-bold
              leading-tight
            `,children:["Découvrez nos",e.jsx("span",{className:`
                block
                bg-gradient-to-r
                from-pale-sky
                via-white
                to-dusty-grape
                bg-clip-text
                text-transparent
              `,children:"solutions IA sur mesure"})]}),e.jsx("p",{className:`
              text-slate-grey
              text-lg
              md:text-xl
              max-w-3xl
              mx-auto
              mt-8
              leading-relaxed
            `,children:"Des solutions d'intelligence artificielle conçues pour automatiser vos processus, améliorer vos performances et protéger vos données."}),e.jsxs("div",{className:`
              grid
              lg:grid-cols-2
              gap-8
              mt-16
            `,children:[e.jsxs("div",{className:`
                card
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-dusty-grape/40
                bg-gradient-to-br
                from-onyx
                via-[#11131A]
                to-onyx
                backdrop-blur-xl
                p-10
                text-left
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-pale-sky/50
              `,children:[e.jsx("div",{className:"glow"}),e.jsx("span",{className:`
                      block
                      text-center
                      text-pale-sky
                      uppercase
                      tracking-[0.25em]
                      font-semibold
                    `,children:"ENOR.IA"}),e.jsxs("h3",{className:`
                      text-white
                      text-4xl
                      font-bold
                      mt-5
                    `,children:["Déployez une",e.jsxs("span",{className:`
                        bg-gradient-to-r
                        from-pale-sky
                        to-dusty-grape
                        bg-clip-text
                        text-transparent
                      `,children:[" ","IA adaptée à votre métier"]})]}),e.jsx("p",{className:`
                      text-slate-grey
                      mt-6
                      leading-relaxed
                    `,children:"Des agents IA, chatbots intelligents et automatisations conçus pour répondre aux besoins spécifiques de votre entreprise."}),e.jsx("div",{className:`
                      grid
                      grid-cols-2
                      gap-4
                      mt-8
                    `,children:["Agents IA","Chatbots","Automatisation","Machine Learning","Sites intelligents"].map((t,s)=>e.jsx("div",{className:`
                            rounded-xl
                            border
                            border-white/10
                            bg-black/20
                            p-4
                            text-white
                            text-center
                            text-sm
                            ${s===4?"col-span-2":""}
                          `,children:t},t))}),e.jsx("div",{className:"flex justify-center mt-10 relative z-50",children:e.jsx(P,{to:"/ENOR_IA",className:`
                          relative
                          z-50
                          inline-flex
                          items-center
                          justify-center
                          px-8
                          py-4
                          rounded-xl
                          bg-pale-sky
                          text-onyx
                          font-semibold
                          cursor-pointer
                          transition-all
                          duration-300
                          hover:bg-dusty-grape
                          hover:text-white
                          hover:scale-105
                        `,children:"Découvrir ENOR.IA"})})]}),e.jsxs("div",{className:`
                card
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-dusty-grape/40
                bg-gradient-to-br
                from-onyx
                via-[#11131A]
                to-onyx
                backdrop-blur-xl
                p-10
                text-left
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-pale-sky/50
              `,children:[e.jsx("div",{className:"glow"}),e.jsx("span",{className:`
                  block
                  text-center
                  text-pale-sky
                  uppercase
                  tracking-[0.25em]
                  font-semibold
                `,children:"CONSULTING IA"}),e.jsxs("h3",{className:`
                  text-white
                  text-4xl
                  font-bold
                  mt-5
                `,children:["Construisez votre",e.jsxs("span",{className:`
                    bg-gradient-to-r
                    from-pale-sky
                    to-dusty-grape
                    bg-clip-text
                    text-transparent
                  `,children:[" ","stratégie IA"]})]}),e.jsx("p",{className:`
                  text-slate-grey
                  mt-6
                  leading-relaxed
                `,children:"Nous vous accompagnons dans l'identification des cas d’usage, la conception de votre architecture IA et son déploiement."}),e.jsx("div",{className:`
                  grid
                  grid-cols-2
                  gap-4
                  mt-8
                `,children:["Audit IA","Roadmap","ROI","Sécurité","Accompagnement","KPI"].map(t=>e.jsx("div",{className:`
                        rounded-xl
                        border
                        border-white/10
                        bg-black/20
                        p-4
                        text-white
                        text-center
                        text-sm
                      `,children:t},t))}),e.jsx("div",{className:"flex justify-center mt-10 relative z-50",children:e.jsx("a",{href:"/Contact",className:`
                          relative
                          z-50
                          inline-flex
                          items-center
                          justify-center
                          px-8
                          py-4
                          rounded-xl
                          bg-pale-sky
                          text-onyx
                          font-semibold
                          cursor-pointer
                          transition-all
                          duration-300
                          hover:bg-dusty-grape
                          hover:text-white
                          hover:scale-105
                  `,children:"Parler à un expert IA"})})]})]})]})]}),e.jsxs("section",{ref:m,id:"services",className:"relative w-full py-24 md:py-32 overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 -z-10 flex justify-center",children:e.jsx("div",{className:"w-[900px] h-[900px] rounded-full bg-pale-sky/10 blur-[180px]"})}),e.jsx(y,{title:e.jsxs(e.Fragment,{children:["Programme"," ",e.jsx("span",{className:"bg-gradient-to-r from-pale-sky via-white to-dusty-grape bg-clip-text text-transparent",children:"ENOR.IA"})]})}),e.jsx("p",{className:"text-center text-slate-grey mt-5 mb-14",children:"Des solutions IA adaptées à votre maturité et vos ambitions."}),e.jsx("div",{className:`
             grid
             grid-cols-1
             lg:grid-cols-3
             gap-8
             max-w-7xl
             mx-auto
             justify-center

            `,children:ne.map(t=>e.jsxs("div",{className:`
                  group
                  relative
                  isolate
                  overflow-hidden
                  flex
                  flex-col
                  rounded-3xl
                  border
                  ${t.featured?"border-pale-sky":"border-white/10"}
                  bg-white/[0.04]
                  backdrop-blur-xl
                  p-8
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-pale-sky/40
                  hover:shadow-[0_20px_45px_rgba(0,0,0,.45)]
                `,children:[e.jsx("div",{className:`
                  absolute
                  inset-0
                  rounded-3xl
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-500
                  bg-gradient-to-br
                  from-pale-sky/10
                  via-transparent
                  to-dusty-grape/10
                  pointer-events-none
                  
                `,children:e.jsx("div",{className:`
                    absolute
                    -top-20
                    left-1/2
                    -translate-x-1/2
                    w-64
                    h-64
                    rounded-full
                    bg-pale-sky/15
                    blur-3xl
                  `})}),t.featured&&e.jsx("div",{className:"absolute top-5 right-5 z-20",children:e.jsx("span",{className:`
                        px-3
                        py-1
                        rounded-full
                        bg-pale-sky
                        text-onyx
                        text-sm
                        font-semibold
                      `,children:"Recommandé"})}),e.jsx("h3",{className:"text-white text-4xl font-bold",children:t.name}),e.jsx("p",{className:"text-pale-sky mt-3",children:t.audience}),e.jsx("p",{className:"text-slate-grey mt-3 leading-relaxed",children:t.subtitle}),e.jsxs("div",{className:"mt-8",children:[e.jsx("p",{className:"text-white text-3xl font-bold",children:t.price}),e.jsx("p",{className:"text-slate-grey",children:"sur devis"})]}),e.jsxs("div",{className:"mt-8",children:[e.jsx("p",{className:"font-semibold text-white mb-4",children:"Inclus :"}),e.jsx("ul",{className:"space-y-3",children:t.features.map(s=>e.jsxs("li",{className:`
                          flex
                          items-start
                          gap-3
                          text-white
                        `,children:[e.jsx($,{className:`
                            w-5
                            h-5
                            text-emerald-400
                            shrink-0
                            mt-[2px]
                          `}),e.jsx("span",{children:s})]},s))})]}),e.jsxs("div",{className:"mt-1 pt-1 border-t border-white/10",children:[e.jsx("p",{className:"text-white text-xl font-bold mb-4",children:t.advisory}),e.jsx("p",{className:"text-white font-medium",children:t.maintenance}),e.jsx("a",{href:"/Pricing",className:`
                      mt-6
                      block
                      text-center
                      rounded-xl
                      bg-pale-sky
                      hover:bg-dusty-grape
                      text-onyx
                      hover:text-white
                      py-4
                      font-semibold
                      transition-all
                    `,children:"Découvrir plus"})]})]},t.name))})]}),e.jsxs("div",{ref:p,className:"w-full mb-16",children:[e.jsx(y,{title:e.jsxs(e.Fragment,{children:["Pour les"," ",e.jsx("span",{className:"bg-gradient-to-r from-pale-sky via-white to-dusty-grape bg-clip-text text-transparent",children:"PME, ETI et Grands comptes"})]}),titleClassName:"mt-2 text-[clamp(1.2rem,2.5vw,2rem)] leading-tight"}),e.jsx("p",{className:"text-pale-sky md:text-xl text-lg text-center mt-10 leading-relaxed font-semibold",children:"Processus, données ou site web ? L'IA peut vous faire gagner de l'argent."})]}),e.jsx("div",{className:"w-full mb-16",children:e.jsxs("div",{className:`
                max-w-6xl
                mx-auto
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/[0.04]
                backdrop-blur-xl
                group
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-pale-sky/40
                hover:shadow-[0_25px_60px_rgba(0,0,0,.45)]
              `,children:[e.jsx("div",{className:`
                  absolute
                  top-1/2
                  left-1/2
                  -translate-x-1/2
                  -translate-y-1/2
                  w-[700px]
                  h-[700px]
                  rounded-full
                  bg-pale-sky/10
                  blur-[140px]
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-700
                  pointer-events-none
                `}),e.jsx("div",{className:`
                absolute
                inset-0
                bg-[radial-gradient(circle_at_top_right,rgba(191,209,229,0.12),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(72,74,110,0.18),transparent_35%)]
              `}),e.jsx("div",{className:"absolute inset-0 bg-[url('/images/noise.svg')] opacity-10 pointer-events-none"}),e.jsxs("div",{className:"relative z-10 grid lg:grid-cols-2 gap-10 items-center px-8 py-12 md:px-14 md:py-16",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pale-sky/20 bg-pale-sky/10 mb-6",children:[e.jsx(_,{className:"text-pale-sky"}),e.jsx("span",{className:"text-pale-sky text-sm font-medium tracking-wide",children:"Sécurité & souveraineté"})]}),e.jsxs("h2",{className:"text-white text-3xl md:text-5xl font-bold leading-tight mb-6",children:["Adapté à votre métier,",e.jsx("span",{className:"block bg-gradient-to-r from-pale-sky via-white to-dusty-grape bg-clip-text text-transparent",children:"tout en restant sécurisé."})]}),e.jsx("p",{className:"text-slate-grey text-lg leading-relaxed mb-8 max-w-2xl",children:"Vos données restent vos données : chiffrées, souveraines et protégées par une infrastructure pensée pour les entreprises exigeantes. Nous intégrons l’IA sans compromis sur la confidentialité."}),e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsxs("div",{className:"flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 bg-white/[0.03]",children:[e.jsx(R,{className:"w-5 h-5 text-violet-300"}),e.jsx("span",{className:"text-white text-sm font-medium",children:"Chiffrement des données"})]}),e.jsxs("div",{className:"flex items-center gap-3 px-4 py-3 rounded-xl border border-white/10 bg-white/[0.03]",children:[e.jsx(_,{className:"w-5 h-5 text-cyan-300"}),e.jsx("span",{className:"text-white text-sm font-medium",children:"IA auto-hébergée"})]})]})]}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute inset-0 bg-pale-sky/10 blur-3xl rounded-full"}),e.jsxs("div",{className:"relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl p-8 overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]"}),e.jsxs("div",{className:"relative z-10",children:[e.jsx("div",{className:"w-20 h-20 rounded-2xl bg-gradient-to-br from-pale-sky/20 to-dusty-grape/20 border border-white/10 flex items-center justify-center mb-8",children:e.jsx(R,{className:"w-10 h-10 text-pale-sky",strokeWidth:1.5})}),e.jsxs("div",{className:"space-y-5",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-4",children:[e.jsx("span",{className:"text-slate-400 text-sm",children:"Hébergement"}),e.jsx("span",{className:"text-white font-medium",children:"Sécurisé & souverain"})]}),e.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-4",children:[e.jsx("span",{className:"text-pale-sky text-sm",children:"Protection"}),e.jsx("span",{className:"text-white font-medium",children:"Chiffrement avancé"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-slate-400 text-sm",children:"Confidentialité"}),e.jsx("span",{className:"text-pale-sky font-medium",children:"100% maîtrisée"})]})]})]})]})]})]})]})}),e.jsxs("div",{ref:x,className:"w-full mb-32",children:[e.jsx(y,{title:e.jsx(e.Fragment,{children:e.jsx("span",{className:"bg-gradient-to-r from-pale-sky via-white to-dusty-grape bg-clip-text text-transparent",children:"ROI Immédiat"})})}),e.jsxs("div",{className:"mt-12 max-w-5xl mx-auto",children:[e.jsx("div",{className:"grid md:grid-cols-3 gap-6",children:se.map(({Icon:t,title:s,desc:o,iconColor:a,glowFrom:n,glowTo:f,border:i,hoverBorder:b})=>e.jsx("div",{className:"investment-item group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-white/0 hover:from-pale-sky/50 transition-all duration-300",children:e.jsxs("div",{className:"bg-onyx h-full rounded-xl p-8 text-center",children:[e.jsxs("div",{className:"relative w-14 h-14 mx-auto mb-5",children:[e.jsx("div",{className:`absolute inset-0 rounded-2xl bg-gradient-to-br ${n} ${f} blur-lg group-hover:blur-xl transition-all duration-300`}),e.jsx("div",{className:`relative w-14 h-14 rounded-2xl bg-onyx ${i} flex items-center justify-center ${b} transition-all duration-300`,children:e.jsx(t,{className:`w-7 h-7 ${a} transition-colors duration-300`,strokeWidth:1.5})})]}),e.jsx("p",{className:"text-white text-xl font-bold mb-2",children:s}),e.jsx("p",{className:"text-slate-grey group-hover:text-white/50 transition-colors",children:o})]})},s))}),e.jsx("div",{className:"w-full p-1 rounded-2xl bg-gradient-to-r from-dusty-grape via-pale-sky to-dusty-grape mt-10",children:e.jsx("div",{className:"bg-onyx rounded-xl px-6 py-8 md:px-12 text-center",children:e.jsx("p",{className:"text-mint-cream md:text-2xl text-xl font-semibold",children:"Augmentez durablement votre revenu en exploitant tout le potentiel de l’IA."})})})]})]}),e.jsx("div",{className:"w-full mb-32",children:e.jsx("div",{className:"max-w-5xl mx-auto relative p-1 rounded-3xl bg-gradient-to-r from-dusty-grape via-pale-sky to-dusty-grape",children:e.jsxs("div",{className:"bg-onyx rounded-[22px] px-8 py-14 md:px-16 relative overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-[url('/images/noise.svg')] opacity-20 pointer-events-none"}),e.jsxs("div",{className:"relative z-10",children:[e.jsxs("div",{className:"relative w-16 h-16 mx-auto mb-6",children:[e.jsx("div",{className:"absolute inset-0 rounded-full bg-emerald-400/20 blur-xl"}),e.jsx("div",{className:"relative w-16 h-16 rounded-full bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center",children:e.jsx(te,{className:"w-8 h-8 text-emerald-400",strokeWidth:1.5})})]}),e.jsxs("h2",{className:"text-white font-bold text-center md:text-5xl text-4xl mb-6",children:["Financez votre"," ",e.jsx("span",{className:"bg-gradient-to-r from-pale-sky via-white to-dusty-grape bg-clip-text text-transparent",children:"projet IA"})]}),e.jsxs("p",{className:"text-slate-grey text-lg text-center leading-8 max-w-4xl mx-auto mb-14",children:["Les projets d'intelligence artificielle peuvent bénéficier de plusieurs dispositifs publics permettant de réduire significativement votre investissement. Chez ",e.jsx("span",{className:"text-white font-semibold",children:"IGDKEY"}),", nous vous accompagnons dans l'identification des aides adaptées à votre entreprise."]}),e.jsxs("div",{className:"grid lg:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"rounded-2xl border border-cyan-400/20 bg-white/[0.03] p-8 hover:border-cyan-400/40 transition-all",children:[e.jsxs("div",{className:"flex items-center gap-4 mb-6",children:[e.jsx("div",{className:"w-14 h-14 rounded-xl bg-cyan-400/10 flex items-center justify-center",children:e.jsx(Y,{className:"w-7 h-7 text-cyan-300"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-pale-sky text-sm uppercase tracking-wider",children:"Aide nationale"}),e.jsx("h3",{className:"text-white text-2xl font-bold",children:"Bpifrance – IA Booster France 2030"})]})]}),e.jsxs("p",{className:"text-slate-grey leading-8",children:["La Banque Publique d'Investissement accompagne les",e.jsx("span",{className:"text-white",children:" TPE, PME et ETI "}),"souhaitant intégrer l'intelligence artificielle grâce au programme",e.jsxs("span",{className:"text-white font-medium",children:[" ","IA Booster France 2030."]}),"Les prestations de conseil, d'audit et d'accompagnement peuvent être prises en charge selon votre situation."]}),e.jsxs("a",{href:"https://www.bpifrance.fr/catalogue-offres/osez-lia-france-2030",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 mt-8 text-pale-sky hover:text-white transition",children:["En savoir plus",e.jsx(E,{className:"w-4 h-4"})]})]}),e.jsxs("div",{className:"rounded-2xl border border-violet-400/20 bg-white/[0.03] p-8 hover:border-violet-400/40 transition-all",children:[e.jsxs("div",{className:"flex items-center gap-4 mb-6",children:[e.jsx("div",{className:"w-14 h-14 rounded-xl bg-violet-500/10 flex items-center justify-center",children:e.jsx(Z,{className:"w-7 h-7 text-violet-300"})}),e.jsxs("div",{children:[e.jsx("p",{className:"text-pale-sky text-sm uppercase tracking-wider",children:"Aides régionales"}),e.jsx("h3",{className:"text-white text-2xl font-bold",children:"Pack IA & Chèque Numérique"})]})]}),e.jsxs("p",{className:"text-slate-grey leading-8",children:["De nombreuses Régions proposent des dispositifs",e.jsx("span",{className:"text-white",children:" Pack IA "}),"ou",e.jsx("span",{className:"text-white",children:" Chèque Numérique "}),"permettant de financer jusqu'à",e.jsxs("span",{className:"text-white font-semibold",children:[" ","50 % des prestations"]}),"de conseil, d'accompagnement stratégique et d'intégration technique réalisées par un prestataire spécialisé comme IGDKEY."]}),e.jsxs("a",{href:"https://www.francenum.gouv.fr/aides-financieres/pack-ia-intelligence-artificielle",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 mt-8 text-pale-sky hover:text-white transition",children:["Consulter les aides",e.jsx(E,{className:"w-4 h-4"})]})]})]}),e.jsxs("div",{className:"mt-14 rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center",children:[e.jsx("h3",{className:"text-white text-2xl font-bold mb-4",children:"Vérifiez gratuitement votre éligibilité"}),e.jsx("p",{className:"text-slate-grey max-w-3xl mx-auto leading-8 mb-8",children:"Nos équipes étudient votre projet, identifient les dispositifs mobilisables et vous accompagnent dans la préparation de votre dossier afin de réduire votre reste à charge."}),e.jsx("a",{href:"/contact",className:"inline-flex items-center gap-2 bg-pale-sky hover:bg-dusty-grape hover:text-white text-onyx px-8 py-4 rounded-xl font-semibold transition-all",children:"Vérifier mon éligibilité"})]})]})]})})})]}),e.jsx(D,{})]})};export{xe as default};
