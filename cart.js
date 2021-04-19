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
    let productPrice = btnParent.children[3].innerText;
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
                if (oldVal[i+1] == 0) {
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


     // the cartbutton display the cart container when clicked on
     let cartbtn = document.querySelector('.navcart');
     let cartcontainer = document.querySelector('.container');
     cartbtn.addEventListener('click', function(){
            cartcontainer.style.display = 'block';
     });

