class Toyatacar {
//     constructor(brand, maileg) {
//         console.log("creating new object");
//         this.barndname = brand;
//         this.maileg = maileg;

//     }
    start1() {
        console.log("strat1");
    }
    start2() {
        console.log("strat2");
    }
    start3() {
        console.log("strat3");
    }
    start4() {
        console.log("strat4");
    }
    // setbrand(brand) {
    //     this.barndname = brand;
    // }
}

class food  extends Toyatacar{
    eat(){
        console.log("chiken");
    }
}

let niraj = new food();
// niraj.setbrand = ("niraj");
let mistry = new Toyatacar();
// mistry.setbrand = ("mistry");
let niraj2 = new Toyatacar();
