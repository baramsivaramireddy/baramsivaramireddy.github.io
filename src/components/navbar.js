import {Link} from "react-router-dom"
const Navbar = () =>{

    return (<>
        <nav className="flex rounded-lg m-2 justify-between border-b-2 border-blue-200 drop-shadow-2xl   py-6 px-10 items-center font">

            <div className="font-black text-lg hover:text-2xl hover:uppercase"> 
            <Link to="/"> Tomato</Link>
                </div>


            <div className="flex text-sky-500  ">

                    <div className="mx-5">

                            <Link to="/genderdetect" className="hover:text-blue-600 hover:text-xl"> Gender Detect</Link>


                            </div>

                            <div>

                            <Link to="/Agedetect"  className="hover:text-blue-600 hover:text-xl"> Age Detect</Link>


                            </div>

            </div>
           
        </nav>
    </>)
}

export default Navbar