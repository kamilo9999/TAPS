import HomePage from '../page-objects/homePage'
import OrderPage from '../page-objects/orderPage';
import CartPage from '../page-objects/cartPage';

describe('template spec', () => {
  const homePage = new HomePage();
  const cartPage = new CartPage();
  const orderPage = new OrderPage();

  beforeEach(function () {
    cy.fixture('users').as('userData')
    cy.fixture('products').as('productsData')
  })

  it('should order a product from the shop', function () {
    homePage.visitPage()
    homePage.addProductToCart(this.productsData.HoodieWithZipper.Locator)
    homePage.clickGoToCartFromProductButton()
    cartPage.checkThatAddedProductIsInCart(this.productsData.HoodieWithZipper.Name)
    cartPage.clickGoToPaymentButton()
    orderPage.fillAllRequiredFields()
    orderPage.clickFinishOrderButton()
    orderPage.checkOrderFinished()
  })
})