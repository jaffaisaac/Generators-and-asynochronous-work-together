function flightDuration(){
    setTimeout(
        ()=>{
            fightIterator.next(
                {Qatar: "34h 00m",
                Emirates : " 40h 12m"
             }
            );
        }
        ,1200);
}

function flightPrices(){
    setTimeout(() =>{
        fightIterator.next(
            {
                Qatar: '$2401',
                Emirates : `$5021`
            }
        )
    }, 1000)
}

function *getFights(){
                const allFights = ['Qatar',"Emirates"];
                const fightDuration = yield flightDuration();
                const fightPrice = yield flightPrices();

                for(let fights of allFights){
                    console.log(`
                    New York to Nairobi takes ${fightDuration[fights]} for ${fightPrice[fights]} in the ${fights}
                    `)
                }
}

let fightIterator = getFights()

console.log(fightIterator.next())