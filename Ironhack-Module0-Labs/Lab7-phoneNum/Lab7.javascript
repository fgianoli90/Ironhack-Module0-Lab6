function createPhoneNumber(numbers){
  let counter=0
  let phoneNumber="("
  while (counter < numbers.length) {
    if (counter<3){
      phoneNumber += numbers[counter];
    } else if (counter===3){
      phoneNumber += `) ${numbers[counter]}`
    } else if (counter<6){
      phoneNumber += numbers[counter];
    } else if (counter===6){
      phoneNumber += `-${numbers[counter]}` 
    } else {
         phoneNumber += numbers[counter];
    }
    counter++;
  }
  return phoneNumber
  }