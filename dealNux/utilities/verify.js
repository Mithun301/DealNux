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




}
module.exports = new Verify();