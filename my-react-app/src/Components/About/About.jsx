import photo from "../../assets/photo_profil.PNG?url"

function About(){ 
    return ( 
    <div className="presentation">
    <img src={photo} className="photo-profil" alt="photo" />
    </div>
    )
}
export default About