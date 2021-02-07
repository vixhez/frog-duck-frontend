const AnimalAlterEgo = ({ alterEgo }) =>
    alterEgo.length > 0 ? (
    <div>
        <h3>{alterEgo[0].regular_name}</h3>
        <h4>{alterEgo[0].latin_name}</h4>
        <p>Extroversion: {alterEgo[0].extroversion}</p>
        <p>Generosity: {alterEgo[0].generosity}</p>
        <p>Activeness: {alterEgo[0].activeness}</p>
        <p>Colourfulness: {alterEgo[0].colourfulness}</p>
        <p>{alterEgo[0].description}</p>
        <h4>{alterEgo[0].conservation}</h4>
        <h4>{alterEgo[0].location}</h4>
    </div>

    ) : (
            <p>You are undefinable!</p>
        );

export default AnimalAlterEgo;