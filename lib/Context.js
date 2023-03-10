import { createContext, useEffect } from 'react';
import T from './translations.json';
import {useLocalStorage} from './hooks/useLocalStorage';


export const Context = createContext();

export const ContextProvider = ({children}) => {

    const [webLang, setWebLang] = useLocalStorage('webLang', 'en');
    const t = (word) => {
        if(T[word]){
            return T[word][webLang] ?? word;
        }else{
            return word;
        }
    }
    
    const [darkTheme, setDarkTheme] = useLocalStorage('darkTheme', true);

    return (
        <Context.Provider value={{
            t, webLang, setWebLang, darkTheme, setDarkTheme
        }}>
            {children}
        </Context.Provider>
    )
}