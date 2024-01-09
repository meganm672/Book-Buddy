/**
 * @jest-environment jsdom
 */

import React from 'react';
// import extensions to Jest expect
import "@testing-library/jest-dom";
import { render } from '@testing-library/react';


describe("<App />" , () => {
    
    it("renders the App component", ()=>{
        const app = render(
                    <App />
        );
        expect(app).not.toBe(null);
    })
})