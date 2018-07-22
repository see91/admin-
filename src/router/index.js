import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import BackgroundCheck from '@/components/BackgroundCheck';
import Receipt from '@/components/Receipt';
import Personalenter from '@/components/PersonalCenter';
import ApplyHelp from '@/components/ApplyHelp';
import Reply from '@/components/Reply';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/backcheck',
      name: 'backcheck',
      component: BackgroundCheck
    },
    {
      path: '/receipt',
      name: 'receipt',
      component: Receipt
    },
    {
      path: '/personalenter',
      name: 'personalenter',
      component: Personalenter
    },
    {
      path: '/applyHelp',
      name: 'applyHelp',
      component: ApplyHelp
    },
    {
      path: '/reply',
      name: 'reply',
      component: Reply
    },
  ]
});
