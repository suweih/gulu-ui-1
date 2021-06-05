<demo>
常规用法
</demo>

<template>
  <div>
    <Button >你好</Button>
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