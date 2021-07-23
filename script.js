function inArray(array1,array2){
    let resultArr = []
    array2.forEach(element => {
        array1.forEach(x =>{
           if(element.includes(x)){
              resultArr.includes(x) ? null : resultArr.push(x);
           }
        })
        
    });
    return resultArr.sort();

  }

  console.log(inArray(["xyz", "live", "strong"] ,["lively", "alive", "harp", "sharp", "armstrong"]))