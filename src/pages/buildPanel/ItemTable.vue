<template>
  <div
    ref="wrapper"
    class="wrapper"
    :style="`height: ${wrapperHeight};`">
    <table :style="`width: ${tableWidth};`">
      <thead>
        <tr>
          <th>
            裝備
          </th>
          <th>傷害</th>
          <th>力量</th>
          <th>敏捷</th>
          <th>防禦</th>
          <th>體力</th>
          <th>走速</th>
          <th>攻距</th>
          <th>特攻</th>
          <th>吸血</th>
          <th>反傷</th>
          <th>經驗</th>
        </tr>
      </thead>
      <slot />
    </table>
  </div>
</template>

<script>
export default {
  name: 'ItemTable',
  data() {
    return {
      wrapperHeight: '10rem',
      tableWidth: 'auto',
    };
  },
  mounted() {
    window.addEventListener('resize', this.rezieByWindowHeight);
    this.$nextTick(() => {
      this.rezieByWindowHeight();
    });
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.rezieByWindowHeight);
  },
  methods: {
    rezieByWindowHeight() {
      const $wrapper = this.$refs.wrapper;
      if ($wrapper) {
        const boundingClientRect = $wrapper.getBoundingClientRect();
        this.wrapperHeight = window.innerHeight - boundingClientRect.top - 25 + 'px';
        if ($wrapper.scrollWidth + 30 > boundingClientRect.width) {
          this.tableWidth = 'auto';
        }
        else {
          this.tableWidth = '100%';
        }
      }
    },
  },
};

</script>

<style lang="stylus">
div.wrapper {
  width: 100%;
  overflow: auto;

  table {
    margin: auto;
    border-collapse: collapse;
    border-spacing: 0;
    table-layout: fixed;

    thead {
      th {
        position: sticky;
        top: 0;
        z-index: 1;
        background: #121212;
      }
    }

    th, td {
      min-width: 5rem;
      padding: 0.5rem;
      text-align: center;
      vertical-align: middle;
      border: 1px solid rgba(255, 255, 255 , 0.28);
    }
  }
}
</style>
