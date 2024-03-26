
describe('Add New Product API', () => {
    it('Successfully adds a new product', () => {
        const newProduct = {
            title: 'BMW Pencil',
            description: 'High-quality graphite pencil with BMW branding.',
            price: 2.99,
            category: 'stationery',
            brand: 'BMW'
        };

        cy.request({
            method: 'POST',
            url: 'https://dummyjson.com/products/add',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProduct),
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('id').and.to.be.a('number');
            expect(response.body.title).to.eq(newProduct.title);
            expect(response.body.description).to.eq(newProduct.description);
            expect(response.body.price).to.eq(newProduct.price);
            expect(response.body.category).to.eq(newProduct.category);
            expect(response.body.brand).to.eq(newProduct.brand);
        });
    });
});
