(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-frizo-frizo-module"],{

/***/ "2GJh":
/*!*********************************************!*\
  !*** ./src/app/pages/frizo/frizo.module.ts ***!
  \*********************************************/
/*! exports provided: FrizoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrizoModule", function() { return FrizoModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _frizo_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./frizo-routing.module */ "KyQR");
/* harmony import */ var _frizo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./frizo.component */ "NOvJ");
/* harmony import */ var src_app_components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/components/inicio/inicio.component */ "XFqa");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_components_admproc_admproc_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/admproc/admproc.component */ "GKIm");
/* harmony import */ var src_app_components_admmemo_admmemo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/admmemo/admmemo.component */ "tXQa");
/* harmony import */ var src_app_components_admiou_admiou_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/admiou/admiou.component */ "p4Xh");
/* harmony import */ var src_app_components_admarc_admarc_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/admarc/admarc.component */ "3kqk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class FrizoModule {
}
FrizoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: FrizoModule });
FrizoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ factory: function FrizoModule_Factory(t) { return new (t || FrizoModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _frizo_routing_module__WEBPACK_IMPORTED_MODULE_1__["FrizoRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](FrizoModule, { declarations: [_frizo_component__WEBPACK_IMPORTED_MODULE_2__["FrizoComponent"],
        src_app_components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__["InicioComponent"],
        src_app_components_admproc_admproc_component__WEBPACK_IMPORTED_MODULE_5__["AdmprocComponent"],
        src_app_components_admmemo_admmemo_component__WEBPACK_IMPORTED_MODULE_6__["AdmmemoComponent"],
        src_app_components_admiou_admiou_component__WEBPACK_IMPORTED_MODULE_7__["AdmiouComponent"],
        src_app_components_admarc_admarc_component__WEBPACK_IMPORTED_MODULE_8__["AdmarcComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _frizo_routing_module__WEBPACK_IMPORTED_MODULE_1__["FrizoRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]] }); })();


/***/ }),

/***/ "3kqk":
/*!*******************************************************!*\
  !*** ./src/app/components/admarc/admarc.component.ts ***!
  \*******************************************************/
/*! exports provided: AdmarcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmarcComponent", function() { return AdmarcComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_animation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/animation.service */ "BqRO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function AdmarcComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Adminstrador de Archivos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdmarcComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Tambi\u00E9n denominado explorador de archivos, de un sistema operativo es un programa del propio sistema operativo que nos permite gestionar los archivos, ya sean de programas o de datos, que est\u00E1n almacenados en el sistema");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AdmarcComponent {
    constructor(animaservice) {
        this.animaservice = animaservice;
        this.ancho = 10;
        this.estado = false;
    }
    ngOnInit() {
        let interval = setInterval(() => {
            if (this.ancho < 250) {
                this.ancho += 10;
                this.inclinacion = this.animaservice.getnum1();
                console.log(this.inclinacion);
            }
            else {
                clearInterval(interval);
                this.estado = true;
            }
        }, 20);
        console.log(this.inclinacion);
    }
}
AdmarcComponent.ɵfac = function AdmarcComponent_Factory(t) { return new (t || AdmarcComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_animation_service__WEBPACK_IMPORTED_MODULE_1__["AnimationService"])); };
AdmarcComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdmarcComponent, selectors: [["app-admarc"]], decls: 3, vars: 4, consts: [["id", "efect", 1, "page"], ["class", "header", 4, "ngIf"], ["class", "body", 4, "ngIf"], [1, "header"], [1, "body"], [2, "text-align", "justify"]], template: function AdmarcComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdmarcComponent_div_1_Template, 3, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdmarcComponent_div_2_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.ancho + "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.estado);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.estado);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".page[_ngcontent-%COMP%]{\r\n    justify-content: center;\r\n    \r\n    height: 400px;\r\n    margin-top: 50px;\r\n    border: navy solid;\r\n    background-color: indigo;\r\n    color: darkgray;\r\n    transform: skewY(-15deg);\r\n}\r\n.body[_ngcontent-%COMP%]{\r\n    padding: 20px;\r\n}\r\n.header[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n#efect[_ngcontent-%COMP%]{\r\n    transition:0.5s;\r\n}\r\n#efect[_ngcontent-%COMP%]:hover\r\n{\r\n    transform:scale(1,1);\r\n\t-webkit-transform:scale(1,1);\r\n\t-moz-trasform:scale(1,1);\r\n\t-o-trasform:scale(1,1);\r\n}\r\n.P[_ngcontent-%COMP%]{\r\n    text-align: justify;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWFyYy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCOztJQUV2QixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7O0lBRUksb0JBQW9CO0NBQ3ZCLDRCQUE0QjtDQUM1Qix3QkFBd0I7Q0FDeEIsc0JBQXNCO0FBQ3ZCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoiYWRtYXJjLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZXtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgXHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIGJvcmRlcjogbmF2eSBzb2xpZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGluZGlnbztcclxuICAgIGNvbG9yOiBkYXJrZ3JheTtcclxuICAgIHRyYW5zZm9ybTogc2tld1koLTE1ZGVnKTtcclxufVxyXG4uYm9keXtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuLmhlYWRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4jZWZlY3R7XHJcbiAgICB0cmFuc2l0aW9uOjAuNXM7XHJcbn1cclxuI2VmZWN0OmhvdmVyXHJcbntcclxuICAgIHRyYW5zZm9ybTpzY2FsZSgxLDEpO1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEsMSk7XHJcblx0LW1vei10cmFzZm9ybTpzY2FsZSgxLDEpO1xyXG5cdC1vLXRyYXNmb3JtOnNjYWxlKDEsMSk7XHJcbn1cclxuLlB7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59Il19 */"] });


/***/ }),

