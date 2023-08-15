var queue = [733419,733420,733421,733422,733423,733424,733425,733426,733427,733428,733429,733430,733431,733432,733433,733434,733435,733436,733437,733438,733439,733440,733441,733442,733443,733444,733445,733446,733447,733448,733449,733450,733451,733452,733453,733454,733455,733456,733457,733458,733459,733460,733461,733462,733463,733464,733465,733466,733527,733528,733529,733531,733532,733533,733535,734140,734141,734163,734173,734174,734175,734176,734177,734178,734179,734180,734181,734182,734183,734184,734185,734186,734187,734188,734189,734190,734191,734192,734193,734194,734195,734196,734197,734198,734199,734200,734201,734202,734203,734206,734207,734208,734209,734210,734211,734212,734213,734214,734215,734217,734218,734219,734220,734221,734222,734223,734227,734228,734229,734230,734232,734233,734234,734235,734236,734237,734238,744767,744768,744769,758066,758067,758068,758069,758475,758476]
var __token ='898f99a7-8784-13db-83ff-16bd497e8754'
var views = "3.138.248"
var cokie_1 = "comment_name=CHiáº¿n Tháº§n; comicvisitor=43fd3bc5-373e-4d29-b3d3-78fa6bdfe0ca; comicread=43fd3bc5-373e-4d29-b3d3-78fa6bdfe0ca; ASP.NET_SessionId=5kvvgcp0w50cekp25bt2gllh; _gid=GA1.2.1830532613.1690817159; _gat_gtag_UA_57670566_10=1; ASP.NET_SessionId=nsnpqyp0kwzhqgqqq1o0dq1p; returnurl1=/; .ASPXAUTH=72688376DFE8C72EE5571CDF11FEE8C9C2EC6EA49EE5A16EDE645ED6E37CDD87764915BC22D97AEA9BA854AEC34C086E0B53ED19B3791227FA4608DDBCB6B415CF75BDF4839D345F805C4204BE4A4A2AD4C6BBDA51788217A08D4954DB9621C7915892174431376B0F37B1F14AF057CBB6446B26A52DE359BDF1BA3AAE1AC5591352BDAB1160C4A0D089E2B380AAE720EE1F891DB3377ED87ED94BCAB91C6BCEE64371E407ECBEAB3EF1FFBCC493F34A6CDE4D92AB00A95FD886391BE64EAD747F085C13; www.nettruyenmax.comportalroles=1BFF21FE2C91F73981DC1BF26EB3B799268E94ACE895CFFB584549AAC5486279FFCCF681969A0B9EFDE83EA29BBBFCCFD2B9ABA0A734148FC5045517357CA56AE0C3D0C8B0F77A3A69F96E2DFC77DE207E407C396F0BB1716AE4952B7B3E731EBC1CCD51F2B26EEBC8A4532DD702295AED4BDCD9AA6BBA037230156114A030AC31CA4B4099FA6E88A5681072599BBE18D5F09D73B17A91B86FB3EAA0258341E65E1C05BC; _ga_4X7L3HYB4K=GS1.1.1690817159.33.1.1690817185.0.0.0; _ga=GA1.2.780534756.1687262041"
var cokie_2 = "comicvisitor=ef4f2c95-d6d7-48c0-80fa-0f5516be1650; comicread=ef4f2c95-d6d7-48c0-80fa-0f5516be1650; f.nettruyenmax.comportalroles=; DisplayName=; ASP.NET_SessionId=5oyrqn0un3a5kx3vyt0g4o1t; _gid=GA1.2.744766720.1690817217; _gat_gtag_UA_57670566_10=1; ASP.NET_SessionId=jghhqn350jmoirdmj44dxchp; returnurl1=/; .ASPXAUTH=70AA6619E11459E552A2527146553C843F9E0042F1E2F49A52DD47F7757D6234678DBBAC51AFEA78BC0FCF634021CAB4F9065B7C1B06420C2228B4F0C45B9C0325BB766215E9A94FBDF2434C3DA57B988F9E1B29940A383C2FEEDD3D4F31CBE6E9A4EE2A5C6A8E0D2AD6C500438AA2599093265D374FBBD1070E573551044D6EDCF1EF630B7D63811F706F54993F4EC324237C101C704A7DDB470AD8B1480A290B3CED31C1F864914FD6BE3925BA938D82C08B27DB816682D43AD6DCB8B5A6A238087EABE88A776022FEE73346A646AE5C5F1998; www.nettruyenmax.comportalroles=F0704411C7C6DCC8B74B02BB5775EEDCF023C79BA313872DD5F6799FE8EB941B1F4CF056F6E18183391B03D8F41C2F5C83B550A8694516CBA614D3FDB066F7446A3F4AA30A8E446EE0354009C5C27258CD30A56949A085C214B55691465C6F75F5A93B92FD2A4FD1762373AB137E48AE415283D6C2018BDA331F929F529EC7A7D96109521D404DF47DF17413FC3D734894286D43DC0BAB6B89CA553B87ADD316F364C14139BADA8123972629F427E78D22D6EEB7; _ga_4X7L3HYB4K=GS1.1.1690817216.3.1.1690817236.0.0.0; _ga=GA1.2.2088391471.1690689562"



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
                            if(succ2=='true'){
                                __count++
                                console.log(numcokie,body,__count)
                               setTimeout(resolve,2345)
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
//hello test 123123ouasoduyh
        await readchap(i,__token,cokie_1,'c1')
        await readchap(i,__token,cokie_2,'c2')
    }
    main()
}

main()
