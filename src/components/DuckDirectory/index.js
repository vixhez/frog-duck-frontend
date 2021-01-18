import { connect } from 'react-redux';
import DuckDirectory from './DuckDirectory';


const mapStateToProps = ({ ducks }) => ({
    ducks,
});

export default connect (mapStateToProps)(DuckDirectory);
