let point = 0;
function create(){
    const questions = ['Q1. What is tha capital of India?','Q2. When Sun-light to reach Earth?','Q3. Where is West-Bengal situated?','Q4. Which animal is the largest animal?','Q5. Which bird can not fly?'];
    let q = [];
     q[0] = ['Delhi','Patna','Mumbai','Kolkata'];
     q[1]= ['2 min','3 min','5 min','8 min'];
     q[2]= ['East','West','North','South'];
     q[3]= ['Elephant','Dolphin','Whale','Blue Whale'];
     q[4]= ['Duck','Hen','Ostrich','Seaeagle'];
     let corr = [];
     corr[0] = 0;
     corr[1] = 3;
     corr[2] = 0;
     corr[3] = 3;
     corr[4] = 2;
    let k = 0;
    const div = document.querySelector('.q');
    const ques = document.createElement('p');
    ques.innerHTML = questions[0];
    div.appendChild(ques);
    let button = [];
    for (let i = 0; i < 4; i++) {
        button[i] = document.createElement('button');
        button[i].innerHTML = q[k][i];
        div.appendChild(button[i]);
        button[i].addEventListener('click', function() {
            if (i  === corr[k]) { 
                this.style.backgroundColor = 'green';
                point++;
                setTimeout(() => {
                    rr();
                }, 500); 
            } else {
                this.style.backgroundColor = 'red';
                setTimeout(() => {
                    rr();
                }, 500); 
            }
        });
    }
    const next = document.createElement('div');
    next.innerHTML='Skip';
    div.appendChild(next);
    next.addEventListener('click', rr);
 
function rr() {
    if (k < questions.length - 1) {
        for (let i = 0; i < 4; i++) {
            button[i].style.backgroundColor = ''; // Reset to default color
        }
        k++;
        ques.innerHTML = questions[k];
        for (let i = 0; i < 4; i++) {
            button[i].innerHTML = q[k][i];
        }
    } else {
        endQuiz();
    }
}

    const pElements = document.querySelectorAll(".p");
    const box = document.querySelector('.box');
    pElements.forEach(element => {
        element.style.display = 'none';
    });
}
function endQuiz() {
    const div = document.querySelector('.q');
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
    const endMessage = document.createElement('p');
    endMessage.innerHTML = 'You got ' + point + ' Points.';
    div.appendChild(endMessage);

    const box2 = document.querySelector(".im");
    const image1 = document.createElement('img');
    const para = document.createElement('p');
    if(point == 5){
        image1.src = 'Simple-Quiz/images.jpeg';
        box2.appendChild(image1);
        para.innerHTML = 'Winner Winner!';
        box2.appendChild(para);
    }
    else if(point == 4){
        image1.src = 'Simple-Quiz/download.jpeg';
        box2.appendChild(image1);
        para.innerHTML = 'Better!';
        box2.appendChild(para);
    }
    else if(point == 3){
        image1.src = 'Simple-Quiz/download (1).jpeg';
        box2.appendChild(image1);
        para.innerHTML = 'Good!';
        box2.appendChild(para);
    }
    else if(point == 2){
        image1.src = 'Simple-Quiz/download (2).jpeg';
        box2.appendChild(image1);
        para.innerHTML = 'Um...fine';
        box2.appendChild(para);
    }
    else if(point == 1){
        image1.src = 'Simple-Quiz/images (1).jpeg';
        box2.appendChild(image1);
        para.innerHTML = 'okk';
        box2.appendChild(para);
    }
    else if(point == 0){
        image1.src = 'Simple-Quiz/images (2).jpeg';
        box2.appendChild(image1);
        para.innerHTML = ':(';
        box2.appendChild(para);
    }
}
