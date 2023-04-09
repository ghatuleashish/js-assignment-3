const Ashish = [
    {
        img: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803247/2019/5/27/624dac60-4c42-4902-bba1-30a51cc7f43c1558948536543-Apple-Unisex-Smart-Watches-1441558948536225-1.jpg",
        tit: "Unisex Silver-Toned Series 3 Smart Watch",
        bra: "Apple",
        pri: "RS 31999"
    },
    {
        img: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2019/2/23/dc05b5e5-aa82-493e-bf0b-0c309baf21021550920383101-1.jpg",
        tit: "Unisex Black & Green Reflex 2.0 Smart Band",
        bra: "Fastrack",
        pri: "RS 1999"
    },
    {
        img: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/10122083/2019/6/24/e533a691-3908-41b0-8307-1928a37d4ec41561362162650-Samsung-Galaxy-Fit-4801561362161527-1.jpg",
        tit: "Unisex Black Galaxy Fit Fitness Band",
        bra: "Samsung",
        pri: "RS 9990"
    },
    {
        img: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/8593217/2019/4/9/de2c21f3-6731-4c29-9369-692a486a1b8c1554802772926-Samsung-Gear-IconX-Black-Cord-free-Fitness-Earbuds-256155480-1.jpg",
        tit: "Gear IconX Black Cord-free Fitness Earbuds",
        bra: "Samsung",
        pri: "RS  13990"
    },
    {
        img: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/9803279/2019/5/27/6661d579-12ae-456b-b8f2-e78e5256a99c1558948436173-Apple-AirPods-with-Charging-Case-2nd-Gen-White-3831558948435-1.jpg",
        tit: "White 2nd Gen AirPods with Charging Case",
        bra: "Apple",
        pri: "RS  14999"
    },
]


for (let i = 0; i <= 4; i++) {
    const Accessories = document.querySelector(".Accessories ");
    console.log(Accessories);

    const card = document.createElement('div');
    card.classList = 'card';

    const accessCard = `  
        <a href="#">
            <div class="img">
              <img src=${Ashish[i].img} alt="">
            </div>
            <div class="details">
                <h3>${Ashish[i].tit}</h3>
                <h4>${Ashish[i].bra}</h4>
                <h5>${Ashish[i].pri}</h5>
            </div>
        </a>
    `;
    card.innerHTML += accessCard;
    Accessories.appendChild(card);
}



