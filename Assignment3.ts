import { Selector, t } from 'testcafe';
import faker from 'faker';

export default class CheckoutPage {
    public firstNameField: Selector;
    public lastNameField: Selector;
    public zipCodeField: Selector;
    public continueButton: Selector;
    public finishButton: Selector;

    constructor() {
        this.firstNameField = Selector('#first-name');
        this.lastNameField = Selector('#last-name');
        this.zipCodeField = Selector('#postal-code');
        this.continueButton = Selector('#continue');
        this.finishButton = Selector('#finish');
    }

    public async fillOutUserInformation() {
        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const zipCode = faker.address.zipCode('#####');

        await t
            .typeText(this.firstNameField, firstName)
            .typeText(this.lastNameField, lastName)
            .typeText(this.zipCodeField, zipCode)
            .click(this.continueButton);
    }

    public async finishOrder() {
        await t.click(this.finishButton);
    }

    public async verifySuccessMessage() {
        const successMessage = await Selector('.complete-header').withText('THANK YOU FOR YOUR ORDER');

        await t.expect(successMessage.exists).ok();
    }
}
