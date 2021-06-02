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
    <h2>示例三</h2>
    <div>
      <div>
        <Button level="main">主要按钮</Button>
        <Button>普通按钮</Button>
        <Button level="danger">危险按钮</Button>
      </div>
      <div>
        <Button theme="link" level="main">主要链接按钮</Button>
        <Button theme="link">普通链接按钮</Button>
        <Button theme="link" level="danger">危险链接按钮</Button>
      </div>
      <div>
        <Button theme="text" level="main">主要文字按钮</Button>
        <Button theme="text">普通文字按钮</Button>
        <Button theme="text" level="danger">危险文字按钮</Button>
      </div>
    </div>
  </div>
  <div>
    <h2>示例四</h2>
    <div>
      <Button disabled>禁用按钮</Button>
      <Button theme="link" disabled>禁用链接按钮</Button>
      <Button theme="text" disabled>禁用按钮</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue';

export default {
  components: {Button},
};
</script>