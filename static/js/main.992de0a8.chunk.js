(this.webpackJsonpsvisualizer=this.webpackJsonpsvisualizer||[]).push([[0],{19:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(0),o=a.n(n),s=a(13),l=a.n(s),i=(a(27),a.p,a(28),a(5)),c=a(9),u=a(10),h=a(4),d=a(12),b=a(11);function g(e){var t=[];if(e.length<=1)return e;var a=e.slice();return y(e,0,e.length-1,a,t),t}function y(e,t,a,r,n){if(t!==a){var o=Math.floor((t+a)/2);y(r,t,o,e,n),y(r,o+1,a,e,n),function(e,t,a,r,n,o){var s=t,l=t,i=a+1;for(;l<=a&&i<=r;)o.push([l,i]),o.push([l,i]),n[l]<=n[i]?(o.push([s,n[l]]),e[s++]=n[l++]):(o.push([s,n[i]]),e[s++]=n[i++]);for(;l<=a;)o.push([l,l]),o.push([l,l]),o.push([s,n[l]]),e[s++]=n[l++];for(;i<=r;)o.push([i,i]),o.push([i,i]),o.push([s,n[i]]),e[s++]=n[i++]}(e,t,o,a,r,n)}}function m(e){var t=[];return e.length<=1?e:(j(e,0,e.length-1,t),t)}function j(e,t,a,r){if(!(a-t<=0)){var n=function(e,t,a,r,n){var o=t-1,s=t,l=0;for(s=t;s<=a-1;s++){if(n.push([o+1,s,a]),l=o+1,e[s]<r){var i=e[++o];e[o]=e[s],e[s]=i,n.push([o,s,e[s],e[o]])}else n.push([]);n.push([l,s,a])}var c=e[o+1];return e[o+1]=e[a],e[a]=c,n.push([o+1,o+1,a]),n.push([o+1,a,e[a],e[o+1]]),n.push([o+1,o+1,a]),o+1}(e,t,a,e[a],r);j(e,t,n-1,r),j(e,n+1,a,r)}}function f(e){var t=[];return e.length<=1?e:(function(e,t,a){var r=0,n=0;for(r=0;r<t-1;r++)for(n=0;n<t-r-1;n++){if(a.push([n,n+1]),e[n]>e[n+1]){var o=e[n];e[n]=e[n+1],e[n+1]=o,a.push([n,n+1,e[n+1],e[n]])}else a.push([]);a.push([n,n+1])}}(e,e.length,t),t)}function p(e){var t=[];return e.length<=1?e:(function(e,t){var a,r=e.length;for(a=r/2-1;a>=0;a--)v(e,e.length,a,t);for(a=r-1;a>0;a--){t.push([0,a]);var n=e[0];e[0]=e[a],e[a]=n,t.push([0,a,e[a],e[0]]),t.push([0,a]),v(e,a,0,t)}}(e,t),console.log(e),t)}function v(e,t,a,r){var n=a,o=2*a+1,s=2*a+2;if(o<t&&e[o]>e[n]&&(n=o),s<t&&e[s]>e[n]&&(n=s),n!==a){r.push([a,n]),r.push([a,n,e[n],e[a]]),r.push([a,n]);var l=e[a];e[a]=e[n],e[n]=l,v(e,t,n,r)}}var k=a(18),O=a(35),C=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).state={value:""},r.handleChange=r.handleChange.bind(Object(h.a)(r)),r.handleSubmit=r.handleSubmit.bind(Object(h.a)(r)),r}return Object(u.a)(a,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this.state.value.replace(/\s/g,"").split(",").map(Number);this.props.user(t),e.preventDefault()}},{key:"render",value:function(){return console.log(this.props),Object(r.jsxs)(O.a,Object(k.a)(Object(k.a)({},this.props),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(r.jsx)(O.a.Header,{closeButton:!0,style:{backgroundColor:"aqua",border:"none"},children:Object(r.jsx)(O.a.Title,{id:"contained-modal-title-vcenter",style:{marginTop:"2%"},children:"Provide Input Elements"})}),Object(r.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(r.jsx)(O.a.Body,{style:{backgroundColor:"aqua",border:"none"},children:Object(r.jsx)("input",{type:"text",style:{width:"-webkit-fill-available",border:"none",height:"50px"},value:this.state.value,onChange:this.handleChange})}),Object(r.jsx)(O.a.Footer,{style:{backgroundColor:"aqua",border:"none"},children:Object(r.jsx)("input",{type:"submit",style:{borderRadius:"5px",padding:"inherit",background:"none"},onClick:this.props.onHide,value:"Submit"})})]})]}))}}]),a}(o.a.Component),x=(a(19),10),S="turquoise",w="gold",B="red",E=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).state={array:[],modalshow:!1,userip:!1,compare:!0,array1:[],array2:[],array3:[],array4:[],narraybars:250,theme:"Dark"},r.modalShowtoggle=r.modalShowtoggle.bind(Object(h.a)(r)),r.modalHidetoggle=r.modalHidetoggle.bind(Object(h.a)(r)),r.startCompare=r.startCompare.bind(Object(h.a)(r)),r.handleChange=r.handleChange.bind(Object(h.a)(r)),r.handleSpeedChange=r.handleSpeedChange.bind(Object(h.a)(r)),r.themechange=r.themechange.bind(Object(h.a)(r)),r.user=r.user.bind(Object(h.a)(r)),r}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.resetArray(),this.themechange()}},{key:"componentWillUnmount",value:function(){this.props.th()}},{key:"resetArray",value:function(){var e=[];if(this.setState({userip:!1}),!this.state.userip){console.log(this.state.narraybars);for(var t=0;t<this.state.narraybars;t++)e.push(N(5,(window.innerHeight-450)/4));this.setState({array:e}),this.setState({array1:e}),this.setState({array2:e}),this.setState({array3:e}),this.setState({array4:e}),e=[]}}},{key:"user",value:function(e){this.setState({array:e}),this.setState({array1:e}),this.setState({array2:e}),this.setState({array3:e}),this.setState({array4:e})}},{key:"mergeSort",value:function(){for(var e=g(this.state.array1.slice()),t=function(t){var a=document.getElementsByClassName("array-bar1");if(t%3!==2){var r=Object(i.a)(e[t],2),n=r[0],o=r[1],s=a[n].style,l=a[o].style,c=t%3===0?w:S;setTimeout((function(){s.backgroundColor=c,l.backgroundColor=c}),t*x)}else setTimeout((function(){var r=Object(i.a)(e[t],2),n=r[0],o=r[1];a[n].style.height="".concat(o,"px")}),t*x)},a=0;a<e.length;a++)t(a)}},{key:"quickSort",value:function(){for(var e=m(this.state.array2.slice()),t=function(t){var a=document.getElementsByClassName("array-bar2");if(t%3!==1)if(t%3===0){var r=Object(i.a)(e[t],3),n=r[0],o=r[1],s=r[2],l=a[n].style,c=a[o].style,u=a[s].style;setTimeout((function(){l.backgroundColor=w,c.backgroundColor=w,u.backgroundColor=B}),t*x)}else{var h=Object(i.a)(e[t],3),d=h[0],b=h[1],g=h[2],y=a[d].style,m=a[b].style,j=a[g].style;setTimeout((function(){y.backgroundColor=S,m.backgroundColor=S,j.backgroundColor=S}),t*x)}else setTimeout((function(){if(0!==e[t].length){var r=Object(i.a)(e[t],4),n=r[0],o=r[1],s=r[2],l=r[3];a[n].style.height="".concat(l,"px"),a[o].style.height="".concat(s,"px")}}),t*x)},a=0;a<e.length;a++)t(a)}},{key:"heapSort",value:function(){for(var e=p(this.state.array3.slice()),t=function(t){var a=document.getElementsByClassName("array-bar3");if(t%3!==1){var r=Object(i.a)(e[t],2),n=r[0],o=r[1],s=a[n].style,l=a[o].style,c=t%3===0?w:S;setTimeout((function(){s.backgroundColor=c,l.backgroundColor=c}),t*x)}else setTimeout((function(){if(0!==e[t].length){var r=Object(i.a)(e[t],4),n=r[0],o=r[1],s=r[2],l=r[3];a[n].style.height="".concat(l,"px"),a[o].style.height="".concat(s,"px")}}),t*x)},a=0;a<e.length;a++)t(a)}},{key:"bubbleSort",value:function(){for(var e=f(this.state.array4.slice()),t=function(t){var a=document.getElementsByClassName("array-bar4");if(t%3!==1){var r=Object(i.a)(e[t],2),n=r[0],o=r[1],s=a[n].style,l=a[o].style,c=t%3===0?w:S;setTimeout((function(){s.backgroundColor=c,l.backgroundColor=c}),t*x)}else setTimeout((function(){if(0!==e[t].length){var r=Object(i.a)(e[t],4),n=r[0],o=r[1],s=r[2],l=r[3];a[n].style.height="".concat(l,"px"),a[o].style.height="".concat(s,"px")}}),t*x)},a=0;a<e.length;a++)t(a)}},{key:"testSortingAlgorithms",value:function(){for(var e=0;e<100;e++){for(var t=[],a=N(1,1e3),r=0;r<a;r++)t.push(N(-1e3,1e3));var n=t.slice().sort((function(e,t){return e-t})),o=g(t.slice());console.log(T(n,o))}}},{key:"startCompare",value:function(){this.mergeSort(),this.quickSort(),this.heapSort(),this.bubbleSort()}},{key:"modalShowtoggle",value:function(){this.setState({userip:!0}),this.setState({modalshow:!0})}},{key:"modalHidetoggle",value:function(){this.setState({modalshow:!1})}},{key:"handleChange",value:function(e){var t=this;this.setState({narraybars:parseInt(e.target.value)},(function(){return t.resetArray()}))}},{key:"handleSpeedChange",value:function(e){x=10-e.target.value}},{key:"themechange",value:function(){if("Dark"==this.state.theme){document.documentElement.style.backgroundColor="black",S="turquoise",w="gold",B="red",this.setState({theme:"Light"});for(var e=document.getElementsByTagName("button"),t=0;t<e.length;t++)e[t].style.color="white",e[t].style.borderColor="gold";for(e=document.getElementsByTagName("p"),t=0;t<e.length;t++)e[t].style.color="gold";document.getElementById("yoiu").style.color="gold",document.getElementById("yoiw").style.color="gold",document.getElementById("yut").style.backgroundColor="black",document.getElementById("yut").style.color="gold"}else{document.documentElement.style.backgroundColor="#D2D6DB",S="#072F5F",w="red",B="yellow",this.setState({theme:"Dark"}),document.getElementById("yoiu").style.color="black",document.getElementById("yoiw").style.color="black";for(e=document.getElementsByTagName("button"),t=0;t<e.length;t++)e[t].style.color="black",e[t].style.borderColor="#072F5F";for(e=document.getElementsByTagName("p"),t=0;t<e.length;t++)e[t].style.color="black";document.getElementById("yut").style.backgroundColor="#D2D6DB",document.getElementById("yut").style.color="#072F5F"}}},{key:"render",value:function(){var e=this,t=this.state.array1,a=this.state.array2,n=this.state.array3,o=this.state.array4,s=this.state.array.length;return Object(r.jsxs)(r.Fragment,{children:[this.state.compare&&Object(r.jsxs)("div",{className:"array-container",children:[Object(r.jsx)("p",{style:{color:"gold",margin:"unset"},children:"Merge Sort"}),t.map((function(e,t){return Object(r.jsx)("div",{className:"array-bar1",style:{backgroundColor:S,height:"".concat(e,"px"),width:"".concat(44/s,"%"),margin:"0 ".concat(22/s,"%")}},t+"1")})),Object(r.jsx)("br",{}),Object(r.jsx)("p",{style:{color:"gold",margin:"unset"},children:"Quick Sort"}),a.map((function(e,t){return Object(r.jsx)("div",{className:"array-bar2",style:{backgroundColor:S,height:"".concat(e,"px"),width:"".concat(44/s,"%"),margin:"0 ".concat(22/s,"%")}},t+"2")})),Object(r.jsx)("br",{}),Object(r.jsx)("p",{style:{color:"gold",margin:"unset"},children:"Heap Sort"}),n.map((function(e,t){return Object(r.jsx)("div",{className:"array-bar3",style:{backgroundColor:S,height:"".concat(e,"px"),width:"".concat(44/s,"%"),margin:"0 ".concat(22/s,"%")}},t+"3")})),Object(r.jsx)("br",{}),Object(r.jsx)("p",{style:{color:"gold",margin:"unset"},children:"Bubble Sort"}),o.map((function(e,t){return Object(r.jsx)("div",{className:"array-bar4",style:{backgroundColor:S,height:"".concat(e,"px"),width:"".concat(44/s,"%"),margin:"0 ".concat(22/s,"%")}},t+"4")})),Object(r.jsx)("br",{}),Object(r.jsx)("button",{onClick:function(){return e.resetArray()},children:"Generate New Array"}),Object(r.jsx)("button",{onClick:function(){return e.mergeSort()},children:"Merge Sort"}),Object(r.jsx)("button",{onClick:function(){return e.quickSort()},children:"Quick Sort"}),Object(r.jsx)("button",{onClick:function(){return e.heapSort()},children:"Heap Sort"}),Object(r.jsx)("button",{onClick:function(){return e.bubbleSort()},children:"Bubble Sort"}),Object(r.jsx)("button",{onClick:function(){return e.startCompare()},children:"Start"}),Object(r.jsx)("button",{onClick:this.modalShowtoggle,children:"User Input"}),Object(r.jsx)("button",{onClick:function(t){return e.props.comparealgo(!1)},children:"Revert"}),Object(r.jsx)("button",{onClick:this.themechange,children:this.state.theme}),Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{style:{display:"inline-flex"},children:[Object(r.jsxs)("div",{id:"yoiu",style:{color:"gold",margin:"10px"},children:["Number of Bars:  ",Object(r.jsx)("input",{type:"number",value:this.state.narraybars,onChange:this.handleChange})," "]}),Object(r.jsxs)("div",{id:"yoiw",style:{color:"gold",margin:"10px"},children:["Animation Speed:  ",Object(r.jsx)("input",{type:"range",value:null,min:"1",max:"9",onChange:this.handleSpeedChange})," "]})]})]}),this.state.userip&&Object(r.jsx)(C,{show:this.state.modalshow,onHide:this.modalHidetoggle,user:this.user})]})}}]),a}(o.a.Component);function N(e,t){return Math.floor(Math.random()*(t-e+1)+e)}function T(e,t){if(e.length!==t.length)return!1;for(var a=0;a<e.length;a++)if(e[a]!==t[a])return!1;return!0}var I=a(21),D=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(r.jsxs)(I.a,{id:"yut",className:"jumbo",children:[Object(r.jsx)("h2",{children:"Welcome to Sorting Visualizer"}),Object(r.jsx)("h5",{children:"Sorting Visualizer is a React application build to visualize various sorting algorithms"}),Object(r.jsx)("a",{href:"https://github.com/lokeshrbohara/Comparative-Sorting-Visualizer",children:Object(r.jsx)("img",{src:"https://img.icons8.com/fluent/48/000000/github.png",alt:"Go to Github Repository"})})]})}}]),a}(o.a.Component),F="turquoise",H="gold",A="red",q=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).state={array:[],modalshow:!1,userip:!1,compare:!1,narraybars:250,sarray:10,theme:"Dark"},r.modalShowtoggle=r.modalShowtoggle.bind(Object(h.a)(r)),r.modalHidetoggle=r.modalHidetoggle.bind(Object(h.a)(r)),r.comparealgo=r.comparealgo.bind(Object(h.a)(r)),r.handleChange=r.handleChange.bind(Object(h.a)(r)),r.handleSpeedChange=r.handleSpeedChange.bind(Object(h.a)(r)),r.themechange=r.themechange.bind(Object(h.a)(r)),r.user=r.user.bind(Object(h.a)(r)),r}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.resetArray(),this.themechange()}},{key:"resetArray",value:function(){var e=[];if(this.setState({userip:!1}),!this.state.userip){for(var t=0;t<this.state.narraybars;t++)e.push(M(5,window.innerHeight-350));this.setState({array:e})}}},{key:"user",value:function(e){this.setState({array:e})}},{key:"mergeSort",value:function(){for(var e=this,t=g(this.state.array),a=function(a){var r=document.getElementsByClassName("array-bar");if(a%3!==2){var n=Object(i.a)(t[a],2),o=n[0],s=n[1],l=r[o].style,c=r[s].style,u=a%3===0?H:F;setTimeout((function(){l.backgroundColor=u,c.backgroundColor=u}),a*e.state.sarray)}else setTimeout((function(){var e=Object(i.a)(t[a],2),n=e[0],o=e[1];r[n].style.height="".concat(o,"px")}),a*e.state.sarray)},r=0;r<t.length;r++)a(r)}},{key:"quickSort",value:function(){for(var e=this,t=m(this.state.array),a=function(a){var r=document.getElementsByClassName("array-bar");if(a%3!==1)if(a%3===0){var n=Object(i.a)(t[a],3),o=n[0],s=n[1],l=n[2],c=r[o].style,u=r[s].style,h=r[l].style;setTimeout((function(){c.backgroundColor=H,u.backgroundColor=H,h.backgroundColor=A}),a*e.state.sarray)}else{var d=Object(i.a)(t[a],3),b=d[0],g=d[1],y=d[2],m=r[b].style,j=r[g].style,f=r[y].style;setTimeout((function(){m.backgroundColor=F,j.backgroundColor=F,f.backgroundColor=F}),a*e.state.sarray)}else setTimeout((function(){if(0!==t[a].length){var e=Object(i.a)(t[a],4),n=e[0],o=e[1],s=e[2],l=e[3];r[n].style.height="".concat(l,"px"),r[o].style.height="".concat(s,"px")}}),a*e.state.sarray)},r=0;r<t.length;r++)a(r)}},{key:"heapSort",value:function(){for(var e=this,t=p(this.state.array),a=function(a){var r=document.getElementsByClassName("array-bar");if(a%3!==1){var n=Object(i.a)(t[a],2),o=n[0],s=n[1],l=r[o].style,c=r[s].style,u=a%3===0?H:F;setTimeout((function(){l.backgroundColor=u,c.backgroundColor=u}),a*e.state.sarray)}else setTimeout((function(){if(0!==t[a].length){var e=Object(i.a)(t[a],4),n=e[0],o=e[1],s=e[2],l=e[3];r[n].style.height="".concat(l,"px"),r[o].style.height="".concat(s,"px")}}),a*e.state.sarray)},r=0;r<t.length;r++)a(r)}},{key:"bubbleSort",value:function(){for(var e=this,t=f(this.state.array),a=function(a){var r=document.getElementsByClassName("array-bar");if(a%3!==1){var n=Object(i.a)(t[a],2),o=n[0],s=n[1],l=r[o].style,c=r[s].style,u=a%3===0?H:F;setTimeout((function(){l.backgroundColor=u,c.backgroundColor=u}),a*e.state.sarray)}else setTimeout((function(){if(0!==t[a].length){var e=Object(i.a)(t[a],4),n=e[0],o=e[1],s=e[2],l=e[3];r[n].style.height="".concat(l,"px"),r[o].style.height="".concat(s,"px")}}),a*e.state.sarray)},r=0;r<t.length;r++)a(r)}},{key:"testSortingAlgorithms",value:function(){for(var e=0;e<100;e++){for(var t=[],a=M(1,1e3),r=0;r<a;r++)t.push(M(-1e3,1e3));var n=t.slice().sort((function(e,t){return e-t})),o=g(t.slice());console.log(z(n,o))}}},{key:"comparealgo",value:function(e){this.setState({compare:e})}},{key:"modalShowtoggle",value:function(){this.setState({userip:!0}),this.setState({modalshow:!0})}},{key:"modalHidetoggle",value:function(){this.setState({modalshow:!1})}},{key:"handleChange",value:function(e){var t=this;this.setState({narraybars:parseInt(e.target.value)},(function(){return t.resetArray()}))}},{key:"handleSpeedChange",value:function(e){this.setState((function(){return{sarray:10-e.target.value}}))}},{key:"themechange",value:function(){if("Dark"==this.state.theme){document.documentElement.style.backgroundColor="black",F="turquoise",H="gold",A="red",this.setState({theme:"Light"});for(var e=document.getElementsByTagName("button"),t=0;t<e.length;t++)e[t].style.color="white",e[t].style.borderColor="gold";document.getElementById("yoiu").style.color="gold",document.getElementById("yoiw").style.color="gold",document.getElementById("yut").style.backgroundColor="black",document.getElementById("yut").style.color="gold"}else{document.documentElement.style.backgroundColor="#D2D6DB",F="#072F5F",H="red",A="yellow",this.setState({theme:"Dark"}),document.getElementById("yoiu").style.color="black",document.getElementById("yoiw").style.color="black",document.getElementById("yut").style.backgroundColor="#D2D6DB",document.getElementById("yut").style.color="#072F5F";for(e=document.getElementsByTagName("button"),t=0;t<e.length;t++)e[t].style.color="black",e[t].style.borderColor="#072F5F"}}},{key:"render",value:function(){var e=this,t=this.state.array,a=this.state.array.length;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(D,{}),!this.state.compare&&Object(r.jsxs)("div",{className:"array-container",children:[t.map((function(e,t){return Object(r.jsx)("div",{className:"array-bar",style:{backgroundColor:F,height:"".concat(e,"px"),width:"".concat(44/a,"%"),margin:"0 ".concat(22/a,"%")}},t)})),Object(r.jsx)("br",{}),Object(r.jsx)("button",{onClick:function(){return e.resetArray()},children:"Generate New Array"}),Object(r.jsx)("button",{onClick:function(){return e.mergeSort()},children:"Merge Sort"}),Object(r.jsx)("button",{onClick:function(){return e.quickSort()},children:"Quick Sort"}),Object(r.jsx)("button",{onClick:function(){return e.heapSort()},children:"Heap Sort"}),Object(r.jsx)("button",{onClick:function(){return e.bubbleSort()},children:"Bubble Sort"}),Object(r.jsx)("button",{onClick:this.modalShowtoggle,children:"User Input"}),Object(r.jsx)("button",{onClick:function(t){return e.comparealgo(!0)},children:"Compare"}),Object(r.jsx)("button",{onClick:this.themechange,children:this.state.theme}),Object(r.jsxs)("div",{style:{display:"inline-flex"},children:[Object(r.jsxs)("div",{id:"yoiu",style:{color:"gold",margin:"10px"},children:["Number of Bars:  ",Object(r.jsx)("input",{type:"number",value:this.state.narraybars,onChange:this.handleChange})," "]}),Object(r.jsxs)("div",{id:"yoiw",style:{color:"gold",margin:"10px"},children:["Animation Speed:  ",Object(r.jsx)("input",{type:"range",value:null,min:"1",max:"9",onChange:this.handleSpeedChange})," "]})]})]}),this.state.compare&&Object(r.jsx)(E,{compare:this.state.compare,comparealgo:this.comparealgo,th:this.themechange}),this.state.userip&&Object(r.jsx)(C,{show:this.state.modalshow,onHide:this.modalHidetoggle,user:this.user})]})}}]),a}(o.a.Component);function M(e,t){return Math.floor(Math.random()*(t-e+1)+e)}function z(e,t){if(e.length!==t.length)return!1;for(var a=0;a<e.length;a++)if(e[a]!==t[a])return!1;return!0}a(32);var G=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(q,{})})},L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,36)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,o=t.getLCP,s=t.getTTFB;a(e),r(e),n(e),o(e),s(e)}))};l.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(G,{})}),document.getElementById("root")),L()}},[[33,1,2]]]);
//# sourceMappingURL=main.992de0a8.chunk.js.map