'use strict';
(function () {
    const product = {};

    Object.defineProperty(product, 'name', {
        get() {
            return this._name;
        },
        set(value) {
            if (typeof value === 'string' && value.trim() !== '') {
                this._name = value;
            } else {
                throw new Error('empty string!');
            }
        },
        enumerable: true,
        configurable: true,
    });

    Object.defineProperty(product, 'price', {
        get() {
            return this._price;
        },
        set(value) {
            if (typeof value === 'number' && value > 0) {
                this._price = value;
            } else {
                throw new Error('price must be greater than 0!');
            }
        },
        enumerable: true,
        configurable: true,
    });

    Object.defineProperty(product, 'quantity', {
        get() {
            return this._quantity;
        },
        set(value) {
            if (
                typeof value === 'number' &&
                Number.isInteger(value) &&
                value >= 0
            ) {
                this._quantity = value;
            } else {
                throw new Error('non-negative integer!');
            }
        },
        enumerable: true,
        configurable: true,
    });

    Object.defineProperty(product, 'totalValue', {
        get() {
            return this.price * this.quantity;
        },
        enumerable: true,
        configurable: true,
    });

    product.name = 'Lipton';
    product.price = 35;
    product.quantity = 34;

    console.log('Product Name:', product.name);
    console.log('Product Price:', product.price);
    console.log('Product Quantity:', product.quantity);
    console.log('Total Value:', product.totalValue);
})();
