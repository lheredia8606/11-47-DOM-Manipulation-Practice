/**
 * SORTING NODES WITHIN A CONTAINER
 * Please, make sure to read the following files in the exercises-info folder before you start
 * * 01 SelectNodes.md
*/

/**
 * @task
 * Select all elements that have class of "item" as a NodeList.
 * Store them in the allItems variable
 * Example: const allItems = <Your code>;
 */

const allItems = document.querySelectorAll('#main .item');



/**
 * @task
 * Select the main container by the id of "main"
 * Store it in the main constant
 * Example: const main = <Your code>
 * */

//not used
const main = document.getElementById('main');



/**
 * @task
 * Select the favorites container by id of "favs"
 * Store it in the favs constant
 * Example: const favs = <Your code>;
 */

//not used
const favs = document.getElementById('favs');



/**
 * @task
 * Create the updateCollections(id, direction) function that follows the list of requirements:
 * Takes an argument of the item id (number)
 * Take an argument of direction as a string value of 'toMain' or 'toFavs'
 * Moves the element from the current parent to the new parent (from main to favs or vice versa)
 * Changes the icon of the element: fa-heart-circle-plus for main, fa-heart-crack for favs items.
 */

function updateCollections(element){
  const parent = element.parentNode;
  const newParent = parent.id === 'main'? document.getElementById('favs') : document.getElementById('main');
  const iconClass = newParent.id === 'main' ? 'fa-heart-circle-plus' : 'fa-heart-crack';
  //i got cunfussed because i dont know why i have to do
  // .nextElementSibling, the first child is <i>
  //could you explain that for me please
  const icon = element.firstChild.nextElementSibling;
  icon.classList.remove(...icon.classList);
  icon.classList.add('fa-solid', iconClass);
  parent.removeChild(element);
  newParent.appendChild(element);
}



/**
 * @task
 * Iterate through the every item in allItems NodeList and apply the
 * addEventListener click event to each item.
 * The item click must execute/call the following:
 * * Get the current item's parent id ('main' or 'favs')
 * * Get the current item id (a number value)
 * * Set the direction constant to be equal to 'toFavs' or 'toMain', based off the current location
 * * The direction means the collection to move the item into, when the item is clicked
 * * If the correct item's location is the parent of id 'main' -> the direction is 'toFavs'
 * * If the correct item's location is the parent of id 'favs' -> the direction is 'toMain'
 * * Make the updateCollections function call, assign the item Id and the direction defined above
 */

  allItems.forEach((element) =>{
    element.addEventListener('click', (e) =>{
      updateCollections(e.target);
    });
  });


