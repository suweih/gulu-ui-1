<template>
  <h1>Dialog示例</h1>
  <div>
    <h2>示例一</h2>
    <Button @click="toggle">toggle</Button>
    <Dialog v-model:visible="y" :closeOnClickOverlay="closeOnClickOverlay" :ok="f1" :cancel="f2">
      <template v-slot:title>
        <strong>标题</strong>
      </template>
      <template v-slot:content>
        <div>111</div>
        <div>222</div>
      </template>
    </Dialog>
  </div>
  <div>
    <h2>示例二</h2>
    <Button @click="showDialog">show</Button>
  </div>
</template>
<script lang="ts">
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {ref} from 'vue';
import {openDialog} from '../lib/openDialog.ts';

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
    const showDialog = () => {
      openDialog({
        title: '标题',
        content: '内容',
        ok() {
          console.log('ok');
        },
        cancel() {
          console.log('cancel');
        }
      });
    };
    return {y, toggle, closeOnClickOverlay, f1, f2, showDialog};
  }
};
</script>