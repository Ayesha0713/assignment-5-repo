function color(){
    const addcolor = document.getElementsByClassName('seat');
    addcolor.classList.add('bg-lime-400');
}













function popUp(){

    const hidePurchase = document.getElementById('purchase');
    hidePurchase.classList.add('hidden');

    const showPopup = document.getElementById('popup');
    showPopup.classList.remove('hidden');
}


function back(){

    const hidePopup = document.getElementById('popup');
    hidePopup.classList.add('hidden');

    const showPurchase = document.getElementById('purchase');
    showPurchase.classList.remove('hidden')
}