<demo>
支持size
</demo>

<template>
  <div>
    <Button size="big">你好</Button>
    <Button>你好</Button>
    <Button size="small">你好</Button>
  </div>
  <div>
    <Button theme="link" size="big">你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="link" size="small">你好</Button>
  </div>
  <div>
    <Button theme="text" size="big">你好</Button>
    <Button theme="text">你好</Button>
    <Button theme="text" size="small">你好</Button>
  </div>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue';

export default {
  components: {Button},
  setup() {
    return{Button}
  }
};
</script>