const cartButtons = document.querySelectorAll(".cart-button");
const cartIcon = document.querySelector(".cart");
const cartDetails = document.querySelector(".cart-details");

let cartCount = 0;
let cartItems = [];
let cartVisible = false;

cartButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const productBox = button.parentElement;
        const productName = productBox.querySelector("p").innerText;
        const productPrice = productBox.querySelectorAll("p")[1].innerText;
        const productImage = productBox.querySelector("img").src;

        if (!cartItems.find(item => item.name === productName)) {
            cartItems.push({
                name: productName,
                price: productPrice,
                image: productImage
            });
            cartCount++;
            updateCartDisplay();

            button.innerText = "Added";
            button.disabled = true;
        }
    });
});

cartIcon.addEventListener("click", () => {
    cartVisible = true;
    cartDetails.style.display = cartVisible ? "block" : "none";
});


function updateCartDisplay() {
    cartDetails.innerHTML = "";
    let totalAmount = 0;

    cartItems.forEach((item, index) => {
        const numericPrice = parseFloat(item.price.replace(/[^\d]/g, ""));
        totalAmount += numericPrice;

        const itemDiv = document.createElement("div");
        itemDiv.style.margin = "10px";
        itemDiv.style.borderBottom = "1px solid #ccc";
        itemDiv.style.paddingBottom = "8px";
        itemDiv.innerHTML = `
            <img src="${item.image}" style="width: 50px; height: 50px; vertical-align: middle;">
            <span style="margin-left: 10px;">${item.name} - ${item.price}</span>
            <button class="remove-btn" data-index="${index}" style="float:right; background-color:red; color:white; border:none; padding:5px 10px; cursor:pointer;">Remove</button>
        `;

        cartDetails.appendChild(itemDiv);
    });


    const totalDiv = document.createElement("div");
    totalDiv.style.margin = "10px";
    totalDiv.style.fontWeight = "bold";
    totalDiv.style.borderTop = "1px solid #ccc";
    totalDiv.style.paddingTop = "10px";
    totalDiv.innerHTML = `<b>Total Amount: ₹${totalAmount}</b>`;
    cartDetails.appendChild(totalDiv);


    const confirmBtn = document.createElement("button");
    confirmBtn.innerText = "Confirm Booking";
    confirmBtn.style.margin = "10px";
    confirmBtn.style.padding = "8px 16px";
    confirmBtn.style.backgroundColor = "green";
    confirmBtn.style.color = "white";
    confirmBtn.style.border = "none";
    confirmBtn.style.cursor = "pointer";
    cartDetails.appendChild(confirmBtn);

    confirmBtn.addEventListener("click", () => {
        cartItems = [];
        cartCount = 0;

        cartButtons.forEach(btn => {
            btn.innerText = "Add to Cart";
            btn.disabled = false;
        });

        cartDetails.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <h2 style="color: green;">✅ Booking Confirmed</h2>
                <p>Thank you for your order!</p>
            </div>
        `;

        cartIcon.querySelector("p").innerText = "Cart";
    });

    cartIcon.querySelector("p").innerText = `Cart (${cartCount})`;
    document.querySelectorAll(".remove-btn").forEach(button => {
        button.addEventListener("click", (e) => {
            const index = e.target.getAttribute("data-index");
            const removedItem = cartItems[index];

            cartButtons.forEach(btn => {
                if (btn.parentElement.querySelector("p").innerText === removedItem.name) {
                    btn.innerText = "Add to Cart";
                    btn.disabled = false;
                }
            });
            cartItems.splice(index, 1);
            cartCount--;
            updateCartDisplay();
        });
    });
}

/*///////////////*/
  document.querySelector(".back").addEventListener("click", ()=> {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

