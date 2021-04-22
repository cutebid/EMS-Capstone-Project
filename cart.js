 let addToCartBtn = document.querySelectorAll('.btn');
let container = document.querySelector('.container-column');

let sn = 1;

// creating cart items dynamically and getting it when addtocart button is clicked on.
for (let i = 0; i < addToCartBtn.length; i++) {
            addToCartBtn[i].addEventListener('click', 
            setCartItems
            )
}



function setCartItems(event){
    let btn = event.target;
    let btnParent = btn.parentElement;
    let productName = btnParent.children[1].innerText;
    let productPrice = btnParent.children[0].children[1].children[1].innerText;
    console.log(productPrice)
    let containerRow = document.createElement('div');
    containerRow.classList.add('container-row');
    containerRow.innerHTML = `
                            <h5 class="sn"> ${sn++ } </h5>
                            <h5 class="item"> ${productName} </h5>
                            <h5 class="price prices">  ${productPrice} </h5>
                            <div class="quantity"> 
                                <div class="quantity-items" >
                                    <button class="calcBtn">-</button>
                                    <h3 class="quantity-head"> 1 </h3>
                                    <button class="calcBtn">+</button>
                                </div>
                                <button type="button" class="btn-remove">
                                         Remove
                                </button>
                            </div>
    `
    container.append(containerRow);
    updateCartTotal();
    removebtn();
    addbtn();
}



// this function calaculate the total amount of goods purchased
function updateCartTotal(){
    let containerColumn = document.querySelector('.container-column');
    let containerRow = containerColumn.children;
    let total = 0;
    
    for(let i = 0; i < containerRow.length; i++){
      let cartPrice = containerRow[i].children[2].innerText;
      let cartQuantity = containerRow[i].children[3].children[0].children[1].innerText;
      total += cartPrice * cartQuantity;
    }

    document.querySelector('#total span').innerHTML = total;
}

 

// this remove the item from the cart
function removebtn() {
   let removeBtn = document.querySelectorAll('.btn-remove');
   for(let i = 0; i < removeBtn.length; i++){
       removeBtn[i].addEventListener('click', function(event){
        let removeBtn_grandparent = event.target.parentElement.parentElement;
        removeBtn_grandparent.remove();
        updateCartTotal();

       })
   }
  }

  // substraction button decreases the quantity when clicked on
  
  /* function subbtn() {
      let subBtn = document.querySelectorAll('.subtractbtn')
      for(let i = 0; i < subBtn.length; i++){
          subBtn[i].addEventListener('click', function(event){
              let subBtnParent = event.target.parentElement;
              let valueCount = 0;
                valueCount--
                subBtnParent.children[1].innerText = valueCount;
                updateCartTotal()
          })
      }

  } */


 // add button  increases the quantity when clicked on
  function addbtn() {
    // get all the buttons
    // change them to array with ...
    let addBtn = [...document.querySelectorAll('.calcBtn')];
    let oldVal = new Array(addBtn.length - 1);

    // for each item in array pass the index to 1
    addBtn.forEach((btn,i) => {
        oldVal[i] = 1; // index to 1
        btn.addEventListener('click', () => {
            let subBtnParent = btn.parentElement;
            if (btn.innerText == '+') {
                var newVal = ++oldVal[i];
            } else {
                if (oldVal[i+1] == -1) {
                    newVal = 0;
                } else {
                    var newVal = --oldVal[i+1];
                }
            }
              subBtnParent.children[1].innerText = newVal;
              updateCartTotal()
        })
    })
}

    

// cart number gets updated when the addto cart button is being clicked on                 
    
    for (let i = 0; i < addToCartBtn.length; i++) {
                addToCartBtn[i].addEventListener('click', addnumbertoCart
                )
    }

    function addnumbertoCart(){
        let productnumbers =  document.querySelector('.navcart span').innerHTML;
        productnumbers++;
        document.querySelector('.navcart span').innerHTML = productnumbers;
    }

    

    // this changes the add to cart text to remove from cart
    for (let i = 0; i < addToCartBtn.length; i++) {
        addToCartBtn[i].addEventListener('click', function(){
            addToCartBtn[i].innerHTML = 'REMOVE FROM CART';
            addToCartBtn[i].style.backgroundColor = '#ffe9d6'
    }
        )
    }

      
    
    // closing the whole product container
      let buttonContinue = document.getElementById('continueBtn');
      buttonContinue.onclick = mybtn;
      
      function mybtn(e){
          if(e.target.classList.contains('continueBtn')){
        let cartcontainer = document.querySelector('.container');
        cartcontainer.remove();
    }
      }

      
      // the inputs validation
      function nameValidation(){
        let nameinput = document.getElementById('Name');
        let namepara = document.getElementById('namePara');
        if(nameinput.value == ""){
           namepara.innerHTML ='Please enter your name'
            nameinput.style.border = '2px solid red';
        }
        else{
           nameinput.style.border = '3px solid green';
           namepara.innerHTML =''
        }

 };

      function emailValidation(){
        let emailinput = document.getElementById('Email');
        let emailpara = document.getElementById('emailPara');
        if(emailinput.value == ""){
           emailpara.innerHTML ='Please enter an email'
            emailinput.style.border = '2px solid red';
        }
        else if(!emailinput.value.includes('@')){
           emailinput.style.border = '2px solid red';
           emailpara.innerHTML =' Invalid email'
        }
        else{
            emailinput.style.border = '2px solid green';
            emailpara.innerHTML =''
        }

 };

     function numberValidation(){
         let numberinput = document.getElementById('Number');
         let numberpara = document.getElementById('numberPara');
         let maxlength = '11'
         if(numberinput.value == '') {
             numberpara.innerHTML ='Please enter your telephone number';
             numberinput.style.border = '3px solid red'
         }
         else if(numberinput.value.length < maxlength){
            numberpara.innerHTML ='Phone number cannot be less than 11 characters';
            numberinput.style.border = '3px solid red'
         }
        //  else if(isNaN(numberinput.value)){
        //     numberpara.innerHTML ='Phone number is not a number';
        //     numberinput.style.border = '2px solid red'
        //  }

         else{
            numberinput.style.border = '3px solid green';
            numberpara.innerHTML =''
            
         }

         
     }

         document.getElementById('Name').onblur = nameValidation;
         document.getElementById('Email').onblur = emailValidation;
         document.getElementById('Number').onblur = numberValidation;



     // the cartbutton display the cart container when clicked on
     let cartbtn = document.querySelector('.navcart');
     let cartcontainer = document.querySelector('.container');
     cartbtn.addEventListener('click', function(){
            cartcontainer.style.display = 'block';
     });

     
     
     
   
     function payWithPaystack() {
         let handler = PaystackPop.setup({
          key: 'pk_test_494a628603f3fba01be43f075418ff4628e61d6f', // Replace with your public key
          email: document.getElementById("Email").value,
          amount:   parseFloat(document.getElementById('amount').innerText) * 100,
          ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
          // label: "Optional string that replaces customer email"
          onClose: function(){
            alert('Window closed.');
          },
          callback: function(response){
            let message = 'Payment complete! Reference: ' + response.reference;
            alert(message);
          }
        });
        handler.openIframe();
      }

      function showSummary(){
        nameValidation();

      }