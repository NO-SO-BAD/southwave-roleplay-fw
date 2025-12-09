"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var rage_rpc_1 = require("rage-rpc");
var events_names_1 = require("@repo/events-names");
var usePageManager = function () {
    var _a = (0, react_1.useState)({
        login: false,
    }), pageVisibility = _a[0], setPageVisibility = _a[1];
    (0, react_1.useEffect)(function () {
        var handlePageManager = function (data) {
            if (data.page) {
                setPageVisibility(function (prevState) {
                    var _a;
                    return (__assign(__assign({}, prevState), (_a = {}, _a[data.page] = data.value, _a)));
                });
            }
        };
        rage_rpc_1.default.register(events_names_1.CEF_EVENTS.UI.PAGE_MANAGER, handlePageManager);
        return function () {
            rage_rpc_1.default.unregister(events_names_1.CEF_EVENTS.UI.PAGE_MANAGER);
        };
    }, []);
    return pageVisibility;
};
exports.default = usePageManager;
