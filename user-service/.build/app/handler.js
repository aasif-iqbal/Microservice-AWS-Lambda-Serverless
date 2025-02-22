"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = exports.Signup = void 0;
const Signup = (event) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('----------------start----------------');
    console.log(event);
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Go Serverless v2.0! Your function executed successfully!',
            input: event,
        }),
    };
});
exports.Signup = Signup;
const Login = (event) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = JSON.parse(event.body);
        console.log(event);
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Login Successfully',
                input: event,
            }),
        };
    }
    catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Internal Server Error", error }),
        };
    }
});
exports.Login = Login;
//# sourceMappingURL=handler.js.map