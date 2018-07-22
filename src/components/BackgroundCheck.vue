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
    <Footer class="collection center">
      <ul>
        <li v-for="(item,index) in questionData" class="question_item">
          <div>
            {{index+1}}{{ item.question}}
          </div>
          <RadioGroup v-model="disabledGroup">
            <label>{{item.lable1}}</label>
            <Radio ></Radio>
            <label>{{item.lable2}}</label>
            <Radio></Radio>
            <label>{{item.lable3}}</label>
            <Radio></Radio>
          </RadioGroup>
        </li>
      </ul>
      <Button class="submit" @click="_submit" type="error">提交</Button>
</Footer>
  </Layout>
</template>
<script>
  export default {
    name: 'BackgroundCheck',
    data() {
      return {
        title: '由米',
        title_item: '问卷调查',
        mobile: '',
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
      this.mobile=window.localStorage.getItem('mobile');
    },
    methods: {
      _submit() {
        this.$router.push('/receipt')
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

  .question_item {
    width: 400px;
    height: 100px;
    display: flex;
    align-items: normal;
    justify-content: space-between;
    flex-direction: column;
  }

  .submit {
    width: 300px;
    height: 50px;
    margin-top: 30px;
  }
</style>
