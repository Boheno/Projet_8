import imgBanner from "/banniere-img2.JPG?url";
import PropTypes from "prop-types";

function Banner () {
    return (
        <div className="banner">
            <img className="banner-img" src={imgBanner} alt={imgBanner.title} ></img>
        </div>
    )
}
Banner.propTypes = {
    page: PropTypes.string,
}
export default Banner