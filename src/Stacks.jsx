import React from 'react';

function Stacks(props) {
  let ingredients = props.ingredients;
  return (
    props.stacks.map((stack, i) => {
      console.log(stack);
      return <div key={i}
                  style={{backgroundColor:ingredients[stack].color}}>{ingredients[stack].name}</div>
    })
  );
}

export default Stacks;