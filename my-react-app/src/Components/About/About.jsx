import photo from "../../assets/photo_profil.PNG?url"

function About(){ 
    return ( 
    <div className="presentation" id="a-propos">
        <img src={photo} className="photo-profil" alt="photo" />
        <div className="presentation-container">
            <h3>Formation</h3>
            <p>Parcours permettant le développement de compétences dans le domaine du développement web à travers 8 projets intégrés dans un contexte professionnel. </p>
            <h3>Compétences</h3>
            <p>Actuellement en reconversion professionnelle, je suis en formation de développeur web, un domaine dans lequel j&apos;ai appréhendé avec succès des technologies telles que HTML, CSS, JavaScript, React, Express.js, Node.js, MongoDB ainsi que le SEO et le déboggage. Cette première expérience m&apos;a également permis de développer des soft skills essentielles, telles que l&apos;autonomie, la gestion des problèmes, la gestion du stress, la communication et l&apos;adaptabilité, des qualités que j&apos;avais déjà acquises au cours de mon parcours précédent. Grâce à cette combinaison de compétences techniques et humaines, je suis aujourd&apos;hui prête à relever de nouveaux défis dans le développement web, avec un esprit d&apos;équipe et une approche orientée solution.</p>
        </div>
    </div>
    )
}
export default About