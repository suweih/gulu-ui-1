<template>
  <div>
    Tabs组件组件
    <div v-for="(t,index) in titles" :key="t">{{ t }}</div>
    <component v-for="(c,index) in defaults" :key="index" :is="c"/>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue';

export default {
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error('Tabs 子标签名必须是Tab');
      }
    });
    const titles = defaults.forEach((tag) => {
      return tag.props.title;
    });
    return {defaults, titles};
  }
};
</script>