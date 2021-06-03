<template>
  <h1>Dialog示例</h1>
  <div>
    <h2>示例一</h2>
    <Button @click="toggle">toggle</Button>
    <Dialog v-model:visible="y" :closeOnClickOverlay="closeOnClickOverlay" :ok="f1" :cancel="f2">
      <div>111</div>
      <div>222</div>
    </Dialog>
  </div>
</template>
<script lang="ts">
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {ref} from 'vue';

export default {
  components: {Button, Dialog},
  setup() {
    const closeOnClickOverlay = ref(false);
    const y = ref(false);
    const toggle = () => {
      y.value = !y.value;
    };
    const f1 = () => {
      console.log('1');
      return false;
    };
    const f2 = () => {
      console.log('2');
    };
    return {y, toggle, closeOnClickOverlay, f1, f2};
  }
};
</script>