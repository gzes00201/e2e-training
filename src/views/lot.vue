<template>
  <h1>{{count}}</h1>
</template>
<script>
export default {
  data() {
    return {
      count: '',
      num:1800,
      sto:''
    };
  },
  mounted() {
    this.sto = setInterval(this.countDown, 1000);
  },
  methods: {
    countDown: function() {
					const m = Math.floor((this.num%3600)/(60))
	        const s= this.num % 60
					const mm = 	m < 10 ? `0${m}`:m;
					const ss =  s < 10 ? `0${s}`:s;
          this.count = `${mm}:${ss}`
          
          if(this.num == 0){
            clearInterval(this.sto)
          }
        	this.num--
    },
  }
};
</script>