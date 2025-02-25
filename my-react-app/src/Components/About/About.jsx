import photo from "../../assets/photo_profil.PNG?url"

function About(){ 
    return ( 
    <div className="presentation" id="a-propos">
        <img src={photo} className="photo-profil" alt="photo" />
        <div className="presentation-container">
            <p>Mon expérience...</p>
        </div>
    </div>
    )
}
export default About