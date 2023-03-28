import { Selector, t } from 'testcafe';

export default class ProductsPage {
    public productPrice: Selector;
    public addToCartButtons: Selector[];
    public cartButton: Selector;

    constructor() {
        this.productPrice = Selector('.inventory_item_price').withText('$49.99');
        this.addToCartButtons = [
            Selector('.btn_primary').nth(0),
            Selector('.btn_primary').nth(1),
        ];
        this.cartButton = Selector('.shopping_cart_link');
    }

    public async addProductsToCart() {
        await t
            .click(this.addToCartButtons[0])
            .click(this.addToCartButtons[1])
            .click(this.cartButton);
    }

    public async verifyCartItems(count: number) {
        const cartItems = await Selector('.cart_item');

        await t.expect(cartItems.count).eql(count);
    }
}
