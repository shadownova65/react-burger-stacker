import React from 'react';

function Ingredients(props) {
  return (
    props.ingredients.map((ingredient, i) => {
      return (
        <>
          <div  key={i}
                style={{backgroundColor: ingredient.color}}>
            • {ingredient.name} 
            <button value={i}
                    onClick={props.addToStack}>▶️</button>           
          </div>
        </> 
      );
      })

  )
   
    
}

export default Ingredients