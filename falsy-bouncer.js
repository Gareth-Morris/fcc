function bouncer(arr) {
  
    var newArr = []
    
      for (let i=0; i < arr.length; i++){
        if (arr[i]){
          newArr.push(arr[i])
        }
      }
    return newArr  
    }
    
    bouncer([7, "ate", "", false, 9]);