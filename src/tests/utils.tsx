import React from 'react';
import { store } from '../store/store';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

export const wrap = (
    component: React.ReactElement,
    storeWrap: any = store,
) => {
    if (!storeWrap) {
        storeWrap = store;
    }

    return render(<Provider store={storeWrap}>{component}</Provider>);
};
