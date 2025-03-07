import photo from "../../assets/photo_profil.PNG?url"

function About(){ 
    return ( 
    <div className="presentation" id="a-propos">
        <img src={photo} className="photo-profil" alt="photo" />
        <div className="presentation-container">
            <h3>Formation</h3>
            <p>Le parcours de développeur web proposé par OpenClassroom que j&apos;ai suivi permet d&apos;appréhender des technologies modernes et populaires à travers 8 projets intégrés dans un contexte professionnel. </p>
            <h3>Compétences</h3>
            <p>Actuellement en reconversion professionnelle, je suis en formation de développeur web, un domaine dans lequel j&apos;ai appréhendé avec succès des technologies telles que HTML, CSS, JavaScript, React, Express.js, Node.js, MongoDB ainsi que le SEO et le déboggage. Cette formation m&apos;a également familiarisée avec les méthodologies Agile et Scrum, me permettant de comprendre l&apos;importance de la collaboration itérative et de la gestion de projet flexible. Cette première expérience m&apos;a également permis de développer des soft skills essentielles, telles que l&apos;autonomie, la gestion des problèmes, la gestion du stress, la communication et l&apos;adaptabilité, des qualités que j&apos;avais déjà acquises au cours de mon parcours précédent. Grâce à cette combinaison de compétences techniques et humaines, je suis aujourd&apos;hui prête à relever de nouveaux défis dans le développement web, avec un esprit d&apos;équipe et une approche orientée solution.</p>
        </div>
    </div>
    )
}
export default About