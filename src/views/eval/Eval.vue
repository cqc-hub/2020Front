<template>
    <div id="evals">
        <nav-bar class="eval-nav" >
            <div slot="center"><b>留言板</b></div>
        </nav-bar>
        <div class="img"></div>
        <scroll class="content"
                ref="scroll"
                :probe-type="3"
                :pullUpLoad="true"
                :pull-up-load="true"
                @position="scroll_position"
                >
            <Eval-item v-for="item in evalInfo" :evalInfoItem="item"></Eval-item>
            {{evalInfo}}
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
                <li>11</li>
                <li>12</li>
                <li>13</li>
                <li>14</li>
                <li>15</li>
                <li>16</li>
                <li>17</li>
                <li>18</li>
                <li>19</li>
                <li>20</li>
                <li>21</li>
                <li>22</li>
                <li>23</li>
                <li>24</li>
                <li>25</li>
                <li>26</li>
                <li>27</li>
                <li>28</li>
                <li>29</li>
                <li>30</li>
                <li>31</li>
                <li>32</li>
                <li>33</li>
                <li>34</li>
                <li>35</li>
                <li>36</li>
                <li>37</li>
                <li>38</li>
                <li>39</li>
                <li>40</li>
                <li>41</li>
                <li>42</li>
                <li>43</li>
                <li>44</li>
                <li>45</li>
                <li>46</li>
                <li>47</li>
                <li>48</li>
                <li>49</li>
                <li>50</li>
                <li>51</li>
                <li>52</li>
                <li>53</li>
                <li>54</li>
                <li>55</li>
                <li>56</li>
                <li>57</li>
                <li>58</li>
                <li>59</li>
                <li>60</li>
                <li>61</li>
                <li>62</li>
                <li>63</li>
                <li>64</li>
                <li>65</li>
                <li>66</li>
                <li>67</li>
                <li>68</li>
                <li>69</li>
                <li>70</li>
                <li>71</li>
                <li>72</li>
                <li>73</li>
                <li>74</li>
                <li>75</li>
                <li>76</li>
                <li>77</li>
                <li>78</li>
                <li>79</li>
                <li>80</li>
                <li>81</li>
                <li>82</li>
                <li>83</li>
                <li>84</li>
                <li>85</li>
                <li>86</li>
                <li>87</li>
                <li>88</li>
                <li>89</li>
                <li>90</li>
                <li>91</li>
                <li>92</li>
                <li>93</li>
                <li>94</li>
                <li>95</li>
                <li>96</li>
                <li>97</li>
                <li>98</li>
                <li>99</li>
                <li>100</li>
            </ul>
        </scroll>
        <Eval-send-msg class="sendmsg" @refreshEval="refreshEval"></Eval-send-msg>
        <back-top class="back-top" v-show="isShow"
                  @click.native="backtop"
                  :class="{backtopshow:isShow}">
        </back-top>
    </div>
</template>

<script>
    import {showEvals} from 'network/getU.js'
    import NavBar from "components/common/navbar/NavBar";
    import Scroll from "@/components/common/scroll/Scroll";
    import {backTop} from "@/common/mixin";
    import EvalItem from "./children/EvalItem";
    import EvalSendMsg from "./children/EvalSendMsg";
    export default {
        name: "Eval",
        data(){
            return{
                evalInfo:[],
                refreshTimer:function () {
                    const f=this.getEvalInfo
                    setInterval(()=>{
                        f()
                        // console.log('refresh');
                    },3000)
                }
            }
        },
        components:{
            NavBar,
            Scroll,
            EvalItem,
            EvalSendMsg
        },
        methods:{
            refreshEval(){
                this.getEvalInfo()
                this.refreshTimer()
            },
            getEvalInfo(){
                showEvals().then(res=>{
                    this.evalInfo=res
                })
            },
            scroll_position(position){
                this.isShow=position.y<-300
            },
            clearT(){
                clearTimeout(this.refreshTimer)
                // console.log('clear');
            }
        },
        mounted() {
            this.getEvalInfo()
            // console.log(this.refreshTimer);
        },
        mixins:[backTop],
        activated() {
            this.$refs.scroll.refresh()
        },
        deactivated() {
            this.clearT()
        }
    }
</script>

<style scoped>
    .sendmsg{
        position: fixed;
        bottom: 49px;
        left: 0;
        right: 0;

    }
#evals{
    height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0,.2);
    font-weight: bolder;
}
    .eval-nav{
        background-color: var(--color-tint);
        color: white;
        font-weight: bolder;
    }
.content{
    position: absolute;
    top: 44px;
    bottom: 79px;
    right: 0;
    left: 0;
    overflow: hidden;
}
.img{
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: url("~assets/img/login/LoginImg.jpg")no-repeat;
    background-size: cover;
    background-position: center;
    filter: blur(100px);
    z-index: -1;
}
</style>