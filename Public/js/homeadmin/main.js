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
    $("#test").click(function()
    {
        tableCreate();
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
       alert(JSON.stringify(data.loi1[0]._id));
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
        // var table = document.createElement('TABLE');
        // table.border = '1';
      
        // var tableBody = document.createElement('TBODY');
        // table.appendChild(tableBody);
      
        // for (var i = 0; i < 3; i++) {
        //   var tr = document.createElement('TR');
        //   tableBody.appendChild(tr);
      
        //   for (var j = 0; j < 4; j++) {
        //     var td = document.createElement('TD');
        //     td.width = '75';
        //     td.appendChild(document.createTextNode("Cell " + i + "," + j));
        //     tr.appendChild(td);
        //   }
        // }
        var t = document.createElement("h3");
        t.setAttribute('style','margin-left:5vw');
        t.innerHTML = "Nhập thông tin người tiêm";

        var fr = document.createElement("form");
        fr.setAttribute('method','post');
        fr.setAttribute('style','margin-left:5vw');
        
        var iphtEmail = document.createElement("input");
        iphtEmail.setAttribute('id','iphtEmail');
        iphtEmail.setAttribute('style','margin-top:2vw');
        iphtEmail.setAttribute('class','form-control col-sm-6');
        fr.appendChild(iphtEmail);

        var iphtPassword = document.createElement("input");
        iphtPassword.setAttribute('id','iphtPassword');
        iphtPassword.setAttribute('style','margin-top:2vw');
        iphtPassword.setAttribute('class','form-control col-sm-6');
        fr.appendChild(iphtPassword);

        var iphtName = document.createElement("input");
        iphtName.setAttribute('id','iphtName');
        iphtName.setAttribute('style','margin-top:2vw');
        iphtName.setAttribute('class','form-control col-sm-6');
        fr.appendChild(iphtName);

        var iphtSDT = document.createElement("input");
        iphtSDT.setAttribute('id','iphtSDT');
        iphtSDT.setAttribute('style','margin-top:2vw');
        iphtSDT.setAttribute('class','form-control col-sm-6');
        fr.appendChild(iphtSDT);

        var iphtBirthDay = document.createElement("input");
        iphtBirthDay.setAttribute('id','iphtBirthDay');
        iphtBirthDay.setAttribute('style','margin-top:2vw');
        iphtBirthDay.setAttribute('class','form-control col-sm-6');
        fr.appendChild(iphtBirthDay);

        var iphtCMND = document.createElement("input");
        iphtCMND.setAttribute('id','iphtCMND');
        iphtCMND.setAttribute('style','margin-top:2vw');
        iphtCMND.setAttribute('class','form-control col-sm-6');
        fr.appendChild(iphtCMND);

        var iphtDC = document.createElement("input");
        iphtDC.setAttribute('id','iphtDC');
        iphtDC.setAttribute('style','margin-top:2vw');
        iphtDC.setAttribute('class','form-control col-sm-6');
        fr.appendChild(iphtDC);

        var iphtLoai = document.createElement("input");
        iphtLoai.setAttribute('id','iphtLoai');
        iphtLoai.setAttribute('style','margin-top:2vw');
        iphtLoai.setAttribute('class','form-control col-sm-6');
        fr.appendChild(iphtLoai);

        var iphtNoitiem = document.createElement("input");
        iphtNoitiem.setAttribute('id','iphtNoitiem');
        iphtNoitiem.setAttribute('style','margin-top:2vw');
        iphtNoitiem.setAttribute('class','form-control col-sm-6');
        fr.appendChild(iphtNoitiem);

        var iphtNgaytiem = document.createElement("input");
        iphtNgaytiem.setAttribute('id','iphtNgaytiem');
        iphtNgaytiem.setAttribute('style','margin-top:2vw');
        iphtNgaytiem.setAttribute('class','form-control col-sm-6');
        fr.appendChild(iphtNgaytiem);

        myTableDiv.appendChild(t);
        myTableDiv.appendChild(fr);
      }