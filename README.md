# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Burger Stacker

You will be writing an app that simulates the stacking of a burger. You are provided an array of ingredients and you need to make an app the displays all the ingredients on the left side and has an area on the right where the ingredients can be stacked to make a burger.

Here is a rough wireframe of the general layout:

![](https://i.imgur.com/beMtwGj.png)

___
## User Stories

* As a user (AAU), I want to see all available burger ingredients listed on the left side.
* AAU, I want the ability to add any ingredient onto the burger stack using a button.
* AAU, I want to see each ingredient I select added to the top of the burger stack on the right side.
* AAU, I want the ability to clear the burger stack so I can start again.
* AAU, I want to be able to add as many ingredients of any type as I want (ingredients don't go away.)

___
## Suggested Ways To Get Started

1. Use `create-react-app` to generate a project called `burger-stacker`.
2. Go into the newly created directory and open it up in your text editor.
3. Clear out the generated code from the `App` component.
4. Think about what components you need to make.
5. Write the static versions of your components.
6. Layout the component hierarchy (decide which ones are children of others).
7. Decide what the state should be.
8. Decide where the state should live.
9. Write the handler callbacks that you pass into children to update state.

### Sample Idea for Component Hierarchy:

```
App
|--IngredientList
|  |--Ingredient(s)
|
|--BurgerPane
|  |--BurgerStack
|  |  |--Ingredient(s)
|  |
|  |--ClearBurger
```

### Suggested state:

You have a set of ingredients that people can choose and you have ingredients that people have added to the burger stack. A simple way to represent this would be with two arrays in state:

```js
this.state = {
  ingredients: [],
  stack: []
}
```

### Notes:

The order of items in the `stack` array will affect the order in which they appear on the page. Make sure you are adding ingredients to the `stack` in the correct way to make each ingredient stack on the previous one.

### Starter Data:

Here are some ingredients to get you started. Feel free to change them or add more. (This would be the value you set for `ingredients` when you initialize state):

```js
[
  {name: 'Kaiser Bun', color: 'saddlebrown'},
  {name: 'Sesame Bun', color: 'sandybrown'},
  {name: 'Gluten Free Bun', color: 'peru'},
  {name: 'Lettuce Wrap', color: 'olivedrab'},
  {name: 'Beef Patty', color: '#3F250B'},
  {name: 'Soy Patty', color: '#3F250B'},
  {name: 'Black Bean Patty', color: '#3F250B'},
  {name: 'Chicken Patty', color: 'burlywood'},
  {name: 'Lettuce', color: 'lawngreen'},
  {name: 'Tomato', color: 'tomato'},
  {name: 'Bacon', color: 'maroon'},
  {name: 'Onion', color: 'lightyellow'}
]
```
___
## BONUSES

* Each ingredient has an associated color. Use this to give each ingredient a nice background color reminiscent of what it looks like in real life.
* Add a form component (simply text input and button) to the ingredient side that lets a user add a new ingredient to the master list of ingredients in state.
* Add the ability to "undo" the last ingredient added (only the last one) by clicking a button that will remove that ingredient. Only that top ingredient should have the button for this showing up. When that ingredient is removed, the next one down should then get the button that allows it to be removed. **HINT**: You probably need to add this button to the top `Ingredient` when you render it in the `BurgerStack` component.
___
## Licensing
1. All content is licensed under a CC-BY-NC-SA 4.0 license.
2. All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.