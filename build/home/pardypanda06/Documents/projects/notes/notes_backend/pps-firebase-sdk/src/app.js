"use strict";
const { credential } = require('firebase-admin');
const { initializeApp } = require('firebase-admin/app');
class InitializeFbApp {
    constructor(serviceFile) {
        this.serviceJson = serviceFile;
    }
    startFirebase() {
        console.log({ ser: this.serviceJson });
        console.log('working fine');
        // You can now use this.serviceJson in other methods or properties of the class.
    }
}
module.exports = {
    InitializeFbApp
};
