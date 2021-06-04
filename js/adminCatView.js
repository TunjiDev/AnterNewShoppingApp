class adminCatView {
viewProductsAdmin = document.querySelector('#totalProducts');
    adminProductDisplay = document.querySelector('#admin--display')
    categoriesDisplay = document.getElementById('categories--admin')
    categoriesDisplay2 = this.categoriesDisplay.querySelector('.categoryDisplay')
    addProductBtn = document.querySelector("#addProductBtn")
    addingNow = document.querySelector('#addingNow')
    addingProductAdmin = document.querySelector('#addingProductAdmin')
    addPrice = document.getElementById('price')
    addName = document.getElementById('name')
    addCategory = document.getElementById('category1')
    addBrand = document.getElementById('brand1')
    addDescription = document.getElementById('description')
    addRating = document.getElementById('rating')
    addCount = document.getElementById('countInStock')
    addReviews=document.getElementById('numReviews')
    addProductsObject = {}
    editProductsObject ={}
    allEditBtnsArr = []

    //Editing Products
    editPrice = document.getElementById('price--edit')
    editName = document.getElementById('name--edit')
    editCategory = document.getElementById('category1--edit')
    editBrand = document.getElementById('brand1--edit')
    editDescription = document.getElementById('description--edit')
    editCount = document.getElementById('countInStock--edit')
    saveChanges;

    //Customers
    customersAdmin = document.querySelector('#customers')

    //Statistics
    statisticsAdmin = document.querySelector("#statistics")

    //Orders
    totalOrdersAdmin = document.querySelector("#totalOrders")

    //Sellers
    sellersAdmin = document.querySelector("#sellers")

    
    categoriesHandler(handler){
        console.log(this.viewProductsAdmin)
        this.viewProductsAdmin.addEventListener('click', function(){
            handler()
           

       })
       
    //    handler)
    }
   
    categoriesView(data, noOfCategories){
        console.log(this.addProductBtn);
        this.adminProductDisplay.classList.toggle('hidden')
        this.categoriesDisplay2.innerHTML=''
        let htmlCategory
        let htmlProducts
        noOfCategories.forEach(categoryName=> {
            htmlCategory =`
            <div id='category--each'>
            <h3>${categoryName}</h3>
            </div>
            `
            
            this.categoriesDisplay2.insertAdjacentHTML('afterbegin', htmlCategory)
            data.filter(el=>el.category==categoryName).forEach((el,i)=> {
                const unique = 1
                htmlProducts = `
                <ul>
                <li class="listProducts">
                <div>
                <h5>${el.name}</h5>
                <p>${el.price}</p>
                <button id="edit--admin">EDIT</button>
                <button id="delete--admin">DELETE</button>
               
                </div>
                </li>
                </ul>
                `
                const eachCategory = this.categoriesDisplay2.querySelector('#category--each')
                eachCategory.insertAdjacentHTML('beforeend', htmlProducts)
            })
        })
            const eachCategory = this.categoriesDisplay.querySelector('#category--each')
            const allEditBtns = eachCategory.querySelectorAll('#edit--admin')
            this.allEditBtnsArr=[]
            this.allEditBtnsArr.push(...allEditBtns)
    }

    editProductAdmin(handler){
        this.allEditBtnsArr.forEach(el => el.addEventListener('click', function(){
            console.log('edit')
            handler()
        }))
    }

    editingProductForm(handler) {
        const eachCategory = this.categoriesDisplay.querySelector('.editingAdmin')
        // const editingDiv = eachCategory.querySelector('.editingAdmin')
        console.log(eachCategory)
        eachCategory.classList.toggle('hidden')
        eachCategory.classList.toggle('increaseHeightEdit')
        this.saveChanges = eachCategory.querySelector('#saveChanges')
        let descriptionEdit = eachCategory.querySelector('#description1Input')
        let nameEdit = eachCategory.querySelector('#name--edit')
        let priceEdit = eachCategory.querySelector('#price--edit')
        let categoryEdit = eachCategory.querySelector('#category1--edit')
        let brandEdit= eachCategory.querySelector('#brand1--edit')
        let countEdit = eachCategory.querySelector('#countInStock--edit')
        console.log(brandEdit)
        console.log(descriptionEdit)

        this.saveChanges.addEventListener('click', function(){
            console.log('saved')
            if(
                nameEdit.value == '' || 
                priceEdit.value == '' || 
                categoryEdit.value == '' ||
                brandEdit.value == '' ||
                descriptionEdit.value == '' ||
                countEdit.value == '' 
            ) {
                console.log('supposed to work')
                console.log(descriptionEdit.value)
            }
        
        else {
            const editProductsObject = {
                name : nameEdit.value,
                price : priceEdit.value,
                category :categoryEdit.value,
                brand: brandEdit.value,
                // description: document.getElementById('description--edit').value,
                count: countEdit.value 
            }
            handler(editProductsObject)
            }
            console.log('saved1')
        
    })
        
    }

    // savingNow(handler) {

    //     this.saveChanges.addEventListener('click', function(){
    //         console.log('saved')
    //     })
    // }
    addingProductsVisibility() {
        console.log(document.querySelector('#addingProductAdmin'))
        this.categoriesDisplay2.classList.toggle('increaseHeight')
        this.addingProductAdmin.classList.toggle('hidden')
    }

     addProductBtnHandler(handler){
        this.addProductBtn.addEventListener('click', function(){
console.log('hii')
            handler()
        })
    }
    
    addingNowHandler(handler) {
        this.addingNow.addEventListener("click",handler)
           
        
    }
    addingProductsRequest() {
        if(
            this.addPrice.value == '' || 
            this.addName.value == '' || 
            this.addCategory.value == '' ||
            this.addBrand.value == '' ||
            this.addDescription.value == '' || 
            this.addRating.value == '' ||
            this.addCount.value == '' ||
            this.addReviews.value == '' 
        ) {
            return
        }
        else {
            this.addProductsObject = {
                name :this.addName.value ,
                price : this.addPrice.value,
                brand: this.addBrand.value,
                category: this.addCategory.value,
                description:this.addDescription.value,
                rating: this.addRating.value,
                countInStock : this.addCount.value,
                numReviews:this.addReviews.value
            }
            
        }
    }

    restAdminHandler(handlercustomersAdmin, handlerstatisticsAdmin, handlertotalOrdersAdmin,handlersellersAdmin) {
        this.customersAdmin.addEventListener('click', handlercustomersAdmin)
        this.statisticsAdmin.addEventListener('click', handlerstatisticsAdmin)
        this.totalOrdersAdmin.addEventListener('click', handlertotalOrdersAdmin)
        this.sellersAdmin.addEventListener('click', handlersellersAdmin)

    }
    customersPanel(){

    }
    statisticsPanel(){

    }
    totalOrdersPanel(){

    }
    sellersPanel(){

    }

}