/***/ "GKIm":
/*!*********************************************************!*\
  !*** ./src/app/components/admproc/admproc.component.ts ***!
  \*********************************************************/
/*! exports provided: AdmprocComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmprocComponent", function() { return AdmprocComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function AdmprocComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Adminstrador de Procesos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdmprocComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "La actividad m\u00E1s importante del n\u00FAcleo del sistema operativo es implementar los procesos. Cada proceso es un procesador virtual en donde se ejecuta una aplicaci\u00F3n o una herramienta del sistema operativo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AdmprocComponent {
    constructor() {
        this.ancho = 10;
        this.estado = false;
    }
    ngOnInit() {
        let interval = setInterval(() => {
            if (this.ancho < 250) {
                this.ancho += 10;
            }
            else {
                this.estado = true;
                clearInterval(interval);
            }
        }, 20);
    }
}
AdmprocComponent.ɵfac = function AdmprocComponent_Factory(t) { return new (t || AdmprocComponent)(); };
AdmprocComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdmprocComponent, selectors: [["app-admproc"]], decls: 3, vars: 4, consts: [["id", "efect", 1, "page"], ["class", "header", 4, "ngIf"], ["class", "body", 4, "ngIf"], [1, "header"], [1, "body"]], template: function AdmprocComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdmprocComponent_div_1_Template, 3, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdmprocComponent_div_2_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.ancho + "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.estado);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.estado);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".page[_ngcontent-%COMP%]{\r\n    justify-content: center;\r\n    height: 400px;\r\n    margin-top: 50px;\r\n    border: navy solid;\r\n    background-color: indigo;\r\n    color: darkgray;\r\n    transform: skewy(15deg);\r\n}\r\n.body[_ngcontent-%COMP%]{\r\n    padding: 20px;\r\n}\r\n.header[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n#efect[_ngcontent-%COMP%]{\r\n    transition:0.5s;\r\n}\r\n#efect[_ngcontent-%COMP%]:hover\r\n{\r\n    transform:scale(1,1);\r\n\t-webkit-transform:scale(1,1);\r\n\t-moz-trasform:scale(1,1);\r\n\t-o-trasform:scale(1,1);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbXByb2MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7O0lBRUksb0JBQW9CO0NBQ3ZCLDRCQUE0QjtDQUM1Qix3QkFBd0I7Q0FDeEIsc0JBQXNCO0FBQ3ZCIiwiZmlsZSI6ImFkbXByb2MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdle1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIGJvcmRlcjogbmF2eSBzb2xpZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGluZGlnbztcclxuICAgIGNvbG9yOiBkYXJrZ3JheTtcclxuICAgIHRyYW5zZm9ybTogc2tld3koMTVkZWcpO1xyXG59XHJcbi5ib2R5e1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG4uaGVhZGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiNlZmVjdHtcclxuICAgIHRyYW5zaXRpb246MC41cztcclxufVxyXG4jZWZlY3Q6aG92ZXJcclxue1xyXG4gICAgdHJhbnNmb3JtOnNjYWxlKDEsMSk7XHJcblx0LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSwxKTtcclxuXHQtbW96LXRyYXNmb3JtOnNjYWxlKDEsMSk7XHJcblx0LW8tdHJhc2Zvcm06c2NhbGUoMSwxKTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "KyQR":
/*!*****************************************************!*\
  !*** ./src/app/pages/frizo/frizo-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: FrizoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrizoRoutingModule", function() { return FrizoRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _frizo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./frizo.component */ "NOvJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{ path: '', component: _frizo_component__WEBPACK_IMPORTED_MODULE_1__["FrizoComponent"] }];
