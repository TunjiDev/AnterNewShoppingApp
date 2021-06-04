class cartView {
    cartBtn = document.querySelector('.myCart')
    cartContainer = document.querySelector('.cart');
    quantityContainer = document.querySelector('#quantity')
    totalContainer = document.getElementById('totalAmount')
    calculateBtn =document.getElementById('calculate')
    checkoutBtn =document.getElementById('checkout')
    historyContainer = document.getElementById('history')
    plusBtn =1
    minusBtn=1
    qty =1
    totalCheckout;
    

    renderCartDetails(data){
        console.log(data);
        this.cartContainer.classList.toggle('hidden')
        if(data.length == 0 && !data){
            this.cartContainer.classList.toggle('hidden')
        };
        if(data.length!==0){
        let html;
        data.forEach(el => {
            html =`
             <ul>
             <li id ="list">
             <div class="listDiv">
                <img src="${el.cartImage}" style="border-radius: 50%; width: 50px;" alt="">
                     <div class="cartDetails">
                        <h5>${el.cartTitle}</h5>
                        <p id='price'>${el.cartPrice}</p>
                        <button dat-plus ='${this.plusBtn}' id='plus'>+</button>
                        <button data-minus ='${this.minusBtn}' id='minus'>-</button>
                        <p id ='quantity'> ${this.qty}</p>
                         <div id='total' style="width: 70px; height: 70px; border: 1px solid black">${el.cartPrice}</div>
                        <button id="remove">REMOVE</button>
                     </div>
            </div>
                     </li>
                     </ul>
                     `
                     this.cartContainer.insertAdjacentHTML('afterbegin', html)
        })
    }
    }

    renderCartHandler(handler){
        console.log('iiii')
    this.cartBtn.addEventListener('click', function() {
        console.log('hhhh');
        handler()
    })
    }

    removeProduct(handler) {
        const removeBtn = this.cartContainer.querySelector('#remove');
        // this.totalContainer.textContent -= Number(data)
        removeBtn.addEventListener('click',handler)
    }
    addQuantityHandler(handlerPlus, handlerMinus){
        const btnIncrease = this.cartContainer.querySelector('#plus')
        const btnDecrease = this.cartContainer.querySelector('#minus')
        btnIncrease.addEventListener('click', handlerPlus)
        btnDecrease.addEventListener('click',handlerMinus)
    }
    addQuantity(data){
        data.textContent= Number(data.textContent) + 1
    }
    minusQuantity(data){
        if(data.textContent == 0) return
        data.textContent= Number(data.textContent) - 1
    }
    totalEach(priceDiv, multiplier, newQty){
        newQty.textContent=''
        const multiplyProducts = Number(priceDiv.textContent) * Number(multiplier.textContent)
        newQty.textContent = multiplyProducts
    }
    calculate(handler){
        this.calculateBtn.addEventListener('click', handler)
    }
    totalAmount(data){
        let allPrice = data.map(el => Number(el.textContent))
        let sum = 0
        let totalPrice = allPrice.reduce((accumulator, currentValue) => {
            return accumulator + currentValue
        }, 0)
        this.totalContainer.textContent= totalPrice
        this.totalCheckout = totalPrice 
    }

    checkoutHandler(handler){
        this.checkoutBtn.addEventListener('click', handler)
    }
    checkoutFunction(){
        this.historyContainer.innerHTML = this.cartContainer.innerHTML
    }
}

export default new cartView()