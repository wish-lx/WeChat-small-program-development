import {config} from '../config'

// 定义一个类
class HTTP{
   request(params) {
    //  url data methods
    if(!params.methods){
      params.methods = "GET"
    }
      wx.request({
        url:api_base_url+params.url,
        methods:params.methods,
        data: params.data,
        header:{
          'content-type':'application/json',
          'appkey': config.appkey
        },
        success:(res)=>{
           let code = res.statusCode
           if(code.startsWidth('2')){

           }else{
             
           }
        },
        fail:(err)=>{
          
        }
      })
   }
}