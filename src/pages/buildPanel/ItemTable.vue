<template>
  <q-markup-table>
    <thead>
      <tr>
        <th>
          裝備
        </th>
        <th>傷害</th>
        <th>攻距</th>
        <th>力量</th>
        <th>敏捷</th>
        <th>防禦</th>
        <th>體力</th>
        <th>走速</th>
        <th>特攻</th>
        <th>吸血</th>
        <th>反傷</th>
        <th>經驗</th>
      </tr>
    </thead>
    <slot />
  </q-markup-table>
</template>

<script>
export default {
  name: 'ItemTable',
};

</script>

<style lang="stylus">
  div.border-top {
    border-top: 1px solid rgba(255, 255, 255 , 0.28);
  }
  div.border-right {
    border-right: 1px solid rgba(255, 255, 255 , 0.28);
  }
  div.border-bottom {
    border-bottom: 1px solid rgba(255, 255, 255 , 0.28);
  }
  div.border-left {
    border-left: 1px solid rgba(255, 255, 255 , 0.28);
  }
  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    table-layout: fixed;

    th, td {
      padding: 0.5rem;
      text-align: center;
      vertical-align: middle;
      border: 1px solid rgba(255, 255, 255 , 0.28);
    }
  }
</style>
