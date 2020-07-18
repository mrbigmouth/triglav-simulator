<template>
  <tbody
    :title="itemData.i18n"
    @click="$emit('click')">
    <tr>
      <td>
        <img :src="itemData.img" />
      </td>
      <td>
        <colorful-value :value="getValue('minAd')" />
        ~
        <colorful-value :value="getValue('maxAd')" />
      </td>
      <td>
        <colorful-value :value="getValue('str')" />
      </td>
      <td>
        <colorful-value :value="getValue('dex')" />
      </td>
      <td>
        <colorful-value :value="getValue('def')" />
      </td>
      <td>
        <colorful-value :value="getValue('vit')" />
      </td>
      <td>
        <colorful-value :value="getValue('ws')" />
      </td>
      <td>
        <colorful-value :value="getValue('ar')" />
      </td>
      <td>
        <colorful-value
          :value="getValue('sad')"
          reverse-color />
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
    <tr v-if="itemData.special">
      <td
        class="special"
        colspan="12">
        {{ getSpecialDescription(getValue('special')) }}
      </td>
    </tr>
  </tbody>
</template>

<script>
import computedPropertiesForBuildStore from 'src/mixins/computedPropertiesForBuildStore';
import ColorfulValue from '../ColorfulValue';
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
div.wrapper {
  table {
    tbody {
      cursor: pointer;

      td.special {
        text-align: left;
        color: #9fd900;
      }
    }
  }
}
</style>
