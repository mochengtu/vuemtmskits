module.exports = {
    devServer: {
        proxy: {
            '/g2': {
                target: 'https://view.inews.qq.com',    // api接口基础路径
                changeOrigin: true,                 // 是否支持跨域
                ws: true,
                pathRewrite: {
                    '^/g2': ''                       // 重写路径：去掉路径中开头的 '/api'
                }
            }
        }
    }
}