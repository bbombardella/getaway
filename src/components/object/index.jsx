export const key_proto = 
    {Id: 0, type: 'key', description: 'Une clé poisseuse', sprite: 0};

export const door_proto =   
    {Id: 1, type: 'door', description: 'Une porte couverte de mousse', sprite: 0};


export const link_key_door = [
    [0, 1],

]

//dans cette fonction, je voulais qu'en fonctione du type de l'objet, on fasse une action différente
//clé sur une porte -> useDoor
//clé sur un coffre (si on en met)-> useChest
//et tout autre objet que l'on pourrait introduire au jeu
// mais j'ai une erreur qui me dit 
//"React Hook "useDoor" is called conditionally. React Hooks must be called in the exact same order in every component render. Did you accidentally call a React Hook after an early return?"


/*export function useObject(usedObject, usedOn){

    const type=usedObject.type;
    
    switch(type) {
        case 'door':
            useDoor(usedObject.Id, usedOn.Id)
            return ('Door');
        default:
            return 9999;

    }



}*/
/*
function useDoor(usedObjectId, usedOnId){

    if(testKeyDoor(usedObjectId, usedOnId)){
        //changeMap(actualMap,NextMap);
        //si la clé correspond à la porte, on change de map
    }
    else{
        //ce que l'on doit faire si la clé n'ouvre pas la porte
    }
    
    return 0;
}
//fonction qui test les correspondances entre la clé et la porte
function testKeyDoor(Key, Door){
    for(var i=0; i<link_key_door.length();i++){
        if(link_key_door[i][0]===Key && link_key_door[i][1]===Door)
        {
            return true;
        }
    }
    return false;
}

    //{Id: , type: , description: },*/