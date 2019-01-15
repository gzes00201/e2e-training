<template>
  <div>
    <h1>會員註冊</h1>
    <br>
    Username
    <br>
   <input type="text" id='username' v-model="username" placeholder="請輸入帳號"/>
    <br>
    Password
    <br>
    <input type="password" id='password' v-model="password" placeholder="請輸入密碼"/>
     <br>
     性別：<select>
					<option>男</option>
					<option>女</option>
				</select>
        忘記密碼
       <br>
       <br>
       <button @click="test">註冊</button>
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