const menuses = document.getElementById('menus');
const buttonMenu = document.getElementById('showMenu');

const data = [
    {
        title: 'Burger XXL',
        desc: 'Burger dua beef dan telur serta paduan saus khas Best Burger',
        price: 'Rp 50.000',
        image: 'assets/image/burger1.png'
    },
    {
        title: 'Burger M',
        desc: 'Burger beef dan telur serta paduan saus khas Best Burger',
        price: 'Rp 40.000',
        image: 'assets/image/burger2.png'
    },
    {
        title: 'Burger S',
        desc: 'Burger beef serta paduan saus khas Best Burger',
        price: 'Rp 35.000',
        image: 'assets/image/burger3.png'
    }
];

const autoLoop = () => {
    for(let i= 0; i < data.length; i++){
        menuses.innerHTML += `
            <div class="menu1">
                <div class="gambar">
                    <img src="${data[i].image}" alt="burger2">
                </div>
                <div class="info">
                    <h3>${data[i].title}</h3>
                    <p>${data[i].desc}</p>
                    <span>${data[i].price}</span>
                </div>
            </div>
        `
    }
}

buttonMenu.addEventListener('click', (event) => {
    if(menuses.innerHTML === ""){
        autoLoop();
        buttonMenu.innerText = 'Hide Menu';
    }else{
        menuses.innerHTML = "";
        buttonMenu.innerText = 'Show Menu';
    }
});