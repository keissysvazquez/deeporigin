// deleteProduct.spec.ts

describe('Delete Product API', () => {
    it('Successfully deletes a product', () => {
        const productId = 1; // Example product ID to delete

        cy.request({
            method: 'DELETE',
            url: `https://dummyjson.com/products/${productId}`,
            // No need for a body in a DELETE request
        }).then((response) => {
            // Verify the HTTP status code
            expect(response.status).to.eq(200);

            // Verify the response body contains the deleted product data
            expect(response.body).to.have.property('id').and.to.eq(productId);
            expect(response.body).to.have.property('isDeleted').and.to.be.true;
            expect(response.body).to.have.property('deletedOn').and.to.match(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/); // ISO8601 format

            // Verify other fields to ensure they match the product before deletion
            expect(response.body.title).to.exist;
            expect(response.body.description).to.exist;
            expect(response.body.price).to.exist;
            expect(response.body.brand).to.exist;
            expect(response.body.category).to.exist;
            // Add more assertions as necessary for your test scenario
        });
    });
});
