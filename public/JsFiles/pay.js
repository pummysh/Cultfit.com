
async function getCartItems() {

      try {
          let res = await fetch('http://localhost:2345/mycarts');
          let data = await res.json();
          if(data.length <= 0) {return}
          console.log(data);
          if(data.length === 0) {window.location.reload();}
          showProduct(data)
  
      } catch (e) {
          console.log('e:', e)
      }
  
  }
  
  getCartItems()

function showProduct(data) {
    console.log(data);
    let div= document.getElementById("items");
    div.innerHTML =null
    data.forEach((a)=>{
      
        let div1 = document.createElement("div");
        let div2= document.createElement("div");
        let div3 = document.createElement("div");
        let brand = document.createElement("p");
        let img = document.createElement("img");
        let name = document.createElement("p");
        let price = document.createElement("p");
        let quantity = document.createElement("div");
        let div4=document.createElement("div");
        let plus= document.createElement("div");
        let minus= document.createElement("div");

        plus.id="plus";
        minus.id="minus";
        div4.id="div4";
        div3.id="div3";
        div2.id="div2";
        div1.id="div1";

        brand.textContent="Brand"+": "+a.brand;
        name.textContent="Name: "+a.name;
        price.textContent="Price: "+ "₹"+a.price;
        quantity.textContent=a.quantity;
        img.src=a.img[0];
        plus.textContent="+";
        minus.textContent="-";


        plus.onclick=function() {
            quantI(a);
        }

        minus.onclick=function() {
            quantD(a);
        }

        div4.append(plus,quantity,minus);

        div2.append(img);
        div1.append(brand,name,price,div4);
        div3.append(div2, div1);
        div.append(div3);
    })
}

async function quantI(pr){
    console.log("pr:",pr);
    data={
        name:pr.name,
        brand:pr.brand,
        quantity:1,
        price:pr.price,
        mainPrice:pr.mainPrice,
        discount:pr.discount,
        size:pr.size,
        categary:pr.category,
        img:pr.img,
    }
    try {
        let response = await fetch("http://localhost:2345/mycarts", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}
        });
        let d = await response.json();
        console.log("d:", d);
        getCartItems()
    } catch (err) {
        console.log("e:", err);
    }  
}


async function quantD(pr){
    let id=pr._id;
    let a=pr.quantity-1;

    if(a<=0){

        let response = await fetch(`http://localhost:2345/mycarts/${id}`, {

            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },

        });
        window.location.reload();

    

    }

    let data={
        quantity:a
    }
    
    console.log(id);
    
    try {
        let response = await fetch(`http://localhost:2345/mycarts/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}
        });
        let d = await response.json();
        console.log("d:", d);
        getCartItems()
    } catch (err) {
        console.log("e:", err);
    }  
}


axios.post('/order').then((info) => {
    console.log(info);

// require("dotenv").config();

var options = {
"key": "rzp_test_MTzmvOejm2fa4j", // Enter the Key ID generated from the Dashboard
"name": "Cult Fit",
"description": "Transaction",
"image": "https://static.cure.fit/assets/images/cult-brand.svg",
"order_id": info.data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
"callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
"theme": {
"color": "#3399cc"
}
};

var rzp1 = new Razorpay(options);
document.getElementById('rzp-button1').onclick = function(e){
rzp1.open();
e.preventDefault();
}

})