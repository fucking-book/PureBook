const app = getApp()
var http = require('../../utils/httpUtil.js')

Page({
  data: {
    userInfo: {},
    booklistArray:[{
      booklistName:"文学，音乐与艺术",
      bookCount:10,
      starCount:10
    }, {
      booklistName: "我是即将来到的日子",
      bookCount: 23,
      starCount: 12
      }, {
      booklistName: "阿尔贝加缪经典",
      bookCount: 7,
      starCount: 5
      }]
  },

  onLoad: function () {
    var that = this
    app.getUserInfo(function (userInfo) {
      that.setData({
        userInfo: userInfo
      })
    })

    var api = "/users/" + app.globalData.userId + "/collection"
    var params = {}
    http.GET(api, params, function (res) {
      console.log(res.data)
    })




  },

  jumpBooklist:function(){
    wx.navigateTo({
      url: '../booklist/booklist',
    })
  }

})