// function to creat elements to dom 
import {question_list} from '/index.js';
export async function creatHtmlElements(array){
  try{
    await array.forEach(element => {
      const question_container = document.createElement("div");
      question_container.className = "question-container";
      const question_label1 = document.createElement("span");
      const answer = document.createElement("span");
      question_label1.className = "question-label";
      answer.className = "answer-label";
      question_label1.textContent = element.question;
      answer.textContent = element.correct_answer;
      question_container.appendChild(question_label1);
      question_container.appendChild(answer);
      question_list.appendChild(question_container);
    });
  }
  catch(error){
      console.log(error.message);
  };
};