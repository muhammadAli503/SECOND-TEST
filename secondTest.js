
  // Question 1
  
    const Input1= 'johndoe';
    const Input2= '08061972';  
  
    for (var i=0, sub = ''; i < Input1.length || i < Input2.length; i++){
      sub += Input1.charAt(i);
      sub += Input2.charAt(i);
      console.log(`${sub}`);
    }
  
    

  // Question 2
    var Input=  '3-o'; 
  
    for (var i=1, sub = ''; i <= parseInt(Input); i++ ){
      if(i% 2 !== 0 && Input.replace(/[^a-z]/gi, '') == 'o') {
        if(i>1){
        sub += '|'+i;
        console.log(sub);
        }
        else {
          sub += i;
          console.log(sub);
        }
  
  
  
      }
      else if(i% 2 === 0 && Input.replace(/[^a-z]/gi, '') == 'e') {
        if(i>3){
          sub += '|'+i;
          console.log(sub);
          }
          else {
            sub += i;
            console.log(sub);
          }
      }
      else if (parseInt(Input) == 1)
      console.log(1);
    }
    


// Question 3
  var str = 'banana';
  var a = str.split("");
  var obj = {};
  a.forEach(function (s) {
    var count = 0;
    for (var j = 0; j < a.length; j++) {
      if (s == a[j]) {
        count += 1;
      }
      obj[s] = count;
    }
  });

  var objToArry = [];
  for (var index in obj) {
    objToArry.push([index, obj[index]]);
  }

  var sortedArray = [];
  sortedArray = objToArry.sort();


  for (var i = 0, j = sortedArray[i].length / 2; i < sortedArray[i].length / 2; i++ , j++) {
    for (var z = 0; z < sortedArray.length; z++) {
      console.log(`${sortedArray[z][i]} - ${sortedArray[z][j]}`);
    }
  }

