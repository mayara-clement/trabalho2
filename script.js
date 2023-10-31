document.addEventListener('DOMContentLoaded', function () {
  const mangasData = {
    Mangas: {
      'One Piece': [
        {
          imagem: 'assets/images/onepiece1.png',
          nome: 'One Piece Vol. 1',
          valor: 9.99
        },
        {
          imagem: 'assets/images/onepiece2.png',
          nome: 'One Piece Vol. 2',
          valor: 9.99
        },
        {
          imagem: 'assets/images/onepiece3.png',
          nome: 'One Piece Vol. 3',
          valor: 9.99
        },
        {
          imagem: 'assets/images/onepiece4.png',
          nome: 'One Piece Vol. 4',
          valor: 9.99
        },
        {
          imagem: 'assets/images/onepiece5.png',
          nome: 'One Piece Vol. 5',
          valor: 9.99
        },
        {
          imagem: 'assets/images/onepiece6.png',
          nome: 'One Piece Vol. 6',
          valor: 9.99
        }
      ],
      Naruto: [
        {
          imagem: 'assets/images/naruto1.png',
          nome: 'Naruto Vol. 1',
          valor: 8.99
        },
        {
          imagem: 'assets/images/naruto2.png',
          nome: 'Naruto Vol. 2',
          valor: 8.99
        },
        {
          imagem: 'assets/images/naruto3.png',
          nome: 'Naruto Vol. 3',
          valor: 8.99
        },
        {
          imagem: 'assets/images/naruto4.png',
          nome: 'Naruto Vol. 4',
          valor: 8.99
        },
        {
          imagem: 'assets/images/naruto5.png',
          nome: 'Naruto Vol. 5',
          valor: 8.99
        },
        {
          imagem: 'assets/images/naruto6.png',
          nome: 'Naruto Vol. 6',
          valor: 8.99
        }
      ],
      Bleach: [
        {
          imagem: 'assets/images/bleach1.png',
          nome: 'Bleach Vol. 1',
          valor: 7.99
        },
        {
          imagem: 'assets/images/bleach2.png',
          nome: 'Bleach Vol. 2',
          valor: 7.99
        },
        {
          imagem: 'assets/images/bleach3.png',
          nome: 'Bleach Vol. 3',
          valor: 7.99
        },
        {
          imagem: 'assets/images/bleach4.png',
          nome: 'Bleach Vol. 4',
          valor: 7.99
        },
        {
          imagem: 'assets/images/bleach5.png',
          nome: 'Bleach Vol. 5',
          valor: 7.99
        },
        {
          imagem: 'assets/images/bleach6.png',
          nome: 'Bleach Vol. 6',
          valor: 7.99
        }
      ],
      Inuyasha: [
        {
          imagem: 'assets/images/Inuyasha1.png',
          nome: 'Inuyasha Vol. 1',
          valor: 10.99
        },
        {
          imagem: 'assets/images/Inuyasha2.png',
          nome: 'Inuyasha Vol. 2',
          valor: 10.99
        },
        {
          imagem: 'assets/images/Inuyasha3.png',
          nome: 'Inuyasha Vol. 3',
          valor: 10.99
        },
        {
          imagem: 'assets/images/Inuyasha4.png',
          nome: 'Inuyasha Vol. 4',
          valor: 10.99
        },
        {
          imagem: 'assets/images/Inuyasha5.png',
          nome: 'Inuyasha Vol. 5',
          valor: 10.99
        },
        {
          imagem: 'assets/images/Inuyasha6.png',
          nome: 'Inuyasha Vol. 6',
          valor: 10.99
        }
      ],
      'One Punch-Man': [
        {          
          imagem: 'assets/images/OnePunchMan1.png',
          nome: 'My Hero Academia Vol. 1',
          valor: 11.99
        },
        {
          imagem: 'assets/images/OnePunchMan2.png',
          nome: 'My Hero Academia Vol. 2',
          valor: 11.99
        },
        {
          imagem: 'assets/images/OnePunchMan3.png',
          nome: 'My Hero Academia Vol. 3',
          valor: 11.99
        },
        {
          imagem: 'assets/images/OnePunchMan4.png',
          nome: 'My Hero Academia Vol. 4',
          valor: 11.99
        },
        {
          imagem: 'assets/images/OnePunchMan5.png',
          nome: 'My Hero Academia Vol. 5',
          valor: 11.99
        },
        {
          imagem: 'assets/images/OnePunchMan6.png',
          nome: 'My Hero Academia Vol. 6',
          valor: 11.99
        }
      ],
      'HunterxHunter': [
        {          
          imagem: 'assets/images/hunterhunter1.png',
          nome: 'Death Note Vol. 1',
          valor: 9.5
        },
        {
          imagem: 'assets/images/hunterhunter2.png',
          nome: 'Death Note Vol. 2',
          valor: 9.5
        },
        {
          imagem: 'assets/images/hunterhunter3.png',
          nome: 'Death Note Vol. 3',
          valor: 9.5
        },
        {
          imagem: 'assets/images/hunterhunter4.png',
          nome: 'Death Note Vol. 4',
          valor: 9.5
        },
        {
          imagem: 'assets/images/hunterhunter5.png',
          nome: 'Death Note Vol. 5',
          valor: 9.5
        },
        {
          imagem: 'assets/images/hunterhunter6.png',
          nome: 'Death Note Vol. 6',
          valor: 9.5
        }
      ]
    }
  }

  const shelf = document.getElementById('product-list')

  function showProducts(category) {
    shelf.innerHTML = ''

    for (const manga of mangasData.Mangas[category]) {
      const shelfItem = document.createElement('div')
      shelfItem.classList.add('shelf-item')

      shelfItem.innerHTML = `
        <img class="product-image" src="${manga.imagem}" alt="${manga.nome}" />
        <p class="product-name">${manga.nome}</p>
        <p class="product-price">R$ ${manga.valor.toFixed(2)}</p>
        <button class="add-to-cart-button" onclick="addToCart('${
          manga.nome
        }', ${manga.valor}, '${manga.imagem}')">Adicionar ao Carrinho</button>
      `

      shelf.appendChild(shelfItem)
    }
  }

  const categoriasDiv = document.getElementById('categorias')
  const categorias = Object.keys(mangasData.Mangas)

  categorias.forEach(categoria => {
    const button = document.createElement('button')
    button.textContent = categoria
    button.addEventListener('click', function () {
      showProducts(categoria)
    })
    categoriasDiv.appendChild(button)
  })

  showProducts(categorias[0])
})

let cart = []

function addToCart(nome, valor, imagem) {
  cart.push({ nome, valor, imagem })
  openMiniCart()
}

function openMiniCart() {
  const miniCart = document.getElementById('mini-cart')
  miniCart.style.display = 'block'
  updateMiniCart()
}

function updateMiniCart() {
  const cartItems = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');
  let totalPrice = 0;

  cartItems.innerHTML = '';

  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <img class="product-image" src="${item.imagem}" alt="${item.nome}" />
      <div class="product-info">
        <span class="product-name">${item.nome}</span>
        <span class="product-price">R$ ${item.valor.toFixed(2)}</span>
      </div>
      <button class="remove-from-cart-button" onclick="removeFromCart(${i})">Remover</button>
    `;

    cartItems.appendChild(cartItem);

    totalPrice += item.valor;
  }

  totalPriceElement.textContent = totalPrice.toFixed(2);
}

function removeFromCart(index) {
  cart.splice(index, 1)
  updateMiniCart()
}

function closeMiniCart() {
  const miniCart = document.getElementById('mini-cart')
  miniCart.style.display = 'none'
}

document
  .getElementById('open-cart-button')
  .addEventListener('click', openMiniCart)
