const questDB=[
    {
        question:"What is your favourite color?"
    },
    {
        question:"What is your favourite food?"

    },
    {
        question:"What is your favourite actor?"
    },
    {
        question:"What is your favourite song?"
    }

];

//taking refrence to particular question
const question=document.querySelector('.question');
const quest1=document.querySelector('#quest1');
const quest2=document.querySelector('#quest2');
const quest3=document.querySelector('#quest3');
const quest4=document.querySelector('#quest4');
const submit=document.querySelector('.butn');
///question ko load karne ke liye
let questionCount=0;
const LoadQuestion=()=>{
    const questionList=questDB[questionCount];
    console.log(questionList);
    question.innerHTML=questionList.question;
}
LoadQuestion();
///jaise hi user submit par click kare use second question load ho jae
submit.addEventListener('click',()=>{
    questionCount++;
    if(questionCount<questDB.length)
    {
        LoadQuestion();
    }
});
