import BackTop from "@/components/content/backtop/BackTop";
export const backTop={
	data(){
		return{
			isShow:false
		}
	},
	components:{
		BackTop
	},
	methods:{
		backtop(){
			this.$refs.scroll.scrollTo()
		}
	}

}
