//import Initialize from './Initialize';
//import StepOne from "./StepOne";
//import StepTwo from "./StepTwo";
//import StepThree from "./StepThree";
//import StepFour from "./StepFour";
//import StepFive from "./StepFive";
//import StepSix from "./StepSix";
//import StepSeven from "./StepSeven";
//import KlasseMetode from "./KlasseMetode";
//import Person from "./Person";
import PersonNext from "./PersonNext"


// **  IIFE: Immediately Invoked Function Expression  */

(function () {

    console.log('starting the app now');

    //let init = new Initialize();
    //let so = new StepOne();
     //let st = new StepTwo();
     //let sth = new StepThree();
     //let sfo = new StepFour();
       //let sfi = new StepFive();
       //let ssi = new StepSix();
       //let sss = new StepSeven();

       /*
       let km = new KlasseMetode();
       km.myFunction();
       console.log(km.myReturnFunction());
       */

      //let person  = new Person();
let personnext = new PersonNext('Vermont');
  
document.body.innerHTML = personnext.name;

console.log(personnext.name);

     // console.log(person.data);
      //console.log(person.data.name);
       //console.log(person.data.age);
       //console.log(person.age = 13);

})();