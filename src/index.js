import debounce from 'lodash.debounce';


export default function createDebounceMiddlewareGenerator (triggerActionTypes, debouncedActionType, wait) {

    const createValidateActionDebounced = debounce(
        dispatch => dispatch({type: debouncedActionType}),
        wait
    );

    return function validationDebounceMiddleware (store) {
        return next => action => {
            const result = next(action);

            if (triggerActionTypes.includes(action.type) === false) {
                return result;
            }

            createValidateActionDebounced(store.dispatch);
            return result;
        };
    };
}
