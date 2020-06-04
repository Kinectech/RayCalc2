function asyncGeneratorStep(e,t,n,r,i,o,s){try{var a=e[o](s),u=a.value}catch(c){return void n(c)}a.done?t(u):Promise.resolve(u).then(r,i)}function _asyncToGenerator(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function s(e){asyncGeneratorStep(o,r,i,s,a,"next",e)}function a(e){asyncGeneratorStep(o,r,i,s,a,"throw",e)}s(void 0)}))}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{"qF1+":function(e,t,n){"use strict";n.r(t),n.d(t,"ion_nav",(function(){return f})),n.d(t,"ion_nav_link",(function(){return p})),n.d(t,"ion_nav_pop",(function(){return m})),n.d(t,"ion_nav_push",(function(){return y})),n.d(t,"ion_nav_set_root",(function(){return g}));var r=n("dSyh"),i=n("AfW+"),o=n("aiEM"),s=n("kBU6"),a=n("m9yc"),u=n("+veT"),c=n("qaSm"),l=function(){function e(t,n){_classCallCheck(this,e),this.component=t,this.params=n,this.state=1}var t;return _createClass(e,[{key:"init",value:(t=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state=2,this.element){e.next=5;break}return n=this.component,e.next=4,Object(a.a)(this.delegate,t,n,["ion-page","ion-page-invisible"],this.params);case 4:this.element=e.sent;case 5:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"_destroy",value:function(){Object(o.b)(3!==this.state,"view state must be ATTACHED");var e=this.element;e&&(this.delegate?this.delegate.removeViewFromDom(e.parentElement,e):e.remove()),this.nav=void 0,this.state=3}}]),e}(),v=function(e,t,n){if(!e)return!1;if(e.component!==t)return!1;var r=e.params;if(r===n)return!0;if(!r&&!n)return!0;if(!r||!n)return!1;var i=Object.keys(r),o=Object.keys(n);if(i.length!==o.length)return!1;for(var s=0,a=i;s<a.length;s++){var u=a[s];if(r[u]!==n[u])return!1}return!0},h=function(e,t){return e?e instanceof l?e:new l(e,t):null},f=function(){function e(t){_classCallCheck(this,e),Object(r.l)(this,t),this.transInstr=[],this.animationEnabled=!0,this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[],this.animated=!0,this.ionNavWillLoad=Object(r.d)(this,"ionNavWillLoad",7),this.ionNavWillChange=Object(r.d)(this,"ionNavWillChange",3),this.ionNavDidChange=Object(r.d)(this,"ionNavDidChange",3)}var t,a,f,d;return _createClass(e,[{key:"swipeGestureChanged",value:function(){this.gesture&&this.gesture.setDisabled(!0!==this.swipeGesture)}},{key:"rootChanged",value:function(){void 0!==this.root&&(this.useRouter||this.setRoot(this.root,this.rootParams))}},{key:"componentWillLoad",value:function(){if(this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]"),void 0===this.swipeGesture){var e=Object(r.e)(this);this.swipeGesture=i.b.getBoolean("swipeBackEnabled","ios"===e)}this.ionNavWillLoad.emit()}},{key:"componentDidLoad",value:(d=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.rootChanged(),e.next=3,n.e(2).then(n.bind(null,"0yHn"));case 3:e.t0=this.el,e.t1=this.canStart.bind(this),e.t2=this.onStart.bind(this),e.t3=this.onMove.bind(this),e.t4=this.onEnd.bind(this),this.gesture=e.sent.createSwipeBackGesture(e.t0,e.t1,e.t2,e.t3,e.t4),this.swipeGestureChanged();case 10:case"end":return e.stop()}}),e,this)}))),function(){return d.apply(this,arguments)})},{key:"componentDidUnload",value:function(){var e=!0,t=!1,n=void 0;try{for(var r,i=this.views[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){var o=r.value;Object(u.c)(o.element,s.e),o._destroy()}}catch(a){t=!0,n=a}finally{try{e||null==i.return||i.return()}finally{if(t)throw n}}this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.transInstr.length=this.views.length=0,this.destroyed=!0}},{key:"push",value:function(e,t,n,r){return this.queueTrns({insertStart:-1,insertViews:[{page:e,params:t}],opts:n},r)}},{key:"insert",value:function(e,t,n,r,i){return this.queueTrns({insertStart:e,insertViews:[{page:t,params:n}],opts:r},i)}},{key:"insertPages",value:function(e,t,n,r){return this.queueTrns({insertStart:e,insertViews:t,opts:n},r)}},{key:"pop",value:function(e,t){return this.queueTrns({removeStart:-1,removeCount:1,opts:e},t)}},{key:"popTo",value:function(e,t,n){var r={removeStart:-1,removeCount:-1,opts:t};return"object"==typeof e&&e.component?(r.removeView=e,r.removeStart=1):"number"==typeof e&&(r.removeStart=e+1),this.queueTrns(r,n)}},{key:"popToRoot",value:function(e,t){return this.queueTrns({removeStart:1,removeCount:-1,opts:e},t)}},{key:"removeIndex",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0;return this.queueTrns({removeStart:e,removeCount:t,opts:n},r)}},{key:"setRoot",value:function(e,t,n,r){return this.setPages([{page:e,params:t}],n,r)}},{key:"setPages",value:function(e,t,n){return null==t&&(t={}),!0!==t.animated&&(t.animated=!1),this.queueTrns({insertStart:0,insertViews:e,removeStart:0,removeCount:-1,opts:t},n)}},{key:"setRouteId",value:function(e,t,n){var r,i=this.getActiveSync();if(v(i,e,t))return Promise.resolve({changed:!1,element:i.element});var o,s=new Promise((function(e){return r=e})),a={updateURL:!1,viewIsReady:function(e){var t,n,i=new Promise((function(e){return t=e}));return r({changed:!0,element:e,markVisible:(n=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(),e.next=3,o;case 3:case"end":return e.stop()}}),e)}))),function(){return n.apply(this,arguments)})}),i}};if("root"===n)o=this.setRoot(e,t,a);else{var u=this.views.find((function(n){return v(n,e,t)}));u?o=this.popTo(u,Object.assign(Object.assign({},a),{direction:"back"})):"forward"===n?o=this.push(e,t,a):"back"===n&&(o=this.setRoot(e,t,Object.assign(Object.assign({},a),{direction:"back",animated:!0})))}return s}},{key:"getRouteId",value:(f=_asyncToGenerator(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.getActiveSync(),e.abrupt("return",t?{id:t.element.tagName,params:t.params,element:t.element}:void 0);case 2:case"end":return e.stop()}}),e,this)}))),function(){return f.apply(this,arguments)})},{key:"getActive",value:function(){return Promise.resolve(this.getActiveSync())}},{key:"getByIndex",value:function(e){return Promise.resolve(this.views[e])}},{key:"canGoBack",value:function(e){return Promise.resolve(this.canGoBackSync(e))}},{key:"getPrevious",value:function(e){return Promise.resolve(this.getPreviousSync(e))}},{key:"getLength",value:function(){return this.views.length}},{key:"getActiveSync",value:function(){return this.views[this.views.length-1]}},{key:"canGoBackSync",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getActiveSync();return!(!e||!this.getPreviousSync(e))}},{key:"getPreviousSync",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getActiveSync();if(e){var t=this.views,n=t.indexOf(e);return n>0?t[n-1]:void 0}}},{key:"queueTrns",value:function(e,t){if(this.isTransitioning&&null!=e.opts&&e.opts.skipIfBusy)return Promise.resolve(!1);var n=new Promise((function(t,n){e.resolve=t,e.reject=n}));return e.done=t,e.insertViews&&0===e.insertViews.length&&(e.insertViews=void 0),this.transInstr.push(e),this.nextTrns(),n}},{key:"success",value:function(e,t){if(this.destroyed)this.fireError("nav controller was destroyed",t);else if(t.done&&t.done(e.hasCompleted,e.requiresTransition,e.enteringView,e.leavingView,e.direction),t.resolve(e.hasCompleted),!1!==t.opts.updateURL&&this.useRouter){var n=document.querySelector("ion-router");n&&n.navChanged("back"===e.direction?"back":"forward")}}},{key:"failed",value:function(e,t){this.destroyed?this.fireError("nav controller was destroyed",t):(this.transInstr.length=0,this.fireError(e,t))}},{key:"fireError",value:function(e,t){t.done&&t.done(!1,!1,e),t.reject&&!this.destroyed?t.reject(e):t.resolve(!1)}},{key:"nextTrns",value:function(){if(this.isTransitioning)return!1;var e=this.transInstr.shift();return!!e&&(this.runTransition(e),!0)}},{key:"runTransition",value:(a=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var n,r,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,this.ionNavWillChange.emit(),this.isTransitioning=!0,this.prepareTI(t),n=this.getActiveSync(),r=this.getEnteringView(t,n),n||r){e.next=5;break}throw new Error("no views in the stack to be removed");case 5:if(e.t0=r&&1===r.state,!e.t0){e.next=9;break}return e.next=9,r.init(this.el);case 9:if(this.postViewInit(r,n,t),!t.enteringRequiresTransition&&!t.leavingRequiresTransition||r===n){e.next=16;break}return e.next=13,this.transition(r,n,t);case 13:e.t1=e.sent,e.next=17;break;case 16:e.t1={hasCompleted:!0,requiresTransition:!1};case 17:i=e.t1,this.success(i,t),this.ionNavDidChange.emit(),e.next=24;break;case 21:e.prev=21,e.t2=e.catch(0),this.failed(e.t2,t);case 24:this.isTransitioning=!1,this.nextTrns();case 25:case"end":return e.stop()}}),e,this,[[0,21]])}))),function(e){return a.apply(this,arguments)})},{key:"prepareTI",value:function(e){var t=this.views.length;if(e.opts=e.opts||{},void 0===e.opts.delegate&&(e.opts.delegate=this.delegate),void 0!==e.removeView){Object(o.b)(void 0!==e.removeStart,"removeView needs removeStart"),Object(o.b)(void 0!==e.removeCount,"removeView needs removeCount");var n=this.views.indexOf(e.removeView);if(n<0)throw new Error("removeView was not found");e.removeStart+=n}void 0!==e.removeStart&&(e.removeStart<0&&(e.removeStart=t-1),e.removeCount<0&&(e.removeCount=t-e.removeStart),e.leavingRequiresTransition=e.removeCount>0&&e.removeStart+e.removeCount===t),e.insertViews&&((e.insertStart<0||e.insertStart>t)&&(e.insertStart=t),e.enteringRequiresTransition=e.insertStart===t);var r=e.insertViews;if(r){Object(o.b)(r.length>0,"length can not be zero");var i=r.map((function(e){return e instanceof l?e:"page"in e?h(e.page,e.params):h(e,void 0)})).filter((function(e){return null!==e}));if(0===i.length)throw new Error("invalid views to insert");var s=!0,a=!1,u=void 0;try{for(var c,v=i[Symbol.iterator]();!(s=(c=v.next()).done);s=!0){var f=c.value;f.delegate=e.opts.delegate;var d=f.nav;if(d&&d!==this)throw new Error("inserted view was already inserted");if(3===f.state)throw new Error("inserted view was already destroyed")}}catch(p){a=!0,u=p}finally{try{s||null==v.return||v.return()}finally{if(a)throw u}}e.insertViews=i}}},{key:"getEnteringView",value:function(e,t){var n=e.insertViews;if(void 0!==n)return n[n.length-1];var r=e.removeStart;if(void 0!==r)for(var i=this.views,o=r+e.removeCount,s=i.length-1;s>=0;s--){var a=i[s];if((s<r||s>=o)&&a!==t)return a}}},{key:"postViewInit",value:function(e,t,n){Object(o.b)(t||e,"Both leavingView and enteringView are null"),Object(o.b)(n.resolve,"resolve must be valid"),Object(o.b)(n.reject,"reject must be valid");var r,i=n.opts,a=n.insertViews,c=n.removeStart,l=n.removeCount;if(void 0!==c&&void 0!==l){Object(o.b)(c>=0,"removeStart can not be negative"),Object(o.b)(l>=0,"removeCount can not be negative"),r=[];for(var v=0;v<l;v++){var h=this.views[v+c];h&&h!==e&&h!==t&&r.push(h)}i.direction=i.direction||"back"}var f=this.views.length+(void 0!==a?a.length:0)-(void 0!==l?l:0);if(Object(o.b)(f>=0,"final balance can not be negative"),0===f)throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(a){var d=n.insertStart,p=!0,m=!1,y=void 0;try{for(var g,b=a[Symbol.iterator]();!(p=(g=b.next()).done);p=!0){var w=g.value;this.insertViewAt(w,d),d++}}catch(A){m=!0,y=A}finally{try{p||null==b.return||b.return()}finally{if(m)throw y}}n.enteringRequiresTransition&&(i.direction=i.direction||"forward")}if(r&&r.length>0){var k=!0,C=!1,S=void 0;try{for(var j,O=r[Symbol.iterator]();!(k=(j=O.next()).done);k=!0){var T=j.value;Object(u.c)(T.element,s.c),Object(u.c)(T.element,s.d),Object(u.c)(T.element,s.e)}}catch(A){C=!0,S=A}finally{try{k||null==O.return||O.return()}finally{if(C)throw S}}var R=!0,V=!1,_=void 0;try{for(var E,x=r[Symbol.iterator]();!(R=(E=x.next()).done);R=!0){var P=E.value;this.destroyView(P)}}catch(A){V=!0,_=A}finally{try{R||null==x.return||x.return()}finally{if(V)throw _}}}}},{key:"transition",value:(t=_asyncToGenerator(regeneratorRuntime.mark((function e(t,n,o){var s,a,c,l,v,h,f,d,p=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=o.opts,a=s.progressAnimation?function(e){return p.sbAni=e}:void 0,c=Object(r.e)(this),l=t.element,v=n&&n.element,h=Object.assign({mode:c,showGoBack:this.canGoBackSync(t),baseEl:this.el,animationBuilder:this.animation||s.animationBuilder||i.b.get("navAnimation"),progressCallback:a,animated:this.animated&&i.b.getBoolean("animated",!0),enteringEl:l,leavingEl:v},s),e.next=8,Object(u.e)(h);case 8:return f=e.sent,d=f.hasCompleted,e.abrupt("return",this.transitionFinish(d,t,n,s));case 11:case"end":return e.stop()}}),e,this)}))),function(e,n,r){return t.apply(this,arguments)})},{key:"transitionFinish",value:function(e,t,n,r){var i=e?t:n;return i&&this.cleanup(i),{hasCompleted:e,requiresTransition:!0,enteringView:t,leavingView:n,direction:r.direction}}},{key:"insertViewAt",value:function(e,t){var n=this.views,r=n.indexOf(e);r>-1?(Object(o.b)(e.nav===this,"view is not part of the nav"),n.splice(t,0,n.splice(r,1)[0])):(Object(o.b)(!e.nav,"nav is used"),e.nav=this,n.splice(t,0,e))}},{key:"removeView",value:function(e){Object(o.b)(2===e.state||3===e.state,"view state should be loaded or destroyed");var t=this.views,n=t.indexOf(e);Object(o.b)(n>-1,"view must be part of the stack"),n>=0&&t.splice(n,1)}},{key:"destroyView",value:function(e){e._destroy(),this.removeView(e)}},{key:"cleanup",value:function(e){if(!this.destroyed)for(var t=this.views,n=t.indexOf(e),r=t.length-1;r>=0;r--){var i=t[r],o=i.element;r>n?(Object(u.c)(o,s.e),this.destroyView(i)):r<n&&Object(u.d)(o,!0)}}},{key:"canStart",value:function(){return!!this.swipeGesture&&!this.isTransitioning&&0===this.transInstr.length&&this.animationEnabled&&this.canGoBackSync()}},{key:"onStart",value:function(){this.queueTrns({removeStart:-1,removeCount:1,opts:{direction:"back",progressAnimation:!0}},void 0)}},{key:"onMove",value:function(e){this.sbAni&&this.sbAni.progressStep(e)}},{key:"onEnd",value:function(e,t,n){var r=this;if(this.sbAni){this.animationEnabled=!1,this.sbAni.onFinish((function(){r.animationEnabled=!0}),{oneTimeCallback:!0});var i=e?-.001:.001;e?i+=Object(c.b)(new c.a(0,0),new c.a(.32,.72),new c.a(0,1),new c.a(1,1),t):(this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)"),i+=Object(c.b)(new c.a(0,0),new c.a(1,0),new c.a(.68,.28),new c.a(1,1),t)),this.sbAni.progressEnd(e?1:0,i,n)}}},{key:"render",value:function(){return Object(r.i)("slot",null)}},{key:"el",get:function(){return Object(r.f)(this)}}],[{key:"watchers",get:function(){return{swipeGesture:["swipeGestureChanged"],root:["rootChanged"]}}},{key:"style",get:function(){return":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}"}}]),e}(),d=function(e,t,n,r){var i=e.closest("ion-nav");if(i)if("forward"===t){if(void 0!==n)return i.push(n,r,{skipIfBusy:!0})}else if("root"===t){if(void 0!==n)return i.setRoot(n,r,{skipIfBusy:!0})}else if("back"===t)return i.pop({skipIfBusy:!0});return Promise.resolve(!1)},p=function(){function e(t){var n=this;_classCallCheck(this,e),Object(r.l)(this,t),this.routerDirection="forward",this.onClick=function(){return d(n.el,n.routerDirection,n.component,n.componentProps)}}return _createClass(e,[{key:"render",value:function(){return Object(r.i)(r.a,{onClick:this.onClick})}},{key:"el",get:function(){return Object(r.f)(this)}}]),e}(),m=function(){function e(t){var n=this;_classCallCheck(this,e),Object(r.l)(this,t),this.pop=function(){return d(n.el,"back")}}return _createClass(e,[{key:"componentDidLoad",value:function(){console.warn('[DEPRECATED][ion-nav-pop] <ion-nav-pop> is deprecated. Use `<ion-nav-link routerDirection="back">` instead.')}},{key:"render",value:function(){return Object(r.i)(r.a,{onClick:this.pop})}},{key:"el",get:function(){return Object(r.f)(this)}}]),e}(),y=function(){function e(t){var n=this;_classCallCheck(this,e),Object(r.l)(this,t),this.push=function(){return d(n.el,"forward",n.component,n.componentProps)}}return _createClass(e,[{key:"componentDidLoad",value:function(){console.warn('[DEPRECATED][ion-nav-push] `<ion-nav-push component="MyComponent">` is deprecated. Use `<ion-nav-link component="MyComponent">` instead.')}},{key:"render",value:function(){return Object(r.i)(r.a,{onClick:this.push})}},{key:"el",get:function(){return Object(r.f)(this)}}]),e}(),g=function(){function e(t){var n=this;_classCallCheck(this,e),Object(r.l)(this,t),this.setRoot=function(){return d(n.el,"root",n.component,n.componentProps)}}return _createClass(e,[{key:"componentDidLoad",value:function(){console.warn('[DEPRECATED][ion-nav-set-root] `<ion-nav-set-root component="MyComponent">` is deprecated. Use `<ion-nav-link component="MyComponent" routerDirection="root">` instead.')}},{key:"render",value:function(){return Object(r.i)(r.a,{onClick:this.setRoot})}},{key:"el",get:function(){return Object(r.f)(this)}}]),e}()}}]);