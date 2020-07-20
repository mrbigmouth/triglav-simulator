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
    <q-resize-observer @resize="onWrapperResize" />
  </div>
</template>

<script>
export default {
  name: 'ItemTable',
  data() {
    return {
      intervalId: null,
      detectingSize: {
        windowHeight: window.innerHeight,
        boundingClientRectTop: 0,
        boundingClientRectWidth: 0,
        scrollWidth: 0,
      },
    };
  },
  computed: {
    wrapperHeight() {
      const detectingSize = this.detectingSize;

      return detectingSize.windowHeight - detectingSize.boundingClientRectTop - 40 + 'px';
    },
    tableWidth() {
      const detectingSize = this.detectingSize;
      if (detectingSize.scrollWidth + 30 > detectingSize.boundingClientRectWidth) {
        return 'auto';
      }
      else {
        return '100%';
      }
    },
  },
  mounted() {
    this.intervalId = setInterval(this.detectboundingClientRect, 500);
    this.detectboundingClientRect();
    window.addEventListener('resize', this.detectWindowHeight);
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
    window.removeEventListener('resize', this.detectWindowHeight);
  },
  methods: {
    detectboundingClientRect() {
      const $wrapper = this.$refs.wrapper;
      if ($wrapper) {
        const boundingClientRect = $wrapper.getBoundingClientRect();
        const detectingSize = this.detectingSize;
        detectingSize.boundingClientRectTop = boundingClientRect.top;
        detectingSize.boundingClientRectWidth = boundingClientRect.width;
      }
    },
    detectWindowHeight() {
      this.detectingSize.windowHeight = window.innerHeight;
    },
    onWrapperResize() {
      this.detectingSize.scrollWidth = this.$refs.wrapper.scrollWidth;
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
