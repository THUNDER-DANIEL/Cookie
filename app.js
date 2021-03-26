
let clickCoin = 0

let levelTools = [
    {
      id: '25',
      name: 'Super Mixer',
      price: 25.00,
      upPrice:3.00,
      imgUrl: './tools/mixer.png',
      description: 'Start up Level'
    },
    {
      id: '50',
      name: 'Grandma Power',
      price: 50.00,
      upPrice: 5.00,
      imgUrl: './tools/granny.png',
      description: 'Grandma want$ to Help'
    },
    {
      id: '55',
      name: 'Commerical Kitchen',
      price: 45.00,
      upPrice: 20.00,
      imgUrl: './tools/kitchen.png',
      description: 'Company XYZ want$$ to help'
    },
    {
      id: '60',
      name: 'Factory',
      price: 200.00,
      upPrice: 100.00,
      imgUrl: './tools/factory.png',
      description: 'World cookie domination'
    }
  ]




function clickCookie(){
    clickCoin = clickCoin +1;
    console.log("click Cookie Function is working")
    // document.getElementById('cCount').innerHTML = display_cCount
    update()
}




function update(){
        document.getElementById('cCount').innerText = clickCoin;

        console.log("UPDATE FUNC WORKING")
        // document.getElementById('playerTwo').innerText = cpHealth
        // document.getElementById('p1hits').innerText = p1count
}




function drawTools(){
    
    let toolTemplate='';
    
        levelTools.forEach(levelUp =>{

            toolTemplate +=`<div class="col sidenav">
            <img src="${levelUp.imgUrl}" style="width:90px;height:90px;">
            <ul>
                <li><b>Name: ${levelUp.name}</b></li>
                <li>Price:${levelUp.price}</li>
            </ul>
            <hr><BR>


            </div>`

            }) 
            console.log("drawTools WOKRING")
    document.getElementById('toolSpot').innerHTML = toolTemplate;
    
    }









drawTools()

update()
