window.onload = function(){
    var existingData = JSON.parse(localStorage.getItem("userData")) || [];
    var pcount = existingData.length;

    var cartBadge = document.getElementById('cartCount');
    cartBadge.innerHTML = pcount;
}

function addToCart() {
    const cartBadge = document.getElementById('cartCount');
    const cartIcon = document.getElementById('cartIcon');
    cartBadge.textContent++;
    cartBadge.style.display = 'block';
    cartBadge.style.animation = 'none';
    void cartBadge.offsetWidth; // Trigger reflow to restart the animation
    cartBadge.style.animation = 'bounce 0.5s';

    // Remove the animation class after a short delay
    setTimeout(() => {
        cartBadge.style.animation = '';
    }, 500);

    // Get array values
    var pname = document.getElementById('product-name').textContent;
    var imgElement = document.getElementById('product-image');
    var img = imgElement.src;
    var pprice = document.getElementById('price').textContent;

    // Retrieve the existing data from local storage
    var existingData = JSON.parse(localStorage.getItem("userData")) || [];

    let quantity = 1;
    var productNames = [];
    existingData.forEach(function (data, index) {
        productNames.push(data.name)
    });

    if(productNames.includes(pname)){
        var pindex = existingData.findIndex(item => item.name === pname);
        existingData[pindex].qty += 1;
    }
    else{
        // Create a new data object
        var newData = {
            name: pname,
            imgLink: img,
            price: pprice,
            qty: 1
        };
        // Add the new data to the array
        existingData.push(newData);
    }

    // Convert the updated array to a string and store it in local storage
    localStorage.setItem("userData", JSON.stringify(existingData));
}