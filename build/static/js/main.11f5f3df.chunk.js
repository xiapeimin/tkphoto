(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{24:function(e,t,a){e.exports=a(37)},29:function(e,t,a){e.exports=a.p+"static/media/test.9d229d34.less"},35:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n,o=a(0),i=a.n(o),c=a(19),s=a.n(c),r=a(9),d=a(10),l=a(12),m=a(11),u=a(13),g=a(21),h=a(5),v=a(20),p=a(8),y=(a(29),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).readyVideo=function(e){Object(p.a)(a).setState({showMod:!0,isShot:!1},(function(){var e=document.getElementById("myVideo"),t=(document.getElementById("myCanvas"),Object(v.a)({audio:!1,video:!0},"video",{}));navigator.getMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMeddia||navigator.msGetUserMedia,navigator.mediaDevices&&navigator.mediaDevices.getUserMedia?navigator.mediaDevices.getUserMedia(t).then((function(t){n="function"===typeof t.stop?t:t.getTracks()[0],e.srcObject=t,e.play()})).catch((function(e){console.log(e)})):navigator.getMedia&&navigator.getMedia(t,(function(t){n=t.getTracks()[0],e.srcObject=t,e.play()}),(function(e){console.log(e)}))}))},a.shot=function(){var e=document.getElementById("myVideo");document.getElementById("myCanvas").getContext("2d").drawImage(e,0,0,600,600),a.setState({isShot:!0})},a.sureShot=function(){var e=Object(p.a)(a),t=document.getElementById("myCanvas").toDataURL("image/png");e.setState({img:t}),e.cancel()},a.cancel=function(){document.getElementById("myVideo")&&n&&n.stop(),a.setState({isShot:!1,showMod:!1})},a.state={isShot:!1,showMod:!1,img:""},a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state,t=e.isShot,a=e.showMod,n=e.img;return i.a.createElement("div",{className:"video_page"},i.a.createElement("button",{onClick:this.readyVideo},"\u62cd\u7167"),a?i.a.createElement("div",{className:"video_model"},i.a.createElement("div",{className:"video_box"},i.a.createElement("video",{id:"myVideo",width:"300",height:"300"}),i.a.createElement("canvas",{id:"myCanvas",width:"600",height:"600",style:{width:"300px",height:"300px"}})),i.a.createElement("button",{onClick:this.shot},t?"\u91cd\u62cd":"\u62cd\u7167"),t?i.a.createElement("button",{onClick:this.sureShot},"\u786e\u8ba4"):null,i.a.createElement("button",{onClick:this.cancel},"\u53d6\u6d88")):null,n?i.a.createElement("img",{src:n}):null)}}]),t}(o.Component)),b=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(g.a,null,i.a.createElement("div",null,i.a.createElement(h.c,null,i.a.createElement(h.a,{path:"/",component:y})))))}}]),t}(o.Component);a(35),a(36);s.a.render(i.a.createElement(b,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.11f5f3df.chunk.js.map