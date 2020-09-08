
	// An array of keys 
	var keys = [1, 2, 3]; 
	
	// An array of values 
	var values = ["GeeksforGeeks", "Computer", "Science"]; 
	
	// Object created 
	var obj = {}; 
	
	// Using loop to insert key 
	// value in Object 
	for(var i = 0; i < keys.length; i++){ 
		obj[keys[i]] = values[i]; 
	} 
	
	// Printing object 
	for (var key of Object.keys(obj)) { 
		console.log(key + " => " + obj[key] + "</br>") 
	} 
		 
