async function getCartItems() {

      try {
          let res = await fetch('http://localhost:2345/mycarts');
          let data = await res.json();
          console.log(data);
          showProduct(data)
  
      } catch (e) {
          console.log('e:', e)
      }
  
  }
  
  getCartItems()

function showProduct(data) {
    console.log(data);
    let div= document.getElementById("items");
    data.forEach((a)=>{
        // div.append(a);
//         brand: "CULTSPORT"
// categary: "womens"
// discount: "40"
// img: (5) ['https://cdn-images.cure.fit/www-curefit-com/image/…l/dpr_2/cultgear-content/rx5Mtu8KuJmrogAUtQs26qHw', 'https://cdn-images.cure.fit/www-curefit-com/image/…l/dpr_2/cultgear-content/gwjS4NZTZqpZygCLqFnrtS9c', 'https://cdn-images.cure.fit/www-curefit-com/image/…l/dpr_2/cultgear-content/BMfySAsdzo7QgHaSbxjGMDcU', 'https://cdn-images.cure.fit/www-curefit-com/image/…l/dpr_2/cultgear-content/XAzuuvvmhbmgiiB9kwPQbSpW', 'https://cdn-images.cure.fit/www-curefit-com/image/…l/dpr_2/cultgear-content/4EcuaQ6zJzcwpXHmkhDEHJws']
// mainPrice: 2199
// name: "Stripe Detail Leggings"
// price: 1319
// quantity: 3
// size: ['XL']
// __v: 0
// _id: "61bc27a3f2f94ea5c8b48db1"

        let div1 = document.createElement("div");
        let div2= document.createElement("div");
        let div3 = document.createElement("div");
        let brand = document.createElement("p");
        let img = document.createElement("img");
        let name = document.createElement("p");
        let price = document.createElement("p");
        let quantity = document.createElement("p");

        div3.id="div3";
        div2.id="div2";
        div1.id="div1";

        brand.textContent="Brand"+": "+a.brand;
        name.textContent="Name: "+a.name;
        price.textContent="Price: "+a.price;
        quantity.textContent="Quantity: "+a.quantity;
        img.src=a.img[0];

        div2.append(img);
        div1.append(brand,name,price,quantity);
        div3.append(div2, div1);
        div.append(div3);
    })
}