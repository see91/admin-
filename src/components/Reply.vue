<template>
  <Layout class="layout">
    <Header class="header center">
      <h3>{{title}}</h3>
      <div class="center" @click="personalCenter">
        <Avatar icon="person" size="small"/>
        <p>{{mobile}}</p>
      </div>
    </Header>
    <Content class="title_item center">
      {{title_item}}
    </Content>
    <Footer class="footer center margin_top">
      <img src="../assets/icon/realy.png" alt="">
    </Footer>
  </Layout>
</template>


<script>
  export default {
    name: "Reply",
    data() {
      return {
        title: '由米',
        title_item: '回执单',
        mobile: ''
      }
    },
    mounted(){
      this.mobile=window.localStorage.getItem('mobile');
    },
    methods:{
      personalCenter(){
        this.$router.push('personalenter')
      }
    }
  }
</script>

<style scoped>
  .layout {
    background-color: #fff;
  }

  .header {
    background-color: #ce5043;
  }

  .center {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .title_item {
    height: 100px;
    color: #fff;
    font-size: 20px;
    background-color: #e5594b;
    justify-content: center;
  }

  .footer {
    justify-content: center;
    background-color: #fff;
  }

  .color_fff {
    color: #fff;
  }

  .acount_address {
    flex-direction: column;
    border: 1px solid red;
    width: 500px;
    background-color: #e5594b;
    border-radius: 2%;
    padding: 20px 0;
  }

  .qr {
    width: 200px;
    border-radius: 10px;
  }

  .margin_top {
    margin-top: 50px;
  }
</style>

