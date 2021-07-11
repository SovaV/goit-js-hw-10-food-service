import meniCardTpl from '../templates/menu-card.hbs';
import menu from './menu.json';
console.log(meniCardTpl);

const menuContainer = document.querySelector('.js-menu');
const listMenuMarkup = createMenuMarkup(menu);

menuContainer.insertAdjacentHTML('beforeend', listMenuMarkup);

function createMenuMarkup(menu) {
  return menu.map(meniCardTpl).join('');
}

// return `<li class="menu__item">
//   <article class="card">

//     <img
//     src="${image}"
//     alt="${name}"
//     class="card__image"
//     />
//     <div class="card__content">
//       <h2 class="card__name"> ${name} </h2>
//       <p class="card__price">
//         <i class="material-icons"> monetization_on </i>
//         ${price}
//       </p>
//  <p class="card__descr">
//         ${description}
//       </p>
//       <ul class="tag-list">
//         <li class="tag-list__item">${ingredients}</li>
//       </ul>
//       </div>
//       <button class="card__button button">
//       <i class="material-icons button__icon"> shopping_cart </i>
//       В корзину
//     </button>
//   </article>
// </li>`;
