//declaramos el array principal de la pagina
const stockFItems = [
  {
    itemId: 1,
    itemImage: "data:image/jpeg;base64,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",
    itemName: "Tomate",
    itemWeight: "1 Kg",
    itemType: "Vegetables",
    itemPrice: 5980,
    itemAmount: 10
  },
  {
    itemId: 2,
    itemImage: "../images/stockF/2_vegetables-PhotoRoom.png",
    itemName: "Cebolla roja",
    itemWeight: "1 Kg",
    itemType: "Vegetables",
    itemPrice: 3780,
    itemAmount: 10
  },
  {
    itemId: 3,
    itemImage: "../images/stockF/3_vegetables-PhotoRoom.png",
    itemName: "Cebolla blanca",
    itemWeight: "1 Kg",
    itemType: "Vegetables",
    itemPrice: 2180,
    itemAmount: 10
  },
  {
    itemId: 4,
    itemImage: "../images/stockF/4_vegetables-PhotoRoom.png",
    itemName: "Pepino",
    itemWeight: "1 Kg",
    itemType: "Vegetables",
    itemPrice: 3280,
    itemAmount: 10
  },
  {
    itemId: 5,
    itemImage: "../images/stockF/5_vegetables-PhotoRoom.png",
    itemName: "Zanahoria",
    itemWeight: "1 Kg",
    itemType: "Vegetables",
    itemPrice: 3980,
    itemAmount: 10
  },
  {
    itemId: 6,
    itemImage: "../images/stockF/6_fruit-PhotoRoom.png",
    itemName: "Banana",
    itemWeight: "1 Kg",
    itemType: "Fruits",
    itemPrice: 2780,
    itemAmount: 10
  },
  {
    itemId: 7,
    itemImage: "../images/stockF/7_fruit-PhotoRoom.png",
    itemName: "Manzana roja",
    itemWeight: "1 Kg",
    itemType: "Fruits",
    itemPrice: 12900,
    itemAmount: 10
  },
  {
    itemId: 8,
    itemImage: "../images/stockF/8_fruit-PhotoRoom.png",
    itemName: "Manzana verde",
    itemWeight: "1 Kg",
    itemType: "Fruits",
    itemPrice: 12900,
    itemAmount: 10
  },
  {
    itemId: 9,
    itemImage: "../images/stockF/9_fruit-PhotoRoom.png",
    itemName: "Pera verde",
    itemWeight: "1 Kg",
    itemType: "Fruits",
    itemPrice: 10980,
    itemAmount: 10
  },
  {
    itemId: 10,
    itemImage: "../images/stockF/10_fruit-PhotoRoom.png",
    itemName: "Limon verde comun",
    itemWeight: "1 Kg",
    itemType: "Fruits",
    itemPrice: 6880,
    itemAmount: 10
  },
  {
    itemId: 11,
    itemImage: "../images/stockF/11_beverages-PhotoRoom.png",
    itemName: "Leche colanta entera",
    itemWeight: "1 L",
    itemType: "Beverages",
    itemPrice: 4590,
    itemAmount: 10
  },
  {
    itemId: 12,
    itemImage: "../images/stockF/12_beverages-PhotoRoom.png",
    itemName: "Leche colanta deslactosada",
    itemWeight: "1 L",
    itemType: "Beverages",
    itemPrice: 4800,
    itemAmount: 10
  },
  {
    itemId: 13,
    itemImage: "../images/stockF/13_beverages-PhotoRoom.png",
    itemName: "Gaseosa Quatro mediano",
    itemWeight: "1.5 L",
    itemType: "Beverages",
    itemPrice: 3000,
    itemAmount: 10
  },
  {
    itemId: 14,
    itemImage: "../images/stockF/14_beverages-PhotoRoom.png",
    itemName: "Gaseosa Quatro pequeño",
    itemWeight: "400 ml",
    itemType: "Beverages",
    itemPrice: 1890,
    itemAmount: 10
  },
  {
    itemId: 15,
    itemImage: "../images/stockF/15_beverages-PhotoRoom.png",
    itemName: "Coca-cola grande",
    itemWeight: "3 L",
    itemType: "Beverages",
    itemPrice: 7600,
    itemAmount: 10
  },
  {
    itemId: 16,
    itemImage: "../images/stockF/16_beverages-PhotoRoom.png",
    itemName: "Coca-cola mediana",
    itemWeight: "1.5 L",
    itemType: "Beverages",
    itemPrice: 5650,
    itemAmount: 10
  },
  {
    itemId: 17,
    itemImage: "../images/stockF/17_beverages-PhotoRoom.png",
    itemName: "Coca-cola pequeña",
    itemWeight: "400 ml",
    itemType: "Beverages",
    itemPrice: 2600,
    itemAmount: 10
  },
  {
    itemId: 18,
    itemImage: "../images/stockF/18_beverages-PhotoRoom.png",
    itemName: "Jugo hit mediano",
    itemWeight: "1.5 L",
    itemType: "Beverages",
    itemPrice: 4500,
    itemAmount: 10
  },
  {
    itemId: 19,
    itemImage: "../images/stockF/19_beverages-PhotoRoom.png",
    itemName: "Jugo hit pequeño",
    itemWeight: "400 ml",
    itemType: "Beverages",
    itemPrice: 2200,
    itemAmount: 10
  },
  {
    itemId: 20,
    itemImage: "../images/stockF/20_beverages-PhotoRoom.png",
    itemName: "Gatetorade",
    itemWeight: "500 ml",
    itemType: "Beverages",
    itemPrice: 3300,
    itemAmount: 10
  },
  {
    itemId: 21,
    itemImage: "../images/stockF/21_meats-PhotoRoom.png",
    itemName: "Carne molida de res especial x Kg",
    itemWeight: "1 Kg",
    itemType: "Meats",
    itemPrice: 25950,
    itemAmount: 10
  },
  {
    itemId: 22,
    itemImage: "../images/stockF/22_meats-PhotoRoom.png",
    itemName: "Pernil de pollo x Kg",
    itemWeight: "1 Kg",
    itemType: "Meats",
    itemPrice: 14500,
    itemAmount: 10
  },
  {
    itemId: 23,
    itemImage: "../images/stockF/23_meats-PhotoRoom.png",
    itemName: "Lomo de cerdo cañon x Kg",
    itemWeight: "1 Kg",
    itemType: "Meats",
    itemPrice: 26350,
    itemAmount: 10
  },
  {
    itemId: 24,
    itemImage: "../images/stockF/24_meats-PhotoRoom.png",
    itemName: "Pechuga de pollo fresca bandeja familiar x Kg",
    itemWeight: "1 Kg",
    itemType: "Meats",
    itemPrice: 17500,
    itemAmount: 10
  },
  {
    itemId: 25,
    itemImage: "../images/stockF/25_meats-PhotoRoom.png",
    itemName: "Carne especial hueso carnudo x Kg",
    itemWeight: "1 Kg",
    itemType: "Meats",
    itemPrice: 4300,
    itemAmount: 10
  },
  {
    itemId: 26,
    itemImage: "../images/stockF/26_seafood-PhotoRoom.png",
    itemName: "Pez mojarra roja x Kg",
    itemWeight: "1 Kg",
    itemType: "Fish",
    itemPrice: 16500,
    itemAmount: 10
  },
  {
    itemId: 27,
    itemImage: "../images/stockF/27_seafood-PhotoRoom.png",
    itemName: "Pez mojarra tilapia",
    itemWeight: "1 Kg",
    itemType: "Fish",
    itemPrice: 12950,
    itemAmount: 10
  },
  {
    itemId: 28,
    itemImage: "../images/stockF/28_seafood-PhotoRoom.png",
    itemName: "Pez bocachico criollo x Kg",
    itemWeight: "1 Kg",
    itemType: "Fish",
    itemPrice: 16500,
    itemAmount: 10
  },
  {
    itemId: 29,
    itemImage: "../images/stockF/29_seafood-PhotoRoom.png",
    itemName: "Pez cachama fresca x Kg",
    itemWeight: "1 Kg",
    itemType: "Fish",
    itemPrice: 13900,
    itemAmount: 10
  },
  {
    itemId: 30,
    itemImage: "../images/stockF/30_seafood-PhotoRoom.png",
    itemName: "Pez lebranche criollo fresco x Kg",
    itemWeight: "1 Kg",
    itemType: "Fish",
    itemPrice: 10980,
    itemAmount: 10
  },
  {
    itemId: 31,
    itemImage: "../images/stockF/31_frozen-PhotoRoom.png",
    itemName: "Nuggets olimpica x 20 unds",
    itemWeight: "380 gr",
    itemType: "Frozen Foods",
    itemPrice: 10650,
    itemAmount: 10
  },
  {
    itemId: 32,
    itemImage: "../images/stockF/32_frozen-PhotoRoom.png",
    itemName: "Deditos de queso x 10 unds",
    itemWeight: "250 gr",
    itemType: "Frozen Foods",
    itemPrice: 7950,
    itemAmount: 10
  },
  {
    itemId: 33,
    itemImage: "../images/stockF/33_frozen-PhotoRoom.png",
    itemName: "Papas medalla de oro a la francesa",
    itemWeight: "1 Kg",
    itemType: "Frozen Foods",
    itemPrice: 13990,
    itemAmount: 10
  },
  {
    itemId: 34,
    itemImage: "../images/stockF/34_frozen-PhotoRoom.png",
    itemName: "Croqueta farah falafel congelado x 18 unds",
    itemWeight: "540 gr",
    itemType: "Frozen Foods",
    itemPrice: 21375,
    itemAmount: 10
  },
  {
    itemId: 35,
    itemImage: "../images/stockF/35_frozen-PhotoRoom.png",
    itemName: "Empanadas farah de queso x 10 unds",
    itemWeight: "400 gr",
    itemType: "Frozen Foods",
    itemPrice: 16612,
    itemAmount: 10
  },
  {
    itemId: 36,
    itemImage: "../images/stockF/36_frozen-PhotoRoom.png",
    itemName: "Yuca mccain palitos jumbo",
    itemWeight: "500 gr",
    itemType: "Frozen Foods",
    itemPrice: 7350,
    itemAmount: 10
  },
  {
    itemId: 37,
    itemImage: "../images/stockF/37_frozen-PhotoRoom.png",
    itemName: "Helado colombina vainilla y fresa",
    itemWeight: "2.5 Kg",
    itemType: "Frozen Foods",
    itemPrice: 35550,
    itemAmount: 10
  },
  {
    itemId: 38,
    itemImage: "../images/stockF/38_frozen-PhotoRoom.png",
    itemName: "Pinchos medalla de oro de pollo apanado x 12 unds",
    itemWeight: "560 gr",
    itemType: "Frozen Foods",
    itemPrice: 11400,
    itemAmount: 10
  },
  {
    itemId: 39,
    itemImage: "../images/stockF/39_frozen-PhotoRoom.png",
    itemName: "Maiz dulce congelado de medalla de oro",
    itemWeight: "500 gr",
    itemType: "Frozen Foods",
    itemPrice: 8990,
    itemAmount: 10
  },
  {
    itemId: 40,
    itemImage: "../images/stockF/40_frozen-PhotoRoom.png",
    itemName: "pulpa de fruta congelada de guanabana",
    itemWeight: "200 gr",
    itemType: "Frozen Foods",
    itemPrice: 3550,
    itemAmount: 10
  },
  {
    itemId: 41,
    itemImage: "../images/stockF/41_biscuits-PhotoRoom.png",
    itemName: "Galleta saltin noel rojo taco 500 G x5 unds",
    itemWeight: "500 gr",
    itemType: "Biscuits",
    itemPrice: 6500,
    itemAmount: 10
  },
  {
    itemId: 42,
    itemImage: "../images/stockF/42_biscuits-PhotoRoom.png",
    itemName: "Galleta Ducales taco 360 g X 3 unds",
    itemWeight: "360 gr",
    itemType: "Biscuits",
    itemPrice: 7590,
    itemAmount: 10
  },
  {
    itemId: 43,
    itemImage: "../images/stockF/43_biscuits-PhotoRoom.png",
    itemName: "Galleta festival minichips 420 G",
    itemWeight: "420 gr",
    itemType: "Biscuits",
    itemPrice: 11990,
    itemAmount: 10
  },
  {
    itemId: 44,
    itemImage: "../images/stockF/44_biscuits-PhotoRoom.png",
    itemName: "Galleta Festival sabores surtidos 50 G x 12 unds",
    itemWeight: "600 gr",
    itemType: "Biscuits",
    itemPrice: 9990,
    itemAmount: 10
  },
  {
    itemId: 45,
    itemImage: "../images/stockF/45_biscuits-PhotoRoom.png",
    itemName: "Galleta Oreo chocholate crema vainilla 108 G",
    itemWeight: "108 gr",
    itemType: "Biscuits",
    itemPrice: 2890,
    itemAmount: 10
  },
  {
    itemId: 46,
    itemImage: "../images/stockF/46_snacks-PhotoRoom.png",
    itemName: "Pasaboca Papas Ramo natural 105 G",
    itemWeight: "105 gr",
    itemType: "Snacks",
    itemPrice: 4000,
    itemAmount: 10
  },
  {
    itemId: 47,
    itemImage: "../images/stockF/47_snacks-PhotoRoom.png",
    itemName: "Pasaboca Papas Ramo pollo 105 G",
    itemWeight: "105 gr",
    itemType: "Snacks",
    itemPrice: 4000,
    itemAmount: 10
  },
  {
    itemId: 48,
    itemImage: "../images/stockF/48_snacks-PhotoRoom.png",
    itemName: "Pasaboca Papas Ramo limon 105 G",
    itemWeight: "105 gr",
    itemType: "Snacks",
    itemPrice: 4000,
    itemAmount: 10
  },
  {
    itemId: 49,
    itemImage: "../images/stockF/49_snacks-PhotoRoom.png",
    itemName: "Pasaboca Nachos Ramo natural 190 G",
    itemWeight: "190 gr",
    itemType: "Snacks",
    itemPrice: 6500,
    itemAmount: 10
  },
  {
    itemId: 50,
    itemImage: "../images/stockF/50_snacks-PhotoRoom.png",
    itemName: "Papa perro tostadita fosforito 200 G",
    itemWeight: "200 gr",
    itemType: "Snacks",
    itemPrice: 4150,
    itemAmount: 10
  },
  {
    itemId: 51,
    itemImage: "../images/stockF/51_staples-PhotoRoom.png",
    itemName: "Huevos AA Kikes rojos x 30 unds",
    itemWeight: "1.8 Kg",
    itemType: "Staples",
    itemPrice: 21900,
    itemAmount: 10
  },
  {
    itemId: 52,
    itemImage: "../images/stockF/52_staples-PhotoRoom.png",
    itemName: "Huevos A kikes rojos x30 unds",
    itemWeight: "1.6 Kg",
    itemType: "Staples",
    itemPrice: 16900,
    itemAmount: 10
  },
  {
    itemId: 53,
    itemImage: "../images/stockF/53_staples-PhotoRoom.png",
    itemName: "Arroz Tailandes 3Kg",
    itemWeight: "3 Kg",
    itemType: "Staples",
    itemPrice: 17325,
    itemAmount: 10
  },
  {
    itemId: 54,
    itemImage: "../images/stockF/54_staples-PhotoRoom.png",
    itemName: "Arroz Diana 3 Kg",
    itemWeight: "3 Kg",
    itemType: "Staples",
    itemPrice: 14550,
    itemAmount: 10
  },
  {
    itemId: 55,
    itemImage: "../images/stockF/57_staples-PhotoRoom.png",
    itemName: "Azucar Manuelita 2.5 Kg",
    itemWeight: "2.5 Kg",
    itemType: "Staples",
    itemPrice: 12950,
    itemAmount: 10
  },
  {
    itemId: 56,
    itemImage: "../images/stockF/56_staples-PhotoRoom.png",
    itemName: "Azucar La Economica 2.5 Kg",
    itemWeight: "2.5 Kg",
    itemType: "Staples",
    itemPrice: 10500,
    itemAmount: 10
  },
  {
    itemId: 57,
    itemImage: "../images/stockF/57_staples-PhotoRoom.png",
    itemName: "Aceite Riquisimo 1000 mL",
    itemWeight: "1000 ml",
    itemType: "Staples",
    itemPrice: 11990,
    itemAmount: 10
  },
  {
    itemId: 58,
    itemImage: "../images/stockF/58_staples-PhotoRoom.png",
    itemName: "Aceite de girasol Premier",
    itemWeight: "1000 ml",
    itemType: "Staples",
    itemPrice: 21400,
    itemAmount: 10
  },
  {
    itemId: 59,
    itemImage: "../images/stockF/59_staples-PhotoRoom.png",
    itemName: "Leche en polvo Klim fortificada 840 G",
    itemWeight: "840 gr",
    itemType: "Staples",
    itemPrice: 42200,
    itemAmount: 10
  },
  {
    itemId: 60,
    itemImage: "../images/stockF/60_staples-PhotoRoom.png",
    itemName: "Leche en polvo El Rodeo 875 G",
    itemWeight: "875 gr",
    itemType: "Staples",
    itemPrice: 37900,
    itemAmount: 10
  },
  {
    itemId: 61,
    itemImage: "../images/stockF/61_alcohol-PhotoRoom.png",
    itemName: "Ron Bacadrdí Mandarina 750 ML",
    itemWeight: "750 ml",
    itemType: "Alcohol Drinks",
    itemPrice: 48800,
    itemAmount: 10
  },
  {
    itemId: 62,
    itemImage: "../images/stockF/62_alcohol-PhotoRoom.png",
    itemName: "Ron Viejo De Caldas Tradicional 750 ML",
    itemWeight: "750ml",
    itemType: "Alcohol Drinks",
    itemPrice: 52400,
    itemAmount: 10
  },
  {
    itemId: 63,
    itemImage: "../images/stockF/63_alcohol-PhotoRoom.png",
    itemName: "Tequila José Cuervo Silver 750 ML",
    itemWeight: "750 ml",
    itemType: "Alcohol Drinks",
    itemPrice: 81000,
    itemAmount: 10
  },
  {
    itemId: 64,
    itemImage: "../images/stockF/64_alcohol-PhotoRoom.png",
    itemName: "Tequila 1800 Reserva Silver 750 ML",
    itemWeight: "750 ml",
    itemType: "Alcohol Drinks",
    itemPrice: 154275,
    itemAmount: 10
  },
  {
    itemId: 65,
    itemImage: "../images/stockF/65_alcohol-PhotoRoom.png",
    itemName: "Cerveza Clun Colombia Dorada en Lata 330 ML X6 unds",
    itemWeight: "1980 ml",
    itemType: "Alcohol Drinks",
    itemPrice: 15920,
    itemAmount: 10
  },
  {
    itemId: 66,
    itemImage: "../images/stockF/66_alcohol-PhotoRoom.png",
    itemName: "Cerveza Costeña Bacana en Lata 330 ML x6 unds",
    itemWeight: "1980 ml",
    itemType: "Alcohol Drinks",
    itemPrice: 14500,
    itemAmount: 10
  },
  {
    itemId: 67,
    itemImage: "../images/stockF/67_alcohol-PhotoRoom.png",
    itemName: "Whisky Buchanan's Deluxe 1 Lt",
    itemWeight: "1 Lt",
    itemType: "Alcohol Drinks",
    itemPrice: 193000,
    itemAmount: 10
  },
  {
    itemId: 68,
    itemImage: "../images/stockF/68_alcohol-PhotoRoom.png",
    itemName: "Whisky Buchanan's Master 1 Lt",
    itemWeight: "1 Lt",
    itemType: "Alcohol Drinks",
    itemPrice: 207750,
    itemAmount: 10
  },
  {
    itemId: 69,
    itemImage: "../images/stockF/69_alcohol-PhotoRoom.png",
    itemName: "Vino Tinto Finca Las Moras Malbec 750 ML",
    itemWeight: "750 ml",
    itemType: "Alcohol Drinks",
    itemPrice: 42750,
    itemAmount: 10
  },
  {
    itemId: 70,
    itemImage: "../images/stockF/70_alcohol-PhotoRoom.png",
    itemName: "Vino Tinto Gato Negro Cabernet Sauvignon 750 ML",
    itemWeight: "750 ml",
    itemType: "Alcohol Drinks",
    itemPrice: 38100,
    itemAmount: 10
  },
]

