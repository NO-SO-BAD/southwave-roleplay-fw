"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var usePageManager_1 = require("./core/hooks/usePageManager");
var login_page_1 = require("./pages/login.page");
var App = function () {
    var pageVisibility = (0, usePageManager_1.default)();
    return <div className="app">{pageVisibility.login && <login_page_1.default />}</div>;
};
exports.default = App;
