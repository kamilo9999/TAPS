const productName = ".product-name"
const removeItemButton = ".remove"
const emptyCartAlert = ".cart-empty.woocommerce-info"
const goToPaymentButton = ".wc-proceed-to-checkout"

class CartPage{

    checkThatAddedProductIsInCart(product) {
        cy.get(productName).contains(product).should("exist")
    }

    removeItemFromCart() {
        cy.get(removeItemButton).click()
    }

    checkThatCartIsEmpty() {
        cy.get(emptyCartAlert).should("exist")
    }

    clickGoToPaymentButton() {
        cy.get(goToPaymentButton).click()
    }
}

export default CartPage;