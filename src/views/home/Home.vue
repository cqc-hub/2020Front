<template>
    <div id="home">
        <div @click="showdata">
            <nav-bar class="home-nav" >
                <div slot="center"><b>首页</b></div>
            </nav-bar>
        </div>
        <scroll class="content"
                @position="scroll_position"
                ref="scroll"
                :probe-type="3"
                :pullUpLoad="true"
                :pull-up-load="true"
                @pullingUp="loadMore">
            <home-swiper :banners="banners" ></home-swiper>
            放news什么的
            <hr>
            {{userAll}}
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
        <back-top class="back-top" v-show="isShow"
                  @click.native="backtop"
                  :class="{backtopshow:isShow}">
        </back-top>
    </div>
</template>

<script>
    import NavBar from "components/common/navbar/NavBar";
    import {showUserAllInfo} from 'network/showUser.js'
    import {showBannersInfo} from 'network/showBanners.js'
    import Scroll from "@/components/common/scroll/Scroll";
    import HomeSwiper from "views/home/childrencomponents/HomeSwiper";
    import {showLogin} from "common/login";
    import {backTop} from "@/common/mixin";

    export default {
        name: "Home",
        data(){
            return{
                user:{},
                userAll:[],
                banners:[]
            }
        },
        components:{
            NavBar,
            Scroll,
            HomeSwiper
        },
        mixins:[backTop],
        methods:{

            // swiperImgLoad(){
            //   Object.keys(this.$store.state.user).length==0 ? showLogin():this.user=this.$store.state.user
            //   this.$toast.isShow('请先登录',1500)
            // },
            loadMore(){},
            scroll_position(position){
                this.isShow=position.y<-300
            },
            showAllUser(){
                showUserAllInfo().then(res=>{
                   this.userAll=res
                })
            },
            getBanners(){
                showBannersInfo().then(res=>{
                    // console.log(res);
                    this.banners=res

                })
            },
            showdata(){
                const dd=(new Date()).getTime()
                console.log(dd);
            },
        },
        computed:{

        },
        mounted() {
            this.showAllUser()
            this.getBanners()
        },
        activated() {
            this.$refs.scroll.refresh()
        }
    }
</script>

<style scoped>
    #home{
        height: 100vh;
        position: relative;
    }
    .content{
        position: absolute;
        top: 44px;
        bottom: 49px;
        right: 0;
        left: 0;
        overflow: hidden;
    }
    .home-nav{
        background-color: var(--color-tint);
        color: white;
        font-weight: bolder;

    }
    .back-top{
        z-index: 8;
    }
</style>