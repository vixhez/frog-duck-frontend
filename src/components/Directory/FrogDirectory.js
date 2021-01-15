import { connect } from 'react-redux';
import Directory from './Directory';


const mapStateToProps = (state) => {
    const frog = state.frogs[0];
    
    return {
        ...frog,
        // regular_name: frog.regular_name,
        // latin_name: frog.latin_name,
        // description: frog.description,
        // conservation: frog.conservation,
        // location: frog.location,
    }
};

export default connect (mapStateToProps)(Directory);
