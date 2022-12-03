import { Link } from "react-router-dom";

const Cta = (props) => {
    return(
        <Link to={"/collection"} className="cta"> { props.cta } </Link>
    );
};

export default Cta;