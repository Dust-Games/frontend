<template>
  <div class="profile">
    <h1 class="profile__title">ПРОФИЛЬ</h1>
    <div class="profile__block1">
      <div class="profile__avatar-wrapper">
        <img class="profile__avatar" :src="profile.avatar" />
      </div>
      <div class="profile__block1-info">
        <p class="profile__nickname">{{ profile.nickname }}</p>
        <div class="profile__connections">
          <span class="profile__connections-text">Соцсети: </span>
          <div
            class="profile__connection"
            v-for="(connection, index) in connections"
            :key="index"
          >
            <router-link
              class="profile__icon"
              :class="connection.icon"
              :to="connection.to"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="profile__block">
      <div class="profile__achievements">
        <p>Ачивки</p>
        <p>Какие-то ачивки.</p>
      </div>
      <div class="profile__personal-info">
        <p class="profile__rating">
          <span class="profile__rating-title">Уровень аккаунта: </span>
          <span class="profile__rating-text">
            {{ profile.level }}
          </span>
        </p>
        <p class="profile__rating">
          <span class="profile__rating-title">Рейтинг: </span>
          <span class="profile__rating-text">
            {{ profile.rating.toLocaleString('ru') }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Profile',

  data() {
    return {
      profile: {
        avatar: '@/assets/logo.png',
        nickname: 'Nagibator',
        level: 2,
        rating: 1234,
      },
      connections: [
        { icon: 'icon-cog', to: '' },
        { icon: 'icon-cog', to: '' },
        { icon: 'icon-cog', to: '' },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.profile {
  color: $white;
  text-align: left;
  padding: 30px;
  max-width: 1080px;
  margin: 0 auto;

  &__block {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  &__block1 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding-bottom: 30px;

    & > * {
      flex: 1;
    }
  }

  &__avatar {
    max-width: 100px;
    display: block;

    &-wrapper {
      margin: auto;
    }
  }

  &__connection {
    display: inline;

    & + & {
      padding-left: 10px;
    }
  }

  &__personal-info {
    background: $gray-light;
    padding: 20px;
    color: $gray-darkest;
    flex: 2;
  }

  &__achievements {
    padding: 20px;
    flex: 1;
  }
}
</style>
