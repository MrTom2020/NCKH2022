var dt_User;
var kt;
$(document).ready(function()
{
    const api = [
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "_vi",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "_id",
                    "type": "string"
                }
            ],
            "name": "SM_Ban_Data",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_id",
                    "type": "string"
                }
            ],
            "name": "Dangky",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "arrHV",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "_ID",
                    "type": "string"
                },
                {
                    "internalType": "address",
                    "name": "_VI",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];
    const addressSM = "0x080FC71Dd4dE52eB3916Ee61F59F4Df4887Ce12B";
    const web3 = new Web3(window.ethereum);
    window.ethereum.enable();

    var constract_MM = new web3.eth.Contract(api,addressSM);
    console.log(constract_MM);

    var provider = new Web3.providers.WebsocketProvider("wss://rinkeby.infura.io/ws/v3/0e394e33cd2c4bb7aec39f9fad35db5c");
    var web3_infura = new Web3(provider);
    var constract_infura = new web3_infura.eth.Contract(api,addressSM);
    constract_infura.events.SM_Ban_Data({filter:{},fromBlock:"latest"},function(error,data){
        if(error)
        {
            console.log(error + "12344aaaaaaaa");
        }
        else
        {
            console.log(error + "ok");
        }
    });
    var currentAccount = "0xafD3e49ad3d9fE6a54DbBe8bDAdBE022B35620e3";
    checkBM();
    $("#connectMM").click(function(){
        connectMM().then((data)=>{
            currentAccount = data[0];
            console.log(currentAccount);
        }).catch((err)=>{
            console.log(err);
        });
    });
    $.post("./dangky",
    {
        Email:$("#txtEmail").val(),
        HoTen:$("#txtHoTen").val(),
        SDT:$("#txtSDT").val()
    },function(data)
    {
        if(data.ketqua == 1)
        {
            constract_MM.methods.Dangky(data.maloi._id).send({
                from:currentAccount
            });
        }
    });
    $("#inputdata").click(function()
    {
        tableCreate();
    });
    $("#test").click(function()
    {
        createlist();
    });
    $("#updatedata").click(function()
    {
        updateuser();
    });
    $("#btnDangKy").click(function()
    {
       if(currentAccount.length == 0)
       {
            alert("Vui lòng đăng nhập MetaMask");
       }
       else{
        $.post("./dangky",
        {
            Email:$("#txtEmail").val(),
            HoTen:$("#txtHoTen").val(),
            SDT:$("#txtSDT").val()
        },function(data)
        {
            if(data.ketqua == 1)
            {
                constract_MM.methods.Dangky(data.maloi._id).send({
                    from:currentAccount
                });
            }
        });
       }
    });
    $.post("../home",function(data)
     {
       dt_User = data.loi1;
       alert(JSON.stringify(data.loi1.length));
     });
});
   
