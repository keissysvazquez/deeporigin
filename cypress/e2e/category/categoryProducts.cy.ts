describe('Products by Category API', () => {
    const category = 'smartphones';

    it(`Retrieves products for the '${category}' category`, () => {
        cy.request(`https://dummyjson.com/products/category/${category}`)
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('products').and.to.be.an('array');
                expect(response.body.products.length).to.be.equal(response.body.total);
                response.body.products.forEach((product: any) => {
                    expect(product).to.have.property('category').and.to.equal(category);
                });
                expect(response.body).to.include.all.keys('total', 'skip', 'limit');
                expect(response.body.total).to.be.a('number');
                expect(response.body.skip).to.be.a('number');
                expect(response.body.limit).to.be.a('number');
            });
    });
});
