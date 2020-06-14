function _defineProperties(l,n){for(var u=0;u<n.length;u++){var e=n[u];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(l,e.key,e)}}function _createClass(l,n,u){return n&&_defineProperties(l.prototype,n),u&&_defineProperties(l,u),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{JLuJ:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J"),t=function l(){_classCallCheck(this,l)},o=u("pMnS"),r=u("SVse"),a=u("oBZk"),b=u("ZZ/e"),i=u("mrSG"),c=u("n90K"),s=u("Uncc"),p=u("WPWp"),m=function(){function l(n,u,e,t,o){_classCallCheck(this,l),this.router=n,this.modalController=u,this.theme=e,this.storageService=t,this.alertController=o,this.date=new Date}return _createClass(l,[{key:"presentModal",value:function(){return i.b(this,void 0,void 0,regeneratorRuntime.mark((function l(){var n;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.modalController.create({component:s.a});case 2:return n=l.sent,l.next=5,n.present();case 5:return l.abrupt("return",l.sent);case 6:case"end":return l.stop()}}),l,this)})))}},{key:"presentAlert",value:function(){return i.b(this,void 0,void 0,regeneratorRuntime.mark((function l(){var n;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.alertController.create({header:"User Agreement",message:"By using this app, you agree that this app is experimental, and that it is not to be used in any official capacity whatsoever.",buttons:["Agree"]});case 2:return n=l.sent,l.next=5,n.present();case 5:return l.abrupt("return",l.sent);case 6:case"end":return l.stop()}}),l,this)})))}},{key:"goToInputPage",value:function(l){this.router.navigate(["/tabs/tab1/input-page"],{state:{calcSelect:l}})}},{key:"ngOnInit",value:function(){this.presentAlert()}}]),l}(),d=u("iInd"),f=e.zb({encapsulation:0,styles:[[".welcome-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:35vh;overflow:hidden}"]],data:{}});function h(l){return e.Vb(0,[e.Ob(0,r.d,[e.z]),(l()(),e.Bb(1,0,null,null,12,"ion-header",[],null,null,null,a.V,a.n)),e.Ab(2,49152,null,0,b.A,[e.j,e.p,e.F],null,null),(l()(),e.Bb(3,0,null,0,10,"ion-toolbar",[],null,null,null,a.pb,a.H)),e.Ab(4,49152,null,0,b.Bb,[e.j,e.p,e.F],null,null),(l()(),e.Bb(5,0,null,0,2,"ion-title",[],null,null,null,a.ob,a.G)),e.Ab(6,49152,null,0,b.zb,[e.j,e.p,e.F],null,null),(l()(),e.Tb(-1,0,[" RayCalc 2.0 "])),(l()(),e.Bb(8,0,null,0,5,"ion-buttons",[["slot","primary"]],null,null,null,a.L,a.d)),e.Ab(9,49152,null,0,b.k,[e.j,e.p,e.F],null,null),(l()(),e.Bb(10,0,null,0,3,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.presentModal()&&e),e}),a.K,a.c)),e.Ab(11,49152,null,0,b.j,[e.j,e.p,e.F],null,null),(l()(),e.Bb(12,0,null,0,1,"ion-icon",[["name","settings"],["slot","icon-only"]],null,null,null,a.W,a.o)),e.Ab(13,49152,null,0,b.B,[e.j,e.p,e.F],{name:[0,"name"]},null),(l()(),e.Bb(14,0,null,null,62,"ion-content",[],null,null,null,a.T,a.l)),e.Ab(15,49152,null,0,b.t,[e.j,e.p,e.F],null,null),(l()(),e.Bb(16,0,null,0,14,"ion-card",[["class","select-ssd"]],null,null,null,a.Q,a.e)),e.Ab(17,49152,null,0,b.l,[e.j,e.p,e.F],null,null),(l()(),e.Bb(18,0,null,0,7,"ion-card-header",[],null,null,null,a.N,a.g)),e.Ab(19,49152,null,0,b.n,[e.j,e.p,e.F],null,null),(l()(),e.Bb(20,0,null,0,2,"ion-card-subtitle",[],null,null,null,a.O,a.h)),e.Ab(21,49152,null,0,b.o,[e.j,e.p,e.F],null,null),(l()(),e.Tb(-1,0,["Available in 6MV and 18MV"])),(l()(),e.Bb(23,0,null,0,2,"ion-card-title",[],null,null,null,a.P,a.i)),e.Ab(24,49152,null,0,b.p,[e.j,e.p,e.F],null,null),(l()(),e.Tb(-1,0,["SSD Calculation"])),(l()(),e.Bb(26,0,null,0,4,"ion-card-content",[],null,null,null,a.M,a.f)),e.Ab(27,49152,null,0,b.m,[e.j,e.p,e.F],null,null),(l()(),e.Bb(28,0,null,0,2,"ion-button",[["expand","block"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.goToInputPage("ssd")&&e),e}),a.K,a.c)),e.Ab(29,49152,null,0,b.j,[e.j,e.p,e.F],{expand:[0,"expand"]},null),(l()(),e.Tb(-1,0,["Calculate"])),(l()(),e.Bb(31,0,null,0,14,"ion-card",[["class","select-sad"]],null,null,null,a.Q,a.e)),e.Ab(32,49152,null,0,b.l,[e.j,e.p,e.F],null,null),(l()(),e.Bb(33,0,null,0,7,"ion-card-header",[],null,null,null,a.N,a.g)),e.Ab(34,49152,null,0,b.n,[e.j,e.p,e.F],null,null),(l()(),e.Bb(35,0,null,0,2,"ion-card-subtitle",[],null,null,null,a.O,a.h)),e.Ab(36,49152,null,0,b.o,[e.j,e.p,e.F],null,null),(l()(),e.Tb(-1,0,["Available in 6MV and 18MV"])),(l()(),e.Bb(38,0,null,0,2,"ion-card-title",[],null,null,null,a.P,a.i)),e.Ab(39,49152,null,0,b.p,[e.j,e.p,e.F],null,null),(l()(),e.Tb(-1,0,["SAD Calculation"])),(l()(),e.Bb(41,0,null,0,4,"ion-card-content",[],null,null,null,a.M,a.f)),e.Ab(42,49152,null,0,b.m,[e.j,e.p,e.F],null,null),(l()(),e.Bb(43,0,null,0,2,"ion-button",[["expand","block"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.goToInputPage("sad")&&e),e}),a.K,a.c)),e.Ab(44,49152,null,0,b.j,[e.j,e.p,e.F],{expand:[0,"expand"]},null),(l()(),e.Tb(-1,0,["Calculate"])),(l()(),e.Bb(46,0,null,0,27,"ion-list",[["lines","none"]],null,null,null,a.eb,a.v)),e.Ab(47,49152,null,0,b.N,[e.j,e.p,e.F],{lines:[0,"lines"]},null),(l()(),e.Bb(48,0,null,0,4,"ion-list-header",[],null,null,null,a.db,a.w)),e.Ab(49,49152,null,0,b.O,[e.j,e.p,e.F],null,null),(l()(),e.Bb(50,0,null,0,2,"ion-label",[],null,null,null,a.cb,a.u)),e.Ab(51,49152,null,0,b.M,[e.j,e.p,e.F],null,null),(l()(),e.Tb(-1,0,["Resources"])),(l()(),e.Bb(53,0,null,0,6,"ion-item",[["button","true"],["href","https://faq.raycalc.com"]],null,null,null,a.bb,a.q)),e.Ab(54,49152,null,0,b.G,[e.j,e.p,e.F],{button:[0,"button"],href:[1,"href"]},null),(l()(),e.Bb(55,0,null,0,1,"ion-icon",[["color","medium"],["name","book"],["slot","start"]],null,null,null,a.W,a.o)),e.Ab(56,49152,null,0,b.B,[e.j,e.p,e.F],{color:[0,"color"],name:[1,"name"]},null),(l()(),e.Bb(57,0,null,0,2,"ion-label",[],null,null,null,a.cb,a.u)),e.Ab(58,49152,null,0,b.M,[e.j,e.p,e.F],null,null),(l()(),e.Tb(-1,0,["RayCalc FAQ"])),(l()(),e.Bb(60,0,null,0,6,"ion-item",[["button","true"],["href","https://docs.google.com/forms/d/e/1FAIpQLSeDoR3JJOKJZvcsDvOYMcrn4JOfZgYgWlriobIT4yFiPmE6NQ/viewform"]],null,null,null,a.bb,a.q)),e.Ab(61,49152,null,0,b.G,[e.j,e.p,e.F],{button:[0,"button"],href:[1,"href"]},null),(l()(),e.Bb(62,0,null,0,1,"ion-icon",[["color","medium"],["name","build"],["slot","start"]],null,null,null,a.W,a.o)),e.Ab(63,49152,null,0,b.B,[e.j,e.p,e.F],{color:[0,"color"],name:[1,"name"]},null),(l()(),e.Bb(64,0,null,0,2,"ion-label",[],null,null,null,a.cb,a.u)),e.Ab(65,49152,null,0,b.M,[e.j,e.p,e.F],null,null),(l()(),e.Tb(-1,0,["Report a Bug"])),(l()(),e.Bb(67,0,null,0,6,"ion-item",[["button","true"],["href","https://docs.google.com/forms/d/e/1FAIpQLSc7Lt6_qq2z_7HcFqP2ayxSebBA4QWw4l8RY_iJf3HFGzcY6g/viewform"]],null,null,null,a.bb,a.q)),e.Ab(68,49152,null,0,b.G,[e.j,e.p,e.F],{button:[0,"button"],href:[1,"href"]},null),(l()(),e.Bb(69,0,null,0,1,"ion-icon",[["color","medium"],["name","send"],["slot","start"]],null,null,null,a.W,a.o)),e.Ab(70,49152,null,0,b.B,[e.j,e.p,e.F],{color:[0,"color"],name:[1,"name"]},null),(l()(),e.Bb(71,0,null,0,2,"ion-label",[],null,null,null,a.cb,a.u)),e.Ab(72,49152,null,0,b.M,[e.j,e.p,e.F],null,null),(l()(),e.Tb(-1,0,["Request a Feature"])),(l()(),e.Bb(74,0,null,0,2,"p",[["style","text-align: center; font-size: 0.8em"]],null,null,null,null,null)),(l()(),e.Tb(75,null,["Copyright \xa9 "," Miro Manestar. All rights reserved."])),e.Pb(76,2)],(function(l,n){l(n,13,0,"settings"),l(n,29,0,"block"),l(n,44,0,"block"),l(n,47,0,"none"),l(n,54,0,"true","https://faq.raycalc.com"),l(n,56,0,"medium","book"),l(n,61,0,"true","https://docs.google.com/forms/d/e/1FAIpQLSeDoR3JJOKJZvcsDvOYMcrn4JOfZgYgWlriobIT4yFiPmE6NQ/viewform"),l(n,63,0,"medium","build"),l(n,68,0,"true","https://docs.google.com/forms/d/e/1FAIpQLSc7Lt6_qq2z_7HcFqP2ayxSebBA4QWw4l8RY_iJf3HFGzcY6g/viewform"),l(n,70,0,"medium","send")}),(function(l,n){var u=n.component,t=e.Ub(n,75,0,l(n,76,0,e.Nb(n,0),u.date,"yyyy"));l(n,75,0,t)}))}var g=e.xb("app-tab1",m,(function(l){return e.Vb(0,[(l()(),e.Bb(0,0,null,null,1,"app-tab1",[],null,null,null,h,f)),e.Ab(1,114688,null,0,m,[d.m,b.Fb,p.a,c.a,b.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),F=u("s7LF");u.d(n,"Tab1PageModuleNgFactory",(function(){return A}));var A=e.yb(t,[],(function(l){return e.Kb([e.Lb(512,e.m,e.jb,[[8,[o.a,g]],[3,e.m],e.D]),e.Lb(4608,r.l,r.k,[e.z,[2,r.v]]),e.Lb(4608,b.b,b.b,[e.F,e.g]),e.Lb(4608,b.Fb,b.Fb,[b.b,e.m,e.w]),e.Lb(4608,b.Kb,b.Kb,[b.b,e.m,e.w]),e.Lb(4608,F.i,F.i,[]),e.Lb(1073742336,r.b,r.b,[]),e.Lb(1073742336,b.Db,b.Db,[]),e.Lb(1073742336,F.h,F.h,[]),e.Lb(1073742336,F.a,F.a,[]),e.Lb(1073742336,d.o,d.o,[[2,d.t],[2,d.m]]),e.Lb(1073742336,t,t,[]),e.Lb(1024,d.k,(function(){return[[{path:"",component:m}]]}),[])])}))}}]);