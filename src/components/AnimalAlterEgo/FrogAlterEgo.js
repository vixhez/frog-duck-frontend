import { connect } from 'react-redux';
import AnimalAlterEgo from './AnimalAlterEgo';

const mapStateToProps = ({ frogAlterEgo }) => ({
    alterEgo: frogAlterEgo
});

export default connect(mapStateToProps)(AnimalAlterEgo);