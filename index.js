var fs = require('fs'),
    request = require('request'),
    Promise = require('bluebird'),
    extension = require('./extension.json'),
    _ = require('lodash');

function normalisePath(path){
    if(_.endsWith(path,'/')){
        path = path.slice(0,-1);
    }
    return path;
}

exports.saveFile = function(url,path,fileName){
    path = normalisePath(path);
    return new Promise(function(resolve,reject){
        request.get({
        "uri":url,
        "encoding": null
        },function(error,response,body){
            
            var mimeType = response.headers['content-type'];
            var ext = "";
            _.forEach(extension,function(obj){
                if(obj.mime === mimeType){
                    ext = obj.extension;
                }
            })
            
            if (!fs.existsSync(path)){
                fs.mkdirSync(path);
            }
            var data =  new Buffer(body).toString('base64');
            
            fs.writeFile(path + "/" + fileName +'.' + ext,data,'base64',function(err){
                if(err){
                    reject(err);
                }
                var obj = {
                    "size":response.headers["content-length"],
                    "filename":fileName + '.' + ext,
                    "path":path + "/" + fileName +'.' + ext
                }
                resolve(obj);  
            })
        })
    })
} 

