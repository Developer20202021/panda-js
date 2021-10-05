

//2.add lightblue color on h2 Element 
const h2List = document.getElementsByTagName('h2');
for (const h2 of h2List) {
    h2.style.color = 'lightblue'; 
}


/* 
 3. get a backpack id and give the tomato bakcgroundColor */

const backpack = document.getElementById('backpack');
backpack.style.backgroundColor = "tomato";


/*4. get the card class and use border radius 30px */

const cards = document.getElementsByClassName('card');
for (const card of cards) {
    card.style.borderRadius = '30px';
}

/* 5.write a function , add click handler and use in this function console.log(); */


function clickHandler(){
    console.log('I am clicked');
}

/* 6.get all buy now button and remove function */

const buttons = document.getElementsByClassName('btn');
for (const button of buttons) {
    button.addEventListener('click', function(event){
        event.target.parentNode.removeChild(event.target);
    })
}


/*7. go to lets stay section and get this button and disable .When anyone type email in the input box the disable submit button to be active   */


const emailBox = document.getElementById('email');
emailBox.addEventListener('keyup', function(){
    const disableButton = document.getElementById('disable-button'); 
    const stay = document.getElementById('stay'); 

   
    if (emailBox.value.toUpperCase()== 'EMAIL') {
        disableButton.removeAttribute('disabled');
       
           
        }
        else{
            disableButton.setAttribute('disabled', true);
    }
    
      
    
})


//8. mouse Eneter Event and move the image 

let images = ["images/banner-images/tv.png","images/banner-images/xbox.png" ];
let getImage = document.getElementById('mouse-enter-image');
let imageDiv = document.getElementById('image-move');
getImage.addEventListener('mouseenter', function(){
    for (let i=0; i<images.length; i++) {
       
        getImage.setAttribute("src", images[i]);
       
        

    }
   
}
)



//9. double click on the open field and change the backgroundColor

let subcribeContainer = document.getElementById('subscribe-container');
subcribeContainer.addEventListener('dblclick',function(){
    subcribeContainer.style.backgroundColor = "red";
})


