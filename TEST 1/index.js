
import {fetchData} from './fetchData.js';
import {getCategoriesDataButton} from './buttonsFunctions.js';

// button 
const left_button = document.getElementById("left-button");
const central_button = document.getElementById("central-button");
const right_button = document.getElementById("right-button");
export const question_list = document.getElementById("question-list");
export let arrayOfCategories = [];

// function to get random Categories
async function getCategories(){
    const categories = await fetchData(`https://opentdb.com/api_category.php`);
    const categories_list = categories.trivia_categories;
    const random = categories_list.sort(()=>  0.5 - Math.random());   
    arrayOfCategories.push(...random.slice(categories_list,3))    
    left_button.textContent = arrayOfCategories[0].name;
    left_button.id = arrayOfCategories[0].id;
    central_button.textContent = arrayOfCategories[1].name;
    central_button.id = arrayOfCategories[1].id;
    right_button.textContent = arrayOfCategories[2].name;
    right_button.id = arrayOfCategories[2].id;
};

window.addEventListener("load", getCategories);
left_button.addEventListener("click", getCategoriesDataButton);
central_button.addEventListener("click", getCategoriesDataButton);
right_button.addEventListener("click", getCategoriesDataButton);