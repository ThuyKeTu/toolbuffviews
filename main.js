var queue = [733419,733420,733421,733422,733423,733424,733425,733426,733427,733428,733429,733430,733431,733432,733433,733434,733435,733436,733437,733438,733439,733440,733441,733442,733443,733444,733445,733446,733447,733448,733449,733450,733451,733452,733453,733454,733455,733456,733457,733458,733459,733460,733461,733462,733463,733464,733465,733466,733527,733528,733529,733531,733532,733533,733535,734140,734141,734163,734173,734174,734175,734176,734177,734178,734179,734180,734181,734182,734183,734184,734185,734186,734187,734188,734189,734190,734191,734192,734193,734194,734195,734196,734197,734198,734199,734200,734201,734202,734203,734206,734207,734208,734209,734210,734211,734212,734213,734214,734215,734217,734218,734219,734220,734221,734222,734223,734227,734228,734229,734230,734232,734233,734234,734235,734236,734237,734238,744767,744768,744769,758066,758067,758068,758069,758475,758476]
var __token ='898f99a7-8784-13db-83ff-16bd497e8754'
var views = "3.138.248"
var cokie_1 = "comicvisitor=439d8eb5-9011-46a1-8daa-b66678dbdbe7; comicread=439d8eb5-9011-46a1-8daa-b66678dbdbe7; _gid=GA1.2.1684904385.1688907839; ASP.NET_SessionId=omxycheqrpip41hmi2ri2wjp; ASP.NET_SessionId=zihgorpy3aasuyf253voaswt; returnurl1=/Secure/Dashboard.aspx; .ASPXAUTH=3327CA8E3627CE522A464286D9141634ADD3A23E4B53B677E293ADB28CC3326D1B7EF6323DC2CB96DB44DFF403FB17CCF740A44E2A4E467A9D1CDC38AF5CA75C32C836490FCEAD9CC1C15C10BFA05CCDC514BB33A9F183C2CE979C1A64786EF063D7AEE209F294E2051BFE214BDFE9D196D608343DAA9E71A758CBA09EACDDC8F1A102AF57506B446A92DD225D157B33F077751C41D0121C4AB2CFDF0FFAEC034BB15F6364E392A0B558AEC1F3FBFBD7A024958985F5A1B38504F9B832FDD946926102EF96FA86E75C214A42BCD8C595BAB3C7DB; www.nettruyenmax.comportalroles=FED700453882A3048CF623D201BDAF4B289BC05954FF699C428F4A64E37806D75B8062C7CD91D0767E13A4E8EEF602D5592C35583BC5074164D424AD8FBCA81DD0D4653C43389DBF9D7540C56BC2C01863CE60282DADD099A6166593DAAF9ADB9D97631B51D5AAE47E8576FF066178613772B0B462C4BAA879A3E384767575AE7942AA1FB885D1ACCDA1493A6202CFF7265ACABAE8DB51D2FB51B4E20E2519C371B585BD35B3950122F9C135B80FDF8E8F772C8F; f.nettruyenmax.comportalroles=F93D0256A0A111C175E26C3A64A66F60F75A45EE4F654C55D2E10DC265FF34EF52DB1DE3627399D26F21A602719391C59BEBCE7B8A649E3B57DAC66C53EE3789A7B5194EF081110641BD776DF96790460BA1EAD2CD421C5F6ABE61CCE8A98F5EA050953C59CB54264F53C73078487661EAFE44E52555D6DEE0DB6997ED6E5C11E9719353260B5C1DC4099B01E98E59676E4185DFF6C14197C3A843293CB3CB6EBB3D3FB94DCAAE8CFA9DFD3DF4E6D0F31ED75835; _gat_gtag_UA_57670566_10=1; _ga_4X7L3HYB4K=GS1.1.1690699458.250.1.1690700416.0.0.0; _ga=GA1.2.313180360.1687224376"





var __count =0
async function readchap(num,ctoken,cokie,numcokie){
    await new Promise((resolve) => {
        let data = {
            chapterId: queue[num],
            comicToken: ctoken,
            userToken: ''
        }
        
        fetch('https://f.nettruyenmax.com/Comic/Services/ComicService.asmx/ChapterLoaded',{
            method: "POST",
            headers: {
                'Content-Type': "application/json",
                'Cookie': cokie,
            },
            body:JSON.stringify(data),
        })
            .then((response) => response.text())
            .then((body) => {
                var er = body
                let succ = (er.match(/"success":(.*?),/)||[])[1]
                if(succ=="true"){
                    let token = er.match(/"token":"(.*?)"/)[1]
                    let dataread ={
                        chapterId: data.chapterId,
                        token: token
                    }
        
                    fetch('https://f.nettruyenmax.com/Comic/Services/ComicService.asmx/Read',{
                        method: "POST",
                        headers: {
                            'Content-Type': "application/json",
                            'Cookie':cokie,
                        },
                        body:JSON.stringify(dataread),
                    })
                        .then((response) => response.text())
                        .then((body) => {
                            let succ2 = (body.match(/"success":(.*?),/)||[])[1]
                            console.log(body)
                            if(succ2=='true'){
                                __count++
                                setTimeout(resolve,1000)
                            }else{
                                resolve()
                            }
                        }); 
                }
            }); 
    })
}


async function main(){
    for(i=0;i<queue.length;i++){
        await readchap(i,__token,cokie_1,'c1')
    }
    main()
}

main()


const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World    '+__count);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});