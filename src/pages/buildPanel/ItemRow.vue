<template>
  <tbody
    :title="itemData.i18n"
    @click="$emit('click')">
    <tr>
      <td
        class="lt-md"
        rowspan="3">
        <img :src="itemData.img" />
      </td>
      <td class="gt-sm">
        <img :src="itemData.img" />
      </td>
      <td>
        <colorful-value :value="getValue('minAd')" />
        ~
        <colorful-value :value="getValue('maxAd')" />
      </td>
      <td>
        <colorful-value :value="getValue('ar')" />
      </td>
      <td>
        <colorful-value :value="getValue('str')" />
      </td>
      <td>
        <colorful-value :value="getValue('dex')" />
      </td>
      <td>
        <colorful-value :value="getValue('vit')" />
      </td>
      <td class="gt-sm">
        <colorful-value :value="getValue('ws')" />
      </td>
      <td class="gt-sm">
        <colorful-value
          previx="-"
          :value="getValue('sad')" />
      </td>
      <td class="gt-sm">
        <colorful-value :value="getValue('voh')" />
      </td>
      <td class="gt-sm">
        <colorful-value
          :value="getValue('dr')"
          suffix="%" />
      </td>
      <td class="gt-sm">
        <colorful-value
          :value="getValue('xpg')"
          suffix="%" />
      </td>
    </tr>
    <tr class="lt-md">
      <td hidden />
      <td>
        <colorful-value :value="getValue('ws')" />
      </td>
      <td>
        <colorful-value
          previx="-"
          :value="getValue('sad')" />
      </td>
      <td>
        <colorful-value :value="getValue('voh')" />
      </td>
      <td>
        <colorful-value
          :value="getValue('dr')"
          suffix="%" />
      </td>
      <td>
        <colorful-value
          :value="getValue('xpg')"
          suffix="%" />
      </td>
    </tr>
  </tbody>
</template>

<script>
import computedPropertiesForBuildStore from 'src/mixins/computedPropertiesForBuildStore';
import ColorfulValue from './ColorfulValue';
import item from 'src/data/item';

export default {
  name: 'ItemRow',
  components: {
    ColorfulValue,
  },
  mixins: [
    computedPropertiesForBuildStore,
  ],
  props: {
    type: {
      type: String,
      default: '',
    },
    itemIndex: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    itemData() {
      return item[this.type][this.itemIndex];
    },
    getValue() {
      return (key) => {
        return this.getItemValue(this.itemData, key);
      };
    },
  },
};

</script>

<style lang="stylus">
  tbody {
    cursor: pointer;
  }
</style>
