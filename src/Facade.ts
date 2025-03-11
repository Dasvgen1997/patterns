interface IAuthService {
    login(login: string): boolean;
    readonly isAuth: boolean;
}

console.log('Test')

class AuthService implements IAuthService {
    private isAuthenticated: boolean = false;

    login(login: string): boolean {
        this.isAuthenticated = true;
        console.log(`Авторизация успешна: ${login}`);
        return this.isAuthenticated;
    }

    get isAuth(): boolean {
        return this.isAuthenticated;
    }
}

interface IProductItem {
    name: string;
    price: number;
    id: number;
    description(): string;
}

class ProductItem implements IProductItem {
    name: string;
    price: number;
    id: number;

    constructor(name: string, price: number, id: number) {
        this.name = name;
        this.price = price;
        this.id = id;
    }

    description(): string {
        return `${this.name}: ${this.price}$`;
    }
}

const prodcut1 = new ProductItem('MacBook', 1000, 1);
const prodcut2 = new ProductItem('Coffee', 2, 2);

class Cart {
    private products: IProductItem[] = [];

    addProduct(product: ProductItem): void {
        this.products.push(product);
    }

    deleteProduct(id: number): void {
        this.products = this.products.filter(product => product.id !== id);
    }
}

class Payment {
    private balance: number = 0;
    calculateFullPrice(products: IProductItem[]): number {
        let sum = products.reduce((sum, product) => sum + product.price, 0);
        return sum;
    }
    topupBalance(sum: number): number {
        this.balance += sum;
        return this.balance;
    }
}

// С фасадом
// const facade = new OrderFacade(auth, cart, payment, delivery);
// facade.placeOrder(["ноутбук", "мышь"], "г. Москва, ул. Пушкина, 10");
