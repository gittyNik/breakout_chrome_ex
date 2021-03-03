document.addEventListener("DOMContentLoaded", function () {
	var clickButton = document.getElementById("click");
	clickButton.addEventListener("click", function () {
		// alert("Button was clicked")
		let msg = document.getElementById('msg');
		let val = msg.value;
		msg.value = '';
		// // alert(val);
		chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
			chrome.tabs.sendMessage(tabs[0].id, val, function(res) {
				alert(`Response cb: ${chrome.runtime.lastError}`);
			});
		})

	})
})