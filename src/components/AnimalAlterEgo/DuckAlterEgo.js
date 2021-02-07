import { connect } from 'react-redux';
import AnimalAlterEgo from './AnimalAlterEgo';

const mapStateToProps = ({ duckAlterEgo }) => ({
    alterEgo: duckAlterEgo
});

export default connect(mapStateToProps)(AnimalAlterEgo);