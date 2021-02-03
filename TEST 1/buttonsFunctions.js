import {fetchData} from './fetchData.js';
import {creatHtmlElements} from './creatHtmlElements.js';
export async function getCategoriesDataButton(e){
  const targetId = e.target.id;
  const data = await fetchData(`https://opentdb.com/api.php?amount=10&category=${targetId}`);
  const dataResults = data.results;
  creatHtmlElements(dataResults);
};

