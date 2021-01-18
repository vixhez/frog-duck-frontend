import { connect } from 'react-redux';
import Directory from './Directory';


const mapStateToProps = ({ frogs }) => ({
    animals: frogs,
});

export default connect (mapStateToProps)(Directory);
