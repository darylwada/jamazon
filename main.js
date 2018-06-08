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
    ],
    sorted: 0,
    menu: false
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
  return '$' + price.toFixed(2)
}

function renderCard(item) {
  return createElement('div', { class: 'col-3' }, [
    createElement('div', { class: 'card', style: 'width: 18rem;', 'data-item-id': item.itemId }, [
      createElement('img', { class: 'card-img-top', src: item.imageUrl, alt: 'Card image cap' }, []),
      createElement('div', { class: 'card-body' }, [
        createElement('h5', { class: 'card-title' }, [item.brand]),
        createElement('p', { class: 'card-text item-name' }, [item.name]),
        createElement('p', { class: 'card-text' }, [currencyFormat(item.price)])
      ])
    ])
  ])
}

function renderCatalogDropdown(catalog) {
  if (catalog.menu) {
    return [createElement('button', { class: 'btn dropdown-item', id: 'low-to-high' }, ['Low to high']),
      createElement('button', { class: 'btn dropdown-item', id: 'high-to-low' }, ['High to low'])]
  }
  else {
    return [createElement('button', { class: 'btn dropdown-item hidden', id: 'low-to-high' }, ['Low to high']),
      createElement('button', { class: 'btn dropdown-item hidden', id: 'high-to-low' }, ['High to low'])]
  }
}

function renderCatalog(catalog) {
  return createElement('div', { class: 'container' }, [
    createElement('div', { class: 'dropdown' }, [
      createElement('button', { class: 'btn dropdown-toggle', type: 'button', id: 'sort-dropdown' }, ['Sort Menu'])
    ].concat(renderCatalogDropdown(catalog))),
    createElement('div', { class: 'row' }, catalog.items.sort((a, b) => (a.price - b.price) * catalog.sorted)
      .map((item) => renderCard(item)))
  ])
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
        createElement('button', { class: 'btn btn-primary', id: 'add-to-cart' }, ['Add to Cart']),
        createElement('button', { class: 'btn btn-primary', id: 'continue-shopping' }, ['Continue Shopping'])
      ])
    ])
  ])
}

function renderCartItem(item) {
  return createElement('div', { class: 'col-6 offset-3 cart-col' }, [
    createElement('img', { class: 'cart-img', src: item.imageUrl, alt: 'Card image cap' }, []),
    createElement('h5', { class: 'card-title cart' }, [item.brand]),
    createElement('p', { class: 'card-text item-name cart' }, [item.name]),
    createElement('p', { class: 'card-text cart' }, [currencyFormat(item.price)])
  ])
}

function calculateCartTotal(cart) {
  return cart.items.reduce((acc, item) => {
    return acc + item.price
  }, 0)
}

function renderCartSummary(cart) {
  return createElement('div', { class: 'container' }, [
    createElement('h2', { class: 'cart-header text-center' }, ['Cart Summary']),
    createElement('div', {}, cart.items.map((item) => renderCartItem(item))),
    createElement('div', { class: 'col-6 offset-3' }, [
      createElement('div', { class: 'cart-item-count text-right cart-total' }, ['Items: ' + cart.items.length])
    ]),
    createElement('div', { class: 'col-6 offset-3' }, [
      createElement('div', { class: 'text-right cart-total' }, ['Total: ' + currencyFormat(calculateCartTotal(cart))])
    ]),
    createElement('button', { class: 'btn btn-primary', id: 'cart-continue-shopping' }, ['Continue Shopping']),
    createElement('button', { class: 'btn btn-primary', id: 'cart-checkout' }, ['Checkout'])
  ])
}

function renderCart(cart) {
  return createElement('div', { class: 'nav-item' }, [
    'Cart: ',
    createElement('span', { class: 'cart-number' }, [cart.items.length])
  ])
}

