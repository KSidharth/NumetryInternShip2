let promise = new Promise(function (resolve, reject) {
	const x = "Kodhati";
	const y = "Kodhati"
	if (x === y) {
		resolve();
	} else {
		reject();
	}
});

promise.
	then(function () {
		console.log('Welcome');
	}).
	catch(function () {
		console.log('Close');
	});
