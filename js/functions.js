			function Calculate(num){
				window.document.Form.textbox.value = window.document.Form.textbox.value + num;
			}

			function Evaluate() {
				var prevent = document.Form.textbox.value;
				if (prevent) {
					window.document.Form.textbox.value = eval(window.document.Form.textbox.value).toFixed(2);
				}
				if (prevent=="") {
					window.alert("The field is empty.");
				}
				
			}
			function C() {
				document.Form.textbox.value = "";
			}
			function Back(){
				var b = window.document.Form.textbox.value;
				window.document.Form.textbox.value = b.substring(0,b.length-1);
			}
			function Scientific() {
				var sc = window.document.getElementById("sc");

				if (sc.style.visibility="hidden") {
					sc.style.visibility="visible";
				} else {
					sc.style.visibility="hidden";
				}
			}
			function Standard() {
				var sc = window.document.getElementById("sc");

				if (sc.style.visibility="visible") {
					sc.style.visibility="hidden";
				} else {
					sc.style.visibility="visible";
				}
			}

			function Sine() {
				var x = window.document.Form.textbox;
				var sin = window.document.getElementById("buttonSin");

				x.value= Math.sin(x.value).toFixed(2);
			}
			function Cosinus() {
				var x = window.document.Form.textbox;
				var sin = window.document.getElementById("buttonSin");

				x.value= Math.sin(x.value).toFixed(2);
			}
			function Tangent() {
				var x = window.document.Form.textbox;
				var sin = window.document.getElementById("buttonSin");

				x.value= Math.sin(x.value).toFixed(2);
			}