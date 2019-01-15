<template>
    <div>
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
