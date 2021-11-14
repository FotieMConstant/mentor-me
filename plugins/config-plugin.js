import Vue from 'vue'
import config from '~/config.json'
// Assurez-vous de choisir un nom unique pour le drapeau
// il n'y aura donc pas de conflit avec aucun autre mixin.
// if (!Vue.__config_plugin__) {
//   Vue.__config_plugin__ = true
//   Vue.mixin({
//     data () {
//       return {
//         config
//       }
//     }
//   }) // On peut ensuite configurer le mixin
// }

const mixin = {
  data () {
    return {
      config
    }
  }
}

Vue.mixin(mixin)
