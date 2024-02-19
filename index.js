    
    // A serial
    function color(){
        let addcolor = document.getElementById('seat-one');
        addcolor.classList.add('bg-lime-400');
    }
    
    function colour(){
        let addcolor = document.getElementById('seat-two');
        addcolor.classList.add('bg-lime-400');
    }
    
    function addbg(){
        let addcolor = document.getElementById('seat-three');
        addcolor.classList.add('bg-lime-400');
    }
    
    function addbgtwo(){
        let addcolor = document.getElementById('seat-four');
        addcolor.classList.add('bg-lime-400');
    }
    
    
    // B serial
    
    function addbgthree(){
        let addcolor = document.getElementById('seat-five');
        addcolor.classList.add('bg-lime-400');
    }
    
    
    function addbgfour(){
        let addcolor = document.getElementById('seat-six');
        addcolor.classList.add('bg-lime-400');
    }
    
    function addbgfive(){
        let addcolor = document.getElementById('seat-seven');
        addcolor.classList.add('bg-lime-400');
    }
    
    function addbgsix(){
        let addcolor = document.getElementById('seat-eight');
        addcolor.classList.add('bg-lime-400');
    }
    
    
    // C serial
    
    function addbgseven(){
        let addcolor = document.getElementById('seat-nine');
        addcolor.classList.add('bg-lime-400');
    }
    
    function addbgeight(){
        let addcolor = document.getElementById('seat-ten');
        addcolor.classList.add('bg-lime-400');
    }
    
    
    function addbgnine(){
        let addcolor = document.getElementById('seat-eleven');
        addcolor.classList.add('bg-lime-400');
    }
    
    
    function addbgten(){
        let addcolor = document.getElementById('seat-twelve');
        addcolor.classList.add('bg-lime-400');
    }


    const seats = document.querySelector (".seat"); 

    if (seats >= 4) {
        alert("Can not select more");
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