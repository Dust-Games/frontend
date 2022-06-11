<template>
  <DefaultLayout>
    <div class="cards">
      <h3 class="cards__title">{{ $t("My slots") }}</h3>

      <div class="cards__slots">
        <template v-for="slot in slots">
          <div
            v-if="slot.unlocked"
            :key="slot.id"
            :data-slot-id="slot.id"
            class="cards__slot cards__slot-unlocked droppable"
            :class="{ active: hoveringSlotId == slot.id }"
          >
            <img
              v-if="slot.cardId"
              class="cards__slot-unlocked-img"
              :src="getCard(slot.cardId).img"
            />

            <template v-else>
              <i class="cards__slot-unlocked-icon icon-exit_to_app" />
              <span class="cards__slot-unlocked-text">{{ $t("Vacant") }}</span>
            </template>
          </div>

          <div v-else :key="slot.id" id="slot.id" class="cards__slot cards__slot-locked">
            <i class="cards__slot-locked-icon icon-lock" />
            <div class="cards__slot-locked-action" :class="{ 'can-unlock': canUnlock(slot) }">
              {{ numberWithCommas(slot.cost) }}
              <i class="cards__slot-locked-action-money-icon icon-dust" />
            </div>
          </div>
        </template>
      </div>

      <h3 class="cards__title">{{ $t("My cards") }}</h3>

      <div class="cards__description-cards">{{ $t("Drag and drop cards into vacant slots") }}</div>
      <div class="cards__cards">
        <div v-for="card in cards" :key="card.id" class="cards__card-wrapper">
          <img
            class="cards__card"
            :class="{ dragging: draggingCardId == card.id }"
            :data-card-id="card.id"
            :src="image"
            :draggable="false"
            @mousedown="onDragStart($event)"
            @mousemove="onDragMove($event)"
            @mouseup="onDragEnd($event)"
            @mouseleave="onDragEnd($event)"
          />
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<i18n>
{
  "en": {
    "My slots": "My slots",
    "My cards": "My cards",
    "Vacant": "Vacant",
    "Drag and drop cards into vacant slots": "Drag and drop cards into vacant slots"
  },
  "ru": {
    "My slots": "Мои слоты",
    "My cards": "Мои карточки",
    "Vacant": "Свободно",
    "Drag and drop cards into vacant slots": "Перетаскивайте карточки в доступные слоты"
  }
}
</i18n>

<script lang="ts">
import Vue from "vue";
import { numberWithCommas } from "@/helpers/number.helper";

interface SlotType {
  id: number;
  name: string;
  cardId: number | null;
  unlocked: boolean;
  cost: number;
}

interface CardType {
  id: number;
  img: string;
}

export default Vue.extend({
  name: "User_Cards",

  components: {
    DefaultLayout: () => import("@/layouts/Default")
  },

  data() {
    return {
      money: 12300,
      image:
        "https://i.ytimg.com/vi/TG-r-w_ix9o/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAnsgmeRwhO8fH-7ad2_VePgh00lQ",
      slots: [
        { id: 1, name: "Слот 1", cardId: null, unlocked: true, cost: 0 },
        { id: 2, name: "Слот 2", cardId: null, unlocked: false, cost: 10000 },
        { id: 3, name: "Слот 3", cardId: null, unlocked: false, cost: 100000 }
      ] as SlotType[],

      draggingCardId: null as number | null,
      hoveringSlotId: null as number | null
    };
  },

  computed: {
    cards(): CardType[] {
      return [
        { id: 1, img: this.image },
        { id: 2, img: this.image },
        { id: 3, img: this.image },
        { id: 4, img: this.image },
        { id: 5, img: this.image },
        { id: 6, img: this.image },
        { id: 7, img: this.image },
        { id: 8, img: this.image },
        { id: 9, img: this.image },
        { id: 10, img: this.image },
        { id: 11, img: this.image }
      ];
    }
  },

  methods: {
    numberWithCommas,

    canUnlock(slot: any): boolean {
      return this.money >= slot.cost;
    },

    getCard(cardId: number) {
      return this.cards.find(card => card.id == cardId);
    },

    getCardIndex(cardId: number) {
      return this.slots.findIndex(slot => slot.id == cardId);
    },

    onDragStart(event: any) {
      event.target.position = { x: event.clientX, y: event.clientY };

      const cardIdObject = event.target.attributes["data-card-id"];
      this.draggingCardId = cardIdObject ? Number(cardIdObject.value) : null;
    },

    onDragMove(event: any) {
      if (!this.draggingCardId) return;

      const dx = event.clientX - event.target.position.x;
      const dy = event.clientY - event.target.position.y;

      event.target.style.top = `${event.target.offsetTop + dy}px`;
      event.target.style.left = `${event.target.offsetLeft + dx}px`;

      event.target.position = { x: event.clientX, y: event.clientY };

      event.target.hidden = true;
      let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
      event.target.hidden = false;

      if (elemBelow) {
        let droppableBelow = elemBelow.closest(".droppable");
        if (droppableBelow) {
          const slotIdObject = droppableBelow.attributes["data-slot-id"];
          this.hoveringSlotId = slotIdObject ? Number(slotIdObject.value) : null;
        } else {
          this.hoveringSlotId = null;
        }
      } else {
        this.hoveringSlotId = null;
      }
    },

    onDragEnd(event: any) {
      if (this.hoveringSlotId) {
        const slotIndex = this.getCardIndex(this.hoveringSlotId);

        if (slotIndex != null) {
          this.slots[slotIndex].cardId = this.draggingCardId;
        }

        this.hoveringSlotId = null;
      }

      this.draggingCardId = null;

      event.target.style.top = `${0}px`;
      event.target.style.left = `${0}px`;
    }
  }
});
</script>

