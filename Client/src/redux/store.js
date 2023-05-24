import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Importa el almacenamiento que deseas utilizar (por ejemplo, el almacenamiento local)
import thunk from 'redux-thunk';
import rootReducer from './reducer.js';

const persistConfig = {
  key: 'root', // Puedes especificar una clave personalizada para tu almacenamiento persistente
  storage, // Almacenamiento que deseas utilizar
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers =
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));
const store = createStore(persistedReducer, enhancer);
const persistor = persistStore(store);

export { store, persistor };