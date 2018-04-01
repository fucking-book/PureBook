const app = getApp()
var http = require('../../utils/httpUtil.js')

Page({
  data: {
    userInfo: {},
    likeBookArray:[{
      bookName:"《荒原狼》",
      bookAuthor:"赫尔曼·黑塞"
    },{
      bookName:"《看不见的城市》",
      bookAuthor:"卡尔维诺"
    }, {
      bookName: "《西西福斯神话》",
      bookAuthor: "加缪"
      }]
  },

  jumpBook: function () {
    wx.navigateTo({
      url: '../book/book',
    })
  },

  onLoad: function () {
    var that = this
    app.getUserInfo(function (userInfo) {
      that.setData({
        userInfo: userInfo
      })
    })

    var api = "/users/"+app.globalData.userId + "/collection"
    var params={}
    http.GET(api,params,function(res){
      console.log(res)
    })

  },
  
})