<style lang="scss" scoped>
@mixin gradientAnimation($start1, $start2, $end1, $end2, $transTime) {
  background-size: 100%;
  background-image: linear-gradient($start1, $start2);
  position: relative;
  z-index: 100;

  &:before {
    background-image: linear-gradient($end1, $end2);
    content: "";
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    border-radius: inherit;
    width: 100%;
    z-index: -100;
    transition: opacity $transTime;
  }

  &:hover:before {
    opacity: 1;
  }
}

/deep/.default-layout {
  &__content {
    padding: 30px 50px !important;

    @media (max-width: 800px) {
      padding: 20px 30px !important;
    }

    @media (max-width: 600px) {
      padding: 15px 15px !important;
    }
  }
}

.cards {
  display: flex;
  flex-direction: column;
  align-items: center;

  // &__title {
  //   text-align: center;
  // }

  &__slots {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    position: sticky;
    top: 0;

    z-index: 1;
    padding-top: 15px;
    margin-bottom: 25px;
    width: 100%;
    background-color: $black;
  }

  &__slot {
    margin: 0 15px 15px 0;

    // width: 160px;
    // height: 223px;
    width: 150px;
    height: 213px;
    border-radius: 14px;

    @media (max-width: 800px) {
      width: 130px;
      height: 193px;
    }

    // @media (max-width: 800px) {
    //   width: 120px;
    //   height: 120px;
    // }

    @media (max-width: 600px) {
      width: 120px;
      height: 120px;
    }

    &-unlocked {
      background-color: $primary-color-2000;
      color: $white;
      border: 2px dashed $white;
      padding: 10px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      &.active {
        transition: 0.1s;
        // border-color: $primary-color-2000;
        // background-color: $orange;
        background-color: #be3853;
      }

      &-img {
        border-radius: 5px;
        width: 100%;
        height: 100%;
      }

      &-icon {
        font-size: 55px;
        margin-bottom: 10px;

        @media (max-width: 800px) {
          font-size: 40px;
        }
      }

      &-text {
        font-size: 16px;
        margin-bottom: 10px;

        @media (max-width: 800px) {
          font-size: 13px;
          margin-bottom: 5px;
        }
      }

      &:hover {
        // cursor: pointer;
        // transition: 0.3s;
        // background-color: #be3853;
      }
    }

    &-locked {
      border: 2px solid #825b6d;
      background: $primary-color-2000;
      padding: 10px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      @media (max-width: 800px) {
        padding: 6px;
      }

      &-icon {
        font-size: 40px;
        color: #825b6d;
        flex-grow: 1;

        display: flex;
        align-items: center;
        justify-content: center;

        @media (max-width: 800px) {
          font-size: 30px;
        }
      }

      &-action {
        border-radius: 10px;
        padding: 10px;
        text-align: center;
        font-size: 13px;
        line-height: 120%;
        user-select: none;
        word-break: break-word;
        min-width: 100%;

        @media (max-width: 600px) {
          padding: 6px;
          font-size: 12px;
        }

        &.can-unlock {
          color: $white;
          @include gradientAnimation($orange, $juice, #a92a43, $orange, 0.6s);

          &:hover {
            cursor: pointer;
            transition: 0.3s;
          }
        }

        &:not(.can-unlock) {
          color: #825b6d;
          border: 1px solid #825b6d;
        }

        &-money-icon {
          font-size: 14px;
          font-weight: bold;
        }
      }
    }
  }

  &__description-cards {
    margin-bottom: 15px;
    margin-top: 10px;
    color: $gray-1000;
  }

  &__cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  &__card {
    position: absolute;
    cursor: move;
    user-select: none;

    width: 100%;
    height: 100%;
    background-color: $primary-color-2000;
    border-radius: 5px;

    &-wrapper {
      position: relative;
      // border: 1px dashed $white;
      margin: 0 15px 15px 0;

      width: 160px;
      height: 223px;

      @media (max-width: 800px) {
        width: 140px;
        height: 203px;
      }

      @media (max-width: 600px) {
        width: 100px;
        height: 163px;
      }
    }

    &.dragging {
      z-index: 100000;
    }
  }
}
</style>
