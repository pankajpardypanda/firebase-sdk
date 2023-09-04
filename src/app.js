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
const { credential } = require('firebase-admin');
const { initializeApp } = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth');
class InitializeFbApp {
    constructor(serviceFile, appName = '') {
        this.serviceJson = serviceFile;
        if (appName) {
            this.app = initializeApp({
                credential: credential.cert(this.serviceJson),
            }, appName);
        }
        else {
            this.app = initializeApp({
                credential: credential.cert(this.serviceJson),
            });
        }
    }
    // verify id token
    verifyIdTokenUser(token) {
        return __awaiter(this, void 0, void 0, function* () {
            const tokenData = yield getAuth(this.app).verifyIdToken(token);
            return tokenData;
        });
    }
}
module.exports = {
    InitializeFbApp
};
