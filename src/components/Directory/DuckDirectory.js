import { connect } from 'react-redux';
import Directory from './Directory';


const mapStateToProps = ({ ducks }) => ({
    animals: ducks,
});

export default connect (mapStateToProps)(Directory);
