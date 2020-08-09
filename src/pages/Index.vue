<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <q-page class="row wrap justify-center items-start content-start">
        <div
          class="q-gutter-y-md"
          style="min-width: 100%; max-width: 70rem;">
          <q-card>
            <q-tabs
              v-model="tab"
              dense
              active-color="info"
              indicator-color="info"
              narrow-indicator>
              <q-tab
                name="build"
                :label="$t('build')" />
              <q-tab
                name="simulator"
                :label="$t('simulator')" />
              <q-btn-dropdown
                style="width: 20rem;"
                align="right"
                auto-close
                stretch
                flat>
                <template v-slot:label>
                  <div
                    class="row items-end no-wrap justify-end"
                    style="text-transform: none;">
                    <q-icon name="language" />
                    <span v-if="$i18n.locale === 'js'">
                      日本語
                    </span>
                    <span v-else-if="$i18n.locale === 'en'">
                      English
                    </span>
                    <span v-else-if="$i18n.locale === 'zh-TW'">
                      繁體中文
                    </span>
                    <span v-else-if="$i18n.locale === 'zh-CN'">
                      简体中文
                    </span>
                  </div>
                </template>
                <q-list>
                  <q-item
                    clickable
                    @click="onChangeLanguage('ja')">
                    <q-item-section align="right">
                      日本語
                    </q-item-section>
                  </q-item>
                  <q-item
                    clickable
                    @click="onChangeLanguage('en')">
                    <q-item-section align="right">
                      English
                    </q-item-section>
                  </q-item>
                  <q-item
                    clickable
                    @click="onChangeLanguage('zh-TW')">
                    <q-item-section align="right">
                      繁體中文
                    </q-item-section>
                  </q-item>
                  <q-item
                    clickable
                    @click="onChangeLanguage('zh-CN')">
                    <q-item-section align="right">
                      简体中文
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </q-tabs>
            <q-separator />
            <q-tab-panels
              v-model="tab"
              animated>
              <q-tab-panel name="build">
                <build-panel />
              </q-tab-panel>
              <q-tab-panel name="simulator">
                <simulator-panel  />
              </q-tab-panel>
            </q-tab-panels>
          </q-card>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import computedPropertiesForBuildStore from 'src/mixins/computedPropertiesForBuildStore';
import BuildPanel from './buildPanel/BuildPanel';
import SimulatorPanel from './simulatorPanel/SimulatorPanel';

export default {
  name: 'PageIndex',
  components: {
    BuildPanel,
    SimulatorPanel,
  },
  mixins: [
    computedPropertiesForBuildStore,
  ],
  data() {
    return {
      tab: 'build',
    };
  },
  mounted() {
    const pathMatch = this.$route.params.pathMatch;
    try {
      const defaultBuildList = JSON.parse(decodeURIComponent(pathMatch.replace('/', '')));
      if (defaultBuildList && defaultBuildList.length) {
        this.characterClass = defaultBuildList[0];
        this.exp = defaultBuildList[1];
        this.kills = defaultBuildList[2];
        this.boostAllRecords = defaultBuildList[3];
        this.boostVitalityRecords = defaultBuildList[4];
        this.boostStrengthRecords = defaultBuildList[5];
        this.boostDexteriryRecords = defaultBuildList[6];
        this.boostDefenseRecords = defaultBuildList[7];
        this.weapon1 = defaultBuildList[8];
        this.weapon2 = defaultBuildList[9];
        this.ring1 = defaultBuildList[10];
        this.ring2 = defaultBuildList[11];
        this.helm = defaultBuildList[12];
        this.armor = defaultBuildList[13];
        this.gloves = defaultBuildList[14];
        this.boots = defaultBuildList[15];
        this.freshy = defaultBuildList[16];
        this.puppet1 = defaultBuildList[17];
        this.puppet2 = defaultBuildList[18];
        this.puppet3 = defaultBuildList[19];
      }
    }
    catch (e) {
    }
  },
  methods: {
    onChangeLanguage(language) {
      this.$i18n.locale = language;
      localStorage.setItem('defaultUseLanguage', language);
    },
  },
};
</script>
