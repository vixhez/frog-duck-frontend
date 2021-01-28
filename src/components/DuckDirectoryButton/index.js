import { connect } from 'react-redux';
import DuckDirectoryButton from './DuckDirectoryButton';
import { showAllDucks } from "../../data/actions/state";

const mapDispatchToProps = ( dispatch ) => ({
        showAllDucks: () => dispatch(showAllDucks())
});

export default connect(null, mapDispatchToProps)(DuckDirectoryButton);