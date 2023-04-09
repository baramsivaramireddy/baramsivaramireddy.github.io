
import Navbar  from "./navbar"
const Home = () =>{

    return (



        <>

        <Navbar/>
        <div className="m-4 ">
        <div>

        <div className="mt-4 mb-2 font font-semibold text-lg font-mono"> Introduction</div>
    
        In recent years, machine learning has become increasingly popular and its potential applications are seemingly endless. A team of five students recognized this potential and decided to create a web application for gender and age detection. This essay will explore the process and technologies involved in creating this web app.
    
        The team consisted of five students with different skill sets, including two back-end developers, two front-end developers, and a machine learning expert. The back-end developers worked on building the server, the front-end developers worked on designing the user interface, and the machine learning expert focused on building the model for gender and age detection.
        </div>


        <div >
       
        <div className="mt-4 mb-2 font font-semibold text-lg"> How we built it </div>
        To build the web app, the team used several technologies, including React, Tailwind CSS, Axios, and Cloudmersive API. React is a popular front-end library that allows developers to build complex user interfaces with ease. Tailwind CSS is a utility-first CSS framework that simplifies the design process by providing pre-defined styles. Axios is a promise-based HTTP client that allows developers to make HTTP requests from the browser. Finally, Cloudmersive API is an API service that provides a wide range of machine learning models, including gender and age detection.


        the front-end developers started working on the user interface. They used React and Tailwind CSS to create a simple yet elegant user interface. The user interface included an upload button that allowed users to upload an image, a preview of the uploaded image, and a result section that displayed the gender and age of the person in the uploaded image.


        With the server, user interface, and machine learning model in place, the team tested the web app to ensure that it was working as intended. They used Axios to make HTTP requests from the browser to the server and then to Cloudmersive API. The results were then displayed in the result section of the user interface.

        <div className="mt-4">

      
        In conclusion, the team of five students successfully created a web application for gender and age detection using machine learning and several technologies such as React, Tailwind CSS, Axios, and Cloudmersive API. The application's simple yet elegant user interface and efficient machine learning model make it an effective tool for gender and age detection. This project highlights the potential of machine learning in web development and the importance of collaboration and utilizing the right technologies to achieve a common goal.
        </div>
          </div>




        </div>
        </>
    )
}

export default Home