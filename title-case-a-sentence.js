function titleCase(str) {

    var lower = str.toLowerCase().split(" ")
    
    var result = lower.map(function(val){
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase())
    })
    
     return result.join (" ")
    }
    
    titleCase("I'm a little tea pot");