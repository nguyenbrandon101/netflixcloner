import React from "react";
import { getAuth,onAuthStateChanged } from "firebase/auth";
import { FaHeart, FaRegHeart} from "react-icons/fa";

import { db} from "./firebase";
import { arrayUnion,doc,updateDoc } from "firebase/firestore";
export default function Movie(props) {
    const [like,setLike] = React.useState(false)
    const[saved,setSaved] = React.useState(false)
    const auth = getAuth();
    let currEmail = "check"
    React.useEffect(() => {

    },[like])
    onAuthStateChanged(auth, async(user) => {
        if (user && like === true) {
            currEmail = user.email
            const movieId = doc(db,'users',currEmail)
            await updateDoc(movieId, {
                savedShows: arrayUnion({
                    id: props.id,
                    title: props.title,
                    img: props.backdrop_path
                })
            })
        } 
      })
    const saveShow = () =>{
        setLike(prev=>!prev)
    }
    return (
        <div className="mv">
                <div className="movieBoxes">
                    <img className = "movieImg"src={`https://image.tmdb.org/t/p/w500/${props.movie? props.backdrop_path: undefined}`} alt=""></img>
                    <div class="middle">
                        <div class="text">{props.title}</div>
                        {like === false && <p className="likeBut" onClick={saveShow}><FaRegHeart></FaRegHeart></p>}
                        {like === true && <p className="likeBut" onClick={saveShow}><FaHeart></FaHeart></p>}
                    </div> 
                </div>
        </div>
    )
}