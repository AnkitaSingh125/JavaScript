//Immediately Invoked Function Expressions (IIFE)

(function chai(){
      console.log(`DB CONNECTED`);
})(); //first()- defines function second() - invokes function

( function aurcode() {
    //named IIFE
    console.log(`DB CONNECTED TWO`);
} )()

( (name) => {
    //UNNAMED IIFE
    console.log(`DB CONNECTED THREE ${name}`);
})('hitesh')