### Sample

```javascript
import createDebounceMiddlewareGenerator from 'redux-debounced-action-dispatcher';


const TRIGGER_ACTIONS = [
  'HOGE_CHANGED',
  'FOO_CHANGED'
];

const VALIDATION_DEBOUNCE_TIME = 500;

export const DEBOUNCED_ACTION_TYPE = 'VALIDATE_ALL_DATA';

const debouncedValidationDispatcher = createDebounceMiddlewareGenerator(
  TRIGGER_ACTIONS,
  DEBOUNCED_ACTION_TYPE,
  500,
);

const store = createStore(
  todoApp,
  applyMiddleware(debouncedValidationDispatcher)
);
```
