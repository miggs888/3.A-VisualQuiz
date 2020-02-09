let submitAnswerButton;
let questionInput;
let currentQuestion;
let response;
let responseColor = "#f29ed2";
let heading; 

//quiz questions list
const questionList = [
    {question: 'What is the name of Morty\'s crush?', answer: 'jessica'},
    {question: 'What is Rick\'s last name?', answer: 'sanchez'},
    {question: 'What does Beth do for a living?', answer: 'horse surgeon'},
    {question: 'What is Rick\'s universe number?', answer: 'c-137'},
    {question: 'Whos is Rick\'s best freind?', answer: 'bird person'},
    {question: 'Who killed Bird Person?', answer: 'tammy'},
    {question: 'What does Rick use to travel between universes?', answer: 'portal gun'},
    {question: 'What type of food does Rick turn himself into to avoid family therapy?', answer: 'pickle'},
    {question: 'What did Jerry major in while in college?', answer: 'civics'}
]
function next() {
    if (questionList.length < 1) {
        alert('you won');
        return;
    }
    const randomIndex = Math.ceil(Math.random() * questionList.lenth - 1);
    return questionList[randomIndex];
}

function checkQuestion() {
    if (currentQuestion.answer === questionInput.value()) {
        // remove correct asnwer from array
        questionList = questionList.filer(questionListObj => {
            return currentQuestion.answer !== questionListObj.answer;
        });
        // this is the correct condition
        response = 'correct!';
    } else {
        // this is the wrong ansert condition
        response = 'Wubba lubba dub dub! That was not correct. Please try again';
        responseColor = 'red';
    }
    currentQuestion = next(); 
    questionInput.value('');
    messasge = currentQuestion.question;
}
currentQuestion = next();
let messasge = currentQuestion.question;

function setup() {
    createCanvas(800, 600);
    background("#21676c");
    // Quiz Title
    heading = createElement('h2', ['The Even More Stylish Rick & Morty Quiz!'])
    heading.position(200, 75);
    // Input field
    questionInput = createInput('type answer here');
    questionInput.position(100, 350);
    questionInput.size(180, 30);
    // Submit Answer Button
    submitAnswerButton = createButton('Submit Answer');
    submitAnswerButton.position(100, 400);
    submitAnswerButton.size(180, 30);
    //mouse pressed
    submitAnswerButton.mousePressed(checkQuestion);

}
function draw() {
    background("#21676c");
    fill("#f29ed2");
    textSize(32);
    text(message, 50, 150);
    fill(responseColor); 
    text(response, 50, 435);
}
