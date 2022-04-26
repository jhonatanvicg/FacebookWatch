import {FaGlobeAmericas} from "react-icons/fa";
import {FaEllipsisH} from "react-icons/fa";

const HeaderPost = () => {
    return ( 
        <div className="Header">
            <div className="Header--Page-Data">
                <div className="Page-Data--Profile-Picture">
                    <img src="/images/profile.jpg" alt="" />
                </div>
                <div className="Page-Data--Main-Info">
                    <div className="Main-Info--Up">
                        <div className="Up--Page-Name">
                            <p>Man Srote</p>
                            <p>Seguir</p>
                        </div>
                    </div>
                    <div className="Main-Info--Down">
                        <div className="Down--Date">
                            <p>
                                3 de Abril a las 15:00
                            </p>
                            <FaGlobeAmericas size={"12px"} color={"white"} />
                        </div>
                    </div>
                </div>
                <div className="Page-Data--Options">
                    <FaEllipsisH />
                </div>
            </div>
            <div className="Header--Description">
                <p>
                    Esto es una descripcion del video que estamos viendo jijijijijij que cool sera el resultado
                    Esto es una descripcion del video que estamos viendo jijijijijij que cool sera el resultado
                    Esto es una descripcion del video que estamos viendo jijijijijij que cool sera el resultado
                    Esto es una descripcion del video que estamos viendo jijijijijij que cool sera el resultado
                    Esto es una descripcion del video que estamos viendo jijijijijij que cool sera el resultado
                    Esto es una descripcion del video que estamos viendo jijijijijij que cool sera el resultado
                    Esto es una descripcion del video que estamos viendo jijijijijij que cool sera el resultado
                    Esto es una descripcion del video que estamos viendo jijijijijij que cool sera el resultado
                    Esto es una descripcion del video que estamos viendo jijijijijij que cool sera el resultado
                </p>
            </div>
        </div>
     );
}
 
export default HeaderPost;