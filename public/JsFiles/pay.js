async function getCartItems() {

    try {
        let res = await fetch('http://localhost:2345/mycarts');
        let data = await res.json();
        if (data.length <= 0) {
            return
        }
        console.log(data);
        if (data.length === 0) {
            window.location.reload();
        }
        showProduct(data)

    } catch (e) {
        console.log('e:', e)
    }

}

getCartItems()

function showProduct(data) {
   let total_price=0
    let div = document.getElementById("items");
    div.innerHTML = null
    data.forEach((a) => {

        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        let div3 = document.createElement("div");
        let brand = document.createElement("p");
        let img = document.createElement("img");
        let name = document.createElement("p");
        let price = document.createElement("p");
        let quantity = document.createElement("div");
        let div4 = document.createElement("div");
        let plus = document.createElement("div");
        let minus = document.createElement("div");

        plus.id = "plus";
        minus.id = "minus";
        div4.id = "div4";
        div3.id = "div3";
        div2.id = "div2";
        div1.id = "div1";

        brand.textContent = "Brand" + ": " + a.brand;
        name.textContent = "Name: " + a.name;
        price.textContent = "Price: " + "₹" + a.price;
        quantity.textContent = a.quantity;
        img.src = a.img[0];
        plus.textContent = "+";
        minus.textContent = "-";


        plus.onclick = function () {
            quantI(a);
        }

        minus.onclick = function () {
            quantD(a);
        }

        div4.append(plus, quantity, minus);

        div2.append(img);
        div1.append(brand, name, price, div4);
        div3.append(div2, div1);
        div.append(div3);


        total_price+= a.price * a.quantity;
       

    })



    discount_price = Math.floor(total_price * 0.15);
    pay_price = total_price - discount_price
    showPrice(total_price, discount_price, pay_price)
}

async function quantI(pr) {
    // console.log("pr:",pr);
    data = {
        name: pr.name,
        brand: pr.brand,
        quantity: 1,
        price: pr.price,
        mainPrice: pr.mainPrice,
        discount: pr.discount,
        size: pr.size,
        categary: pr.category,
        img: pr.img,
    }
    try {
        let response = await fetch("http://localhost:2345/mycarts", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        let d = await response.json();
        console.log("d:", d);
        getCartItems()
    } catch (err) {
        console.log("e:", err);
    }
}


async function quantD(pr) {
    let id = pr._id;
    let a = pr.quantity - 1;

    if (a <= 0) {

        let response = await fetch(`http://localhost:2345/mycarts/${id}`, {

            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },

        });
        window.location="/payment";

        // showProduct(data)

    }

    let data = {
        quantity: a
    }

    console.log(id);

    try {
        let response = await fetch(`http://localhost:2345/mycarts/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        let d = await response.json();
        console.log("d:", d);
        getCartItems()
    } catch (err) {
        console.log("e:", err);
    }
}


function showPrice(t, d, p) {
    console.log('t,d,p:', t, d, p)
    let total_price = document.getElementById("total_price").innerText = "₹" + t;
    let discount_price = document.getElementById("dis_price").innerText = "₹" + d;
    let pay_price = document.getElementById("pay_price").innerText = "₹" + p;
}

let coupon_btn = document.getElementById("Coupon-btn")
coupon_btn.addEventListener("click", Coupon)
   flag=true;
function Coupon() {

    let code = document.getElementById("coupan_code").value
    if (code === "masai30" &&flag===true) {
        let new_pay_price = document.getElementById("pay_price").innerText
        new_pay_price = pay_price - pay_price * 0.3
        new_pay_price.toFixed(2);
        document.getElementById("pay_price").innerText = new_pay_price;
        flag=false;
    } else if(flag===false){
        document.getElementById("error").innerText = "This Coupan is Expired now"
        setTimeout(() => {
            document.getElementById("error").innerText = " "
        }, 2000)
    } else {
        document.getElementById("error").innerText = "! INVALID COUPAN"
        setTimeout(() => {
            document.getElementById("error").innerText = " "
        }, 2000)
    }
    document.getElementById("coupan_code").value="";
}