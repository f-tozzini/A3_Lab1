(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework
   var images = document.querySelectorAll('.data-ref'),
       models = document.querySelector('.modelName'),
       prices = document.querySelector('.priceInfo'),
       details = document.querySelector('.modelDetails');


  function changeElements(){
    console.log("LALALA");
    let objectIndex = carData[this.id];
    prices.textContent = objectIndex.price;
    details.textContent = objectIndex.text;
    models.textContent = objectIndex.headline;

    for(let i=0; i<images.length; i++) {
      images[i].classList.add("nonActive");
    }
    this.classList.remove("nonActive");

    }

  images.forEach(function(image,index){
      image.addEventListener('click', changeElements, false);
    });

  changeElements.call(document.querySelector('#F55'));

})();
