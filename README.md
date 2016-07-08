## Installation
npm install savefilefromurl

## Details
* It will return a promise. On success of the promise, the file will be saved.
* It checks the mime type of the file from the request headers, and according to the mime type, will store the file with the corresponding extension. 
* For example, if you want to download any image from google books, where in you dont know the extension of the image(png or jpeg), you can just pass the url, and it will save the file


## Usage
It accepts url of the file, folder location to be saved, and the filename
```
save.saveFile(url,folder,filename)
```
It will return a promise

## Example

```
var save = require('savefilefromurl');
var Promise = require('bluebird');

//url for a book image
var url = "https://books.google.co.in/books/content?id=JV6rpwAACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73LVBx1-f3abS0wLnz9yq9ts3enSCGWjYI3EVk2WTa378RVBkRbeviAGmKaG28SZcR59DbQDllEf9Kd00OoE3IlvxNreqMgNK-Ywl5qrCcTCGCAzVnM0TGB9WHvM6fJTV3KHGa-";

var promise = save.saveFile(url,"folder","small")
Promise.all(promise).then(function(success){
  ...
},function(error){
  ...
})
```

