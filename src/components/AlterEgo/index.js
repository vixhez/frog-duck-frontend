import { connect } from 'react-redux';
import AlterEgo from './AlterEgo';

import { fetchDuckAlterEgo } from '../../data/actions/state';
import { fetchFrogAlterEgo } from '../../data/actions/state';

const mapDispatchToProps = dispatch => {
    return {
        fetchDuckAlterEgo: () => dispatch(fetchDuckAlterEgo()),
        fetchFrogAlterEgo: () => dispatch(fetchFrogAlterEgo()),
    }
};

export default connect(null, mapDispatchToProps)(AlterEgo);