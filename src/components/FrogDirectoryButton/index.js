import { connect } from 'react-redux';
import FrogDirectoryButton from './FrogDirectoryButton';
import { showAllFrogs } from "../../data/actions/state";

const mapDispatchToProps = ( dispatch ) => ({
        showAllFrogs: () => dispatch(showAllFrogs())
});

export default connect(null, mapDispatchToProps)(FrogDirectoryButton);