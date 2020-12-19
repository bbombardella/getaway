//import { link_key_door } from './index.jsx'


export default function useObject(usedObject){

    const type=usedObject.type;
    
    switch(type) {
        case 'door':
            return 0;
        default:
            return 9999;

    }
}