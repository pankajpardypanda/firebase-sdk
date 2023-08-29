const {  credential } = require('firebase-admin');
const { initializeApp } = require('firebase-admin/app');
const {getAuth} = require('firebase-admin/auth')

class InitializeFbApp {
    private app: any;
    private serviceJson: string;

    constructor(serviceFile: string, appName: string = '') {
        this.serviceJson = serviceFile;
        if (appName) {
            this.app = initializeApp({
                credential: credential.cert(this.serviceJson),
            }, appName);
        } else {
            this.app = initializeApp({
                credential: credential.cert(this.serviceJson),
            });
        }
    }

    // verify id token
    async verifyIdTokenUser(token: string) {
        const tokenData = await getAuth(this.app).verifyIdToken(token);
        return tokenData;
    }
}

module.exports = {
    InitializeFbApp
}