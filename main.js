const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleMenu);

function toggleMenu(){
    const isShoppingCartClosed = productDetail.classList.contains('inactive');
    const isMobilMenuClosed = mobilMenu.classList.contains('inactive');
    if(!isShoppingCartClosed){
        productDetail.classList.add('inactive');
    }
    

    desktopMenu.classList.toggle('inactive')
}

const burguer = document.querySelector('.menu');
const mobilMenu = document.querySelector('.mobile-menu');

burguer.addEventListener('click', toggleBurguer);

function toggleBurguer(){
    const isShoppingCartClosed = productDetail.classList.contains('inactive');
    if(!isShoppingCartClosed){
        productDetail.classList.add('inactive');
    }
    desktopMenu.classList.add('inactive');
    mobilMenu.classList.toggle('inactive')
}

const shoppingCart = document.querySelector('.navbar-shopping-cart')
const productDetail = document.querySelector('.product-detail');

shoppingCart.addEventListener('click', toggleCart);

function toggleCart(){
    const isDeskMenuClosed = desktopMenu.classList.contains('inactive');
    const isMobilMenuClosed = mobilMenu.classList.contains('inactive');
    
    if(!isMobilMenuClosed){
        mobilMenu.classList.add('inactive');
    }
    else if(!isDeskMenuClosed){
        desktopMenu.classList.add('inactive');
    }

     productDetail.classList.toggle('inactive')
}