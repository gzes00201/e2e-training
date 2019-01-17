<template>
  <div>
    <h1>時鐘</h1>
    <h2>{{ click }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      click: ""
    };
  },
  mounted() {
      this.settime()  //當畫面一載入馬上運行此方法
    setInterval(this.settime, 1000);
  },
  methods: {
    settime: function() {
        
      const date = new Date();
      const h = date.getHours();
      const m = date.getMinutes();
      const s = date.getSeconds();

      const hh = this.check(h);
      const mm = this.check(m);
      const ss = this.check(s);
      this.click = `${hh}:${mm}:${ss}`;
    },
    check: function(i) {
      return i < 10 ? `0${i}` : i;
    }
  }
  
};
</script>


