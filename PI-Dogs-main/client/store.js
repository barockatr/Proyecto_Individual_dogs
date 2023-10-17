import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Importa Redux Thunk si necesitas manejar acciones asincrónicas

// Importa tus reducers aquí
import someReducer from './redux/someReducer'; // Reemplaza 'someReducer' con el nombre de tus reducers

// Combina tus reducers
const rootReducer = combineReducers({
  someReducer, // Agrega todos tus reducers aquí
});

// Configura el middleware (en este caso, Redux Thunk)
const middleware = [thunk];

// Crea el store de Redux
const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
