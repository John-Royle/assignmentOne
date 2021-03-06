(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");
/* harmony import */ var _createuser_createuser_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./createuser/createuser.component */ "./src/app/createuser/createuser.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _selectroom_selectroom_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./selectroom/selectroom.component */ "./src/app/selectroom/selectroom.component.ts");
/* harmony import */ var _controlpanel_controlpanel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controlpanel/controlpanel.component */ "./src/app/controlpanel/controlpanel.component.ts");
/* harmony import */ var _channelhistory_channelhistory_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./channelhistory/channelhistory.component */ "./src/app/channelhistory/channelhistory.component.ts");
/* harmony import */ var _second_second_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./second/second.component */ "./src/app/second/second.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: "selectroom", component: _selectroom_selectroom_component__WEBPACK_IMPORTED_MODULE_7__["SelectroomComponent"] },
    { path: "chat", component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_3__["ChatComponent"] },
    { path: "createuser", component: _createuser_createuser_component__WEBPACK_IMPORTED_MODULE_5__["CreateuserComponent"] },
    { path: "404", component: _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_4__["NotfoundComponent"] },
    { path: "logout", component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_6__["LogoutComponent"] },
    { path: "controlpanel", component: _controlpanel_controlpanel_component__WEBPACK_IMPORTED_MODULE_8__["ControlpanelComponent"] },
    { path: "second", component: _second_second_component__WEBPACK_IMPORTED_MODULE_10__["SecondComponent"] },
    { path: "channelhistory", component: _channelhistory_channelhistory_component__WEBPACK_IMPORTED_MODULE_9__["ChannelhistoryComponent"] },
    { path: "**", redirectTo: '404' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n  <app-menu></app-menu>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my-app2';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _createuser_createuser_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./createuser/createuser.component */ "./src/app/createuser/createuser.component.ts");
/* harmony import */ var _second_second_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./second/second.component */ "./src/app/second/second.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./notfound/notfound.component */ "./src/app/notfound/notfound.component.ts");
/* harmony import */ var _socketservice_socketservice_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./socketservice/socketservice.component */ "./src/app/socketservice/socketservice.component.ts");
/* harmony import */ var _selectroom_selectroom_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./selectroom/selectroom.component */ "./src/app/selectroom/selectroom.component.ts");
/* harmony import */ var _controlpanel_controlpanel_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./controlpanel/controlpanel.component */ "./src/app/controlpanel/controlpanel.component.ts");
/* harmony import */ var _channelhistory_channelhistory_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./channelhistory/channelhistory.component */ "./src/app/channelhistory/channelhistory.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"],
                _createuser_createuser_component__WEBPACK_IMPORTED_MODULE_7__["CreateuserComponent"],
                _second_second_component__WEBPACK_IMPORTED_MODULE_8__["SecondComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_9__["LogoutComponent"],
                _chat_chat_component__WEBPACK_IMPORTED_MODULE_10__["ChatComponent"],
                _notfound_notfound_component__WEBPACK_IMPORTED_MODULE_11__["NotfoundComponent"],
                _socketservice_socketservice_component__WEBPACK_IMPORTED_MODULE_12__["SocketserviceComponent"],
                _selectroom_selectroom_component__WEBPACK_IMPORTED_MODULE_13__["SelectroomComponent"],
                _controlpanel_controlpanel_component__WEBPACK_IMPORTED_MODULE_14__["ControlpanelComponent"],
                _channelhistory_channelhistory_component__WEBPACK_IMPORTED_MODULE_15__["ChannelhistoryComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/channelhistory/channelhistory.component.css":
/*!*************************************************************!*\
  !*** ./src/app/channelhistory/channelhistory.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/channelhistory/channelhistory.component.html":
/*!**************************************************************!*\
  !*** ./src/app/channelhistory/channelhistory.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  Message History Empty\n</p>\n"

/***/ }),

/***/ "./src/app/channelhistory/channelhistory.component.ts":
/*!************************************************************!*\
  !*** ./src/app/channelhistory/channelhistory.component.ts ***!
  \************************************************************/
