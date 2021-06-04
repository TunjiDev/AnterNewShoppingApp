//Registration/Signup Inputs
const nameRegInput = document.querySelector('#fullname');
const emailRegInput = document.querySelector('#emailreg');
const passwordRegInput = document.querySelector('#passwordreg');
const phoneRegInput = document.querySelector('#phone');

//Login/signin Inputs
const emailLogInput = document.querySelector('#emaillog');
const passwordLogInput = document.querySelector('#passwordlog');

const signUpFormContainer = document.querySelector('.create-container');
const logInFormContainer = document.querySelector('.login-container');

//Modal stuff
export const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const modalBtn = document.querySelector('.modalBtn');
export const modalText = document.querySelector('.modalText');
// const disableOrAddScroll = function() {
//     body.classList.toggle('disableScroll');
// }
export const displayOrRemoveModalAndOverlay = function(text) {
    modal.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
    body.classList.toggle('disableScroll');
    modalText.textContent = text;
}
modalBtn.addEventListener('click', displayOrRemoveModalAndOverlay);

//Search Stuff
const searchType = document.querySelector(".searchType")
const searchDiv = document.querySelector(".searchDiv")
const search = document.querySelector("#search")
const reverseSearch = document.querySelector("#search--by--type")
const searchResults = document.querySelector('.searchResults')

//User dashboard stuff
const myAccDiv = document.querySelector('#myAccDiv');
myAccDiv.addEventListener('click', function() {
    profileDiv.classList.toggle('hidden');
});
const profileForm = document.querySelector('.profileForm');
const editProfileBtn = document.querySelector('#editProfileBtn');
const editProfileSubmitBtn = document.querySelector('#editProfileSubmitBtn');
editProfileBtn.addEventListener('click', function() {
    profileForm.classList.toggle('visibility');
});
// editProfileSubmitBtn.addEventListener('click', function() {
//     const result = await fetch('https://shopappanter.herokuapp.com/api/users/profile', {
//         method:'PUT',
//         body: JSON.stringify({
//             name: nameRegInput.value,
//             email: emailRegInput.value,
//             password: passwordRegInput.value,
//         }),
//          headers:{
//              "Content-Type": "application/json; charset = UTF-8",
//              "authorization": `Bearer ${state2.userToken}`
//          }
//     })
//     const data = await result.json()
//     console.log(data)
// });

//Back to Top functionality
const toTopBtn = document.querySelector('.toTopBtn');
const topmostdiv = document.querySelector('.video');
toTopBtn.addEventListener('click', function() {
    topmostdiv.scrollIntoView({behavior: 'smooth'});
});


const logOutDiv = document.querySelector('#logOutDiv');
const signUpDiv = document.querySelector('#signUp');
const loginInDiv = document.querySelector('#logInBtn');

//User profile stuff
const profileDiv = document.querySelector('.profile');
const profileName = document.querySelector('#profileName');
const profileEmail = document.querySelector('#profileEmail');

//Admin Stuff
const grid = document.querySelector('.grid');
const adminDashboard = document.querySelector('.admin');
const category = document.querySelector('.category');
export const state2 ={
    categories:["Pants", "Shirts"],
    allProducts:[],
    allPantProducts:[{name:'Adidas Fashion Pant', price:900, image:'./img/pant1.jpg', brand:"Adidas", category:"Pants"}, {name:'Nike Pant', price:700, image:'./img/pant8.jpg',  brand:"Nike", category:"Pants"},{name:'Louis Vuitton Men Pant', price:800, image:'./img/pant4.jpg', brand:"Louis Vuitton", category:"Pants",},{name:'Beautiful Men Pant', price:900, image:'./img/pant5.jpg', brand:"Puma", category:"Pants"}, {name:'Random5', price:700, image:'./img/pant9.jpg'},{name:'Fine Pant', price:800, image:'3.png'}],
    allShirtProducts:[{name:'Puma Men Fashion Shirt', price:800, image:'./img/shirt7.jpg', brand:"Puma", category:"Shirts"},{name:'Shirt for Fendi', price:656, image:'./img/shirt6.jpg', brand:"AFendi", category:"Shirts"},{name:'Adidas Shirt', price:770, image:'./img/shirt9.jpg'},{name:'Nike Trendy Shirt', price:900, image:'./img/shirt4.jpg'}, {name:'Gucci Blue Shirt', price:700, image:'./img/shirt7.jpg'},{name:'Random12', price:800, image:'./img/shirt2.jpg'}],
    noOfPantProducts: 0,
    noOfShirtProducts:0,
    filteredResults: [],
    adminToken: [],
    userToken: [],
    currentuserInfo: {
    }
}

