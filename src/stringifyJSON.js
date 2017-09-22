// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if( typeof obj === 'boolean'|| typeof obj === 'number')
  	return obj.toString();
  if( typeof obj === 'string')
  	return '"'+obj+'"';
  if( obj === undefined || obj === 'function')
  	return undefined;
  if( obj === null)
  	return 'null';
  if(typeof obj === 'object')

  if(Array.isArray(obj)){
  	var arr = [];
  	obj.forEach(function(el){
  	return arr.push(stringifyJSON(el));
  	}); 
  	return '[' + arr.join(',') + ']'; 	
  }

  if(typeof obj === 'object') {
  	var res = [];
  	for (var el in obj){
  		if( typeof obj[el] !== 'function' && obj[el] !== undefined  )
  			res.push(stringifyJSON(el) + ':' + stringifyJSON(obj[el])); 
  	} 
	return '{' + res.join(',') + '}';  
   }
};