//Declaramos elementos del DOM para manipularlos
const category1 = document.getElementById("categories__1");
const category2 = document.getElementById("categories__2");
const category3 = document.getElementById("categories__3");
const category4 = document.getElementById("categories__4");
const category5 = document.getElementById("categories__5");
const category6 = document.getElementById("categories__6");
const category7 = document.getElementById("categories__7");
const TopSaveToday = document.getElementById("TopSaveToday");

//elimentos aun no existentes
let mainContainer; //se utilizara para posicionar
const headerProductslist = document.getElementsByClassName("headerProductslist")
//lista de todas las categorias 0-6
const CardProductsList = document.getElementsByClassName("CardProductsList");

//const productContainer = document.getElementsByClassName("productContainer");

//eventos 

document.addEventListener('DOMContentLoaded', (e) => {
  descuento();
  demasCategorias();
  handleCreateArticle();
})

//mostrar primera categoria
category1.addEventListener('click', (e) => {
  console.log("me undiste 1");
  e.preventDefault();
  handleToggleArticle();
  CardProductsList[0].classList.remove("hidden");
  console.log("funciono 1");
});
category2.addEventListener('click', (e) => {
  e.preventDefault();
  handleToggleArticle();

  CardProductsList[1].classList.remove("hidden");
  console.log("me undiste 2");
});
category3.addEventListener('click', (e) => {
  e.preventDefault();
  handleToggleArticle();

  CardProductsList[2].classList.remove("hidden");
  console.log("me undiste 3");
});
category4.addEventListener('click', (e) => {
  e.preventDefault();
  handleToggleArticle();

  CardProductsList[3].classList.remove("hidden");
  console.log("me undiste 4");
});
category5.addEventListener('click', (e) => {
  e.preventDefault();
  handleToggleArticle();

  CardProductsList[4].classList.remove("hidden");
  console.log("me undiste 5");
});
category6.addEventListener('click', (e) => {
  e.preventDefault();
  handleToggleArticle();

  CardProductsList[5].classList.remove("hidden");
  console.log("me undiste 6");
});
category7.addEventListener('click', (e) => {
  e.preventDefault();
  handleToggleArticle();

  CardProductsList[6].classList.remove("hidden");
  console.log("me undiste 7");
});

