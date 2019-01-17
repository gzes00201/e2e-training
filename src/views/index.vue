<template>
    <div class="limiter" id="app">
        
						<!-- 會員中心
			

            帳號： <input type="text" id="username" v-model="user" placeholder="請輸入帳號">
            <br>
            密碼： <input type="password" id="password" v-model="passwd" placeholder="請輸入密碼">
            <br>
            <a href="＃">忘記密碼</a>
            <br>
            <a href="javascript:;" id="signin" v-on:click="doSignin">登入</a>
            <br>
             <a href="javascript:;" id="register" v-on:click="goToRegister">註冊</a> -->
<div class="container-login100" style="background-image: url('/demo/images/bg-01.jpg');">
			<div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
				<form class="login100-form validate-form">
					<span class="login100-form-title p-b-49">
						會員中心
					</span>

					<div class="wrap-input100 validate-input m-b-23" data-validate = "Username is reauired">
						<span class="label-input100">Username</span>
						<input id="username" class="input100" type="text" name="username" v-model="user" placeholder="請輸入帳號">
					</div>

					<div class="wrap-input100 validate-input" data-validate="Password is required">
						<span class="label-input100">Password</span>
						<input id="password" class="input100" type="password" name="pass" v-model="passwd" placeholder="請輸入密碼">
					</div>
					
					<div class="text-right p-t-8 p-b-31">
						<a href="#">
							忘記密碼
						</a>
					</div>
					
					<div class="container-login100-form-btn">
						<div class="wrap-login100-form-btn">
							<div class="login100-form-bgbtn"></div>
							<a id="signin" href="javascript:;" v-on:click="doSignin"  class="login100-form-btn">
								登入
							</a>
						</div>
					</div>

					<div class="flex-col-c p-t-155">
						<span class="txt1 p-b-17">
							或這你要先
						</span>

						<a href="javascript:;" id="register" v-on:click="goToRegister"  class="txt2">
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
      user:'',
      passwd:''

    }
  },
  methods:{
    doSignin:function() {

      if (this.user === '') {
        alert('請輸入帳號')
        return
      } 

      if (this.passwd === '') {
        alert('請輸入密碼')
        return
      } 
      
      sessionStorage.user = this.user
      this.$router.push('/home')
    },
    goToRegister:function() {
      this.$router.push('/register')
    }
  },
  // mounted() {
  //     if (sessionStorage.user) {
  //       this.user = sessionStorage.user
  //     }
  //   },
  // watch:{
  //     user(newUser) {
  //       sessionStorage.user = newUser
  //     }
  //   }
}
</script>
