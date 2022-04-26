import {FaComment, FaShare} from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";


const Interactions = () => {
    return ( 
        <div className="Interactions">
            <div className="Interactions--Actions">
                <div className="Actions--Likes">
                    <AiFillLike color="white" className="IconsOptions" />
                    <p>Me gusta</p>
                </div>

                <div className="Actions--Comments">
                    <FaComment color="white" className="IconsOptions" />
                    <p>Comentar</p>
                </div>
                
                <div className="Actions--Shares">
                    <FaShare color="white" className="IconsOptions"/>
                    <p>Compartir</p>
                </div>

            </div>
            <div className="Interactions--Line"></div>
            <div className="Interactions--Counter">
                <div className="Counter--Likes">
                    <AiFillLike color="white" />
                    <p>35 Mil</p>
                </div>
                <div className="Counter--Comments">
                    <p>155 Comentarios</p>
                </div>
                <div className="Counter--Shares">
                    <p>962 mil reproducciones</p>
                </div>
            </div>
        </div>
     );
}
 
export default Interactions;