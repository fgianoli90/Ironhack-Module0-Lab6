function XO (str){
var sumX = 0
var sumO = 0
for (i=0;i<str.length;i++){
if (str[i]==="o" || str[i]==="O"){
sumO = sumO+1
}
if (str[i]==="x" || str[i]==="X"){
sumX = sumX + 1
}
}
if (sumO === 0 && sumX ===0){
return true
} else if (sumO === sumX) {
return true
} else {
return false
}
}

