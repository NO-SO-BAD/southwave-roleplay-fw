"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var connection_database_1 = require("./core/database/connection.database");
var events_names_1 = require("@repo/events-names");
(0, connection_database_1.authenticate)();
mp.events.add("playerReady", function (player) {
    player.call(events_names_1.CLIENT_EVENTS.LOGIN.DISPLAY, [true]);
});
// This is a simple example of how to handle events, it is not a functional login system. You will have to continue from this starting point.
mp.events.add(events_names_1.SERVER_EVENTS.LOGIN.RECEIVE_DATA, function (player, username, password) {
    console.log("Received login data from ".concat(player.name, ": ").concat(username, ", ").concat(password));
    if (username === "test" && password === "test") {
        player.outputChatBox("Login successful");
        player.call(events_names_1.CLIENT_EVENTS.LOGIN.DISPLAY, [false]);
        player.call(events_names_1.CEF_EVENTS.LOGIN.RESPONSE, ["Login successful"]);
    }
    else {
        player.outputChatBox("Login failed");
        player.call(events_names_1.CEF_EVENTS.LOGIN.RESPONSE, ["Login failed"]);
    }
});
