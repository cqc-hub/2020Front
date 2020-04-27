import register from './Register'
const obj={}
obj.install=function (Vue) { //vue.use()执行instal方法时会默认传入Vue
    // Vue.extend()
    //创建组建构造器
    const regConstructor=Vue.extend(register)
    //new方式 根据组建构造器，创建一个组建对象
    const reg=new regConstructor()
    //把组建对象 手动挂载到某一个元素（标签）
    reg.$mount(document.createElement('div'))
    //tost.$el就是上面创建的div了
    document.body.appendChild(reg.$el)
    Vue.prototype.$register=reg
}
export default obj
