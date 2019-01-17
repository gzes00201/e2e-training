<template>
    <div>
        <h1>{{nowTime | formatDate}}</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nowTime : new Date().getTime()
        }
    },
    filters: {
        formatDate:function (value) {

            const time = new Date(Number(value))
            const h = time.getHours()
            const m = time.getMinutes()
            const s = time.getSeconds()
            const hh =  h <10 ? `0${h}` : h
            const mm =  m <10 ? `0${m}` : m
            const ss =  s <10 ? `0${s}` : s
            return `${hh}:${mm}:${ss}`
        }
    },
    methods:{
        clock() {
            this.nowTime = new Date().getTime()
        },
        runClock() {
            this.clock()
            setInterval(this.clock, 1000)
        }
    },
    mounted(){
        this.runClock()
    }
}
</script>
