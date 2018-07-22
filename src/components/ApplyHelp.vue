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
    <Footer class="collection center">
      <div class="collection_item">
        <Input v-model="value6" type="textarea" :rows="4" placeholder="申请缘由"></Input>
        <Upload
          multiple
          type="drag"
          action="http://localhost:8080/"
        >
          <div style="padding: 20px 0">
            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
            <p>选择文件上传证明</p>
          </div>
        </Upload>
      </div>
      <Button class="submit" @click="_submit" type="error">提交</Button>
    </Footer>
  </Layout>
</template>
<script>
  export default {
    name: 'ApplyHelp',
    data() {
      return {
        title: '由米',
        title_item: '申请互助',
        mobile: '',
        value6:'',
        disabledGroup: 'hu',
        questionData: [
          {
            question: '是否了解BCH',
            lable1: '了解',
            lable2: '了解一点',
            lable3: '完全不了解',
          },
          {
            question: '是否有重大疾病',
            lable1: '没有',
            lable2: '有',
            lable3: '曾经有',
          },
          {
            question: '是否有重大疾病',
            lable1: '没有',
            lable2: '有',
            lable3: '曾经有',
          },
          {
            question: '是否有重大疾病',
            lable1: '没有',
            lable2: '有',
            lable3: '曾经有',
          },
          {
            question: '是否有重大疾病',
            lable1: '没有',
            lable2: '有',
            lable3: '曾经有',
          }, {
            question: '是否有重大疾病',
            lable1: '没有',
            lable2: '有',
            lable3: '曾经有',
          },
        ],
      }
    },
    mounted() {
      this.mobile = window.localStorage.getItem('mobile');
    },
    methods:{
      personalCenter(){
        this.$router.push('/personalenter')
      },
      _submit(){
        this.$router.push('/reply')
      }
    }
  }
</script>

<style scoped>
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

  .collection {
    background-color: #fff;
    flex-direction: column;
    justify-content: center;
  }

  .collection_item {
    width: 500px;
    border-radius: 5%;
  }

  .submit {
    width: 300px;
    height: 50px;
    margin-top: 50px;
  }
</style>
