interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Samsung A71',
    price: 700
}

const tablet: Product = {
    description: 'ipad mini 6',
    price: 250
}



interface TaxCalculationOptions{
    tax: number;
    products: Product[];
}

function TaxCalculation(options: TaxCalculationOptions): number[] {

    let total = 0;
    
    options.products.forEach(product => {
        total += product.price;
    });

    return [total, total * options.tax];
}


const shoppingCart = [phone, tablet]; //Esto como productos es lo que estoy llevando para comprar
const tax = 0.15; //Impuesto sobre la venta que nosotros vamos a querer cobrarle a estos productos

const result = TaxCalculation({
    products: shoppingCart,
    tax,
});

console.log(`Total: ${result[0]}`);
console.log(`Total with tax: ${result[1]}`);

export {};