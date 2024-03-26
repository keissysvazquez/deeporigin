describe('Products API', () => {
    it('Get all products returns the correct structure and data', () => {
        cy.request('https://dummyjson.com/products').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('products').and.to.be.an('array');
            expect(response.body.products.length).to.be.greaterThan(0);
            expect(response.body).to.have.property('total').and.to.be.a('number');
            response.body.products.forEach((product: any) => {
                expect(product).to.include.keys('id', 'title', 'price', 'category');
                expect(product.id).to.be.a('number');
                expect(product.title).to.be.a('string');
                expect(product.price).to.be.a('number');
                expect(product.category).to.be.a('string');
            });
            expect(response.body).to.have.property('skip').and.to.be.a('number');
            expect(response.body).to.have.property('limit').and.to.be.a('number');
        });
    });
});
