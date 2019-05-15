var request=require('request')


exports.geocode=function(place,callback)
{
    var geourl="https://api.opencagedata.com/geocode/v1/json?q="+place+"&key=280fd06ba1fb47cbb06f6c8b8b6b9217"
    request({url:geourl,json:true},function(err,res){
        if(err)
        {
            callback("unable to connect location services!!",undefined)
        }
        else if(res.body.results.length==0)
        {
            callback("unable to find location. try another search!!",undefined)
        }
        else
        {
            callback(undefined,{
                latitude:res.body.results[0].geometry.lat,
                longitude:res.body.results[0].geometry.lng,
                location:place
            })
        }
    })
    
}

// geocode("",function(err,data){
//     console.log(err)
//     console.log(data)
// })