/*! exports provided: ChannelhistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelhistoryComponent", function() { return ChannelhistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChannelhistoryComponent = /** @class */ (function () {
    function ChannelhistoryComponent() {
    }
    ChannelhistoryComponent.prototype.ngOnInit = function () {
    };
    ChannelhistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-channelhistory',
            template: __webpack_require__(/*! ./channelhistory.component.html */ "./src/app/channelhistory/channelhistory.component.html"),
            styles: [__webpack_require__(/*! ./channelhistory.component.css */ "./src/app/channelhistory/channelhistory.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChannelhistoryComponent);
    return ChannelhistoryComponent;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.css":
/*!*****************************************!*\
  !*** ./src/app/chat/chat.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/chat/chat.component.html":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Welcome {{username}}</h2>\n<button *ngIf=\"username\" (click)=\"logout()\" class =\"logout\">Logout</button>\n\n<input [(ngModel)]=\"message\" />\n<button (click)=\"sendMessage()\">Send</button>\n<div class=\"messages\">\n  <div *ngFor=\"let message of messages\" class=\"message\">\n    {{message.text}}\n  </div>\n<div>\n"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_socket_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/socket/socket.service */ "./src/app/services/socket/socket.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatComponent = /** @class */ (function () {
    function ChatComponent(sockServ, router) {
        this.sockServ = sockServ;
        this.router = router;
        this.messages = [];
        console.log(router);
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!sessionStorage.getItem('username')) {
            console.log('Not validated');
            sessionStorage.clear();
            alert('Not a valid user');
            this.router.navigateByUrl('login');
        }
        else {
            this.username = sessionStorage.getItem('username');
            console.log("Session started for: " + this.username);
            this.connection = this.sockServ.getMessages().subscribe(function (message) {
                _this.messages.push(message);
                //this.message.push('');
                _this.message = '';
            });
        }
    };
    ChatComponent.prototype.sendMessage = function () {
        this.sockServ.sendMessage(this.message + '(' + this.username + ')');
    };
    ChatComponent.prototype.ngOnDestroy = function () {
        if (this.connection) {
            this.connection.unsubscribe();
        }
    };
    ChatComponent.prototype.logout = function () {
        sessionStorage.clear();
        console.log('Session Cleared');
        this.router.navigateByUrl('login');
    };
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/chat/chat.component.css")]
        }),
        __metadata("design:paramtypes", [_services_socket_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/controlpanel/controlpanel.component.css":
/*!*********************************************************!*\
  !*** ./src/app/controlpanel/controlpanel.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/controlpanel/controlpanel.component.html":
/*!**********************************************************!*\
  !*** ./src/app/controlpanel/controlpanel.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<div *ngIf=\"userID > 1\">Super User\n  <div>Create a new user\n  <form (submit)=\"createNewUser($event)\">\n    <input type=\"email\" placeholder=\"Username\" [(ngModel)]=\"usernameNewUser\" name=\"username\" id=\"usernameNewUser\">\n    <input type=\"password\" placeholder=\"Password\" [(ngModel)]=\"passwordNewUser\" name=\"password\" id=\"passwordNewUser\">\n    <input type=\"text\" placeholder=\"Group\" [(ngModel)]=\"groupNewUser\" name=\"group\" id=\"groupNewUser\">\n    <button type=\"submit\">Submit</button>\n  </form>\n  </div>\n\n  <div>Remove a user\n    <form (submit)=\"removeUser($event)\">\n      <input type=\"email\" placeholder=\"Username\" [(ngModel)]=\"usernameRemoveuser\" name=\"username\" id=\"usernameRemoveuser\">\n      <button type=\"submit\">Submit</button>\n    </form>\n  </div>\n\n\n\n  <div>Make a user a super admin\n    <form (submit)=\"makeUserSuperAdmin($event)\">\n      <input type=\"email\" placeholder=\"Username\" [(ngModel)]=\"usernameMakeSuperUser\" name=\"username\" id=\"usernameMakeSuperUser\">\n      <button type=\"submit\">Submit</button>\n    </form>\n  </div>\n</div>\n\n<div *ngIf=\"userID > 0\">Admin User\n  <div>Create a new group\n    <form (submit)=\"createGroup($event)\">\n      <input type=\"group\" placeholder=\"Group\" [(ngModel)]=\"groupnameNewGroup\" name=\"groupname\" id=\"groupnameNewGroup\">\n      <button type=\"submit\">Submit</button>\n    </form>\n  </div>\n\n\n  <div>Add an exisiting user to group\n    <form (submit)=\"addUserToGroup($event)\">\n      <input type=\"email\" placeholder=\"Username\" [(ngModel)]=\"usernameAddUserToGroup\" name=\"username\" id=\"usernameAddUserToGroup\">\n      <input type=\"group\" placeholder=\"Group\" [(ngModel)]=\"groupAddUserToGroup\" name=\"groupname\" id=\"groupAddUserToGroup\">\n      <button type=\"submit\">Submit</button>\n    </form>\n  </div>\n\n\n  <div>Add channel to group\n    <form (submit)=\"addchannelToGroup($event)\">\n      <input type=\"channel\" placeholder=\"Channel\" [(ngModel)]=\"channelnameAddChannel\" name=\"channelname\" id=\"channelnameAddChannel\">\n      <input type=\"group\" placeholder=\"Group\" [(ngModel)]=\"groupChannelToGroup\" name=\"groupname\" id=\"groupChannelToGroup\">\n      <button type=\"submit\">Submit</button>\n    </form>\n  </div>\n\n\n  <div>Delete a group\n    <form (submit)=\"deleteGroup($event)\">\n      <input type=\"group\" placeholder=\"Group\" [(ngModel)]=\"groupnameDeleteGroup\" name=\"groupname\" id=\"groupnameDeleteGroup\">\n      <button type=\"submit\">Submit</button>\n    </form>\n  </div>\n\n  <div>Delete a user from a group\n    <form (submit)=\"deleteUserFromGroupFunc($event)\">\n      <input type=\"email\" placeholder=\"Username\" [(ngModel)]=\"usernameDeleteUserFromGroup\" name=\"username\" id=\"usernameDeleteUserFromGroup\">\n      <input type=\"group\" placeholder=\"Group\" [(ngModel)]=\"deleteAUserFromGroup\" name=\"groupname\" id=\"deleteAUserFromGroup\">\n      <button type=\"submit\">Submit</button>\n    </form>\n  </div>\n\n  <div>Delete a user from a channel\n    <form (submit)=\"deleteUserFromChannel($event)\">\n      <input type=\"email\" placeholder=\"Username\" [(ngModel)]=\"deleteUserFromChannelName\" name=\"username\" id=\"deleteUserFromChannelName\">\n      <input type=\"channel\" placeholder=\"Channel\" [(ngModel)]=\"userDeleteFromChannelChannelName\" name=\"channelname\" id=\"userDeleteFromChannelChannelName\">\n      <button type=\"submit\">Submit</button>\n    </form>\n  </div>\n\n  <div>Add a user to a channel\n    <form (submit)=\"addNewUserToChannel($event)\">\n      <input type=\"email\" placeholder=\"Username\" [(ngModel)]=\"addUserToChannel\" name=\"username\" id=\"addUserToChannel\">\n      <input type=\"channel\" placeholder=\"Channel\" [(ngModel)]=\"channelAddUserChannel\" name=\"channelname\" id=\"channelAddUserChannel\">\n      <button type=\"submit\">Submit</button>\n    </form>\n  </div>\n\n  <div>Make a user a group admin of a group\n    <form (submit)=\"makeUserGroupAdminOfGroup($event)\">\n      <input type=\"email\" placeholder=\"Username\" [(ngModel)]=\"usernameMakeGroupAdminOfGroup\" name=\"username\" id=\"usernameMakeGroupAdminOfGroup\">\n      <input type=\"group\" placeholder=\"Group\" [(ngModel)]=\"groupNameAdminOfGroup\" name=\"groupname\" id=\"groupNameAdminOfGroup\">\n      <button type=\"submit\">Submit</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/controlpanel/controlpanel.component.ts":
/*!********************************************************!*\
  !*** ./src/app/controlpanel/controlpanel.component.ts ***!
  \********************************************************/
/*! exports provided: ControlpanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlpanelComponent", function() { return ControlpanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ControlpanelComponent = /** @class */ (function () {
    function ControlpanelComponent(router) {
        this.router = router;
        this.usernameNewUser = '';
        this.passwordNewUser = '';
        this.groupNewUser = '';
        this.usernameRemoveuser = '';
        this.groupnameNewGroup = '';
        this.groupnameDeleteGroup = '';
        this.usernameMakeGroupAdminOfGroup = '';
        this.groupNameAdminOfGroup = '';
        this.usernameMakeSuperUser = '';
        this.groupAddUserToGroup = '';
        this.usernameAddUserToGroup = '';
        this.usernameDeleteUserFromGroup = '';
        this.deleteAUserFromGroup = '';
        this.channelnameAddChannel = '';
        this.groupChannelToGroup = '';
        this.addUserToChannel = '';
        this.channelAddUserChannel = '';
        this.deleteUserFromChannelName = '';
        this.userDeleteFromChannelChannelName = '';
        this.userID = 0;
        router.navigateByUrl('/controlpanel');
    }
    ControlpanelComponent.prototype.ngOnInit = function () {
        // Show appropriate html based on user type.
        if (sessionStorage.getItem("id") !== null)
            this.userID = parseInt(sessionStorage.getItem("id"));
        console.log(this.userID);
    };
    /* Adds a user to the Person object.
     * Parameter: usernameNewUser: The user that I wish to add to the Person object.
     * Parameter: passwordNewUser: The password that I wish to add to the Person object.
     * Parameter: groupNewUser: The group that I wish to add to the Person object.
    */
    ControlpanelComponent.prototype.createNewUser = function (event) {
        console.log(event);
        var username = this.usernameNewUser;
        var password = this.passwordNewUser;
        var group = this.groupNewUser;
        var url = '/server/register?username=' + username + '&password=' + password + '&group=' + group;
        fetch(url)
            .then(function (response) {
            console.log("response fetch");
            return response.json();
        }).then(function (myJson) {
            console.log("Json fetch");
            console.log(JSON.stringify(myJson));
        });
    };
    /* Deletes a user in the Person object.
     * Parameter: usernameRemoveuser: The user that I wish to add to the Person object.
    */
    ControlpanelComponent.prototype.removeUser = function ($event) {
        var username = this.usernameRemoveuser;
        var url = '/server/delete?username=' + username;
        fetch(url)
            .then(function (response) {
            return response.json();
        }).then(function (myJson) {
            console.log(JSON.stringify(myJson));
        });
    };
    /* Adds a group to the GroupClass object.
     * Parameter: groupnameNewGroup: The group name that I wish to add to the GroupClass object.
    */
    ControlpanelComponent.prototype.createGroup = function (event) {
        var group = this.groupnameNewGroup;
        var url = '/server/registerGroup?group=' + group;
        fetch(url)
            .then(function (response) {
            console.log("response fetch");
            return response.json();
        }).then(function (myJson) {
            console.log("Json fetch");
            console.log(JSON.stringify(myJson));
        });
    };
    /* Deletes a group in the GroupClass object.
     * Parameter: groupnameDeleteGroup: The group name that I wish to delete from the GroupClass object.
    */
    ControlpanelComponent.prototype.deleteGroup = function (event) {
        var group = this.groupnameDeleteGroup;
        console.log(group);
        var url = '/server/deleteGroup?group=' + group;
        fetch(url)
            .then(function (response) {
            return response.json();
        }).then(function (myJson) {
            console.log(JSON.stringify(myJson));
        });
    };
    /* Changes the status of a user to Group Admin of a specified group.
     * Parameter: usernameMakeGroupAdminOfGroup: The user that I wish to make Group Admin of a specified group.
     * Parameter: groupNameAdminOfGroup: The group name that I wish the specified user to be Group Admin of.
    */
    ControlpanelComponent.prototype.makeUserGroupAdminOfGroup = function (event) {
        var username = this.usernameMakeGroupAdminOfGroup;
        var group = this.groupNameAdminOfGroup;
        var url = '/server/groupAdminOfGroup?username=' + username + '&group=' + group;
        fetch(url)
            .then(function (response) {
            console.log("response fetch");
            return response.json();
        }).then(function (myJson) {
            console.log("Json fetch");
            console.log(JSON.stringify(myJson));
        });
    };
    /* Changes the status of a user to Super Admin.
     * Parameter: usernameMakeSuperUser: The user that I wish to make Super Admin.
    */
    ControlpanelComponent.prototype.makeUserSuperAdmin = function (event) {
        var username = this.usernameMakeSuperUser;
        var url = '/server/makeSuper?username=' + username;
        fetch(url)
            .then(function (response) {
            console.log("response fetch");
            return response.json();
        }).then(function (myJson) {
            console.log("Json fetch");
            console.log(JSON.stringify(myJson));
        });
    };
    /* Adds a specified user to a group.
     * Parameter: usernameAddUserToGroup: The specified user that I wish to add to the group.
     * Parameter: groupnameNewGroup: The group name that I wish to add the specified user to.
    */
    ControlpanelComponent.prototype.addUserToGroup = function (event) {
        var username = this.usernameAddUserToGroup;
        var group = this.groupAddUserToGroup;
        var url = '/server/addUserToGroup?username=' + username + '&group=' + group;
        fetch(url)
            .then(function (response) {
            console.log("response fetch");
            return response.json();
        }).then(function (myJson) {
            console.log("Json fetch");
            console.log(JSON.stringify(myJson));
        });
    };
    /* Deletes a specified user from a group.
     * Parameter: usernameDeleteUserFromGroup: The specified user that I wish to delete from the group.
     * Parameter: deleteAUserFromGroup: The group name that I wish to delete the specified user from.
    */
    ControlpanelComponent.prototype.deleteUserFromGroupFunc = function (event) {
        var username = this.usernameDeleteUserFromGroup;
        var group = this.deleteAUserFromGroup;
        var url = '/server/deleteUserFromGroup?username=' + username + '&group=' + group;
        fetch(url)
            .then(function (response) {
            console.log("response fetch");
            return response.json();
        }).then(function (myJson) {
            console.log("Json fetch");
            console.log(JSON.stringify(myJson));
        });
    };
    /* Adds a channel to a specified group.
     * Parameter: channelnameAddChannel: The specified channel that I wish to add to the group.
     * Parameter: groupChannelToGroup: The group name that I wish to add the specified channel to.
    */
    ControlpanelComponent.prototype.addchannelToGroup = function ($event) {
        // Text field input
        var channelname = this.channelnameAddChannel;
        var group = this.groupChannelToGroup;
        var url = '/server/createChannel?channelname=' + channelname + '&group=' + group;
        fetch(url)
            .then(function (response) {
            console.log("response fetch");
            return response.json();
        }).then(function (myJson) {
            console.log("Json fetch");
            console.log(JSON.stringify(myJson));
        });
    };
    /* Adds a specified user to a channel.
     * Parameter: addUserToChannel: The specified user that I wish to add to the channel.
     * Parameter: channelAddUserChannel: The channel name that I wish to add the specified user to.
    */
    ControlpanelComponent.prototype.addNewUserToChannel = function ($event) {
        var channeluser = this.addUserToChannel;
        var channelname = this.channelAddUserChannel;
        var url = '/server/addUserToChannel?username=' + channeluser + '&channelname=' + channelname;
        fetch(url)
            .then(function (response) {
            console.log("response fetch");
            return response.json();
        }).then(function (myJson) {
            console.log("Json fetch");
            console.log(JSON.stringify(myJson));
        });
    };
    /* Deletes a specified user from a channel.
     * Parameter: deleteUserFromChannelName: The specified user that I wish to delete from the channel.
     * Parameter: userDeleteFromChannelChannelName: The channel name that I wish to delete the specified user from.
    */
    ControlpanelComponent.prototype.deleteUserFromChannel = function (event) {
        var channeluser = this.deleteUserFromChannelName;
        var channelname = this.userDeleteFromChannelChannelName;
        var url = '/server/deleteUserFromChannel?username=' + channeluser + '&channelname=' + channelname;
        fetch(url)
            .then(function (response) {
            console.log("response fetch");
            return response.json();
        }).then(function (myJson) {
            console.log("Json fetch");
            console.log(JSON.stringify(myJson));
        });
    };
    ControlpanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-controlpanel',
            template: __webpack_require__(/*! ./controlpanel.component.html */ "./src/app/controlpanel/controlpanel.component.html"),
            styles: [__webpack_require__(/*! ./controlpanel.component.css */ "./src/app/controlpanel/controlpanel.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ControlpanelComponent);
    return ControlpanelComponent;
}());



/***/ }),

/***/ "./src/app/createuser/createuser.component.css":
/*!*****************************************************!*\
  !*** ./src/app/createuser/createuser.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/createuser/createuser.component.html":
/*!******************************************************!*\
  !*** ./src/app/createuser/createuser.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  createuser works!\n</p>\n"

/***/ }),

/***/ "./src/app/createuser/createuser.component.ts":
/*!****************************************************!*\
  !*** ./src/app/createuser/createuser.component.ts ***!
  \****************************************************/
/*! exports provided: CreateuserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateuserComponent", function() { return CreateuserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateuserComponent = /** @class */ (function () {
    function CreateuserComponent(router, form) {
        this.router = router;
        this.form = form;
        router.navigateByUrl('/createuser');
    }
    CreateuserComponent.prototype.ngOnInit = function () {
    };
    CreateuserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-createuser',
            template: __webpack_require__(/*! ./createuser.component.html */ "./src/app/createuser/createuser.component.html"),
            styles: [__webpack_require__(/*! ./createuser.component.css */ "./src/app/createuser/createuser.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]])
    ], CreateuserComponent);
    return CreateuserComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"loginUser($event)\">\n  <input type=\"email\" placeholder=\"Username\" [(ngModel)]=\"username\" name=\"username\" id=\"username\">\n  <input type=\"password\" placeholder=\"password\" [(ngModel)]=\"password\" name=\"password\" id=\"password\">\n  <button type=\"submit\">Submit</button>\n</form>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var count = 1;
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, form) {
        this.router = router;
        this.form = form;
        this.username = '';
        this.password = '';
        console.log("Consgructor");
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    // Check if server has these login details.
    LoginComponent.prototype.fetchingData = function (url, finish, cannot) {
        fetch(url)
            .then(function (response) { return response.json(); })
            .then(function (myJson) {
            console.log(myJson);
            if (myJson.success === true) {
                finish(myJson);
            }
            else {
                cannot();
            }
        });
    };
    /* Alert to inform user that the username or password is incorrect.
    */
    LoginComponent.prototype.falseLogin = function () {
        alert("Username or Password were incorrect");
    };
    /* Sets the local storage variables with username and user type, specified by ID.
     * Parameter: data: The correct username and ID type returned from the server.
    */
    LoginComponent.prototype.finishLogin = function (data) {
        if (typeof (Storage) !== "undefined") {
            sessionStorage.setItem("username", data.username);
            sessionStorage.setItem("id", data.type);
            console.log(sessionStorage.getItem("id"));
            console.log(sessionStorage.getItem("username"));
            this.router.navigateByUrl('/controlpanel');
        }
        else {
            alert("Do not sessions, cannot log in");
        }
    };
    /* Attempts to log the user in.
     * Parameter: event: The event generated by Angular is not used.
    */
    LoginComponent.prototype.loginUser = function (event) {
        event.preventDefault();
        // Access to all our variables within this class because it's asyncronous.
        var falseBind = this.falseLogin.bind(this);
        var finishBind = this.finishLogin.bind(this);
        // route url to server
        var url = '/server/login?username=' + this.username + '&password=' + this.password;
        this.fetchingData(url, finishBind, falseBind);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/logout/logout.component.html":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  logout works!\n</p>\n"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(router) {
        this.router = router;
        sessionStorage.clear();
        console.log(sessionStorage.getItem("lastname"));
        router.navigateByUrl('/');
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <ul>\n    <li> <a routerLink=\"login\">Login</a> </li>\n    <li> <a routerLink=\"logout\">Logout</a> </li>\n    <li> <a routerLink=\"selectroom\">Select Room</a> </li>\n    <li> <a routerLink=\"controlpanel\">Control Panel</a> </li>\n    <li> <a routerLink=\"channelhistory\">Channel History</a> </li>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/notfound/notfound.component.css":
/*!*************************************************!*\
  !*** ./src/app/notfound/notfound.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/notfound/notfound.component.html":
/*!**************************************************!*\
  !*** ./src/app/notfound/notfound.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  notfound works!\n</p>\n"

/***/ }),

/***/ "./src/app/notfound/notfound.component.ts":
/*!************************************************!*\
  !*** ./src/app/notfound/notfound.component.ts ***!
  \************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotfoundComponent = /** @class */ (function () {
    function NotfoundComponent() {
    }
    NotfoundComponent.prototype.ngOnInit = function () {
    };
    NotfoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__(/*! ./notfound.component.html */ "./src/app/notfound/notfound.component.html"),
            styles: [__webpack_require__(/*! ./notfound.component.css */ "./src/app/notfound/notfound.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotfoundComponent);
    return NotfoundComponent;
}());



/***/ }),

/***/ "./src/app/second/second.component.css":
/*!*********************************************!*\
  !*** ./src/app/second/second.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/second/second.component.html":
/*!**********************************************!*\
  !*** ./src/app/second/second.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>\n  this is my second page\n</h1>\n\n<p>\nid: {{id}} <br/>\nusername: {{username}} <br/>\nbirthDate: {{birthDate}} <br/>\nage: {{age}} <br/>\n</p>\n"

/***/ }),

/***/ "./src/app/second/second.component.ts":
/*!********************************************!*\
  !*** ./src/app/second/second.component.ts ***!
  \********************************************/
/*! exports provided: SecondComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondComponent", function() { return SecondComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SecondComponent = /** @class */ (function () {
    function SecondComponent() {
        this.id = "";
        this.username = "";
        this.birthDate = "";
        this.age = "";
        this.id = sessionStorage.getItem("id");
        this.username = sessionStorage.getItem("username");
        this.birthDate = sessionStorage.getItem("birthDate");
        this.age = sessionStorage.getItem("age");
    }
    SecondComponent.prototype.ngOnInit = function () {
        console.log(sessionStorage.getItem("id"));
        console.log(sessionStorage.getItem("username"));
        console.log(sessionStorage.getItem("birthDate"));
        console.log(sessionStorage.getItem("age"));
    };
    SecondComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-second',
            template: __webpack_require__(/*! ./second.component.html */ "./src/app/second/second.component.html"),
            styles: [__webpack_require__(/*! ./second.component.css */ "./src/app/second/second.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SecondComponent);
    return SecondComponent;
}());



/***/ }),

/***/ "./src/app/selectroom/selectroom.component.css":
/*!*****************************************************!*\
  !*** ./src/app/selectroom/selectroom.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/selectroom/selectroom.component.html":
/*!******************************************************!*\
  !*** ./src/app/selectroom/selectroom.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li *ngFor=\"let room of rooms\" >\n  {{room}}\n</li>\n"

/***/ }),

