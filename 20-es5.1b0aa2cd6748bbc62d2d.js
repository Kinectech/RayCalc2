function _defineProperties(l,n){for(var u=0;u<n.length;u++){var o=n[u];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(l,o.key,o)}}function _createClass(l,n,u){return n&&_defineProperties(l.prototype,n),u&&_defineProperties(l,u),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"8cDG":function(l,n,u){"use strict";u.r(n);var o=u("8Y7J"),e=function l(){_classCallCheck(this,l)},t=u("pMnS"),a=u("oBZk"),b=u("ZZ/e"),c=u("mrSG"),i=u("Uncc"),r=function(){function l(n,u){_classCallCheck(this,l),this.router=n,this.modalController=u}return _createClass(l,[{key:"presentModal",value:function(){return c.b(this,void 0,void 0,regeneratorRuntime.mark((function l(){var n;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.modalController.create({component:i.a});case 2:return n=l.sent,l.next=5,n.present();case 5:return l.abrupt("return",l.sent);case 6:case"end":return l.stop()}}),l,this)})))}},{key:"goToInputPage",value:function(l){this.router.navigate(["/tabs/tab1/input-page"],{state:{calcSelect:l}})}},{key:"viewData",value:function(l){this.router.navigate(["/tabs/tab2/dataview"],{state:{selection:l}})}}]),l}(),p=u("iInd"),d=o.zb({encapsulation:0,styles:[[".card-header[_ngcontent-%COMP%]{padding-bottom:0}.card-content[_ngcontent-%COMP%]{padding-top:15px}"]],data:{}});function s(l){return o.Vb(0,[(l()(),o.Bb(0,0,null,null,12,"ion-header",[],null,null,null,a.T,a.n)),o.Ab(1,49152,null,0,b.z,[o.j,o.p,o.F],null,null),(l()(),o.Bb(2,0,null,0,10,"ion-toolbar",[],null,null,null,a.lb,a.F)),o.Ab(3,49152,null,0,b.Ab,[o.j,o.p,o.F],null,null),(l()(),o.Bb(4,0,null,0,2,"ion-title",[],null,null,null,a.kb,a.E)),o.Ab(5,49152,null,0,b.yb,[o.j,o.p,o.F],null,null),(l()(),o.Tb(-1,0,[" Data "])),(l()(),o.Bb(7,0,null,0,5,"ion-buttons",[["slot","primary"]],null,null,null,a.J,a.d)),o.Ab(8,49152,null,0,b.j,[o.j,o.p,o.F],null,null),(l()(),o.Bb(9,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.presentModal()&&o),o}),a.I,a.c)),o.Ab(10,49152,null,0,b.i,[o.j,o.p,o.F],null,null),(l()(),o.Bb(11,0,null,0,1,"ion-icon",[["name","settings"],["slot","icon-only"]],null,null,null,a.U,a.o)),o.Ab(12,49152,null,0,b.A,[o.j,o.p,o.F],{name:[0,"name"]},null),(l()(),o.Bb(13,0,null,null,94,"ion-content",[],null,null,null,a.R,a.l)),o.Ab(14,49152,null,0,b.s,[o.j,o.p,o.F],null,null),(l()(),o.Bb(15,0,null,0,30,"ion-card",[],null,null,null,a.O,a.e)),o.Ab(16,49152,null,0,b.k,[o.j,o.p,o.F],null,null),(l()(),o.Bb(17,0,null,0,9,"ion-card-header",[["class","card-header"]],null,null,null,a.L,a.g)),o.Ab(18,49152,null,0,b.m,[o.j,o.p,o.F],null,null),(l()(),o.Bb(19,0,null,0,7,"ion-card-title",[],null,null,null,a.N,a.i)),o.Ab(20,49152,null,0,b.o,[o.j,o.p,o.F],null,null),(l()(),o.Tb(-1,0,["SCP Tables "])),(l()(),o.Bb(22,0,null,0,4,"ion-chip",[["color","primary"],["outline","true"]],null,null,null,a.P,a.j)),o.Ab(23,49152,null,0,b.q,[o.j,o.p,o.F],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),o.Bb(24,0,null,0,2,"ion-label",[],null,null,null,a.ab,a.u)),o.Ab(25,49152,null,0,b.L,[o.j,o.p,o.F],null,null),(l()(),o.Tb(-1,0,["Legacy Northside Data"])),(l()(),o.Bb(27,0,null,0,18,"ion-card-content",[["class","card-content"]],null,null,null,a.K,a.f)),o.Ab(28,49152,null,0,b.l,[o.j,o.p,o.F],null,null),(l()(),o.Bb(29,0,null,0,16,"ion-row",[],null,null,null,a.fb,a.z)),o.Ab(30,49152,null,0,b.hb,[o.j,o.p,o.F],null,null),(l()(),o.Bb(31,0,null,0,4,"ion-col",[],null,null,null,a.Q,a.k)),o.Ab(32,49152,null,0,b.r,[o.j,o.p,o.F],null,null),(l()(),o.Bb(33,0,null,0,2,"ion-button",[["expand","block"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.viewData("6mvSCP")&&o),o}),a.I,a.c)),o.Ab(34,49152,null,0,b.i,[o.j,o.p,o.F],{expand:[0,"expand"]},null),(l()(),o.Tb(-1,0,["6MV"])),(l()(),o.Bb(36,0,null,0,4,"ion-col",[],null,null,null,a.Q,a.k)),o.Ab(37,49152,null,0,b.r,[o.j,o.p,o.F],null,null),(l()(),o.Bb(38,0,null,0,2,"ion-button",[["expand","block"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.viewData("10mvSCP")&&o),o}),a.I,a.c)),o.Ab(39,49152,null,0,b.i,[o.j,o.p,o.F],{expand:[0,"expand"]},null),(l()(),o.Tb(-1,0,["10MV"])),(l()(),o.Bb(41,0,null,0,4,"ion-col",[],null,null,null,a.Q,a.k)),o.Ab(42,49152,null,0,b.r,[o.j,o.p,o.F],null,null),(l()(),o.Bb(43,0,null,0,2,"ion-button",[["expand","block"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.viewData("18mvSCP")&&o),o}),a.I,a.c)),o.Ab(44,49152,null,0,b.i,[o.j,o.p,o.F],{expand:[0,"expand"]},null),(l()(),o.Tb(-1,0,["18MV"])),(l()(),o.Bb(46,0,null,0,30,"ion-card",[],null,null,null,a.O,a.e)),o.Ab(47,49152,null,0,b.k,[o.j,o.p,o.F],null,null),(l()(),o.Bb(48,0,null,0,9,"ion-card-header",[["class","card-header"]],null,null,null,a.L,a.g)),o.Ab(49,49152,null,0,b.m,[o.j,o.p,o.F],null,null),(l()(),o.Bb(50,0,null,0,7,"ion-card-title",[],null,null,null,a.N,a.i)),o.Ab(51,49152,null,0,b.o,[o.j,o.p,o.F],null,null),(l()(),o.Tb(-1,0,["PDD Tables "])),(l()(),o.Bb(53,0,null,0,4,"ion-chip",[["color","primary"],["outline","true"]],null,null,null,a.P,a.j)),o.Ab(54,49152,null,0,b.q,[o.j,o.p,o.F],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),o.Bb(55,0,null,0,2,"ion-label",[],null,null,null,a.ab,a.u)),o.Ab(56,49152,null,0,b.L,[o.j,o.p,o.F],null,null),(l()(),o.Tb(-1,0,["Legacy Northside Data"])),(l()(),o.Bb(58,0,null,0,18,"ion-card-content",[["class","card-content"]],null,null,null,a.K,a.f)),o.Ab(59,49152,null,0,b.l,[o.j,o.p,o.F],null,null),(l()(),o.Bb(60,0,null,0,16,"ion-row",[],null,null,null,a.fb,a.z)),o.Ab(61,49152,null,0,b.hb,[o.j,o.p,o.F],null,null),(l()(),o.Bb(62,0,null,0,4,"ion-col",[],null,null,null,a.Q,a.k)),o.Ab(63,49152,null,0,b.r,[o.j,o.p,o.F],null,null),(l()(),o.Bb(64,0,null,0,2,"ion-button",[["expand","block"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.viewData("6mvPDD")&&o),o}),a.I,a.c)),o.Ab(65,49152,null,0,b.i,[o.j,o.p,o.F],{expand:[0,"expand"]},null),(l()(),o.Tb(-1,0,["6MV"])),(l()(),o.Bb(67,0,null,0,4,"ion-col",[],null,null,null,a.Q,a.k)),o.Ab(68,49152,null,0,b.r,[o.j,o.p,o.F],null,null),(l()(),o.Bb(69,0,null,0,2,"ion-button",[["expand","block"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.viewData("10mvPDD")&&o),o}),a.I,a.c)),o.Ab(70,49152,null,0,b.i,[o.j,o.p,o.F],{expand:[0,"expand"]},null),(l()(),o.Tb(-1,0,["10MV"])),(l()(),o.Bb(72,0,null,0,4,"ion-col",[],null,null,null,a.Q,a.k)),o.Ab(73,49152,null,0,b.r,[o.j,o.p,o.F],null,null),(l()(),o.Bb(74,0,null,0,2,"ion-button",[["expand","block"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.viewData("18mvPDD")&&o),o}),a.I,a.c)),o.Ab(75,49152,null,0,b.i,[o.j,o.p,o.F],{expand:[0,"expand"]},null),(l()(),o.Tb(-1,0,["18MV"])),(l()(),o.Bb(77,0,null,0,30,"ion-card",[],null,null,null,a.O,a.e)),o.Ab(78,49152,null,0,b.k,[o.j,o.p,o.F],null,null),(l()(),o.Bb(79,0,null,0,9,"ion-card-header",[["class","card-header"]],null,null,null,a.L,a.g)),o.Ab(80,49152,null,0,b.m,[o.j,o.p,o.F],null,null),(l()(),o.Bb(81,0,null,0,7,"ion-card-title",[],null,null,null,a.N,a.i)),o.Ab(82,49152,null,0,b.o,[o.j,o.p,o.F],null,null),(l()(),o.Tb(-1,0,["TPR Tables "])),(l()(),o.Bb(84,0,null,0,4,"ion-chip",[["color","primary"],["outline","true"]],null,null,null,a.P,a.j)),o.Ab(85,49152,null,0,b.q,[o.j,o.p,o.F],{color:[0,"color"],outline:[1,"outline"]},null),(l()(),o.Bb(86,0,null,0,2,"ion-label",[],null,null,null,a.ab,a.u)),o.Ab(87,49152,null,0,b.L,[o.j,o.p,o.F],null,null),(l()(),o.Tb(-1,0,["Legacy Northside Data"])),(l()(),o.Bb(89,0,null,0,18,"ion-card-content",[["class","card-content"]],null,null,null,a.K,a.f)),o.Ab(90,49152,null,0,b.l,[o.j,o.p,o.F],null,null),(l()(),o.Bb(91,0,null,0,16,"ion-row",[],null,null,null,a.fb,a.z)),o.Ab(92,49152,null,0,b.hb,[o.j,o.p,o.F],null,null),(l()(),o.Bb(93,0,null,0,4,"ion-col",[],null,null,null,a.Q,a.k)),o.Ab(94,49152,null,0,b.r,[o.j,o.p,o.F],null,null),(l()(),o.Bb(95,0,null,0,2,"ion-button",[["expand","block"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.viewData("6mvTPR")&&o),o}),a.I,a.c)),o.Ab(96,49152,null,0,b.i,[o.j,o.p,o.F],{expand:[0,"expand"]},null),(l()(),o.Tb(-1,0,["6MV"])),(l()(),o.Bb(98,0,null,0,4,"ion-col",[],null,null,null,a.Q,a.k)),o.Ab(99,49152,null,0,b.r,[o.j,o.p,o.F],null,null),(l()(),o.Bb(100,0,null,0,2,"ion-button",[["expand","block"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.viewData("10mvTPR")&&o),o}),a.I,a.c)),o.Ab(101,49152,null,0,b.i,[o.j,o.p,o.F],{expand:[0,"expand"]},null),(l()(),o.Tb(-1,0,["10MV"])),(l()(),o.Bb(103,0,null,0,4,"ion-col",[],null,null,null,a.Q,a.k)),o.Ab(104,49152,null,0,b.r,[o.j,o.p,o.F],null,null),(l()(),o.Bb(105,0,null,0,2,"ion-button",[["expand","block"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.viewData("18mvTPR")&&o),o}),a.I,a.c)),o.Ab(106,49152,null,0,b.i,[o.j,o.p,o.F],{expand:[0,"expand"]},null),(l()(),o.Tb(-1,0,["18MV"]))],(function(l,n){l(n,12,0,"settings"),l(n,23,0,"primary","true"),l(n,34,0,"block"),l(n,39,0,"block"),l(n,44,0,"block"),l(n,54,0,"primary","true"),l(n,65,0,"block"),l(n,70,0,"block"),l(n,75,0,"block"),l(n,85,0,"primary","true"),l(n,96,0,"block"),l(n,101,0,"block"),l(n,106,0,"block")}),null)}var k=o.xb("app-tab2",r,(function(l){return o.Vb(0,[(l()(),o.Bb(0,0,null,null,1,"app-tab2",[],null,null,null,s,d)),o.Ab(1,49152,null,0,r,[p.m,b.Eb],null,null)],null,null)}),{},{},[]),j=u("SVse"),F=u("s7LF");u.d(n,"Tab2PageModuleNgFactory",(function(){return m}));var m=o.yb(e,[],(function(l){return o.Kb([o.Lb(512,o.m,o.jb,[[8,[t.a,k]],[3,o.m],o.D]),o.Lb(4608,j.l,j.k,[o.z,[2,j.u]]),o.Lb(4608,b.a,b.a,[o.F,o.g]),o.Lb(4608,b.Eb,b.Eb,[b.a,o.m,o.w]),o.Lb(4608,b.Jb,b.Jb,[b.a,o.m,o.w]),o.Lb(4608,F.i,F.i,[]),o.Lb(1073742336,j.b,j.b,[]),o.Lb(1073742336,b.Cb,b.Cb,[]),o.Lb(1073742336,F.h,F.h,[]),o.Lb(1073742336,F.a,F.a,[]),o.Lb(1073742336,p.o,p.o,[[2,p.t],[2,p.m]]),o.Lb(1073742336,e,e,[]),o.Lb(1024,p.k,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);