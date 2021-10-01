//express makes it so easy to create web server
const path = require('path')  //path is core node module
const express = require('express')  //generatig a new instance of an application
const hbs = require('hbs')


const app = express()  //express function does not take any argument 

//definin path
//.join adds concatenate all the string used for path
const static=path.join(__dirname,'../static')
//setting new path for template engine 
const views = path.join(__dirname,'../templates/views')
const partials =  path.join(__dirname,'../templates/partials')

//setting up static directory
app.use(express.static(static))   
//.static takes the path to the folder we want to serve
//.use  gets executed every time no matter what URL's been hit. it act as a middlewear
//Middleware
//https://developer.okta.com/blog/2018/09/13/build-and-understand-express-middleware-through-examples


//Handlebars
app.set('view engine','hbs')
//default location for rendering template is 'views' but we can customize it.  
app.set('views', views) //it sets the new path for templlate engine
//defining partials path. partials are the templates files which can be used in morethan one webpage 
hbs.registerPartials(partials)
//Assigns setting name to value. You may store any value that you
//want, but certain names can be used to configure the behavior of 
//the server. These special names are listed in the app settings table.
//https://expressjs.com/en/4x/api.html#app.set


app.get('/home',(req,res)=>{
    res.send('Home page..!')
})
app.get('/obj',(req,res)=>{
    res.send({
        name:'Ahmed Raza',
        contact: 3112183869
    })
})
app.get('',(req,res)=>{
    res.render('index',{
        title: 'index',
        name: 'ahmed raza',
        age:'21'
    })  // We have configured express to use the view engine hbs. So with render we can render one of our handlebars templates.
})

app.get('/contact',(req,res)=>{
    res.render('contact',{
        title:'contact',
        name:'hamza ahmed',
        age:'22'
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'contact',
        name:'hamza ahmed',
        age:'22'
    })
})

//it can be specific
app.get('/contact/help',(req,res)=>{
    res.send('Not found')
   })


//except all
app.get('*',(req,res)=>{
    res.render('404')
})
//1st arg
//FOR EXAMPLE: we own the url
//raza.com
//the we can have different pages like,
//raza.com/about
//raza.com/home
//raza.com/help
//2nd arg
//this callback tell what server will response  at the request give by user
//now this callback has two argument
// The first is an object containing information about the incoming request to the server. This is commonly called req, 
//which is short for request
//The other argument is the response. So this contains a bunch of methods allowing us to customize what we are going to send back to the
//requester. This is commonly called res



app.listen(8000,()=>{
    console.log('server is up on port 000')
})  //it starts up the server


//The res.send() function basically sends the HTTP response. The body parameter can be a String or a Buffer 
// object or an object or an Array.
// Syntax: 
// res.send( [body] )

// The res.render() function is used to render a view and sends the rendered HTML string to the client. 
// Syntax: 
// res.render(view [, locals] [, callback])
// Locals: It is basically an object whose properties define local variables for the view.
// Callback It is a callback function.

//template engine 
    //Template engine helps us to create an HTML template with minimal code. Also, it injects data into HTML template at runtime  and produce the final HTML file to sent to the client.
    //Some popular template engines that work with Express are Pug, Mustache, and EJS. The Express application generator uses Jade as its default, but it also supports several others.
    //Improves developer's productivity.
    // Improves readability and maintainability.
    // Faster performance.
    // Maximizes client side processing.
    // Single template for multiple pages.
    // Templates can be accessed from CDN (Content Delivery Network).
//To render template files, set the following application setting properties
//---1---install the corresponding template engine npm package
//--2--After the view engine is set, you don’t have to specify the 
//engine or load the template engine module in your app; Express 
//loads the module internally: app.set('view engine', 'pug')
//---3---Create a template file of extension of installed template 
//engine in the views directory
//---4---Then create a route to render the index.pug file.

//some template engines that we discused in this video
//--1-- handlebars
//Handlebars is going to allow us to do two very important things.
//First up, as mentioned it's going to allow us to render dynamic 
//documents as supposed to static ones, 
//and the other thing that's going to allow us to do is to easily 
//create code that we can reuse across pages
//this is a low level library that implements handlebars in JavaScript

//--2-- hbs
// integrates handlebars in to express
//hbs uses handlebars behind the scenes,