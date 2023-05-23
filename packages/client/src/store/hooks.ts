import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, IInitialStore } from '../store/store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<IInitialStore> = useSelector
