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
      <div class="acount_address center">
        <h2 class="color_fff">资金池地址</h2>
        <img class="qr margin_top" src="../assets/icon/qrcode.png" alt="">
        <p class="margin_top color_fff">qpm2qsznhks23z7629mms6s4cwef74vcwvy22gdx6a</p>
      </div>
    </Footer>
  </Layout>
</template>

<script>
  export default {
    name: "Receipt",
    data() {
      return {
        title: '由米',
        title_item: '打款',
        mobile:''
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
