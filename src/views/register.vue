<template>
  <div class="limiter">
    <div class="container-login100" style="background-image: url('/demo/images/bg-01.jpg');">
      <div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
        <form class="login100-form validate-form">
          <span class="login100-form-title p-b-49">會員註冊</span>

          <div class="wrap-input100 validate-input m-b-23">
            <span class="label-input100">Username</span>
            <input
              id="username"
              v-model="username"
              class="input100"
              type="text"
              name="username"
              placeholder="請輸入帳號"
            >
          </div>

          <div class="wrap-input100 validate-input">
            <span class="label-input100">Password</span>
            <input
              id="password"
              v-model="password"
              class="input100"
              type="password"
              name="pass"
              placeholder="請輸入密碼"
            >
          </div>

          <div class="wrap-input100 validate-input">
            <span class="label-input100">性別</span>
            <select id="sex" v-model="sex" class="input100" name="sex">
              <option value="M">男</option>
              <option value="F">女</option>
            </select>
          </div>

          <div class="text-right p-t-8 p-b-31">
            <a href="#">忘記密碼</a>
          </div>

          <div class="container-login100-form-btn">
            <div class="wrap-login100-form-btn">
              <div class="login100-form-bgbtn"></div>
              <a
                id="register"
                href="javascript:;"
                @click="doRegister()"
                class="login100-form-btn"
              >註冊</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      sex: 'M'
    }
  },
  methods: {
    doRegister() {
      if (this.username === '') {
        alert('請輸入帳號')
        return
      }

      if (this.password === '') {
        alert('請輸入密碼')
        return
      }

      localStorage.setItem('username', this.username)
      this.$router.push('/')
    }
  }
}
</script>
