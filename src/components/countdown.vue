<template>
    <div>
        <h1>{{m}}:{{s}}</h1>
       
    </div>
</template>

<script>
export default {
    data(){
        return{
            time : 3100,
            m : '00',
            s : '00',
            timer: ''
        }
    },
    methods:{
        setClock(){
            const m = Math.floor(this.time/60);
            const s = this.time%60;
            
            const mm = this.formatTime(m);
            const ss = this.formatTime(s);
            
            this.m = mm;
            this.s = ss;
        },
        count(){
            this.setClock();
            this.time--;

            if(this.time<0){
              this.stop();
                
            }
        },
        formatTime(i){
            return i<10? `0${i}`:i
        },
    
        stop(){
            clearInterval(this.timer)
        }
    },
    // 畫面載入完 執行計時器
    mounted(){
        this.timer = setInterval(this.count,1000)
    },
    // 結束生命週期 stop不會再背景繼續運作
    destroyed(){
       this.stop()
    }
}
</script>

<style>

</style>
