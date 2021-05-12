(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-page2-page2-module"],{

/***/ "Lykl":
/*!*********************************************!*\
  !*** ./src/app/pages/page2/page2.module.ts ***!
  \*********************************************/
/*! exports provided: Page2Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page2Module", function() { return Page2Module; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _page2_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page2-routing.module */ "oiWa");
/* harmony import */ var _page2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page2.component */ "XgbT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class Page2Module {
}
Page2Module.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: Page2Module });
Page2Module.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function Page2Module_Factory(t) { return new (t || Page2Module)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _page2_routing_module__WEBPACK_IMPORTED_MODULE_1__["Page2RoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](Page2Module, { declarations: [_page2_component__WEBPACK_IMPORTED_MODULE_2__["Page2Component"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _page2_routing_module__WEBPACK_IMPORTED_MODULE_1__["Page2RoutingModule"]] }); })();


/***/ }),

/***/ "XgbT":
/*!************************************************!*\
  !*** ./src/app/pages/page2/page2.component.ts ***!
  \************************************************/
/*! exports provided: Page2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page2Component", function() { return Page2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class Page2Component {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    OnBack() {
        this.router.navigate(['page1']);
    }
    OnNext() {
        this.router.navigate(['page3']);
    }
    OnInicio() {
        this.router.navigate(['frizo']);
    }
}
Page2Component.ɵfac = function Page2Component_Factory(t) { return new (t || Page2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
Page2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Page2Component, selectors: [["app-page2"]], decls: 32, vars: 0, consts: [[1, "container"], [1, "header", 3, "click"], [1, "body"], [1, "row"], [1, "col-md-1", "atras"], [1, "bi", "bi-caret-left", "btn", "btn-info", "btn", "btn-block", "btatras", 3, "click"], [1, "col-md-10"], [2, "text-align", "justify"], [1, "col-md-7"], [1, "col-md-2"], ["src", "https://sites.google.com/site/materiasisoperativo/_/rsrc/1368568857388/unidad-4-administracion-de-entrada-salida/dispositivos%20de%20entrada%20y%20salida.png", "alt", "", 2, "width", "400px", "height", "280px"], [1, "col-md-5"], ["src", "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBMUFBIVExIYGBcXFxgZFxQZGBoaGRkaGhkaHBoaGRocISwkGh0rHhcVJDckKS0yNDM0GiU4PjgzPSw1MzIBCwsLDw4PHhISHjcjISE1NDIyLy8vMjIyMj0yPS8vMjIvMi89Ly8yMjIyLzIyMjIyLzIyMi8yMjIyMjIyMjIyM//AABEIAJ4BPwMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABAYDBQcBAgj/xABKEAACAQIDAgcLCQYFBAMAAAABAgMAEQQSISIxBQYTMkFRYRQVIzNSU1RicYGRBxZykpOx0dLTNUKUobPwF3N0orI0pMHhJILx/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECAwQFBv/EACgRAQEAAQMCBAcBAQAAAAAAAAABAgMREjFRBBMUUgUhM0FxkaGBI//aAAwDAQACEQMRAD8A7NSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlKBSlajhbh6DDaSFy2UuUSOSVlQaF2CKSqX0zNYUG3pWhPGfDgSs4kRIxOc7IcjjDsyzZCL3IKNsmxIBIBANbSbFojRIxs0jMqCxNyqs516NlWOtBKpSlApSlApSlApWswuGR1kvJI+eSQFg8qWyyMMq2YZAtst1tmy31vUh8GpLkl9sAG0kgAAtzQGsh03rY0EulRe4033fmZPGSbuu2bn+vzu2vEwajIbvsggXkkNwfKBbbOu9rmgl0qGmCUZLGTYJIvLIb3357tt//AGvboouCUAC8mjZx4WU69RJbVfVOz2UEylQ2wSkMLybTZj4WQG/UCG2V9UWHZXr4JTnu0m3bNaWUWtuyWbY7ctr9NBLpURsGpLG77S5TaSQC2nNAbZOnOFj2173Guhu+iZPGSbuu2bV/X53bQSqVEXBqChBfYBAvJIQb+UC22dd7XtXi4JBk1k2CSLyym9/Ku22OxrgUEylQxgVsBmk0fP42S9+onNcr6nN7KNglIYXk2mzG0sgN/VIbZHqiw7KCZSoj4JDnuX27XtJILW3ZLNsduW1+mvTg1JY3faXKfCSAW6wA1g3rDXtoJVKijBrcG76JkHhJN3WRm1b1ztdteJg1BQgvsXteSU3vvzAtt79M17dFBLpUNMEoCANJsG4vLKST6xLbY7GuK97iS1ryc/P42W9+q+a+X1Ob2UEulQ3wSkOC0m2bm0soIPqkNsDsWwr18GpLkl9u17SSC1t2UBtjd+7a/TQS6VFODUkm76pkPhJLW6wM1g2nOG1214MGoKm8mi5B4WQi3WRm1b1jr20Eula+bDBFUq7Ax3yl5ZCu0dc922+zNe3RWwoFKUoPKV8SNZSeoGtBieMsEbsj4lFZdCptce2wqZN0yW9FiqtRLiYcViiuEaXl5Y2WflI1jSJY0TI9znGVhKwVUYEyXuLm3weNmG9KT+/dT524b0pP791Txq3CsKcV2fC4hJHblZY8WkYdgUi5dpCSqpprmXU3YC4BFyKmYZp8RPhnlwrwrCrs2do2LSuAgCcmzXQKZSWNucum+2H524b0pP791e/OzDelJ/fupxpwq0UqsDjbhfSk/v3V6ONmF9Kj/v3U41HCrNSsGGclbk3rPVVSlKUEXBMSpuwbwkguo0sJGAX2gAKe0GpNRcDzTfJ4yXmc3xj7/W8r1r1UMT8pOGjkkjOGxJKO6FgIbEoxUkXlBtcHeKtjhll8sZujdueXxWIkk7nlSKKKQR3MfKNKyMOW3kZEG1GOnMGO4C+J+OEIR5DFMECcpG5VbTxiREaSIKxYgGSM2YKSHWwN6qHzwwXKmQQ48KXEphV4liMmhzlRLc3IBK3yk6lbkmo8XGTg9RlMGOZVCLErHDWhRJEkEcVnByZo475sxIRRfQVp6fU9tOUW/hDjXIsYaLByl1xMMEsbmHNGZGhsptLYsyzLlIJAJ2rWNTW4zIrurQTKkRZZpyqclEVg5c5yHJtl0zAEZrC+ovTpeOeBblb4bG+FxMOJa3c+kkPI5QPC809zpcb9WsRpbL8+cCVxSNhMUyYlmMinkLEPGsZUWlBAKoO3U09Pqe2nKLJjOMDMgCRywSLiMEGSQR5jFPiETMAGYBWUSrrZgVOgtWePjXCxJ5OUIY3lilyoVmVHRCYwGL6tJGFzKubNcXGtUmLjbggNuLHSOZIXMsnc2c8g2eJDldRkU5ja1zmYk3N6wRcY8AAFMWPZFjeKOMnDBYo3ZGyxsrhxlaKMqxYsMo1p6fU9tOUXSPjDIs03KYeZb8hFDhbQmVpWE7uwZZCmUogN2cACI7jvztxpQ8nyeHxEhZOUZURCY1DlHD3cDOrKwKrmJsctwCRRTxowh2m75NLnR1xBODzoyLIgyqGyWKSSKQUIIN7X1qfwfx4wULBkwuMuIxHtcgbgOzl2PK3LFnYk9N6en1PbTlHTqVQv8UMN6JivhB+tT/FDDeiYr4QfrVHp9T203i+0rWcA8MJjIEnRGVWLgK+XMCjshvlYjep6a2dZWWXape0pSgUpSgUpSgUpSgUpSgjY1SUYBQ27ZJsDqN5qTUbGrdGGTPu2b2vqOnoqTQKUpQYMX4uT6Lfca4TwuLzy9sjffXdsX4uT6Lfca4/hEU4vEBkVtWtmUNY5xqAemq558MLl2baPVoGwMgzac2xbUaX9+u6j4KQZrrzRc7Q0HR09hq9vHGc3g0133RdbdemtfDCM3vGhuLG8Y1Guh01GprhnxC9nRxUWSBkNmFja+/8ACvgCr48UTG7Rxk9sYOnwr57mg8zF9mv4VefEMdvnjTaKPS+hq+DBweZi90afhWn4z4aNI15ONF2hqqKp1V7i4Gu4VfT8djnnMZOqLHUeL58Al62davi94hK2ldd6uO9XtKUqEImBUhTdAu3KbA6ayMQ3tYHMe0muWcC8Cw4iXHGUMSuJlAsxG+WS+6up4FbIwyZPCSnLe97yOc1/Wvmt0ZrdFc+4o+N4R/1Un9SSujQtm+yL1YcRwDgEkWMrIznLdU5R8odsitIVBCAm+rW5rHoNpZ4pYMb1f7Q9V/uB+FTY8JOkspRo+TlkEjOcxkW0aR5AvNPi7hr6X5p3nTQcVGIjWVIgquhdFzMshSCdDM2ZQTI7zIWDX0jF2atfM1O9/adomfNHB+S/2hp80cHe2V79XKG/R+I+NRl4tOsYRY4Spys8RJWPlDCsbyaI2ZgUuLjXMTcHWvpuLcm06mNZHY55BmJCHB8iFBADECQK1rjTW4NgHmane/s2j6j4r4JmdQsl0y3Oc22hcWNZDxSwYIUhrnULyhuQN9h01Hfi7IyvfD4UBpM3cwLGEeBEQe/JjM62zAZBv3ggGp2C4IdMSZCEK5ADIWzyOwREVrMl4yArc1yDmOzc3p5mp3v7NoqvG7gmLDNAIgQHEpa7FuaY7b93Oaq9Vv8AlE5+E+jN98VVCvQ0LbhLWeXUpSlbKOw/Jp+zof8AMn/ryVa6qnyafs6H/Mn/AK8lWuvA1vqX8tp0e0pSs0lKUoFKx2sd+h+/+7192oPaV8kf3evFO8dVB90pSgi49QY2BDHdovOOo3VKqLj7cm1yw3arzt43VKoFKUoMGL8XJ9FvuNchwR/+Zifa3/IV17GeLk+i33GuQYP/AKzEe1v+QrHxH0q20erau5rRTRYkSSmPMFuzrYJZ2CwhQ19SNJB0HTfVgnwxZSFbKSLZukdtQl4PkB1na3VbpzXvf6N16q8jS1Jj2/1tlLVfOJkRHw3JksQ6jMyBm5QuFyagEC1/ed1qseGLkHMlrGw1vcdBr4TAS3BM5NgBzF6CNbm+pAIPt0tWXDcHSKwJmdhpcE9nt/l/51q+pqYZT7IxlTo2rTcbPFp9Mf8AF63YjI6K0nGzxcf0x/xeqeEv/aL/AGdD4MxiRYaNnPQSAAWZrb8qjU2/lWx754fz8X2i/jWj4KwLiAPCVLsNVkvYkbrOAWUX6DcdAy1tu4JPOp9m36le9erivVn754fz8f2i/jWOPhSFmyLIpOliDdSWvZQw0zac296+e4JPOJ9m36lYHwErMyMU5MgXcKcxvcMuRiV3WOYkjoymoQm8HqArWVh4SbRt+srkkeqTqOwiuF46d0nxWSR1vPNfKzLfwr77HWu38ERhY8qlyFeYAuSW0le4uf3QbhfVA3bq5bwZwBHipcaXkkXJiZQAhQXvLIdcyHqrr8HljjcrkrlN1b7tl89L9o/407tl89L9o/41dvmLh/PT/GL9OoWE4s4ORsqS4v8Ae2zFlQ5TY2doQp17dei9dvn6fb+K8clW7tl89L9o/wCNO7ZfPS/aP+NXRuJOGBAOImBN7DNDc2328Hravr5iween+MX6VT5+l2/hxyUnu2Xz0v2j/jTu2Xz0v2j/AI1csPxMwsi5knnIuwveIaqxU74utTWT5i4fz0/xi/Tp5+l2/hxyUaWV3tndmte2Zi1r77XOm4fCvit3xn4EjwjQiOSRuUEhOcobZClrZVXyzv7K0ldGnlMsd8eiLNilKVZV2H5NP2dD9Of+vJVrql/J9jETg6AMdovPlQasfDyagDov0nQdJFWWHhOIqrE5SQCVPOW43Na+o3V8/q/Uv5bTo2FKid8YvLFYZuFY1tbM9zY5BcqMpJYjfbZtpc3I0qiUqSQgiwve99dRa24W13//ALWJ3bKStid4BOh9h/vXf119xTI4urBhrqOgjoPUR1bxXrIRf+/jb7xQQeCsa8xYshRVJXUMCWGhAB3ga69fvrbVDXQ63sdxAPV023+33Vlyjrf/AHUGeo0WJRmYBtb2Hbbq69b19EDpLf7vwrBiMOj+UD5WU/z01FBOpWpSWVDYgsv0WOnYbXHvqbBiQ2lmU2vZlIP89+8fGg8xxtGxzFN20BcjUdFSqjY1iEYhgu7aIuBqOipNApSlBgxfi5PoN9xrjiYpY8ViGbymAHSdodeldjxni5Pot9xrhXDFxPL0HlGIPv0qMsJnjcb92ul1WU8NIL+DbTfqn5q+X4XQZvBtoLm5j3fX7DVSfFyHNeRzm0a7tqOptdd53162KkN7yOcws13Y3Guh11Gp07a4p8PxdG60ycOohAMbbr6FD9zV585Y/Nv7sn5qq0k7sbu7MbWuxJNurWvi9Xnw/T2+fU3q3njPF5uT/Z+atXw5wrHMihAwIYGzAbsra6EjpFaUGvGrTDwWnhlMsd94b13Ti3/08fsraVquLf8A08fsra10Xq471e0pSoQh4Brqxz5/CSjMRa1pXGW3q2y36ct659xS8bwj/qpP6kldCwTEqbuH25BcCwAEjgL7VACk9JU1w7E4+WOfFiOR0vPNcKxF7Sva9dXhcLnvIrbs6sKrGF4OkEcsZjxCsY3XOMSMhzPcmJC7BGsSQWQbiLi9U/v3ivSZfrmnfvFeky/XNdPpM+8OUXXB8CEDCs0UavE0pOXcoZnaM2Gma5VmA0zFraVgw/BmIFs6EraHlYzMWMrKkwkObou7xPrbMEsQLAVUe/eK9Jl+uad+8V6TL9c09Jn3hyi44TgnEK0NxbLyVmErERhZZHlXKfGF0ZVzHr1tlF7LXKe/eK9Jl+uad+8V6TL9c0nhM594co3/AMonPwn0ZvviqoVIxWMklKmSRnK3y5iTa9r29th8Kj12aeFwwmNUyu9KUpWirqXyfYC+AidGyu0k2a4zK1ppFGYbwQBa4I7b1ZYuDHyrmncNYZgoiy3trlvHe19161Pyafs6H6c/9eSrXXz+r9S/ltOjW96j6RL8Iv06xy8GyDLkmJ12uUCEZbHUBFUk5svSNL1t6VRLWLhlhu4BZjYO53lRe26wUAnoHt66nRShhdT/AOuw1lrXTQMhzR7ulf8A11fd0UEiLfJe+jdZ8hD95NVFflAhIB7h4QsbWJw7Aa7tc9qsKcJRguHYqWINsrHQoq3uBberfCqeuJkw4CyOHXLrIqMEY21DK4upv0i4N9ddQGy+fUV7dwcIfYEj3kPYV43H6EG3cPCHuw5IA7SH0qLDwtGgsslhfdobey+4dlePwrGSG5QZh0iwPsNt47DQbqPF4vLJmtflDyRUG3JZVtnuefmLajZtbcamcFSytI3K20VgtgR+8M2/2LWgg4fjU3zqw6QQtj/5FSsVxqhQRyRoCSSrpaxy9JVgLGxA+J3UFnx3Mbm9HP5u8b6kVqIOE48TCzRWa3OR9LG+5hfTp1vbStvQKUpQY5VzKy9YI+IqocKcRYZyWZmU9akX+6rlSp3TLs5yfkth8/J8V/LXz/hbF6RJ8R+WukUpunlXN/8ACyL0iT4j8KD5LYvSJPiPy10ilNzlXOR8lkXpEvxH5alYX5NoEIJkdrdDEEfdV8pTdHKo+Bw3JoEHRUmlKhBSlKCJgeYb5OfLzOb4x9/r+V62auS8HcApipcaWdkyYiUCwBveWQ9PsrrWCUhTdVXblNl3ayMQ3tI1PaTXPeKXjeEf9VJ/Ukrp8PlceViLN2D5jR+ff6q1hbijhg4iOLtIVziPYzlbkZgt7kXBF+yrnVe4WwhaacthnlWTDwpGVyi0sck7XzFgYmHKIQ/R0G4ra62fc4xD+Y0fn3+qteLxIjIBGIcg7iFWpiYXEmZBIZSubI8iS5IuSOGsSFVwwflrnNbMOggWqOnB2Ijiw8cYm0jbdLcJNmQK0pd7tGFDHIt152zcrUedqdzjHx8xo/Pv9VafMaPz7/VWtlwPBKJ8S7rLlY7DSN0F22FRZHSyjLZlVLgi4Jua3dTNbPucY5nxm4FXCNCFcvygkJuALZClrW+mfhWlq3/KJz8J9Gb74qqFd+jlcsJapl1KUpWqjsPyafs6H/Mn/ryVa6qnyafs6H/Mn/ryVa68DW+pfy2nR7SlKzSUpWu4K4Xw+JTPh5klXS+U3IuLjMu9SRrYgUEDhzgaSQh8PIEfcQwBRhcm/NJB1O7f/OtO/FvHkEGeIgixBFwR1EcnVzgmV1DKbg319hIP8way0HLeEuBMVBbNFG6n9+OGNh7DsXHvFQBDN5j/ALdPyV2Go02LjQvmdVyJnYk2CprtMToBstr2UHKO55vMf9un5KkYTg6SR1SRXjXcGEBygk9IQCwPXXUjOuZUzDMyswXrVSoY+wF1+NZqCtcE8Xu5Umu3KlwgyAZBZSe066nXsqy1Fx4BjYFWbdsrvOo3VKoFKUoFKUoFKUoFKUoFKUoFKUoFKUoImBSysMmTwkpy3ve8jHNf1r5rdGa3RXGpWx0M2K5GPEKHnlJywOwbwr2IJQ3FjvFdk4PUBTZWXwkps2/WVyT9Ek3HYRUutdHV8u35b790WbuI98uFerE/wzfpU75cK9WJ/hm/Srt1K29XPbEbXu4j3y4V6sT/AAzfpU75cK9WJ/hm/Srt1Kernthte7iPfLhXqxP8M36VO+XCvVif4Zv0q7dSnq57YbXu4LjhjZiplixDlbhbwSC2a1+bGPJX4VG73Yj0Wf7CX8tfoOlWnjspNpIjg/Pne7Eeiz/YS/lp3uxHos/2Ev5a/QdKn1+faHBVvk6hdMBEroyNnmOV1KsAZpCLqwBFwQffVppXtcWV5ZW91ylKVA8qgcABXTghY4ZVxMEUcc8jQyxhI1hKvHI7oocFwlkBOoDDQXroFKDn2NGIYYES90u2SPlIFTFKC7S6yGeLYDIATklutgN171jwk+KPdTYVsS8ytwkpL8oYNmaUYdYuU8GzhggGUmwzBiAAB0WouEwqRAqi2UvI5FydqSRpHOvWzsbdF9NKCkYrlDC4jlxqwmaMqZIsa8slo25RG5O08UZYxkMLDMrAAqbHPNgJZsNiY5I544zwZBkh5SUlZbYnPGXUgyMBySsDzhluNbVeqUFVk4OnASKGSVF7klyu0kj5Zy8bJnZ2LNYhtknm5l3aVrMRNinWOXELjI45+WkMUPKGWJwsSYaMiMZkUqsrsObnazG2++0oNZHyncsfLk8rycfKmPfyllz5ezNf3Vs6i45rRscxXdtAXI1HRUqgUpSgUpSgUpSgUpSgUpSgUpSgUpSghRQOhsJAVzOxDKS13dmADZhZVzAWsdBX2iy7F3Q2vnshGYdGXbOX33v2VKpQROTlsLyJfNc+DbVOoDPo3rfyoUls1nS+a6+DbReojPqe3T2VLpQRXWXbs6C9sl0Jy9ebbGa/Za3bQrLdttLZRl2Do3STt6js09tSqUEXLLptpbJY7B5/lc/m+rv7aIsuzd0Ngc9kIzdWXbOXo33v2VKpQRFSbZu6GxOeyMMw6Au2cp7TegSa3jEvmvfk25nk2z871t3ZUulBEdJbNaRASdm8bGy9RGcZj26eyvZFl28roL2yXQnL15tsZr9lrdtSqUEUpLrZ0tlsNg6N5R29V9XT20Cy6baWyWOwdX8obei+rv7alUoIsay7GZ0Nr57IRm6su2cvRvvfsrxEm2byRkg7Vo2Fx1LtnKd+uvsqXSgiZJfLS+a9+Ta2TybZ+d627soyS7VnQEnZujGw6QdsZj2i3sqXSgiusu3Z0F7ZLoTl6822M3Tutbtr0pLrtpzLDYOj+Vz9V9Xf21JpQRQst1u6Wy2bYOrdY29Bu019tI1l2MzobXz2QjN1Zds5bdt79lSqUEQJNZbul77Xg2F16ht7J366+yhSaxs6XzXB5NuZ5Ns/O9bd2VLpQQ3jlOccoouRlITVVvqDdiGJGl7C3UamUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQKUpQf/9k=", "alt", "", 2, "width", "400px", "height", "280px"], [1, "col-md-6"], [1, "bi", "bi-caret-right", "btn", "btn-info", "btn", "btn-block", "btatras", 3, "click"], [1, "btn", "btn-block", "btn-dark", 3, "click"]], template: function Page2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Page2Component_Template_div_click_2_listener() { return ctx.OnInicio(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Aministrador de Entrada y Salida");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Page2Component_Template_button_click_8_listener() { return ctx.OnBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Todo computador necesita llevar a cabo intercambio de informaci\u00F3n con personas u otros computadores mediante unos dispositivos que denominamos de manera gen\u00E9rica dispositivos perif\u00E9ricos. Para hacer una operaci\u00F3n de E/ S entre el computador y un perif\u00E9rico, es necesario conectar estos dispositivos al computador y gestionar de manera efectiva la transferencia de datos. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Dada la gran variedad de perif\u00E9ricos, es necesario dedicar un hardware y un software espec\u00EDficos para cada uno. Por este motivo se ha intentado normalizar la interconexi\u00F3n de los perif\u00E9ricos y el computador mediante lo que se denomina m\u00F3dulos de E/S o controladores de E/S ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Para llevar a cabo la operaci\u00F3n de E/S, hemos de conectar el perif\u00E9rico al\ncomputador. Para hacerlo, es necesario que el computador disponga de unos\ndispositivos intermedios por donde ha de pasar toda la informaci\u00F3n que inter\u0002cambia el computador con el perif\u00E9rico y que nos permite hacer una gesti\u00F3n\ny un control correctos de la transferencia. Estos dispositivos los llamamos de\nmanera gen\u00E9rica m\u00F3dulo de E/S. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " As\u00ED pues, para hacer una operaci\u00F3n de E/S, el m\u00F3dulo de E/S nos debe permitir\nestablecer, por una parte, mecanismos de control para determinar el inicio y\nel final de la operaci\u00F3n de E/S, la cantidad de informaci\u00F3n que hay que transmitir, la detecci\u00F3n de errores, etc., y, por otra parte, mecanismos para hacer\nla transferencia de datos considerando aspectos como la manera de dirigir\nel perif\u00E9rico, la conversi\u00F3n serie/paralela de la informaci\u00F3n, la conversi\u00F3n de\nc\u00F3digos, la sincronizaci\u00F3n, etc ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Page2Component_Template_button_click_28_listener() { return ctx.OnNext(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Page2Component_Template_button_click_30_listener() { return ctx.OnInicio(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".atras[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.btatras[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n}\r\n.header[_ngcontent-%COMP%]{\r\n    margin-top: 50px;\r\n}\r\n.body[_ngcontent-%COMP%]{\r\n    margin-top: 40px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoicGFnZTIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdHJhc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmJ0YXRyYXN7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmhlYWRlcntcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuLmJvZHl7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ "oiWa":
/*!*****************************************************!*\
  !*** ./src/app/pages/page2/page2-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: Page2RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page2RoutingModule", function() { return Page2RoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _page2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page2.component */ "XgbT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{ path: '', component: _page2_component__WEBPACK_IMPORTED_MODULE_1__["Page2Component"] }];
class Page2RoutingModule {
}
Page2RoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: Page2RoutingModule });
Page2RoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function Page2RoutingModule_Factory(t) { return new (t || Page2RoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](Page2RoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-page2-page2-module.js.map