describe('Limit and Skip Products API', () => {
    const limit = 10;
    const skip = 10;
    const selectedFields = 'title,price';

    it(`Retrieving products with limit=${limit} and skip=${skip}`, () => {
        cy.request(`https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=${selectedFields}`)
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('products').and.to.be.an('array');
                expect(response.body).to.include.all.keys('total', 'skip', 'limit');
                expect(response.body.products.length).to.be.lte(limit);
                expect(response.body.skip).to.eq(skip);
                expect(response.body.limit).to.eq(limit);

                response.body.products.forEach((product: any) => {
                    expect(product).to.include.keys('title', 'price');
                });
            });
    });

    it('Retrieving all products with limit=0', () => {
        cy.request('https://dummyjson.com/products?limit=0')
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.products.length).to.be.equal(response.body.total);
            });
    });
});
