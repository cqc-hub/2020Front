<template>
    <div id="register">
        <nav-bar class="reg-nav">
            <div slot="center"><b>注册</b></div>
        </nav-bar>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";

    export default {
        name: "Register",
        components:{
            NavBar
        }
    }
</script>

<style scoped>
#register{
    position: absolute;
    width: 80%;
    height: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: red;
    z-index: 200;
}
    .reg-nav{
        background-color: gray;
        color: white;
    }
</style>