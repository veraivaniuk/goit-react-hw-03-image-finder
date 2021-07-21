(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{27:function(e,t,a){},28:function(e,t,a){},48:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),c=a.n(o),i=(a(27),a(10)),s=a(5),l=a(6),u=a(8),h=a(7),g=(a(28),a(22)),m=a(1);var d=function(e){var t=e.buttonName;return Object(m.jsx)("button",{className:"SearchForm-button",type:"button",children:Object(m.jsx)("span",{className:"SearchForm-button-label",children:t})})},b=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChangeName=function(t){e.setState({query:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(Object(g.a)({},e.state)),e.reset()},e}return Object(l.a)(a,[{key:"reset",value:function(){this.setState({query:""})}},{key:"render",value:function(){var e=this.state.query;return Object(m.jsx)("header",{className:"Searchbar",children:Object(m.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(m.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:e,onChange:this.handleChangeName}),Object(m.jsx)(d,{buttonName:"Search"})]})})}}]),a}(n.Component),j=a(20),f=a.n(j),p=function(e,t){return f.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat("21864216-f735fea3a07168d74f35b2198","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},y=document.querySelector("#modal-root"),O=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){console.log(t),t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(m.jsx)("div",{className:"Overlay",onClick:this.handleBackdropClick,children:Object(m.jsx)("div",{className:"Modal",children:this.props.children})}),y)}}]),a}(n.Component),v=function(e){var t=e.id,a=e.webformatURL,n=e.largeImageURL,r=e.tags,o=e.onClick;return Object(m.jsx)("li",{className:"ImageGalleryItem",children:Object(m.jsx)("img",{src:a,alt:r,className:"ImageGalleryItem-image",onClick:function(){return o({largeImageURL:n,tags:r})}})},t)};var w=function(e){var t=e.images,a=e.onClick;return Object(m.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(m.jsx)(v,{webformatURL:e.webformatURL,largeImageURL:e.largeImageURL,tags:e.tags,onClick:a},e.id)}))})},x=(a(48),function(e){var t=e.children;return Object(m.jsx)("div",{className:"App",children:t})}),S=a(21),k=a.n(S);function C(){return Object(m.jsx)(k.a,{type:"BallTriangle",color:"#00BFFF",height:80,width:80})}var L=a(11),I=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],largeImageURL:"",tags:"",currentPage:1,inputQuery:"",isLoading:!1,error:null,showModal:!1},e.onSearch=function(t){var a=t.query;e.setState({inputQuery:a,currentPage:1,articles:[],error:null})},e.fetchImages=function(){e.setState((function(e){return{isLoading:!0}})),p(e.state.inputQuery,e.state.currentPage).then((function(t){e.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(t)),currentPage:e.currentPage+1}})),e.state.currentPage>2&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).catch((function(e){console.log(e),L.b.error("\u0428\u0435\u0444 \u0432\u0441\u0435 \u043f\u0440\u043e\u043f\u0430\u043b\u043e ;)")})).finally((function(){e.setState((function(e){return{isLoading:!1}}))}))},e.onModal=function(t){var a=t.largeImageURL,n=t.tags;e.setState({largeImageURL:a,tags:n}),e.toggleModal()},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.inputQuery!==this.state.inputQuery&&(this.setState((function(e){return{images:[],currentPage:1}})),this.fetchImages())}},{key:"render",value:function(){return Object(m.jsxs)(x,{children:[Object(m.jsx)(b,{onSubmit:this.onSearch}),Object(m.jsx)(L.a,{}),this.state.isLoading&&Object(m.jsx)(C,{}),Object(m.jsx)(w,{images:this.state.images,onClick:this.onModal}),this.state.images.length>0&&Object(m.jsx)("button",{className:"Button",type:"button",onClick:this.fetchImages,children:"Load more"}),this.state.showModal&&Object(m.jsx)(O,{onClose:this.toggleModal,children:Object(m.jsx)("img",{src:this.state.largeImageURL,alt:this.state.tags})})]})}}]),a}(n.Component);c.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(I,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.2a425891.chunk.js.map