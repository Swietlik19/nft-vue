<template>
  <section class="section cta">
    <div class="container">
      <div class="cta__wrap flex">
        <div class="cta__top">
          <div class="author cta__author">
            <picture>
              <source srcset="img/creator-7.webp" type="image/webp">
              <source srcset="img/creator-7.jpg" type="image/jpeg">
              <img loading="lazy" src="img/creator-7.jpg" class="author__img" width="24" height="24" alt="An avatar man">
            </picture>

            <span class="author__name">Shroomie</span>
          </div>
        </div>

        <div class="cta__content">
          <div class="cta__info">
            <h2 class="cta__title">
              Magic Mashrooms
            </h2>

            <div class="cta__btns cta__btns--desktop">
              <a href="#" class="btn-reset btn btn--white btn--big">
                <svg class="btn__icon">
                  <use xlink:href="img/sprite.svg#eye"></use>
                </svg>
                See NFT
              </a>
            </div>
          </div>
          <div class="countdown cta__countdown js--countdown" data-deadline="2023-04-13 00:00">
            <span class="countdown__text">Auction ends in:</span>
            <ul class="list-reset countdown__list">
              <li class="countdown__item">
                <span class="countdown__num js--countdown-hours">59</span>
                <span class="countdown__text">Hours</span>
              </li>
              <li class="countdown__item">
                <span class="countdown__num js--countdown-minutes">59</span>
                <span class="countdown__text">Minutes</span>
              </li>
              <li class="countdown__item">
                <span class="countdown__num js--countdown-seconds">59</span>
                <span class="countdown__text">Seconds</span>
              </li>
            </ul>
          </div>

          <div class="cta__btns cta__btns--mobile">
            <a href="#" class="btn-reset btn btn--white btn--big">
              <svg class="btn__icon">
                <use xlink:href="img/sprite.svg#eye"></use>
              </svg>
              See NFT
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>