class descriptionView{
    moreQ;
    lessQ;
    newPrice = 0
    _images = document.querySelectorAll('.allImages')
    _images=[...this._images]
    description = document.querySelector('.description')
    cartBtn = document.querySelector('#cart')
    cartContainer=document.querySelector('.cart')
    cartObjects ={}
    productsinCart =[]
    currentProductInMyCart =[]
    plusBtn =1
    minusBtn=1
    qty =1
    // descriptionScrollTo = document.querySelector('.descriptionScrollTo');

    displayHandler(handler){
        let displayArr =[]
        // console.log(this._images)
        let toDisplay =this._images.map(el=> [...el.querySelectorAll('.loaded')])
        toDisplay.forEach(el=> displayArr.push(...el))
        // console.log(displayArr)
        
        
           displayArr.forEach(el =>{
               el.addEventListener('click', handler);
                //    descriptionScrollTo.scrollIntoView({behavior: 'smooth'});
                //    window.scrollTo(0,0);
           })
        }
    descriptionDiv(data){
        const html = `
        <img src="${data.image}" width="90%>
        <div class="description--sub--div description__text20">
            <div>
                <h1>
                    ${data.title}
                </h1> <br>
                <h1 id ='price'>${data.price}</h1>
            </div>
        </div>
        `
        this.description.innerHTML=""
        this.description.insertAdjacentHTML('afterbegin', html)
        this.cartObjects ={
            cartImage:data.image,
            cartTitle:data.title,
            cartPrice:data.price,
        }
        console.log(this.cartObjects)
    }

        cartHandler(handler){
            //Listens to the add to cart button
            this.cartBtn.addEventListener('click', handler)
        }
        renderCart(data){
            this.productsinCart.push(this.cartObjects)
            //Adds to cart
         const html =`
         <ul>
         <li id ="list">
         <div>
         <img src="${data.cartImage}" alt="">
                 <div class="cartDetails">
                 <h5>${data.cartTitle}</h5>
                 <p id='price'>${data.cartPrice}</p>
                 <button data-plus ='${this.plusBtn}' id='plus'>+</button>
                 <button data-minus ='${this.minusBtn}' id='minus'>-</button>
                 <p id ='quantity'> ${this.qty}</p>
                 <div id='total'>${data.cartPrice}</div>
                 <button id="remove">REMOVE</button>
                 </div>
                 </div>
                 </li>
                 </ul>
                 `
                 this.cartContainer.insertAdjacentHTML('afterbegin', html)
                 console.log(this.cartContainer);
                 console.log(this.productsinCart)
                this.minusBtn++
                this.plusBtn++

                localStorage.setItem('cartProduct', JSON.stringify(this.cartObjects))
     }

}
export default new descriptionView()