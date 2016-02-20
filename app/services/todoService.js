var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
require('rxjs/RX');
var config_1 = require('./config');
var ToDoService = (function () {
    function ToDoService(http) {
        this.http = http;
        this.token = localStorage.getItem('token');
    }
    ToDoService.prototype.addItem = function (_item) {
        var url = config_1.KINVEY_BASE_URL + 'appdata/kid1781/todo-collection';
        var params = JSON.stringify(_item);
        return this.http.post(url, params, {
            headers: new http_1.Headers({
                'Content-Type': 'application/json',
                'Authorization': 'Kinvey ' + this.token,
                'X-Kinvey-API-Version': 3
            })
        })
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    ToDoService.prototype.getAllItems = function () {
        return this.http.get(config_1.KINVEY_BASE_URL + 'appdata/kid1781/todo-collection', {
            headers: new http_1.Headers({
                'Content-Type': 'application/json',
                'Authorization': 'Kinvey ' + this.token,
                'X-Kinvey-API-Version': 3
            })
        })
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    ToDoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ToDoService);
    return ToDoService;
})();
exports.ToDoService = ToDoService;