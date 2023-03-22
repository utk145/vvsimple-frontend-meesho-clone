import BeautyHealth from "./datas/BeautyHealth.js";
import BagsFootwear from "./datas/BagsFootwear.js";
import HomeAndKitchen from "./datas/HomeAndKitchen.js";
import JewelleryAccessories from "./datas/JewelleryAccessories.js";
import Electronics from "./datas/Electronic.js";
import Men from "./datas/Men.js";
import WomenEthnic from "./datas/WomenEthnic.js";
import WomenWestern from "./datas/WomenWestern.js";
import Kids from "./datas/Kids.js";







let inputSearchEle = document.querySelector(".inputSearch");

inputSearchEle.addEventListener("keydown", () => {

    // When the user presses a key while focused on the input element, the callback function in the arrow function will be executed.

    // console.log(inputSearchEle); // just to check
    if (inputSearchEle.value) {
        document.getElementById("closeSearch").style.display = "block";
    } else {
        document.getElementById("closeSearch").style.display = "none";
    }
});



let recentInput = [];
let inputFormEle = document.getElementById("inputForm");
const recentSearchListEle = document.querySelector(".recentSearchList");
inputFormEle.addEventListener("submit", (event) => {
    event.preventDefault();
    let recentSearchListHtmlEle = "";
    // recentInput.push(inputSearchEle.value);
    recentInput.unshift(inputSearchEle.value);
    console.log(recentInput);
    if (recentInput.length > 0) {
        for (let i = 0; i < recentInput.length; i++) {
            recentSearchListHtmlEle +=
                `
                <div class="recentItem">
                        <div class="recentIcon">
                            <img src="./images/recent.png" alt="recent-img">
                        </div>
                        <p>${recentInput[i]}</p>
                </div>
              `
        }
    }
    recentSearchListEle.innerHTML = recentSearchListHtmlEle;
});








let womenEthnic = document.getElementById("womenEthnic");
// let womenEthnicHtmlEle = "";
// console.log(WomenEthnic);

function womenEthnicFunc() {
    return WomenEthnic.map(e => {
        let list = "";
        list = e.data.map(ele => {
            return `<p class="subNavMenuList__item">${ele}</p>`;
        }).join(" ")
        // console.log(e);
        return `
            <div class="column">
                <h4>${e.heading}</h4>
                ${list}
                </div>
                
                `

    }).join("")
}


// womenEthnicFunc();
womenEthnic.innerHTML = womenEthnicFunc();






let womenWestern = document.getElementById("womenWestern");

function womenWestFunc() {
    return WomenWestern.map(e => {
        let list = "";
        list = e.data.map(ele => {
            return `<p class="subNavMenuList__item">${ele}</p>`;
        }).join(" ")
        // console.log(e);
        return `
            <div class="column">
                <h4>${e.heading}</h4>
                ${list}
            </div>

        `

    }).join("")
}

womenWestern.innerHTML = womenWestFunc();






let men = document.getElementById("men");

function menFunc() {
    return Men.map(e => {
        let list = "";
        list = e.data.map(ele => {
            return `<p class="subNavMenuList__item">${ele}</p>`;
        }).join(" ")
        // console.log(e);
        return `
            <div class="column">
                <h4>${e.heading}</h4>
                ${list}
            </div>

        `

    }).join("")
}

men.innerHTML = menFunc();





let kid = document.getElementById("kid");

function kidFunc() {
    return Kids.map(e => {
        let list = "";
        list = e.data.map(ele => {
            return `<p class="subNavMenuList__item">${ele}</p>`;
        }).join(" ")
        // console.log(e);
        return `
            <div class="column">
                <h4>${e.heading}</h4>
                ${list}
            </div>

        `

    }).join("")
}

kid.innerHTML = kidFunc();





let home = document.getElementById("home");

function homeFunc() {
    return HomeAndKitchen.map(e => {
        let list = "";
        list = e.data.map(ele => {
            return `<p class="subNavMenuList__item">${ele}</p>`;
        }).join(" ")
        // console.log(e);
        return `
            <div class="column">
                <h4>${e.heading}</h4>
                ${list}
            </div>

        `

    }).join("")
}

home.innerHTML = homeFunc();




let beauty = document.getElementById("beauty");

function beautyFunc() {
    return BeautyHealth.map(e => {
        let list = "";
        list = e.data.map(ele => {
            return `<p class="subNavMenuList__item">${ele}</p>`;
        }).join(" ")
        // console.log(e);
        return `
            <div class="column">
                <h4>${e.heading}</h4>
                ${list}
            </div>

        `

    }).join("")
}

beauty.innerHTML = beautyFunc();






