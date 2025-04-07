import photo from "../../assets/photo_profil.PNG?url"
import logoAgile from "../../assets/agile_scrum.jpg"
import logoHtml from "../../assets/logo_html.png"
import logoCss from "../../assets/logo_css.png"
import logoJs from "../../assets/logo_js.png"
import logoSeo from "../../assets/logo_seo.jpg"
import logoReact from "../../assets/logo_react.png"
import logoNode from "../../assets/logo_node.png"
import logoMongo from "../../assets/logo_mongo.webp"
import logoVite from "../../assets/logo_vite.png"

function About(){ 
    return ( 
    <div className="presentation" id="a-propos">
        <img src={photo} className="photo-profil" alt="photo_profil" />
        <div className="presentation-container">
            <h3>Formation</h3>
            <p>Le parcours de développeur web proposé par OpenClassroom que j&apos;ai suivi permet d&apos;appréhender des technologies modernes et populaires à travers 8 projets intégrés dans un contexte professionnel. </p>
            <h3>Compétences</h3>
            <div className="logos-competences">
                <figure><img src={logoHtml} className="logo_html" id="logos" alt="logo_html"></img><figcaption>HTML</figcaption> </figure>
                <figure><img src={logoCss} className="logo_css" id="logos" alt="logo_CSS"></img><figcaption>CSS</figcaption></figure>
                <figure><img src={logoJs} className="logo_js" id="logos" alt="logo_javascript"></img><figcaption>JavaScript</figcaption></figure>
                <figure><img src={logoSeo} className="logo_seo" id="logos" alt="logo_seo"></img><figcaption>SEO</figcaption></figure>
                <figure><img src={logoReact} className="logo_react" id="logos" alt="logo_react"></img><figcaption>React</figcaption></figure>
                <figure><img src={logoNode} className="logo_node" id="logos" alt="logo_node"></img><figcaption>Node.js</figcaption></figure>
                <figure><img src={logoAgile} className="logo-agile" id="logos" alt="logo_agile"></img><figcaption>Agile /scrum</figcaption></figure>
                <figure><img src={logoMongo} className="logo-mongo" id="logos"alt="logo_mongodb"></img><figcaption>MongoDb</figcaption></figure>
                <figure><img src={logoVite} className="logo-vite" id="logos" alt="logo_vite"></img><figcaption>Vite.js</figcaption></figure>
            </div>
            <h3>Soft Skills</h3>
            <p>Autonomie, organisation, communication, esprit d&apos;équipe, adaptabilité, gestion des problèmes, gestion du stress</p>
        </div>
    </div>
    )
}

export default About