import { connect } from 'react-redux';
import Quiz from './Quiz';

import { submitQuiz } from '../../data/actions/state';

const mapStateToProps = ({ extroversion1, extroversion2, colourfulness1, colourfulness2, generosity1, generosity2, activeness1, activeness2 }) => ({
    extroversion1, 
    extroversion2,
    colourfulness1,
    colourfulness2,
    generosity1,
    generosity2,
    activeness1,
    activeness2
});

const mapDispatchToProps = dispatch => {
    return {
        submitQuiz: data => dispatch(submitQuiz(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);