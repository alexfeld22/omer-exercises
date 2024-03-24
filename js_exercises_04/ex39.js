/*
JavaScript – Multiple inputs copy

The following exercise contains the following subjects:

● events

Instructions

Many times an application needs to verify the account by
sending a verification code by text message.

Let's create functionality that enables the user to paste the
verification code to the input fields.

Features:
1. The user is allowed to type the values manually. After
each value is inserted, the next input will be focused.
2. The user is allowed to paste the verification code.
3. An extra challenge will be to auto submit the form once all
inputs all populated.

Things to think about:
What happens if the user pastes only 3 digits and there are
6 inputs to fill out.

Here is an example.
Things to help you:
Google “paste event” to understand how to listen to a
paste event.
Google “clipboardData” to find out how to get the value of
a paste event.

*/

const aNumber = Number(window.prompt("How many digits in your code?", ""));

const codeLenght = 
    isNaN(aNumber) || aNumber < 1? 1 :
    aNumber > 5 ? 5 : aNumber;


function checkCode(){
    console.log('The code is checking... ');
    const inputs = document.getElementsByClassName('input1');
    for (let input of inputs){
        console.log(input.value);
    }
}

function generateVerificationForm(number) {

  let node = document.createElement("div");

  let ul = node.appendChild(document.createElement("ul"));
  ul.style.listStyle = "none";

  let btn = document.createElement("button");
  btn.innerHTML = "Submit";
  btn.className = "bnt1";
  btn.addEventListener('click',checkCode);

  for (let i = 0; i < number; i++) {
    let li = document.createElement("li");
    li.style.display = "inline-block";
    li.style.width = `${100 / number}%`;
    ul.appendChild(li);

    let input = li.appendChild(document.createElement("input"));
    input.style.width = `80%`;
    input.className = "input1";

    input.setAttribute("type", "number");

    input.addEventListener("input", function () {
        if(checkIfAllInputsFilled()){
            checkCode();
        }else{
            if (i != number-1){
                this.parentElement.nextElementSibling.firstElementChild.focus();
            }else{
                btn.focus();
            }
        }
      });

    input.addEventListener('paste',(event)=>{
        event.preventDefault();

        let paste = (event.clipboardData || window.clipboardData).getData('text');
        
        if (/\d+/.test(paste) && paste.length == codeLenght){
            let lis = document.getElementsByTagName('ul')[0].children;
            for(let i=0; i< paste.length; i++){
                let digit = parseInt(paste[i]);
                lis[i].firstChild.value = digit;
            }
            checkCode();
        }else{
            console.log(`You can paste ${codeLenght} digits only`)
        }
        
        
    })
  }

  function checkIfAllInputsFilled() {
    let result = true;
    for (const child of ul.children) {
      if (child.firstElementChild.value == "") {
        result = false;
        break;
      }
    }

    return result;
  }

  node.appendChild(btn);

  return node;
}

document.body.appendChild(generateVerificationForm(codeLenght));
