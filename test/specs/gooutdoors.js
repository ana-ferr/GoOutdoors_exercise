
describe('GoOutdoors product search', async () => {
    it('Open main URL and verify title', async () => {
        browser.url('https://www.gooutdoors.co.uk/');
        expect(browser).toHaveTitle('GO Outdoors: Tents & Camping | Outdoor Clothing | Walking Boots');
    });


    it('Search for item', async () => {
        const searchField = await browser.$('#productsearch');
        await browser.pause(1000)    
        await searchField.setValue('baby carrier');
        await browser.pause(1000)
        await browser.keys(['\uE007']);
        await browser.pause(1000)
    });

    it('Pick the third item of the results', async () => {
        const thirdItem = await browser.$('.product-item:nth-child(3)');
        await thirdItem.click();
        const productName = await browser.$('product-name');
        expect(productName).toHaveTextContaining('poco');
    });

    it('Check stock nearby', async () => {
        const searchStock = await browser.$('#textSearch');
        await searchStock.setValue('RG1');
        const searchButton = await browser.$('#check-stock');
        await searchButton.click();
    });

    it('Select item from store #2 in the list and view basket', async () => {
        const store = await browser.$('li:nth-of-type(2) .add-prod');
        await store.click();
        await browser.pause(5000)
        const bag = await browser.$('.cta.btn-buy-process-primary.ga-ip:nth-child(2)');
        await bag.click();
        await browser.pause(5000)
    });


    it('Remove item from basket', async () => {
        const removeItem = await browser.$('.basket_delete_product');
        await removeItem.click();
        await browser.pause(5000)
    });
    
    it('Return page and select item again change delivery to click and collect', async () => {
        await browser.back();
        const addItemToBasket = await browser.$('.add_to_basket_button');
        await addItemToBasket.click();
        await browser.forward();
        await browser.pause(5000)
        const clickCollect = await browser.$('.col');
        await clickCollect.click();
        await browser.pause(5000)
    });

});
