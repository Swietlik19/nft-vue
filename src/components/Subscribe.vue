<template>
  <section class="section subscribe">
    <div class="container">

      <div class="subscribe__wrap">
        <picture>
          <source srcset="img/subscribe@2x.webp 2x, img/subscribe.webp 1x" type="image/webp" media="(min-width: 1024px)">
          <source srcset="img/subscribe@2x.jpg 2x, img/subscribe.jpg 1x" type="image/jpeg" media="(min-width: 1024px)">
          <source srcset="img/subscribe-mobile@2x.webp 2x, img/subscribe-mobile.webp 1x" type="image/webp">
          <source srcset="img/subscribe-mobile@2x.jpg 2x, img/subscribe-mobile.jpg 1x" type="image/jpeg">
          <img loading="lazy" src="subscribe.jpg" class="subscribe__img" width="315" height="255" alt="A man in a spacesuit reading a newspaper">
        </picture>

        <div class="subscribe__content">
          <div class="page-heading subscribe__title">
            <h2 class="page-title page-title--capitalized">Join our weekly digest</h2>
            <p class="page-desc">Get exclusive promotions &amp; updates straight to your inbox.</p>
          </div>

          <form action="#" class="form subscribe__form">
            <div class="form__wrap form__wrap--desktop">
              <label class="form__label">
                <input class="input-reset form__input" type="email" id="email" name="email" placeholder="Enter your email here" required>
              </label>

              <button class="btn-reset btn btn--accent subscribe__btn" type="submit">
                <svg class="btn__icon">
                  <use xlink:href="img/sprite.svg#envelope"></use>
                </svg>
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>