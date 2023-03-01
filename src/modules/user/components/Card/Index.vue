<template>
  <div class="card">
    <div class="card__top-actions">
      <div class="card__crystals">
        <div class="card__crystal">1</div>
        <div class="card__crystal">1</div>
        <div class="card__crystals-break" />
        <div class="card__crystal">1</div>
      </div>

      <div class="card__id">
        <div class="corner-wrapper">
          <div class="corner" />
        </div>

        <div class="card__id-block" />

        <span class="card__id-value">00000000 #</span>
      </div>
    </div>

    <div class="card__img-wrapper">
      <img class="card__img" :src="card.img" draggable="false" />
    </div>

    <div class="card__title">
      <!-- class="card__title-bottom-block" -->

      <svg
        class="card__title-bottom-block"
        width="310"
        height="70"
        viewBox="0 0 310 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_b_0_1)">
          <path
            d="M17.5694 52.3859C19.0169 56.0722 19.7406 57.9154 21.2697 58.9577C22.7987 60 24.7789 60 28.7392 60H277.28C281.175 60 283.123 60 284.639 58.9847C286.154 57.9695 286.895 56.168 288.377 52.5651L303.186 16.5651C306.269 9.06899 307.811 5.32095 306.029 2.66048C304.246 -2.86102e-06 300.194 -2.86102e-06 292.088 -2.86102e-06H14.6037C6.62156 -2.86102e-06 2.63047 -2.86102e-06 0.844171 2.62047C-0.942134 5.24094 0.516558 8.9559 3.43394 16.3858L17.5694 52.3859Z"
            fill="#FFE945"
            fill-opacity="0.8"
          />
          <path
            d="M28.7392 59.5H277.28C279.238 59.5 280.668 59.4993 281.798 59.376C282.916 59.2541 283.694 59.016 284.361 58.5693C285.027 58.1227 285.544 57.4935 286.082 56.506C286.625 55.5078 287.17 54.1864 287.915 52.3749L302.724 16.3749C304.272 12.6116 305.41 9.84109 305.947 7.67889C306.482 5.5264 306.389 4.09602 305.613 2.93877C304.838 1.78152 303.551 1.15159 301.357 0.827179C299.153 0.501308 296.157 0.499996 292.088 0.499996H14.6037C10.5962 0.499996 7.64719 0.501305 5.47352 0.822193C3.3102 1.14156 2.03466 1.76175 1.25731 2.90209C0.479967 4.04244 0.368883 5.45641 0.86228 7.58679C1.35804 9.72736 2.43466 12.4729 3.89935 16.2031L18.0348 52.2031C18.7626 54.0566 19.2943 55.4088 19.8315 56.4306C20.363 57.4415 20.8786 58.086 21.5513 58.5446C22.2239 59.0031 23.0123 59.2475 24.1475 59.3727C25.295 59.4993 26.748 59.5 28.7392 59.5Z"
            stroke="#FFE945"
            stroke-opacity="0.6"
          />
        </g>
        <g filter="url(#filter1_b_0_1)">
          <path
            d="M19.6399 17.602C21.0898 13.9213 21.8147 12.0809 23.3428 11.0405C24.871 10 26.849 10 30.8049 10H280.21C284.102 10 286.048 10 287.562 11.0134C289.077 12.0268 289.819 13.8253 291.303 17.4225L306.159 53.4225C309.254 60.9231 310.802 64.6734 309.02 67.3367C307.238 70 303.181 70 295.066 70H16.6243C8.63388 70 4.63867 70 2.85262 67.3768C1.06656 64.7537 2.5308 61.0365 5.45927 53.602L19.6399 17.602Z"
            fill="#FFE945"
            fill-opacity="0.3"
          />
          <path
            d="M30.8049 10.5H280.211C282.167 10.5 283.595 10.5007 284.723 10.6237C285.84 10.7454 286.618 10.9831 287.284 11.4289C287.95 11.8748 288.467 12.5029 289.005 13.4887C289.549 14.4853 290.095 15.8046 290.841 17.6132L305.697 53.6132C307.251 57.3787 308.393 60.151 308.933 62.3147C309.471 64.4687 309.379 65.9002 308.604 67.0587C307.829 68.2171 306.541 68.8477 304.345 69.1725C302.138 69.4987 299.14 69.5 295.066 69.5H16.6243C12.6127 69.5 9.66054 69.4987 7.48485 69.1775C5.31948 68.8578 4.04312 68.2369 3.26591 67.0954C2.4887 65.9539 2.37884 64.5389 2.87498 62.407C3.3735 60.265 4.45423 57.5178 5.92448 53.7853L20.1051 17.7853C20.8341 15.9346 21.3667 14.5845 21.9044 13.5643C22.4363 12.555 22.952 11.9115 23.6242 11.4538C24.2965 10.996 25.0842 10.752 26.2182 10.627C27.3646 10.5007 28.8159 10.5 30.8049 10.5Z"
            stroke="#FFE945"
            stroke-opacity="0.6"
          />
        </g>
        <defs>
          <filter
            id="filter0_b_0_1"
            x="-2.93555"
            y="-3"
            width="312.72"
            height="66"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImage" stdDeviation="1.5" />
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_0_1"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_b_0_1"
            x="-0.925293"
            y="7"
            width="313.699"
            height="66"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImage" stdDeviation="1.5" />
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_0_1"
              result="shape"
            />
          </filter>
        </defs>
      </svg>

      <span class="card__title-text">ARRA_Arrbitrator</span>
    </div>

    <div class="card__bottom-actions">
      <div class="card__bottom-actions-left">
        <div class="durability">
          <span class="durability__text">Durability</span>
          <span class="durability__value">100 / 100</span>
        </div>

        <div class="energy">
          <span class="energy__text">Energy</span>
          <span class="energy__value">?? / ??</span>
        </div>

        <div class="card-mint">
          <span class="card-mint__text">Card mint</span>
          <span class="card-mint__value">?? / ??</span>
        </div>
      </div>

      <div class="card__bottom-actions-right">
        <div class="card__bottom-actions-right-points points">
          <span class="points__text">Points</span>
          <span class="points__value">1.0</span>
        </div>

        <div class="card__bottom-actions-right-attributes attributes">
          <div
            v-for="item in [
              { title: 'Efficiency', value: '1.0' },
              { title: 'Luck', value: '0.0' },
              { title: 'Charger', value: '1.0' },
              { title: 'Resilience', value: '4.0' }
            ]"
            :key="item.title"
            class="attributes__item"
          >
            <div class="attributes__item-top">
              <div class="attributes__item-plus">+</div>
              <span class="attributes__item-text">{{ item.title }}</span>
            </div>

            <span class="attributes__item-value">{{ item.value }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "",

  props: {
    card: { type: Object, required: true }
  }
});
</script>

