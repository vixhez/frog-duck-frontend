import { connect } from 'react-redux';
import HomeButton from './HomeButton';
import { resetApp } from "../../data/actions/state";

const mapDispatchToProps = ( dispatch ) => ({
        resetApp: () => dispatch(resetApp())
});

export default connect(null, mapDispatchToProps)(HomeButton);