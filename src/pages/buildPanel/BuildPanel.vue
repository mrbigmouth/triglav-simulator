<template>
  <form
    class="row q-col-gutter-xs"
    autocorrect="off"
    autocapitalize="off"
    autocomplete="off"
    spellcheck="false">
    <div class="col-xs-12 col-sm-6">
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
    <div class="col-xs-12 col-sm-6">
      <q-input
        v-model.number="exp"
        label="經驗值"
        type="number"
        min="1"
        step="1" />
    </div>
    <div class="col-xs-12 col-sm-6">
      <q-input
        v-model.number="kills"
        label="擊殺數"
        type="number"
        min="1"
        step="1" />
    </div>
    <div class="col-xs-12 col-sm-6">
      <boost-records />
    </div>
    <div class="col-xs-12">
      <item-table>
        <item-row
          v-if="characterClass === 'sword'"
          type="sword"
          :itemIndex="weapon1"
          @click="onSelectItem('sword', 'weapon1')" />
        <item-row
          v-if="characterClass === 'sword'"
          type="shield"
          :itemIndex="weapon2"
          @click="onSelectItem('shield', 'weapon2')" />
        <item-row
          v-if="characterClass === 'axe'"
          type="axe"
          :itemIndex="weapon1"
          @click="onSelectItem('axe', 'weapon1')" />
        <item-row
          v-if="characterClass === 'axe'"
          type="mantle"
          :itemIndex="weapon2"
          @click="onSelectItem('mantle', 'weapon2')" />
        <item-row
          v-if="characterClass === 'dagger'"
          type="dagger"
          :itemIndex="weapon1"
          @click="onSelectItem('dagger', 'weapon1')" />
        <item-row
          v-if="characterClass === 'dagger'"
          type="dagger"
          :itemIndex="weapon2"
          @click="onSelectItem('dagger', 'weapon2')" />
        <item-row
          type="ring"
          :itemIndex="ring1"
          @click="onSelectItem('ring', 'ring1')" />
        <item-row
          type="ring"
          :itemIndex="ring2"
          @click="onSelectItem('ring', 'ring2')" />
        <item-row
          type="helm"
          :itemIndex="helm"
          @click="onSelectItem('helm', 'helm')" />
        <item-row
          type="armor"
          :itemIndex="armor"
          @click="onSelectItem('armor', 'armor')" />
        <item-row
          type="gloves"
          :itemIndex="gloves"
          @click="onSelectItem('gloves', 'gloves')" />
        <item-row
          type="boots"
          :itemIndex="boots"
          @click="onSelectItem('boots', 'boots')" />
        <item-row
          type="freshy"
          :itemIndex="freshy"
          @click="onSelectItem('freshy', 'freshy')" />
        <item-row
          type="puppet"
          :itemIndex="puppet1"
          @click="onSelectItem('puppet', 'puppet1')" />
        <item-row
          type="puppet"
          :itemIndex="puppet2"
          @click="onSelectItem('puppet', 'puppet2')" />
        <item-row
          type="puppet"
          :itemIndex="puppet3"
          @click="onSelectItem('puppet', 'puppet3')" />
      </item-table>
    </div>
    <select-item-dialog
      :is-show.sync="selectItemDialogProps.isShow"
      :item-type.sync="selectItemDialogProps.itemType"
      :item-slot.sync="selectItemDialogProps.itemSlot" />
  </form>
</template>

<script>
import computedPropertiesForBuildStore from 'src/mixins/computedPropertiesForBuildStore';
import BoostRecords from './BoostRecords';
import ItemTable from './ItemTable';
import ItemRow from './ItemRow';
import SelectItemDialog from './SelectItemDialog';

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
      boostStrategy: 'vitality',
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
