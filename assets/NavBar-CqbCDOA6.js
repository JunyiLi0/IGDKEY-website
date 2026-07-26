import{r as c,u as k,j as n,L as l}from"./index-DCN7oTW9.js";import{n as x}from"./Footer-BZrW74_B.js";const b=()=>{const[p,m]=c.useState(!1),[t,d]=c.useState(!1),i=k();c.useEffect(()=>{const e=()=>{const s=window.scrollY>10;m(s)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);const u=e=>{i.pathname!=="/"&&(e.preventDefault(),window.location.href="/")},j=()=>{d(!t)},r=()=>{d(!1)};return n.jsxs("header",{className:`navbar ${p?"scrolled":"not-scrolled"}`,children:[n.jsxs("div",{className:"inner",children:[n.jsx(l,{to:"/",onClick:u,className:"logo",children:n.jsx("img",{src:"./images/igdkey-nobg.png",alt:"IGDKEY logo",style:{height:40,width:"auto",display:"inline-block",verticalAlign:"middle"}})}),n.jsx("button",{className:"hamburger-btn lg:hidden",onClick:j,"aria-label":"Toggle menu",children:n.jsxs("div",{className:`hamburger-icon ${t?"open":""}`,children:[n.jsx("span",{}),n.jsx("span",{}),n.jsx("span",{})]})}),n.jsx("nav",{className:"desktop",children:n.jsx("ul",{children:x.map(e=>{var h;(h=e.Link)==null||h.startsWith("#");const s=e.link==="/",a=o=>{s&&i.pathname!=="/"?(o.preventDefault(),window.location.href="/"):s&&i.pathname==="/"&&window.scrollTo({top:0,behavior:"smooth"})};return n.jsx("li",{className:"group relative",children:e.children?n.jsxs(n.Fragment,{children:[n.jsxs("button",{className:`
                           flex
                          items-center
                          gap-2
                          text-white
                          hover:text-pale-sky
                          transition-colors

                        `,children:[n.jsx("span",{children:e.name}),n.jsx("svg",{className:"w-4 h-4 transition-transform group-hover:rotate-180",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",children:n.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 9l-7 7-7-7"})}),n.jsx("span",{className:"underline"})]}),n.jsx("div",{className:`
                            absolute
                            top-full
                            left-0
                            mt-4
                            w-60
                            rounded-2xl
                            border
                            border-white/10
                            bg-[#0B1220]
                            backdrop-blur-xl
                            opacity-0
                            invisible
                            translate-y-3
                            group-hover:opacity-100
                            group-hover:visible
                            group-hover:translate-y-0
                            transition-all
                            duration-300
                            shadow-2xl
                            z-50
                          `,children:e.children.map(o=>n.jsx(l,{to:o.link,onClick:()=>{r()},className:`
                                block
                                px-6
                                py-4
                                text-white
                                hover:bg-pale-sky/10
                                hover:text-pale-sky
                                transition
                              `,children:o.name},o.name))})]}):n.jsxs(l,{to:e.link,onClick:a,children:[n.jsx("span",{children:e.name}),n.jsx("span",{className:"underline"})]})},e.name)})})}),n.jsx(l,{to:"/contact",className:"contact-btn group hidden lg:flex",children:n.jsx("div",{className:"inner",children:n.jsx("span",{children:"Nous contacter"})})})]}),n.jsx("nav",{className:`mobile-menu ${t?"open":""}`,children:n.jsxs("ul",{children:[x.map(e=>{var s;return(s=e.link)==null||s.startsWith("#"),e.link,n.jsx("li",{children:e.children?n.jsxs(n.Fragment,{children:[n.jsx("p",{className:"text-pale-sky font-semibold px-4 py-2",children:e.name}),n.jsx("ul",{className:"pl-4",children:e.children.map(a=>n.jsx("li",{children:n.jsx(l,{to:a.link,onClick:r,children:a.name})},a.name))})]}):n.jsx(l,{to:e.link,onClick:r,children:e.name})},e.name)}),n.jsx("li",{children:n.jsx(l,{to:"/contact",onClick:r,className:"mobile-contact-btn",children:"Nous contacter"})})]})})]})};export{b as N};
