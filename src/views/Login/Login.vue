<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in" title="欢迎登录" :bordered="false">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit"></login-form>
          <p class="login-tip">输入任意用户名和密码即可</p>
        </div>
      </Card>
    </div>
  </div>
</template>
<script>
import LoginForm from './components/LoginForm/LoginForm'
import { mapActions } from 'vuex'
export default {
  name: 'login',
  methods: {
    ...mapActions([
      'handleLogin',
      'getUserInfo'
    ]),
    handleSubmit ({username, password}) {
      this.handleLogin({username, password}).then(res => {
        /* this.getUserInfo().then(res => {
          this.$router.push({
            name: 'home'
          })
        }) */
      })
    }
  },
  components: {
    LoginForm
  }
}
</script>
<style scoped lang="less">
  .login{
    width: 100%;
    height: calc(100vh);
    background: url('./images/login-bg.jpg') center;
    background-size: cover;
    position: relative;
    &-con{
      position: absolute;
      right: 160px;
      top: 50%;
      transform: translateY(-60%);
      width: 300px;
      &-header{
        font-size: 16px;
        font-weight: 300;
        text-align: center;
        padding: 30px 0;
      }
      .form-con{
        padding: 10px 0 0;
      }
      .login-tip{
        font-size: 10px;
        text-align: center;
        color: #c3c3c3;
      }
    }
  }
</style>
