export function debounce(funct,delay){
	let timer=null
	return (...args)=>{
		if (timer) clearTimeout(timer)
		timer=setTimeout(()=>{
			funct.apply(this,args)
		},delay)
	}
}

