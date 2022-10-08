import mindEditor from './components/minderEditor'
import * as locale from "./locale";
import PackageJSON from "../package.json"
import 'kity'
import 'kityminder-core'
require('hotbox-minder/hotbox.js');
require('./script/expose-editor.js');


const install = function (Vue, options = {}) {
  locale.use(options.locale);
  locale.i18n(options.i18n);
  Vue.component(mindEditor.name, mindEditor);
}

const plugin = {
  name: "vueMinderEditorPlus",
  version: PackageJSON.version,
  locale: locale.use,
  i18n: locale.i18n,
  install,
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}

export default plugin;
