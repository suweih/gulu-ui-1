<template>
  <div>
    <Switch v-model:value="bool" />
<!--<Switch :value="y" @input.value="y = $event" />-->
  </div>
</template>
<script>
import Switch from "../lib/Switch.vue"
import {ref} from "vue"

export default {
  components: {Switch},
  setup() {
    const bool = ref(false)
    return{bool}
  }
}
</script>