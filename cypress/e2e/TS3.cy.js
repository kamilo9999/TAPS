import HomePage from '../page-objects/homePage'
import CartPage from '../page-objects/cartPage';

describe('template spec', () => {
  const homePage = new HomePage();
  const cartPage = new CartPage();

  beforeEach(function () {
    cy.fixture('products').as('productsData')
  })

  it('should add product to the cart and delete', function () {
    homePage.visitPage()
    homePage.addProductToCart(this.productsData.HoodieWithZipper.Locator)
    homePage.clickGoToCartFromProductButton()
    cartPage.checkThatAddedProductIsInCart(this.productsData.HoodieWithZipper.Name)
    cartPage.removeItemFromCart()
    cartPage.checkThatCartIsEmpty()
  })
})