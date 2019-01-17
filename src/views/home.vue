<template>
    <!-- <div>
        <span id="userTitle">{{user}}</span> 你好,歡迎光臨<br>
        <p>現在時間：<my-Clock></my-Clock></p>  
        <CountDown/>
    </div> -->
<div class="limiter">
		<div class="container-login100" style="background-image: url('/demo/images/bg-01.jpg');">
			<div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
				<form class="login100-form validate-form">
					<span class="login100-form-title p-b-49">
						<span id="userTitle">{{user}}</span>,你好
                        <br>
                            <span> 歡迎登入</span>
					</span>
					<div class="wrap-input100 validate-input m-b-23" data-validate = "Username is reauired">
						<p>現在時間：<my-Clock></my-Clock></p>  
                        <CountDown/>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import Clock from '../components/clock'
import CountDown from '../components/countdown'

export default {
    components: {
        'my-Clock': Clock,
        CountDown,
    },
    data() {
        return {
            user:''
        }
    },
    mounted(){
        this.user = !!sessionStorage.user ? sessionStorage.user : '找不到使用者'
    }
}
</script>
