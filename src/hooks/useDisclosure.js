import { useState } from 'react';

const useDisclosure = (initialState = false) =>{
    const[isOpen,setIsOpen] = useState(initialState);

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);
    const toggle = () => setIsOpen(prevState => !prevState);

    return { isOpen, open, close, toggle };
};
export default useDisclosure;
