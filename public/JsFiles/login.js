function num() {
    console.log("JJJJJ")
    let number = document.getElementById("mobile").value;
    if (number.length === 10) {
        alertbox.textContent = null;
        for (i = 0; i < 4; i++) {
            str += random();
        }
        alertbox.textContent = "your otp is:" + str;
        let input = document.createElement("input");
        input.placeholder = "Enter your otp"
        input.id = "otp";
        let box = document.getElementById("phn");
        box.innerHTML = null;
        box.append(input);
        let div = document.getElementById("continue");
        div.innerHTML = null;
        let btn = document.createElement("button");
        div.appendChild(btn);
        btn.setAttribute("class", "continue");
        btn.textContent = "Confirm";
        btn.onclick = () => {
            let a = document.getElementById("otp").value;
            ch(a, str);
        }
    } else {
        alertbox.textContent = "Phone number must be at least 10 characters";

    }
}
