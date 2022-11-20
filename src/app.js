// From line 2-8 we initialising the techniques that we have used in this project.
// As in this project we have used express and hbs so in order to get output using them we have written this code.
const { response } = require("express");
const express = require("express");
const hbs=require("hbs");
const path = require("path");
const static_path = path.join(__dirname,"../public")
const template_path=path.join(__dirname,"../templates/views")
const partials_path=path.join(__dirname,"../templates/partials")
    // From line 9-17 we are giving the paths of the files that we have made in this project.
    const app = express();
    app.use(express.static(static_path));
    app.use(express.static(template_path));      //I am giving the path of the images in this particular line.
    app.set("view engine","hbs");
    app.set("views",template_path);
    hbs.registerPartials(partials_path);
    app.use(express.json());
    app.use(express.urlencoded({extended:false}));
    require("./db/conn"); 
    const Register=require("./models/registers");
    const port = process.env.PORT || 3000;    //Here we are defining the port number to see the output

        app.get("/", (req, res) => {
            res.render("index.hbs")
        });

        
        app.get("/register", (req, res) => {
            res.render("register.hbs")
        });
    // from line 20-36 we have render the files so that we can see the output on the browser on clicking the links of the navbar. 
        
        app.get("/login", (req, res) => {
            res.render("login.hbs")
        });

        app.get("/index", (req, res) => {
            res.render("index.hbs")
        });
// From line 38-64 we have used the try and catch method so that we are able to see the ouptup on the database.
// Here we have also used the req and res method do that we can request in the form to get us register.
/*As here we can see if the password is confirmed the same then it requests the database to so the credentials entered by us and if 
the password is not same the it gives the error as it will not render us to the home page rather it will show what the error is. */
        app.post("/register",async(req,res)=>{
            try{
                const password=req.body.password;
                const cpassword=req.body.confirmpassword;

                if(password===cpassword){
                    const registerEmployee=new Register({
                        firstname:req.body.firstname,
                        lastname:req.body.lastname,
                        email:req.body.email,
                        gender:req.body.gender,              
                        phone:req.body.phone,
                        age:req.body.age,
                        password:password,
                        confirmpassword:cpassword,
                    })
                    const registered=await registerEmployee.save();
                    res.status(201).render("index");
                }
                else{
                    res.send("Password Not Matching");
                }
            }
            catch(error){
                res.status(400).send(error);
            }
        })
// Here we can see the ouput on the port defined above.
        app.listen(port, () => {
            console.log(`server is running at port no ${port}`);
        })
