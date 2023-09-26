import { products } from './products.mjs';
export { products } from './products.mjs';

import { categories } from './categories.mjs';
export { categories } from './categories.mjs';

export { upfrontRebates, taxCredits } from './discounts.mjs';

export const productsWithCategories = products.map(product => {
    const productCategories = product.categories.map(categoryId => {
        return categories.find(category => category.id === categoryId);
    });
    return { ...product, categories: productCategories };
});
