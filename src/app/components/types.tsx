import { Dispatch, SetStateAction } from 'react';

export type Optional<T> = T | undefined;
export type SetState<T> = Dispatch<SetStateAction<T>>;
