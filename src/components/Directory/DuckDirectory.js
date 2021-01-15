import { connect } from 'react-redux';
import Directory from './Directory';


const mapStateToProps = (state) => {
    const duck = state.ducks[0];
    
    return {
        ...duck,
        // regular_name: duck.regular_name,
        // latin_name: duck.latin_name,
        // description: duck.description,
        // conservation: duck.conservation,
        // location: duck.location,
    }
};

export default connect (mapStateToProps)(Directory);
