import { connect } from "react-redux";
import { setEPS, addPER, resetPER } from "../../redux/actions";

import PerBase from "./perBase";

const mapStateToProps = (state) => ({
  EPS: state.EPS,
  PER: state.PER,
});

const mapDispatchToProps = (dispatch) => ({
  setEPS: (v) => dispatch(setEPS(v)),
  addPER: (v) => dispatch(addPER(v)),
  resetPER: () => dispatch(resetPER()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PerBase);
