<template>
    <div>
      <button class="z-button" 
      :disabled="buttonDisabled"
      :autofocus="autofocus"
      :type="nativeType"
      :class="[
        type ? 'z-button--' + type :'',
        btnSize ? 'z-button--' + btnSize : '',
        {
          'is-Disabled': buttonDisabled,
          'is-round': round,
          'is-circle': circle
        }
      ]"
      >
      <i :class="icon" v-if="icon && !loading"></i>
      <span v-if="$slots.default">
        <slot></slot>
      </span>
    </button>
    </div>
</template>
<script>
export default {
  name: 'z-button',
  props: {
    disabled: Boolean,
    autofocus:Boolean,
    type: {
      type: String,
      default: 'default'
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    round: Boolean,
    circle: Boolean,
    size: String
  },
  computed: {
    buttonDisabled () {
      return this.disabled
    },
    btnSize () {
      return this.size
    }
  },
  data () {
    return {
    }
  },
  method : {},
  mounted () {
  }
}
</script>
<style lang="less">

</style>
