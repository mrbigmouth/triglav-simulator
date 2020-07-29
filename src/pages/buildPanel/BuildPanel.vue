<template>
  <form
    class="row q-col-gutter-xs"
    autocorrect="off"
    autocapitalize="off"
    autocomplete="off"
    spellcheck="false">
    <div class="col-xs-12 offset-sm-2 col-sm-8 offset-md-2 col-md-4 offset-lg-3 col-lg-3">
      <q-select
        v-model="characterClass"
        label="腳色職業"
        :options="[
          {
            label: '劍系大師',
            value: 'sword',
          },
          {
            label: '斧系大師',
            value: 'axe',
          },
          {
            label: '匕首大師',
            value: 'dagger',
          },
        ]"
        emit-value
        map-options />
    </div>
    <div class="col-xs-12 offset-sm-2 col-sm-8 offset-md-0 col-md-4 offset-lg-0 col-lg-3">
      <q-input
        v-model.number="exp"
        label="經驗值"
        type="number"
        min="0"
        step="10000" />
    </div>
    <div class="col-xs-12 offset-sm-2 col-sm-8 offset-md-2 col-md-4 offset-lg-3 col-lg-3">
      <boost-records />
    </div>
    <div class="col-xs-12 offset-sm-2 col-sm-8 offset-md-0 col-md-4 offset-lg-0 col-lg-3">
      <q-input
        v-model.number="kills"
        label="擊殺數"
        type="number"
        min="0"
        step="100" />
    </div>
    <div class="col-xs-12">
      <div class="text-center">
        <q-checkbox
          v-model="displayName"
          :label="$t('displayName')" />
        <q-checkbox
          v-model="displaySpecial"
          :label="$t('displaySpecial')" />
      </div>
      <item-table>
        <item-row
          v-if="characterClass === 'sword'"
          :item-data="item.sword[weapon1]"
          :display-name="displayName"
          :display-special="displaySpecial"
          @click="onSelectItem('sword', 'weapon1')" />
        <item-row
          v-if="characterClass === 'sword'"
          :item-data="item.shield[weapon2]"
          :display-name="displayName"
          :display-special="displaySpecial"
          @click="onSelectItem('shield', 'weapon2')" />
        <item-row
          v-if="characterClass === 'axe'"
          :item-data="item.axe[weapon1]"
          :display-name="displayName"
          :display-special="displaySpecial"
          @click="onSelectItem('axe', 'weapon1')" />
        <item-row
          v-if="characterClass === 'axe'"
          :item-data="item.mantle[weapon2]"
          :display-name="displayName"
          :display-special="displaySpecial"
          @click="onSelectItem('mantle', 'weapon2')" />
        <item-row
          v-if="characterClass === 'dagger'"
          :item-data="item.dagger[weapon1]"
          :display-name="displayName"
          :display-special="displaySpecial"
          @click="onSelectItem('dagger', 'weapon1')" />
        <item-row
          v-if="characterClass === 'dagger'"
          :item-data="item.dagger[weapon2]"
          :display-name="displayName"
          :display-special="displaySpecial"
          @click="onSelectItem('dagger', 'weapon2')" />
        <item-row
          :item-data="item.ring[ring1]"
          :display-name="displayName"
          :display-special="displaySpecial"
          @click="onSelectItem('ring', 'ring1')" />
        <item-row
          :item-data="item.ring[ring2]"
          :display-name="displayName"
          :display-special="displaySpecial"
          @click="onSelectItem('ring', 'ring2')" />
        <item-row
          :item-data="item.helm[helm]"
          :display-name="displayName"
          :display-special="displaySpecial"
          @click="onSelectItem('helm', 'helm')" />
        <item-row
          :item-data="item.armor[armor]"
          :display-name="displayName"
          :display-special="displaySpecial"
          @click="onSelectItem('armor', 'armor')" />
        <item-row
          :item-data="item.gloves[gloves]"
          :display-name="displayName"
          :display-special="displaySpecial"
          @click="onSelectItem('gloves', 'gloves')" />
        <item-row
          :item-data="item.boots[boots]"
          :display-name="displayName"
          :display-special="displaySpecial"
          @click="onSelectItem('boots', 'boots')" />
        <item-row
          :item-data="item.freshy[freshy]"
          :display-name="displayName"
          :display-special="displaySpecial"
          @click="onSelectItem('freshy', 'freshy')" />
        <item-row
          :item-data="item.puppet[puppet1]"
          :display-name="displayName"
          :display-special="displaySpecial"
          @click="onSelectItem('puppet', 'puppet1')" />
        <item-row
          :item-data="item.puppet[puppet2]"
          :display-name="displayName"
          :display-special="displaySpecial"
          @click="onSelectItem('puppet', 'puppet2')" />
        <item-row
          :item-data="item.puppet[puppet3]"
          :display-name="displayName"
          :display-special="displaySpecial"
          @click="onSelectItem('puppet', 'puppet3')" />
      </item-table>
    </div>
    <select-item-dialog
      :is-show.sync="selectItemDialogProps.isShow"
      :item-type="selectItemDialogProps.itemType"
      :item-slot="selectItemDialogProps.itemSlot" />
  </form>
</template>

<script>
import computedPropertiesForBuildStore from 'src/mixins/computedPropertiesForBuildStore';
import BoostRecords from './BoostRecords';
import ItemTable from './ItemTable';
import ItemRow from './ItemRow';
import SelectItemDialog from './SelectItemDialog';
import item from 'src/data/item';

export default {
  name: 'BuildPanel',
  components: {
    BoostRecords,
    ItemTable,
    ItemRow,
    SelectItemDialog,
  },
  mixins: [
    computedPropertiesForBuildStore,
  ],
  data() {
    return {
      item,
      boostStrategy: 'vitality',
      displayName: false,
      displaySpecial: false,
      selectItemDialogProps: {
        isShow: false,
        itemType: '',
        itemSlot: '',
      },
    };
  },
  methods: {
    onSelectItem(itemType, itemSlot) {
      const selectItemDialogProps = this.selectItemDialogProps;
      selectItemDialogProps.isShow = true;
      selectItemDialogProps.itemType = itemType;
      selectItemDialogProps.itemSlot = itemSlot;
    },
  },
};

</script>

<style lang="stylus">
  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    table-layout: fixed;

    tbody {
      cursor: pointer;

      th, td {
        padding: 0.5rem;
        text-align: center;
        vertical-align: middle;
        border: 1px solid rgba(255, 255, 255 , 0.28);
      }
    }
  }
</style>
