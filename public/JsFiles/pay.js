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
    div.innerHTML =null
    data.forEach((a)=>{
      
        let div1 = document.createElement("div");
        let div2= document.createElement("div");
        let div3 = document.createElement("div");
        let brand = document.createElement("p");
        let img = document.createElement("img");
        let name = document.createElement("p");
        let price = document.createElement("p");
        let quantity = document.createElement("p");
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
        price.textContent="Price: "+a.price;
        quantity.textContent="Quantity: "+a.quantity;
        img.src=a.img[0];
        plus.textContent="+";
        minus.textContent="-";


        plus.onclick=function() {
            quantI(a);
        }

        minus.onclick=function() {
            quantD(a);
        }

        div4.append(plus,minus);

        div2.append(img);
        div1.append(brand,name,price,quantity,div4);
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

// async function quantD(pr){
//     console.log("pr:",pr);
//     let a=pr.quantity-2;
//     data={
//         name:pr.name,
//         brand:pr.brand,
//         quantity:a,
//         price:pr.price,
//         mainPrice:pr.mainPrice,
//         discount:pr.discount,
//         size:pr.size,
//         categary:pr.category,
//         img:pr.img,
//     }
//     try {
//         let response = await fetch("http://localhost:2345/mycarts", {
//             method: 'POST',
//             body: JSON.stringify(data),
//             headers: {'Content-Type': 'application/json'}
//         });
//         let d = await response.json();
//         console.log("d:", d);
//         getCartItems()
//     } catch (err) {
//         console.log("e:", err);
//     }  
// }




// async function quantD(pr){
//     let id=pr._id;
//     console.log(id);
    
//     try {
//         let response = await fetch(`http://localhost:2345/mycarts/${id}`, {
//             method: 'PUT',
//             body: JSON.stringify(id),
//             headers: {'Content-Type': 'application/json'}
//         });
//         let d = await response.json();
//         console.log("d:", d);
//         getCartItems()
//     } catch (err) {
//         console.log("e:", err);
//     }  
// }
