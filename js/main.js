(function () {
  // start with retrieving the elements from the page, and then adding event handling. then write the logic. refer to the seasons example / homework


   var images = document.querySelectorAll('.data-ref');
      const httpRequest = new XMLHttpRequest();

      function getCarData() {
      const url = './includes/functions.php?carModel=' + this.id;
      // the fetch APO uses neu JS promise APIs

      fetch(url) //do an ajax call with fetch
        .then((resp)=> resp.json()) //convert to json
        .then((data)=> { processResult(data); }) // call the process function
        .catch(function(error) {
          //catch any error and report back to console
        console.log(error);
        }) ;

          // function getCarData() {
          //         //make an AJAX call to the DB; handle errors first
          //         if (!httpRequest) {
          //           alert('giving up... your browser sucks');
          //           return false;
          //       }
          //
          //       httpRequest.onreadystatechange = processRequest;
          //       httpRequest.open('GET', './includes/functions.php?carModel=' + this.id);
          //       httpRequest.send();
          //     }


    }

    // function processRequest() {
    //   let reqIndicator = document.querySelector('.request-state');
    //   reqIndicator.textContent = httpRequest.readyState;
    //     //debugger
    //   if (httpRequest.readyState === XMLHttpRequest.DONE) {
    //     if (httpRequest.status === 200) { // 200 means everything is awesome
    //       //debugger;
    //       let data = JSON.parse(httpRequest.responseText);
    //
    //       processResult(data);
    //     } else {
    //       alert('There was a problem with the request.');
    //     }
    //   }
    // }

    function processResult (data)  {
      const {modelName,pricing, modelDetails} = data;

      let models = document.querySelector('.modelName').textContent = modelName;
      let prices = document.querySelector('.priceInfo').textContent = pricing;
      let details = document.querySelector('.modelDetails').textContent = modelDetails;

      images.forEach (function(car,index) {
        car.classList.add('nonActive')
      });
      //this is a template string constructor - look it up
      document.querySelector(`#${data.model}`).classList.remove('nonActive');
    }

      images.forEach(function(image,index){
        image.addEventListener('click', getCarData, false);
      });

  // function changeElements(){
  //   console.log("LALALA");
  //   let objectIndex = carData[this.id];
  //   prices.textContent = objectIndex.price;
  //   details.textContent = objectIndex.text;
  //   models.textContent = objectIndex.headline;
  //
  //   for(let i=0; i<images.length; i++) {
  //     images[i].classList.add("nonActive");
  //   }
  //   this.classList.remove("nonActive");
  //   }
  //
   getCarData.call(document.querySelector('#F55'));

})();
