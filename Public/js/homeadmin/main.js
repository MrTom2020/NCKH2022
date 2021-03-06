var dt_User;
var kt;
var id;
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
        }
        else
        {
            var txnHashh = data.transactionHash;
            alert(data.transactionHash);
            var myTableDiv = document.getElementById("content2");
            myTableDiv.innerHTML = "";
            var btny = document.createElement("button");
            btny.innerHTML ="C???p nh???t m?? Txn Hash";
            btny.setAttribute('class','btn btn-outline-primary');
            btny.setAttribute('style','margin-top:2vh;margin-bottom:2vh;');
            btny.setAttribute('id','btny');
            myTableDiv.appendChild(btny);
            $("#btny").click(function(){
                $.post('../update1',{
                    Email:txnHashh +"AAA!!!" + id
                  },function(data1)
                  {
                      if(data1.kq == 0)
                      {
                          alert(data1.kqtv);
                      }
                      else if(data1.kq == 1)
                      {
                       alert("C???p nh???t th??ng tin th??nh c??ng");
                      }
                  });
            });
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
    // $.post("./dangky",
    // {
    //     Email:$("#txtEmail").val(),
    //     HoTen:$("#txtHoTen").val(),
    //     SDT:$("#txtSDT").val()
    // },function(data)
    // {
    //     if(data.ketqua == 1)
    //     {
    //         constract_MM.methods.Dangky(data.maloi._id).send({
    //             from:currentAccount
    //         });
    //     }
    // });
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
        //alert("Vui l??ng ????ng nh???p MetaMask");
    //    if(currentAccount.length == 0)
    //    {
    //         alert("Vui l??ng ????ng nh???p MetaMask");
    //    }
    //    else{
    //     $.post("./dangky",
    //     {
    //         Email:$("#txtEmail").val(),
    //         HoTen:$("#txtHoTen").val(),
    //         SDT:$("#txtSDT").val()
    //     },function(data)
    //     {
    //         if(data.ketqua == 1)
    //         {
    //             constract_MM.methods.Dangky(data.maloi._id).send({
    //                 from:currentAccount
    //             });
    //         }
    //     });
    //    }
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
              console.log('B???n ch??a c??i MetaMask');
          }
    }

    function tableCreate() 
    {

        var myTableDiv = document.getElementById("content2");
        myTableDiv.innerHTML = "";
        myTableDiv.setAttribute('style','margin-left:2vw');
        var t = document.createElement("h3");
       // t.setAttribute('style','margin-left:5vw');
        t.innerHTML = "Nh???p th??ng tin ng?????i ti??m";//"Nh???p th??ng tin ng?????i ti??m";
        myTableDiv.appendChild(t);
         var fr = document.createElement("form");
         fr.setAttribute('style','margin-left:2vh');
        
        var tEmail = document.createElement("label");
        tEmail.setAttribute('class','form-label');
        tEmail.innerHTML = "Email";
        tEmail.setAttribute('style','margin-top:6vh');
        var iphtEmail = document.createElement("input");
        iphtEmail.setAttribute('id','iphtEmail');
        iphtEmail.setAttribute('class','form-control col-sm-6');
        fr.appendChild(tEmail);
        fr.appendChild(iphtEmail);


        var tName = document.createElement("label");
        tName.setAttribute('class','form-label');
        tName.innerHTML = "H??? v?? t??n";
        tName.setAttribute('style','margin-top:2vh');
        var iphtName = document.createElement("input");
        iphtName.setAttribute('id','iphtName');
        iphtName.setAttribute('class','form-control col-sm-6');
        fr.appendChild(tName);
        fr.appendChild(iphtName);

        var tSDT = document.createElement("label");
        tSDT.setAttribute('class','form-label');
        tSDT.innerHTML = "S??? ??i???n tho???i";
        tSDT.setAttribute('style','margin-top:2vh');
        var iphtSDT = document.createElement("input");
        iphtSDT.setAttribute('id','iphtSDT');
        iphtSDT.setAttribute('class','form-control col-sm-6');
        fr.appendChild(tSDT);
        fr.appendChild(iphtSDT);

        var tBirthDay = document.createElement("label");
        tBirthDay.setAttribute('class','form-label');
        tBirthDay.innerHTML = "Ng??y sinh";
        tBirthDay.setAttribute('style','margin-top:2vh');
        var iphtBirthDay = document.createElement("input");
        iphtBirthDay.setAttribute('id','iphtBirthDay');
        iphtBirthDay.setAttribute('type','date');
        iphtBirthDay.setAttribute('class','form-control col-sm-6');
        fr.appendChild(tBirthDay);
        fr.appendChild(iphtBirthDay);

        var tCMND = document.createElement("label");
        tCMND.setAttribute('class','form-label');
        tCMND.innerHTML = "CMND";
        tCMND.setAttribute('style','margin-top:2vh');
        var iphtCMND = document.createElement("input");
        iphtCMND.setAttribute('id','iphtCMND');
        iphtCMND.setAttribute('class','form-control col-sm-6');
        fr.appendChild(tCMND);
        fr.appendChild(iphtCMND);

        var tDC = document.createElement("label");
        tDC.setAttribute('class','form-label');
        tDC.innerHTML = "?????a ch???";
        tDC.setAttribute('style','margin-top:2vh');
        var iphtDC = document.createElement("input");
        iphtDC.setAttribute('id','iphtDC');
        iphtDC.setAttribute('class','form-control col-sm-6');
        fr.appendChild(tDC);
        fr.appendChild(iphtDC);

        var btny = document.createElement("button");
        btny.innerHTML = "?????ng ??";
        btny.setAttribute('class','btn btn-outline-primary');
        btny.setAttribute('style','margin-top:2vh;margin-bottom:2vh;');
        btny.setAttribute('id','btny');
        fr.appendChild(btny);

        myTableDiv.appendChild(fr);
        $("#btny").click(function()
        {
           // alert(document.getElementById("iphtDC").value);
             $.post('../insertdt',{
             Email:$("#iphtEmail").val(),
            Name:$("#iphtName").val(),
            SDT:$("#iphtSDT").val(),
             BirthDay:$("#iphtBirthDay").val(),
             CMND:$("#iphtCMND").val(),
            DC:$("#iphtDC").val()
             },function(data)
             {
               if(data.kq == 1)
               {
                alert(data.kqtv);
               }
               else if(data.kq == 0)
               {
                   alert(data.kqtv);
               }
                
           });
         }
        );
        
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
            th.innerHTML = "T??n";
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
            th.innerHTML = "?????a ch???";
            tr.appendChild(th);
        var th = document.createElement("th");
            th.setAttribute('scope','row');
            th.innerHTML = "T??nh tr???ng";
            tr.appendChild(th);
        thd.appendChild(tr);
        tb.appendChild(thd);

        var tbody = document.createElement("tbody");
        if(dt_User.length != 0)
        {
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
                td6.innerHTML = "C??";

                trr.appendChild(td1);
                trr.appendChild(td2);
                trr.appendChild(td3);
                trr.appendChild(td4);
                trr.appendChild(td5);
                trr.appendChild(td6);
            tbody.appendChild(trr);
        }
        }
        
        tb.appendChild(tbody);
        myTableDiv.appendChild(tb);
      }
      function updateuser()
      {
        var myTableDiv = document.getElementById("content2");
        myTableDiv.innerHTML = "";
        var t = document.createElement("h3");
        t.setAttribute('style','margin-left:2vw');
        t.innerHTML = "C???p nh???t th??ng tin ng?????i ti??m";

        var fr = document.createElement("form");
        fr.setAttribute('style','margin-left:2vh');
    
        var tEmail = document.createElement("label");
        tEmail.setAttribute('class','form-label');    
        tEmail.innerHTML = "Email";
        tEmail.setAttribute('style','margin-top:6vh');
        var iphtEmail = document.createElement("select");
        iphtEmail.setAttribute('id','iphtEmail');
        iphtEmail.setAttribute('class','form-control col-sm-6');
        if(dt_User.length != 0)
        {
            for($i = 0;$i < dt_User.length;$i++)
        {
            var op = document.createElement("option");
            op.innerHTML = dt_User[$i].Email.toString();
            iphtEmail.appendChild(op);
        }
        }
        fr.appendChild(tEmail);
        fr.appendChild(iphtEmail);

        var tName = document.createElement("label");
        tName.setAttribute('class','form-label'); 
        tName.innerHTML = "H??? v?? t??n";
        tName.setAttribute('style','margin-top:2vh');
        var iphtName = document.createElement("input");
        iphtName.setAttribute('id','iphtName');
        iphtName.setAttribute('class','form-control col-sm-6');
        fr.appendChild(tName);
        fr.appendChild(iphtName);

        var tSDT = document.createElement("label");
        tSDT.setAttribute('class','form-label'); 
        tSDT.innerHTML = "S??? ??i???n tho???i";
        tSDT.setAttribute('style','margin-top:2vh');
        var iphtSDT = document.createElement("input");
        iphtSDT.setAttribute('id','iphtSDT');
        iphtSDT.setAttribute('class','form-control col-sm-6');
        fr.appendChild(tSDT);
        fr.appendChild(iphtSDT);

        var tBirthDay = document.createElement("label");
        tBirthDay.setAttribute('class','form-label'); 
        tBirthDay.innerHTML = "Ng??y sinh";
        tBirthDay.setAttribute('style','margin-top:2vh');
        var iphtBirthDay = document.createElement("input");
        iphtBirthDay.setAttribute('id','iphtBirthDay');
        iphtBirthDay.setAttribute('type','date');
        iphtBirthDay.setAttribute('class','form-control col-sm-6');
        fr.appendChild(tBirthDay);
        fr.appendChild(iphtBirthDay);

        var tCMND = document.createElement("label");
        tCMND.setAttribute('class','form-label');
        tCMND.innerHTML = "CMND";
        tCMND.setAttribute('style','margin-top:2vh');
        var iphtCMND = document.createElement("input");
        iphtCMND.setAttribute('id','iphtCMND');
        iphtCMND.setAttribute('class','form-control col-sm-6');
        fr.appendChild(tCMND);
        fr.appendChild(iphtCMND);

        var tDC = document.createElement("label");
        tDC.setAttribute('class','form-label');
        tDC.innerHTML = "?????a ch???";
        tDC.setAttribute('style','margin-top:2vh');
        var iphtDC = document.createElement("input");
        iphtDC.setAttribute('id','iphtDC');
        iphtDC.setAttribute('class','form-control col-sm-6');
        fr.appendChild(tDC);
        fr.appendChild(iphtDC);
        var btny = document.createElement("button");
        btny.innerHTML = "?????ng ??";
        btny.setAttribute('class','btn btn-outline-primary');
        btny.setAttribute('style','margin-top:2vh;margin-bottom:2vh;');
        btny.setAttribute('id','btny');
        fr.appendChild(btny);
        myTableDiv.appendChild(t);
        myTableDiv.appendChild(fr);
        $("#iphtEmail").change(function()
        {
            var x = document.getElementById("iphtEmail").selectedIndex;
            id = dt_User[x]._id;
            iphtDC.value  = dt_User[x].DC;
            iphtSDT.value = dt_User[x].SDT;
            iphtCMND.value = dt_User[x].CMND;
            iphtName.value = dt_User[x].Name;
            iphtBirthDay.value = dt_User[x].BirthDay;
        });
        $("#btny").click(function()
        {
           $.post('../updatedt',{
             Email:$("#iphtEmail").val() + "AAA!!!" + id,
             Name:$("#iphtName").val(),
             SDT:$("#iphtSDT").val(),
             BirthDay:$("#iphtBirthDay").val(),
             CMND:$("#iphtCMND").val(),
             DC:$("#iphtDC").val()
           },function(data)
           {
               if(data.kq == 0)
               {
                   alert("ko");
               }
               else if(data.kq == 1)
               {
                alert("C???p nh???t th??ng tin th??nh c??ng");
               }
           });
        });
      }
      function insert_vx()
      {
        var myTableDiv = document.getElementById("content2");
        myTableDiv.innerHTML = "";

        var tl = document.createElement("h3");
        tl.setAttribute('style','margin-left:1vw');
        tl.innerHTML = "Nh???p th??ng tin ng?????i ???? ti??m";
        myTableDiv.appendChild(tl);
        
        var fr = document.createElement("div");
        fr.setAttribute('style','margin-left:1vw;margin-top:4vh');

        var t_name_user = document.createElement("label");
        t_name_user.innerHTML = "T??n ng?????i ti??m";
        t_name_user.setAttribute('class','form-label');
        fr.appendChild(t_name_user);
        var iphtEmail = document.createElement("select");
        iphtEmail.setAttribute('id','iphtEmail');
        iphtEmail.setAttribute('class','form-control col-sm-6');
        if(dt_User.length != 0)
        {
            for($i = 0;$i < dt_User.length;$i++)
        {
            var op = document.createElement("option");
            op.innerHTML = dt_User[$i].Name.toString();
            iphtEmail.appendChild(op);
        }
        }
        fr.appendChild(iphtEmail);

        var t_id = document.createElement("label");
        t_id.setAttribute('class','form-label');
        t_id.setAttribute('style','margin-top:2vh');
        t_id.innerHTML = "ID ng?????i d??ng";
        var i_id = document.createElement("input");
        i_id.setAttribute('id','id_userr');
        i_id.setAttribute('class','form-control col-sm-6');
        fr.appendChild(t_id);
        fr.appendChild(i_id);


        var t_vx = document.createElement("label");
        t_vx.setAttribute('class','form-label');
        t_vx.setAttribute('style','margin-top:2vh');
        t_vx.innerHTML = "T??n v???c xin";
        var i_vx = document.createElement("input");
        i_vx.setAttribute('id','t_vx');
        i_vx.setAttribute('class','form-control col-sm-6');
        fr.appendChild(t_vx);
        fr.appendChild(i_vx);

        var l_vx = document.createElement("label");
        l_vx.setAttribute('class','form-label');
        l_vx.setAttribute('style','margin-top:2vh');
        l_vx.innerHTML = "Lo???i v???c xin";
        var i_vx = document.createElement("input");
        i_vx.setAttribute('id','l_vx');
        i_vx.setAttribute('class','form-control col-sm-6');
        fr.appendChild(l_vx);
        fr.appendChild(i_vx);

        var n_vx = document.createElement("label");
        n_vx.setAttribute('class','form-label');
        n_vx.setAttribute('style','margin-top:2vh');
        n_vx.innerHTML = "N??i ti??m v???c xin";
        var i_vx = document.createElement("input");
        i_vx.setAttribute('id','n_vx');
        i_vx.setAttribute('class','form-control col-sm-6');
        fr.appendChild(n_vx);
        fr.appendChild(i_vx);

        var date_vx = document.createElement("label");
        date_vx.setAttribute('style','margin-top:2vh');
        date_vx.setAttribute('class','form-label');
        date_vx.innerHTML = "Ng??y ti??m v???c xin";
        var i_vx = document.createElement("input");
        i_vx.setAttribute('type','date');
        i_vx.setAttribute('id','date_vx');
        i_vx.setAttribute('class','form-control col-sm-6');
        fr.appendChild(date_vx);
        fr.appendChild(i_vx);

        var btny = document.createElement("button");
        btny.innerHTML = "?????ng ??";
        btny.setAttribute('class','btn btn-outline-primary');
        btny.setAttribute('style','margin-top:2vh;margin-bottom:2vh;');
        btny.setAttribute('id','btny');
        fr.appendChild(btny);

        var btn_connect = document.createElement("button");
        btn_connect.innerHTML = "K???t n???i v??";
        btn_connect.setAttribute('id','btn_connect');
        btn_connect.setAttribute('class','btn btn-outline-primary');
        btn_connect.setAttribute('style','margin-top:2vh;margin-bottom:2vh;margin-left:1vw;');
        fr.appendChild(btn_connect);
        myTableDiv.appendChild(fr);

        $("#btn_connect").click(function(){
            connectMM().then((data)=>{
                currentAccount = data[0];
                console.log(currentAccount);
            }).catch((err)=>{
                console.log(err);
            });
        });
        $("#iphtEmail").change(function()
        {
            var x = document.getElementById("iphtEmail").selectedIndex;
            i_id.value = dt_User[x]._id;
            id = dt_User[x]._id;
        });
        $("#btny").click(function(){
           $.post("../insert_vx",{
            IdUser:$("#id_userr").val(),
            Tenvx:$("#t_vx").val(),
            Loai:$("#l_vx").val(),
            Noitiem:$("#n_vx").val(),
            NgayTiem:$("#date_vx").val()
           },function(data)
           {
               if(data.kq == 1)
               {
                constract_MM.methods.Send_data($("#id_userr").val(),$("#n_vx").val().toString(),$("#l_vx").val().toString(),$("#date_vx").val().toString(),$("#t_vx").val().toString()).send({
                    from:currentAccount
                });
               }
           });
        });
        
      }