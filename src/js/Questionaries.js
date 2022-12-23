import API from "./API";
import makeRadio from "./MakeRadio"

export default class Questionaries {
    constructor() {
        this.api = new API(`http://localhost:7070`);
        this.iterator = 0;
        this.pullQuestions();
        this.answers = {};
        this.id = 0;
    }

    pullQuestions() {
        let urlString = document.URL;
        let equalityIndex = [...urlString].findIndex((item)=> {
            if(item === "="){
            return item
            }});
       
        let id = urlString.slice(equalityIndex + 1); 
        (async (evt) => {
        let response = await this.api.pull(id);
        let data = await response.json();
        this.showQuestions(data);
        this.id = id;
        })();

    }


    showQuestions(data) {

        let quantity = Object.keys(data).length;
        let numbers = Object.keys(data);
        let questions = Object.values(data);

        const questionTitle = document.querySelector(".desk-header-title");
        // сюда вписываем номер вопроса
        questionTitle.textContent = `Вопрос номер ${numbers[this.iterator]}`;
        // тут формируем вопрос, который ловим от сервера
        const question = document.querySelector(".desk-info");
        question.textContent = `${questions[this.iterator]}`;
        // полотно на котором даем возможность ответь на вопрос
        const desk = document.querySelector(".desk-body");

        // место для ответа 
       
        if(document.querySelector('.answer-field')){
            document.querySelector('.answer-field').remove();
        }

        if(this.iterator == 4) {
            makeRadio();
        } else {
            const textArea = document.createElement("textArea");
            textArea.className = "answer-field";
            desk.append(textArea);
        }

        
        

        // кнопка push ответов на вопрос.
        if(document.querySelector('.push-btn')){
            document.querySelector('.push-btn').remove();
        }

        const pushBtn = document.createElement("button");
        if (this.iterator === quantity - 1){
            pushBtn.textContent = "Save";
        } else pushBtn.textContent = "Next";
        pushBtn.className = "push-btn";
        desk.append(pushBtn);

        // вешаем ивент
        pushBtn.addEventListener('click', (evt)=> {
            evt.preventDefault();
            if(document.querySelector('.answer-field')){
                this.answers[`${this.iterator}`] =  document.querySelector('.answer-field').value;
            }
            if(document.querySelector('.options')){
                this.answers[`${this.iterator}`] = document.querySelector('input:checked').value;
            } 
            this.iterator += 1;
            if (this.iterator < quantity) {
                this.showQuestions(data);
            } else {
                (async (evt) => {
                    let response = await this.api.push({
                        "id": this.id,
                        "answers": this.answers
                    });
                    let data = await response.json();
                    if (data.ok == "ok") {
                        if(document.querySelector('.answer-field')){
                            document.querySelector('.answer-field').remove();
                        }
                        
                        if(document.querySelector('.push-btn')){
                            document.querySelector('.push-btn').remove();
                        }

                        if(document.querySelector('.options')){
                            document.querySelector('.options').remove();
                        }

                        const questionTitle = document.querySelector(".desk-header-title");
                        questionTitle.textContent = `Спасибо за содействие!`;

                        const question = document.querySelector(".desk-info");
                        question.textContent = "Stay tune!";
                    }
                })();
            }
        })
    }
}