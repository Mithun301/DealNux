class Utilities{
 async clearValue(){
        await browser.keys(['Control', 'a']);
        await browser.keys('Delete');
 }

    } module.exports = new Utilities();