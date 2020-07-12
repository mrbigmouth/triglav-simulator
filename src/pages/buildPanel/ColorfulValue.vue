<template>
  <span :class="colorClass">
    {{ prefix }}{{ value }}{{ suffix }}
  </span>
</template>

<script>
export default {
  name: 'ColorfulValue',
  props: {
    prefix: {
      type: String,
      default: '',
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
