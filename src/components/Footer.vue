<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__top grid">
        <div class="footer__col">
          <a class="logo footer__logo">
            <img loading="lazy" src="img/logo.svg" alt="logo" />
          </a>

          <div class="footer__contacts">
            <p class="footer__text footer__text--margined">Join our community</p>
            <ul class="list-reset socials footer__socials">
              <li class="socials__item">
                <a class="socials__link" href="#" target="_blank" rel="nofollow">
                  <svg class="socials__icon">
                    <use xlink:href="img/sprite.svg#discord"></use>
                  </svg>
                </a>
              </li>

              <li class="socials__item">
                <a class="socials__link" href="#" target="_blank" rel="nofollow">
                  <svg class="socials__icon">
                    <use xlink:href="img/sprite.svg#youtube"></use>
                  </svg>
                </a>
              </li>

              <li class="socials__item">
                <a class="socials__link" href="#" target="_blank" rel="nofollow">
                  <svg class="socials__icon">
                    <use xlink:href="img/sprite.svg#twitter"></use>
                  </svg>
                </a>
              </li>

              <li class="socials__item">
                <a class="socials__link" href="#" target="_blank" rel="nofollow">
                  <svg class="socials__icon">
                    <use xlink:href="img/sprite.svg#instagram"></use>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="footer__col">
          <h3 class="footer__title">Explore</h3>

          <ul class="list-reset footer__menu">
            <li class="footer__menuItem">
              <a class="footer__menuLink" href="#">Marketplace</a>
            </li>
            <li class="footer__menuItem">
              <a class="footer__menuLink" href="#">Rankings</a>
            </li>
            <li class="footer__menuItem">
              <a class="footer__menuLink" href="#">Connect a wallet</a>
            </li>
          </ul>
        </div>

        <div class="footer__col">
          <h3 class="footer__title footer__title--capitalized">Join our weekly digest</h3>

          <p class="footer__text">Get exclusive promotions &amp; updates straight to your inbox.</p>

          <form action="#" class="form footer__form">
            <div class="form__wrap form__wrap--tablet">
              <label class="form__label">
                <input class="input-reset form__input" type="email" id="email" name="email" placeholder="Enter your email here" required>
              </label>

              <button class="btn-reset btn btn--accent footer__btn" type="submit">
                <svg class="btn__icon">
                  <use xlink:href="img/sprite.svg#envelope"></use>
                </svg>
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>

      <div class="footer__bottom">
        <p class="footer__copywright">Ⓒ NFT Market. Use this template freely.</p>
      </div>
    </div>
  </footer>
</template>