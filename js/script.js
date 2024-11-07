const imageLamp = document.getElementById("lamp");
const bntElem = document.getElementById("light-bnt")


bntElem.addEventListener("click", function() {
    // imageLamp.src="./img/yellow_lamp.png";

    if (imageLamp.src.includes("white_lamp.png")) {
        imageLamp.src="./img/yellow_lamp.png";
        bntElem.innerHTML = "Spegni"
    } else {
        imageLamp.src="./img/white_lamp.png";
        bntElem.innerHTML = "Accendi"
    }
})