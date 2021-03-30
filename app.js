
let clickCoin = 0
let moreCoin = 0
let clickMod = 0




let levelTools = [
    {
      id: 0,
      name: 'Super Mixer',
      price: 5,
      upPrice: 3.00,
      // FIXME  add quantity to all tools
      // FIXME  add auto bool to all tools
      // FIXME  add modifier to all tools
      quantity: 0,
      auto: false,
      modifier: 1,
      stopImg:'./tools/stop_mixer.png',
      imgUrl: './tools/mixer.png',
      description: 'Start up Level'
    },
    {
      id: 1,
      name: 'Grandma Power',
      price: 15,
      upPrice: 5.00,
      quantity: 0,
      auto: false,
      modifier: 1,
      stopImg:'./tools/stop_granny.png',
      imgUrl: './tools/granny.png',
      description: 'Grandma want$ to Help'
    },
    {
      id: 2,
      name: 'Commerical Kitchen',
      price: 45,
      upPrice: 20.00,
      quantity: 0,
      auto: true,
      modifier: 1,
      stopImg:'./tools/stop_kitchen.png',
      imgUrl: './tools/kitchen.png',
      description: 'Company XYZ want$$ to help'
    },
    {
      id: 3,
      name: 'Factory',
      price: 200,
      upPrice: 100.00,
      quantity: 0,
      auto: true,
      modifier: 1,
      stopImg:'./tools/stop_factory.png',
      imgUrl: './tools/factory.png',
      description: 'World cookie domination'
    }
  ]



// different modifer values for each upgrade

  function superMixer(id){
      if (clickCoin >= levelTools[id].price) {
            clickCoin = clickCoin - levelTools[id].price;
            levelTools[id].modifier = levelTools[id].modifier +1;
            levelTools[id].price = levelTools[id].price * levelTools[id].modifier;
            levelTools[id].quantity = levelTools[id].quantity +1;
            upClick = clickCoin
            // clickMod = clickMod +2;
            moreCoin = levelTools[id].modifier;
            document.getElementById("ClickerBuy").innerHTML = levelTools[id].modifier +" "+ `ClickCoins Per click!`;
                mixer()
            if(levelTools[id] === levelTools[1]){
                autoclick()
                clickMod = clickMod +2;
                document.getElementById("grannyMsg").innerHTML = "AUTO Grandma 1 Click Coin every 5 sec";
            }else if(levelTools[id] === levelTools[2]){
                cKitchen()
                document.getElementById("cKitchenMsg").innerHTML = "COMMERICAL KITCHEN 1 time bonus 50 Click Coins & 1 Click Coin every 3 sec";
            }else if(levelTools[id] === levelTools[3]){
                autoclick()
                document.getElementById("factoryMsg").innerHTML = "FACTORY 100 bonus Click COins & 1 Click Coin every 1 sec";
            } 
        } else{
            alert("Not Enough Click Coins!")
        }


        // let expr = levelTools[id];
        // switch (expr) {
        //   case levelTools[0]:
        //     grandma();
        //     break;
        //   case levelTools[1]:
        //     autoclick();
        //     break;
        //   case levelTools[2]:
        //       cKitchen();
        //     break;
        //   case levelTools[3]:
        //       factory();
        //     break;
        //   default:
        //     alert(`Not enough Click Coins!`);
        // }



        console.log(id)
        update()
  }


  // TODO buySuperMixer
  // check if they have enough resource (clickCoin)+
  //      reduce resoure by item price+
  //      increase item price+
  //      increase item quantity+
  //      draw item updates+
  //       call update(   `)



function clickCookie(id){
    clickCoin++;
    moreCoin++;
   clickCoin = clickMod + clickCoin;
    newClickCoin =0;
    // TODO add modifiers of clicks
    //      filter tools to only !auto tools
    // itterate over that list to clickCoin the quantity * modifier
    update()
    drawTools()
}


function autoclick(){
    // TODO autoClick (see clickCookie but change from !auto to auto)
// set up interval to call 'autoClick'
    setInterval(function(){clickCookie(); }, 3000);
}



 function mixer(){
    clickMod = clickMod +2;

     console.log('Mixer Func');
 }


function grandma(id){
    if (clickCoin >= levelTools[id].price) {

    }else {
        alert(`Not enough Click Coins for Grandma Power!`)
    }
    document.getElementById("cKitchenMsg").innerHTML = "Grandma Power 1 Click Coin every 5 sec";

   }



   function cKitchen(){
    setInterval(function(){clickCookie(); }, 3000);
    clickCoin = clickCoin + 50;
    console.log('kitchen FUNC')
   }



   function factory(){

        console.log("FACTORY FUNC")

   
   }





function update(){
    document.getElementById('cCount').innerText = clickCoin;

}




function drawTools(){
    let toolTemplate='';
        levelTools.forEach(levelUp =>{
            toolTemplate +=`<div class="col sidenav">
            <img src="${levelUp.imgUrl}" class="level_up" onclick="superMixer('${levelUp.id}')" style="width:90px;height:90px;">
            <ul>
                <li><b>Name: ${levelUp.name}</b></li>
                <li><h3>Price:${levelUp.price}</h3></li>
                <li> ${levelUp.quantity}  :Number of ${levelUp.name}</li>
            </ul>
            <hr><BR>
            </div>`
            }) 
            // console.log("drawTools WOKRING")
    document.getElementById('toolSpot').innerHTML = toolTemplate;
    }



    
    


update()
drawTools()