class FrizoRoutingModule {
}
FrizoRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: FrizoRoutingModule });
FrizoRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function FrizoRoutingModule_Factory(t) { return new (t || FrizoRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FrizoRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "NOvJ":
/*!************************************************!*\
  !*** ./src/app/pages/frizo/frizo.component.ts ***!
  \************************************************/
/*! exports provided: FrizoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrizoComponent", function() { return FrizoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/inicio/inicio.component */ "XFqa");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_components_admarc_admarc_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/admarc/admarc.component */ "3kqk");
/* harmony import */ var src_app_components_admiou_admiou_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/admiou/admiou.component */ "p4Xh");
/* harmony import */ var src_app_components_admmemo_admmemo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/admmemo/admmemo.component */ "tXQa");
/* harmony import */ var src_app_components_admproc_admproc_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/admproc/admproc.component */ "GKIm");








function FrizoComponent_app_admarc_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-admarc", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FrizoComponent_app_admarc_2_Template_app_admarc_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.Onadmarc(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FrizoComponent_app_admiou_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-admiou", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FrizoComponent_app_admiou_3_Template_app_admiou_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.Onadmiou(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FrizoComponent_app_admmemo_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-admmemo", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FrizoComponent_app_admmemo_4_Template_app_admmemo_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.Onadmmemo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FrizoComponent_app_admproc_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-admproc", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FrizoComponent_app_admproc_5_Template_app_admproc_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.Onadmproc(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FrizoComponent {
    constructor(router) {
        this.router = router;
        this.inicio = true;
    }
    ngOnInit() {
    }
    start() {
        console.log("empezo");
        this.inicio = false;
    }
    Onadmarc() {
        this.router.navigate(['/page1']);
    }
    Onadmiou() {
        this.router.navigate(['/page2']);
    }
    Onadmmemo() {
        this.router.navigate(['/page3']);
    }
    Onadmproc() {
        this.router.navigate(['/page4']);
    }
}
FrizoComponent.ɵfac = function FrizoComponent_Factory(t) { return new (t || FrizoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
FrizoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FrizoComponent, selectors: [["app-frizo"]], decls: 6, vars: 4, consts: [[1, "frizo"], [3, "click"], [3, "click", 4, "ngIf"]], template: function FrizoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-inicio", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FrizoComponent_Template_app_inicio_click_1_listener() { return ctx.start(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FrizoComponent_app_admarc_2_Template, 1, 0, "app-admarc", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FrizoComponent_app_admiou_3_Template, 1, 0, "app-admiou", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FrizoComponent_app_admmemo_4_Template, 1, 0, "app-admmemo", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FrizoComponent_app_admproc_5_Template, 1, 0, "app-admproc", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.inicio);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.inicio);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.inicio);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.inicio);
    } }, directives: [src_app_components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_2__["InicioComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], src_app_components_admarc_admarc_component__WEBPACK_IMPORTED_MODULE_4__["AdmarcComponent"], src_app_components_admiou_admiou_component__WEBPACK_IMPORTED_MODULE_5__["AdmiouComponent"], src_app_components_admmemo_admmemo_component__WEBPACK_IMPORTED_MODULE_6__["AdmmemoComponent"], src_app_components_admproc_admproc_component__WEBPACK_IMPORTED_MODULE_7__["AdmprocComponent"]], styles: [".frizo[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    padding: 0;\r\n    justify-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyaXpvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJmcml6by5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZyaXpve1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufSJdfQ== */"] });


/***/ }),

/***/ "XFqa":
/*!*******************************************************!*\
  !*** ./src/app/components/inicio/inicio.component.ts ***!
  \*******************************************************/
/*! exports provided: InicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioComponent", function() { return InicioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class InicioComponent {
    constructor() { }
    ngOnInit() {
    }
}
InicioComponent.ɵfac = function InicioComponent_Factory(t) { return new (t || InicioComponent)(); };
InicioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InicioComponent, selectors: [["app-inicio"]], decls: 20, vars: 0, consts: [["id", "efect", 1, "page"], [1, "header"], [1, "body"], [2, "text-align", "justify"], [1, "bi", "bi-archive"], [1, "bi", "bi-arrow-left-right"], [1, "bi", "bi-hdd"], [1, "bi", "bi-cpu"]], template: function InicioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Subsitemas de un Sistema Operativo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " En el siguiente Frizo se muestra informacion de los direfentes subsistemas de un sistema operativo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Administrador de Archivos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Administrador de Entrada / Salida");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Administrador de Memoria");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Administrador de Procesos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".page[_ngcontent-%COMP%]{\r\n    justify-content: center;\r\n    width: 250px;\r\n    height: 400px;\r\n    margin-top: 82px;\r\n    border: navy solid;\r\n    background-color: indigo;\r\n    color: darkgray;\r\n}\r\n.body[_ngcontent-%COMP%]{\r\n    padding: 20px;\r\n}\r\n.header[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n.p[_ngcontent-%COMP%]{\r\n    text-align: justify;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaWNpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoiaW5pY2lvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZXtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIG1hcmdpbi10b3A6IDgycHg7XHJcbiAgICBib3JkZXI6IG5hdnkgc29saWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRpZ287XHJcbiAgICBjb2xvcjogZGFya2dyYXk7XHJcbn1cclxuLmJvZHl7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbi5oZWFkZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnB7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59Il19 */"] });


/***/ }),

/***/ "p4Xh":
/*!*******************************************************!*\
  !*** ./src/app/components/admiou/admiou.component.ts ***!
  \*******************************************************/
/*! exports provided: AdmiouComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmiouComponent", function() { return AdmiouComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function AdmiouComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Adminstrador de Entrada / Salida");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdmiouComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Es la interfaz que tiene el computador con el exterior y el objetivo que tiene es facilitar las operaciones de E/S entre los perif\u00E9ricos y la memoria o los registros\u0001del\u0001procesador. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AdmiouComponent {
    constructor() {
        this.ancho = 10;
        this.estado = false;
    }
    ngOnInit() {
        let interval = setInterval(() => {
            if (this.ancho < 250) {
                this.ancho += 10;
            }
            else {
                clearInterval(interval);
                this.estado = true;
            }
        }, 20);
    }
}
AdmiouComponent.ɵfac = function AdmiouComponent_Factory(t) { return new (t || AdmiouComponent)(); };
AdmiouComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdmiouComponent, selectors: [["app-admiou"]], decls: 3, vars: 4, consts: [["id", "efect", 1, "page"], ["class", "header", 4, "ngIf"], ["class", "body", 4, "ngIf"], [1, "header"], [1, "body"]], template: function AdmiouComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdmiouComponent_div_1_Template, 3, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdmiouComponent_div_2_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.ancho + "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.estado);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.estado);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".page[_ngcontent-%COMP%]{\r\n    justify-content: center;\r\n    height: 400px;\r\n    margin-top: 50px;\r\n    border: navy solid;\r\n    background-color: indigo;\r\n    color: darkgray;\r\n    transform: skewy(15deg);\r\n}\r\n.body[_ngcontent-%COMP%]{\r\n    padding: 20px;\r\n}\r\n.header[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n#efect[_ngcontent-%COMP%]{\r\n    transition:0.5s;\r\n}\r\n#efect[_ngcontent-%COMP%]:hover\r\n{\r\n    transform:scale(1,1);\r\n\t-webkit-transform:scale(1,1);\r\n\t-moz-trasform:scale(1,1);\r\n\t-o-trasform:scale(1,1);\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWlvdS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2YsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTs7SUFFSSxvQkFBb0I7Q0FDdkIsNEJBQTRCO0NBQzVCLHdCQUF3QjtDQUN4QixzQkFBc0I7O0FBRXZCIiwiZmlsZSI6ImFkbWlvdS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2V7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgYm9yZGVyOiBuYXZ5IHNvbGlkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5kaWdvO1xyXG4gICAgY29sb3I6IGRhcmtncmF5O1xyXG4gICAgdHJhbnNmb3JtOiBza2V3eSgxNWRlZyk7XHJcbn1cclxuLmJvZHl7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbi5oZWFkZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuI2VmZWN0e1xyXG4gICAgdHJhbnNpdGlvbjowLjVzO1xyXG59XHJcbiNlZmVjdDpob3ZlclxyXG57XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMSwxKTtcclxuXHQtd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLDEpO1xyXG5cdC1tb3otdHJhc2Zvcm06c2NhbGUoMSwxKTtcclxuXHQtby10cmFzZm9ybTpzY2FsZSgxLDEpO1xyXG4gICAgXHJcbn0iXX0= */"] });


/***/ }),