export const anterApi = async function(){
    const res = await fetch('https://shopappanter.herokuapp.com/api/products')
    let anterData = await res.json()
    anterData.products.forEach(el => {
        state2.allProducts.unshift({
            brand:el.brand,
            category: el.category,
            inStock: el.countInStock,
            description: el.description,
            name: el.name,
            image:el.image,
            numReviews: el.Reviews,
            price: el.price,
            rating:el.rating,
            reviews:[],
            sellers:{
                sellerInfo:{
                    logo:el.seller.seller.logo,
                    name: el.seller.seller.name,
                }
            }
        })
    })
    const pantProducts = state2.allProducts.filter(el => el.category =="Pants")
    const shirtProducts = state2.allProducts.filter(el => el.category =="Shirts")
    state2.allPantProducts.push(...pantProducts)
    state2.allShirtProducts.push(...shirtProducts)
    // console.log(state2.allProductsCategories)
}

export const userSignUp = async function(){
    const res = await fetch('https://shopappanter.herokuapp.com/api/users/register', {
        method:'POST',
        body: JSON.stringify({
            name: nameRegInput.value,
            email: emailRegInput.value,
            password: passwordRegInput.value,
            phonenumber: Number(phoneRegInput.value)
        }),
         headers:{
             "Content-Type": "application/json; charset = UTF-8"
         }
    })
    const data = await res.json()
    console.log(data)
    
    if (data.message === 'Successfully registered! Please verify your account before you login') {
        // console.log(data.message);
        displayOrRemoveModalAndOverlay();
        modalText.textContent = data.message;
        signUpFormContainer.classList.toggle('hidden');
    }
    else if (nameRegInput.value === '' || emailRegInput.value === '' || passwordRegInput.value === '' || phoneRegInput.value === '') {
        console.log('Please Input a valid name, email, password and/or phone number');
        displayOrRemoveModalAndOverlay();
        modalText.textContent = 'Please Input a valid name, email, password and/or phone number';
    } else {
        displayOrRemoveModalAndOverlay();
        modalText.textContent = 'The email address you have entered is already associated with another account.';
    }
}


export const displaySignUpFormHandler = function() {
    signUpFormContainer.classList.toggle('hidden');
};

export const userLogIn = async function(){    
    const res = await fetch('https://shopappanter.herokuapp.com/api/users/signin', {
    method:'POST',
    body: JSON.stringify({
        email: emailLogInput.value,
        password: passwordLogInput.value,
    }),
     headers:{
         "Content-Type": "application/json; charset = UTF-8"
     }
    })
    const data = await res.json()
    console.log(data);

    //If the users is NOT the Admin
    if (!data.isAdmin) {
        if (data.message === 'Invalid credentials.') {
            displayOrRemoveModalAndOverlay();
            modalText.textContent = data.message;
        } else if (data.message === 'Your account has not been verified') {
            displayOrRemoveModalAndOverlay();
            modalText.textContent = data.message;
        } else if (emailLogInput.value === '' || passwordLogInput.value == '') {
            displayOrRemoveModalAndOverlay();
            modalText.textContent = 'Please Input a valid email and/or password';
        } else {
            displayOrRemoveModalAndOverlay();
            modalText.textContent = `Login Successful! ${data.name}`;
            logInFormContainer.classList.toggle('hidden');
            myAccDiv.classList.toggle('hidden');
            logOutDiv.classList.toggle('hidden');
            signUpDiv.classList.toggle('hidden');
            loginInDiv.classList.toggle('hidden');
            state2.userToken = [];
            state2.userToken.push(data.token);
            state2.currentuserInfo={
                name: data.name,
                email: data.email,
                token: data.token,
                id: data.id
            }
            profileName.textContent = state2.currentuserInfo.name;
            profileEmail.textContent = state2.currentuserInfo.email;
            console.log(state2.userToken);
        }
        //If its the Admin
    } else {
        displayOrRemoveModalAndOverlay();
        modalText.textContent = `Login Successful! Welcome Back, Mr ${data.name}`;
        logInFormContainer.classList.toggle('hidden');
        category.classList.toggle('hidden');
        grid.classList.toggle('hidden');
        adminDashboard.classList.toggle('hidden');
        state2.adminToken = [];
        state2.adminToken.push(data.token);
        console.log(state2.adminToken);
    }
}

export const displayLogInFormHandler = function() {
    logInFormContainer.classList.toggle('hidden');
};

export function payNow(amountPaid){

FlutterwaveCheckout({
    public_key:"FLWPUBK_TEST-3b17a43b6dd3186d1dcc5a2b0f88f5ff-X",
    tx_ref:"nf"+Math.floor((Math.random()*1000000000) + 1),
    amount: amountPaid,
    currency: "NGN",
    customer:{
        name:"hhh",
        email: "phaboolous1@gmail.com",
        phonenumber:+"08035622282"
    },
    callback:function(data){
        console.log(data)
        const reference = data.tx_ref;
        alert("payment successful" + reference)
    },
    customizations: {
        title:"ShopWell Shop",
        description: "Middleout isn't free. Pay the price",
        logo:"https://assets.piedpiper.com/logo.png"
    }
})
}

