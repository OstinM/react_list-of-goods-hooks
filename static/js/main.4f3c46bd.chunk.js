(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c,o=n(7),s=n.n(o),r=n(6),a=n(8),i=n(1),l=(n(13),n(4)),u=n.n(l);n(14);!function(t){t.Alphabet="alphabetical",t.Length="length",t.DefaultSort="byDefault"}(c||(c={}));var b=n(0),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];var j=function(){var t=Object(i.useState)(c.DefaultSort),e=Object(r.a)(t,2),n=e[0],o=e[1],s=Object(i.useState)(!1),l=Object(r.a)(s,2),j=l[0],f=l[1],g=function(t,e,n){var o=Object(a.a)(t);switch(e){case c.Length:o.sort((function(t,e){return t.length-e.length}));break;case c.Alphabet:o.sort((function(t,e){return t.localeCompare(e)}))}return n&&o.reverse(),o}(h,n,j),p=j||n!==c.DefaultSort;return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:u()("button is-info",{"is-light":n!==c.Alphabet}),onClick:function(){return o(c.Alphabet)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:u()("button is-success",{"is-light":n!==c.Length}),onClick:function(){return o(c.Length)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:u()("button is-warning",{"is-light":!j}),onClick:function(){return f((function(t){return!t}))},children:"Reverse"}),p&&Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){f(!1),o(c.DefaultSort)},children:"Reset"})]}),Object(b.jsx)("ul",{children:g.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};s.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.4f3c46bd.chunk.js.map