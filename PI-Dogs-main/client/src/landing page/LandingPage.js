import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { someAction } from './redux/actions'; // Importa tus acciones

// ... Código de tu componente ...

const mapStateToProps = (state) => {
  // Mapea las propiedades del estado de Redux que necesitas a las propiedades del componente
  return {
    someData: state.someData,
  };
};

const mapDispatchToProps = (dispatch) => {
  // Enlaza las acciones que necesitas con las propiedades del componente
  return bindActionCreators(
    {
      someAction,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
