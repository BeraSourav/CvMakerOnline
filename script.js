function addNewwEF(){
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-3')
    newNode.setAttribute('rows',3);
    newNode.setAttribute('placeholder','Enter here');
    newNode.setAttribute('id','des')

    let weOB = document.getElementById('we');
    let weButtonOB = document.getElementById('weButton');

    weOB.insertBefore(newNode,weButtonOB);

}

function addNewIntF(){
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('intField');
    newNode.classList.add('mt-3')
    newNode.setAttribute('rows',3);
    newNode.setAttribute('placeholder','Enter here');
    newNode.setAttribute('id','des')

    let intOB = document.getElementById('int');
    let intButtonOB = document.getElementById('intButton');

    intOB.insertBefore(newNode,intButtonOB);

}

function addNewaqF(){
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('aqField');
    newNode.classList.add('mt-3')
    newNode.setAttribute('rows',3);
    newNode.setAttribute('placeholder','Enter here');
    newNode.setAttribute('id','des')

    let aqOB = document.getElementById('aq');
    let aqButtonOB = document.getElementById('aqButton');

    aqOB.insertBefore(newNode,aqButtonOB);

}

function addSkl(){
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('sklField');
    newNode.classList.add('mt-3');
    newNode.setAttribute('rows','1')
    newNode.setAttribute('placeholder','Write here');
    newNode.setAttribute('id','sklField');

    let sklOB = document.getElementById('skl');
    let sklBtnOB= document.getElementById('sklBtn');

    sklOB.insertBefore(newNode,sklBtnOB);

}



function generateCv(){
    document.getElementById('nameT').innerHTML=document.getElementById('nameField').value;
    document.getElementById('nameTT').innerHTML=document.getElementById('nameField').value;

    document.getElementById('numberT').innerHTML=document.getElementById('numberField').value;
    document.getElementById('adressT').innerHTML=document.getElementById('adressField').value;
    document.getElementById('desT').innerHTML=document.getElementById('desField').value;


    let wes = document.getElementsByClassName('weField');
    let str = "";
    for(let e of wes){
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById('weT').innerHTML= str;

    //internship
    let ints = document.getElementsByClassName('intField');
    let intr = "";
    for(let e of ints){
        intr = intr + `<li> ${e.value} </li>`;
    }
    document.getElementById('intT').innerHTML=intr;

    //academic
    let aqs = document.getElementsByClassName('aqField');
    let aqr = "";
    for(let e of aqs){
        aqr = aqr + `<li> ${e.value} </li>`;
    }
    document.getElementById('aqT').innerHTML=aqr;

    //skill
    let skls = document.getElementsByClassName('sklField');
    let sklr = "";
    for(let e of skls){
        sklr = sklr + `<li> ${e.value} </li>`;
    }
    document.getElementById('sklT').innerHTML=sklr;
    

    document.getElementById('fbT').innerHTML=document.getElementById('fbField').value;
    document.getElementById('igT').innerHTML=document.getElementById('igField').value;
    document.getElementById('lnkT').innerHTML=document.getElementById('lnkField').value;
    document.getElementById('gtT').innerHTML=document.getElementById('gtField').value;

    //setting image
    let file = document.getElementById('imgField').files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend=function(){
        document.getElementById('imgT').src=reader.result;
    }




    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-template').style.display='block';



    


}


function printCv() {
    document.getElementById('last').style.display='none';
    window.print();
}