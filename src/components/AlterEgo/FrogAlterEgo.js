import { connect } from 'react-redux';
import AlterEgo from './AlterEgo';

import { fetchFrogAlterEgo } from '../../data/actions/state';

const mapStateToProps = ({ frogs, extroversionScore, generosityScore, activenessScore, colourfulnessScore }) => ({
    animals: frogs,
    extroversionScore,
    generosityScore,
    activenessScore,
    colourfulnessScore,
});

const mapDispatchToProps = dispatch => {
    return {
        fetchFrogAlterEgo: () => dispatch(fetchFrogAlterEgo()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AlterEgo);