export default new adminCatView()

// class adminCatView{
//     viewProductsAdmin= document.querySelector('#totalProducts');
//     category = document.querySelector('#products')
    
//     categoriesHandler(handler){
//        this.viewProductsAdmin.addEventListener('click',handler)
//     }

//     categoriesView(data, noOfCategories){
//         this.category.innerHTML=''
//         let htmlCategory
//         let htmlProducts
//         noOfCategories.forEach(categoryName=> {
//             htmlCategory =`
//             <div id='category--each'>
//             <h3>${categoryName}</h3>
//             </div>
//             `
            
//             this.category.insertAdjacentHTML('afterbegin', htmlCategory)
//             data.filter(el=>el.category==categoryName).forEach((el,i)=> {
                
//                 htmlProducts = `
//                 <ul>
//                 <li>
//                 <div>
//                 <div> <img src="${el.image}" alt=""></div>
//                 <h5>${el.name}</h5>
//                 <p>${el.price}</p>
//                 <button id="edit--admin">EDIT</button>
//                 <button id="delete--admin">DELETE</button>
//                 </div>
//                 </li>
//                 </ul>
//                 `
//                 const eachCategory = this.category.querySelector('#category--each')
//                 eachCategory.insertAdjacentHTML('beforeend', htmlProducts)
//             })
//         })
//     }

// }

// export default new adminCatView() 