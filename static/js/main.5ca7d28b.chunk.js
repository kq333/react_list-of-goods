(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(e,t,s){},15:function(e,t,s){"use strict";s.r(t);var r,n=s(3),i=s.n(n),o=s(4),c=s(5),a=s(7),l=s(6),u=s(1),d=s.n(u),h=(s(12),s(13),s(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(e){e[e.NONE=0]="NONE",e[e.ALPHABET=1]="ALPHABET",e[e.LENGTH=2]="LENGTH"}(r||(r={}));var y=function(e){Object(a.a)(s,e);var t=Object(l.a)(s);function s(){var e;Object(o.a)(this,s);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={copyArrayList:[].concat(b),isReversed:!1,sortType:r.NONE},e}return Object(c.a)(s,[{key:"getReorderedGoods",value:function(e){var t,s=this;switch(e){case"alphabetical":t=this.state.copyArrayList.slice().sort((function(e,t){return s.state.isReversed?t.localeCompare(e):e.localeCompare(t)})),this.setState({copyArrayList:t,sortType:r.ALPHABET});break;case"length":t=this.state.copyArrayList.slice().sort((function(e,t){return s.state.isReversed?t.length-e.length:e.length-t.length})),this.setState({copyArrayList:t,sortType:r.LENGTH});break;case"reverse":t=this.state.copyArrayList.slice().reverse(),this.setState((function(e){return{copyArrayList:t,isReversed:!e.isReversed}}));break;case"reset":t=b.slice(),this.setState({copyArrayList:t,isReversed:!1,sortType:r.NONE});break;default:t=this.state.copyArrayList.slice()}}},{key:"render",value:function(){var e=this,t=this.state,s=t.copyArrayList,n=t.isReversed,i=t.sortType,o=1===i&&!n||1===i&&n?"button is-info":"button is-info is-light",c=2===i&&!n||2===i&&n?"button is-success":"button is-success is-light",a=n?"button is-warning":"button is-warning is-light";return Object(h.jsxs)("div",{className:"section content",children:[Object(h.jsxs)("div",{className:"buttons",children:[Object(h.jsx)("button",{type:"button",className:o,onClick:function(){return e.getReorderedGoods("alphabetical")},children:"Sort alphabetically"}),Object(h.jsx)("button",{type:"button",className:c,onClick:function(){return e.getReorderedGoods("length")},children:"Sort by length"}),Object(h.jsx)("button",{type:"button",className:a,onClick:function(){return e.getReorderedGoods("reverse")},children:"Reverse"}),(n||i!==r.NONE)&&Object(h.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){return e.getReorderedGoods("reset")},children:"Reset"})]}),Object(h.jsx)("ul",{children:s.map((function(e){return Object(h.jsx)("li",{"data-cy":"Good",children:e},e)}))})]})}}]),s}(d.a.Component);i.a.render(Object(h.jsx)(y,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.5ca7d28b.chunk.js.map