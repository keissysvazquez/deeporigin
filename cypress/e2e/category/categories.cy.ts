describe('Products Categories API', () => {
    it('Gets all products categories successfully', () => {
        cy.request('https://dummyjson.com/products/categories')
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.be.an('array');
                expect(response.body.length).to.be.greaterThan(0);
                const expectedCategories = [
                    "smartphones",
                    "laptops",
                    "fragrances",
                ];
                expectedCategories.forEach(category => {
                    expect(response.body).to.include(category);
                });
            });
    });
});
