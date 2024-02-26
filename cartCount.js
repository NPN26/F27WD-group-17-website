window.onload = function(){
    var existingData = JSON.parse(localStorage.getItem("userData")) || [];
    var pcount = existingData.length;

    var cartBadge = document.getElementById('cartCount');
    cartBadge.innerHTML = pcount;
}