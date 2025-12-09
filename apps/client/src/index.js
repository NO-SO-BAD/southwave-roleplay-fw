"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rage_rpc_1 = require("rage-rpc");
var events_names_1 = require("@repo/events-names");
var browser = mp.browsers.new("package://cef/index.html");
mp.events.add(events_names_1.CLIENT_EVENTS.LOGIN.DISPLAY, function (value) {
    rage_rpc_1.default
        .callBrowser(browser, events_names_1.CEF_EVENTS.UI.PAGE_MANAGER, {
        page: "login",
        value: value,
    })
        .then(function () {
        mp.gui.chat.push("Login page shown");
    })
        .catch(function (err) {
        console.error("Failed to show login page:", err);
    });
});
rage_rpc_1.default.register(events_names_1.CLIENT_EVENTS.LOGIN.SEND_DATA, function (data) {
    mp.events.callRemote(events_names_1.SERVER_EVENTS.LOGIN.RECEIVE_DATA, data.username, data.password);
});
