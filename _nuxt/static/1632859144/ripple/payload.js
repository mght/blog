__NUXT_JSONP__("/ripple", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX,aY,aZ,a_,a$,ba,bb,bc){return {data:[{page:{slug:Z,description:"A breif explanation and tutorial for how to make the best buttons you've ever seen!",title:"Recreating the material design ripple effect",category:"Material design, JavaScript, Buttons",createdAt:"2021-09-27T17:30:00.000Z",toc:[{id:ar,depth:3,text:as},{id:at,depth:M,text:au},{id:av,depth:M,text:aw},{id:ax,depth:M,text:ay},{id:az,depth:M,text:aA},{id:aB,depth:M,text:aC},{id:aD,depth:M,text:aE}],body:{type:"root",children:[{type:b,tag:z,props:{},children:[{type:a,value:"I've always wanted to make that nice, satisfying ripple effect that you can see on google's apps and stuff. It is just so "},{type:b,tag:"strong",props:{},children:[{type:a,value:"satisfying"}]},{type:a,value:":"}]},{type:a,value:k},{type:b,tag:aF,props:{className:[aG]},children:[{type:a,value:"\nBUTTONS YAY!\n"}]},{type:a,value:k},{type:b,tag:"h3",props:{id:ar},children:[{type:b,tag:C,props:{href:"#what-i-wanted-out-of-a-ripple-effect",ariaHidden:F,tabIndex:G},children:[{type:b,tag:c,props:{className:[H,I]},children:[]}]},{type:a,value:as}]},{type:a,value:k},{type:b,tag:z,props:{},children:[{type:a,value:"Here's what I wanted out of my ripple effect:"}]},{type:a,value:k},{type:b,tag:aH,props:{},children:[{type:a,value:k},{type:b,tag:P,props:{},children:[{type:a,value:"Reuseable - I wanted to be able to easily reuse the ripple effect so that if a button or something was added through javascript DOM manipulation it."}]},{type:a,value:k},{type:b,tag:P,props:{},children:[{type:a,value:"Customizeable - It needed to be customizeable, the speed, color, and opacity of the ripples"}]},{type:a,value:k},{type:b,tag:P,props:{},children:[{type:a,value:"Easy to use - It needed to be simple to use."}]},{type:a,value:k},{type:b,tag:P,props:{},children:[{type:a,value:"Lightweight - I don't want to make a 2000 line library for a ripple effect. More like 40 lines is better."}]},{type:a,value:k}]},{type:a,value:k},{type:b,tag:N,props:{id:at},children:[{type:b,tag:C,props:{href:"#step-1-containing-the-ripple",ariaHidden:F,tabIndex:G},children:[{type:b,tag:c,props:{className:[H,I]},children:[]}]},{type:a,value:au}]},{type:a,value:k},{type:b,tag:z,props:{},children:[{type:a,value:"I also wanted to contain the ripple effect in the button element (or any other element that I wanted to have the effect), so that means that the element has to have "},{type:b,tag:u,props:{},children:[{type:a,value:"overflow: hidden"}]},{type:a,value:" in its CSS. "},{type:b,tag:"em",props:{},children:[{type:a,value:"Also"}]},{type:a,value:" meaning that the ripple element has to be a child of the element that was clicked."}]},{type:a,value:k},{type:b,tag:N,props:{id:av},children:[{type:b,tag:C,props:{href:"#step-2-getting-the-position-for-the-ripple-element",ariaHidden:F,tabIndex:G},children:[{type:b,tag:c,props:{className:[H,I]},children:[]}]},{type:a,value:aw}]},{type:a,value:k},{type:b,tag:z,props:{},children:[{type:a,value:"This was a BIG headache. I needed to get the position for the ripple but I wanted it to scroll with the page. I also needed to take into account the mouse position when clicking. To do this I used "},{type:b,tag:u,props:{},children:[{type:a,value:"getBoundingClientRect()"}]},{type:a,value:". That seemed to work pretty well, but there were still a lot of bugs."}]},{type:a,value:k},{type:b,tag:N,props:{id:ax},children:[{type:b,tag:C,props:{href:"#step-3-fixing-tons-of-bugs",ariaHidden:F,tabIndex:G},children:[{type:b,tag:c,props:{className:[H,I]},children:[]}]},{type:a,value:ay}]},{type:a,value:k},{type:b,tag:z,props:{},children:[{type:a,value:"I'm just gonna skim over the bug fixing part, basically the ripple's weren't positioned right, they didn't transition, you couldn't click multiple times and have multiple ripples, and the ripple elements didn't go away. Big problems."}]},{type:a,value:k},{type:b,tag:N,props:{id:az},children:[{type:b,tag:C,props:{href:"#step-4-the-final-code",ariaHidden:F,tabIndex:G},children:[{type:b,tag:c,props:{className:[H,I]},children:[]}]},{type:a,value:aA}]},{type:a,value:k},{type:b,tag:aI,props:{className:[aJ]},children:[{type:b,tag:aK,props:{className:[aL,"language-js"]},children:[{type:b,tag:u,props:{},children:[{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:r}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,aM]},children:[{type:a,value:aN},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]},{type:a,value:" opts "},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:T}]},{type:a,value:" time "},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:_}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:D}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:$}]},{type:a,value:aN},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,A,r,h]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\"data-time\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:D}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,R]},children:[{type:a,value:"1000"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aa}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,R]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:T}]},{type:a,value:" color "},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aO}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:D}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,A,r,h]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\"data-color\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:D}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\"currentColor\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:T}]},{type:a,value:" opacity "},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ac}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:D}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,A,r,h]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\"data-opacity\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:D}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\".3\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:T}]},{type:a,value:" event "},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aP}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:D}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,A,r,h]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\"data-event\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:D}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\"click\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:ad},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"overflow"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\"hidden\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:ad},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aQ}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\"relative\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:ad},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,A,r,h]},children:[{type:a,value:"addEventListener"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:aP},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,aM]},children:[{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,af,i]},children:[{type:a,value:ag}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:ah}]},{type:a,value:" ripple_div "},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,ai,aj]},children:[{type:a,value:"document"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,A,r,h]},children:[{type:a,value:"createElement"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\"DIV\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aQ}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\"absolute\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"background"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,E]},children:[{type:b,tag:c,props:{className:[d,p,j]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,K]},children:[{type:b,tag:c,props:{className:[d,x,e]},children:[{type:a,value:L}]},{type:a,value:aO},{type:b,tag:c,props:{className:[d,x,e]},children:[{type:a,value:v}]}]},{type:b,tag:c,props:{className:[d,p,j]},children:[{type:a,value:q}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"borderRadius"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\"50%\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:ah}]},{type:a,value:" bx "},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,A,r,h]},children:[{type:a,value:"getBoundingClientRect"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:ah}]},{type:a,value:" largestdemensions"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,y,aR]},children:[{type:a,value:"if"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:ak},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:al}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:am}]},{type:a,value:an},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ao}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:a,value:aS},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:a,value:an},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:al}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aa}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,R]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,y,aR]},children:[{type:a,value:"else"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:a,value:aS},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:a,value:an},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ao}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aa}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,R]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"pointerEvents"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\"none\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ao}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,E]},children:[{type:b,tag:c,props:{className:[d,p,j]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,K]},children:[{type:b,tag:c,props:{className:[d,x,e]},children:[{type:a,value:L}]},{type:a,value:aT},{type:b,tag:c,props:{className:[d,x,e]},children:[{type:a,value:v}]}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,p,j]},children:[{type:a,value:q}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:al}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,E]},children:[{type:b,tag:c,props:{className:[d,p,j]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,K]},children:[{type:b,tag:c,props:{className:[d,x,e]},children:[{type:a,value:L}]},{type:a,value:aT},{type:b,tag:c,props:{className:[d,x,e]},children:[{type:a,value:v}]}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,p,j]},children:[{type:a,value:q}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aU}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,E]},children:[{type:b,tag:c,props:{className:[d,p,j]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"translate(-50%, -50%) scale(0)"}]},{type:b,tag:c,props:{className:[d,p,j]},children:[{type:a,value:q}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aV}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,E]},children:[{type:b,tag:c,props:{className:[d,p,j]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,K]},children:[{type:b,tag:c,props:{className:[d,x,e]},children:[{type:a,value:L}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"pageY"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ap}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:ak},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aV}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:$}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,ai,aj]},children:[{type:a,value:aW}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"scrollY"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,x,e]},children:[{type:a,value:v}]}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,p,j]},children:[{type:a,value:q}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aX}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,E]},children:[{type:b,tag:c,props:{className:[d,p,j]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,K]},children:[{type:b,tag:c,props:{className:[d,x,e]},children:[{type:a,value:L}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"pageX"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ap}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:ak},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aX}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:$}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,ai,aj]},children:[{type:a,value:aW}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"scrollX"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,x,e]},children:[{type:a,value:v}]}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,p,j]},children:[{type:a,value:q}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"transition"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,E]},children:[{type:b,tag:c,props:{className:[d,p,j]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"opacity "}]},{type:b,tag:c,props:{className:[d,K]},children:[{type:b,tag:c,props:{className:[d,x,e]},children:[{type:a,value:L}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,x,e]},children:[{type:a,value:v}]}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"ms ease, transform "}]},{type:b,tag:c,props:{className:[d,K]},children:[{type:b,tag:c,props:{className:[d,x,e]},children:[{type:a,value:L}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,x,e]},children:[{type:a,value:v}]}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"ms ease"}]},{type:b,tag:c,props:{className:[d,p,j]},children:[{type:a,value:q}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,A,r,h]},children:[{type:a,value:"removeAttribute"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\"data-ripple\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ac}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:a,value:" opacity"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:"\n        el"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,A,r,h]},children:[{type:a,value:"appendChild"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:"ripple_div"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:aY}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,af,i]},children:[{type:a,value:ag}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aU}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,E]},children:[{type:b,tag:c,props:{className:[d,p,j]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"translate(-50%, -50%) scale(1)"}]},{type:b,tag:c,props:{className:[d,p,j]},children:[{type:a,value:q}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ac}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\"0\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:aY}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,af,i]},children:[{type:a,value:ag}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:a,value:"\n            ripple_div"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,A,r,h]},children:[{type:a,value:"remove"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]},{type:a,value:" time"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,R]},children:[{type:a,value:"1"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:k}]}]}]},{type:a,value:k},{type:b,tag:N,props:{id:aB},children:[{type:b,tag:C,props:{href:"#how-to-use-this-code-",ariaHidden:F,tabIndex:G},children:[{type:b,tag:c,props:{className:[H,I]},children:[]}]},{type:a,value:aC}]},{type:a,value:k},{type:b,tag:z,props:{},children:[{type:a,value:"I "},{type:b,tag:C,props:{href:"https:\u002F\u002Fgithub.com\u002Fexplosion-scratch\u002Fripple",rel:[aZ,a_,a$],target:ba},children:[{type:a,value:"hosted the code on GitHub"}]},{type:a,value:" so that I could keep track of versions and use a CDN to import it, but it's pretty simple to use the code! Just call "},{type:b,tag:u,props:{},children:[{type:a,value:"ripple(element)"}]},{type:a,value:" when you have an element in the DOM that's similar to this:"}]},{type:a,value:k},{type:b,tag:aI,props:{className:[aJ]},children:[{type:b,tag:aK,props:{className:[aL,"language-html"]},children:[{type:b,tag:u,props:{},children:[{type:b,tag:c,props:{className:[d,Y]},children:[{type:b,tag:c,props:{className:[d,Y]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\u003C"}]},{type:a,value:bb}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,"special-attr"]},children:[{type:b,tag:c,props:{className:[d,"attr-name"]},children:[{type:a,value:"onload"}]},{type:b,tag:c,props:{className:[d,"attr-value"]},children:[{type:b,tag:c,props:{className:[d,e,"attr-equals"]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:bc}]},{type:b,tag:c,props:{className:[d,"value","javascript","language-javascript"]},children:[{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:"this"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:bc}]}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:am}]}]},{type:a,value:"Ripple button"},{type:b,tag:c,props:{className:[d,Y]},children:[{type:b,tag:c,props:{className:[d,Y]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\u003C\u002F"}]},{type:a,value:bb}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:am}]}]},{type:a,value:k}]}]}]},{type:a,value:k},{type:b,tag:z,props:{},children:[{type:a,value:"Nowww we get this:"}]},{type:a,value:k},{type:b,tag:aF,props:{className:[aG]},children:[{type:a,value:"\nClick me!\n"}]},{type:a,value:k},{type:b,tag:N,props:{id:aD},children:[{type:b,tag:C,props:{href:"#options",ariaHidden:F,tabIndex:G},children:[{type:b,tag:c,props:{className:[H,I]},children:[]}]},{type:a,value:aE}]},{type:a,value:k},{type:b,tag:z,props:{},children:[{type:a,value:"Like I said earlier, we want it to be customizeable, where is the customization?! Turns out I added attributes to control the ripples, here they are!"}]},{type:a,value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:b,tag:"table",props:{},children:[{type:b,tag:"thead",props:{},children:[{type:b,tag:O,props:{},children:[{type:b,tag:aq,props:{},children:[{type:a,value:"Attribute"}]},{type:b,tag:aq,props:{},children:[{type:a,value:"What it does"}]},{type:b,tag:aq,props:{},children:[{type:a,value:"Default"}]}]}]},{type:b,tag:"tbody",props:{},children:[{type:b,tag:O,props:{},children:[{type:b,tag:t,props:{},children:[{type:b,tag:u,props:{},children:[{type:a,value:"data-ripple"}]}]},{type:b,tag:t,props:{},children:[{type:a,value:"Turns on the ripple effect"}]},{type:b,tag:t,props:{},children:[{type:a,value:ap}]}]},{type:b,tag:O,props:{},children:[{type:b,tag:t,props:{},children:[{type:b,tag:u,props:{},children:[{type:a,value:"data-time"}]}]},{type:b,tag:t,props:{},children:[{type:a,value:"The time in milliseconds that the ripple effect takes."}]},{type:b,tag:t,props:{},children:[{type:b,tag:u,props:{},children:[{type:a,value:"500"}]}]}]},{type:b,tag:O,props:{},children:[{type:b,tag:t,props:{},children:[{type:b,tag:u,props:{},children:[{type:a,value:"data-color"}]}]},{type:b,tag:t,props:{},children:[{type:a,value:"The color of the ripple."}]},{type:b,tag:t,props:{},children:[{type:b,tag:u,props:{},children:[{type:a,value:"currentColor"}]}]}]},{type:b,tag:O,props:{},children:[{type:b,tag:t,props:{},children:[{type:b,tag:u,props:{},children:[{type:a,value:"data-opacity"}]}]},{type:b,tag:t,props:{},children:[{type:a,value:"The opacity of the ripple effect."}]},{type:b,tag:t,props:{},children:[{type:b,tag:u,props:{},children:[{type:a,value:".3"}]}]}]},{type:b,tag:O,props:{},children:[{type:b,tag:t,props:{},children:[{type:b,tag:u,props:{},children:[{type:a,value:"data-event"}]}]},{type:b,tag:t,props:{},children:[{type:a,value:"The event to ripple on."}]},{type:b,tag:t,props:{},children:[{type:b,tag:u,props:{},children:[{type:a,value:"mousedown"}]}]}]}]}]},{type:a,value:k},{type:b,tag:z,props:{},children:[{type:a,value:"So yeah, have fun! I hope that this blog post has been useful, or at least somewhat interesting! Feel free to use the ripple effect (with credit ofc) and keep coding!"}]},{type:a,value:k},{type:b,tag:aH,props:{},children:[{type:a,value:k},{type:b,tag:P,props:{},children:[{type:a,value:"Bye for now"}]},{type:a,value:k}]},{type:a,value:k},{type:b,tag:z,props:{},children:[{type:b,tag:C,props:{href:"https:\u002F\u002Fnotes.explosionscratc.repl.co\u002FExplosion-Scratch",rel:[aZ,a_,a$],target:ba},children:[{type:a,value:"--Explosion--"}]}]}]},dir:"\u002F",path:"\u002Fripple",extension:".md",updatedAt:"2021-09-28T19:58:10.468Z"}}],fetch:{},mutations:void 0}}("text","element","span","token","punctuation"," ",".","property-access","operator","string","\n",";","=","(",")","template-punctuation","`","function","style","td","code","}","\n        ripple_div","interpolation-punctuation","keyword","p","method","\n        ","a","||","template-string","true",-1,"icon","icon-link","{","interpolation","${",2,"h2","tr","li","\n    ","number",",","const"," opts","getAttribute"," el","px","tag","ripple","time","+","*","3","opacity","\n    el","e","arrow","=\u003E","var","dom","variable","bx","width","\u003E"," bx","height","-","th","what-i-wanted-out-of-a-ripple-effect","What I wanted out of a ripple effect","step-1-containing-the-ripple","Step 1: Containing the ripple","step-2-getting-the-position-for-the-ripple-element","Step 2: Getting the position for the ripple element","step-3-fixing-tons-of-bugs","Step 3: Fixing TONS of bugs","step-4-the-final-code","Step 4: The final code:","how-to-use-this-code-","How to use this code 🤦","options","Options","ripple-button","w-full","ul","div","nuxt-content-highlight","pre","line-numbers","parameter","el","color","event","position","control-flow","\n        largestdemensions ","largestdemensions","transform","top","window","left","setTimeout","nofollow","noopener","noreferrer","_blank","button","\"")));