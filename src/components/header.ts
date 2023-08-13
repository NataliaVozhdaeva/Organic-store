// const createCodeTemplate = (): string => {
//   return `<header class="header">
//       <nav>
//         <ul class="nav nav--header list">
//           <li class="nav-item header-logo logo">
//             <img src="./images/Logo.png" alt="logo" class="logo-img" width="37" height="54"
//               />
//               <h4 class="logo-text">Organick</h4>
//           </li>
//           <li class="nav-item">
//             <a href="" class="nav-link"></a>
//           </li>
//           <li class="nav-item"><a href="" class="nav-link link">Home</a></li>
//           <li class="nav-item"><a href="" class="nav-link link">About</a></li>
//           <li class="nav-item"><a href="" class="nav-link link">Catalog</a></li>
//           <li class="nav-item"><a href="" class="nav-link link">Log in</a></li>
//         </ul>
//       </nav>
//       <ul class="profile_container profile_container--header list">
//         <li class="profile_container-item">
//           <a href="" class="profile_container-link link">
//             <img src="./images/icons/search-icon.png" alt="search" class="search" width="56" height="56">
//           </a>
//         </li>
//         <li class="profile_container-item">
//           <a href="" class="profile_container-link link profile_container-link--cart">
//             <img src="./images/icons/cart-icon.png" alt="cart" class="cart" width="56" height="56">
//             <span class="cart">Cart (0)</span>
//           </a>
//         </li>
//         <li class="profile_container-item hidden">
//           <a href="" class="profile_container-link link">
//             <img src="./images/avatar.png" alt="profile" class="profile" width="56" height="56"">
//           </a>
//         </li>
//       </ul>
//     </header>`;
// };

export default class HeaderView {
  private container: HTMLElement;

  constructor() {
    this.container = document.createElement("header");
    this.container.classList.add("header");
    this.container.innerHTML = `
    <nav>
        <ul class="nav nav--header list">
          <li class="nav-item header-logo logo">
            <img src="./images/Logo.png" alt="logo" class="logo-img" width="37" height="54"
              />
              <h4 class="logo-text">Organick</h4>
          </li>
          <li class="nav-item">
            <a href="" class="nav-link"></a>
          </li>
          <li class="nav-item"><a href="" class="nav-link link">Home</a></li>
          <li class="nav-item"><a href="" class="nav-link link">About</a></li>
          <li class="nav-item"><a href="" class="nav-link link">Catalog</a></li>
          <li class="nav-item"><a href="" class="nav-link link">Log in</a></li>
        </ul>
      </nav>
      <ul class="profile_container profile_container--header list">
        <li class="profile_container-item">
          <a href="" class="profile_container-link link">
            <img src="./images/icons/search-icon.png" alt="search" class="search" width="56" height="56">
          </a>
        </li>
        <li class="profile_container-item">
          <a href="" class="profile_container-link link profile_container-link--cart">
            <img src="./images/icons/cart-icon.png" alt="cart" class="cart" width="56" height="56">
            <span class="cart">Cart (0)</span>
          </a>
        </li>
        <li class="profile_container-item hidden">
          <a href="" class="profile_container-link link">
            <img src="./images/avatar.png" alt="profile" class="profile" width="56" height="56"">
          </a>
        </li>
      </ul>`;
  }

  public render(): HTMLElement {
    return this.container;
  }
}
