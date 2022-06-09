<template>
  <DefaultLayout>
    <div class="cards">
      <h3 class="cards__title">Мои слоты</h3>

      <div class="cards__slots" :list="slots" group="slots" @change="() => {}">
        <template v-for="slot in slots">
          <div
            v-if="slot.unlocked"
            :key="slot.id"
            :data-slot-id="slot.id"
            class="cards__slot cards__slot-unlocked droppable"
            :class="{ active: activeSlotId == slot.id }"
          >
            {{ slot.cardId }}
            <i class="cards__slot-unlocked-icon icon-exit_to_app" />
          </div>

          <div v-else :key="slot.id" id="slot.id" class="cards__slot cards__slot-locked">
            <i class="cards__slot-locked-icon icon-lock" />
            <div class="cards__slot-locked-action" :class="{ 'can-unlock': canUnlock(slot) }">
              Разблокировать за {{ numberWithCommas(slot.cost) }}
              <i class="cards__slot-locked-action-money-icon icon-dust" />
            </div>
          </div>
        </template>
      </div>

      <h3 class="cards__title">Мои карточки</h3>
      <div>Перетаскивайте карточки в доступные слоты.</div>

      <div class="cards__cards" :list="cards" group="slots" @change="() => {}">
        <div v-for="card in cards" :key="card.id" class="cards__card-wrapper">
          <div
            class="cards__card"
            :data-card-id="card.id"
            @mousedown="onDragStart($event)"
            @mousemove="onDragMove($event)"
            @mouseup="onDragEnd($event)"
            @mouseleave="onDragEnd($event)"
          >
            {{ card.name }}
            <i class="" />
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script lang="ts">
import Vue from "vue";
// import interact from "interactjs";
import { numberWithCommas } from "@/helpers/number.helper";

export default Vue.extend({
  name: "User_Cards",

  components: {
    DefaultLayout: () => import("@/layouts/Default")
  },

  data() {
    return {
      money: 12300,
      slots: [
        { id: 1, name: "Слот 1", cardId: null, unlocked: true, cost: 0 },
        { id: 2, name: "Слот 2", cardId: null, unlocked: false, cost: 10000 },
        { id: 3, name: "Слот 3", cardId: null, unlocked: false, cost: 100000 }
      ],

      activeSlotId: null as number | null
    };
  },

  computed: {
    cards() {
      return [
        { id: 1, name: "Карточка 1" },
        { id: 2, name: "Карточка 2" },
        { id: 3, name: "Карточка 3" },
        { id: 4, name: "Карточка 4" },
        { id: 5, name: "Карточка 5" }
      ];
    }
  },

  mounted() {
    const position = { x: 0, y: 0 };

    // interact(".cards__card").draggable({
    //   listeners: {
    //     start(event) {
    //       console.log(event.type, event.target);
    //     },
    //     move(event) {
    //       position.x += event.dx;
    //       position.y += event.dy;

    //       event.target.style.transform = `translate(${position.x}px, ${position.y}px)`;
    //     }
    //   }
    // });

    // Step 1
    // const slider = interact(".cards__slot")
    //   .dropzone({
    //     ondrop: function(event) {
    //       alert(event.relatedTarget.id + " was dropped into " + event.target.id);
    //     }
    //   })
    //   .on("dropactivate", function(event) {
    //     event.target.classList.add("drop-activated");
    //   });

    // slider
    //   // Step 2
    //   .draggable({
    //     // make the element fire drag events
    //     origin: "self", // (0, 0) will be the element's top-left
    //     inertia: true, // start inertial movement if thrown
    //     modifiers: [
    //       interact.modifiers.restrict({
    //         restriction: "self" // keep the drag coords within the element
    //       })
    //     ],
    //     // Step 3
    //     listeners: {
    //       move(event) {
    //         // call this listener on every dragmove
    //         const sliderWidth = interact.getElementRect(event.target).width;
    //         const value = event.pageX / sliderWidth;

    //         event.target.style.paddingLeft = value * 100 + "%";
    //         event.target.setAttribute("data-value", value.toFixed(2));
    //       }
    //     }
    //   });
  },

  methods: {
    numberWithCommas,

    canUnlock(slot: any): boolean {
      return this.money >= slot.cost;
    },

    onDragStart(event: any) {
      event.target.position = { x: event.clientX, y: event.clientY };
      event.target.isDragging = true;
    },

    onDragMove(event: any) {
      if (!event.target.isDragging) return;

      const dx = event.clientX - event.target.position.x;
      const dy = event.clientY - event.target.position.y;

      event.target.style.top = `${event.target.offsetTop + dy}px`;
      event.target.style.left = `${event.target.offsetLeft + dx}px`;

      event.target.position = { x: event.clientX, y: event.clientY };

      const rect2 = event.target.parentElement.getBoundingClientRect(); //cumulativeOffset(event.target);

      const rect3 = event.target.getBoundingClientRect();

      event.target.hidden = true;

      let elemBelow = document.elementFromPoint(event.clientX, event.clientY);

      event.target.hidden = false;

      if (elemBelow) {
        let droppableBelow = elemBelow.closest(".droppable");
        if (droppableBelow) {
          const slotIdObject = droppableBelow.attributes["data-slot-id"];
          this.activeSlotId = slotIdObject ? Number(slotIdObject.value) : null;
        } else {
          this.activeSlotId = null;
        }
      } else {
        this.activeSlotId = null;
      }
    },

    onDragEnd(event: any) {
      console.log("onDragEnd");

      if (this.activeSlotId) {
        const slotIndex = this.slots.findIndex(slot => slot.id == this.activeSlotId);

        const cardIdObject = event.target.attributes["data-card-id"];
        const activeCardId = cardIdObject ? Number(cardIdObject.value) : null;
        this.slots[slotIndex].cardId = activeCardId;
      }

      event.target.isDragging = false;

      event.target.style.top = `${0}px`;
      event.target.style.left = `${0}px`;
    },

    onMouseOver(event: any) {
      console.log("onMouseOver", { event });
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

.cards {
  &__title {
    margin-bottom: 15px;
  }

  &__slots {
    display: flex;
    flex-wrap: wrap;
  }

  &__slot {
    margin: 0 20px 20px 0;

    width: 160px;
    height: 223px;
    border-radius: 14px;

    &-unlocked {
      background-color: $primary-color-2000;
      color: $white;
      border: 2px dashed $white;

      display: flex;
      align-items: center;
      justify-content: center;

      &.active {
        transition: 0.1s;
        // border-color: $primary-color-2000;
        background-color: $orange;
      }

      &-icon {
        font-size: 55px;
      }

      &:hover {
        cursor: pointer;
        transition: 0.3s;
        background-color: #be3853;
      }
    }

    &-locked {
      border: 2px solid #825b6d;
      background: $primary-color-2000;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      &-icon {
        font-size: 40px;
        color: #825b6d;
        flex-grow: 1;

        display: flex;
        align-items: center;
        justify-content: center;
      }

      &-action {
        border-radius: 10px;
        margin: 15px;
        padding: 10px;
        text-align: center;
        font-size: 13px;
        line-height: 120%;
        user-select: none;

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

  &__cards {
    display: flex;
    flex-wrap: wrap;
  }

  &__card {
    position: absolute;
    cursor: move;
    user-select: none;
    z-index: 100000;

    width: 100%;
    height: 100%;
    background-color: $primary-color-2000;

    &-wrapper {
      position: relative;
      border: 1px dashed $white;
      margin: 0 20px 20px 0;

      width: 160px;
      height: 223px;
    }
  }
}
</style>
