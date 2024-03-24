document.addEventListener('DOMContentLoaded', ()=> {

   const btn =document.getElementsByClassName('btn');
   const ourBurger = document.getElementById('our-burger');
   const checkoutH3 = document.getElementById('checkoutH3');
    const cancel = document.getElementById('cancel');

   let ingArray= [];
   let price = 0.00;
   let topPoint = 25;

var dicPrice = {
  "cucumber": 0.10,
  "Cutlet": 1.00,
  "Mayo": 0.30,
  "Cheese": 0.50,
  "Onion": 0.15,
  "Salad": 0.20,
  "Tomato": 0.10
};


for(const e_btn of btn)
    {
    e_btn.addEventListener("click",()=>{
    
        let parent=e_btn.parentNode;
        let stringNumOfٍ = parent.querySelector('p');
        let ingName=parent.id;
        // convert to integer
        let numOf = parseInt(stringNumOfٍ.innerText);
        let ingPrice = dicPrice[ingName];

        //  button + (add)
        if(e_btn.classList.contains('inc')){

            stringNumOfٍ.innerText=`${numOf+1}`;
            let newIng = document.createElement('img');
            newIng.src = `images/${ingName}.svg`;
            newIng.classList.add("in");
            newIng.id=`${ingName}_${numOf+1}`;
            ourBurger.appendChild(newIng);
            moveToBottom(newIng);
            ingArray.push(`${ingName}_${numOf+1}`);

            console.log(price);
            console.log(ingPrice);
            price = (price+ ingPrice);
            
            console.log(price);
            checkoutH3.innerText="$ "+price.toFixed(2);




        }  

        //  button - (remove)
        else{
            let lastIng =document.getElementById(`${ingName}_${numOf}`)
            if( lastIng==null)
            {
                return;
            }
            else{
                stringNumOfٍ.innerText=`${numOf-1}`;
                ourBurger.removeChild(lastIng);
                rearrenge(`${ingName}_${numOf}`);
                price = (price- ingPrice);
                checkoutH3.innerText=`\$ ${price.toFixed(2)}`;
            }
    }

    })}


function moveToBottom (ingImg){
     topPoint=topPoint+25;
     gsap.to(ingImg, { duration: 1, bottom: topPoint, ease: 'power2.out' });
}



function rearrenge(deletedID){
    let all =document.getElementsByClassName('in');
    // مكانه في ال array 
    let index = ingArray.indexOf(deletedID);
    let ingNum =all.length;
    // همسح العنصر من ال array
    ingArray.splice(index, 1);  
    // هعدي علي كل اللي فوقيا وانزل واحد واحد 25بيكسل
    for(let i = index ; i<ingNum ; i++)
    {
    // بجيب العنصر اللي بعدي عن طريق ال index اللي بعدي (بعد المسج بقي نفس الindex)علشان اعرف ال id بتاعه 
     let upperElementID =ingArray[i];
     //  حددت العنصر بال id علشان ابدأ احركه
     let upperElement= document.getElementById(upperElementID);
     // بحركه لتحت وبنقض التوب بوينت علشان لما اضيف عناصر تانية
     gsap.to(upperElement, { duration: 1, y: '+=25', ease: 'power2.out' });
          
    }
    topPoint=topPoint-25;
}



checkoutbtn.addEventListener("click",()=>{
    const block =document.getElementById('block');
    block.style.display="block";


})

cancel.addEventListener("click",()=>{
    const block =document.getElementById('block');
    block.style.display="none";


})




})

// مشكلتي دلوقتي ان الnum عندي بصفر دايما 
