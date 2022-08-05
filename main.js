const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleMenu);

function toggleMenu(){
    const isShoppingCartClosed = shoppingCartContainer.classList.contains('inactive');
    const isMobilMenuClosed = mobilMenu.classList.contains('inactive');
    if(!isShoppingCartClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    

    desktopMenu.classList.toggle('inactive')
}

const burguer = document.querySelector('.menu');
const mobilMenu = document.querySelector('.mobile-menu');

burguer.addEventListener('click', toggleBurguer);

function toggleBurguer(){
    const isShoppingCartClosed = shoppingCartContainer.classList.contains('inactive');
    if(!isShoppingCartClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    desktopMenu.classList.add('inactive');
    mobilMenu.classList.toggle('inactive')
}

const shoppingCart = document.querySelector('.navbar-shopping-cart')
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

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

     shoppingCartContainer.classList.toggle('inactive')
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://acf.geeknetic.es/imgri/imagenes/auto/22/02/17/rqw-windowscolor.jpg?f=webp',
});
productList.push({
    name: 'Computador',
    price: 1200,
    image: 'https://liquimarcas.co/wp-content/uploads/2021/06/computador-barato-powergroup-j4040-1.jpg',
});
productList.push({
    name: 'PS5',
    price: 700,
    image: 'https://i.blogs.es/595c7e/acabo-escasez-ps5-stock-consola-volvera-normalidad-ano-2429173/450_1000.webp',
});
productList.push({
    name: 'Iphone 13 Pro Max',
    price: 1200,
    image:'https://www.apple.com/v/iphone-13-pro/f/images/overview/design/finishes_1_static__lrwz60bo1d26_large.jpg',
});
productList.push({
    name: 'Rolex',
    price: 4200,
    image:'https://inteng-storage.s3.amazonaws.com/img/iea/bjOLre46em/rolex-watches-are-cheap.jpg',
});

function renderProducts(arr){
    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const img = document.createElement('img');
        img.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerHTML = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerHTML = product.name;
    
        const productInfoFigure = document.createElement('figure');
        const productImgCard = document.createElement('img');
        productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg' );
    
        productCard.appendChild(img);
        productCard.appendChild(productInfo);
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        productInfoFigure.appendChild(productImgCard);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);