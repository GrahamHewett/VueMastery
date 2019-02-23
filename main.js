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
    variants: [
      {
        variantId: 2234,
        variantColor: 'green'    
      },
      {
        variantId: 2235,
        variantColor: 'blue'
      }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', 'XXXL']
  }
});
