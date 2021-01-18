const Directory = ({ animals }) => (
    animals.map((animal, index) => {
        return (
            <div className={index} key={index}>
                <h3>{animal.regular_name}</h3>
                <h4>{animal.latin_name}</h4>
                <h4>{animal.conservation}</h4>
                <h5>{animal.location}</h5>
                <p>{animal.description}</p>

            </div>
        );
    })
);
export default Directory;