async function connectMM()
{
 const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
 return accounts;
}
function checkBM()
    {
        if (typeof window.ethereum !== 'undefined') {
            console.log('MetaMask is installed!');
          }
          else{
              console.log('Bạn chưa cài MetaMask');
          }
    }

    function tableCreate() 
    {
        var myTableDiv = document.getElementById("content2");
        myTableDiv.innerHTML = "";
        var t = document.createElement("h3");
        t.setAttribute('style','margin-left:5vw');
        t.innerHTML = "Nhập thông tin người tiêm";

        var fr = document.createElement("form");
        fr.setAttribute('style','margin-left:5vh');
        
        var tEmail = document.createElement("h5");
        tEmail.innerHTML = "Email";
        tEmail.setAttribute('style','margin-top:6vh');
        var iphtEmail = document.createElement("select");
        iphtEmail.setAttribute('id','iphtEmail');
        iphtEmail.setAttribute('class','form-control col-sm-6');
        for($i = 0;$i < dt_User.length;$i++)
        {
            var op = document.createElement("option");
            op.innerHTML = dt_User[$i].Email.toString();
            iphtEmail.appendChild(op);
        }
        fr.appendChild(tEmail);
        fr.appendChild(iphtEmail);

        var tPassword = document.createElement("h5");
        tPassword.innerHTML = "Mật khẩu"; 
        tPassword.setAttribute('style','margin-top:2vh');
        var iphtPassword = document.createElement("input");
        iphtPassword.setAttribute('type','password');
        iphtPassword.setAttribute('id','iphtPassword');
        iphtPassword.setAttribute('class','form-control col-sm-6');
        fr.appendChild(tPassword);
        fr.appendChild(iphtPassword);

        var t_again_Password = document.createElement("h5");
        t_again_Password.innerHTML = "Nhập lại mật khẩu"; 
        t_again_Password.setAttribute('style','margin-top:2vh');
        var ipht_again_Password = document.createElement("input");
        ipht_again_Password.setAttribute('type','password');
        ipht_again_Password.setAttribute('id','ipht_again_Password');
        ipht_again_Password.setAttribute('class','form-control col-sm-6');
        fr.appendChild(t_again_Password);
        fr.appendChild(ipht_again_Password);

        var tName = document.createElement("h5");
        tName.innerHTML = "Họ và tên";
        tName.setAttribute('style','margin-top:2vh');
        var iphtName = document.createElement("input");
        iphtName.setAttribute('id','iphtName');
        iphtName.setAttribute('class','form-control col-sm-6');
        fr.appendChild(tName);
        fr.appendChild(iphtName);

        var tSDT = document.createElement("h5");
        tSDT.innerHTML = "Số điện thoại";
        tSDT.setAttribute('style','margin-top:2vh');
        var iphtSDT = document.createElement("input");
        iphtSDT.setAttribute('id','iphtSDT');
        iphtSDT.setAttribute('class','form-control col-sm-6');
        fr.appendChild(tSDT);
        fr.appendChild(iphtSDT);

        var tBirthDay = document.createElement("h5");
        tBirthDay.innerHTML = "Ngày sinh";
        tBirthDay.setAttribute('style','margin-top:2vh');
        var iphtBirthDay = document.createElement("input");
        iphtBirthDay.setAttribute('id','iphtBirthDay');
        iphtBirthDay.setAttribute('type','date');
        iphtBirthDay.setAttribute('class','form-control col-sm-6');
        fr.appendChild(tBirthDay);
        fr.appendChild(iphtBirthDay);

        var tCMND = document.createElement("h5");
        tCMND.innerHTML = "CMND";
        tCMND.setAttribute('style','margin-top:2vh');
        var iphtCMND = document.createElement("input");
        iphtCMND.setAttribute('id','iphtCMND');
        iphtCMND.setAttribute('class','form-control col-sm-6');
        fr.appendChild(tCMND);
        fr.appendChild(iphtCMND);

        var tDC = document.createElement("h5");
        tDC.innerHTML = "Địa chỉ";
        tDC.setAttribute('style','margin-top:2vh');
        var iphtDC = document.createElement("input");
        iphtDC.setAttribute('id','iphtDC');
        iphtDC.setAttribute('class','form-control col-sm-6');
        fr.appendChild(tDC);
        fr.appendChild(iphtDC);

        var btny = document.createElement("button");
        btny.innerHTML = "Đồng ý";
        btny.setAttribute('class','btn btn-outline-primary');
        btny.setAttribute('style','margin-top:2vh;margin-bottom:2vh;');
        btny.setAttribute('id','btny');
        fr.appendChild(btny);
        myTableDiv.appendChild(t);
        myTableDiv.appendChild(fr);

        $("#btny").click(function()
        {
           $.post('../insertdt',{
             Email:$("#iphtEmail").val(),
             Password:$("#iphtPassword").val(),
             Name:$("#iphtName").val(),
             SDT:$("#iphtSDT").val(),
             BirthDay:$("#iphtBirthDay").val(),
             CMND:$("#iphtCMND").val(),
             DC:$("#iphtDC").val()
           },function(data)
           {
                alert(data.kq.toString());
           });
        })
        $("#iphtEmail").change(function()
        {
            var x = document.getElementById("iphtEmail").value;
            alert(x);
        });
      }
      function createlist()
      {
        var myTableDiv = document.getElementById("content2");
        myTableDiv.innerHTML = "";

        var tb = document.createElement("table");
        tb.setAttribute('class','table table-hover');
        var thd = document.createElement("thead");

        var tr = document.createElement("tr");

        for($i = 0; $i < 5;$i++)
        {
            var th = document.createElement("th");
            th.setAttribute('scope','row');
            th.innerHTML = "ok";
            tr.appendChild(th);
        }
        thd.appendChild(tr);
        tb.appendChild(thd);

        var tbody = document.createElement("tbody");

        for($i = 0; $i < 5;$i++)
        {
            var trr = document.createElement("tr");
            for($ii = 0;$ii < 5;$ii++)
            {
                var td = document.createElement("td");
                td.innerHTML = $ii;
                trr.appendChild(td);
            }
            tbody.appendChild(trr);
        }
        tb.appendChild(tbody);
        myTableDiv.appendChild(tb);
      }
      function updateuser()
      {
        var myTableDiv = document.getElementById("content2");
        myTableDiv.innerHTML = "";
        var t = document.createElement("h3");
        t.setAttribute('style','margin-left:5vw');
        t.innerHTML = "Cập nhật thông tin người tiêm";

        var fr = document.createElement("form");
        fr.setAttribute('style','margin-left:5vh');
        
        var tEmail = document.createElement("h5");
        tEmail.innerHTML = "Email";
        tEmail.setAttribute('style','margin-top:6vh');
        var iphtEmail = document.createElement("input");
        iphtEmail.setAttribute('id','iphtEmail');
        iphtEmail.setAttribute('class','form-control col-sm-6');
        fr.appendChild(tEmail);
        fr.appendChild(iphtEmail);

        var tPassword = document.createElement("h5");
        tPassword.innerHTML = "Mật khẩu"; 
        tPassword.setAttribute('style','margin-top:2vh');
        var iphtPassword = document.createElement("input");
        iphtPassword.setAttribute('id','iphtPassword');
        iphtPassword.setAttribute('type','password');
        iphtPassword.setAttribute('class','form-control col-sm-6');
        fr.appendChild(tPassword);
        fr.appendChild(iphtPassword);

        var t_again_Password = document.createElement("h5");
        t_again_Password.innerHTML = "Nhập lại mật khẩu"; 
        t_again_Password.setAttribute('style','margin-top:2vh');
        var ipht_again_Password = document.createElement("input");
        ipht_again_Password.setAttribute('type','password');
        ipht_again_Password.setAttribute('id','ipht_again_Password');
        ipht_again_Password.setAttribute('class','form-control col-sm-6');
        fr.appendChild(t_again_Password);
        fr.appendChild(ipht_again_Password);

        var tName = document.createElement("h5");
        tName.innerHTML = "Họ và tên";
        tName.setAttribute('style','margin-top:2vh');
        var iphtName = document.createElement("input");
        iphtName.setAttribute('id','iphtName');
        iphtName.setAttribute('class','form-control col-sm-6');
        fr.appendChild(tName);
        fr.appendChild(iphtName);

        var tSDT = document.createElement("h5");
        tSDT.innerHTML = "Số điện thoại";
        tSDT.setAttribute('style','margin-top:2vh');
        var iphtSDT = document.createElement("input");
        iphtSDT.setAttribute('id','iphtSDT');
        iphtSDT.setAttribute('class','form-control col-sm-6');
        fr.appendChild(tSDT);
        fr.appendChild(iphtSDT);

        var tBirthDay = document.createElement("h5");
        tBirthDay.innerHTML = "Ngày sinh";
        tBirthDay.setAttribute('style','margin-top:2vh');
        var iphtBirthDay = document.createElement("input");
        iphtBirthDay.setAttribute('id','iphtBirthDay');
        iphtBirthDay.setAttribute('class','form-control col-sm-6');
        fr.appendChild(tBirthDay);
        fr.appendChild(iphtBirthDay);

        var tCMND = document.createElement("h5");
        tCMND.innerHTML = "CMND";
        tCMND.setAttribute('style','margin-top:2vh');
        var iphtCMND = document.createElement("input");
        iphtCMND.setAttribute('id','iphtCMND');
        iphtCMND.setAttribute('class','form-control col-sm-6');
        fr.appendChild(tCMND);
        fr.appendChild(iphtCMND);

        var tDC = document.createElement("h5");
        tDC.innerHTML = "Địa chỉ";
        tDC.setAttribute('style','margin-top:2vh');
        var iphtDC = document.createElement("input");
        iphtDC.setAttribute('id','iphtDC');
        iphtDC.setAttribute('class','form-control col-sm-6');
        fr.appendChild(tDC);
        fr.appendChild(iphtDC);

        var tLoai = document.createElement("h5");
        tLoai.innerHTML = "Loại vắc xin";
        tLoai.setAttribute('style','margin-top:2vh');
        var iphtLoai = document.createElement("input");
        iphtLoai.setAttribute('id','iphtLoai');
        iphtLoai.setAttribute('class','form-control col-sm-6');
        fr.appendChild(tLoai);
        fr.appendChild(iphtLoai);

        var tNoitiem = document.createElement("h5");
        tNoitiem.innerHTML = "Nơi tiêm";
        tNoitiem.setAttribute('style','margin-top:2vh');
        var iphtNoitiem = document.createElement("input");
        iphtNoitiem.setAttribute('id','iphtNoitiem');
        iphtNoitiem.setAttribute('class','form-control col-sm-6');
        fr.appendChild(tNoitiem);
        fr.appendChild(iphtNoitiem);

        var tNgaytiem = document.createElement("h5");
        tNgaytiem.innerHTML = "Ngày tiêm";
        tNgaytiem.setAttribute('style','margin-top:2vh');
        var iphtNgaytiem = document.createElement("input");
        iphtNgaytiem.setAttribute('id','iphtNgaytiem');
        iphtNgaytiem.setAttribute('type','date');
        iphtNgaytiem.setAttribute('class','form-control col-sm-6');
        fr.appendChild(tNgaytiem);
        fr.appendChild(iphtNgaytiem);

        var btny = document.createElement("button");
        btny.innerHTML = "Đồng ý";
        btny.setAttribute('class','btn btn-outline-primary');
        btny.setAttribute('style','margin-top:2vh;margin-bottom:2vh;');
        btny.setAttribute('id','btny');
        fr.appendChild(btny);
        myTableDiv.appendChild(t);
        myTableDiv.appendChild(fr);
      }