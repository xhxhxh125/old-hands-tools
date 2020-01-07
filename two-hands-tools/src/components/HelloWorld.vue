<template>
    <div class="hello">
        <h1 :style="{color}">{{$t('common.home')}}</h1>
        <ul class="theme">
            <li v-for="(theme, index) in $i18n.messages.en.skin" :key="index">
                <span :style="{background:theme}" class="cube" @click="changeTheme(theme)"></span>
            </li>
        </ul>
        <div class="zh" @click="changeLanguage('zh')">zh</div>
        <div class="en" @click="changeLanguage('en')">en</div>
        <div class="ja" @click="changeLanguage('ja')">ja</div>
        <div class="ko" @click="changeLanguage('ko')">ko</div>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    props: {
        msg: String
    },
    data() {
        return {
            color: "#000"
        };
    },
    computed: {
        iszh: {
            get() {
                console.log("t", this.$i18n);
                return this.$i18n.locale === "zh";
            },
            set(v) {}
        }
    },
    methods: {
        changeTheme(theme) {
            this.color = theme;
        },
        changeLanguage(lang) {
            console.log("lang", lang);
            this.$i18n.locale = lang;
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1,
h2 {
    font-weight: normal;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
.hello {
    /* width: 300px; */
    height: 100%;
    margin: 0 auto;
    // background: url(../img/bg.jpg) top center;
    min-width: 1000px;
    /* background-size: 100% 100% */
}
.container {
    margin: 0 auto;
    width: 1000px;
    height: 100%;
    background: #fff;
}
.cube {
    width: 20px;
    height: 20px;
    display: block;
    cursor: pointer;
}
</style>
