module.exports = {
    runtimeCompiler: true,
    css: {
        loaderOptions: {
            css: {},
            postcss: {
                plugins: [
                    require('postcss-px2rem')({
                        remUnit: 37.5
                    })
                ]
            }
        }
    },
    lintOnSave:false,
    devServer: {
        host:'localhost',
        port: 8080,
        // 设置代理
        proxy: {
            '/api': {
                target: 'https://m.baidu.com', // 域名
                ws: false, // 是否启用websockets
                changOrigin: true, // 开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
                pathRewrite: {
                    '/api': '/api'
                }
            }
        }
    }
}