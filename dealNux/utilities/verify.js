const priceData = require("../testData/price");


class Verify{

async rndmProductClick() {
        const products = await $$("//button[normalize-space()='View Details']");
        const randomIndex = Math.floor(Math.random() * products.length);
        await products[randomIndex].click();
    }

    async verifyPriceRange() {
       
        const prices = await $$("//span[starts-with(text(), '$') and contains(@class, 'font-bold')]");
        for (const priceElement of prices) {
        let priceText = await priceElement.getText();
        let price = parseFloat(
            priceText.replace('$', '').replace(',', '').trim()
        );
        expect(price).toBeGreaterThanOrEqual(parseFloat(priceData.price1.minPrice));
        expect(price).toBeLessThanOrEqual(parseFloat(priceData.price1.maxPrice));

       }
    }
   async verifyPriceLowToHigh() {

    let prices = [];

    while (true) {
        const priceElements = await $$("//span[starts-with(text(), '$') and contains(@class, 'font-bold')]");

        for (const price of priceElements) {
            const text = await price.getText();
            const value = parseFloat(text.replace(/[^0-9.]/g, ''));

            prices.push(value);
        } 
        const nextBtn = await $('button[aria-label="Next page"]');

        if (!(await nextBtn.isEnabled())) {
            break;
        }
        const firstPrice = await priceElements[0].getText();

        await nextBtn.click();
        await browser.pause(4000); 
    }

    const expectedPrices = [...prices].sort((a, b) => a - b);

    expect(prices).toEqual(expectedPrices);
}
   async verifyPriceHighToLow() {

    let prices = [];

    while (true) {
        const priceElements = await $$("//span[starts-with(text(), '$') and contains(@class, 'font-bold')]");

        for (const price of priceElements) {
            const text = await price.getText();
            const value = parseFloat(text.replace(/[^0-9.]/g, ''));

            prices.push(value);
        } 
        const nextBtn = await $('button[aria-label="Next page"]');

        if (!(await nextBtn.isEnabled())) {
            break;
        }
        const firstPrice = await priceElements[0].getText();

        await nextBtn.click();
        await browser.pause(4000); 
    }

    const expectedPrices = [...prices].sort((a, b) => b - a);

    expect(prices).toEqual(expectedPrices);
}
// async verifyPriceLowToHigh(pageCount = 9) {
//     let prices = [];

//     for (let i = 1; i <= pageCount; i++) {

//         const priceElements = await $$("//span[starts-with(text(), '$') and contains(@class, 'font-bold')]");

//         for (const price of priceElements) {
//             const text = await price.getText();
//             prices.push(parseFloat(text.replace(/[^0-9.]/g, '')));
//         }

//         if (i === pageCount) break;

//         const nextBtn = await $('button[aria-label="Next page"]');
//         await nextBtn.click();
//         await browser.pause(3000); 
//     }

//     const expectedPrices = [...prices].sort((a, b) => a - b);
 
//     expect(prices).toEqual(expectedPrices);
// }

async verifyProductName() {
    const keyword = "headphones";
    const products = await $$("//h3[contains(@class,'text-[13.5px]') and contains(@class,'line-clamp-2')]");

// Verify products are displayed
    expect(products.length).toBeGreaterThan(0);

for (const product of products) {
    const productName = (await product.getText()).trim();

    // Verify product name is not empty
    expect(productName).not.toBe('');

    // Verify product name contains the keyword
    expect(productName.toLowerCase())
        .toContain(keyword.toLowerCase());
}
}
 async priceCompare(){
     const productPrices = await $$('//div[contains(@class,"space-y-3")]//span[contains(text(),"$")]');

    let prices = [];

    for (const price of productPrices) {
        const text = await price.getText();
        const value = parseFloat(text.replace(/[$,]/g, ''));
        prices.push(value);
    }

    console.log("Prices:", prices);
    const lowestPrice = Math.min(...prices);

    const bestDealPrice = parseFloat(
        (await $('//span[contains(@class, "text-[38px]") and contains(text(), "$")]').getText()) .replace(/[$,]/g, '') );

    console.log("Lowest Price:", lowestPrice);
    console.log("Best Deal Price:", bestDealPrice);

    expect(bestDealPrice).toEqual(lowestPrice);

 }


}
module.exports = new Verify();