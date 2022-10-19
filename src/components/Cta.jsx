const Cta = (props) => {
    return(
        <a href={props.href} className="cta"> { props.cta } </a>
    );
};

export default Cta;