import { connect } from 'react-redux';
import AlterEgo from './AlterEgo';

import { fetchDuckAlterEgo } from '../../data/actions/state';
import { fetchFrogAlterEgo } from '../../data/actions/state';

const mapStateToProps = ({ extroversionScore, generosityScore, activenessScore, colourfulnessScore }) => ({
    extroversionScore, generosityScore, activenessScore, colourfulnessScore
})

const mapDispatchToProps = dispatch => {
    return {
        fetchDuckAlterEgo: () => dispatch(fetchDuckAlterEgo()),
        fetchFrogAlterEgo: () => dispatch(fetchFrogAlterEgo()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AlterEgo);