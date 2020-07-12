<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <q-page class="row wrap justify-center items-start content-start">
        <div
          class="q-gutter-y-md"
          style="min-width: 50%; max-width: 50rem;">
          <q-card>
            <q-tabs
              v-model="tab"
              dense
              active-color="info"
              indicator-color="info"
              narrow-indicator>
              <q-tab
                name="build"
                label="配置" />
              <q-tab
                name="simulator"
                label="模擬" />
              <q-btn-dropdown
                style="width: 20rem;"
                align="right"
                auto-close
                stretch
                flat>
                <template v-slot:label>
                  <div class="row items-end no-wrap justify-end">
                    <q-icon name="language" />
                    繁體中文
                  </div>
                </template>
                <q-list>
                  <q-item clickable>
                    <q-item-section align="right">
                      繁體中文
                    </q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section align="right">
                      简体中文
                    </q-item-section>
                  </q-item>
                  <q-item clickable>
                    <q-item-section align="right">
                      English
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
                simulator
              </q-tab-panel>
            </q-tab-panels>
          </q-card>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import BuildPanel from './buildPanel/BuildPanel';

export default {
  name: 'PageIndex',
  components: {
    BuildPanel,
  },
  data() {
    return {
      tab: 'build',
    };
  },
};
</script>
