// const AlterEgo = ({ animals, extroversionScore, generosityScore, activenessScore, colourfulnessScore }) => {
//     // console.log(animals);
//     // console.log(animals[1].kindness);
//     // let animalAlterEgo = animals.filter(animal =>
//     //     (animal.extroversion === (Math.ceil(extroversionScore) || Math.ceil(extroversionScore + 1) || Math.ceil(extroversionScore - 1)) && (animal.kindness === (Math.ceil(generosityScore) || Math.ceil(generosityScore + 1) || Math.ceil(generosityScore - 1)) && (animal.activeness === (Math.ceil(activenessScore) || Math.ceil(activenessScore + 1) || Math.ceil(activenessScore - 1)) && (animal.colourfulness === (Math.ceil(colourfulnessScore) || Math.ceil(colourfulnessScore + 1) || Math.ceil(colourfulnessScore - 1)))))));

//     //     console.log(animalAlterEgo);
//     //     console.log(Math.ceil(generosityScore+1));
//     //     console.log(Math.ceil(colourfulnessScore));
//     //     console.log(Math.ceil(extroversionScore));
//     //     console.log(Math.ceil(generosityScore));

//     let animalAlterEgo = animals.filter(animal =>
//         animal.extroversion === 6);

//     console.log(animalAlterEgo);

//     animalAlterEgo.map((animal, index) => {
//         return (
//             <>
//             <p>hey</p>
//             <div className={index} key={index}>
//                 <h3>{animal.regular_name}</h3>
//                 <h4>{animal.latin_name}</h4>
//                 <h4>{animal.conservation}</h4>
//                 <h5>{animal.location}</h5>
//                 <p>{animal.description}</p>

//             </div>
//             </>
//         );
//     })};

// export default AlterEgo;


import { Component } from 'react';

class AlterEgo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            animals: this.props.animals,
            extroversionScore: this.props.extroversionScore,
            generosityScore: this.props.generosityScore,
            activenessScore: this.props.activenessScore,
            colourfulnessScore: this.props.colourfulnessScore
        };
    }

    componentDidMount() {
        this.props.fetchDuckAlterEgo();
        this.props.fetchFrogAlterEgo();
    }

    render() {
        return (
            <p>ello</p>
        );
    }
}
export default AlterEgo;