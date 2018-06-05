var app = {
  view: 'catalog',
  catalog: {
    items: [
      {
        itemId: 1,
        brand: 'Ludwig',
        name: 'Black Beauty',
        price: 749.99,
        description: 'A snare drum for people with too many drumsticks.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'United States',
        imageUrl: 'https://goo.gl/ubY0QA'
      },
      {
        itemId: 2,
        name: 'Darbuka',
        brand: 'Vatan',
        price: 79.99,
        description: 'A hand drum for people who like belly dancing.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Turkey',
        imageUrl: 'https://goo.gl/Q7X6VB'
      },
      {
        itemId: 3,
        name: 'Djembe',
        brand: 'Remo',
        price: 49.99,
        description: 'A hand drum for people with dreadlocks.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'West Africa',
        imageUrl: 'https://goo.gl/iKtU8x'
      },
      {
        itemId: 4,
        name: 'Hi-Hats',
        brand: 'Paiste',
        price: 400,
        description: 'A set of hats for people who spare no expense.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Switzerland',
        imageUrl: 'https://goo.gl/LV9l8O'
      },
      {
        itemId: 5,
        name: 'Giant Step',
        brand: 'Sonor',
        price: 599,
        description: 'A pedal for metal drummers with only one foot.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Germany',
        imageUrl: 'https://goo.gl/zsFo1q'
      },
      {
        itemId: 6,
        name: 'Travis Barker Signature',
        brand: 'Zildjian',
        price: 24.99,
        description: 'A set of drumsticks from the 90s.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'United States',
        imageUrl: 'https://goo.gl/Cro3tL'
      },
      {
        itemId: 7,
        name: 'Bodhran',
        brand: 'Meinl',
        price: 129.99,
        description: 'A frame drum for people who like to jig.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Ireland',
        imageUrl: 'https://goo.gl/YNb74O'
      },
      {
        itemId: 8,
        name: 'TR-09',
        brand: 'Roland',
        price: 399,
        description: 'A drum machine for people with no desk space.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Japan',
        imageUrl: 'https://goo.gl/gJYUxz'
      }
    ]
  },
  details: {
    item: null
  },
  cart: {
    items: []
  }
}

function createElement(tagName, attributes, children) {
  var $HTMLElement = document.createElement(tagName)
  for (var key in attributes) {
    $HTMLElement.setAttribute(key, attributes[key])
  }

  children.forEach(function (child) {
    if (child instanceof Node) {
      $HTMLElement.appendChild(child)
    }
    else {
      $HTMLElement.textContent = child
    }
  })

  return $HTMLElement
}

function currencyFormat(price) {
  var priceStr = price.toString()
  if (priceStr[priceStr.length - 3] !== '.') {
    priceStr += '.00'
  }
  return '$' + priceStr
}

function renderCard(item) {
  return createElement('div', { class: 'card', style: 'width: 18rem;', 'data-item-id': item.itemId }, [
    createElement('img', { class: 'card-img-top', src: item.imageUrl, alt: 'Card image cap' }, []),
    createElement('div', { class: 'card-body' }, [
      createElement('h5', { class: 'card-title' }, [item.brand]),
      createElement('p', { class: 'card-text item-name' }, [item.name]),
      createElement('p', { class: 'card-text' }, [currencyFormat(item.price)])
    ])
  ])
}

function renderCatalog(catalog) {
  var $container = createElement('div', { class: 'container' }, [])
  var $row = createElement('div', { class: 'row' }, [])

  catalog.items.forEach((item) => {
    var $item = createElement('div', { class: 'col-3' }, [renderCard(item)])
    $row.appendChild($item)
  })

  $container.appendChild($row)
  return $container
}

function renderDetails(item) {
  return createElement('div', { class: 'container' }, [
    createElement('div', { class: 'row' }, [
      createElement('div', { class: 'col-4' }, [
        createElement('img', { class: 'card-img-top', src: item.imageUrl, alt: 'Card image cap' }, [])
      ]),
      createElement('div', { class: 'col-8' }, [
        createElement('h5', { class: 'card-title' }, [item.brand]),
        createElement('p', { class: 'card-text item-name' }, [item.name]),
        createElement('p', { class: 'card-text item-description' }, [item.description]),
        createElement('p', { class: 'card-text item-details' }, [item.details]),
        createElement('p', { class: 'card-text item-origin' }, [item.origin]),
        createElement('p', { class: 'badge' }, [currencyFormat(item.price)]),
        createElement('button', { class: 'btn btn-primary', id: 'add-to-cart' }, ['Add to Cart'])
      ])
    ])
  ])
}

function renderCart(cart) {
  return createElement('div', { class: 'nav-item' }, [
    'Cart: ',
    createElement('span', { class: 'cart-number' }, [cart.items.length])
  ])
}

function getItem(items, itemId) {
  return items.filter((item) => item.itemId === itemId)[0]
}

function showContainer(view) {
  var $visible = document.querySelector('[data-view=' + view + ']')
  var $hidden = document.querySelector('[data-view]:not([data-view=' + view + '])')
  $visible.classList.remove('hidden')
  $hidden.classList.add('hidden')
}

function renderApp(app) {
  showContainer(app.view)

  if (app.view === 'catalog') {
    $catalogView.innerHTML = ''
    $catalogView.appendChild(renderCatalog(app.catalog))
  }
  else if (app.view === 'details') {
    $detailsView.innerHTML = ''
    $detailsView.appendChild(renderDetails(app.details.item))
  }

  $cart.innerHTML = ''
  $cart.appendChild(renderCart(app.cart))

}

var $catalogView = document.querySelector("[data-view='catalog']")
var $detailsView = document.querySelector("[data-view='details']")
var $cart = document.querySelector('.cart-container')

renderApp(app)

$catalogView.addEventListener('click', (event) => {
  var $closestItem = event.target.closest('.card')
  var clickedItemId = parseInt($closestItem.dataset.itemId, 10)

  if ($closestItem) {
    app.view = 'details'
    app.details.item = getItem(app.catalog.items, clickedItemId)
    renderApp(app)
  }

})

$detailsView.addEventListener('click', (event) => {
  var $cartBtn = document.querySelector('#add-to-cart')

  if (event.target === $cartBtn) {
    app.cart.items.push(app.details.item)
    renderApp(app)
  }

})
