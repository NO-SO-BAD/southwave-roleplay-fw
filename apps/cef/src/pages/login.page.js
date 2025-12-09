"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var rage_rpc_1 = require("rage-rpc");
var events_names_1 = require("@repo/events-names");
var LoginPage = function () {
    var _a = (0, react_1.useState)(""), username = _a[0], setUsername = _a[1];
    var _b = (0, react_1.useState)(""), password = _b[0], setPassword = _b[1];
    var _c = (0, react_1.useState)(""), message = _c[0], setMessage = _c[1];
    (0, react_1.useEffect)(function () {
        rage_rpc_1.default.register(events_names_1.CEF_EVENTS.LOGIN.RESPONSE, function (response) {
            setMessage(response);
        });
        return function () {
            rage_rpc_1.default.unregister(events_names_1.CEF_EVENTS.LOGIN.RESPONSE);
        };
    }, []);
    var handleLogin = function () {
        rage_rpc_1.default
            .callClient(events_names_1.CLIENT_EVENTS.LOGIN.SEND_DATA, { username: username, password: password })
            .catch(function (err) {
            setMessage("Login failed");
            console.error(err);
        });
    };
    return (<div className="login-page">
      <h1>Login</h1>
      <input type="text" value={username} onChange={function (e) { return setUsername(e.target.value); }} placeholder="Username"/>
      <input type="password" value={password} onChange={function (e) { return setPassword(e.target.value); }} placeholder="Password"/>
      <button onClick={handleLogin}>Login</button>
      <p>{message}</p>
    </div>);
};
exports.default = LoginPage;
