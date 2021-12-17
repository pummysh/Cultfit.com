async function getCartItems() {

      try {
          let res = await fetch('http://localhost:2345/mycarts');
          let data = await res.json();
          console.log(data);
          showproduct(data)
  
      } catch (e) {
          console.log('e:', e)
      }
  
  }
  
  getCartItems()

function showProduct(data) {
    console.log(data);
    let div= document.getElementById("items");
    data.forEach((a)=>{
        div.append(a);
    })
}