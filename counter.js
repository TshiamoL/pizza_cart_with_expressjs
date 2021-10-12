module.exports = function Counter()  {

    let counter = 0;

    function increase(){
      counter++;
    }

    function decrease(){
        counter--;
      }
 
      function value() {
          return counter
      }
    return {
        increase,
        decrease,
        value
    }
}

