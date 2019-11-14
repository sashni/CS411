1. See UML.pdf 

2. N/A

3. 
#### Happy path of a user:
* User creates account OR logs into account
* User uploads image of equation OR selects stored equation (jpg/png format)
* If new image is uploaded, application automatically stores the new equation
* User receives solution to equation
* User receives step-by-step solution
* User can choose to alter variables passed into existing equation and repeat solution request OR solve new equation

#### Things that could go wrong + application solution:
* User forgets their account information:
Offer forgot username/password option to retrieve account information
* User could accidentally upload wrong image:<br> Offer user option to reupload image
* Application could request solution to an incorrect equation:<br> Display parsed equation to user to verify the correct equation <br> Allow user to alter variables passed into equation
* User could receive incorrect solution to equation:<br>
Flag solution as incorrect


4.
#### Why we decided to use JavaScript MEAN Stack
As per our user stories, the main function of our application is to receive an image of a math problem from the user, and display solutions and related links on our webpage. In other words, the view is our webpage displaying solutions and the model data are the generated solutions to math problems (taken from external APIs). The controller consists of all the interactive elements on our webpage, like buttons which cause the backend to receive the image and pass it to external APIs to request a solution as response. Because our front-end display of math solutions is the main function of our app, JavaScript is a good language choice, as it facilitates good webpage design. As per our technology stack documentation, it also makes sense to use JavaScript because of the API calls which return JSON formatted data, and the ease of NoSQL database use, compared to SQL databases which require schema design. Using a powerful front-end JavaScript framework to display the data, such as Angular, necesitates the other elements, such as Node.js and Express on the backend, and MongoDB as a database for saving user images and profile information.

#### Why we decided not to use alternative architectures
JavaScript is an easy choice for the front-end of our application but there are many possible choices for the back-end, one of which we considered was Python and the Django framework. Even though many of us knew Python from previous classes, we decided that using JavaScript on both the front-end and back-end would simplify workflow, and using Python on the back-end instead would force us to take extra steps to integrate the two languages, whereas the MEAN stack makes it more seamless. Another reason we didn't use Django is because the framework is quite monolithic and opinionated-- there's one "best practice" in doing things via Django, whereas there is generally more freedom using Node.js and Express, which is unopinionated. Also, because the project is so dependent on calling external APIs and serving up that data, Python is a bit less suited than JavaScript is for this purpose. Django also has less libraries than NPM, so it might be a little bit more difficult to find the libraries we need.
