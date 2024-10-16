
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [data, setData] = useState({});
    const [addNewItem, setAddNewItem] = useState(false);
    const [addPrintCode, setAddPrintCode] = useState(false);
    const [selectedDay, setSelectedDay] = useState('Hôm qua');

    return (
        <AppContext.Provider value={{   data, setData, addNewItem, setAddNewItem, addPrintCode, setAddPrintCode,
                                        selectedDay, setSelectedDay}}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};
