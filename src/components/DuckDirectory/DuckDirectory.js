const DuckDirectory = ({ ducks }) => (
    ducks.map((duck, index) => {
        return (
            <div className={index} key={index}>
                <h3>{duck.regular_name}</h3>
                <h4>{duck.latin_name}</h4>
                <h4>{duck.conservation}</h4>
                <h5>{duck.location}</h5>
                <p>{duck.description}</p>

            </div>
        );
    })
);
export default DuckDirectory;