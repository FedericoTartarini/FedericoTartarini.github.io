"use strict";(self.webpackChunkmy_personal_website=self.webpackChunkmy_personal_website||[]).push([[4787],{2194:(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});s(6540);var a=s(8215),r=s(1213),l=s(7559),n=s(6820),i=s(2557),c=s(1463),o=s(1107),g=s(4848);function u(e){let{title:t}=e;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(r.be,{title:t}),(0,g.jsx)(c.A,{tag:"doc_tags_list"})]})}function h(e){let{tags:t,title:s}=e;return(0,g.jsx)(r.e3,{className:(0,a.A)(l.G.page.docsTagsListPage),children:(0,g.jsx)("div",{className:"container margin-vert--lg",children:(0,g.jsx)("div",{className:"row",children:(0,g.jsxs)("main",{className:"col col--8 col--offset-2",children:[(0,g.jsx)(o.A,{as:"h1",children:s}),(0,g.jsx)(i.A,{tags:t})]})})})})}function d(e){const t=(0,n.b)();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(u,{...e,title:t}),(0,g.jsx)(h,{...e,title:t})]})}},6133:(e,t,s)=>{s.d(t,{A:()=>i});s(6540);var a=s(8215),r=s(8774);const l={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var n=s(4848);function i(e){let{permalink:t,label:s,count:i,description:c}=e;return(0,n.jsxs)(r.A,{href:t,title:c,className:(0,a.A)(l.tag,i?l.tagWithCount:l.tagRegular),children:[s,i&&(0,n.jsx)("span",{children:i})]})}},2557:(e,t,s)=>{s.d(t,{A:()=>o});s(6540);var a=s(6820),r=s(6133),l=s(1107);const n={tag:"tag_Nnez"};var i=s(4848);function c(e){let{letterEntry:t}=e;return(0,i.jsxs)("article",{children:[(0,i.jsx)(l.A,{as:"h2",id:t.letter,children:t.letter}),(0,i.jsx)("ul",{className:"padding--none",children:t.tags.map((e=>(0,i.jsx)("li",{className:n.tag,children:(0,i.jsx)(r.A,{...e})},e.permalink)))}),(0,i.jsx)("hr",{})]})}function o(e){let{tags:t}=e;const s=(0,a.Q)(t);return(0,i.jsx)("section",{className:"margin-vert--lg",children:s.map((e=>(0,i.jsx)(c,{letterEntry:e},e.letter)))})}},6820:(e,t,s)=>{s.d(t,{Q:()=>l,b:()=>r});var a=s(1312);const r=()=>(0,a.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function l(e){const t={};return Object.values(e).forEach((e=>{const s=function(e){return e[0].toUpperCase()}(e.label);t[s]??=[],t[s].push(e)})),Object.entries(t).sort(((e,t)=>{let[s]=e,[a]=t;return s.localeCompare(a)})).map((e=>{let[t,s]=e;return{letter:t,tags:s.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}}}]);