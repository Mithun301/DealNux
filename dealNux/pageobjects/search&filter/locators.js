class searchFilterLocators{
  get searchInput(){
        return $("//input[@placeholder='Search products...']");
    }
     get allProducts(){
        return $("//a[normalize-space()='Products']");
    }
    get viewAllProducts(){
        return $("//button[normalize-space()='View All Products']");
    }
    get homePage(){
        return $("//a[text()='Home']");
    }
    get minPrice(){
        return $("//input[@placeholder='Min']");
    }
    get maxPrice(){
        return $("//input[@placeholder='Max']");
    }
    get filterText(){
        return $("//span[text()='Filters']");
    }
    get addToCart(){
        return $("//button[normalize-space()='Add to Cart']");
    }
    get cartIcon(){
        return $("//a[@href='/my-cart']");
    }
    get placeOrder(){
        return $("//button[normalize-space()='Place Order']");
    }
    get firstName(){
        return $("//input[@id='checkout-addr-firstName']");
    }
    get lastName(){
        return $("//input[@id='checkout-addr-lastName']");
    }
    get address(){
        return $("//input[@id='checkout-addr-line1']");
    }
    get city(){
        return $("//input[@id='checkout-addr-city']");
    }
    get state(){
        return $("//input[@id='checkout-addr-state']");
    }
    get zip(){
        return $("//input[@id='checkout-addr-zip']");
    }
    get country(){
        return $("//input[@id='checkout-addr-country']");
    }
    get payment(){
        return $("//button[normalize-space()='Continue to Payment']");
    }
    get priceFilter(){
        return $("//button[descendant::span[text()='Best Deal']]");
    }
    get lowestPriceFilter(){
        return $("//span[text()='Lowest Price']");
    }
    get highestPriceFilter(){
        return $("//span[text()='Highest Price']");
    }
    get categoryFilter1(){
        return $("//span[text()='Electronics']");
    }
    get categoryFilter2(){
        return $("//span[text()='Automotive']");
    }
    get subCategoryFilter1(){
        return $("//label[text()='Audio & Headphones']");
    }
    get subCategoryFilter2(){
        return $("//label[text()='Automotive Tools & Equipment']");
    }
    get selectcategory1(){
        return $("//span[text()='Wedding & Events']");
    }


    

}
module.exports = new searchFilterLocators();