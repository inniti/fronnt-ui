<script lang="ts">
import type { FronntIcon } from "@fronnt/icons";
</script>

<script setup lang="ts">
import ArrowSmall from "@fronnt/icons/arrow-small?raw";
import Arrow from "@fronnt/icons/arrow?raw";
import Bag from "@fronnt/icons/bag?raw";
import Calendar from "@fronnt/icons/calendar?raw";
import Cart2 from "@fronnt/icons/cart-2?raw";
import Cart3 from "@fronnt/icons/cart-3?raw";
import Cart from "@fronnt/icons/cart?raw";
import CheckCircle from "@fronnt/icons/check-circle?raw";
import Check from "@fronnt/icons/check?raw";
import Chevron from "@fronnt/icons/chevron?raw";
import CreditCard from "@fronnt/icons/credit-card?raw";
import Delivery from "@fronnt/icons/delivery?raw";
import Dots from "@fronnt/icons/dots?raw";
import EditCircle from "@fronnt/icons/edit-circle?raw";
import Edit from "@fronnt/icons/edit?raw";
import Heart from "@fronnt/icons/heart?raw";
import InfoCircle from "@fronnt/icons/info-circle?raw";
import LinkSmall from "@fronnt/icons/link-small?raw";
import Link from "@fronnt/icons/link?raw";
import Loader from "@fronnt/icons/loader?raw";
import Menu from "@fronnt/icons/menu?raw";
import MinusCircle from "@fronnt/icons/minus-circle?raw";
import Minus from "@fronnt/icons/minus?raw";
import PlusCircle from "@fronnt/icons/plus-circle?raw";
import Plus from "@fronnt/icons/plus?raw";
import Print from "@fronnt/icons/print?raw";
import Promotion from "@fronnt/icons/promotion?raw";
import Sad from "@fronnt/icons/sad?raw";
import Search from "@fronnt/icons/search?raw";
import Share from "@fronnt/icons/share?raw";
import Smile from "@fronnt/icons/smile?raw";
import ThreeDots from "@fronnt/icons/three-dots?raw";
import TrashOpen from "@fronnt/icons/trash-open?raw";
import Trash from "@fronnt/icons/trash?raw";
import Truck from "@fronnt/icons/truck?raw";
import User2 from "@fronnt/icons/user-2?raw";
import User from "@fronnt/icons/user?raw";
import XCircle from "@fronnt/icons/x-circle?raw";
import X from "@fronnt/icons/x?raw";

const icons: Record<FronntIcon, string> = {
  "arrow-small": ArrowSmall,
  arrow: Arrow,
  bag: Bag,
  calendar: Calendar,
  cart: Cart,
  "cart-2": Cart2,
  "cart-3": Cart3,
  "check-circle": CheckCircle,
  check: Check,
  chevron: Chevron,
  "credit-card": CreditCard,
  delivery: Delivery,
  dots: Dots,
  "edit-circle": EditCircle,
  edit: Edit,
  heart: Heart,
  "info-circle": InfoCircle,
  "link-small": LinkSmall,
  link: Link,
  loader: Loader,
  menu: Menu,
  "minus-circle": MinusCircle,
  minus: Minus,
  "plus-circle": PlusCircle,
  plus: Plus,
  print: Print,
  promotion: Promotion,
  sad: Sad,
  search: Search,
  share: Share,
  smile: Smile,
  "three-dots": ThreeDots,
  "trash-open": TrashOpen,
  trash: Trash,
  truck: Truck,
  "user-2": User2,
  user: User,
  "x-circle": XCircle,
  x: X,
};
</script>

<template>
  <div class="icons">
    <div class="icon" v-for="(markup, name) in icons">
      <i v-html="markup"></i>
      <div class="name">{{ name }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.icons {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(5rem, 1fr));
  gap: 1rem;
}

.icon {
  background: white;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;

  i {
    display: block;
    width: 2rem;
  }

  .name {
    font-size: 0.75rem;
    text-align: center;
    word-break: keep-all;
    white-space: nowrap;
    color: var(--nn-color-gray-400);
    user-select: all;
  }
}
</style>
