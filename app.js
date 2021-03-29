
let clickCoin = 0
let moreCoin = 0
let clicks = 0



// let clickUpgrades = {
//     pickaxes: {
//       price: 100,
//       quantity: 0,
//       multiplier: 1
//     }
//   }




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




  function superMixer(id){
      if (clickCoin >= levelTools[id].price) {

          clickCoin = clickCoin - levelTools[id].price;
          levelTools[id].modifier = levelTools[id].modifier +1;
          levelTools[id].price = levelTools[id].price * levelTools[id].modifier;
          levelTools[id].quantity = levelTools[id].quantity +1;

          upClick = clickCoin
          moreCoin = levelTools[id].modifier;


          document.getElementById("ClickerBuy").innerHTML  
          = levelTools[id].modifier +" "+ `ClickCoins Per click!`;
        console.log(clickCoin, "CC beore mod")
        // clickCoin = clickCoin * levelTools[0].modifier
        } else{
            alert("Not Enough Click Coins!")
        } if(levelTools[id] === levelTools[1]){
            startInterval()

        }

        // clickCoin = clickCoin * levelTools[0].modifier

        console.log(id)
        // clickCookie()
        update()
  }


  function startInterval() {
    collectionInterval = setInterval(collectAutoUpgrades, 3000);
  }


  // TODO buySuperMixer
  // check if they have enough resource (clickCoin)+
  //      reduce resoure by item price+
  //      increase item price+
  //      increase item quantity+
  //      draw item updates
  //       call update(   `)







function clickCookie(id){
    clickCoin++;
    // upClick = clickCoin * levelTools[id].quantity;
    moreCoin++;
    newClickCoin =0;


    // if(levelTools[id].modifier>=1){
    //     clickCoin = clickCoin * levelTools[id].modifier ;
    // }
    // newClickCoin = clickCoin;
    // TODO add modifiers of clicks
    //      filter tools to only !auto tools
    // itterate over that list to clickCoin the quantity * modifier
    update()
    drawTools()
    // console.log("click Cookie Function is working")
    // grandma()
    // cKitchen()
    // factory()
}


function atuoclick(){
    // TODO autoClick (see clickCookie but change from !auto to auto)
// set up interval to call 'autoClick'

    setInterval(function(){ alert("Hello"); }, 3000);
  
}




 function mixer(){
     clickCoin = clickCoin *2;
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





function update(){
    document.getElementById('cCount').innerText = clickCoin;
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