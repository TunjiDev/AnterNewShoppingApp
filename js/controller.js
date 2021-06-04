// 'use strict'
import * as model from './model.js'
import imageView from './imageView.js'
import logSignView from './logSignView.js'
import descriptionView from './descriptionView.js'
import cartView from './cartView.js'
import adminCatView from './adminCatView.js';
import searchView from './searchView.js';

//Description view stuff
const descriptionScrollTo = document.querySelector('.descriptionScrollTo');
// const imagesDiv = document.querySelector('.loaded');
// const video = document.querySelector('video');
const descriptionModal = document.querySelector('.descriptionModal');
// const descriptionOverlay = document.querySelector('.descriptionOverlay');
const descriptionCloseBtn = document.querySelector('.descriptionCloseBtn');
const displayRemoveDescriptionModal = function() {
    // video.classList.toggle('hidden');
    descriptionModal.classList.toggle('hidden');
    descriptionScrollTo.scrollIntoView();
    // model.body.classList.toggle('disableScroll');
}
descriptionCloseBtn.addEventListener('click', displayRemoveDescriptionModal);
// imagesDiv.addEventListener('click', function() {
//     descriptionScrollTo.scrollIntoView({behavior: 'smooth'});
// });

let currentProductsinCart =[];

const seeMorePants = function(){
    // imageView.renderImages(model.state2.allPantProducts, model.state2.allShirtProducts)
    imageView.renderDetails( model.state2.allPantProducts, model.state2.allShirtProducts)
    imageView.renderMarkupPants()
    descriptionView.displayHandler(displayController)  
}

const seeMoreShirts = function(){
    imageView.renderMarkupShirts()
    // imageView.renderImages(model.state2.allPantProducts, model.state2.allShirtProducts)
    imageView.renderDetails( model.state2.allPantProducts, model.state2.allShirtProducts)
descriptionView.displayHandler(displayController)  
}

const displayController = function(e){
    displayRemoveDescriptionModal();

    // alert('hiii')
    //Clicking on all images with the same class
    const detail = e.target.closest('.loaded')
    if(!detail) return

    //Getting all information for the particular products
    const detailArr = {
        image :detail.querySelector('img').getAttribute('src'),
        title:detail.querySelector('h2').textContent.trim(),
        price:detail.querySelector('span').textContent
    }

    //Displaying the information on a descriptive container
    descriptionView.descriptionDiv(detailArr)
}

const displayCart =  function(e){
    if(descriptionView.productsinCart.length == 0) return
    console.log(currentProductsinCart)
    cartView.renderCartDetails(currentProductsinCart /*model.displayOrRemoveModalAndOverlay('No Items In Your Cart Yet')*/);
}

const CartController =  function(){
    
    //Checking to make sure we don't add to cart twice
   let checking = descriptionView.productsinCart.find(el => {
       el.cartTitle == descriptionView.cartObjects.cartTitle
    })

   console.log(checking)
   if(!checking /*&& (descriptionView.productsinCart[(descriptionView.productsinCart.length)-1].cartTitle !== descriptionView.cartObjects.cartTitle)*/) {
       descriptionView.renderCart(descriptionView.cartObjects)

       //We need to push the current product so we don't add it back to the cart
       currentProductsinCart.push(checking)
       console.log(checking)
    //    console.log(checking)

    //We need to get the price to remove


    //    We need to take this out later
       cartView.removeProduct(removeController)
       cartView.addQuantityHandler(plusQuantity, minusQuantity)
   }
   if(checking) return
}

const plusQuantity = function(e){
    const currentPlus = e.target.closest('#list')
    const newQty = currentPlus.querySelector('#total')
    const priceDiv = currentPlus.querySelector('#price')

    const allPriceDivs = e.target.closest('.cart')

    const quantityDiv = currentPlus.querySelector('#quantity')
    cartView.addQuantity(quantityDiv) 
    cartView.totalEach(priceDiv,quantityDiv, newQty)  
}

