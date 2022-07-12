const price = 1200;
const name = 'Macbook Pro';

const product = {
    price: 1200,
    name: 'Macbook',
    get totalPrice() {
        return this.price * 1.16;
    },
    set price(newPrice) {
        this.price = newPrice;
    },
    *makeAndOffer(offer) {
        let newprice =  this.totalPrice;

        while(true) {
            yield newprice -= offer;
        }
    }
}