/***/ "./src/app/selectroom/selectroom.component.ts":
/*!****************************************************!*\
  !*** ./src/app/selectroom/selectroom.component.ts ***!
  \****************************************************/
/*! exports provided: SelectroomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectroomComponent", function() { return SelectroomComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SelectroomComponent = /** @class */ (function () {
    function SelectroomComponent(router) {
        this.router = router;
        this.rooms = [];
    }
    /* Runs an asyncronous fetch to get the list of channels and groups that a specified user can see.
     * Parameter: url: The url to go to.
     * Parameter: set: The function pointer.
    */
    SelectroomComponent.prototype.fetchChannels = function (url, set) {
        fetch(url)
            .then(function (response) { return response.json(); })
            .then(function (myJson) {
            var data = [];
            for (var i = 0; i < myJson.success.groups.length; i++) {
                var group = { "Name": myJson.success.groups[i].GroupName, "Channels": [] };
                for (var j = 0; j < myJson.success.groups[i].channels.length; j++) {
                    group.Channels.push(myJson.success.groups[i].channels[j]);
                }
                data.push(group);
            }
            set(data);
        });
    };
    /* Sets the groups and channels and displays the data.
     * Parameter: data: Takes in data from the fetch.
    */
    SelectroomComponent.prototype.setChannels = function (data) {
        for (var i = 0; i < data.length; i++) {
            this.rooms.push("Group:");
            this.rooms.push(data[i].Name);
            if (data[i].Channels.length > 0) {
                this.rooms.push("Channels:");
                for (var j = 0; j < data[i].Channels.length; j++) {
                    this.rooms.push(data[i].Channels[j]);
                }
            }
        }
    };
    SelectroomComponent.prototype.ngOnInit = function () {
        var set = this.setChannels.bind(this);
        var channeluser = sessionStorage.getItem("username");
        if (channeluser === null) {
            channeluser = "sam";
        }
        var url = '/server/getGroupsAndChannels?username=' + channeluser;
        this.fetchChannels(url, set);
    };
    SelectroomComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-selectroom',
            template: __webpack_require__(/*! ./selectroom.component.html */ "./src/app/selectroom/selectroom.component.html"),
            styles: [__webpack_require__(/*! ./selectroom.component.css */ "./src/app/selectroom/selectroom.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SelectroomComponent);
    return SelectroomComponent;
}());



/***/ }),

