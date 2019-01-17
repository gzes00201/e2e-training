<template>
<div class="limiter">
		<div class="container-login100" style="background-image: url('/demo/images/bg-01.jpg');">
			<div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
				<form class="login100-form validate-form">
					<span class="login100-form-title p-b-49">
						會員註冊
					</span>

					<div class="wrap-input100 validate-input m-b-23" >
						<span class="label-input100">Username</span>
						<input id="username" class="input100" type="text" name="username" v-model="user" placeholder="請輸入帳號">
						<font-awesome-icon icon="user" fixed-width id="iconn1" size="xs" class="focus-input100"/>
					</div>

					<div class="wrap-input100 validate-input">
						<span class="label-input100">Password</span>
						<input id="password" class="input100" type="password" name="pass" v-model="passwd" placeholder="請輸入密碼">
						<font-awesome-icon icon="lock" id="iconn2" fixed-width size="xs" class="focus-input100"/>

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
							<a id="register" href="javascript:;" v-on:click="checkUser"  class="login100-form-btn">
								註冊
							</a>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
    <!-- <div>
        <h1>會員註冊</h1>

            帳號： <input type="text" id="username" v-model="user" placeholder="請輸入帳號">
            <br>
            密碼： <input type="password" id="password" v-model="passwd" placeholder="請輸入密碼">
            <br>

            性別：
            <select name="sex" id="sex">
            <option value="M">男</option>
　          <option value="F">女</option>
            </select>
            <a href="javascript:;">忘記密碼</a>
            <br>
             <a href="javascript:;" id="register" v-on:click="checkUser">註冊</a>

    </div> -->
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
    checkUser:function() {
      if (this.user === '') {
        alert('請輸入帳號')
      } else if (this.passwd === '') {
        alert('請輸入密碼')
      } else {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style >
#iconn1{
	margin-top: 12px;
	margin-left: 15px;
}
#iconn2{
  margin-top: 12px;
	margin-left: 15px;
}
</style>
