import { useDispatch } from 'react-redux';
import { AppDispatch } from 'types/Redux';

export const useAppDispatch = () => useDispatch<AppDispatch>();
