// // Using fetch for simplicity
// fetch('products.json')
//   .then(response => response.json())
//   .then(products => {
//     const output = products.map(item => `
//       <div class="product">
//         <img src="${item.image}" alt="${item.description}">
//         <p class="title">${item.title}</p>
//         <p class="description">${item.description}</p>
//         <p class="price">
//           <span>${item.price}</span>
//           <span>&euro;</span>
//         </p>
//         <p class="cart"> meer infromatie  <i class="bx bx-cart-alt"></i></p>
//       </div>
//     `).join('');

