import { connect } from 'react-redux';
import Quiz from './Quiz';

import { submitQuiz } from '../../data/actions/state';

const mapStateToProps = ({ traitInputs }) => ({
    traitInputs
});

const mapDispatchToProps = dispatch => {
    return {
        submitQuiz: data => dispatch(submitQuiz(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);