"use strict";(self.webpackChunkmy_personal_website=self.webpackChunkmy_personal_website||[]).push([[3751],{727:(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});s(7294);var a=s(6010),r=s(1944),l=s(5281),n=s(5155),c=s(6090),i=s(197),o=s(2503),g=s(5893);function u(e){let{title:t}=e;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(r.d,{title:t}),(0,g.jsx)(i.Z,{tag:"doc_tags_list"})]})}function h(e){let{tags:t,title:s}=e;return(0,g.jsx)(r.FG,{className:(0,a.Z)(l.k.page.docsTagsListPage),children:(0,g.jsx)("div",{className:"container margin-vert--lg",children:(0,g.jsx)("div",{className:"row",children:(0,g.jsxs)("main",{className:"col col--8 col--offset-2",children:[(0,g.jsx)(o.Z,{as:"h1",children:s}),(0,g.jsx)(c.Z,{tags:t})]})})})})}function d(e){const t=(0,n.M)();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(u,{...e,title:t}),(0,g.jsx)(h,{...e,title:t})]})}},3008:(e,t,s)=>{s.d(t,{Z:()=>c});s(7294);var a=s(6010),r=s(9960);const l={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var n=s(5893);function c(e){let{permalink:t,label:s,count:c}=e;return(0,n.jsxs)(r.Z,{href:t,className:(0,a.Z)(l.tag,c?l.tagWithCount:l.tagRegular),children:[s,c&&(0,n.jsx)("span",{children:c})]})}},6090:(e,t,s)=>{s.d(t,{Z:()=>o});s(7294);var a=s(5155),r=s(3008),l=s(2503);const n={tag:"tag_Nnez"};var c=s(5893);function i(e){let{letterEntry:t}=e;return(0,c.jsxs)("article",{children:[(0,c.jsx)(l.Z,{as:"h2",id:t.letter,children:t.letter}),(0,c.jsx)("ul",{className:"padding--none",children:t.tags.map((e=>(0,c.jsx)("li",{className:n.tag,children:(0,c.jsx)(r.Z,{...e})},e.permalink)))}),(0,c.jsx)("hr",{})]})}function o(e){let{tags:t}=e;const s=(0,a.P)(t);return(0,c.jsx)("section",{className:"margin-vert--lg",children:s.map((e=>(0,c.jsx)(i,{letterEntry:e},e.letter)))})}},5155:(e,t,s)=>{s.d(t,{M:()=>r,P:()=>l});var a=s(5999);const r=()=>(0,a.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function l(e){const t={};return Object.values(e).forEach((e=>{const s=function(e){return e[0].toUpperCase()}(e.label);t[s]??=[],t[s].push(e)})),Object.entries(t).sort(((e,t)=>{let[s]=e,[a]=t;return s.localeCompare(a)})).map((e=>{let[t,s]=e;return{letter:t,tags:s.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}}}]);