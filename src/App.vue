<template>
  <div id="app">
    <vue-dadata-bs
      ref="dadata"
      :token="token"
      @handle-error="handleError"
      input-name="vue-dadata"
      from-bound="street"
      to-bound="house"
      highlight-class-name="vue-dadata__highlight"
      unhighlight-class-name="vue-dadata__unhighlight"
      highlight-tag="span"
      :on-change="changed"
      :location-options="locations"
    ></vue-dadata-bs>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Ref } from 'vue-property-decorator';
import VueDadataBs from '@/components/VueDadataBs.vue';

@Component({
  name: 'App',
  components: {
    'vue-dadata-bs': VueDadataBs,
  },
})
export default class App extends Vue {
  public token = '';
  public locations = {
    language: 'ru',
    locations: [
      {
        "country_iso_code": 'RU'
      },
    ],
    restrictValue: true
  };

  @Ref('dadata') readonly dadata!: any;

  public created() {
    this.token = process.env.VUE_APP_DADATA_API_KEY;
  }

  // public handleBlur() {
  //   this.dadata.setInputQuery('new');
  // }

  public handleError(error: Error) {
    // tslint:disable-next-line:no-console
    // console.log(error);
  }

  public changed(payload: any) {
    // console.log('payload', payload);
  }
}
</script>

<style lang="scss">
#app {
}

.vue-dadata__highlight {
  background-color: yellow;
  opacity: 0.2;
}
</style>
