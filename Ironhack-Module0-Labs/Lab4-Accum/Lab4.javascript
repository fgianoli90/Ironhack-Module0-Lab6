function accum(s) {
  let result = s[0].toUpperCase()
    for (i=1;i<s.length;i++){
        result += "-"
        result += s[i].toUpperCase()
        let position = i
        let counter = 1
          while (counter <= position){
             result += s[position].toLowerCase();
             counter += 1;
          }  
    }
  return result
}