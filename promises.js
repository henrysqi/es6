// promises define code that is going to be executed later
// 4 states: fulfilled, rejected, pending, settled

// instantly resolved case
var p1 = Promise.resolve("Resolve Me");
p1.then(res => console.log(res));

// promise that executes in 2 seconds
var p2 = new Promise((res, rej) => {
    setTimeout(() => res("Resolve Me 2"), 2000);
});
p2.then(res => console.log(res));

// promise that can be fulfilled or rejected
let randVal = 18;
var p3 = new Promise((res, rej) => {
    if (randVal == 18) {
        res("Good value");
    } else {
        rej("Bad Value");
    }
});
p3.then(res => console.log(res), err => console.log(err));

// should add catch to chain to handle errors
let randVal = 18;
var p4 = new Promise((res, rej) => {
    if (randVal < 18) {
        throw new Error("Cant Vote");
    } else {
        res("Can Vote");
    }
})
p4.then(res => console.log(res)).catch(err => console.log(err))


// http req
function getData(method, url){
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function(){
            if(this.status >= 200 && this.status < 300){
                resolve(xhr.response);
            }else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function(){
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
}

getData('GET', 'https://swapi.co/api/people/').then(function(data){
    console.log(data)
}).catch(function(err){
    console.log(err);
});
