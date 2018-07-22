<template>
  <div>
    <Layout class="layout">
      <Header class="header">{{title}}</Header>
      <Content class="content_box">
        <div class="fun_box">
          <h2 class="title">由 我</h2>
          <div class="ligin_box">
            <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
              <Tabs value="login">
                <TabPane label="登录" name="login">
                  <FormItem>
                    <FormItem class="margin_top" prop="mobile">
                      <Input type="text" v-model="formInline.mobile" placeholder="输入手机号">
                      <Icon type="ios-person-outline" slot="prepend"></Icon>
                      </Input>
                    </FormItem>
                    <FormItem class="margin_top" prop="password">
                      <Input type="password" v-model="formInline.password" placeholder="输入密码">
                      <Icon type="ios-locked-outline" slot="prepend"></Icon>
                      </Input>
                    </FormItem>
                  </FormItem>
                  <FormItem>
                    <Button type="error" @click="_login()">Signin</Button>
                  </FormItem>
                </TabPane>
                <TabPane label="注册" name="name2">注册</TabPane>
              </Tabs>
            </Form>
          </div>
        </div>
      </Content>
      <Footer class="footer">
        <div class="footer_item center">
          <div class="icon">
            <img src="../assets/icon/randi.png" alt="">
          </div>
          <h3>权益</h3>
          <div class="center">
            <p v-for="item in info.randi">
              {{item}}
            </p>
          </div>
        </div>
        <div class="footer_item center">
          <div class="icon">
            <img src="../assets/icon/condition.png" alt="">
          </div>
          <h3>条件</h3>
          <div class="center">
            <p v-for="item in info.condition">
              {{item}}
            </p>
          </div>
        </div>
        <div class="footer_item center">
          <div class="icon">
            <img src="../assets/icon/advantage.png" alt="">
          </div>
          <h3>优势</h3>
          <div class="center">
            <p v-for="item in info.advantage">
              {{item}}
            </p>
          </div>
        </div>
      </Footer>
    </Layout>
  </div>
</template>
<script>
  import {getCaptcha} from '../api/index';

  export default {
    name: 'Login',
    data() {
      return {
        title: '由我',
        formInline: {
          mobile: '',
          password: ''
        },
        info: {
          randi: [
            '享受重大疾病30万',
            '每月平台投资分红收益',
            '终身享受会员收益'
          ],
          condition: [
            '投入资金池0.1BCH',
            '90天生效期',
            '最高30万/人'
          ],
          advantage: [
            '终身会员制 无须续费',
            '交易记录透明、公开、去中心化',
            '投票选投资、共识机制'
          ]
        },
        ruleInline: {
          mobile: [
            {required: true, message: '请输入手机号', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {type: 'string', min: 6, message: '密码长度不低于6位', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      _login() {
        const _mobile = this.formInline.mobile;
        window.localStorage.setItem('mobile', _mobile.substr(0, 3) + '****' + _mobile.substr(7, 11));
        this.$router.push({
          path: '/backcheck',
          name: 'backcheck',
        })
      }
    }
  }
</script>

<style scoped>
  .header {
    color: #fff;
  }

  .layout {
    background: #fff;
  }

  .margin_top {
    margin-top: 30px;
  }

  .content_box {
    position: relative;
    margin: 0 auto;
    width: 1300px;
    height: 500px;
    background: url('../assets/bj.png') no-repeat;
  }

  .fun_box {
    position: absolute;
    right: 100px;
    top: 10%;
    width: 300px;
    /*height: 500px;*/
    text-align: center;
  }

  .title {
    color: #e5584b;
    font-weight: bold;
  }

  .ligin_box {
    height: 260px;
    margin-top: 30px;
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 2%;
    background: #fff;
  }

  .footer {
    display: flex;
  }

  .icon {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #e5584b;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 50%;
    height: 50%;
  }

  .footer_item {
    width: 300px;
    margin: 0 auto;
    height: 260px;
  }

  .center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
</style>
