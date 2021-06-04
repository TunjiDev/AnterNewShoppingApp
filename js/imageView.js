class ImageView {
    _images = document.querySelectorAll('.allImages')
    _imagesPantDiv = document.querySelector('#allImages--pants')
    _imagesShirtDiv = document.querySelector('#allImages--shirts')
    _images=[...this._images]
    _seeMorePants = document.querySelector('#seeMorePants')
    _seeMoreShirts = document.querySelector('#seeMoreShirts')
    _onlyFourPants=[]
    _onlyFourShirts=[];
    _newMarkup;
    _allLazy;
    _obsOptions
    _dataImages=[]
    data
    _dataNew
    start = 0
    end = 4
    count = 0
    numberClick;
    // newImages = [];
    allPantsPics =[]
    allShirtsPics=[]
    allPicsArr=[]
    newPants=[]
    newShirts=[]
    // noOfPants
    noOfShirts
    noOfPants
    shirtImages
    pantImages
    
    

   renderDetails(dataPants, dataShirts){
    this.allPantsPics=[]
    this.allShirtsPics=[]
    dataPants.forEach(data => {
        this.allPantsPics.push(data.image)
        // console.log(data.image);
    })
    
    const pantImages = [...this._imagesPantDiv.querySelectorAll('img')]
    pantImages.forEach((img,i) => {
        img[i] = this.allPantsPics[i]
        img.src =`${this.allPantsPics[i]}`
    })
    this.pantImages = pantImages
    // setTimeout(function(){
    //     pantImages.forEach((img,i) => {
    //         console.log(this.allPantsPics)
    //                     img.src =`${this.allPantsPics[i]}`
    //         setTimeout(() => {
    //             img.classList.add('removeblur')
    //         }, 2000);
    //     }
    // , 1000);
    //        })

    const H2Pants = [...this._imagesPantDiv.getElementsByTagName('h2')]
    H2Pants.forEach((h2,i)=>{
        h2.textContent=''
        h2.textContent = dataPants[i].name
    })

    const spanPants = [...this._imagesPantDiv.getElementsByTagName('span')]
    spanPants.forEach((span,i)=>{
        span.textContent=''
        span.textContent = dataPants[i].price
    })

    dataShirts.forEach(data => this.allShirtsPics.push(data.image))
    const shirtImages = [...this._imagesShirtDiv.querySelectorAll('img')]
    shirtImages.forEach((img,i) => {
        img[i] = this.allShirtsPics[i]
        img.src =`${this.allShirtsPics[i]}`
    })

    this.shirtImages = shirtImages
        // setTimeout(function(){
        //     shirtImages.forEach((img,i) => {
        //                     img.src =`${this.allShirtsPics[i]}`
        //         setTimeout(() => {
        //             img.classList.add('removeblur')
        //         }, 2000);
        //     }
        // , 1000);
        //        })


    const PShirts = [...this._imagesShirtDiv.getElementsByTagName('h2')]
    PShirts.forEach((p,i)=>{
        p.textContent=''
        p.textContent = dataShirts[i].name
    })     
    
    const h5Shirts = [...this._imagesShirtDiv.getElementsByTagName('span')]
    h5Shirts.forEach((h5,i)=>{
        h5.textContent=''
        h5.textContent = dataShirts[i].price
    })
   }
   
   seeMorePants(handler){
       this._seeMorePants.addEventListener('click', handler)
   }
   seeMoreShirts(handler){
    this._seeMoreShirts.addEventListener('click', handler)
}

   renderMarkupPants(){
       let containerHeight = getComputedStyle(this._imagesPantDiv).height;
       console.log(containerHeight)
       if(containerHeight == '1470px') return
       if(containerHeight=='1170px') this._imagesPantDiv.style.height = `${(parseFloat(containerHeight) + 300)}px`
       if(containerHeight =='590px') this._imagesPantDiv.style.height = `${(parseFloat(containerHeight) + 580)}px`
      console.log(this._imagesPantDiv.style.height)
      setTimeout(function(){
        this.pantImages.forEach((img) => {
                        img.classList.add('lazy')
            setTimeout(() => {
                img.classList.remove('lazy')
            }, 2000);
        }
    , 1000);
           })
}
renderMarkupShirts(){
    let containerHeight = getComputedStyle(this._imagesShirtDiv).height;
    console.log(containerHeight)
    if(containerHeight == '1470px') return
    if(containerHeight=='1170px') this._imagesShirtDiv.style.height = `${(parseFloat(containerHeight) + 300)}px`
    if(containerHeight =='590px') this._imagesShirtDiv.style.height = `${(parseFloat(containerHeight) + 580)}px`
    setTimeout(function(){
            this.shirtImages.forEach((img) => {
                            img.classList.add('lazy')
                setTimeout(() => {
                    img.classList.remove('lazy')
                }, 5000);
            }
        , 1000);
               })
   
}

 _lazyLoading (){

 }


}
export default new ImageView()