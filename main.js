//create a new Vue Instance: new Vue({OPTIONS})

var app = new Vue({
  el: "#app",
  data: {
    product: "Socks",
	description: "A pair of warm fuzzy socks",
	image: "./common/socks-green.jpg",
	link: "https://www.kodiri.com",
	inventory: 0,
	onSale: true,
	details: ['80% cotton', '20% polyester', 'Gender-neutral'],
	cart: 0,
    variants: [
      {
        variantId: 2234,
		variantColor: 'green',
		variantImage: './common/socks-green.jpg'
      },
      {
        variantId: 2235,
		variantColor: 'blue',
		variantImage: './common/socks-blue.jpg'
      }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL']
  },
  methods: {
	addToCart() {
		this.cart += 1;
	},
	updateProduct(variantImage) {
		this.image = variantImage;
	},
	removeFromCart() {
		this.cart -= 1;
	}
  }
});
