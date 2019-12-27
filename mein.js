var point = {
	A: "a",
	B: "b",
	C: "c"
};

var init = {
	point: point,
	cont: 1
};

function createFile(test) {
	var pointElem = "";
	pointElem = transferOfPropertiesIntoString(point);
	console.log("pointList: " + pointElem);
	console.log("init");
	var _test = test;
	_test = transferOfPropertiesIntoString(init);
	console.log("FSO.oldPoint: " + _test);
	var FSO = Object.create(init);
	FSO = {
		newPoint: "XXX"
	}; 	

	console.log("FSO.newPoint: " + FSO.newPoint);
}

function transferOfPropertiesIntoString(obj, key_obj = false) {
	var list = "";
	for (key in obj) {		
		if(typeof obj[key] === 'object' && obj[key] !== null) {
			list += transferOfPropertiesIntoString(obj[key], true);
		} else {		
			list += obj[key] + " ";
		}  
		if (key_obj === true) console.log("key is obj: " + list)
	}

	return list;
}

//переустановить xampp, запустить через Apache
//работа с файлами через фронтенд
