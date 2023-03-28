import LoginPage from './pages/LoginPage';
import ProductsPage from './pages/ProductsPage';
import CheckoutPage from './pages/CheckoutPage';

fixture('SauceDemo Tests')
    .page('https://www.saucedemo.com');

test('Login and add products to cart', async t => {
    const loginPage = new LoginPage();
    const productsPage = new ProductsPage();
    const checkoutPage = new CheckoutPage();

    // Login to the system
    await loginPage.login('performance_glitch)
}