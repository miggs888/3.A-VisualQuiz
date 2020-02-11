let submitAnswerButton;
let answerInput;
let currentQuestion;
let response;
let responseColor = "pink";
let heading; 
let correctAnswers = 0;

//quiz questions list
let statements = [
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
        correctAnswers = correctAnswers + 1;
        response = 'correct!';
        responseColor = '#d0fef5';
    } else {
        // this is the wrong answer condition
        response = 'Wubba lubba dub dub! That was not correct. Please try again.';
        responseColor = '#a10b08';
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
    heading = createElement('h2', ['The Even More Stylish Rick & Morty Quiz!'])
    heading.position(145, 75);
    // Input field
    textFont("mr-eaves-xl-modern");
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
    //line work
    stroke("#d0fef5");
    noFill();
    quad(130, 65, 650, 65, 650, 130, 130, 130);
    quad(20, 20, 780, 20, 780, 580, 20, 580);
    quad(15, 15, 785, 15, 785, 585, 15, 585);
    //text
    noStroke();
    fill("#f7e54f");
    textSize(22);
    text(message, 120, 260);
    fill(responseColor); 
    text(response, 120, 480);
    //Score Board
    fill("pink");
    text('You have ' + correctAnswers + ' of 9 correct answers needed to win!', 120, 520);
}