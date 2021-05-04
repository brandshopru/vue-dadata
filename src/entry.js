import VueDadataBs from './components/VueDadataBs.vue';

const install = Vue => {
  if (install.installed) {
    return;
  }
  install.installed = true;
  Vue.component('vue-dadata-bs', VueDadataBs);
};

const plugin = {
  install,
};

let GlobalVue = null;

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.vue;
}

if (GlobalVue) {
  GlobalVue.use(plugin);
}

VueDadataBs.install = install;

export default VueDadataBs;
