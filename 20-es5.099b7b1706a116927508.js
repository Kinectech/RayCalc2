function _defineProperties(l,n){for(var u=0;u<n.length;u++){var e=n[u];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(l,e.key,e)}}function _createClass(l,n,u){return n&&_defineProperties(l.prototype,n),u&&_defineProperties(l,u),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"8cDG":function(l,n,u){"use strict";u.r(n);var e=u("8Y7J"),o=function l(){_classCallCheck(this,l)},t=u("pMnS"),b=u("oBZk"),c=u("ZZ/e"),a=u("mrSG"),i=u("Uncc"),r=function(){function l(n,u){_classCallCheck(this,l),this.router=n,this.modalController=u}return _createClass(l,[{key:"presentModal",value:function(){return a.b(this,void 0,void 0,regeneratorRuntime.mark((function l(){var n;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.modalController.create({component:i.a});case 2:return n=l.sent,l.next=5,n.present();case 5:return l.abrupt("return",l.sent);case 6:case"end":return l.stop()}}),l,this)})))}},{key:"goToInputPage",value:function(l){this.router.navigate(["/tabs/tab1/input-page"],{state:{calcSelect:l}})}},{key:"viewData",value:function(l){this.router.navigate(["/tabs/tab2/dataview"],{state:{selection:l}})}}]),l}(),p=u("iInd"),s=e.zb({encapsulation:0,styles:[[".card-header[_ngcontent-%COMP%]{padding-bottom:0}.card-content[_ngcontent-%COMP%]{padding-top:15px}"]],data:{}});function d(l){return e.Vb(0,[(l()(),e.Bb(0,0,null,null,12,"ion-header",[],null,null,null,b.V,b.n)),e.Ab(1,49152,null,0,c.A,[e.j,e.p,e.F],null,null),(l()(),e.Bb(2,0,null,0,10,"ion-toolbar",[],null,null,null,b.pb,b.H)),e.Ab(3,49152,null,0,c.Bb,[e.j,e.p,e.F],null,null),(l()(),e.Bb(4,0,null,0,2,"ion-title",[],null,null,null,b.ob,b.G)),e.Ab(5,49152,null,0,c.zb,[e.j,e.p,e.F],null,null),(l()(),e.Tb(-1,0,[" Data "])),(l()(),e.Bb(7,0,null,0,5,"ion-buttons",[["slot","primary"]],null,null,null,b.L,b.d)),e.Ab(8,49152,null,0,c.k,[e.j,e.p,e.F],null,null),(l()(),e.Bb(9,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.presentModal()&&e),e}),b.K,b.c)),e.Ab(10,49152,null,0,c.j,[e.j,e.p,e.F],null,null),(l()(),e.Bb(11,0,null,0,1,"ion-icon",[["name","settings"],["slot","icon-only"]],null,null,null,b.W,b.o)),e.Ab(12,49152,null,0,c.B,[e.j,e.p,e.F],{name:[0,"name"]},null),(l()(),e.Bb(13,0,null,null,94,"ion-content",[],null,null,null,b.T,b.l)),e.Ab(14,49152,null,0,c.t,[e.j,e.p,e.F],null,null),(l()(),e.Bb(15,0,null,0,30,"ion-card",[],null,null,null,b.Q,b.e)),e.Ab(16,49152,null,0,c.l,[e.j,e.p,e.F],null,null),(l()(),e.Bb(17,0,null,0,9,"ion-card-header",[["class","card-header"]],null,null,null,b.N,b.g)),e.Ab(18,49152,null,0,c.n,[e.j,e.p,e.F],null,null),(l()(),e.Bb(19,0,null,0,7,"ion-card-title",[],null,null,null,b.P,b.i)),e.Ab(20,49152,null,0,c.p,[e.j,e.p,e.F],null,null),(l()(),e.Tb(-1,0,["SCP Tables "])),(l()(),e.Bb(22,0,null,0,4,"ion-chip",[["color","primary"],["outline","true"]],null,null,null,b.R,b.j)),e.Ab(23,49152,null,0,c.r,[e.j,e.p,e.F],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),e.Bb(24,0,null,0,2,"ion-label",[],null,null,null,b.cb,b.u)),e.Ab(25,49152,null,0,c.M,[e.j,e.p,e.F],null,null),(l()(),e.Tb(-1,0,["Legacy Northside Data"])),(l()(),e.Bb(27,0,null,0,18,"ion-card-content",[["class","card-content"]],null,null,null,b.M,b.f)),e.Ab(28,49152,null,0,c.m,[e.j,e.p,e.F],null,null),(l()(),e.Bb(29,0,null,0,16,"ion-row",[],null,null,null,b.hb,b.z)),e.Ab(30,49152,null,0,c.ib,[e.j,e.p,e.F],null,null),(l()(),e.Bb(31,0,null,0,4,"ion-col",[],null,null,null,b.S,b.k)),e.Ab(32,49152,null,0,c.s,[e.j,e.p,e.F],null,null),(l()(),e.Bb(33,0,null,0,2,"ion-button",[["expand","block"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.viewData("6mvSCP")&&e),e}),b.K,b.c)),e.Ab(34,49152,null,0,c.j,[e.j,e.p,e.F],{expand:[0,"expand"]},null),(l()(),e.Tb(-1,0,["6MV"])),(l()(),e.Bb(36,0,null,0,4,"ion-col",[],null,null,null,b.S,b.k)),e.Ab(37,49152,null,0,c.s,[e.j,e.p,e.F],null,null),(l()(),e.Bb(38,0,null,0,2,"ion-button",[["expand","block"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.viewData("10mvSCP")&&e),e}),b.K,b.c)),e.Ab(39,49152,null,0,c.j,[e.j,e.p,e.F],{expand:[0,"expand"]},null),(l()(),e.Tb(-1,0,["10MV"])),(l()(),e.Bb(41,0,null,0,4,"ion-col",[],null,null,null,b.S,b.k)),e.Ab(42,49152,null,0,c.s,[e.j,e.p,e.F],null,null),(l()(),e.Bb(43,0,null,0,2,"ion-button",[["expand","block"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.viewData("18mvSCP")&&e),e}),b.K,b.c)),e.Ab(44,49152,null,0,c.j,[e.j,e.p,e.F],{expand:[0,"expand"]},null),(l()(),e.Tb(-1,0,["18MV"])),(l()(),e.Bb(46,0,null,0,30,"ion-card",[],null,null,null,b.Q,b.e)),e.Ab(47,49152,null,0,c.l,[e.j,e.p,e.F],null,null),(l()(),e.Bb(48,0,null,0,9,"ion-card-header",[["class","card-header"]],null,null,null,b.N,b.g)),e.Ab(49,49152,null,0,c.n,[e.j,e.p,e.F],null,null),(l()(),e.Bb(50,0,null,0,7,"ion-card-title",[],null,null,null,b.P,b.i)),e.Ab(51,49152,null,0,c.p,[e.j,e.p,e.F],null,null),(l()(),e.Tb(-1,0,["PDD Tables "])),(l()(),e.Bb(53,0,null,0,4,"ion-chip",[["color","primary"],["outline","true"]],null,null,null,b.R,b.j)),e.Ab(54,49152,null,0,c.r,[e.j,e.p,e.F],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),e.Bb(55,0,null,0,2,"ion-label",[],null,null,null,b.cb,b.u)),e.Ab(56,49152,null,0,c.M,[e.j,e.p,e.F],null,null),(l()(),e.Tb(-1,0,["Legacy Northside Data"])),(l()(),e.Bb(58,0,null,0,18,"ion-card-content",[["class","card-content"]],null,null,null,b.M,b.f)),e.Ab(59,49152,null,0,c.m,[e.j,e.p,e.F],null,null),(l()(),e.Bb(60,0,null,0,16,"ion-row",[],null,null,null,b.hb,b.z)),e.Ab(61,49152,null,0,c.ib,[e.j,e.p,e.F],null,null),(l()(),e.Bb(62,0,null,0,4,"ion-col",[],null,null,null,b.S,b.k)),e.Ab(63,49152,null,0,c.s,[e.j,e.p,e.F],null,null),(l()(),e.Bb(64,0,null,0,2,"ion-button",[["expand","block"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.viewData("6mvPDD")&&e),e}),b.K,b.c)),e.Ab(65,49152,null,0,c.j,[e.j,e.p,e.F],{expand:[0,"expand"]},null),(l()(),e.Tb(-1,0,["6MV"])),(l()(),e.Bb(67,0,null,0,4,"ion-col",[],null,null,null,b.S,b.k)),e.Ab(68,49152,null,0,c.s,[e.j,e.p,e.F],null,null),(l()(),e.Bb(69,0,null,0,2,"ion-button",[["expand","block"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.viewData("10mvPDD")&&e),e}),b.K,b.c)),e.Ab(70,49152,null,0,c.j,[e.j,e.p,e.F],{expand:[0,"expand"]},null),(l()(),e.Tb(-1,0,["10MV"])),(l()(),e.Bb(72,0,null,0,4,"ion-col",[],null,null,null,b.S,b.k)),e.Ab(73,49152,null,0,c.s,[e.j,e.p,e.F],null,null),(l()(),e.Bb(74,0,null,0,2,"ion-button",[["expand","block"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.viewData("18mvPDD")&&e),e}),b.K,b.c)),e.Ab(75,49152,null,0,c.j,[e.j,e.p,e.F],{expand:[0,"expand"]},null),(l()(),e.Tb(-1,0,["18MV"])),(l()(),e.Bb(77,0,null,0,30,"ion-card",[],null,null,null,b.Q,b.e)),e.Ab(78,49152,null,0,c.l,[e.j,e.p,e.F],null,null),(l()(),e.Bb(79,0,null,0,9,"ion-card-header",[["class","card-header"]],null,null,null,b.N,b.g)),e.Ab(80,49152,null,0,c.n,[e.j,e.p,e.F],null,null),(l()(),e.Bb(81,0,null,0,7,"ion-card-title",[],null,null,null,b.P,b.i)),e.Ab(82,49152,null,0,c.p,[e.j,e.p,e.F],null,null),(l()(),e.Tb(-1,0,["TPR Tables "])),(l()(),e.Bb(84,0,null,0,4,"ion-chip",[["color","primary"],["outline","true"]],null,null,null,b.R,b.j)),e.Ab(85,49152,null,0,c.r,[e.j,e.p,e.F],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),e.Bb(86,0,null,0,2,"ion-label",[],null,null,null,b.cb,b.u)),e.Ab(87,49152,null,0,c.M,[e.j,e.p,e.F],null,null),(l()(),e.Tb(-1,0,["Legacy Northside Data"])),(l()(),e.Bb(89,0,null,0,18,"ion-card-content",[["class","card-content"]],null,null,null,b.M,b.f)),e.Ab(90,49152,null,0,c.m,[e.j,e.p,e.F],null,null),(l()(),e.Bb(91,0,null,0,16,"ion-row",[],null,null,null,b.hb,b.z)),e.Ab(92,49152,null,0,c.ib,[e.j,e.p,e.F],null,null),(l()(),e.Bb(93,0,null,0,4,"ion-col",[],null,null,null,b.S,b.k)),e.Ab(94,49152,null,0,c.s,[e.j,e.p,e.F],null,null),(l()(),e.Bb(95,0,null,0,2,"ion-button",[["expand","block"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.viewData("6mvTPR")&&e),e}),b.K,b.c)),e.Ab(96,49152,null,0,c.j,[e.j,e.p,e.F],{expand:[0,"expand"]},null),(l()(),e.Tb(-1,0,["6MV"])),(l()(),e.Bb(98,0,null,0,4,"ion-col",[],null,null,null,b.S,b.k)),e.Ab(99,49152,null,0,c.s,[e.j,e.p,e.F],null,null),(l()(),e.Bb(100,0,null,0,2,"ion-button",[["expand","block"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.viewData("10mvTPR")&&e),e}),b.K,b.c)),e.Ab(101,49152,null,0,c.j,[e.j,e.p,e.F],{expand:[0,"expand"]},null),(l()(),e.Tb(-1,0,["10MV"])),(l()(),e.Bb(103,0,null,0,4,"ion-col",[],null,null,null,b.S,b.k)),e.Ab(104,49152,null,0,c.s,[e.j,e.p,e.F],null,null),(l()(),e.Bb(105,0,null,0,2,"ion-button",[["expand","block"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.viewData("18mvTPR")&&e),e}),b.K,b.c)),e.Ab(106,49152,null,0,c.j,[e.j,e.p,e.F],{expand:[0,"expand"]},null),(l()(),e.Tb(-1,0,["18MV"]))],(function(l,n){l(n,12,0,"settings"),l(n,23,0,"primary","true"),l(n,34,0,"block"),l(n,39,0,"block"),l(n,44,0,"block"),l(n,54,0,"primary","true"),l(n,65,0,"block"),l(n,70,0,"block"),l(n,75,0,"block"),l(n,85,0,"primary","true"),l(n,96,0,"block"),l(n,101,0,"block"),l(n,106,0,"block")}),null)}var j=e.xb("app-tab2",r,(function(l){return e.Vb(0,[(l()(),e.Bb(0,0,null,null,1,"app-tab2",[],null,null,null,d,s)),e.Ab(1,49152,null,0,r,[p.m,c.Fb],null,null)],null,null)}),{},{},[]),k=u("SVse"),F=u("s7LF");u.d(n,"Tab2PageModuleNgFactory",(function(){return B}));var B=e.yb(o,[],(function(l){return e.Kb([e.Lb(512,e.m,e.jb,[[8,[t.a,j]],[3,e.m],e.D]),e.Lb(4608,k.l,k.k,[e.z,[2,k.v]]),e.Lb(4608,c.b,c.b,[e.F,e.g]),e.Lb(4608,c.Fb,c.Fb,[c.b,e.m,e.w]),e.Lb(4608,c.Kb,c.Kb,[c.b,e.m,e.w]),e.Lb(4608,F.i,F.i,[]),e.Lb(1073742336,k.b,k.b,[]),e.Lb(1073742336,c.Db,c.Db,[]),e.Lb(1073742336,F.h,F.h,[]),e.Lb(1073742336,F.a,F.a,[]),e.Lb(1073742336,p.o,p.o,[[2,p.t],[2,p.m]]),e.Lb(1073742336,o,o,[]),e.Lb(1024,p.k,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);