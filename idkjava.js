let	l = document.getElementById('myUL').getElementsByTagName('li');

// list items:
for(let i = 0; i<l.length; i++)
	document.getElementById('list').innerHTML += l.item(i).innerHTML;