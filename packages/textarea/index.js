// packages/textarea/index.js

// 导入组件，组件必须声明 name
import Textarea from './src/main.vue'

// 为组件添加 install 方法，用于按需引入
Textarea.install = function (Vue) {
    Vue.component(Textarea.name, Textarea)
}

export default Textarea