const app = getApp()
var http = require('../../utils/httpUtil.js')

Page({
  data: {
    userInfo: {},
    reviewArray:[{
      reviewTitle:"",
      reviewBook:"",
      reviewId:0,
      reviewMonth:0,
      reviewDay:0,
      reviewYear:0
    }]
  },

  onLoad: function () {
    var that = this
    app.getUserInfo(function (userInfo) {
      that.setData({
        userInfo: userInfo
      })
    })
    
    const api = "/books/" + app.globalData.userId + "/reviews"
    let params = {}
    http.GET(api, params, function (res) {
      const data = res.data.data;
      for (let i = 0; i < data.length; i++) {
        const param1 = "reviewArray[" + i + "].reviewTitle"
        const param2 = "reviewArray[" + i + "].reviewBook"
        const param3 = "reviewArray[" + i + "].reviewId"
        const param4 = "reviewArray[" + i + "].reviewYear"
        const param5 = "reviewArray[" + i + "].reviewMonth"
        const param6 = "reviewArray[" + i + "].reviewDay"
    
        http.GET("/books/"+data[i].bookId,{},function(r){
          
          that.setData({
            [param1]: data[i].title,
            [param2]: r.data.data.name,
            [param3]: data[i].id,
            [param4]: new Date(data[i].time).getFullYear(),
            [param5]: new Date(data[i].time).getMonth(),
            [param6]: new Date(data[i].time).getDate()
          })
        })
      }
    })
  },
  
  gotoreview: function(){
    wx.navigateTo({
      url: '../bookReview/bookReview?id=' + this.data.reviewArray[index].reviewId,
    })
  }

})