const minusQuantity = function(e){
    const currentMinus = e.target.closest('#list')
    const newQty = currentMinus.querySelector('#total')
    const priceDiv = currentMinus.querySelector('#price')

    const allPriceDivs = e.target.closest('.cart')
    const quantityDiv = currentMinus.querySelector('#quantity')
    cartView.minusQuantity(quantityDiv) 
    cartView.totalEach(priceDiv, quantityDiv, newQty)
}

const calculateTotal = function(e){
    const cartDiv = e.target.closest('.cart')
    let totalCheckout = cartDiv.querySelectorAll('#total')
    totalCheckout=[...totalCheckout] 
    console.log(totalCheckout)
    cartView.totalAmount(totalCheckout)
}

const categoriesAdmin = function(){
    adminCatView.categoriesView(model.state2.allProducts, model.state2.categories)
    adminCatView.editProductAdmin(editingAdminController)
}

const removeController = function(e) {
    const removeId = e.target
    if(!removeId) return
    // localStorage.removeItem('myProducts', JSON.stringify(descriptionView.currentProductInMyCart))
    const listItem = removeId.closest('#list')
    listItem.remove()
    descriptionView.productsinCart.pop()
};

const searchController= function(e){
    console.log('hiiiC')
    const searchBtn = e.target.closest('.searchDiv').querySelector('#search')
    searchView.renderSearchType(model.searchBrand, model.searchCategory)
    searchBtn.addEventListener("click", function(){
        let searchImages = document.querySelector('.searchResults')
        searchImages.addEventListener('click', function(e){
            const searchDescription = e.target.closest(".loaded")
            if(!searchDescription) return
            if(searchDescription) {
                searchView.displaySearchHandler(searchDescriptionController(searchDescription), searchDescription)
            }  
        })
    })
}

const searchDescriptionController = function(data){
    const detailArr = {
        image :data.querySelector('img').getAttribute('src'),
        title:data.querySelector('p').textContent.trim(),
        price:data.querySelector('h5').textContent
    }

    //Displaying the information on a descriptive container
    descriptionView.descriptionDiv(detailArr)
}

const login = async function(){
    await model.userLogIn()
}

const signup = async function(){
    await model.userSignUp()
}

const displaySignUpFormContainer = function() {
    model.displaySignUpFormHandler()
}

const displayLogInFormContainer = function() {
    model.displayLogInFormHandler()
}
const renderApi = async function(){
    //Loading the API
    await model.anterApi()
  
    // imageView.renderImages(model.state2.allPantProducts,model.state2.allShirtProducts)
    imageView.renderDetails(model.state2.allPantProducts,model.state2.allShirtProducts)
}

const addingProductsAdminController = function() {
    adminCatView.addingProductsVisibility()
}
const addingProducts =  async function(){
    adminCatView.addingProductsRequest()
    // if(data=="") return
    
    // setTimeout(() => {
    //     model.addProductModel()
    // }, 5000);
}

const editingAdminController = function(){
    
    adminCatView.editingProductForm(editingFinal)
}
const editingFinal = function(data){
    console.log(data)

}

const checkoutController = function(){
    model.payNow(cartView.totalCheckout)
    if(model.isSuccessful) cartView.checkoutFunction()
}

const init = function(){
    renderApi()
    logSignView.displaySignUpForm(displaySignUpFormContainer)
    logSignView.displayLogInForm(displayLogInFormContainer)
    logSignView.addLogin(login)
    logSignView.addSignUp(signup)
    searchView.renderSearchDiv(searchController);
    imageView.seeMorePants(seeMorePants)
    descriptionView.cartHandler(CartController)
    cartView.renderCartHandler(displayCart)
    imageView.seeMoreShirts(seeMoreShirts)
    descriptionView.displayHandler(displayController)
    adminCatView.categoriesHandler(categoriesAdmin)
    cartView.calculate(calculateTotal)
    cartView.checkoutHandler(checkoutController)
    adminCatView.addProductBtnHandler(addingProductsAdminController);
    adminCatView.addingNowHandler(addingProducts);
}
init()



