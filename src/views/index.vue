<template>

	<div class="limiter" id="app">
		<div class="container-login100" style="background-image: url('/demo/images/bg-01.jpg');">
			<div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
				<form class="login100-form validate-form">
					<span class="login100-form-title p-b-49">
						會員中心
					</span>

					<div class="wrap-input100 validate-input m-b-23" data-validate = "Username is reauired">
						<span class="label-input100">Username</span>
              <input type="text" id="username" name="username"  class="input100"  v-model="username"  placeholder="請輸入帳號">
					</div>

					<div class="wrap-input100 validate-input" data-validate="Password is required">
						<span class="label-input100">Password</span>
              <input type="password" id="password" class="input100" name="pass" v-model="password" placeholder="請輸入密碼"/>
					</div>
					
					<div class="text-right p-t-8 p-b-31">
						<a href="#">
							忘記密碼
						</a>
					</div>
					
					<div class="container-login100-form-btn">
						<div class="wrap-login100-form-btn">
							<div class="login100-form-bgbtn"></div>

							<a id="signin" href="javascript:;"  @click="dosignin"  class="login100-form-btn">
								登入
							</a>
             

						</div>
					</div>

					<div class="flex-col-c p-t-155">
						<span class="txt1 p-b-17">
							或先
						</span>
						<a id="register" href="/register" class="txt2">
							註冊
						</a>
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
      username:'',
      password:''
    }
  },
  methods: {
    dosignin:function() {
      if (this.username == '') {
        alert('請輸入帳號')
        return
      }
      if (this.password == '') {
        alert('請輸入密碼')
        return
			}
			this.$router.push('homepage')
    }
  },
   mounted() {
    if (localStorage.username) {
      this.username = localStorage.username
    }

  },
   watch: {
    username(newName) {
      localStorage.username = newName
    }
  }

}
</script>
