<template>
  <span :class="colorClass">
    {{ value }}{{ suffix }}
  </span>
</template>

<script>
export default {
  name: 'ColorfulValue',
  props: {
    reverseColor: {
      type: Boolean,
      default: false,
    },
    value: {
      type: Number,
      default: 0,
    },
    suffix: {
      type: String,
      default: '',
    },
  },
  computed: {
    colorClass() {
      const value = this.value;
      if (value === 0) {
        return '';
      }
      else if (this.reverseColor) {
        return value > 0 ? 'bad' : 'good';
      }
      else {
        return value > 0 ? 'good' : 'bad';
      }
    },
  },
};

</script>

<style lang="stylus">
  .good {
    color: #ffce33;
  }
  .bad {
    color: #cd4526;
  }
</style>
