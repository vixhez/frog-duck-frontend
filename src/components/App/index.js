import { connect } from 'react-redux';
import App from './App';

import { getFrogs } from '../../data/actions/api'

const mapDispatchToProps = dispatch => {
    return {
        getFrogs: () => dispatch(getFrogs()),
    }
}

export default connect(null, mapDispatchToProps)(App);