<style lang="scss" scoped>
@import "corner.mixin.scss";

.card {
  width: max-content;
  height: max-content;

  background: $from-black-to-red-vert;
  border-radius: 10px;
  user-select: none;
  padding-top: 30px;
  position: relative;

  &__top-actions {
    position: absolute;
    top: 19px;
    left: 0;

    width: 100%;
    padding-left: 18px;

    display: flex;
    justify-content: space-between;
  }

  &__crystals {
    display: flex;
    flex-wrap: wrap;

    &-break {
      flex: 100%;
    }
  }

  &__crystal {
    display: flex;
    align-items: center;
    justify-content: center;

    border: 3px solid #d9cd83;
    border-radius: 6px;
    background-color: rgba(#f5f5f5, 0.6);
    backdrop-filter: blur(4px);
    width: 47px;
    height: 47px;

    margin-right: 13px;
    margin-bottom: 13px;
  }

  &__id {
    display: flex;
    align-items: flex-end;

    position: relative;

    height: min-content;

    .corner {
      @include corner(rgba(#f5f5f5, 0.6), true, 39px);
    }

    &-block {
      border-top-left-radius: 10px;
      background-color: rgba(#f5f5f5, 0.6);
      backdrop-filter: blur(4px);
      width: 115px;
      height: 37px;

      margin-left: -3px;
      margin-right: -3px;

      border: 3px solid #e1c25a;
      clip-path: polygon(3px 0, calc(100% - 3px) 0, calc(100% - 3px) 100%, 3px 100%);
    }

    &-value {
      position: absolute;
      top: 8px;
      left: 22px;
      color: $black;
      padding-left: 5px;

      font-size: 18px;
    }
  }

  &__img {
    width: 280px;
    height: 280px;

    user-select: none;

    &-wrapper {
      display: flex;
      align-items: center;

      margin: 0 30px;
      border: 8px solid $black;
      border-radius: 10px;
    }
  }

  &__title {
    position: relative;
    margin: -25px 20px 0;
    height: 70px;

    &-bottom-block,
    &-top-block,
    &-text {
      position: absolute;
    }

    // &-bottom-block,
    // &-top-block {
    //   width: 100%;
    //   height: 60px;
    // }

    &-bottom-block {
      // border: 3px solid rgba(#ffe945, 0.6);
      // background-color: rgba(#ffe945, 0.6);
      // backdrop-filter: blur(3px);

      // clip-path: polygon(0 0, 100% 0, 90% 100%, 10% 100%);

      // position: relative;
      // width: 100%;
      // height: 60px;
      // overflow: hidden;

      // &:after {
      //   content: "";
      //   position: absolute;
      //   top: 0;
      //   left: 0;
      //   width: 200%;
      //   height: 100%;
      //   background: red;
      //   border-radius: 20px 0 0 0;
      //   transform-origin: 100% 100%;
      //   transform: perspective(400px) rotateX(45deg);
      // }
    }

    &-top-block {
      margin-top: 10px;

      // border: 3px solid rgba(#ffe945, 0.6);
      // background-color: rgba(#ffe945, 0.3);
      // backdrop-filter: blur(3px);

      // clip-path: polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%);
    }

    &-text {
      color: $black;
      font-size: 30px;
      text-align: center;
      height: 70px;
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &__bottom-actions {
    display: flex;
    width: 100%;
    margin-top: -10px;

    &-left {
      flex-grow: 5;

      padding-top: 20px;

      border-right: 2px solid #e1c25a;
      border-top: 2px solid #e1c25a;
      border-top-right-radius: 25px;

      background: linear-gradient(
        48.51deg,
        rgba(252, 96, 128, 0.6) 29.61%,
        rgba(255, 236, 68, 0.6) 86.61%
      );
    }

    &-right {
      flex-grow: 4;

      margin-left: 20px;

      &-points {
        margin-bottom: 10px;
      }

      .points {
        padding: 16px 15px 12px;

        border-left: 2px solid #e1c25a;
        border-top: 2px solid #e1c25a;
        border-bottom: 2px solid #e1c25a;
        border-top-left-radius: 25px;
        border-bottom-left-radius: 5px;

        background: linear-gradient(
          90deg,
          rgba(252, 96, 128, 0.6) 0%,
          rgba(255, 236, 68, 0.6) 100%
        );

        display: flex;
        justify-content: space-between;

        &__text {
        }

        &__value {
          font-weight: bold;
          font-size: 24px;
        }
      }

      .attributes {
        border-left: 2px solid #e1c25a;
        border-top: 2px solid #e1c25a;
        border-top-left-radius: 5px;

        background: linear-gradient(
          90deg,
          rgba(252, 96, 128, 0.6) 0%,
          rgba(255, 236, 68, 0.6) 100%
        );
        padding: 12px 15px 7px 0;

        &__item {
          display: flex;
          justify-content: space-between;

          margin-bottom: 5px;

          &-top {
            display: flex;
          }

          &-plus {
            width: 30px;
            margin-left: -10px;
            border-radius: 6px;
            background-color: rgba(#f5f5f5, 0.6);
            backdrop-filter: blur(4px);
            font-size: 18px;

            display: flex;
            align-items: center;
            justify-content: center;
          }

          &-text {
            margin-left: 10px;
          }

          &-value {
            font-weight: bold;
            font-size: 20px;
          }
        }
      }
    }
  }
}
</style>
