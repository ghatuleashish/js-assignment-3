const fashion = [
    {
        image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
        title: "Men Navy Blue Solid Sweatshirt",
        brand: "United Colours of Benetton",
        price: "RS 2599"
    },
    {
        image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2060340/2017/9/14/11505387708574-Puma-Men-Black-Solid-Sporty-Jacket-371505387708496-1.jpg",
        title: "Men Black MAMGP T7 Sweat Sporty Jacket",
        brand: "Puma",
        price: "RS  7999"
    },
    {
        image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2018/9/19/b1373b00-37d4-41a0-a908-5d742a68d3661537343756229-1.jpg",
        title: "Men Black Action Parkview Lifestyle Shoes",
        brand: "Hush Puppies",
        price: "RS  6999"
    },
    {
        image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/3854721/2018/3/12/11520844673915-BARESKIN-Women-Black-Solid-Lightweight-Leather-Jacket-7761520844673718-1.jpg",
        title: "Women Black Solid Lightweight Leather Jacket",
        brand: "BARESKIN",
        price: "RS  9999"
    },
    {
        image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/5649908/2018/5/10/6bfe80cd-2f55-42bc-aa7f-e0d6c9e2ac531525936414747-SASSAFRAS-Women-Blue-Solid-Shirt-Dress-3831525936414532-1.jpg",
        title: "Women Blue Solid Shirt Dress",
        brand: "SASSAFRAS",
        price: "RS  5200"
    },
    // {
    //     image : "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803247/2019/5/27/624dac60-4c42-4902-bba1-30a51cc7f43c1558948536543-Apple-Unisex-Smart-Watches-1441558948536225-1.jpg",
    //     title : "Unisex Silver-Toned Series 3 Smart Watch",
    //     brand : "Apple",
    //     price : "RS 31999"
    // },
    // {
    //     image : "",
    //     title : "Unisex Black & Green Reflex 2.0 Smart Band",
    //     brand : "Fastrack",
    //     price : "RS 1999"
    // },
    // {
    //     image : "",
    //     title : "Unisex Black Galaxy Fit Fitness Band",
    //     brand : "Samsung",
    //     price : "RS 9990"
    // },
    // {
    //     image : "",
    //     title : "Gear IconX Black Cord-free Fitness Earbuds",
    //     brand : "Samsung",
    //     price : "RS  13990"
    // },
    // {
    //     image : "",
    //     title : "White 2nd Gen AirPods with Charging Case",
    //     brand : "Apple",
    //     price : "RS  14999"
    // },

]


for (let i = 0; i <= 4; i++) {
    const main = document.querySelector(".main");
    console.log(main);

    const card = document.createElement('div');
    card.classList = 'card';

    const clothCard = `
            <a href="#">
                <div class="img">
                    <img src=${fashion[i].image} alt="">
                </div>
                <div class="details">
                    <h3>${fashion[i].title}</h3>
                    <h4>${fashion[i].brand}</h4>
                    <h5>${fashion[i].price}</h5>
                </div>
            </a>
        `;

    card.innerHTML += clothCard;
    main.appendChild(card)
}

for (let i = 5; i <= 9; i++) {
    const main = document.querySelector(".main");
    console.log(main);

    const card = document.createElement('div');
    card.classList = 'card';

    const clothCard = `
            <a href="#">
                <div class="img">
                    <img src=${fashion[i].image} alt="">
                </div>
                <div class="details">
                    <h3>${fashion[i].title}</h3>
                    <h4>${fashion[i].brand}</h4>
                    <h5>${fashion[i].price}</h5>
                </div>
            </a>
        `;

    card.innerHTML += clothCard;
    main.appendChild(card)
}

var counter = 1
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter < 4){
        counter = 1;
    }
},3000);