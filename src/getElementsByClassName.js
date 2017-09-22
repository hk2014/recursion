// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
//You should use document.body, element.childNodes, and element.classList



var getElementsByClassName = function(className){
	// your code here

	var childNode = function(el){
	  var array = [];
	  if(el.classList.contains(className)){
	  	array = [el];
	  }
	  else{array = [];}
	  
	  return _.reduce(el.children, function(array, child){ return array.concat(childNode(child));},array);
	};
	return childNode(document.body);
};


// $('body').addClass('targetClassName');
// htmlStrings.forEach(function(htmlString) {
//   var $rootElement = $(htmlString);
//   $('body').append($rootElement);

//   var result = getElementsByClassName('targetClassName');
//   var expectedNodeList = document.getElementsByClassName('targetClassName');
//   var expectedArray = Array.prototype.slice.apply(expectedNodeList);
//   var equality = _.isEqual(result, expectedArray); // why can't we use `===` here?
//   expect(equality).to.equal(true);

//   $rootElement.remove();
// });
// $('body').removeClass('targetClassName');