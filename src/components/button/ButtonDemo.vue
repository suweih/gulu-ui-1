<template>
  <h1>Button组件示例</h1>
  <Demo :component="Button0Demo"/>
  <Demo :component="Button1Demo"/>
  <Demo :component="Button2Demo"/>
  <Demo :component="Button3Demo"/>
  <Demo :component="Button4Demo"/>
  <Demo :component="Button5Demo"/>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue';
import Button0Demo from './Button0.demo.vue';
import Button1Demo from './Button1.demo.vue';
import Button2Demo from './Button2.demo.vue';
import Button3Demo from './Button3.demo.vue';
import Button4Demo from './Button4.demo.vue';
import Button5Demo from './Button5.demo.vue';
import Demo from '../Demo.vue';

export default {
  components: {Button1Demo, Button, Demo, Button2Demo, Button0Demo, Button3Demo, Button4Demo, Button5Demo},
  setup() {
    return {
      Button1Demo, Button, Demo, Button2Demo, Button0Demo, Button3Demo, Button4Demo, Button5Demo
    };
  }
};
</script>