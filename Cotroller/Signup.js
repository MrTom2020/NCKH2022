var user = require("../Models/user");
var mongoose = require('mongoose');
const res = require("express/lib/response");
var kqqq;
var chuoi;
var chuoi2;
module.exports = function(app)
{
    app.get("/",function(req,res){
        res.render("admin");
    });
    app.get("/Admin",function(req,res)
    {
        res.render("admin");
    });
    app.get("/Admin/home",function(req,res)
    {
        res.render("Admin/home");
    });
    app.get("/Admin/*",function(req,res)
    {
        res.render("Err");
    });
    // app.get("/Admin/home/*")
    // {
    //     employees:[
    //         {"firstName":"John", "lastName":"Doe"},
    //         {"firstName":"Anna", "lastName":"Smith"},
    //         {"firstName":"Peter", "lastName":"Jones"}
    //       ]
    //       res.send(employees);
    // }
        app.get('/JSON/*',(req,res)=>
    {
        var str = String(req.url);
        s = str.indexOf("/",1);
        email = str.substring(1,s);
        l = str.lastIndexOf("/");
        ht = str.substring(email.length + 2,l);
        nameUser = str.substring(l + 1,str.length);
        var chuoi3;
        user.find({_id:nameUser}).exec(function(err, u)
        {
         if (err) throw err;
         th:{u};
         res.send(u);  
       });
    });
    mongoose.connect('mongodb+srv://'+ 'admin01' +':'+'hiep1234' + '@cluster0.3ma3m.mongodb.net/Cluster0?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology: true},function(err,db){
        if(err)
        {
            //console.log(err);
           // kqqq = 0;
        }
        else if(db)
         {
            console.log("ok");
        }
        });
        user.find().exec(function(err, u)
             {
              if (err) throw err;
              chuoi2 = u;  
            });

        //    user.findOneAndUpdate({_id:"619a43066dbcf3f00e6737f3"},
        //    {Name:"hà lan anh abcdef",
        //    SDT:"18888888",
        //    BirthDay:"31-10-2000",
        //    CMND:"236",
        //    DC:"456",
        //    Password:"988888",
        //    Email:"tomhumchin33@gmail.com"},(err)=>{
        //       if(err)
        //       {
        //           console.log(err);
        //       }
        //       console.log("ok");
        //    });

            
           
    app.post('/login',function(req,res)
    {
        res.json({kq:1});
        // if(!req.body.Name || !req.body.Password)
        // {
        //     res.json({kq:0,loi:"Dữ liệu bị trống"})
        // }
        // else
        // {
        //     var u = new user({
        //         Name:req.body.Name,
        //         Password:req.body.Password
        //     });
        //    // setTimeout(6000);
        //     var kqtv = a(u.Name,u.Password);
        //     res.json({kq:kqtv,loi:chuoi})
        // }
         });

        app.post("/home",function(req,res)
        {
           res.json({loi1:chuoi2,loi2:chuoi})
         });
}
// function a(tk,mk)
// {
//     chuoi = 'mongodb+srv://'+ tk.toString() +':'+mk.toString() + '@cluster0.3ma3m.mongodb.net/Cluster0?retryWrites=true&w=majority';
//   //mongoose.connect(chuoi,{useNewUrlParser:true,useUnifiedTopology: true},function(err,db){
//     mongoose.connect('mongodb+srv://'+ 'admin01' +':'+'hiep1234' + '@cluster0.3ma3m.mongodb.net/Cluster0?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology: true},function(err,db){
//         if(err)
//         {
//             kqqq = 0;
//         }
//         else if(db)
//          {
//            kqqq = 1;
//            user.find({Email:'tomhumchinvn@gmail.com'}).exec(function(err, u)
//              {
//               if (err) throw err;
//               chuoi2 = u;  
//             });
//         }
//         });
//             return kqqq;
// }
// function b(NameUser)
// {
//     chuoi = 'mongodb+srv://'+ tk.toString() +':'+mk.toString() + '@cluster0.3ma3m.mongodb.net/Cluster0?retryWrites=true&w=majority';
//   //mongoose.connect(chuoi,{useNewUrlParser:true,useUnifiedTopology: true},function(err,db){
//     mongoose.connect('mongodb+srv://'+ 'admin01' +':'+'hiep1234' + '@cluster0.3ma3m.mongodb.net/Cluster0?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology: true},function(err,db){
//         if(err)
//         {
//             kqqq = 0;
//         }
//         else if(db)
//          {
//            kqqq = 1;
//            user.find({Email:NameUser}).exec(function(err, u)
//              {
//               if (err) throw err;
//               chuoi2 = u;  
//             });
//         }
//         });
//             return chuoi2;
// }