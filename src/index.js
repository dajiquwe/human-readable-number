module.exports = function toReadable (number) {
    let less20= ['', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine', ' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen'];
    let less100= ['', '', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety'];
    let hundreds = ' hundred';
    let result = '';
    let numStr = number.toString();

    if (number == 0) {
        return 'zero';
    }
    
    if ( numStr.length == 3 ) 
    {
      result  = less20[parseInt(Math.trunc(number/100))] + hundreds;
      number = number % 100;
      numStr = number.toString();
    }
   
   if ( number < 20 )  
    {
      result = result + less20[number] ;
    }
   else 
    {  
      result = result + less100[parseInt(Math.trunc(number/10))];
      result = result + less20[parseInt(number%10)];  
    }
   
   return result;
}
