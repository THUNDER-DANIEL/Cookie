
let clickCoin = 0
let moreClick = 0


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

// function robot(id){
//     for (let i = 0; i < levelTools.length; i++) {
//     let  box = levelTools[id];
//     }
//     console.log(box)
// }
// robot()


  function superMixer(id){
      if (clickCoin >= levelTools[0].price) {
          clickCoin = clickCoin - levelTools[0].price;
          levelTools[0].quantity = levelTools[0].quantity +1;
          newMod = levelTools[0].modifier++;
          moreClick = clickCoin + levelTools[0].modifier;
          levelTools[0].price = levelTools[0].price * levelTools[0].modifier;
          document.getElementById("ClickerBuy").innerHTML  
          = levelTools[0].modifier +" "+ `ClickCoins Per click!`;
        //   clickCoin = clickAcct;
        } else{
            alert("Not Enough Click Coins!")
        }
        console.log(levelTools[0].price, 'PRICE')
        console.log(clickCoin, "CLICKER")
        console.log(levelTools[0].modifier, "Modifier")
        console.log(levelTools[0].quantity, "Q")
        update()
  }


function clickCookie(){
    clickCoin++;
    moreClick++;
    // TODO add modifiers of clicks
    //      filter tools to only !auto tools
    // itterate over that list to clickCoin the quantity * modifier
    // console.log("click Cookie Function is working")
    // document.getElementById('cCount').innerHTML = display_cCount
    update()
    // grandma()
    // cKitchen()
    // factory()
}





function grandma(){
    if (clickCoin  >=  30) {
        console.log("Grandma")
    }
   
   }



   function cKitchen(){
    if (clickCoin  >=  35) {
        console.log("KITCHEN")
    }
   
   }



   function factory(){
    if (clickCoin  >=  40) {
        console.log("FACTORY")
    }
   
   }




// TODO buySuperMixer
// check if they have enough resource (clickCoin)
//      reduce resoure by item price
//      increase item price
//      increase item quantity
//      draw item updates
//       call update(   `)



function update(){
    document.getElementById('cCount').innerText = moreClick;
    // document.getElementById('modifier1').innerText = levelTools[0].modifier;
    // levelTools[0].stopImg = levelTools[0].imgUrl;
        // superMixer()
    // console.log("UPDATE FUNC WORKING")
    // document.getElementById('playerTwo').innerText = cpHealth
    // document.getElementById('p1hits').innerText = p1count
}




function drawTools(){
    let toolTemplate='';
        levelTools.forEach(levelUp =>{
            toolTemplate +=`<div class="col sidenav">
            <img src="${levelUp.stopImg}" class="level_up" onclick="superMixer('${levelUp.id}')" style="width:90px;height:90px;">
            <ul>
                <li><b>Name: ${levelUp.name}</b></li>
                <li>Price:${levelUp.price}</li>
                <li> ${levelUp.modifier}  :Number of ${levelUp.name}</li>
            </ul>
            <hr><BR>
            </div>`
            }) 
            // console.log("drawTools WOKRING")
    document.getElementById('toolSpot').innerHTML = toolTemplate;
    }



    
    
    function atuoclick(){
        // TODO autoClick (see clickCookie but change from !auto to auto)
    // set up interval to call 'autoClick'

}


update()
drawTools()

