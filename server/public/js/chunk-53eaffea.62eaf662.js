(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53eaffea"],{"07e3":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},1659:function(t,e,n){"use strict";var i=n("507b"),a=n.n(i);a.a},"1bc3":function(t,e,n){var i=n("f772");t.exports=function(t,e){if(!i(t))return t;var n,a;if(e&&"function"==typeof(n=t.toString)&&!i(a=n.call(t)))return a;if("function"==typeof(n=t.valueOf)&&!i(a=n.call(t)))return a;if(!e&&"function"==typeof(n=t.toString)&&!i(a=n.call(t)))return a;throw TypeError("Can't convert object to primitive value")}},"1ec9":function(t,e,n){var i=n("f772"),a=n("e53d").document,r=i(a)&&i(a.createElement);t.exports=function(t){return r?a.createElement(t):{}}},"294c":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"35e8":function(t,e,n){var i=n("d9f6"),a=n("aebd");t.exports=n("8e60")?function(t,e,n){return i.f(t,e,a(1,n))}:function(t,e,n){return t[e]=n,t}},"3e25":function(t,e,n){},"454f":function(t,e,n){n("46a7");var i=n("584a").Object;t.exports=function(t,e,n){return i.defineProperty(t,e,n)}},"456d":function(t,e,n){var i=n("4bf8"),a=n("0d58");n("5eda")("keys",(function(){return function(t){return a(i(t))}}))},"46a7":function(t,e,n){var i=n("63b6");i(i.S+i.F*!n("8e60"),"Object",{defineProperty:n("d9f6").f})},"507b":function(t,e,n){},"584a":function(t,e){var n=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=n)},"5eda":function(t,e,n){var i=n("5ca1"),a=n("8378"),r=n("79e5");t.exports=function(t,e){var n=(a.Object||{})[t]||Object[t],s={};s[t]=e(n),i(i.S+i.F*r((function(){n(1)})),"Object",s)}},6002:function(t,e,n){},"63b6":function(t,e,n){var i=n("e53d"),a=n("584a"),r=n("d864"),s=n("35e8"),o=n("07e3"),c="prototype",l=function(t,e,n){var u,f,d,p=t&l.F,v=t&l.G,m=t&l.S,b=t&l.P,h=t&l.B,y=t&l.W,C=v?a:a[e]||(a[e]={}),_=C[c],g=v?i:m?i[e]:(i[e]||{})[c];for(u in v&&(n=e),n)f=!p&&g&&void 0!==g[u],f&&o(C,u)||(d=f?g[u]:n[u],C[u]=v&&"function"!=typeof g[u]?n[u]:h&&f?r(d,i):y&&g[u]==d?function(t){var e=function(e,n,i){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,i)}return t.apply(this,arguments)};return e[c]=t[c],e}(d):b&&"function"==typeof d?r(Function.call,d):d,b&&((C.virtual||(C.virtual={}))[u]=d,t&l.R&&_&&!_[u]&&s(_,u,d)))};l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,t.exports=l},"72da":function(t,e,n){},7712:function(t,e,n){"use strict";var i=n("ec1d"),a=n.n(i);a.a},"781b":function(t,e,n){"use strict";var i=n("3e25"),a=n.n(i);a.a},"794b":function(t,e,n){t.exports=!n("8e60")&&!n("294c")((function(){return 7!=Object.defineProperty(n("1ec9")("div"),"a",{get:function(){return 7}}).a}))},"79aa":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},"85f2":function(t,e,n){t.exports=n("454f")},"8e60":function(t,e,n){t.exports=!n("294c")((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},"8e6e":function(t,e,n){var i=n("5ca1"),a=n("990b"),r=n("6821"),s=n("11e9"),o=n("f1ae");i(i.S,"Object",{getOwnPropertyDescriptors:function(t){var e,n,i=r(t),c=s.f,l=a(i),u={},f=0;while(l.length>f)n=c(i,e=l[f++]),void 0!==n&&o(u,e,n);return u}})},"990b":function(t,e,n){var i=n("9093"),a=n("2621"),r=n("cb7c"),s=n("7726").Reflect;t.exports=s&&s.ownKeys||function(t){var e=i.f(r(t)),n=a.f;return n?e.concat(n(t)):e}},a75a:function(t,e,n){"use strict";var i=n("72da"),a=n.n(i);a.a},ac6a:function(t,e,n){for(var i=n("cadf"),a=n("0d58"),r=n("2aba"),s=n("7726"),o=n("32e9"),c=n("84f2"),l=n("2b4c"),u=l("iterator"),f=l("toStringTag"),d=c.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=a(p),m=0;m<v.length;m++){var b,h=v[m],y=p[h],C=s[h],_=C&&C.prototype;if(_&&(_[u]||o(_,u,d),_[f]||o(_,f,h),c[h]=d,y))for(b in i)_[b]||r(_,b,i[b],!0)}},aebd:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},bd86:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("85f2"),a=n.n(i);function r(t,e,n){return e in t?a()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},c3c3:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"sidenav shadow-sm"},[t._m(0),n("ul",{staticClass:"sidenav-nav px-0 text-center"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:{name:"owner-info"}}},[n("span",{staticClass:"icon"},[n("i",{staticClass:"fas fa-store"})]),n("span",{staticClass:"nav-link-description"},[t._v("餐廳")])])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",class:{active:"owner-menu"===t.$route.name},attrs:{to:{name:"owner-dishes"},"active-class":"active"}},[n("span",{staticClass:"icon"},[n("i",{staticClass:"fas fa-utensils"})]),n("span",{staticClass:"nav-link-description"},[t._v("餐點")])])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:{name:"owner-orders"},"active-class":"active"}},[n("span",{staticClass:"icon"},[n("i",{staticClass:"fas fa-clipboard-list"})]),n("span",{staticClass:"nav-link-description"},[t._v("訂單")])])],1),t._m(1),n("li",{staticClass:"nav-divider"}),t._m(2)])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidenav-brand-container text-center py-5"},[n("a",{staticClass:"sidenav-brand",attrs:{href:"#"}},[t._v("NextMeal")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"#"}},[n("span",{staticClass:"icon"},[n("i",{staticClass:"fas fa-chart-line"})]),n("span",{staticClass:"nav-link-description"},[t._v("分析")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"#"}},[n("span",{staticClass:"icon"},[n("i",{staticClass:"fas fa-cog"})]),n("span",{staticClass:"nav-link-description"},[t._v("登出")])])])}],r=(n("1659"),n("2877")),s={},o=Object(r["a"])(s,i,a,!1,null,"38bb266d",null);e["a"]=o.exports},d760:function(t,e,n){"use strict";var i=n("6002"),a=n.n(i);a.a},d864:function(t,e,n){var i=n("79aa");t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,a){return t.call(e,n,i,a)}}return function(){return t.apply(e,arguments)}}},d9f6:function(t,e,n){var i=n("e4ae"),a=n("794b"),r=n("1bc3"),s=Object.defineProperty;e.f=n("8e60")?Object.defineProperty:function(t,e,n){if(i(t),e=r(e,!0),i(n),a)try{return s(t,e,n)}catch(o){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},e4ae:function(t,e,n){var i=n("f772");t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},e53d:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},ec1d:function(t,e,n){},f1ae:function(t,e,n){"use strict";var i=n("86cc"),a=n("4630");t.exports=function(t,e,n){e in t?i.f(t,e,a(0,n)):t[e]=n}},f640:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"wrapper d-flex vh-100"},[n("SideNavBar"),n("section",{staticClass:"dishes flex-fill"},[n("h1",{staticClass:"dishes-title"},[t._v("\n      餐點資訊\n    ")]),n("OwnerDishNavPill",{staticClass:"mt-4 ml-1"}),n("hr",{staticClass:"dishes-divider"}),n("div",{staticClass:"dishes-card-container row mx-0 p-3 rounded-sm shadow-sm"},t._l(t.days,(function(e){return n("OwnerMenuCard",{key:e,staticClass:"col-12 pb-0 pb-md-2 px-0 mb-0 mb-md-2",attrs:{meal:t.meal,day:e},on:{"edit-meal":t.handleEditMeal}})})),1),"nextWeek"===t.$route.query.ran?n("OwnerMenuForm",{ref:"editForm",attrs:{"initial-meal":t.meal,options:t.options},on:{"after-submit":t.handleAfterSubmit}}):t._e()],1)],1)},a=[],r=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),s=n("c3c3"),o=n("fb59"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card d-flex flex-row rounded-sm rounded-0"},[n("div",{staticClass:"card-left"},[n("img",{staticClass:"card-img rounded-0 d-none d-md-inline rounded-sm",attrs:{src:t.meal.image,alt:"Dish image"}})]),n("div",{staticClass:"card-right"},[n("div",{staticClass:"card-body px-3 py-0"},["nextWeek"===t.$route.query.ran&&0!==t.currentDay?n("button",{staticClass:"edit-btn btn p-0",attrs:{type:"button"},on:{click:function(e){return t.$emit("edit-meal")}}},[n("i",{staticClass:"fas fa-pencil-alt"})]):t._e(),n("h5",{staticClass:"card-title m-0"},[t._v("\n        "+t._s(t.day)+"\n      ")]),n("div",{staticClass:"card-description mt-2"},[n("p",{staticClass:"m-0 d-inline d-md-block"},[n("span",{staticClass:"d-none d-md-inline"},[t._v("餐點名稱：")]),t._v("\n          "+t._s(t.meal.name)+"\n        ")]),n("p",{staticClass:"m-0 d-inline d-md-block"},[n("span",{staticClass:"d-none d-md-inline"},[t._v("供應數量")]),t._v("\n          ："+t._s(t.meal.quantity)+"份\n        ")])])])])])},l=[],u={props:{meal:{type:Object,required:!0},day:{type:String,required:!0}},computed:{currentDay:function(){var t=new Date;return t.getDay()}}},f=u,d=(n("d760"),n("2877")),p=Object(d["a"])(f,c,l,!1,null,"7be0d66c",null),v=p.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"form p-4 rounded shadow-sm",attrs:{novalidate:""},on:{submit:function(e){return e.stopPropagation(),e.preventDefault(),t.handleSubmit(e)}}},[n("h3",{staticClass:"form-header mb-4"},[t._v("\n    更新下週菜單\n  ")]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"dish"}},[t._v("餐點")]),n("select",{directives:[{name:"model",rawName:"v-model.trim",value:t.id,expression:"id",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{required:""},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.id=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:""}},[t._v("\n        選擇餐點\n      ")]),t._l(t.options,(function(e){return n("option",{key:e.id,domProps:{value:e.id,selected:t.id===e.id}},[t._v("\n        "+t._s(e.name)+"\n      ")])}))],2),n("div",{staticClass:"invalid-feedback"},[t._v("\n      請選擇餐點\n    ")])]),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"quantity"}},[t._v("供應數量")]),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.quantity,expression:"quantity",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{id:"quantity",type:"number",min:"1",max:"50",required:""},domProps:{value:t.quantity},on:{input:function(e){e.target.composing||(t.quantity=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),n("div",{staticClass:"invalid-feedback"},[t._v("\n      請填寫欲提供的數量，最少 1 份和最多 50 份\n    ")])]),t._m(0)])},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"btn-container mt-4"},[n("button",{staticClass:"btn",attrs:{type:"submit"}},[t._v("\n      更新\n    ")])])}],h={name:"菜餚二",image:"https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"},y={props:{initialMeal:{type:Object,required:!0},options:{type:Array,required:!0}},data:function(){return{quantity:this.initialMeal.quantity,id:this.initialMeal.id}},methods:{handleSubmit:function(t){if(!1===t.target.checkValidity())return t.target.classList.add("was-validated");var e={current_meal_id:this.initialMeal.id,updated_meal_id:this.id,quantity:this.quantity};console.log(e),this.$emit("after-submit",h)}}},C=y,_=(n("7712"),Object(d["a"])(C,m,b,!1,null,"26a4ce56",null)),g=_.exports;function w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function x(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?w(n,!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):w(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var O={meals:[{id:1,name:"菜餚一",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididu",image:"https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_1280.jpg",quantity:50,isServing:!1,nextServing:!1}],options:[{id:1,name:"菜餚一"},{id:2,name:"菜餚二"}]},k={components:{SideNavBar:s["a"],OwnerDishNavPill:o["a"],OwnerMenuCard:v,OwnerMenuForm:g},data:function(){return{meal:{id:-1,name:"",description:"",image:"",quantity:50,isServing:!1,nextServing:!1},options:[],days:["星期一","星期二","星期三","星期四","星期五","星期六","星期日"]}},created:function(){var t=this.$route.query.ran;(!t||"thisWeek"!==t&&"nextWeek"!==t)&&this.$router.push("/"),this.fetchMeal(t)},beforeRouteUpdate:function(t,e,n){var i=t.query.ran;(!i||"thisWeek"!==i&&"nextWeek"!==i)&&n({name:"not-found"}),this.fetchMeal(i),n()},methods:{fetchMeal:function(t){this.meal=O.meals[0],this.options=O.options},handleEditMeal:function(){var t=this.$refs.editForm.$el,e=t.offsetTop;window.scrollTo({top:e,behavior:"smooth"})},handleAfterSubmit:function(t){this.meal=x({},this.meal,{},t)}}},S=k,j=(n("a75a"),Object(d["a"])(S,i,a,!1,null,"482ebb0f",null));e["default"]=j.exports},f772:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},fb59:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"nav nav-pills"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:{name:"owner-dishes"}}},[t._v("\n      全部"),n("span",{staticClass:"d-none d-md-inline"},[t._v("菜單")])])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:{name:"owner-menu",query:{ran:"thisWeek"}}}},[t._v("\n      本週"),n("span",{staticClass:"d-none d-md-inline"},[t._v("菜單")])])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:{name:"owner-menu",query:{ran:"nextWeek"}}}},[t._v("\n      下週"),n("span",{staticClass:"d-none d-md-inline"},[t._v("菜單")])])],1)])},a=[],r=(n("781b"),n("2877")),s={},o=Object(r["a"])(s,i,a,!1,null,"6115ef60",null);e["a"]=o.exports}}]);
//# sourceMappingURL=chunk-53eaffea.62eaf662.js.map