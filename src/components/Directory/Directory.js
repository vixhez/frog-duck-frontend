const Directory = ({ regular_name, latin_name, description, conservation, location }) => (
    <>
        <h3>{`${regular_name} AKA ${latin_name}`}</h3>
        <h4>{`${conservation} ... ${location}`}</h4>
        <p>{description}</p>
    </>
);

export default Directory;