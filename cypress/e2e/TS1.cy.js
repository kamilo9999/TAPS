import HomePage from '../page-objects/homePage'
import AccountPage from '../page-objects/myAccountPage';
import CartPage from '../page-objects/cartPage';
import { faker } from '@faker-js/faker';

describe('template spec', () => {
  const homePage = new HomePage();
  const accountPage = new AccountPage();
  const cartPage = new CartPage();

  beforeEach(function () {
    cy.fixture('users').as('userData')
    cy.fixture('products').as('productsData')
  })

  it('should pass login app', function ()  {
    homePage.visitPage()
    homePage.clickMyAccountHeaderButton();
    accountPage.fillUsernameFieldWithEmail(this.userData.email)
    accountPage.fillPasswordField(this.userData.password)
    accountPage.clickLoginButton()
    accountPage.checkVisibilityOfMyAccountNavigation()
  })

  it('should fail login app', function () {
    accountPage.visitPage()
    accountPage.fillUsernameFieldWithEmail(faker.internet.email())
    accountPage.fillPasswordField(faker.internet.password())
    accountPage.clickLoginButton()
    accountPage.checkVisibilityOfErrorAfterWrongLogin()
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