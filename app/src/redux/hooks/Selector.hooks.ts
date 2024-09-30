import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootStates} from '../store';

export const useTypedSelector: TypedUseSelectorHook<RootStates> = useSelector;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
