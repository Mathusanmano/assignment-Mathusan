import { Selector, t } from 'testcafe';

export default class LoginPage {
    public usernameField: Selector;
    public passwordField: Selector;
    public loginButton: Selector;

    constructor() {
        this.usernameField = Selector('#user-name');
        this.passwordField = Selector('#password');
        this.loginButton = Selector('#login-button');
    }

    public async login(username: string, password: string) {
        await t
            .typeText(this.usernameField, username)
            .typeText(this.passwordField, password)
            .click(this.loginButton);
    }
}
