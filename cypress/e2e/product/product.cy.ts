describe('Product API', () => {
    it('Get a single product returns the correct product details', () => {
        const productId = 1;
        cy.request(`https://dummyjson.com/products/${productId}`).then((response) => {
            expect(response.status).to.eq(200);
            const { id, title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images } = response.body;
            expect(id).to.eq(productId);
            expect(title).to.be.a('string');
            expect(description).to.be.a('string');
            expect(brand).to.be.a('string');
            expect(category).to.be.a('string');
            expect(thumbnail).to.be.a('string');
            expect(images).to.be.an('array').and.to.satisfy((imgs: string[]) => imgs.every(img => typeof img === 'string'));
            expect(price).to.be.a('number').and.to.be.greaterThan(0);
            expect(discountPercentage).to.be.a('number').and.to.be.within(0, 100);
            expect(rating).to.be.a('number').and.to.be.within(0, 5);
            expect(stock).to.be.a('number').and.to.be.greaterThan(0);
        });
    });
});