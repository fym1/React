(this.webpackJsonpa=this.webpackJsonpa||[]).push([[0],{160:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(9),o=n.n(c),l=n(16),r=n(17),s=n(19),m=n(18),g=n(20),h=n(10),d=(n(78),function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={data:["1","2"],imgHeight:176,data1:[{icon:"./images/home3.jpg",tit:"\u70ed\u95e8\u54c1\u724c"},{icon:"./images/home4.jpg",tit:"\u79c1\u4eba\u642d\u914d\u5e08"},{icon:"./images/home5.png",tit:"\u9009\u8d2d\u6307\u5357"}]},n}return Object(g.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({data:["1","2"]})}),100)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(h.e,{style:{backgroundColor:"#3fcccb",color:"#fff",height:"50px"}},"\u4f4f\u5427\u5bb6\u5c45"),i.a.createElement(h.b,{autoplay:!0,infinite:!0,beforeChange:function(e,t){return console.log("slide from ".concat(e," to ").concat(t))},afterChange:function(e){return console.log("slide to",e)}},this.state.data.map((function(t){return i.a.createElement("a",{key:t,href:"#",style:{display:"inline-block",width:"100%",height:200}},i.a.createElement("img",{src:"./images/home"+t+".png",alt:"",style:{width:"100%",verticalAlign:"top"},onLoad:function(){window.dispatchEvent(new Event("resize")),e.setState({imgHeight:"auto"})}}))}))),i.a.createElement(h.c,{data:this.state.data1,columnNum:3,hasLine:!1,itemStyle:{backgroundColor:"#eee"},renderItem:function(e){return i.a.createElement("div",{style:{width:"100px",height:"100px",marginLeft:"12px"}},i.a.createElement("div",null,i.a.createElement("img",{src:e.icon,style:{width:"100px",height:"100px"},alt:""})),i.a.createElement("div",{style:{color:"#000",fontSize:"14px",marginTop:"-100px",width:"100%",height:"100%",backgroundColor:"#00000029",position:"relative"}},i.a.createElement("p",{style:{lineHeight:"100px"}},e.tit)))}}),i.a.createElement("div",{style:{backgroundColor:"#fff"}},i.a.createElement("div",{style:{borderLeft:"4px #3fcccb solid"}},i.a.createElement("p",{style:{marginLeft:"2px"}},"\u70ed\u95e8\u63a8\u8350")),i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("img",{src:"./images/tuijian.jpg",style:{width:"100%",height:"200px"},alt:""})),i.a.createElement("div",{style:{color:"#000",fontSize:"14px",marginTop:"-30px",position:"relative",marginLeft:"10px"}},i.a.createElement("p",{style:{color:"#fff"}},"\u4ec0\u4e48\u662f\u82f1\u4f26\u88c5\u4fee\u98ce\u683c \u82f1\u4f26\u98ce\u5bb6\u88c5 \u82f1\u4f26\u98ce\u683c\u88c5\u4fee\u6548\u679c\u56fe")))))}}]),t}(a.Component)),f=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={tabs:[{title:i.a.createElement(h.a,null,"\u63a8\u8350")},{title:i.a.createElement(h.a,null,"\u51ac\u5b63")},{title:i.a.createElement(h.a,null,"\u5b9c\u5bb6")},{title:i.a.createElement(h.a,null,"\u5c0f\u6e05\u65b0")},{title:i.a.createElement(h.a,null,"\u5c0f\u6237\u578b")},{title:i.a.createElement(h.a,null,"\u4e2a\u6027\u8272\u5f69")},{title:i.a.createElement(h.a,null,"+")}],data1:[{icon:"./images/\u7075\u611f1.png",tit:"\u6a59\u8272\u5f8b\u52a8",icon2:"./images/p1.png"},{icon:"./images/\u7075\u611f2.png",tit:"\u513f\u7ae5\u623f",icon2:"./images/p2.png"},{icon:"./images/\u7075\u611f3.jpg",tit:"\u7ffb\u6eda\u5427\uff0c\u5730\u6bef\u541b",icon2:"./images/p3.png"},{icon:"./images/\u7075\u611f4.jpg",tit:"\u89d2\u843d\u91cc\u7684\u5e7b\u60f3",icon2:"./images/p4.png"},{icon:"./images/\u7075\u611f5.jpg",tit:"\u6a59\u8272\u5f8b\u52a8",icon2:"./images/p1.png"},{icon:"./images/\u7075\u611f6.png",tit:"\u6a59\u8272\u5f8b\u52a8",icon2:"./images/p2.png"}]},n}return Object(g.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(h.e,{style:{backgroundColor:"#3fcccb",color:"#fff",height:"50px"},rightContent:[i.a.createElement(h.d,{key:"0",type:"search",style:{marginRight:"16px"}})]},"\u7075\u611f"),i.a.createElement(h.h,{tabs:this.state.tabs,initialPage:0,onChange:function(e,t){console.log("onChange",t,e)},onTabClick:function(e,t){console.log("onTabClick",t,e)}}),i.a.createElement("div",null,i.a.createElement(h.c,{data:this.state.data1,columnNum:2,hasLine:!1,itemStyle:{backgroundColor:"#eee"},renderItem:function(e){return i.a.createElement("div",null,i.a.createElement("img",{src:e.icon,style:{width:"90%",height:"140px"},alt:""}),i.a.createElement("div",{style:{color:"#000",fontSize:"14px",height:"30px",width:"98%",marginLeft:"2%"}},i.a.createElement("div",{style:{backgroundColor:"#fff",width:"92%",height:"100%",marginLeft:"3%"}},i.a.createElement("img",{src:e.icon2,style:{float:"left",height:"100%",marginLeft:"2%"}}),i.a.createElement("p",{style:{float:"left",marginLeft:"5%",fontSize:"10%",color:"#686868",marginTop:"5%"}},e.tit),i.a.createElement("i",{className:"iconfont icon-xin",style:{float:"right",marginRight:"5%",color:"red",marginTop:"3%"}}))))}})))}}]),t}(a.Component),u=n(83),p=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={data:["1","2"],imgHeight:176,data1:[{icon:"./images/home3.jpg",tit:"\u70ed\u95e8\u54c1\u724c"},{icon:"./images/home4.jpg",tit:"\u79c1\u4eba\u642d\u914d\u5e08"},{icon:"./images/home5.png",tit:"\u9009\u8d2d\u6307\u5357"}],data2:[{tit:"\u684c",class:"iconfont icon-zhuozi",back:"#fd3d78"},{tit:"\u5e8a",class:"iconfont icon-chuang",back:"#2fc3fd"},{tit:"\u6905",class:"iconfont icon-yizi",back:"#fda22b"},{tit:"\u51e0",class:"iconfont icon-chaji",back:"#38d2d1"},{tit:"\u67dc",class:"iconfont icon-iconset0499",back:"#fc2b29"},{tit:"\u4e66\u67b6",class:"iconfont icon-shujia",back:"#4e4ef8"},{tit:"\u6c99\u53d1",class:"iconfont icon-tubiaoCSban-",back:"#ab13ff"},{tit:"\u5bb6\u5c45\u9970\u54c1",class:"iconfont icon-shanzi",back:"#3fdf85"},{tit:"\u6237\u5916\u5bb6\u5177",class:"iconfont icon-youpinjiaju_danxian_diaodeng",back:"#8a81c1"},{tit:"\u5168\u90e8\u5206\u7c7b",class:"iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-",back:"#75747a"}],data3:[{icon:"./images/store1.png",tit:"Top Art Studio \u6b27\u5f0f\u98ce\u683c\u7cbe\u7ec6...",price:"\uffe539.95"},{icon:"./images/store2.png",tit:"\u987a\u987a\u5de5\u827a\u6b27\u5f0f\u98ce\u683c\u5851\u6599\u5916\u6846\u9ed1...",price:"\uffe583.99"},{icon:"./images/store1.png",tit:"Top Art Studio \u6b27\u5f0f\u98ce\u683c\u7cbe\u7ec6...",price:"\uffe539.95"},{icon:"./images/store2.png",tit:"\u987a\u987a\u5de5\u827a\u6b27\u5f0f\u98ce\u683c\u5851\u6599\u5916\u6846\u9ed1...",price:"\uffe583.99"}]},n}return Object(g.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({data:["1","2"]})}),100)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(h.e,{style:{backgroundColor:"#3fcccb",color:"#fff",height:"50px"},rightContent:i.a.createElement("i",{style:{fontSize:22,lineHeight:"22px",marginRight:"16px"},className:"iconfont icon-gouwuche"})},"\u5546\u57ce"),i.a.createElement("div",{style:{position:"relative",width:"100%",height:"190px"}},i.a.createElement("div",{style:{position:"absolute",zIndex:"3",top:"0px",width:"100%",height:"25%",background:"rgba(36,41,44,0.5)"}},i.a.createElement("i",{className:"iconfont icon-caidan",style:Object(u.a)({marginTop:"2.5%",float:"left",marginLeft:"3%",width:"6%",height:"70%"},"float","left")}),i.a.createElement(h.f,{placeholder:"\u8f93\u5165\u5173\u952e\u5b57\u641c\u7d22",style:{width:"90%",background:"rgba(36,41,44,0.5)",textAlign:"left",float:"left"}})),i.a.createElement(h.b,{autoplay:!0,infinite:!0,beforeChange:function(e,t){return console.log("slide from ".concat(e," to ").concat(t))},afterChange:function(e){return console.log("slide to",e)},style:{zIndex:"2"}},this.state.data.map((function(t){return i.a.createElement("a",{key:t,href:"#",style:{display:"inline-block",width:"100%",height:200}},i.a.createElement("img",{src:"./images/s"+t+".png",alt:"",style:{width:"100%",verticalAlign:"top"},onLoad:function(){window.dispatchEvent(new Event("resize")),e.setState({imgHeight:"auto"})}}))})))),i.a.createElement(h.c,{data:this.state.data2,columnNum:5,hasLine:!1,renderItem:function(e){return i.a.createElement("div",{style:{marginLeft:"20%",width:"100%",height:"100%"}},i.a.createElement("div",{style:{width:"50%",height:"70%",borderRadius:"50%",backgroundColor:"".concat(e.back)}},i.a.createElement("i",{className:e.class,style:{marginBottom:"50%"}})),i.a.createElement("div",{style:{color:"#000",fontSize:"10px",marginLeft:"-50%"}},i.a.createElement("p",null,e.tit)))}}),i.a.createElement(h.c,{data:this.state.data3,columnNum:2,hasLine:!1,itemStyle:{backgroundColor:"#eee"},renderItem:function(e){return i.a.createElement("div",null,i.a.createElement("img",{src:e.icon,style:{width:"80%",height:"100%"}}),i.a.createElement("div",{style:{color:"#000",fontSize:"10%"}},i.a.createElement("p",{style:{float:"left",marginLeft:"10%",marginTop:"3%"}},e.tit),i.a.createElement("p",{style:{float:"left",marginLeft:"10%"}},e.price)))}}))}}]),t}(a.Component),b=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={selectedTab:"Home",hidden:!1,fullScreen:!1},n}return Object(g.a)(t,e),Object(r.a)(t,[{key:"renderContent",value:function(e){var t=this;return i.a.createElement("div",{style:{backgroundColor:"white",height:"100%",textAlign:"center"}},i.a.createElement("div",{style:{paddingTop:60}},"Clicked \u201c",e,"\u201d tab\uff0c show \u201c",e,"\u201d information"),i.a.createElement("a",{style:{display:"block",marginTop:40,marginBottom:20,color:"#108ee9"},onClick:function(e){e.preventDefault(),t.setState({hidden:!t.state.hidden})}},"Click to show/hide tab-bar"),i.a.createElement("a",{style:{display:"block",marginBottom:600,color:"#108ee9"},onClick:function(e){e.preventDefault(),t.setState({fullScreen:!t.state.fullScreen})}},"Click to switch fullscreen"))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{style:{position:"fixed",height:"100%",width:"100%",top:0}},i.a.createElement(h.g,{unselectedTintColor:"#949494",tintColor:"#33A3F4",barTintColor:"white",hidden:this.state.hidden},i.a.createElement(h.g.Item,{title:"\u9996\u9875",key:"Life",icon:i.a.createElement("i",{style:{fontSize:22,lineHeight:"22px"},className:"iconfont icon-fangzi"}),selectedIcon:i.a.createElement("i",{style:{fontSize:22,lineHeight:"22px"},className:"iconfont icon-fangzi-copy"}),selected:"home"===this.state.selectedTab,onPress:function(){e.setState({selectedTab:"home"})}},i.a.createElement(d,null)),i.a.createElement(h.g.Item,{icon:i.a.createElement("i",{style:{fontSize:22,lineHeight:"22px"},className:"iconfont icon-dengpao"}),selectedIcon:i.a.createElement("i",{style:{fontSize:22,lineHeight:"22px"},className:"iconfont icon-dengpao-copy"}),title:"\u7075\u611f",key:"Linggan",selected:"lingGan"===this.state.selectedTab,onPress:function(){e.setState({selectedTab:"lingGan"})}},i.a.createElement(f,null)),i.a.createElement(h.g.Item,{icon:i.a.createElement("i",{style:{fontSize:22,lineHeight:"22px"},className:"iconfont icon-store_icon"}),selectedIcon:i.a.createElement("i",{style:{fontSize:22,lineHeight:"22px"},className:"iconfont icon-store_icon-copy"}),title:"\u5546\u57ce",key:"Shangcheng",selected:"shangCheng"===this.state.selectedTab,onPress:function(){e.setState({selectedTab:"shangCheng"})}},i.a.createElement(p,null)),i.a.createElement(h.g.Item,{icon:i.a.createElement("i",{style:{fontSize:22,lineHeight:"22px"},className:"iconfont icon-wode"}),selectedIcon:i.a.createElement("i",{style:{fontSize:22,lineHeight:"22px"},className:"iconfont icon-wode-copy"}),title:"\u6211\u7684",key:"Wode",selected:"woDe"===this.state.selectedTab,onPress:function(){e.setState({selectedTab:"woDe"})}},"\u53e3\u7891")))}}]),t}(i.a.Component),y=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(b,null))}}]),t}(a.Component);n(159);o.a.render(i.a.createElement(y,null),document.getElementById("root"))},78:function(e,t,n){},84:function(e,t,n){e.exports=n(160)}},[[84,1,2]]]);
//# sourceMappingURL=main.c8ef4b08.chunk.js.map