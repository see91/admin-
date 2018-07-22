<template>
  <Layout class="layout">
    <Header class="header center">
      <h3>{{title}}</h3>
      <div class="center">
        <Avatar icon="person" size="small"/>
        <p>{{mobile}}</p>
      </div>
    </Header>
    <Content class="title_item center">
      {{title_item}}
    </Content>
    <Footer class="footer center margin_top">
      <ul>
        <li class="fun">
          <span>姓名:</span>
          <span>汤米</span>
          <Button type="error" @click="_applyHelp">
            申请互助
          </Button>
        </li>
        <li>
          <span>身份证号 :</span>
          <span>11010319990101****</span>
        </li>
        <li>
          <span>手机号 :</span>
          <span>123****8888</span>
        </li>
        <li>
          <span>钱包地址 :</span>
          <span>qrqhqvg9hs060v4608zvrs0efrm73h36zc3xqffplq</span>
        </li>
        <li>
          <span>资金池 :</span>
          <span>0.1BCH</span>
        </li>
      </ul>
    </Footer>
  </Layout>
</template>

<script>
  export default {
    name: "PersonalCenter",
    data() {
      return {
        title: '由米',
        title_item: '个人中心',
        mobile: ''
      }
    },
    mounted() {
      this.mobile = window.localStorage.getItem('mobile');
    },
    methods:{
      _applyHelp(){
        this.$router.push('/applyHelp')
      }
    }
  }
</script>
<style scoped lang="less">
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

  .margin_top {
    margin-top: 50px;
  }

  .fun {
    justify-content: space-between;
  }

  li {
    height: 50px;
    display: flex;
    padding: 0 20px;
    align-items: center;
    border-bottom: 1px solid #ccc;
    span:nth-child(1) {
      width: 100px;
    }
  }
</style>
