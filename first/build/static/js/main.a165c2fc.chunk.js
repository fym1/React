(this.webpackJsonp222=this.webpackJsonp222||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(7),r=a.n(l),s=(a(13),a(1)),i=a(2),o=a(4),u=a(3),m=a(5),p=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).enterPress=function(e){"Enter"===e.key&&(a.props.add(e.target.value),e.target.value="")},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("input",{ref:"title",onKeyDown:this.enterPress,className:"search",placeholder:"\u6dfb\u52a0ToDo"}))}}]),t}(n.Component),h=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).getNum=function(){var e=0;return a.props.list.map((function(t){t.checked||e++})),console.log(e),e},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.list,a=0,n=0;return t.map((function(e){e.checked?n++:a++})),c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"list"},c.a.createElement("h2",{className:"list-title"},"\u6b63\u5728\u8fdb\u884c",c.a.createElement("span",{className:"title-numb"},a))),c.a.createElement("ul",null,t.map((function(t,a){if(!t.checked)return c.a.createElement("li",{key:a,className:"ToDoItem"+("true"===e.props.list?" ToDoItem-finish":"")},c.a.createElement("input",{type:"checkbox",checked:t.checked,onChange:function(t){return e.props.che(a,t)}}),c.a.createElement("p",null,t.title),c.a.createElement("span",{onClick:function(t){return e.props.del(a,t)}},"-"))}))),c.a.createElement("div",{className:"list"},c.a.createElement("h2",{className:"list-title"},"\u5df2\u7ecf\u5b8c\u6210",c.a.createElement("span",{className:"title-numb"},n))),c.a.createElement("ul",null,t.map((function(t,a){if(t.checked)return c.a.createElement("li",{key:a,className:"ToDoItem"+("true"===e.props.list?" ToDoItem-finish":"")},c.a.createElement("input",{type:"checkbox",checked:t.checked,onChange:function(t){return e.props.che(a,t)}}),c.a.createElement("p",null,t.title),c.a.createElement("span",{onClick:function(t){return e.props.del(a,t)}},"-"))}))))}}]),t}(n.Component),d=(a(14),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).addData=function(e){var t=a.state.list;t.push({title:e,checked:!1}),a.setState({list:t}),a.refs.title.value="",localStorage.setItem("todoList",JSON.stringify(t)),console.log(a.state.list)},a.delData=function(e){var t=a.state.list;t.splice(e,1),a.setState({list:t}),localStorage.setItem("todoList",JSON.stringify(t))},a.checkData=function(e){var t=a.state.list;t[e].checked=!t[e].checked,a.setState({list:t}),localStorage.setItem("todoList",JSON.stringify(t))},a.state={list:[],name:"TodoList2"},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("todoList"));e&&this.setState({list:e})}},{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"header-content"},c.a.createElement("div",{className:"header-title"},"ToDoList"),c.a.createElement(p,{add:this.addData,ref:"title"}))),c.a.createElement("br",null),c.a.createElement(h,{del:this.delData,list:this.state.list,che:this.checkData,className:"content"}))}}]),t}(c.a.Component));r.a.render(c.a.createElement(d,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.a165c2fc.chunk.js.map