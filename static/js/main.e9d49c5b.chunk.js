(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{74:function(n,e,t){},75:function(n,e,t){"use strict";t.r(e);var o,a,i,r,c,s,l,p,d=t(0),b=t(10),u=t.n(b),x=t(15),h=t(6),g=t(3),m=t(4),f=m.b.li(o||(o=Object(g.a)(["\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n\n  .ImageGalleryItem-image {\n    width: 100%;\n    height: 260px;\n    object-fit: cover;\n    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    &:hover {\n      transform: scale(1.03);\n      cursor: zoom-in;\n    }\n  }\n"]))),j=t(1),O=function(n){var e=n.image,t=n.onOpenModal;return Object(j.jsx)(f,{children:Object(j.jsx)("img",{src:e.webformatURL,alt:e.tags,className:"ImageGalleryItem-image",onClick:function(){return t(e.largeImageURL)}})})},y=m.b.ul(a||(a=Object(g.a)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),v=function(n){var e=n.images,t=n.onOpenModal;return Object(j.jsx)(y,{children:e.map((function(n){return Object(j.jsx)(O,{image:n,onOpenModal:t},n.id)}))})},w=m.b.header(i||(i=Object(g.a)(['\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #b31961;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n\n  .SearchForm {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    max-width: 600px;\n    background-color: #fff;\n    border-radius: 3px;\n    overflow: hidden;\n  }\n\n  .SearchForm-button {\n    display: inline-block;\n    width: 48px;\n    height: 48px;\n    border: 0;\n    background-image: url("https://image.flaticon.com/icons/svg/149/149852.svg");\n    background-size: 40%;\n    background-repeat: no-repeat;\n    background-position: center;\n    opacity: 0.6;\n    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    cursor: pointer;\n    outline: none;\n  }\n\n  .SearchForm-button:hover {\n    opacity: 1;\n  }\n\n  .SearchForm-button-label {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    clip-path: inset(50%);\n    border: 0;\n  }\n\n  .SearchForm-input {\n    display: inline-block;\n    width: 100%;\n    font: inherit;\n    font-size: 20px;\n    border: none;\n    outline: none;\n    padding-left: 4px;\n    padding-right: 4px;\n  }\n\n  .SearchForm-input::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n']))),S=function(n){var e=n.onSubmit,t=Object(d.useState)(""),o=Object(h.a)(t,2),a=o[0],i=o[1];return Object(j.jsx)(w,{children:Object(j.jsxs)("form",{className:"SearchForm",onSubmit:function(n){n.preventDefault(),e(a),i("")},children:[Object(j.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(j.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(j.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",name:"searchImg",value:a,onChange:function(n){var e=n.target.value;i(e)}})]})})},k=t(29),F=t.n(k),z="23926107-b5133ff0aaa254f46e578b146",M=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return F.a.get("https://pixabay.com/api/?q=".concat(n,"&page=").concat(e,"&key=").concat(z,"&image_type=photo&orientation=horizontal&per_page=12"))},I=m.b.div(r||(r=Object(g.a)(["\n  /* display: grid; */\n  grid-template-columns: 1fr;\n  grid-gap: 16px;\n  padding-bottom: 24px;\n"]))),N=m.b.button(c||(c=Object(g.a)(["\n  padding: 8px 16px;\n  border-radius: 2px;\n  background-color: #b31961;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n\n  &:hover,\n  &:focus {\n    background-color: #b31961;\n  }\n"]))),C=function(n){var e=n.onLoadMore;return Object(j.jsx)("div",{className:"WrapperForBtn",children:Object(j.jsx)(N,{type:"button",onClick:e,children:"Load more"})})},E=m.b.div(s||(s=Object(g.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n\n  .Modal {\n    max-width: calc(100vw - 48px);\n    max-height: calc(100vh - 24px);\n  }\n"]))),L=document.querySelector("#modal-root"),B=function(n,e){var t=document.querySelector("body");t.style.overflow=n,t.style.position=e},U=function(n){var e=n.onCloseModal,t=n.children;Object(d.useEffect)((function(){return window.addEventListener("keydown",o),B("hidden","fixed"),function(){window.removeEventListener("keydown",o),B("auto","relative")}}),[]);var o=function(n){"Escape"===n.code&&e()};return Object(b.createPortal)(Object(j.jsx)(E,{onClick:function(n){n.currentTarget===n.target&&e()},children:Object(j.jsx)("div",{className:"Modal",children:t})}),L)},q=t(30),R=t.n(q),T=m.b.div(l||(l=Object(g.a)(["\n  text-align: center;\n"]))),D=function(){return Object(j.jsx)(T,{children:Object(j.jsx)(R.a,{type:"ThreeDots",color:"#00BFFF",height:100,width:100})})},G=function(){var n=Object(d.useState)(""),e=Object(h.a)(n,2),t=e[0],o=e[1],a=Object(d.useState)([]),i=Object(h.a)(a,2),r=i[0],c=i[1],s=Object(d.useState)(""),l=Object(h.a)(s,2),p=l[0],b=l[1],u=Object(d.useState)(""),g=Object(h.a)(u,2),m=(g[0],g[1]),f=Object(d.useState)(1),O=Object(h.a)(f,2),y=O[0],w=O[1],k=Object(d.useState)(!1),F=Object(h.a)(k,2),z=F[0],N=F[1],E=Object(d.useState)(!1),L=Object(h.a)(E,2),B=L[0],q=L[1];Object(d.useEffect)((function(){t&&(N(!0),M(t).then((function(n){c(n.data.hits),w((function(n){return n+1}))})).catch((function(n){return m(n)})).finally((function(){return N(!1)})))}),[t]);return Object(j.jsxs)(I,{children:[Object(j.jsx)(S,{onSubmit:function(n){""!==n&&o(n)}}),z?Object(j.jsx)(D,{}):Object(j.jsx)(v,{images:r,onOpenModal:function(n){q(!0),b(n)}}),Number.isInteger(r.length/12)&&r.length>0&&Object(j.jsx)(C,{onLoadMore:function(){N(!0),M(t,y).then((function(n){c((function(e){return[].concat(Object(x.a)(e),Object(x.a)(n.data.hits))})),w((function(n){return n+1}))})).catch((function(n){return m(n)})).finally((function(){return window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}),N(!1))}}),B&&Object(j.jsx)(U,{onCloseModal:function(){q(!1)},children:Object(j.jsx)("img",{src:p,alt:"img"})})]})},H=Object(m.a)(p||(p=Object(g.a)(["\n  html {\n  box-sizing: border-box;\n  width: 100vw;\n  overflow-x: hidden;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;\n  color: #212121;\n  background-color: #fff;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nimg {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\n\n.WrapperForBtn {\n  text-align: center;\n  margin: 10px 0;\n}\n\n"])));t(74);u.a.render(Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(H,{}),Object(j.jsx)(G,{})]}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.e9d49c5b.chunk.js.map