function renderCheckout(cart) {
  return createElement('div', { class: 'container' }, [
    createElement('form', { class: 'col-6 offset-3' }, [
      createElement('div', { class: 'form-group' }, [
        createElement('label', { for: 'form-name-input' }, ['Name']),
        createElement('input', { type: 'name', class: 'form-control', id: 'form-name-input', placeholder: 'Full Name' }, [])
      ]),
      createElement('div', { class: 'form-group' }, [
        createElement('label', { for: 'form-address-input' }, ['Address']),
        createElement('input', { type: 'address', class: 'form-control', id: 'form-address-input', placeholder: 'Street Number' }, []),
        createElement('input', { type: 'address', class: 'form-control', id: 'form-city-input', placeholder: 'City' }, []),
        createElement('input', { type: 'address', class: 'form-control', id: 'form-state-input', placeholder: 'State' }, []),
        createElement('input', { type: 'address', class: 'form-control', id: 'form-zip-input', placeholder: 'Zip Code' }, [])
      ]),
      createElement('div', { class: 'form-group' }, [
        createElement('label', { for: 'form-card-input' }, ['Credit Card']),
        createElement('input', { type: 'card', class: 'form-control', id: 'form-card-input', placeholder: 'Card Number' }, []),
        createElement('input', { type: 'card', class: 'form-control', id: 'form-cvv-input', placeholder: 'CVV' }, []),
        createElement('input', { type: 'card', class: 'form-control', id: 'form-expire-input', placeholder: 'Exp. (mm/yy)' }, [])
      ]),
      createElement('div', { class: 'cart-item-count text-right cart-total' }, ['Items: ' + cart.items.length]),
      createElement('div', { class: 'text-right cart-total' }, ['Total: ' + currencyFormat(calculateCartTotal(cart))]),
      createElement('button', { class: 'btn btn-primary', id: 'checkout-pay', type: 'submit' }, ['Pay Now'])
    ])
  ])
}

function getItem(items, itemId) {
  return items.find((item) => item.itemId === itemId)
}

function showContainer(view) {
  var $visible = document.querySelector('[data-view=' + view + ']')
  var $hidden = document.querySelectorAll('[data-view]:not([data-view=' + view + '])')
  $visible.classList.remove('hidden')
  $hidden.forEach(($node) => {
    $node.classList.add('hidden')
  })
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
  else if (app.view === 'cart') {
    $cartSummaryView.innerHTML = ''
    $cartSummaryView.appendChild(renderCartSummary(app.cart))
  }
  else if (app.view === 'checkout') {
    $checkoutView.innerHTML = ''
    $checkoutView.appendChild(renderCheckout(app.cart))
  }
  $cart.innerHTML = ''
  $cart.appendChild(renderCart(app.cart))
}

var $catalogView = document.querySelector("[data-view='catalog']")
var $detailsView = document.querySelector("[data-view='details']")
var $cartSummaryView = document.querySelector("[data-view='cart']")
var $checkoutView = document.querySelector("[data-view='checkout']")
var $cart = document.querySelector('.cart-container')

renderApp(app)

$catalogView.addEventListener('click', (event) => {
  var $closestItem = event.target.closest('.card')
  if ($closestItem) {
    var clickedItemId = parseInt($closestItem.dataset.itemId, 10)
    app.view = 'details'
    app.catalog.menu = false
    app.details.item = getItem(app.catalog.items, clickedItemId)
    renderApp(app)
  }
  if (event.target.id === 'sort-dropdown') {
    app.catalog.menu = !app.catalog.menu
    renderApp(app)
  }
  if (event.target.id === 'low-to-high') {
    app.catalog.sorted = 1
    app.catalog.menu = false
    renderApp(app)
  }
  if (event.target.id === 'high-to-low') {
    app.catalog.sorted = -1
    app.catalog.menu = false
    renderApp(app)
  }
})

$detailsView.addEventListener('click', (event) => {
  if (event.target.id === 'add-to-cart') {
    app.cart.items.push(app.details.item)
    renderApp(app)
  }
  else if (event.target.id === 'continue-shopping') {
    app.view = 'catalog'
    renderApp(app)
  }
})

$cartSummaryView.addEventListener('click', (event) => {
  if (event.target.id === 'cart-continue-shopping') {
    app.view = 'catalog'
    renderApp(app)
  }
  else if (event.target.id === 'cart-checkout') {
    app.view = 'checkout'
    renderApp(app)
  }
})

$cart.addEventListener('click', (event) => {
  app.view = 'cart'
  renderApp(app)
})

$checkoutView.addEventListener('submit', (event) => {
  event.preventDefault()
  alert('Success! Order submitted.')
})
