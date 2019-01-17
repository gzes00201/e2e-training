<template>
 <body>
	
	<div class="limiter">
		<div class="container-login100" style="background-image: url('/demo/images/bg-01.jpg');">
			<div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
				<form class="login100-form validate-form">
					<span class="login100-form-title p-b-49">
						會員註冊
					</span>

					<div class="wrap-input100 validate-input m-b-23" >
						<span class="label-input100">Username</span>
            <input type="text" id="username" name="username" class="input100" v-model="username" placeholder="請輸入帳號"/>
						<span class="focus-input100" data-symbol=""></span>
					</div>

					<div class="wrap-input100 validate-input">
						<span class="label-input100">Password</span>
             <input type="password" class="input100" id='password' name="pass" v-model="password" placeholder="請輸入密碼"/>

						<span class="focus-input100" data-symbol=""></span>
					</div>
				
					<div class="wrap-input100 validate-input">
						<span class="label-input100">性別</span>
						<select id="sex" class="input100" name="sex" >
							<option value="M">男</option>
							<option value="F">女</option>
						</select>
					</div>

					<div class="text-right p-t-8 p-b-31">
						<a href="#">
							忘記密碼
						</a>
					</div>
					
					<div class="container-login100-form-btn">
						<div class="wrap-login100-form-btn">
							<div class="login100-form-bgbtn"></div>
							<a id="register" href="javascript:;" @click="test"  class="login100-form-btn">
								註冊
							</a>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</body>
  
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
    test:function() {
      if (this.username == '') {
        alert('請輸入帳號')
        return
      }
      if (this.password == '') {
        alert('請輸入密碼')
        return
      }
	    location.href = '/'
    }
  }
}
</script>
