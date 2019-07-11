webpackJsonp([1],{17:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(6),i=e(21),c=e(26);a.a.config.productionTip=!1,new a.a({el:"#app",router:c.a,render:function(t){return t(i.a)}})},21:function(t,s,e){"use strict";function a(t){e(22)}var i=e(8),c=e(24),n=e(7),o=a,r=n(i.a,c.a,!1,o,null,null);s.a=r.exports},22:function(t,s){},24:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"top-slanted"}),t._v(" "),e("div",{staticClass:"body container"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("main",{staticClass:"app-holder"},[t._m(2),t._v(" "),e("router-view"),t._v(" "),t._m(3)],1)])])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"stay-top left"},[e("a",{staticClass:"button is-link is-small mt-4",attrs:{href:"https://itope84.github.io/static/gpcalc-0.1.0.apk",target:"_blank"}},[t._v("Download App")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"stay-top right"},[a("img",{staticClass:"logo",attrs:{src:e(25),alt:"gp-calc logo"}})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header-text has-text-white has-text-centered"},[e("h1",{staticClass:"h3 has-text-weight-bold"},[t._v("CGPA CALCULATOR")]),t._v(" "),e("p",[t._v("Easily calculate and save your CGPA to keep track of your academic progress")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("footer",{staticClass:"footer"},[t._v("\n        Built by "),e("span",{staticClass:"text-primary-colored"},[t._v("Ilesanmi Temitope (Santiago)")])])}],c={render:a,staticRenderFns:i};s.a=c},25:function(t,s,e){t.exports=e.p+"static/img/logo.c1182bc.png"},26:function(t,s,e){"use strict";var a=e(6),i=e(27),c=e(28);a.a.use(i.a),s.a=new i.a({routes:[{path:"/",name:"Calculator",component:c.a}]})},28:function(t,s,e){"use strict";function a(t){e(29)}var i=e(9),c=e(64),n=e(7),o=a,r=n(i.a,c.a,!1,o,null,null);s.a=r.exports},29:function(t,s){},32:function(t,s,e){"use strict";e.d(s,"b",function(){return u}),e.d(s,"a",function(){return d});var a=e(33),i=e.n(a),c=e(59),n=e.n(c),o=e(60),r=e.n(o),l=function(){function t(){var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"5unit";n()(this,t),this.username=s,this.semesters=e,this.classif=a,this.cgpa=null}return r()(t,[{key:"getcgpa",value:function(){var t=this,s=0,e=0;return this.semesters.forEach(function(a){s+=a.tnu(),e+=a.tcp(t.classif)}),e/s}}]),t}(),u=function(){function t(){var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;n()(this,t),this.semName=s,this.courses=e}return r()(t,[{key:"tnu",value:function(){var t=0;return this.courses.forEach(function(s){t+=1*s.unit}),t}},{key:"tcp",value:function(t){var s=0;return this.courses.forEach(function(e){s+=e.cp(t)}),s}},{key:"gpa",value:function(t){return this.tcp(t)/this.tnu()}}]),t}(),d=function(){function t(){var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;n()(this,t),this.coursename=s,this.unit=e,this.score=a}return r()(t,[{key:"csystem",value:function(t){return{"5unit":{A:5,B:4,C:3,D:2,E:1,F:0}}.classif}},{key:"grade",value:function(){return this.score>=70?"A":this.score>=60?"B":this.score>=50?"C":this.score>=45?"D":this.score>=40?"E":"F"}},{key:"cp",value:function(){switch(this.grade()){case"A":return 5*this.unit;case"B":return 4*this.unit;case"C":return 3*this.unit;case"D":return 2*this.unit;case"E":return 1*this.unit;default:return 0*this.unit}}}]),t}(),v=[new d],m=[new u(null,v)],p=null;if(localStorage&&null!==(p=JSON.parse(localStorage.getItem("user-0"))))for(var h=0;h<p.semesters.length;h++){m[h]=i()(new u,p.semesters[h]);for(var _=[],f=0;f<p.semesters[h].courses.length;f++)_[f]=i()(new d,p.semesters[h].courses[f]);m[h].courses=_,_=[]}var C=null!==p?i()(new l,p):new l(null,m);C.semesters=m;var g=[C];s.c={courses:v,semesters:m,accounts:g,activeAccount:C,course:function(){return new d}}},64:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"card"},[e("header",{staticClass:"card-header"},[e("h4",{staticClass:"card-header-title"},[t._v("\n        Computing for "),e("span",{staticClass:"text-primary-colored"},[t._v(" "+t._s(t.activeAccount.username?t.activeAccount.username:"Default User"))])]),t._v(" "),t._m(0)]),t._v(" "),e("div",{staticClass:"card-content"},[e("p",{attrs:{id:"editSem"}},[t._v("Change semester, edit a semester or add new semesters")]),t._v(" "),e("div",{staticClass:"columns is-mobile"},[e("div",{staticClass:"field column is-10 is-flex"},[e("div",{staticClass:"control has-icons-left"},[e("div",{staticClass:"select"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.activeSem,expression:"activeSem"}],on:{change:function(s){var e=Array.prototype.filter.call(s.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.activeSem=s.target.multiple?e:e[0]}}},[e("option",{attrs:{selected:""}},[t._v("Select Semester")]),t._v(" "),t._l(t.activeAccount.semesters,function(s,a){return e("option",{domProps:{value:t.activeAccount.semesters[a]}},[t._v(t._s(s.semName?s.semName:"Semester "+(a+1)))])})],2)]),t._v(" "),t._m(1)]),t._v(" "),e("a",{staticClass:"button",staticStyle:{"margin-left":".5rem"},on:{click:t.displayAddSem}},[e("span",{staticClass:"icon-mode_edit"})])]),t._v(" "),e("div",{staticClass:"column"},[e("p",{staticClass:"buttons is-flex"},[e("a",{staticClass:"button ml-auto bg-secondary"},[e("span",{staticClass:"icon-visibility",on:{click:t.showgp}})])])])]),t._v(" "),e("table",{staticClass:"table is-fullwidth"},[e("caption",[t._v("Enter Your Courses")]),t._v(" "),t._m(2),t._v(" "),e("tbody",t._l(t.activeSem.courses,function(s,a){return e("tr",[e("td",{attrs:{scope:"row","data-label":"Course"}},[e("div",{staticClass:"field"},[e("p",{staticClass:"control has-icons-right"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.coursename,expression:"course.coursename"}],staticClass:"input course-input",attrs:{type:"text"},domProps:{value:s.coursename},on:{input:function(e){e.target.composing||t.$set(s,"coursename",e.target.value)}}}),t._v(" "),t._m(3,!0)])])]),t._v(" "),e("td",{attrs:{"data-label":"Units"}},[e("div",{staticClass:"field"},[e("p",{staticClass:"control has-icons-right"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.unit,expression:"course.unit"}],staticClass:"input course-input",attrs:{type:"number"},domProps:{value:s.unit},on:{input:function(e){e.target.composing||t.$set(s,"unit",e.target.value)}}}),t._v(" "),t._m(4,!0)])])]),t._v(" "),e("td",{attrs:{"data-label":"Score"}},[e("div",{staticClass:"field"},[e("p",{staticClass:"control has-icons-right"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.score,expression:"course.score"}],staticClass:"input course-input",attrs:{type:"number"},domProps:{value:s.score},on:{input:function(e){e.target.composing||t.$set(s,"score",e.target.value)}}}),t._v(" "),t._m(5,!0)])])])])}))]),t._v(" "),e("p",{staticClass:"buttons is-fullwidth"},[e("button",{staticClass:"button ml-auto mr-auto",on:{click:t.addCourse}},[t._v("Add Course")]),t._v(" "),e("a",{staticClass:"button ml-auto mr-auto",on:{click:t.displayAddSem}},[t._v("Change semester")]),t._v(" "),e("button",{staticClass:"button ml-auto mr-auto",on:{click:t.save}},[t._v("Save Results")])]),t._v(" "),e("p",{staticClass:"is-flex"},[e("button",{staticClass:"button ml-auto mr-auto bg-secondary",on:{click:t.showgp}},[t._v("View CGPA")])])])]),t._v(" "),t.showAddSem?e("div",{staticClass:"modal",staticStyle:{display:"flex"}},[e("div",{staticClass:"modal-background"}),t._v(" "),e("div",{staticClass:"modal-card"},[e("header",{staticClass:"modal-card-head"},[e("p",{staticClass:"modal-card-title"},[t._v("Add New Semesters")]),t._v(" "),e("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(s){t.showAddSem=!1}}})]),t._v(" "),e("section",{staticClass:"modal-card-body"},[e("p",[t._v("All Semesters")]),t._v(" "),t._l(t.activeAccount.semesters,function(s,a){return e("div",{staticClass:"semester-list-item"},[e("div",{staticClass:"field is-flex is-vcentered is-fullwidth"},[e("p",{staticClass:"control has-icons-left has-icons-right"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.semName,expression:"semester.semName"}],staticClass:"input course-input",attrs:{type:"text",placeholder:"Semester "+(a+1)},domProps:{value:s.semName},on:{input:function(e){e.target.composing||t.$set(s,"semName",e.target.value)}}}),t._v(" "),t._m(6,!0)]),t._v(" "),e("button",{staticClass:"delete",staticStyle:{"margin-left":".5rem"},attrs:{"aria-label":"close"},on:{click:function(s){t.deleteSem(a)}}})]),t._v(" "),e("div",{staticClass:"field is-grouped is-grouped-multiline"},[e("div",{staticClass:"control"},[e("div",{staticClass:"tags has-addons"},[e("span",{staticClass:"tag is-dark"},[t._v("Courses:")]),t._v(" "),e("span",{staticClass:"tag is-info"},[t._v(t._s(s.courses.length))])])]),t._v(" "),e("div",{staticClass:"control"},[e("div",{staticClass:"tags has-addons"},[e("span",{staticClass:"tag is-dark"},[t._v("TNU:")]),t._v(" "),e("span",{staticClass:"tag is-success"},[t._v(t._s(s.tnu()))])])]),t._v(" "),e("div",{staticClass:"control"},[e("div",{staticClass:"tags has-addons"},[e("span",{staticClass:"tag is-dark"},[t._v("GPA")]),t._v(" "),e("span",{staticClass:"tag is-primary"},[t._v(t._s(s.gpa("5unit").toFixed(2)))])])]),t._v(" "),e("div",{staticClass:"control"},[e("button",{staticClass:"button",on:{click:function(s){t.changeActiveSem(a)}}},[t._v("Edit Courses")])])])])})],2),t._v(" "),e("footer",{staticClass:"modal-card-foot"},[e("button",{staticClass:"button is-success",on:{click:t.addSem}},[t._v("New Semester")]),t._v(" "),e("button",{staticClass:"button",on:{click:function(s){t.showAddSem=!1}}},[t._v("Done")])])])]):t._e(),t._v(" "),t.showcgpa?e("div",{staticClass:"modal",staticStyle:{display:"flex"}},[e("div",{staticClass:"modal-background"}),t._v(" "),e("div",{staticClass:"modal-card"},[e("header",{staticClass:"modal-card-head"},[e("p",{staticClass:"modal-card-title"},[t._v("View CGPA")]),t._v(" "),e("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(s){t.showcgpa=!1}}})]),t._v(" "),e("section",{staticClass:"modal-card-body has-text-centered"},[e("p",[t._v("Your CGPA iS")]),t._v(" "),e("h3",{staticClass:"text-primary-colored"},[t._v(t._s(t.activeAccount.getcgpa().toFixed(2)))])]),t._v(" "),e("footer",{staticClass:"modal-card-foot"},[e("button",{staticClass:"button",on:{click:function(s){t.showcgpa=!1}}},[t._v("Close")])])])]):t._e()])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{staticClass:"card-header-icon",attrs:{href:"#","aria-label":"more options"}},[e("span",{staticClass:"icon"},[e("span",{staticClass:"icon-shuffle is-large"})])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"icon is-small is-left"},[e("span",{staticClass:"icon-border_color"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("Course")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Units")]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v("Score")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"icon is-small is-right"},[e("span",{staticClass:"icon-mode_edit"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"icon is-small is-right"},[e("span",{staticClass:"icon-mode_edit"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"icon is-small is-right"},[e("span",{staticClass:"icon-mode_edit"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"icon is-small is-left"},[e("span",{staticClass:"icon-mode_edit"})])}],c={render:a,staticRenderFns:i};s.a=c},8:function(t,s,e){"use strict";s.a={name:"app"}},9:function(t,s,e){"use strict";var a=e(30),i=e.n(a),c=e(32);s.a={name:"Calculator",data:function(){return{accounts:c.c.accounts,activeAccount:c.c.activeAccount,activeSem:c.c.activeAccount.semesters[0],showAddSem:!1,showcgpa:!1}},methods:{addCourse:function(){this.activeSem.courses.push(new c.a)},deleteCourse:function(t){this.activeSem.courses.splice(t,1)},deleteSem:function(t){this.activeAccount.semesters.splice(t,1)},displayAddSem:function(){this.showAddSem=!0},addSem:function(){this.activeAccount.semesters.push(new c.b(null,[]))},changeActiveSem:function(t){this.activeSem=this.activeAccount.semesters[t],this.showAddSem=!1},showgp:function(){this.showcgpa=!0},showNoLocalStorageSupport:function(){alert("Your browser does not support this feature")},save:function(){localStorage?(localStorage.setItem("user-"+this.accounts.indexOf(this.activeAccount),i()(this.activeAccount)),console.log(JSON.parse(localStorage.getItem("user-"+this.accounts.indexOf(this.activeAccount)))),alert("Result saved successfully, you can close your browser now")):this.showNoLocalStorageSupport()}}}}},[17]);
//# sourceMappingURL=app.ea065d4a035ef27bb0f2.js.map