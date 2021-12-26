var dt_User;
var kt;
var currentAccount = "";
var constract_MM;
$(document).ready(function()
{
    const api = [
        {
            "inputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "previousOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "id",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "idvi",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "nt",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "loai",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "ngaytiem",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "tenvx",
                    "type": "string"
                }
            ],
            "name": "Send_dt",
            "type": "event"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "string",
                    "name": "id",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "nt",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "loai",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "ngaytiem",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "tenvx",
                    "type": "string"
                }
            ],
            "name": "Send_data",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "a",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "isOwner",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "userArray",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "id",
                    "type": "string"
                },
                {
                    "internalType": "address",
                    "name": "idvi",
                    "type": "address"
                },
                {
                    "internalType": "string",
                    "name": "tenvx",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "nt",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "loai",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "ngaytiem",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ];
    const addressSM = "0x50e26207F8E47DE56F3710523873584A8402B1da";
    const web3 = new Web3(window.ethereum);
    window.ethereum.enable();
    constract_MM = new web3.eth.Contract(api,addressSM);
    console.log(constract_MM);

    var provider = new Web3.providers.WebsocketProvider("wss://rinkeby.infura.io/ws/v3/0e394e33cd2c4bb7aec39f9fad35db5c");
    var web3_infura = new Web3(provider);
    var constract_infura = new web3_infura.eth.Contract(api,addressSM);
    constract_infura.events.Send_dt({filter:{},fromBlock:"latest"},function(error,data){
        if(error)
        {
            console.log(error + "12344aaaaaaaa");
        }
        else
        {
            console.log(error + "ok");
        }
    });
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
       // createlist();
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
     });
     $("#inputdatavx").click(function()
     {
        insert_vx();
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
        // transaction = web3.eth.getTransaction('0x5d7a91c9f068d723ac52480c0ef61b9bf3f7b52dc726046e0b47f1beaa2f44ff');
        // input = web3.toAscii(transaction.input);
        var myTableDiv = document.getElementById("content2");
        myTableDiv.innerHTML = "";
        myTableDiv.setAttribute('style','margin-left:5vw');
        var t = document.createElement("h3");
       // t.setAttribute('style','margin-left:5vw');
        t.innerHTML = "Nhập thông tin người tiêm";//"Nhập thông tin người tiêm";
        myTableDiv.appendChild(t);
        // var fr = document.createElement("form");
        // fr.setAttribute('style','margin-left:5vh');
        
        var tEmail = document.createElement("label");
        tEmail.setAttribute('class','form-label');
        tEmail.innerHTML = "Email";
        tEmail.setAttribute('style','margin-top:6vh');
        var iphtEmail = document.createElement("input");
        iphtEmail.setAttribute('id','iphtEmail');
        iphtEmail.setAttribute('class','form-control col-sm-6');
        myTableDiv.appendChild(tEmail);
        myTableDiv.appendChild(iphtEmail);

        var tPassword = document.createElement("label");
        tPassword.setAttribute('class','form-label');
        tPassword.innerHTML = "Mật khẩu"; 
        tPassword.setAttribute('style','margin-top:2vh');
        var iphtPassword = document.createElement("input");
        iphtPassword.setAttribute('type','password');
        iphtPassword.setAttribute('id','iphtPassword');
        iphtPassword.setAttribute('class','form-control col-sm-6');
        myTableDiv.appendChild(tPassword);
        myTableDiv.appendChild(iphtPassword);

        var t_again_Password = document.createElement("label");
        t_again_Password.setAttribute('class','form-label');
        t_again_Password.innerHTML = "Nhập lại mật khẩu"; 
        t_again_Password.setAttribute('style','margin-top:2vh');
        var ipht_again_Password = document.createElement("input");
        ipht_again_Password.setAttribute('type','password');
        ipht_again_Password.setAttribute('id','ipht_again_Password');
        ipht_again_Password.setAttribute('class','form-control col-sm-6');
        myTableDiv.appendChild(t_again_Password);
        myTableDiv.appendChild(ipht_again_Password);

        var tName = document.createElement("label");
        tName.setAttribute('class','form-label');
        tName.innerHTML = "Họ và tên";
        tName.setAttribute('style','margin-top:2vh');
        var iphtName = document.createElement("input");
        iphtName.setAttribute('id','iphtName');
        iphtName.setAttribute('class','form-control col-sm-6');
        myTableDiv.appendChild(tName);
        myTableDiv.appendChild(iphtName);

        var tSDT = document.createElement("label");
        tSDT.setAttribute('class','form-label');
        tSDT.innerHTML = "Số điện thoại";
        tSDT.setAttribute('style','margin-top:2vh');
        var iphtSDT = document.createElement("input");
        iphtSDT.setAttribute('id','iphtSDT');
        iphtSDT.setAttribute('class','form-control col-sm-6');
        myTableDiv.appendChild(tSDT);
        myTableDiv.appendChild(iphtSDT);

        var tBirthDay = document.createElement("label");
        tBirthDay.setAttribute('class','form-label');
        tBirthDay.innerHTML = "Ngày sinh";
        tBirthDay.setAttribute('style','margin-top:2vh');
        var iphtBirthDay = document.createElement("input");
        iphtBirthDay.setAttribute('id','iphtBirthDay');
        iphtBirthDay.setAttribute('type','date');
        iphtBirthDay.setAttribute('class','form-control col-sm-6');
        myTableDiv.appendChild(tBirthDay);
        myTableDiv.appendChild(iphtBirthDay);

        var tCMND = document.createElement("label");
        tCMND.setAttribute('class','form-label');
        tCMND.innerHTML = "CMND";
        tCMND.setAttribute('style','margin-top:2vh');
        var iphtCMND = document.createElement("input");
        iphtCMND.setAttribute('id','iphtCMND');
        iphtCMND.setAttribute('class','form-control col-sm-6');
        myTableDiv.appendChild(tCMND);
        myTableDiv.appendChild(iphtCMND);

        var tDC = document.createElement("label");
        tDC.setAttribute('class','form-label');
        tDC.innerHTML = "Địa chỉ";
        tDC.setAttribute('style','margin-top:2vh');
        var iphtDC = document.createElement("input");
        iphtDC.setAttribute('id','iphtDC');
        iphtDC.setAttribute('class','form-control col-sm-6');
        myTableDiv.appendChild(tDC);
        myTableDiv.appendChild(iphtDC);

        var btny = document.createElement("button");
        btny.innerHTML = "Đồng ý";
        btny.setAttribute('class','btn btn-outline-primary');
        btny.setAttribute('style','margin-top:2vh;margin-bottom:2vh;');
        btny.setAttribute('id','btny');
        myTableDiv.appendChild(btny);

        var btnconnect = document.createElement("button");
        btnconnect.innerHTML = "Kết nối";
        btnconnect.setAttribute('class','btn btn-outline-primary');
        btnconnect.setAttribute('style','margin-top:2vh;margin-bottom:2vh;margin-left:1vw;');
        btnconnect.setAttribute('id','btnconnect');
        myTableDiv.appendChild(btnconnect);
       // myTableDiv.appendChild(fr);
        $("#btnconnect").click(function()
        {
            connectMM().then((data)=>{
                currentAccount = data[0];
                console.log(currentAccount);
            }).catch((err)=>{
                console.log(err);
            });
        });
        $("#btny").click(function()
        {
            if(currentAccount.length == 0)
            {
                alert("Vui lòng đăng nhập MetaMask");
            }
            else
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
               if(data.kq == 1)
               {
                   constract_MM.methods.Dangky(data.kqtv._id).send({
                    from:currentAccount
                });
               }
               else if(data.kq == 0)
               {
                   alert("Thiếu tham số");
               }
                
           });
         }
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

        var th = document.createElement("th");
            th.setAttribute('scope','row');
            th.innerHTML = "Tên";
            tr.appendChild(th);
         var th = document.createElement("th");
            th.setAttribute('scope','row');
            th.innerHTML = "Email";
            tr.appendChild(th);
        var th = document.createElement("th");
            th.setAttribute('scope','row');
            th.innerHTML = "CMND";
            tr.appendChild(th);
        var th = document.createElement("th");
            th.setAttribute('scope','row');
            th.innerHTML = "SDT";
            tr.appendChild(th);
        var th = document.createElement("th");
            th.setAttribute('scope','row');
            th.innerHTML = "Địa chỉ";
            tr.appendChild(th);
        var th = document.createElement("th");
            th.setAttribute('scope','row');
            th.innerHTML = "Tình trạng";
            tr.appendChild(th);
        thd.appendChild(tr);
        tb.appendChild(thd);

        var tbody = document.createElement("tbody");

        for($i = 0; $i < dt_User.length;$i++)
        {
            var trr = document.createElement("tr");
            var td1 = document.createElement("td");
                td1.innerHTML = dt_User[$i].Name;
                var td2 = document.createElement("td");
                td2.innerHTML = dt_User[$i].Email;
                var td3 = document.createElement("td");
                td3.innerHTML = dt_User[$i].CMND;
                var td4= document.createElement("td");
                td4.innerHTML = dt_User[$i].SDT;
                var td5 = document.createElement("td");
                td5.innerHTML = dt_User[$i].DC;
                var td6 = document.createElement("td");
                td6.innerHTML = "Có";

                trr.appendChild(td1);
                trr.appendChild(td2);
                trr.appendChild(td3);
                trr.appendChild(td4);
                trr.appendChild(td5);
                trr.appendChild(td6);
            tbody.appendChild(trr);
        }
        tb.appendChild(tbody);
        myTableDiv.appendChild(tb);
      }
      function updateuser()
      {
        // var myTableDiv = document.getElementById("content2");
        // myTableDiv.innerHTML = "";
        // var t = document.createElement("h3");
        // t.setAttribute('style','margin-left:5vw');
        // t.innerHTML = "Cập nhật thông tin người tiêm";

        // var fr = document.createElement("form");
        // fr.setAttribute('style','margin-left:5vh');
    
        // var tEmail = document.createElement("label");
        // tEmail.setAttribute('class','form-label');    
        // tEmail.innerHTML = "Email";
        // tEmail.setAttribute('style','margin-top:6vh');
        // var iphtEmail = document.createElement("select");
        // iphtEmail.setAttribute('id','iphtEmail');
        // iphtEmail.setAttribute('class','form-control col-sm-6');
        // for($i = 0;$i < dt_User.length;$i++)
        // {
        //     var op = document.createElement("option");
        //     op.innerHTML = dt_User[$i].Email.toString();
        //     iphtEmail.appendChild(op);
        // }
        // fr.appendChild(tEmail);
        // fr.appendChild(iphtEmail);

        // var tPassword = document.createElement("label");
        // tPassword.setAttribute('class','form-label');    
        // tPassword.innerHTML = "Mật khẩu"; 
        // tPassword.setAttribute('style','margin-top:2vh');
        // var iphtPassword = document.createElement("input");
        // iphtPassword.setAttribute('type','password');
        // iphtPassword.setAttribute('id','iphtPassword');
        // iphtPassword.setAttribute('class','form-control col-sm-6');
        // fr.appendChild(tPassword);
        // fr.appendChild(iphtPassword);

        // var t_again_Password = document.createElement("label");
        // t_again_Password.setAttribute('class','form-label'); 
        // t_again_Password.innerHTML = "Nhập lại mật khẩu"; 
        // t_again_Password.setAttribute('style','margin-top:2vh');
        // var ipht_again_Password = document.createElement("input");
        // ipht_again_Password.setAttribute('type','password');
        // ipht_again_Password.setAttribute('id','ipht_again_Password');
        // ipht_again_Password.setAttribute('class','form-control col-sm-6');
        // fr.appendChild(t_again_Password);
        // fr.appendChild(ipht_again_Password);

        // var tName = document.createElement("label");
        // tName.setAttribute('class','form-label'); 
        // tName.innerHTML = "Họ và tên";
        // tName.setAttribute('style','margin-top:2vh');
        // var iphtName = document.createElement("input");
        // iphtName.setAttribute('id','iphtName');
        // iphtName.setAttribute('class','form-control col-sm-6');
        // fr.appendChild(tName);
        // fr.appendChild(iphtName);

        // var tSDT = document.createElement("label");
        // tSDT.setAttribute('class','form-label'); 
        // tSDT.innerHTML = "Số điện thoại";
        // tSDT.setAttribute('style','margin-top:2vh');
        // var iphtSDT = document.createElement("input");
        // iphtSDT.setAttribute('id','iphtSDT');
        // iphtSDT.setAttribute('class','form-control col-sm-6');
        // fr.appendChild(tSDT);
        // fr.appendChild(iphtSDT);

        // var tBirthDay = document.createElement("label");
        // tBirthDay.setAttribute('class','form-label'); 
        // tBirthDay.innerHTML = "Ngày sinh";
        // tBirthDay.setAttribute('style','margin-top:2vh');
        // var iphtBirthDay = document.createElement("input");
        // iphtBirthDay.setAttribute('id','iphtBirthDay');
        // iphtBirthDay.setAttribute('type','date');
        // iphtBirthDay.setAttribute('class','form-control col-sm-6');
        // fr.appendChild(tBirthDay);
        // fr.appendChild(iphtBirthDay);

        // var tCMND = document.createElement("label");
        // tCMND.setAttribute('class','form-label');
        // tCMND.innerHTML = "CMND";
        // tCMND.setAttribute('style','margin-top:2vh');
        // var iphtCMND = document.createElement("input");
        // iphtCMND.setAttribute('id','iphtCMND');
        // iphtCMND.setAttribute('class','form-control col-sm-6');
        // fr.appendChild(tCMND);
        // fr.appendChild(iphtCMND);

        // var tDC = document.createElement("label");
        // tDC.setAttribute('class','form-label');
        // tDC.innerHTML = "Địa chỉ";
        // tDC.setAttribute('style','margin-top:2vh');
        // var iphtDC = document.createElement("input");
        // iphtDC.setAttribute('id','iphtDC');
        // iphtDC.setAttribute('class','form-control col-sm-6');
        // fr.appendChild(tDC);
        // fr.appendChild(iphtDC);

        // var btny = document.createElement("button");
        // btny.innerHTML = "Đồng ý";
        // btny.setAttribute('class','btn btn-outline-primary');
        // btny.setAttribute('style','margin-top:2vh;margin-bottom:2vh;');
        // btny.setAttribute('id','btny');
        // fr.appendChild(btny);
        // myTableDiv.appendChild(t);
        // myTableDiv.appendChild(fr);

        // $("#btny").click(function()
        // {
        //    $.post('../insertdt',{
        //      Email:$("#iphtEmail").val(),
        //      Password:$("#iphtPassword").val(),
        //      Name:$("#iphtName").val(),
        //      SDT:$("#iphtSDT").val(),
        //      BirthDay:$("#iphtBirthDay").val(),
        //      CMND:$("#iphtCMND").val(),
        //      DC:$("#iphtDC").val()
        //    },function(data)
        //    {
        //         alert(data.kq.toString());
        //    });
        // });
        // $("#iphtEmail").change(function()
        // {
        //     var x = document.getElementById("iphtEmail").selectedIndex;
        //     iphtPassword.value = dt_User[x].Password;
        //     iphtDC.value  = dt_User[x].DC;
        //     iphtSDT.value = dt_User[x].SDT;
        //     iphtCMND.value = dt_User[x].CMND;
        //     iphtName.value = dt_User[x].Name;
        //     iphtBirthDay.value = dt_User[x].BirthDay;
        // });
      }
      function insert_vx()
      {
        // var myTableDiv = document.getElementById("content2");
        // myTableDiv.innerHTML = k;

        // var tl = document.createElement("h3");
        // tl.setAttribute('style','margin-left:5vw');
        // tl.innerHTML = "Nhập thông tin người đã tiêm";
        // myTableDiv.appendChild(tl);
        
        // var fr = document.createElement("div");
        // fr.setAttribute('style','margin-left:5vw;margin-top:5vh');

        // var t_name_user = document.createElement("label");
        // t_name_user.innerHTML = "Tên người tiêm";
        // t_name_user.setAttribute('class','form-label');
        // var iphtEmail = document.createElement("select");
        // iphtEmail.setAttribute('id','iphtEmail');
        // iphtEmail.setAttribute('class','form-control col-sm-6');
        // for($i = 0;$i < dt_User.length;$i++)
        // {
        //     var op = document.createElement("option");
        //     op.innerHTML = dt_User[$i].Name.toString();
        //     iphtEmail.appendChild(op);
        // }
        // fr.appendChild(iphtEmail);

        // var t_vx = document.createElement("label");
        // t_vx.setAttribute('class','form-label');
        // t_vx.setAttribute('style','margin-top:2vh');
        // t_vx.innerHTML = "Tên vắc xin";
        // var i_vx = document.createElement("input");
        // i_vx.setAttribute('id','t_vx');
        // i_vx.setAttribute('class','form-control col-sm-6');
        // fr.appendChild(t_vx);
        // fr.appendChild(i_vx);

        // var l_vx = document.createElement("label");
        // l_vx.setAttribute('class','form-label');
        // l_vx.setAttribute('style','margin-top:2vh');
        // l_vx.innerHTML = "Loại vắc xin";
        // var i_vx = document.createElement("input");
        // i_vx.setAttribute('id','l_vx');
        // i_vx.setAttribute('class','form-control col-sm-6');
        // fr.appendChild(l_vx);
        // fr.appendChild(i_vx);

        // var n_vx = document.createElement("label");
        // n_vx.setAttribute('class','form-label');
        // n_vx.setAttribute('style','margin-top:2vh');
        // n_vx.innerHTML = "Nơi tiêm vắc xin";
        // var i_vx = document.createElement("input");
        // i_vx.setAttribute('id','n_vx');
        // i_vx.setAttribute('class','form-control col-sm-6');
        // fr.appendChild(n_vx);
        // fr.appendChild(i_vx);

        // var date_vx = document.createElement("label");
        // date_vx.setAttribute('style','margin-top:2vh');
        // date_vx.setAttribute('class','form-label');
        // date_vx.innerHTML = "Ngày tiêm vắc xin";
        // var i_vx = document.createElement("input");
        // i_vx.setAttribute('type','date');
        // i_vx.setAttribute('id','date_vx');
        // i_vx.setAttribute('class','form-control col-sm-6');
        // fr.appendChild(date_vx);
        // fr.appendChild(i_vx);

        // var btny = document.createElement("button");
        // btny.innerHTML = "Đồng ý";
        // btny.setAttribute('class','btn btn-outline-primary');
        // btny.setAttribute('style','margin-top:2vh;margin-bottom:2vh;');
        // btny.setAttribute('id','btny');
        // fr.appendChild(btny);

        // var btn_connect = document.createElement("button");
        // btn_connect.innerHTML = "Kết nối ví";
        // btn_connect.setAttribute('id','btn_connect');
        // btn_connect.setAttribute('class','btn btn-outline-primary');
        // btn_connect.setAttribute('style','margin-top:2vh;margin-bottom:2vh;margin-left:1vw;');
        // fr.appendChild(btn_connect);
        // myTableDiv.appendChild(fr);

        // $("#btn_connect").click(function(){
        //     connectMM().then((data)=>{
        //         currentAccount = data[0];
        //         console.log(currentAccount);
        //     }).catch((err)=>{
        //         console.log(err);
        //     });
        // });
        // $("#btny").click(function(){
        //    $.post("../insert_vx",{
        //     Tenvx:$("#t_vx").val(),
        //     Loai:$("#l_vx").val(),
        //     Noitiem:$("#n_vx").val(),
        //     NgayTiem:$("#date_vx").val()
        //    },function(data)
        //    {
        //        if(data.kq == 1)
        //        {
        //         constract_MM.methods.Send_data("123",$("#n_vx").val().toString(),$("#l_vx").val().toString(),$("#date_vx").val().toString(),$("#t_vx").val().toString()).send({
        //             from:currentAccount
        //         });
        //        }
        //    });
        // });
        
      }