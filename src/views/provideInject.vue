<template>
  <div class='container'>
      <customeForm>
            <customeItem>
                <customeInput></customeInput>
            </customeItem>
      </customeForm>
  </div>
</template>

<script>
import customeForm from '@/components/custome-form'
import customeItem from '@/components/custome-item'
import customeInput from '@/components/custome-input'
export default {
  name: '',
  components:{customeForm,customeItem,customeInput},
  data () {
    return {
    }
  },

  mounted(){},
  methods: {}
}
</script>

<style lang='scss' scoped>
 .container{}
</style>
