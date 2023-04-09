import Navbar  from "./navbar"
import axios from 'axios'



import {useState} from "react"
const AgeDetect = () => {

    const [image,setImage] =useState(null)
    const [resultImage,setresultImage] = useState(null)
    const [result, setResult] = useState(null)

    const handleImage = (event) => {
        setImage(event.target.files[0])
        setresultImage(URL.createObjectURL(event.target.files[0]))
    }
    const handlesubmit = (event) =>{
        event.preventDefault()
        
        const API_KEY = "a12f4b98-0cac-4c75-9743-6fa0fd0ce30f"

        const formData = new FormData()
        formData.append('imageFile', image ,'imageFile');
        
        
        axios.post('https://api.cloudmersive.com/image/face/detect-age', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Apikey': API_KEY,
          },
        })
          .then(response => {
            console.log(response.data)
            setResult(response.data)
            // Handle response data
          })
          .catch(error => {
            console.error(error);
            // Handle error
          });
    }
   

    return (
        <>
        <Navbar/>

        <div className="text-center mt-4 hover:scale-100  decoration-1  hover:-translate-y-1  hover:skew-y-3  hover:scale-110 hover:rotate-30 underline underline-offset-1 uppercase decoration-solid text-3xl">
            
            <span className="text-orange-400"> a</span>
            <span className="text-emerald-400">g</span>
            <span className="text-sky-400">e</span>
            <span> </span>
            <span className="text-fuchsia-400">d</span>
            <span className="text-pink-500">e</span>
            <span className="text-violet-500">t</span>
            <span className="text-indigo-400">e</span>
            <span className="ext-cyan-500">c</span>
            <span className="text-teal-400">t</span>
       </div>

            <form onSubmit={handlesubmit}>

                <div className="m-5 md:px-24 py-10">
                   
            
                    <div> <p className="text-center"> upload photo of people</p> </div>
            <div className="flex items-center justify-center w-full mt-5  ">
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400"> PNG, JPG </p>
                    </div>
                    <input id="dropzone-file"  required type="file" accept="image/*;capture=camera" name="image" onChange={handleImage} className="hidden" />
                </label>
            </div> 

                </div>


                <div className="flex justify-center items-center">
                <button type="submit" className=" transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110   duration text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Guess the Age 	&#129300; </button>
                   
                </div>
            </form>


            <div className="md:flex flex-row  px-24 py-10">

                {/* image */}
                    <div className="m-4">
                    {resultImage && <img src={resultImage}/>}
                    </div>


                {/* results */}
                    <div>

               

                    {result && 
                    
                    <div className="m-4 "> 
                        <div>PeopleIdentified : {result.PeopleIdentified}</div>

                        {result.PeopleWithAge.map((object, i) => (<div key={i}>  
                            
                                <div> for {i+1} st person </div>
                                <div> 
                                    ageClass : {object.AgeClass } 
                                </div>
                                <div>
                                AgeClassificationConfidence :     
                                {object.AgeClassificationConfidence} 
                                </div>
                                <div>
                                    Age :  {object.Age}
                                </div>
                        
                         
                          </div>))}
                    </div>
                    
                    }

                    </div>
                 
         
            </div>

       

        </>
    )
}

export default AgeDetect