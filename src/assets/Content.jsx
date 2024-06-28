import { useState } from "react"

function Content(){
    const Food =[{id:1, name:'fruits'},{id:2, name:'meat'},{id:3, name:'drinks'},{id:4, name:'snacks'}]
    //Food.map(Food=><li key={Food.id}></li>) 
    const [food, setFood] = useState ([])
    const[foodName, setFoodName] = useState('')
    const[foodNumber, setFoodNumber] = useState('')

    function handleName(event){
        setFoodName(event.target.value)
    }
    function handleNumber(event){
        setFoodNumber(event.target.value)
    }
    function handleFood(){
        const foodChoice={
                        name: foodName,
                        number: foodNumber};
                        setFood(f=>[...f,foodChoice]);
            setFoodName('');
            setFoodNumber('');            
    } 

    return(
        <div>
           <p>Our items in store</p>
      <ul>{Food.map((foodItem, index) => <li key={index}>{foodItem.number} {foodItem.name}</li>)}</ul>
            <p>Your food choices</p>
      <ul>{food.map((foodItem, index) => <li key={index}>{foodItem.number} {foodItem.name}</li>)}</ul>
            <input type="text" placeholder="input your food choice" value={foodName} onChange={handleName}/><br/>
            <input type="number" placeholder="input number of items" value={foodNumber} onChange={handleNumber}/><br/>
            <button onClick={handleFood}> add to cart</button>
        </div>
    )

}
export default Content