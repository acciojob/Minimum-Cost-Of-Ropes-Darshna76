function calculateMinCost() {
  //your code 
	var inputData=document.querySelector("#rope-lengths").value;
	var arr=inputData.split(",");
	for(var i=0;i<arr.length;i++){
		arr[i]=Number(arr[i]);
	}
	// alert(typeof arr[1])
	var cost=0;
	arr.sort(function(a,b) { return a-b; })
	while(arr.length>1){
		var newRope=arr[0]+arr[1];
		arr.splice(0,2);
		arr.push(newRope);
		arr.sort(function (a,b) { return a-b; })
	}
	alert(arr);
  
  
  
}  
