import { connect } from 'react-redux';
import App from './App';

import { getFrogs } from '../../data/actions/api'
import { getDucks } from '../../data/actions/api'

// const mapStateToProps = (state) => {
//     const frog = state.frogs[0];
    
//     return {
//         ...frog,
//     }
// };

const mapDispatchToProps = dispatch => {
    return {
        getFrogs: () => dispatch(getFrogs()),
        getDucks: () => dispatch(getDucks()),
    }
}

export default connect(null, mapDispatchToProps)(App);