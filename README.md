# Vue-MindEditor based on fex-team/kityminder-core
> 该项目是参考 [vue-mindeditor](https://github.com/fudax/vue-mindeditor) 以及 [kityminder-editor](https://github.com/fex-team/kityminder-editor)
> 源码，基于 [kityminder-core](https://github.com/fex-team/kityminder-core) 实现

## install
``` bash
npm install vue-minder-editor-plus --save
```

## Usage
```javascript
import vueMinderEditor from 'vue-minder-editor-plus'
import Vue from 'vue'
Vue.use(vueMinderEditor)
```

## component
```html
<template>
  <div>
    <minder-editor :progress-enable="false" :import-json="importJson"/>
  </div>
</template>

<script>
import minderEditor from '../../dist/static/js/vueMinderEditor'
import vue from 'vue'
vue.use(minderEditor);
export default {
  name: "test-plugin",
  data() {
    return {
      importJson: {
          // 节点数据
          root: {
            data: {
              // 文本内容
              text: 'vue-minder-editor-plus',
              // 标签
              resource: ['模块1'],
              // 是否禁止修改
              disable: true,
              // 默认展开或折叠，默认是展开的，collapse 可设为折叠
              // expandState: 'collapse',
              // 在 disable 为 true 的情况下，允许添加标签
              tagEnable: true,
              // 在 disable 为 true 的情况下，允许删除节点
              allowDelete: true,
              // 在 disable 为 true 的情况下，允许添加标签，优先级比 tagEnable 高
              allowDisabledTag: true,
            },
            // 子节点
            children: [
              {
                data: {
                  text: 'child1',
                  disable: true,
                  expandState: 'collapse',
                  resource: ['模块2']
                },
                children: [
                  {
                    data: {
                      text: 'child11',
                      disable: true,
                      resource: ['模块2']
                    },
                  },
                  {
                    data: {
                      text: 'child12',
                    }
                  }
                ]
              },
              {
                data: {
                  text: 'child2',
                }
              }
            ]
          },
        },
        tags:  ['模块1','模块2']
      }
    }
  }
}
</script>
```

## Build Setup

``` bash
# install npm dependencies
    npm install

# serve with hot reload at localhost:8088
    npm run dev

# build for plugin with minification
    npm run build

# License
    BSD-3-Clause License
```
## 国际化
```
// 方式一
import locale from '/src/locale/lang/en-US'
Vue.use(vueMinderEditorPlus, {
  locale
});

// 方式二
import lang from '/src/locale/lang/en-US'
import locale from '/src/locale'
locale.use(lang)
Vue.use(vueMinderEditorPlus);

// 方式三
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import enLocale from 'vue-minder-editor-plus/src/locale/lang/en-US';
import zhLocale from 'vue-minder-editor-plus/src/locale/lang/zh-CN';
import vueMinderEditor from 'vue-minder-editor-plus';

const messages = {
  en: {
    message: 'hello',
    ...enLocale
  },
  zh: {
    message: '你好',
    ...zhLocale
  }
}

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en', // set locale
  messages, // set locale messages
})

Vue.use(vueMinderEditor, {
  i18n: (key, value) => i18n.t(key, value)
});
```

## Props
> 以下配置部分为 kityminder-core 扩展的功能，kityminder-core 本身的 minder 对象提供了丰富的功能，使用该组件时可通过 window.minder 对象获取 minder 对象具体的使用方法，可以参考它的文档扩展 [kityminder-core wiki](https://github.com/fex-team/kityminder-core/wiki)

### 基础配置

#### importJson <br>
type Object <br>
Default: null

需要脑图解析的 js 对象，参数详情可参考上文 demo，或者调用 minder.exportJson() 查看具体参数

#### height <br>
type: Number <br>
default: 500

显示高度，默认 500px

#### disabled <br>
type: Boolean <br>
default: null

是否禁止编辑

#### defaultMold
type: Number <br>
default: 3

外观设置中样式的默认值

### 启用配置

#### sequenceEnable
type: Boolean <br>
default: true

是否优先级功能

#### tagEnable
type: Boolean <br>
default: true

是否启用标签功能

#### progressEnable
type: Boolean <br>
default: true

是否启用完成进度功能

#### moveEnable
type: Boolean <br>
default: true

是否启用上移下移功能

#### historyEnable
type: Boolean <br>
default: true

是否启用撤回重做功能

### 优先级配置
#### priorityCount <br>
type Number <br>
Default: 4

优先级最大显示数量，最多支持显示 9 个级别

#### priorityStartWithZero <br>
type: Boolean <br>
default: true

优先级是否从 0 开始

#### priorityPrefix
type: String <br>
default: 'P'
优先级显示的前缀

#### priorityDisableCheck
type: Function <br>
default: null

优先级设置的回调函数，如果返回 false 则无法设置优先级

### 标签配置
#### tags
type: Array <br>
default: []

标签选项

#### distinctTags
type: Array <br>
default: []

定义排他标签，比如 ['tag1','tag2'] ,则 tag1 不能和 tag2 共存

#### tagDisableCheck
type: Function <br>
default: null

菜单栏是否允许打标签的回调函数，返回 false 则不允许打标签

#### tagEditCheck
type: Function <br>
default: null

打标签时的回调函数，返回 false 则打标签不成功



