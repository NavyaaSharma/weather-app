var express=require('express')
var g=require('./geocode')
var f=require('./forecast')

var app=express()
app.set('view engine','hbs')

app.get('',function(req,res){
    res.render('weather',{
        disp1:"",
        disp2:""
    })
})

app.get('/display',function(req,res){
    var place=req.query.pname

    g.geocode(place,(err,data)=>{
        if(err)
        {
            return res.render('weather',{
                disp1:err,
                disp2:""

            })
        }
        f.forecast(data.latitude,data.longitude,(err,forecastData)=>{
            if(err)
            {
                return res.render('weather',{
                    disp1:err,
                    disp2:""
                })
            }
            res.render('weather',{
                disp1:place,
                disp2:forecastData
            })
        })
        
    })
    

})

app.listen(3000,()=>{
    console.log("server is running")
})