// payNow()
// console.log(FlutterwaveCheckout)


// function ready(){
//     let query = new URL(window.location).searchParams.get('query')
//     input.value = query
//     inpu. value = query
// }

// export const cartModel = function(e) {
//     const addToCart = e.target.closest('#cart')
//     addToCart.addEventlistener('click', )
//     if(!addToCart) return
// //    return this.renderCart(this.cartObjects)
// return addToCart
// };
const searchFunctions = function(){
    searchType.classList.toggle('hidden')
    const searchInput = searchDiv.querySelector('#searchInput')
    searchInput.value = ''
    const takeSearch = searchDiv.querySelector('#takeSearch')
    searchInput.classList.toggle('hidden')
    takeSearch.classList.toggle('hidden')
    reverseSearch.classList.toggle('hidden')
}

reverseSearch.addEventListener('click', searchFunctions)

const displaySearchUI = function(){
    let htmlDiv = `
        <div class="allImages">
        </div>
        `
        searchResults.innerHTML=''
        searchResults.insertAdjacentHTML('afterbegin', htmlDiv)


           let html = ''
           state2.filteredResults.forEach(el=> {
               html += `
               <div class="loaded">
               <img class="lazy" src=${el.image} alt="">
               <div class="pdescription">
                   <h5> ${el.name}</h5>
                   <p> ${el.price}</p>
               </div>
           </div>
               `
           })

           const eachSearch = searchResults.querySelector('.allImages')
           eachSearch.insertAdjacentHTML('afterbegin', html)
           document.querySelector('.searchResults').classList.toggle('hidden') 
}

export const searchBrand = function(){
    searchFunctions()
    search.addEventListener('click', function(query){
        query=searchInput.value
        if(!query ||query=='') return
        let queryTransform = query.toLowerCase()
        queryTransform = queryTransform[0].toUpperCase() + queryTransform.slice(1).toLowerCase()
        
        let allBrand = function(element){
            return element.brand == `${queryTransform}`
        }
        let filtered = state2.allProducts.filter(allBrand)
        state2.filteredResults = []
        state2.filteredResults.push(...filtered)
        displaySearchUI()    
    })
}

export const searchCategory = function(){
    searchFunctions()
    search.addEventListener('click', function(query){
        query=searchInput.value
        if(!query ||query=='') return
        let queryTransform = query.toLowerCase()
        let queryLength = queryTransform.length
        if(queryTransform[queryLength-1] == 's') queryTransform = queryTransform[0].toUpperCase() + queryTransform.slice(1).toLowerCase()
        if(queryTransform[queryLength-1] !== 's') queryTransform = queryTransform[0].toUpperCase() + queryTransform.slice(1).toLowerCase() + 's'
        
        let allBrand = function(element){
            return element.category == `${queryTransform}`
        }
        let filtered = state2.allProducts.filter(allBrand)
        state2.filteredResults = []
        state2.filteredResults.push(...filtered)
        console.log(state2.filteredResults)
        displaySearchUI()
    })
}
// const postProduct = function() {
//     const res = await fetch('https://shopappanter.herokuapp.com/api/users/register', {
//         method:'POST',
//         body: JSON.stringify({
//             name: nameRegInput.value,
//             email: emailRegInput.value,
//             password: passwordRegInput.value,
//             phonenumber: Number(phoneRegInput.value)
//         }),
//          headers:{
//              "Content-Type": "application/json; charset = UTF-8"
//          }
//     })
//     const data = await res.json()
//     console.log(data)
// };
// const descriptionBtn = document.querySelector('.descriptionBtn');
// descriptionBtn.addEventListener('click', function() {

// })

// let formData = new formData()
// formData.append('imageUpload', imageUpload);
// formData.append('name', name);
// formData.append('price', price);
// formData.append('category1', category1);
// formData.append('description', description);
// formData.append('brand', brand);
// formData.append('rating', rating);
// formData.append('countInStock', countInStock);
// formData.append('numReviews', numReviews);

// export const addProductModel = async function(){ 
//     const res = await fetch('https://shopappanter.herokuapp.com/api/users/products', {
//     method:'POST',
//     body: formData,

//      headers:{
//          "Content-Type": "application/json; charset = UTF-8",
//          "authorization": `Bearer ${state2.adminToken}`
//      }
//     })
//     const dataJson = await res.json()
//     console.log(dataJson);
// }