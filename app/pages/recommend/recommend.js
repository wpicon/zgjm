const Util = require('../../utils/util.js')
Page({
    data: {},
    onLoad() {
        wx.setNavigationBarTitle({ title: '更多好玩' })
    },
    handleCardTap(e) {
        const appId = e.currentTarget.dataset.appid
        if (typeof appId === 'undefined') {
            console.log('获取appId失败', e)
            return
        }

        // 等于自身，重定向到首页
        if (appId === 'wxb30c12d2e291b24b') {
            wx.redirectTo({
                url: '../index/index'
            })
            return
        }

        wx.navigateToMiniProgram({
            appId,
            path: 'pages/index/index',
            fail: err => { console.log('wx.navigateToMiniProgram error', err) }
        })
    },
    // 定义转发
    onShareAppMessage() {
        const title = '快来呀，这里有好多好玩的!'
        const path = '/pages/recommend/recommend'

        return {
            title: title,
            path: path,
            imageUrl: '../../images/logo/share.png'
        }
    }
})