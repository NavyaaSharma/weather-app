var request=require('request')

exports.forecast=function(latitude,longitude,callback)
{
    var url="https://api.darksky.net/forecast/a68748cb146193c10d83394599b8a3c8/"+latitude+","+longitude+"?units=si"
    request({url:url,json:true},function(err,res){
        if(err)
        {
            callback("unable to connect location services!!",undefined)
        }
        else if(res.body.error)
        {
            callback("unable to find location. try another search!!",undefined)
        }
        else{
            callback(undefined,res.body.daily.data[0].summary+"."+" The temperature is "+res.body.currently.temperature+"degree celcius."+" There is "+res.body.currently.precipProbability+" probability of rain.")
        }
    })
}

// forecast(37.8267,-122.4233,function(err,forecastdata){
//     console.log(forecastdata)
//     console.log(err)
// })