/***/ "./src/app/services/socket/socket.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/socket/socket.service.ts ***!
  \***************************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SocketService = /** @class */ (function () {
    function SocketService() {
        this.url = "http://localhost:3000/";
    }
    SocketService.prototype.sendMessage = function (message) {
        this.socket.emit('add-message', message);
    };
    SocketService.prototype.getMessages = function () {
        var _this = this;
        var obmessages = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            _this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(_this.url);
            _this.socket.on('message', function (data) {
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return obmessages;
    };
    SocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/app/socketservice/socketservice.component.css":
/*!***********************************************************!*\
  !*** ./src/app/socketservice/socketservice.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/socketservice/socketservice.component.html":
/*!************************************************************!*\
  !*** ./src/app/socketservice/socketservice.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  socketservice works!\n</p>\n"

/***/ }),

/***/ "./src/app/socketservice/socketservice.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/socketservice/socketservice.component.ts ***!
  \**********************************************************/
/*! exports provided: SocketserviceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketserviceComponent", function() { return SocketserviceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SocketserviceComponent = /** @class */ (function () {
    function SocketserviceComponent() {
    }
    SocketserviceComponent.prototype.ngOnInit = function () {
    };
    SocketserviceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-socketservice',
            template: __webpack_require__(/*! ./socketservice.component.html */ "./src/app/socketservice/socketservice.component.html"),
            styles: [__webpack_require__(/*! ./socketservice.component.css */ "./src/app/socketservice/socketservice.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SocketserviceComponent);
    return SocketserviceComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/johnroyle/Desktop/Semester 9/Software Frameworks/Labs/Assignement Two/Angular Labs/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map