(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r,s=n(3),o=n.n(s),c=n(4),a=n(5),i=n(7),l=n(6),u=n(1),d=n.n(u),b=(n(12),n(13),n(0)),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(e){e[e.NONE=0]="NONE",e[e.ALPHABET=1]="ALPHABET",e[e.LENGTH=2]="LENGTH"}(r||(r={}));var p=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).state={sortType:r.NONE,isReversed:!1},e}return Object(a.a)(n,[{key:"getReorderedGoods",value:function(e){var t=this.state,n=t.sortType,s=t.isReversed,o=n,c=s;"alphabetical"===e&&(o=r.ALPHABET,c=!1),"length"===e&&(o=r.LENGTH,c=!1),"reverse"===e&&(c=!s,o=r.LENGTH),"reset"===e&&(o=r.NONE,c=!1),this.setState({sortType:o,isReversed:c})}},{key:"render",value:function(){var e=this,t=this.state,n=t.sortType,s=t.isReversed,o=[].concat(h);n===r.ALPHABET&&(o=o.sort((function(e,t){return e.localeCompare(t)}))),n===r.LENGTH&&(o=o.sort((function(e,t){return e.length-t.length}))),s&&(o=o.reverse());var c=n===r.ALPHABET,a=n===r.LENGTH;return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:"button is-info".concat(c?"":" is-light"),onClick:function(){return e.getReorderedGoods("alphabetical")},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:"button is-success".concat(a?"":" is-light"),onClick:function(){return e.getReorderedGoods("length")},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:"button is-warning".concat(s?"":" is-light"),onClick:function(){return e.getReorderedGoods("reverse")},children:"Reverse"}),n>0&&Object(b.jsx)("button",{type:"button",className:"button is-danger",onClick:function(){return e.getReorderedGoods("reset")},children:"Reset"})]}),Object(b.jsx)("ul",{children:o.map((function(e){return Object(b.jsx)("li",{children:e},e)}))})]})}}]),n}(d.a.Component);o.a.render(Object(b.jsx)(p,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.af3213e2.chunk.js.map