var user = require("../Models/user");
var mongoose = require('mongoose');
var kqqq;
var chuoi;
var chuoi2;
module.exports = function(app)
{
    app.get("/",function(req,res){
        res.render("login");
    });
    app.get("/admin",function(req,res)
    {
        res.render("admin");
    });
    app.get("/Signup",function(req,res)
    {
        res.render("Signup");
    });
    app.get("/User/home",function(req,res)
    {
        res.render("User/home");
    });
    app.get("/Admin/home",function(req,res)
    {
        res.render("Admin/home");
    });
    app.get("/*",function(req,res)
    {
        res.render("Err");
    });
    mongoose.connect('mongodb+srv://'+ 'admin01' +':'+'hiep1234' + '@cluster0.8kkbk.mongodb.net/Cluster0?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology: true},function(err,db){
        if(err)
        {
           // console.log(err);
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
              console.log(u[0].Email.toString());
              chuoi2 = u;  
            });
           user.findOne({SDT: "0901913820"}, function(err, contact) {
                if(!err) {
                    if(!contact) {
                        contact = new user();
                        contact.SDT = request.SDT;
                    }
                   // contact.status = request.status;
                    contact.save(function(err) {
                        if(!err) {
                            console.log("contact " + contact.SDT);
                        }
                        else {
                            console.log("Error: could not save contact " + contact.SDT);
                        }
                    });
                }
            });  
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
           res.json({loi1:chuoi2,loi2:"1234"})
         });
}
function a(tk,mk)
{
    chuoi = 'mongodb+srv://'+ tk.toString() +':'+mk.toString() + '@cluster0.8kkbk.mongodb.net/Cluster0?retryWrites=true&w=majority';
  //mongoose.connect(chuoi,{useNewUrlParser:true,useUnifiedTopology: true},function(err,db){
    mongoose.connect('mongodb+srv://'+ 'admin01' +':'+'hiep1234' + '@cluster0.8kkbk.mongodb.net/Cluster0?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology: true},function(err,db){
        if(err)
        {
            kqqq = 0;
        }
        else if(db)
         {
           kqqq = 1;
           user.find({Email:'tomhumchinvn@gmail.com'}).limit(6).exec(function(err, u)
             {
              if (err) throw err;
              chuoi2 = u;  
            });
        }
        });
            return kqqq;
}