<template>
  <tbody @click="$emit('click')">
    <tr :title="$t('item.' + itemData.i18n)">
      <td>
        <img
          :class="itemData.type"
          :src="itemData.img" />
      </td>
      <td>
        <colorful-value :value="getValue('minAd')" />
        ~
        <colorful-value :value="getValue('maxAd')" />
      </td>
      <td>
        <colorful-value
          :value="getValue('as')"
          reverse-color />
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
      <td>
        <q-icon
          v-if="getValue('special')"
          name="info"
          size="sm"
          color="positive"
          :title="getSpecialDescription(getValue('special'))" />
      </td>
    </tr>
    <tr v-if="displayName">
      <td
        class="name"
        :class="itemData.type"
        colspan="14">
         {{ $t('item.' + itemData.i18n) }}
      </td>
    </tr>
    <tr v-if="displaySpecial && itemData.special">
      <td
        class="special"
        colspan="14">
        {{ getSpecialDescription(getValue('special')) }}
      </td>
    </tr>
  </tbody>
</template>

<script>
import computedPropertiesForBuildStore from 'src/mixins/computedPropertiesForBuildStore';
import ColorfulValue from '../ColorfulValue';

export default {
  name: 'ItemRow',
  components: {
    ColorfulValue,
  },
  mixins: [
    computedPropertiesForBuildStore,
  ],
  props: {
    itemData: {
      type: Object,
      required: true,
    },
    displayName: {
      type: Boolean,
      default: false,
    },
    displaySpecial: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    getValue() {
      return (key) => {
        return this.getItemValue(this.itemData, key);
      };
    },
  },
};

</script>

<style lang="stylus">
.artifact {
  color: #aa66fc;
}

img.artifact {
  border: 1px solid #aa66fc;
}

.rare {
  color: #70c5db;
}

img.rare {
  border: 1px solid #70c5db;
}

.common {
  color: #ffffff;
}

img.common {
  border: 1px solid #ffffff;
}

div.wrapper {
  table {
    tbody {
      cursor: pointer;

      td.name {
        text-align: left;
      }

      td.special {
        text-align: left;
        color: #9fd900;
      }
    }
  }
}
</style>
