<template>
  <div>
    <div>
      <span>Button示例</span>
      <h2>示例一</h2>
    </div>
    <div>
      <Button>你好</Button>
      <Button theme="button">你好</Button>
      <Button theme="link">你好</Button>
      <Button theme="text">你好</Button>
    </div>
  </div>
  <div>
    <div>
      <h2>示例二</h2>
    </div>
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
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';

export default {
  components: {Button},
};
</script>