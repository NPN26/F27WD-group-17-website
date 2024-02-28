function displayData() {
    // Retrieve the existing data string from local storage or initialize an empty array string
    var existingData = localStorage.getItem("userData") || '[]';

    // Parse the existing data string into an array
    existingData = JSON.parse(existingData);

    var pricetotal = 0.00;
    
    var productcount = 0;

    // Display the data for each entry in the array
    existingData.forEach(function (data, index) {

        var priceString = data.price;
        priceString = priceString.substr(1);
        var price = parseFloat(priceString);
        pricetotal = pricetotal + (price*data.qty) ;

        productcount += data.qty;

        var contentContainer = document.getElementById("contentContainer");
        
        // Populate the container with HTML content based on the data
        var productCode = "<div class='product'><img src='"
                    +data.imgLink+
                    "'><div><h3>"
                    +data.name+
                    "</h3><p class='stock'>In Stock </p><p class='delivery'> Eligible" +
                    "for Free delivery </p><div class='qty-and-price'><p class='qty'>Qty: "
                    +data.qty+
                    "</p><p class='price'>"
                    +data.price+
                    "</p></div></div></div>";

        // Append the container to the body of the document
        contentContainer.innerHTML += productCode
    });

    let p_itemCount = document.getElementById('item-count');
    p_itemCount.innerHTML = productcount;

    let p_shipping = document.getElementById('shipping-costs');
    let shipping_cost = pricetotal*0.04;
    p_shipping.innerHTML = "$"+shipping_cost.toFixed(2);

    let p_pricetotal = document.getElementById('price-total');
    p_pricetotal.innerHTML = "$"+pricetotal.toFixed(2);

    let p_totalcost = document.getElementById('total-cost');
    p_totalcost.innerHTML = "$"+parseFloat(pricetotal+shipping_cost).toFixed(2);
}
function showPopup() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("popup").style.display = "none";
}

document.getElementById("popupBtn").addEventListener("click", showPopup);