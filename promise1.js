let promise = new Promise(function (resolve, reject) {
	reject('Geeks For Geeks');
})

promise
	.then(function (successMessage) {
		//success handler function is invoked 
        console.log("Resolve is being printed")
		console.log(successMessage);
	}, function (errorMessage) {
		console.log(errorMessage);
	});