//funciones de eventos

//ocultar todas las categorias

const handleToggleArticle = () => {
  headerProductslist[0].classList.add('hidden');
  for (let i = 0; i < CardProductsList.length; i++) {
    CardProductsList[i].classList.add('hidden');
  }
}

//crea la lista de articulos en la main page
const handleCreateArticle = () => {
  stockFItems.forEach(product => {

    //crear elementos de las carta de productos
    const productContainer = document.createElement("div");
    const productFigure = document.createElement("figure");
    const productImage = document.createElement("img");
    const productInfo = document.createElement("div");
    const productType = document.createElement("p");
    const productName = document.createElement("h3");
    const productWeight = document.createElement("p");
    const productPrice = document.createElement("p");

    //seleccionar la categoria a la que ira el producto
    if (product.itemType == "Vegetables" || product.itemType == "Fruits") {
      mainContainer = CardProductsList[0];

    } else if (product.itemType == "Beverages") {
      mainContainer = CardProductsList[1];

    } else if (product.itemType == "Meats" || product.itemType == "Fish") {
      mainContainer = CardProductsList[2];

    } else if (product.itemType == "Frozen Foods") {
      mainContainer = CardProductsList[3];

    } else if (product.itemType == "Biscuits" || product.itemType == "Snacks") {
      mainContainer = CardProductsList[4];

    } else if (product.itemType == "Staples") {
      mainContainer = CardProductsList[5];

    } else {
      mainContainer = CardProductsList[6];
    }

    //propiedad de su articulo principal

    //darle propiedades
    productContainer.setAttribute('id', product.itemId)
    productImage.src = product.itemImage;
    productImage.setAttribute('alt', product.itemName);
    productType.innerText = product.itemType;
    productName.innerText = product.itemName;
    productWeight.innerText = product.itemWeight;
    productPrice.innerText = `$ ${product.itemPrice}`;

    //darle clases
    productContainer.classList.add('productContainer')

    productFigure.classList.add("productFigure");
    productImage.classList.add("productImage");

    productInfo.classList.add("productInfo");
    productType.classList.add("productType");
    productName.classList.add("productName");
    productWeight.classList.add("productWeight");
    productPrice.classList.add("productPrice");

    //posicionarlos en el HTML
    mainContainer.appendChild(productContainer)
    productContainer.appendChild(productFigure);
    productFigure.appendChild(productImage);
    productContainer.appendChild(productInfo);
    productInfo.appendChild(productType);
    productInfo.appendChild(productName);
    productInfo.appendChild(productWeight);
    productInfo.appendChild(productPrice);
  }
  )
};

//crear la lista de descuentos
const descuento = () => {
  headerProductslist[0].innerHTML = `
          <h3>Top Save Today</h3>
          <img src="" alt="HrPlant">
          <p>Dont miss this opportunity at a special discount just for this week.</p>
          <button><img src="" alt="reloj"> Expires in: 349:3:45:37 </button>
`
};

const demasCategorias = () => {
  TopSaveToday.innerHTML += `
  <article id="CardProductsList1" class="CardProductsList hidden">
  </article>
  <article id="CardProductsList2" class="CardProductsList hidden">
  </article>
  <article id="CardProductsList3" class="CardProductsList hidden">
  </article>
  <article id="CardProductsList4" class="CardProductsList hidden">
  </article>
  <article id="CardProductsList5" class="CardProductsList hidden">
  </article>
  <article id="CardProductsList6" class="CardProductsList hidden">
  </article>
  <article id="CardProductsList7" class="CardProductsList hidden">
  </article>
  `
}



