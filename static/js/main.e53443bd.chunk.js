(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{16:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(7),o=n.n(s),i=(n(6),n(10)),r=n(2),u=n.p+"static/media/logo.1c0cdde7.svg",l=n(0);var d=function(){return Object(l.jsx)("header",{className:"header",children:Object(l.jsx)("a",{className:"header__logo-link",href:"/#",target:"_self",children:Object(l.jsx)("img",{className:"header__logo",src:u,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"})})})},p=c.a.createContext();var b=function(e){var t=c.a.useContext(p),n=e.card.owner._id===t._id?"cards__item-delete-button button":"cards__item-delete-button_hidden",a=e.card.likes.some((function(e){return e._id===t._id}))?"cards__item-like-icon-button_active button":"cards__item-like-icon-button button";return Object(l.jsxs)("li",{className:"cards__item",children:[Object(l.jsx)("img",{className:"cards__item-photo",src:e.card.link,onClick:function(){e.onCardClick({name:e.card.name,link:e.card.link})},alt:"\u0424\u043e\u0442\u043e ".concat(e.card.name)}),Object(l.jsx)("button",{className:n,type:"button","aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",onClick:function(){e.onCardDelete(e.card)}}),Object(l.jsxs)("div",{className:"cards__item-container",children:[Object(l.jsx)("h2",{className:"cards__item-title",children:e.card.name}),Object(l.jsxs)("div",{className:"cards__like-container",children:[Object(l.jsx)("button",{className:a,type:"button","aria-label":"\u041b\u0430\u0439\u043a\u043d\u0443\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",onClick:function(){e.onCardLike(e.card)}}),Object(l.jsx)("p",{className:"cards__item-likes",children:e.card.likes.length})]})]})]})};var _=function(e){var t=c.a.useContext(p);return Object(l.jsxs)("main",{className:"content",children:[Object(l.jsxs)("section",{className:"profile",children:[Object(l.jsx)("a",{className:"profile__avatar-container",href:"#",target:"_self",onClick:e.onEditAvatar,children:Object(l.jsx)("img",{className:"profile__avatar",src:t.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"})}),Object(l.jsxs)("div",{className:"profile__container",children:[Object(l.jsxs)("div",{className:"profile__info",children:[Object(l.jsx)("h1",{className:"profile__name",children:t.name}),Object(l.jsx)("button",{className:"profile__edit-button button","aria-label":"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",type:"button",onClick:e.onEditProfile})]}),Object(l.jsx)("p",{className:"profile__about",children:t.about})]}),Object(l.jsx)("button",{className:"profile__add-button button","aria-label":"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",type:"button",onClick:e.onAddPlace})]}),Object(l.jsx)("section",{className:"cards",children:Object(l.jsx)("ul",{className:"cards__list",children:e.cards.map((function(t){return Object(l.jsx)(b,{card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})})]})};var h=function(){return Object(l.jsx)("footer",{className:"footer",children:Object(l.jsx)("p",{className:"footer__copyright",children:"\xa9 2021 Mesto Russia"})})};var j=function(e){return Object(l.jsx)("div",{className:"popup popup-img ".concat(e.card.link.length>0&&"popup_opened"),children:Object(l.jsxs)("div",{className:"popup__container-image",children:[Object(l.jsx)("img",{className:"popup__image",src:"".concat(e.card.link),alt:"\u0424\u043e\u0442\u043e ".concat(e.card.name)}),Object(l.jsx)("h3",{className:"popup__image-caption",children:e.card.name}),Object(l.jsx)("button",{className:"popup__close-button button popup__close-button_img",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043f\u043e\u043f\u0430\u043f",onClick:e.onClose})]})})};var m=function(e){return Object(l.jsx)("div",{className:"popup ".concat(e.name," ").concat(e.isOpen&&"popup_opened"),children:Object(l.jsxs)("form",{className:"popup__container",name:e.name,onSubmit:e.onSubmit,children:[Object(l.jsx)("button",{className:"popup__close-button button",type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043f\u043e\u043f\u0430\u043f",onClick:e.onClose}),Object(l.jsx)("h2",{className:"popup__title",children:e.title}),e.children,Object(l.jsx)("button",{className:"popup__submit-button button popup__button",type:"submit",children:e.button})]})})};var f=function(e){var t=c.a.useContext(p),n=Object(a.useState)(""),s=Object(r.a)(n,2),o=s[0],i=s[1],u=Object(a.useState)(""),d=Object(r.a)(u,2),b=d[0],_=d[1];return Object(a.useEffect)((function(){i(t.name),_(t.about)}),[t]),Object(l.jsxs)(m,{isOpen:e.isOpen,onClose:e.onClose,name:"popup-edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",button:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:o,about:b})},children:[Object(l.jsxs)("label",{className:"popup__label",children:[Object(l.jsx)("input",{id:"name__input",type:"text",name:"name",defaultValue:o,placeholder:"\u0418\u043c\u044f",className:"popup__field popup__input",minLength:"2",maxLength:"40",required:!0,onChange:function(e){i(e.target.value)}}),Object(l.jsx)("span",{id:"name__input-error"})]}),Object(l.jsxs)("label",{className:"popup__label",children:[Object(l.jsx)("input",{id:"about__input",type:"text",name:"about",defaultValue:b,placeholder:"\u041e \u0441\u0435\u0431\u0435",className:"popup__field popup__input",minLength:"2",maxLength:"200",required:!0,onChange:function(e){_(e.target.value)}}),Object(l.jsx)("span",{id:"about__input-error"})]})]})};var O=function(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),c=n[0],s=n[1],o=Object(a.useRef)();return Object(l.jsx)(m,{isOpen:e.isOpen,onClose:e.onClose,name:"popup-update-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",button:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(t){t.preventDefault(),e.onUpdateAvatar({avatar:c})},children:Object(l.jsxs)("label",{className:"popup__label",children:[Object(l.jsx)("input",{id:"avatar__input",type:"url",name:"avatar",defaultValue:"",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",className:"popup__field popup__field_add popup__image-link popup__input",required:!0,ref:o,onChange:function(e){s(e.target.value)}}),Object(l.jsx)("span",{id:"avatar__input-error"})]})})};var x=function(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),c=n[0],s=n[1],o=Object(a.useState)(""),i=Object(r.a)(o,2),u=i[0],d=i[1];return Object(l.jsxs)(m,{isOpen:e.isOpen,onClose:e.onClose,name:"popup-add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",button:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:c,link:u}),s(""),d("")},children:[Object(l.jsxs)("label",{className:"popup__label",children:[Object(l.jsx)("input",{id:"name__input",type:"text",name:"name",value:c,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",className:"popup__field popup__input",minLength:"2",maxLength:"40",required:!0,onChange:function(e){s(e.target.value)}}),Object(l.jsx)("span",{id:"name__input-error"})]}),Object(l.jsxs)("label",{className:"popup__label",children:[Object(l.jsx)("input",{id:"about__input",type:"text",name:"about",value:u,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"popup__field popup__input",minLength:"2",maxLength:"200",required:!0,onChange:function(e){d(e.target.value)}}),Object(l.jsx)("span",{id:"about__input-error"})]})]})},v=n(8),g=n(9),C=new(function(){function e(t){Object(v.a)(this,e),this._url=t.baseUrl,this._headers=t.headers}return Object(g.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"users/me"),{headers:this._headers}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"cards"),{headers:this._headers}).then(this._checkResponse)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._url,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkResponse)}},{key:"addCard",value:function(e){return fetch("".concat(this._url,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResponse)}},{key:"removeCard",value:function(e){return fetch("".concat(this._url,"cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"changeLikeCardStatus",value:function(e,t){return fetch("".concat(this._url,"cards/likes/").concat(e),{method:t?"PUT":"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this._url,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._checkResponse)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-20/",headers:{authorization:"31d51008-4859-4d5b-b87f-d3d5e1b6e481","Content-Type":"application/json"}});var k=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!1),o=Object(r.a)(s,2),u=o[0],b=o[1],m=Object(a.useState)(!1),v=Object(r.a)(m,2),g=v[0],k=v[1],N=Object(a.useState)({name:"",link:""}),y=Object(r.a)(N,2),S=y[0],L=y[1],U=Object(a.useState)(""),E=Object(r.a)(U,2),P=E[0],A=E[1],D=Object(a.useState)([]),R=Object(r.a)(D,2),T=R[0],I=R[1];function q(){c(!1),b(!1),k(!1),L({name:"",link:""})}return Object(a.useEffect)((function(){C.getInitialCards().then((function(e){I(e)})).catch((function(e){return console.log(e)}))}),[]),Object(a.useEffect)((function(){C.getUserInfo().then((function(e){A(e)})).catch((function(e){return console.log(e)}))}),[]),Object(l.jsx)(p.Provider,{value:P,children:Object(l.jsxs)("div",{className:"page page__content",children:[Object(l.jsx)(d,{}),Object(l.jsx)(_,{cards:T,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===P._id}));C.changeLikeCardStatus(e._id,!t).then((function(t){I((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log(e)}))},onCardDelete:function(e){C.removeCard(e._id).then((function(){var t=T.filter((function(t){return t._id!==e._id}));I(t)})).catch((function(e){return console.log(e)}))},onEditProfile:function(){c(!0)},onAddPlace:function(){b(!0)},onEditAvatar:function(){k(!0)},onCardClick:function(e){L(e)}}),Object(l.jsx)(h,{}),Object(l.jsx)(f,{isOpen:n,onClose:q,onUpdateUser:function(e){C.setUserInfo(e).then((function(e){A(e)})).catch((function(e){return console.log(e)})),q()}}),Object(l.jsx)(O,{isOpen:g,onClose:q,onUpdateAvatar:function(e){C.setUserAvatar(e).then((function(e){A(e)})).catch((function(e){return console.log(e)})),q()}}),Object(l.jsx)(x,{isOpen:u,onClose:q,onAddPlace:function(e){C.addCard(e).then((function(e){I([e].concat(Object(i.a)(T)))})).catch((function(e){return console.log(e)})),q()}}),Object(l.jsx)(j,{card:S,onClose:q})]})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};o.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root")),N()},6:function(e,t,n){}},[[16,1,2]]]);
//# sourceMappingURL=main.e53443bd.chunk.js.map