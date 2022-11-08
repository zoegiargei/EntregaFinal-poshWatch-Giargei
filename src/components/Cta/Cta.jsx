import { Link } from "react-router-dom";

const Cta = (props) => {
    return(
        <Link to={""} className="cta"> { props.cta } </Link>
    );
};

export default Cta;