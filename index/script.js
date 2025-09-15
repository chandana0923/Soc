console.log("==hour 1:JSON basics==");

let books={
    "title":["book1","book2","book3"],
    "author":["author1","author2","author3"],
    "price": [200,300,400]
};




//object --> JSON string

let jsonstring=JSON.stringify(books);
console.log(jsonstring);

//JSON string --> object

let parsedObj=JSON.parse(jsonstring);
console.log("parsed object",parsedObj);

console.log("==hour 2:AJAX with fetch==");

// fetch sample JSON from API

fetch('https://jsonplaceholder.typicode.com/posts')
   .then(response => response.json())
   .then(data => console.log("fetched data:",data))
      

   .catch(error => console.error('Error:', error));

//fetch all users and show in console+page

fetch("https://jsonplaceholder.typicode.com/users")
.then(response=>response.json())
.then(users=>{
    let output="<h3>user list</h3><ul>";
    users.forEach(user=>{
        output+=`<li>${user.name} (${user.email})</li>`;
    });
    output+="</ul>";
    document.body.innerHTML+=output;
})


//new api


url= "https://newsapi.org/v2/everything?q=tesla&from=2023-11-01&sortBy=publishedAt&apiKey=a5f3b8f4b4c74f2e8f4d6e3c4e8f4d6e";

fetch(url)
.then(response=>response.json())
.then(newsdata=>{
    console.log("news data:",newsdata);
    let output="<h3>news list</h3><ul>";
    newsdata.articles.forEach(article=>{
        output+=`<li>${article.title} (${article.publishedAt})</li>`;
    });
    output+="</ul>";
    document.body.innerHTML+=output;
}
)
.catch(error=>console.error('error:',error));
