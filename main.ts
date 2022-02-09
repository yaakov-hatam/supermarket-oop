import { CashRegister } from "./CashRegister";
import { Consumer } from "./Consumer";
import { Product } from "./Product";
import { StaffMember } from "./StaffMember";

const products: Product[] = [
   new Product(100, 'jagermeister', 'Mast-Jägermeister AG', 'asdr42fac3qfersfv43'),
   new Product(7, 'Bread', 'Angel', 'sdfsdf34frv34')
]

const cashiers: StaffMember[] = [
   new StaffMember('Cashier'),
   new StaffMember('Cashier')
]

const stands: CashRegister[] = [
   new CashRegister(1),
   new CashRegister(2)
];

stands[0].startNewPurchase(); // ERROR!!! No worker assigned

stands[0].changeWorker(cashiers[0]);
stands[1].changeWorker(cashiers[1]);

stands[0].startNewPurchase();

stands[0].addProduct(products[1]);
stands[0].addProduct(products[1]);
stands[0].addProduct(products[0]);


const consumer = new Consumer(true);
const bill = stands[0].endPurchase(consumer);
console.log(bill) //114