/***/ "tXQa":
/*!*********************************************************!*\
  !*** ./src/app/components/admmemo/admmemo.component.ts ***!
  \*********************************************************/
/*! exports provided: AdmmemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmmemoComponent", function() { return AdmmemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function AdmmemoComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Adminstrador de Memoria");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdmmemoComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\tSe refiere a los distintos m\u00E9todos y operaciones que se encargan de obtener la m\u00E1xima utilidad de la memoria, organizando los procesos y programas que se ejecutan de manera tal que se aproveche de la mejor manera posible el espacio disponible.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AdmmemoComponent {
    constructor() {
        this.ancho = 10;
        this.estado = false;
    }
    ngOnInit() {
        let interval = setInterval(() => {
            if (this.ancho < 250) {
                this.ancho += 10;
            }
            else {
                clearInterval(interval);
                this.estado = true;
            }
        }, 20);
    }
}
AdmmemoComponent.ɵfac = function AdmmemoComponent_Factory(t) { return new (t || AdmmemoComponent)(); };
AdmmemoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdmmemoComponent, selectors: [["app-admmemo"]], decls: 3, vars: 4, consts: [["id", "efect", 1, "page"], ["class", "header", 4, "ngIf"], ["class", "body", 4, "ngIf"], [1, "header"], [1, "body"]], template: function AdmmemoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdmmemoComponent_div_1_Template, 3, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdmmemoComponent_div_2_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.ancho + "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.estado);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.estado);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".page[_ngcontent-%COMP%]{\r\n    justify-content: center;\r\n    height: 400px;\r\n    margin-top: 50px;\r\n    border: navy solid;\r\n    background-color: indigo;\r\n    color: darkgray;\r\n    transform: skewY(-15deg);\r\n}\r\n.body[_ngcontent-%COMP%]{\r\n    padding: 20px;\r\n}\r\n.header[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n#efect[_ngcontent-%COMP%]{\r\n    transition:0.5s;\r\n}\r\n#efect[_ngcontent-%COMP%]:hover\r\n{\r\n    transform:scale(1,1);\r\n\t-webkit-transform:scale(1,1);\r\n\t-moz-trasform:scale(1,1);\r\n\t-o-trasform:scale(1,1);\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbW1lbW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsZUFBZTtJQUNmLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7O0lBRUksb0JBQW9CO0NBQ3ZCLDRCQUE0QjtDQUM1Qix3QkFBd0I7Q0FDeEIsc0JBQXNCOztBQUV2QiIsImZpbGUiOiJhZG1tZW1vLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZXtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBib3JkZXI6IG5hdnkgc29saWQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmRpZ287XHJcbiAgICBjb2xvcjogZGFya2dyYXk7XHJcbiAgICB0cmFuc2Zvcm06IHNrZXdZKC0xNWRlZyk7XHJcbn1cclxuLmJvZHl7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbi5oZWFkZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuI2VmZWN0e1xyXG4gICAgdHJhbnNpdGlvbjowLjVzO1xyXG59XHJcbiNlZmVjdDpob3ZlclxyXG57XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMSwxKTtcclxuXHQtd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLDEpO1xyXG5cdC1tb3otdHJhc2Zvcm06c2NhbGUoMSwxKTtcclxuXHQtby10cmFzZm9ybTpzY2FsZSgxLDEpO1xyXG4gICAgXHJcbn0iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=pages-frizo-frizo-module.js.map