<template>	
	<div class="limiter">
		<div class="container-login100" style="background-image: url('/demo/images/bg-01.jpg');">
			<div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
				<form class="login100-form validate-form">
					<span class="login100-form-title p-b-49">
						<span id="userTitle">{{username}}</span>,妳好 歡迎登入
					</span>
					<div class="wrap-input100 validate-input m-b-23" data-validate = "Username is reauired">
						<a  href="/time" class="txt2">時鐘</a>
						<a  href="/lot" class="txt2">倒數</a>
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
			username:localStorage.username,		
		}
	}

 }

</script>




