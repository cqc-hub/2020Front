const webpack = require('webpack')
module.exports={
    configureWebpack:{
        resolve:{
            extensions:[],
            alias:{
                'assets':'@/assets',
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
                'views':'@/views',
                'store':'@/store'

            }
        }

    }
}