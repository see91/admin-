<template>
  <!--<Content class="title_item center">-->
  <div>
    {{this.props.title}}
  </div>
  <!--{{this.props.title_item}}-->
  <!--</Content>-->
</template>

<script>
  export default {
    name: "Content",
    created() {
      console.log(this.props)
    }
  }
</script>

<style scoped>

</style>
