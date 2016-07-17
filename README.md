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

1. If you want to store the profile pic from facebook profile api to your server, you can use this. Lets take Mark Zuckerberg profile pic. 
  
  ```
var save = require('savefilefromurl');
var Promise = require('bluebird');

//url for a mark photo
var url = "https://scontent-sin1-1.xx.fbcdn.net/v/t1.0-9/12208495_10102454385528521_4749095086285673716_n.jpg?oh=5828bbf762179e142d2bcb944c304d48&oe=57EA5B5C";
var path = "/var/www/profile/";
var filename = "pic";
var promise = save.saveFile(url,path,filename)
Promise.all(promise).then(function(success){
  ...
  //YOU CAN BROWSE THE JPEG FILE OF MARK IN /var/www/profile/picture.jpg
  
},function(error){
  ...
})
```  
2. Similarly you can save profile photo from google + or google books

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

