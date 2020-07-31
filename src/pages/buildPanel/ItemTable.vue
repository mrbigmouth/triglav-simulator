<template>
  <div
    ref="wrapper"
    class="wrapper"
    :style="`height: ${wrapperHeight};`">
    <table :style="`width: ${tableWidth};`">
      <thead>
        <tr>
          <th style="width: 5rem;">
            {{ $t('equipment') }}
          </th>
          <th
            :class="sortable ? 'cursor-pointer' : ''"
            style="min-width: 6rem;"
            @click="onClickColumn('avgDmg')">
            <div>
              {{ $t('dmg') }}
              <q-icon
                v-if="getSortStatus('avgDmg')"
                :name="getSortStatus('avgDmg') === 'desc' ? 'expand_more' : 'expand_less'" />
            </div>
          </th>
          <th
            v-for="column in columns"
            :key="column"
            :class="sortable ? 'cursor-pointer' : ''"
            @click="onClickColumn(column)">
            <div>
              {{ $t(column) }}
              <q-icon
                v-if="getSortStatus(column)"
                :name="getSortStatus(column) === 'desc' ? 'expand_more' : 'expand_less'" />
            </div>
          </th>
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
  props: {
    sortable: {
      type: Boolean,
      default: false,
    },
    sortList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      intervalId: null,
      columns: [
        'as',
        'str',
        'dex',
        'def',
        'vit',
        'ws',
        'ar',
        'sad',
        'voh',
        'dr',
        'xpg',
        'spe',
      ],
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
    getSortStatus() {
      return (column) => {
        const sortStatus = this.sortList.find((sortInfo) => {
          return sortInfo.by === column;
        });
        if (sortStatus) {
          return sortStatus.dir;
        }

        return false;
      };
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
    onClickColumn(column) {
      if (this.sortable) {
        const existsSortInfo = this.sortList.find((sortInfo) => {
          return sortInfo.by === column;
        });
        if (existsSortInfo) {
          this.$emit('update:sortList', [
            {
              by: column,
              dir: existsSortInfo.dir === 'asc' ? 'desc' : 'asc',
            },
          ]);
        }
        else {
          this.$emit('update:sortList', [
            {
              by: column,
              dir: 'desc',
            },
          ]);
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

        div {
          width: 100%;
          height: 100%;
          position: relative;

          i {
            position: absolute;
            top: 5px;
            right: -7px;
          }
        }
      }
    }

    th, td {
      min-width: 4rem;
      padding: 0.5rem;
      text-align: center;
      vertical-align: middle;
      border: 1px solid rgba(255, 255, 255 , 0.28);
    }
  }
}
</style>
