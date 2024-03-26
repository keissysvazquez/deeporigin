// updateProduct.spec.ts

describe('Update Product API', () => {
    it('Successfully updates a product', () => {
        const productId = 1; // Example product ID to update
        const updatedData = {
            title: 'iPhone Galaxy +1', // New title to update the product with
            // Include other fields here if needed for the update
        };

        cy.request({
            method: 'PUT', // or 'PATCH' depending on the API specification
            url: `https://dummyjson.com/products/${productId}`,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        }).then((response) => {
            // Verify the HTTP status code
            expect(response.status).to.eq(200);

            // Verify the response body contains the updated product data
            expect(response.body).to.have.property('id').and.to.eq(productId);
            expect(response.body.title).to.eq(updatedData.title);
            // Verify other fields to ensure they remain unchanged or are updated as expected

            // Additional checks for unchanged data (if the update should not affect these)
            expect(response.body.description).to.exist;
            expect(response.body.price).to.exist;
            expect(response.body.brand).to.exist;
            expect(response.body.category).to.exist;
            // Add more assertions as necessary for your test scenario
        });
    });
});
