import { connect } from 'react-redux';
import App from './App';

import { getFrogs } from '../../data/actions/api'
import { getDucks } from '../../data/actions/api'

const mapStateToProps = ({ quizComplete, frogsLoaded, ducksLoaded, showAllDucks, showAllFrogs }) => ({
    quizComplete,
    frogsLoaded,
    ducksLoaded,
    showAllDucks,
    showAllFrogs
});

const mapDispatchToProps = dispatch => {
    return {
        getFrogs: () => dispatch(getFrogs()),
        getDucks: () => dispatch(getDucks()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);