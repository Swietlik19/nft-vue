<template>
  <section class="section discover">
    <div class="container">
      <div class="discover__wrap grid">
        <div class="discover__heading">
          <h2 class="page-title">Discover More NFTs</h2>
          <p class="page-desc">Explore new trending NFTs</p>
        </div>

        <div class="discover__btns">
          <a href="#" class="btn-reset btn btn--transparent btn--big">
            <svg class="btn__icon">
              <use xlink:href="img/sprite.svg#eye"></use>
            </svg>
            See All
          </a>
        </div>

        <ul class="list-reset discover__list grid">
          <li class="discover__item">
            <article class="example discover__example">
              <a href="#" class="example__link">
                <picture>
                  <source srcset="img/discover-1@2x.webp 2x, img/discover-1.webp 1x" type="image/webp">
                  <source srcset="img/discover-1@2x.jpg 2x, img/discover-1.jpg 1x" type="image/jpeg">
                  <img loading="lazy" src="discover-1.jpg" class="example__img" width="315" height="206" alt="A spaceship">
                </picture>

                <div class="example__content discover__content">
                  <h2 class="example__title">Distant Galaxy</h2>
                  <div class="author example__author discover__author">
                    <picture>
                      <source srcset="img/discover-creator-1.webp" type="image/webp">
                      <source srcset="img/discover-creator-1.jpg" type="image/jpeg">
                      <img loading="lazy" src="discover-creator-1.jpg" class="author__img" width="24" height="24" alt="A girl with black long hair">
                    </picture>

                    <span class="author__name">MoonDancer</span>
                  </div>

                  <ul class="list-reset prices example__prices flex">
                    <li class="prices__item">
                      <p class="prices__title">Price</p>
                      <b class="prices__sum">1.63 ETH</b>
                    </li>
                    <li class="prices__item">
                      <p class="prices__title">Highest Bid</p>
                      <b class="prices__sum">0.33 wETH</b>
                    </li>
                  </ul>
                </div>
              </a>
            </article>
          </li>

          <li class="discover__item">
            <article class="example discover__example">
              <a href="#" class="example__link">
                <picture>
                  <source srcset="img/discover-2@2x.webp 2x, img/discover-2.webp 1x" type="image/webp">
                  <source srcset="img/discover-2@2x.jpg 2x, img/discover-2.jpg 1x" type="image/jpeg">
                  <img loading="lazy" src="discover-2.jpg" class="example__img" width="315" height="206" alt="A man watching the sky">
                </picture>

                <div class="example__content discover__content">
                  <h2 class="example__title">Life on Edena</h2>
                  <div class="author example__author discover__author">
                    <picture>
                      <source srcset="img/discover-creator-2.webp" type="image/webp">
                      <source srcset="img/discover-creator-2.jpg" type="image/jpeg">
                      <img loading="lazy" src="discover-creator-2.jpg" class="author__img" width="24" height="24" alt="A man with blue eyes and a beard">
                    </picture>

                    <span class="author__name">NebulaKid</span>
                  </div>

                  <ul class="list-reset prices example__prices flex">
                    <li class="prices__item">
                      <p class="prices__title">Price</p>
                      <b class="prices__sum">1.63 ETH</b>
                    </li>
                    <li class="prices__item">
                      <p class="prices__title">Highest Bid</p>
                      <b class="prices__sum">0.33 wETH</b>
                    </li>
                  </ul>
                </div>
              </a>
            </article>
          </li>

          <li class="discover__item">
            <article class="example discover__example">
              <a href="#" class="example__link">
                <picture>
                  <source srcset="img/discover-3@2x.webp 2x, img/discover-3.webp 1x" type="image/webp">
                  <source srcset="img/discover-3@2x.jpg 2x, img/discover-3.jpg 1x" type="image/jpeg">
                  <img loading="lazy" src="discover-3.jpg" class="example__img" width="315" height="206" alt="A girl in a spacesuit">
                </picture>

                <div class="example__content discover__content">
                  <h2 class="example__title">AstroFiction</h2>
                  <div class="author example__author discover__author">
                    <picture>
                      <source srcset="img/creator-11.webp" type="image/webp">
                      <source srcset="img/creator-11.jpg" type="image/jpeg">
                      <img loading="lazy" src="creator-11.jpg" class="author__img" width="24" height="24" alt="A smiling girl with black-and-blue hair">
                    </picture>

                    <span class="author__name">Spaceone</span>
                  </div>

                  <ul class="list-reset prices example__prices flex">
                    <li class="prices__item">
                      <p class="prices__title">Price</p>
                      <b class="prices__sum">1.63 ETH</b>
                    </li>
                    <li class="prices__item">
                      <p class="prices__title">Highest Bid</p>
                      <b class="prices__sum">0.33 wETH</b>
                    </li>
                  </ul>
                </div>
              </a>
            </article>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>