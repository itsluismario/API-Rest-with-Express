const { faker } = require('@faker-js/faker');

class CategoriesService {

  constructor() {
    this.categories = [];
    this.generate();
  }

  generate() {
    // Generate a random number of categories (between 3 and 5)
    const numCategories = faker.number.int({ min: 3, max: 5 });

    // Generate categories and products
    for (let i = 0; i < numCategories; i++) {
      const category = {
        categoryId: faker.string.uuid(),
        name: faker.commerce.department(),
        products: [],
      };

      // Generate a random number of products for each category (between 1 and 5)
      const numProducts = faker.number.int({ min: 1, max: 5 });

      // Generate products and add them to the category
      for (let j = 0; j < numProducts; j++) {
        const product = {
          productId: faker.string.uuid(),
          name: faker.commerce.productName(),
          price: faker.commerce.price(),
        };
        category.products.push(product);
      }

      // Add the category to the list
      this.categories.push(category);
    }
  }

  create() {

  }

  find() {
    return this.categories;
  }

  findOne(categoryId, productId) {
    // Find the category based on categoryId
    const category = this.categories.find(cat => cat.categoryId === categoryId);

    if (category) {
      // Find the product based on productId within the found category
      const product = category.products.find(prod => prod.productId === productId);

      if (product) {
        return product
      } else {
        return "Product not found."
      }
    } else {
      return "Category not found."
    }
  }

  update() {

  }

  delete() {

  }
}

module.exports = CategoriesService;
