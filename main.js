let submitAnswerButton;
let answerInput;
let currentQuestion;
let response;
let responseColor = "green";
let heading; 

//quiz questions list
const statements = [
    {question: 'What is the name of Morty\'s crush?', answer: 'jessica'},
    {question: 'What is Rick\'s last name?', answer: 'sanchez'},
    {question: 'What does Beth do for a living?', answer: 'horse surgeon'},
    {question: 'What is Rick\'s universe number?', answer: 'c-137'},
    {question: 'Who is Rick\'s best friend?', answer: 'bird person'},
    {question: 'Who killed Bird Person?', answer: 'tammy'},
    {question: 'What does Rick use to travel between universes?', answer: 'portal gun'},
    {question: 'What type of food does Rick turn himself into to avoid family therapy?', answer: 'pickle'},
    {question: 'What did Jerry major in while in college?', answer: 'civics'},
]

currentQuestion = next();
let message = currentQuestion.question;



function checkQuestion() {
    if (currentQuestion.answer === answerInput.value()) {
        // remove correct answer from array
        statements = statements.filter(statementsObj => {
            return currentQuestion.answer !== statementsObj.answer;
        });
        // this is the correct condition
        response = 'correct!';
    } else {
        // this is the wrong answer condition
        response = 'Wubba lubba dub dub! That was not correct. Please try again';
    }
    currentQuestion = next(); 
    answerInput.value('');
    if(currentQuestion) {
        message = currentQuestion.question;
    }
}

function next() {
    if (statements.length < 1) {
        alert('You won the game!');
        return;
    }
    const randomIndex = Math.ceil(Math.random() * statements.length - 1);
    return statements[randomIndex];
}

function setup() {
    createCanvas(800, 600);
    background("#639986");
    // Quiz Title
    textFont("bely-display");
    heading = createElement('h1', ['The Even More Stylish Rick & Morty Quiz!'])
    heading.position(100, 75);
    // Input field
    answerInput = createInput('type answer here');
    answerInput.position(300, 350);
    answerInput.size(180, 30);
    // Submit Answer Button
    submitAnswerButton = createButton('Submit Answer');
    submitAnswerButton.position(300, 400);
    submitAnswerButton.size(180, 30);
    //mouse pressed
    submitAnswerButton.mousePressed(checkQuestion);
}
function draw() {
    background("#639986");
    fill("#f7e54f");
    textSize(20);
    text(message, 40, 275);
    fill(responseColor); 
    text(response, 100, 440);
}