import{g as J,E as K,o as w,c as M,n as U,a as j,w as k,r as p,b as G,d as R,e as Q,f as O,h as v,t as h,F as T,i as F,j as x,k as H,l as q}from"./vendor.ccabb0cb.js";const Z=function(){const A=document.createElement("link").relList;if(A&&A.supports&&A.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function I(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=I(e);fetch(e.href,r)}};Z();var Y=(g,A)=>{const I=g.__vccOpts||g;for(const[t,e]of A)I[t]=e;return I};const W={props:{tile:{type:Object,required:!0},error:{type:Boolean,default:!1}},data(){return{tweened:1}},computed:{color(){return this.colors[this.tile.id]},number(){return this.tile.active?.95:1}},watch:{number(g){J.to(this,{ease:K.easeOut.config(1,.3),duration:.2,tweened:Number(g)||0})}}};function b(g,A,I,t,e,r){return w(),M("button",{class:U(["tile",I.tile.error?"shake":""]),style:j(`background-color: var(--tile_color_${I.tile.id}); transform: scale(${e.tweened})`),onMousedown:A[0]||(A[0]=k(n=>g.$emit("setActive",I.tile.id),["left"]))},null,38)}var S=Y(W,[["render",b],["__scopeId","data-v-29ebbb09"]]);const a={NONE:0,PREVIEW:1,PLAYING:2,WON:3,LOST:4,WINNER:5},P=1,f=10,_=1e3,z=400,V=100;function X(){let g=p(P);const A=p([]),I=()=>{A.value=new Array(4).fill().map((t,e)=>({id:e,active:!1,error:!1}))};return G(I),R(g,t=>{t>f&&(g.value=f)}),{tiles:A,fillTiles:I,difficulty:g}}var $="data:audio/mpeg;base64,//NAwAAAAAJYAUAAAP/c0Zhhsa0QV/vxJjdg1ja5Kv+X4GSASN53w1cCAGBlQP4hOJTGT/w1YHVCxcDfkf/AMBDBIORcr//5OFw0N9P//8oGgARgXKMmhr////06CDJ+9X////+z7aD/80DAWxjzEjgBnaABgaByYceMwT48EjRUAUCVl5AgOzAozDFMnD/HZTggdzDcGjAsKhIDWgKAs4q44U2Wq1q0IgNMDgCZc/Wf//RcY4BwwX25dRR//////vSD8g4Fkv/////////////zQMBSFmLmilHdmAH//WeDoxPw4CSmAgMA5dQGh+Y3VqZohyXUS/fdnCsbz87z/2SEAAqN//+iah3Aik///////eiLwiqv/////////////+ibBJgFgiIweZiIAC4wZBkw5Co3IjY3//NAwFMQ8uqMAutiudQwKBdQPZCsoUAl0ct9//CFAWlv//0SqErGeR//////95wPwDNpf/////////////9AujlAfAk4sIk2MwIQBjBDAFMAIHowsUejDOB+AIDpZRAYmuhozS1zWv3/80DAahHi7oAA7Ka42BpB2UP//qlUNTEkPf/////+qcGGFDJt//////////////qNhCoLqQBtW/MEBVCAKMTAbOF2nOVgXIiaDAMQCJtjoINix1jr1LUsEMRqX//7w6EN9b//////rf/zQMB9EprmgAD0JriqEYifl//////////////6lk0H6AH4HaAAUjgBlKwQUAXMAAB4cCLMJBSMwNQjzAKAiLVsrSYSDaHRf//0RJAjv/19/c6pJ//U3R6r///s5wRiZN////////////NAwI0SWup8AOwmuP///9RKiuAZ+SR4AFAwAd5ahCEhhQAgQXR0kEh4GA5EYgOCdDmOAEOg2p3ljhr/HUDL/7d/Ws+Sb/+rX/f//9lGRDw3hv/////////////+mKeLkAwyQhTwAED/80DAnhNy7nx482S4mkFABTApAYMBYDcwDwkjB3WaMRUJQwBQHxQAJIBLIt61af/PXveOgKyv9ktX81G////////WUxPv//////////////XIwByAF4kUWyABRCxiiMN3ABSGSZak9P/zQMCrE2rudHjsaLjpD8DZc8akMNsgi1vX9/oJAJvoz88kNMdzOaQiMMl/9jD3MZlmK6v6vV1J3IIZpf///7VMnVr9WtV///////mQjIC8bsAHBQrwwUt0YgTmeYRjTadrdnXbIJAm//NAwLgTmu50YPQmuaTSHVLRQq/jjauzUOFwAhdrJXVnub6FQVGL/+/95n//7qJgy0m/X/7f3U7da1an1vs3//////rNSQAPTFiAAJUiMLDjIPDQsw0VwJ9zJqMDA0kCzJL8aDisFqj/80DAxBSa7os+2qC68+apKRIeCtoN6v/0yVDVYXTKzf/////9riti+v////qXs1mW9/Uv//////7nwQ4QXGmsAygAQpAaZS7HQyxr4gYkgmqI4sWMHaqzkAA6ENN++fuUAmEMa39nVf/zQMDMFLLubzbZ2riqcej0QQBYTjTv/////+xNJU4fb///9FT9XRRRU/qSUl//////0x6g3gAKgskQXKzxl7QGpKWlygYcRqFVDpy5iKafDF2ovNDoiigmQPMVFUx2RUVEV2JDURgh//NAwNQUMu5YBuSiuBAIBHGhMs7P/////5UVU////////////+iqzs5QwUECOR9ChgQYsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/80DA3hVi7kxG2pq4AAAAAAAAAAAAAAAAAAAAAAAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIP/zQMDjFOr5yADBxLkAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAA//NAwOoAAAJYAAAAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAAC/A+kEAAAz",AA="data:audio/mpeg;base64,//MwwAAAAAJYAUAAAAwBQGBwOBQOBgB1A34DtDQYPAAoDTjIGnfIxb/j8RYt/4LgFg/M/8eMePz//8kMZzScKb//8RC//////bf3//////MwwEERwvZ8f5NQIP/zIDAmFykJFSHUAMBQMPhYIwQDnwaBwUBvEMsUBopNvzoyJEkv//MimHh0v/////0jApt////////////+okBQ//MwwDsOqpKlgdVoAYAOxQvEsGIPI1ZBTAfuMUlfC/3//6hNEP//zEVv/////+TCP/////////////WEEaiJVUBKRpg16HGSKXagm5jl//MwwEEMKpahQNtatI0/f//xV///WYi1//////1CiE/////////////74MDUwBX6RJRJgw+LgHax4NNRl9e5dr///9Qcf//6Hib///////MwwFEMIpqcAONUtP6DATv////////////vhOBW4AIzdgZA6CQwetzs44CAOziH6ekt0vP//oGbf//Q8l//////0iYQv/////////////MwwGEMWpqcIOKUtP+gfBnPgCBZsQDUjhqh/AaqMIjIP1JozTZ2b6BeP/+06jkwdO+3dlnf1n0//QN/////////////zlAEAAkpdIEA//MwwHANCpqcQOKatDLpGHnCeqHAYIV/XqlWtU5+v/C03//4zDr//////6ZLf///////////+rRL4Ns1A4l4dABeRlxhoPH7CeGBRk7u//MwwHwNQpaoeKqOtlJK6SVf+//BT//+gxH3//////MT3////////////2WZm4CQHABXvBlFILmwupABOACQwcKJGzov+gt/+1LOECCv//MwwIgNQpqUYOKatOxyKjdTTpV2NX/6Dw7///6/////////8aALgC5EKgERyqWRCITaCNHAManK+8quP///Ug8XW62+68KDpX//66f///MwwJQNepaQSOKatf5hRP////////////8LDjgAj04wIGBJwLAzPRwgeFvpxQE3F0985//xCMIhl//9CUVyb//////OJ///be/1fr////MwwJ8NypqoeKFKtv////7BJS6eQAhH1JQjhyB5xsbno2pY98tmpdll/758qD0Wp//6AuB0//////8SDor/////oYrf//////4RAEcA//MwwKgNapqYeslKti+pBD0YljhHqDhC1BtCLjcLGgEsssz0KEOztZ6p2/ymKFQ5Hb/////////////////ZymKCBgwNUAAAAAAAAAAA//MwwLMOQpp0GNqatAAAAAAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAA//MwwLsOCppwOMnKtiAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAg//MwwMMOIo3UAHiEtQAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAA//MwwMsAAAJYAAAAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAvwMdBQAANA==",eA="data:audio/mpeg;base64,/+MwwAAAAAJYAUAAAP+tETMpXTjE8/9p6ozVZHD2+Jf9rlcyxCASEjmi3Ayg4DJFABknvwN8gAejA04cLZ/+RMvjrFBi4/++CACAkwBujArQiBc//yuYE4XybK6P//6aZOIIINAcC////BtqBkwJ4wNOggg/////+m9lug3///////0000PoGBOAZMKHtBaYbpgkyGBRct8YHD2Y/+MgwI8hLBIwAZ2gAJQNmIoVGDY0n8pKHbhMmGpIGIg1RNIpgJCABftjsSs46prWX41UisI7CZcNUDnEWJ5Kk+i3/r1sZE8AuAA0KELMkSKyv////////UkkQcGosR0RySLL////////4zDAZR8T6nTJ3aAB///////////+tygQ8OKAywgOXE7mB4HAlMtlYEAYeAQLAMYAj+Z1emZPjKYHhGYRgKTApA8ItYY8/+e/rTMQHY42////qMCbFYKKaP////////9MtJAOei///////////////////6TsViaByQBoJSAAURzJnJgMBo6Bpg0DJh6Ixxh5RtuGxgaN5hsLoCD/4yDAdxYr4oQA7BrZORRadDsuq9y7z0eqiPyAHJT////3MTxocS///q/v////1nRIhtJJf//////////////////ouWSVGsGCgJkZY1TgfhHcFAUYQgiKgih8YgBocZ8Ia+FgYPhMYP/jMMB5F9vmeBjrYtnIfAoA1AKksjFjuev8wshrJMEsCbPt////UYDSaP/////////uiXBZSX//////////////////9SiiXgxuA8hBgcz55wPUoDWWggwOg0HGVxCIwUYpHZwxSmZDeadOgYJlUHAkUrn4/S1q9NfTNZY0BgQQn6f///PIC5////aum3///85iBh8L2X//+j1nsv/jIMCoF0PueADrYtinfamuh6q9tKHtZm7OtEp///////VkUSwCoiBkTKgOASAt0NAzfdztASEmZI+d7eZxkbhyCoMPvo06WKbRGlyy/E3Q41AFAeCATHV///9B4JgAQJEW/////////+MwwKYaK+Z4FuKU2/8ydL///+ip/+v99SanRSRfZF6KTotuiyn///////1ssujSEhMDYDDjAITEZgRnTFFgNHNkJNi0MZJBLEDUAU6LIs8ZsuV4IHt3K9g2RakXiRJhfLCWLpxN2qsp12/2SJpIEMYELsFaJuMgeRd7f///////NRWJGop7f/////////////////5qKxxglAtE/+MgwMwY4+ZkBtHa2gNxgkaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgACAAIAAgACAAIAAgACAAIAAgACD/4zDAwxsL7hQA007YACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAD/4yDA5QAAAlgAAAAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAAL8DGQQAADU=",tA="data:audio/mpeg;base64,/+MgwAAAAAJYAUAAAP/dwzLGc0Onr/lmztZgjZRFv+/YIjZAQV9DAwBgDXLgCmn+PwoAcAav/ZsM8AYEAdJMGERR//xwMxcLhp//m7s5ZGbES///AOAFF0Gqp////pvTdDoM//////T/4yDAWxo7GjgBnaAA3pm4WiCdQ5c0DH///ygYdCS8D0CgCgZy5L0xOCoxzDg47YA6GA8wVB0wEASN1oMimvx7rHHKVKTEICyHl//+uZF8P+MMAWxiX//////6RKitjxdb///////////jIMBNFgrqsv/dkAH///+vQTEdjJiUBIBpNkWAtJcKBmYw1CYvCKlJE3PfJtpfe7+vpToxQJ4tv//6zAkQVRb//////9BAkg4Si3/////////////+oeoK6NxBPOB26zTR0NGIyGd0/+MgwE8RGvKQAOtauPefLGZkQCCQDhlTARgWmqY7z+SSERYIS3+v/mmnFm//////95kVEoUm//////////////0B8BbAAQwWlDyozUCh4GCoYSFYZkdYcMgwKAGIgALuq6L2q9y7n/r/4yDAZRHC6oQA4pq5lqcHsJQ0W31/r9RMMf//////8lBklt/////////////9VIvkCApAbCGAisCAAwHDMETjLywxZNMTlDiXwxFYMhLx4IR0LjtWcbOW0vLTIcRC8BUs1P6/2IjBaP/jIMB5EprufADrZLnG///7fN67fx41v////+3+nb//////oeAkDRLJiwDgANKaqYWwHLwBpK4c/QGxlxkIU2GPu458h3zLfLxMExguZ///OEYFAnCU3//////0Hppv////U039zWdt/+MgwIkS0u53JtqOuFL2//////6D4QQAoXkoj7QFRF0TCAENIXBc4IAmIt9yZyHrtnWRQ8iNio4exyOaj9bamEgegSCwPxgbDpj//////1VjKj/////////////9WMGOMBBQQsY2QAD/4yDAmBKq7mQG2dS4AAAAAAAAAAAAAAAAAAAAAAAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIP/jIMCoEtr2HADBxLkAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAA/+MgwLcAAAJYAAAAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAAC/AzEKAAA2",oA="/assets/bruuh.c36f3094.mp3";function gA(g,A,I,t){const e=p([]),r=p([]),n=()=>{I.value=P,e.value=[],g(),l()},C=()=>{e.value.push(u(0,4))},l=()=>{A.value=a.PREVIEW},u=(s,o)=>Math.floor(Math.random()*(o-s))+s,i=Q(()=>_-I.value*(z/f)),c=s=>{const o=[$,AA,eA,tA,oA];new Audio(o[s]).play()},d=()=>{e.value.forEach((s,o)=>{r.value.push(setTimeout(()=>{t.value[s].active=!0,c(s)},i.value*o),setTimeout(()=>{t.value[s].active=!1},i.value*(o+1)-V))}),r.value.push(setTimeout(()=>{A.value=a.PLAYING},i.value*e.value.length))},B=()=>{C(),d()},E=()=>{r.value.length&&r.value.forEach(s=>clearTimeout(s))},D=Q(()=>A.value===a.NONE||A.value===a.WINNER||A.value===a.LOST);R(A,s=>{s===a.PREVIEW&&B()});const m=()=>{E(),A.value=a.NONE,g(),e.value=[]},N=()=>{A.value===a.NONE||A.value===a.LOST||A.value===a.WINNER?n():m()};return{gameMessage:Q(()=>A.value===a.WON?"\u041A\u0440\u0443\u0442":A.value===a.WINNER?"\u0412\u0430\u0449\u0435 \u043A\u0440\u0430\u0441\u0430\u0432\u0430":A.value===a.LOST?"Bruuh":"\u0417\u0430\u043F\u043E\u043C\u043D\u0438 \u0438 \u043F\u043E\u0432\u0442\u043E\u0440\u0438 \u043A\u043E\u043C\u0431\u0438\u043D\u0430\u0446\u0438\u044E \u043A\u043D\u043E\u043F\u043E\u043A"),btnHandler:N,canStartGame:D,start:n,queue:e,delay:i,playSound:c}}function rA(g,A,I,t,e,r){let n=0;const C=()=>{A.value!==a.PREVIEW&&t.value.forEach(o=>o.active=!1)},l=o=>{A.value===a.PLAYING&&(t.value[o].active=!0,D(o))};let u=[],i=[];const c=()=>new Promise((o,L)=>{i.push({resolve:o,reject:L})}),d=()=>{u=[],i=[],g.value.forEach(()=>{u.push(c())})},B=async()=>{try{for(const o of u)await o}catch{s()}finally{A.value!==a.LOST&&y()}},E=()=>{n=0,d(),B()},D=o=>{g.value[n]===o?m(o):N(o)},m=o=>{i[n].resolve(),r(o),n++},N=o=>{t.value[o].error=!0,r(4),i[n].reject()},y=()=>{if(e.value>=f){A.value=a.WINNER;return}e.value++,A.value=a.WON,setTimeout(()=>{A.value=a.PREVIEW},I.value)},s=()=>{A.value=a.LOST};return R(A,o=>{o===a.PLAYING&&E()}),{setNotPressedForAll:C,setActive:l}}const aA={name:"MainBoard",components:{BoardItem:S},setup(){const g=p(a.NONE),{tiles:A,fillTiles:I,difficulty:t}=X(),{gameMessage:e,btnHandler:r,canStartGame:n,start:C,queue:l,delay:u,playSound:i}=gA(I,g,t,A),{setNotPressedForAll:c,setActive:d}=rA(l,g,u,A,t,i);return{tiles:A,fillTiles:I,difficulty:t,gameStatus:g,canStartGame:n,start:C,btnHandler:r,gameMessage:e,queue:l,setNotPressedForAll:c,setActive:d}}},IA={class:"wrapper"},nA={class:"board"},sA={class:"buttons"};function CA(g,A,I,t,e,r){const n=O("BoardItem");return w(),M("div",IA,[v("h3",null,"\u0421\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u044C: "+h(t.difficulty),1),v("h5",null,h(t.gameMessage),1),v("div",nA,[(w(!0),M(T,null,F(t.tiles,C=>(w(),x(n,{key:C.id,tile:C,onSetActive:A[0]||(A[0]=l=>t.setActive(l))},null,8,["tile"]))),128))]),v("div",sA,[v("button",{class:"btn",onClick:A[1]||(A[1]=(...C)=>t.btnHandler&&t.btnHandler(...C))},h(t.canStartGame?"\u0421\u0442\u0430\u0440\u0442":"\u0417\u0430\u043A\u043E\u043D\u0447\u0438\u0442\u044C \u0438\u0433\u0440\u0443"),1)])])}var iA=Y(aA,[["render",CA],["__scopeId","data-v-900152d0"]]);const lA={components:{MainBoard:iA}};function uA(g,A,I,t,e,r){const n=O("MainBoard");return w(),M("div",{class:"app-wrapper",onMouseup:A[0]||(A[0]=C=>g.$refs.mainBoard.setNotPressedForAll())},[v("main",null,[H(n,{ref:"mainBoard"},null,512)])],32)}var cA=Y(lA,[["render",uA]]);const vA=q(cA);vA.mount("#app");
