<template>
  <div>
    <div :style="{ background: this['bgColor.t.background']}">主题</div>
  </div>
</template>

<script>
import theme from '../js/theme.js'
const initTheme = theme['DEFAULT']

export default {
    name: "themeSwitch",
    props: {
        'bgColor.t.background': {  // .t.: 为特殊标识 ；background: 为主题里面对应的字段名 background: '#FFFFFF'
            type: String,
            default: initTheme.background
        }
    }
}   
</script>