let jewel = document.getElementById("jewel");

function jewelFunc() {
    return JewelleryAccessories.map(e => {
        let list = "";
        list = e.data.map(ele => {
            return `<p class="subNavMenuList__item">${ele}</p>`;
        }).join(" ")
        // console.log(e);
        return `
            <div class="column">
                <h4>${e.heading}</h4>
                ${list}
            </div>

        `

    }).join("")
}

jewel.innerHTML = jewelFunc();




let bag = document.getElementById("bag");

function bagFunc() {
    return BagsFootwear.map(e => {
        let list = "";
        list = e.data.map(ele => {
            return `<p class="subNavMenuList__item">${ele}</p>`;
        }).join(" ")
        // console.log(e);
        return `
            <div class="column">
                <h4>${e.heading}</h4>
                ${list}
            </div>

        `

    }).join("")
}

bag.innerHTML = bagFunc();






let elec = document.getElementById("elec");

function elecFunc() {
    return Electronics.map(e => {
        let list = "";
        list = e.data.map(ele => {
            return `<p class="subNavMenuList__item">${ele}</p>`;
        }).join(" ")
        // console.log(e);
        return `
            <div class="column">
                <h4>${e.heading}</h4>
                ${list}
            </div>

        `

    }).join("")
}

elec.innerHTML = elecFunc();








import productData from "./meesho_products/data.js";

// console.log(productData);

const category = [...new Set(productData.map(ele => ele.category))];
// console.log([...new Set(category)]);
/* The spread operator `...` is used to convert the Set object back into an array, which is assigned to the category variable.*/

let filteredData = [];
// let filteredData = productData;

document.addEventListener("click", (e) => {
    // console.log(e.target.id);
    // console.log(document.getElementById(e.target.id).checked);

    const BluetoothEle = document.getElementById("bluetooth").checked;
    const ChainsEle = document.getElementById("chains").checked;
    const KurtasEle = document.getElementById("kurtas").checked;
    const AccessoriesEle = document.getElementById("accessories").checked;
    const SareesEle = document.getElementById("sarees").checked;
    const WatchEle = document.getElementById("watch").checked;


    // console.log(BluetoothEle);

    filteredData = productData.filter(ele => (
        (BluetoothEle && ele.category == "bluetooth Headset") ||
        (ChainsEle && ele.category == "Men Chains") ||
        (KurtasEle && ele.category == "Kurtas") ||
        (AccessoriesEle && ele.category == "Mobile Accessories") ||
        (SareesEle && ele.category == "sarees") ||
        (WatchEle && ele.category == "watch")
    ));
    // console.log(filteredData);

    // let productdDataHtmlEle = ""; // to avoid undefined
    // filteredData.forEach(ele => {
    //     productdDataHtmlEle +=
    //         ` <div class="productCard">
    //     <div class="product_image">
    //         <img src="./meesho_products/productImage/${ele.img}" alt="productImage">
    //     </div>
    //     <h3 class="product_name">${ele.name}</h3>
    //     <p class="product_price">
    //         <span>₹</span>
    //         <span>${ele.price}</span>
    //     </p>
    // </div>`
    // })

    // // console.log(productdDataHtmlEle);

    // document.getElementById("product__display").innerHTML = productdDataHtmlEle;

    renderproductData();

})




function renderproductData() {
    let productdDataHtmlEle = "";

    if (filteredData[0]) {

        filteredData.forEach(ele => {
            productdDataHtmlEle +=
                ` <div class="productCard">
            <div class="product_image">
                <img src="./meesho_products/productImage/${ele.img}" alt="productImage">
            </div>
            <h3 class="product_name">${ele.name}</h3>
            <p class="product_price">
                <span>₹</span>
                <span>${ele.price}</span>
            </p>
        </div>`
        })
    } else {
        productData.forEach(ele => {
            productdDataHtmlEle +=
                ` <div class="productCard">
            <div class="product_image">
                <img src="./meesho_products/productImage/${ele.img}" alt="productImage">
            </div>
            <h3 class="product_name">${ele.name}</h3>
            <p class="product_price">
                <span>₹</span>
                <span>${ele.price}</span>
            </p>
            <span class="tmp">
                <span class="text">Free Delivery</span>
            </span>
            <div class="rating">
            <div class="rating_rate">${ele.rating} <i class="fa-solid fa-star" style="color:white"></i></div>
            <span class="review">${ele.review} Reviews</span>
        </div>
        </div>`
        })

    }


    // console.log(productdDataHtmlEle);

    
    document.getElementById("product__display").innerHTML = productdDataHtmlEle;

}



renderproductData();





