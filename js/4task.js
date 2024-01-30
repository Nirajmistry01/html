// let click = document.querySelector("#click");

// click.onclick = () => {
//     console.log("niraj mistry");
//     let a = 25;
//     a++;
//     console.log(a);
// };


let mode = document.querySelector("#mode")
let mode2 =  "light";

mode.addEventListener("click" , ()  =>{
    if (mode2 === "light") {
        mode2 = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    }else{
        mode2 = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(mode2);
})