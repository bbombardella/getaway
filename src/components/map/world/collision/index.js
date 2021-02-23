/**Première salle*/
export const collision1 = [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,13,9,9,9,9,17,18,19,9,9,9,9,9,14,-1,-1,-1],
    [-1,-1,-1,-1,12,5,2,2,2,20,40,21,2,2,2,2,6,10,-1,-1,-1],
    [-1,-1,-1,-1,12,3,70,71,0,0,0,0,0,70,71,0,3,10,-1,-1,-1],
    [-1,-1,-1,-1,12,3,0,0,0,0,0,0,0,0,0,0,3,10,-1,-1,-1],
    [-1,-1,-1,-1,12,3,0,0,0,0,0,0,0,0,0,0,3,10,-1,-1,-1],
    [-1,-1,-1,-1,12,3,0,0,0,0,73,74,0,0,0,0,3,10,-1,-1,-1],
    [-1,-1,-1,-1,12,3,0,0,0,0,75,76,0,0,0,0,3,10,-1,-1,-1],
    [-1,-1,-1,-1,12,3,72,0,0,0,0,0,0,0,0,0,3,10,-1,-1,-1],
    [-1,-1,-1,-1,12,8,4,4,4,4,4,4,4,4,4,4,7,10,-1,-1,-1],
    [-1,-1,-1,-1,16,11,11,11,11,11,11,11,11,11,11,11,11,15,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
];

/**Salle test*/
export const collision2 = [
    [13,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,14],
    [12,5,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,6,10],
    [12,3,70,71,0,0,0,0,0,0,0,0,0,0,70,71,0,0,0,3,10],
    [12,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,10],
    [12,3,0,0,73,74,0,0,0,0,0,0,0,0,72,0,0,0,0,3,10],
    [12,3,0,0,75,76,0,0,0,0,0,0,0,0,0,0,0,0,0,3,10],
    [12,3,0,0,0,0,0,0,0,73,74,0,0,0,0,0,0,0,0,3,10],
    [12,3,0,0,0,0,0,0,0,75,76,0,0,0,0,0,0,0,0,3,10],
    [12,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,10],
    [12,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,72,0,0,3,10],
    [12,3,72,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,10],
    [12,8,4,4,4,4,4,4,4,25,41,26,4,4,4,4,4,4,4,7,10],
    [16,11,11,11,11,11,11,11,11,22,23,24,11,11,11,11,11,11,11,11,15],
];

/**Ici c'est le sous-sol*/
export const collision3 = [
    [69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69],
    [69,80,80,79,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,69],
    [83,80,80,79,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,69],
    [84,80,80,79,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,69],
    [98,80,80,79,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,69],
    [69,80,80,79,78,78,78,78,78,78,78,78,78,78,78,79,79,80,80,79,69],
    [69,78,78,78,78,78,78,78,78,78,78,78,78,78,78,79,80,80,80,80,69],
    [69,78,78,78,78,78,78,78,78,78,78,78,78,78,78,79,80,80,80,80,69],
    [69,78,78,78,78,78,78,78,78,78,78,78,78,78,78,79,80,80,80,80,69],
    [69,78,78,78,78,78,78,78,78,78,78,78,78,78,78,79,80,80,80,80,69],
    [69,78,78,78,78,78,78,78,78,78,78,78,78,78,78,79,80,81,82,80,69],
    [69,78,78,78,78,78,78,78,78,78,78,78,78,78,78,79,80,80,80,80,69],
    [69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69,69],
];

/**Ici c'est le chemin de gauche*/
export const collision4 = [
    [92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92],
    [92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92],
    [92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92],
    [86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86],
    [85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85],
    [88,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,89],
    [88,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,89],
    [88,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,89],
    [85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85],
    [86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86],
    [92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92],
    [92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92],
    [92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92],
];

/**Ici c'est le chemin croisement*/
export const collision5 = [
    [92,92,92,92,92,92,92,86,95,44,44,44,94,86,92,92,92,92,92,92,92],
    [92,92,92,92,92,92,92,86,95,87,87,87,94,86,92,92,92,92,92,92,92],
    [92,92,92,92,92,92,92,86,95,87,87,87,94,86,92,92,92,92,92,92,92],
    [86,86,86,86,86,86,86,86,95,87,87,87,94,86,86,86,86,86,86,86,86],
    [85,85,85,85,85,85,85,85,96,87,87,87,96,85,85,85,85,85,85,85,85],
    [42,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,43],
    [42,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,43],
    [42,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,43],
    [85,85,85,85,85,85,85,85,97,87,87,87,97,85,85,85,85,85,85,85,85],
    [86,86,86,86,86,86,86,86,95,87,87,87,94,86,86,86,86,86,86,86,86],
    [92,92,92,92,92,92,92,86,95,87,87,87,94,86,92,92,92,92,92,92,92],
    [92,92,92,92,92,92,92,86,95,87,87,87,94,86,92,92,92,92,92,92,92],
    [92,92,92,92,92,92,92,86,95,91,91,91,94,86,92,92,92,92,92,92,92],
];

/**Chemin du haut*/
export const collision6 = [
    [92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92],
    [92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92],
    [92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92],
    [86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,86],
    [85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85],
    [47,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,89],
    [47,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,89],
    [47,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,89],
    [85,85,85,85,85,85,85,85,99,87,87,87,100,85,85,85,85,85,85,85,85],
    [86,86,86,86,86,86,86,86,95,87,87,87,94,86,86,86,86,86,86,86,86],
    [92,92,92,92,92,92,92,86,95,87,87,87,94,86,92,92,92,92,92,92,92],
    [92,92,92,92,92,92,92,86,95,87,87,87,94,86,92,92,92,92,92,92,92],
    [92,92,92,92,92,92,92,86,95,45,45,45,94,86,92,92,92,92,92,92,92],
];

/**Chemin du bas*/
export const collision7 = [
    [92,92,92,92,92,92,92,86,95,90,90,90,94,86,92,92,92,92,92,92,92],
    [92,92,92,92,92,92,92,86,95,87,87,87,94,86,92,92,92,92,92,92,92],
    [92,92,92,92,92,92,92,86,95,87,87,87,94,86,92,92,92,92,92,92,92],
    [86,86,86,86,86,86,86,86,95,87,87,87,94,86,92,92,92,92,92,92,92],
    [85,85,85,85,85,85,85,85,102,87,87,87,94,86,92,92,92,92,92,92,92],
    [50,87,87,87,87,87,87,87,87,87,87,87,94,86,92,92,92,92,92,92,92],
    [50,87,87,87,87,87,87,87,87,87,87,87,94,86,92,92,92,92,92,92,92],
    [50,87,87,87,87,87,87,87,87,87,87,87,94,86,92,92,92,92,92,92,92],
    [85,85,85,85,85,85,85,85,85,85,85,85,101,86,92,92,92,92,92,92,92],
    [86,86,86,86,86,86,86,86,86,86,86,86,86,86,92,92,92,92,92,92,92],
    [92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92],
    [92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92],
    [92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92],
];

/**Chemin pont cassé*/
export const collision8 = [
    [92,92,92,92,92,92,108,108,108,108,108,92,92,92,92,92,92,92,92,92,92],
    [92,92,92,92,92,92,108,108,108,108,108,92,92,92,92,92,92,92,92,92,92],
    [92,92,92,92,92,92,108,108,108,108,108,92,92,92,92,92,92,92,92,92,92],
    [86,86,86,86,86,86,110,110,110,110,110,86,86,86,86,86,86,86,86,86,86],
    [85,85,85,85,103,85,109,109,109,109,109,85,85,85,85,85,85,85,85,85,85],
    [46,87,87,87,87,87,104,109,109,109,106,87,87,87,87,87,87,87,87,87,89],
    [46,87,87,87,87,87,104,109,109,109,106,87,87,87,87,87,87,87,87,87,89],
    [46,87,87,87,87,87,104,109,109,109,106,87,87,87,87,87,87,87,87,87,89],
    [85,85,85,85,85,85,105,109,109,109,107,85,85,85,85,85,85,85,85,85,85],
    [86,86,86,86,86,86,111,111,111,111,111,86,86,86,86,86,86,86,86,86,86],
    [92,92,92,92,92,92,108,108,108,108,108,92,92,92,92,92,92,92,92,92,92],
    [92,92,92,92,92,92,108,108,108,108,108,92,92,92,92,92,92,92,92,92,92],
    [92,92,92,92,92,92,108,108,108,108,108,92,92,92,92,92,92,92,92,92,92],
];

/**Entrée du château*/
export const collision9 = [
    [92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,108,108,108,108,108,108],
    [92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,108,108,108,108,108,108],
    [92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,108,108,108,108,108,108],
    [86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,110,110,110,110,110,113],
    [85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,109,109,109,109,109,114],
    [88,87,87,87,87,87,87,87,87,87,87,87,87,87,87,112,112,112,112,112,116],
    [88,87,87,87,87,87,87,87,87,87,87,87,87,87,87,112,112,112,112,112,117],
    [88,87,87,87,87,87,87,87,87,87,87,87,87,87,87,112,112,112,112,112,118],
    [85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,105,105,105,105,105,115],
    [86,86,86,86,86,86,86,86,86,86,86,86,86,86,86,110,110,110,110,110,113],
    [92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,108,108,108,108,108,108],
    [92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,108,108,108,108,108,108],
    [92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,108,108,108,108,108,108],
];

/**Bibliothèque*/
export const collision10 = [
    [600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600],
    [600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600],
    [600,600,601,601,602,601,601,602,601,601,602,601,601,602,601,601,602,601,601,600,600],
    [600,600,601,601,602,601,601,602,601,601,602,601,601,602,601,601,602,601,601,600,600],
    [600,600,601,601,602,601,601,602,601,601,602,601,601,602,601,601,602,601,601,600,600],
    [600,600,601,601,601,601,601,601,601,601,601,601,601,601,601,601,601,601,601,600,600],
    [600,600,601,601,601,601,601,601,601,601,601,601,601,601,601,601,601,601,601,48,48],
    [600,600,601,601,601,601,601,601,601,601,601,601,601,601,601,601,606,606,606,600,600],
    [600,600,601,601,602,601,601,602,601,601,602,601,601,602,601,601,606,603,601,600,600],
    [600,600,601,601,602,601,601,602,601,601,602,601,601,602,601,601,606,601,601,600,600],
    [600,600,601,601,602,601,601,602,601,601,602,601,601,602,601,601,601,601,601,600,600],
    [600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600],
    [600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600],
];

/**Fontaine*/
export const collision11 = [
    [610,610,610,610,610,610,610,610,610,610,610,610,610,610,610,610,610,610,610,610,610],
    [610,610,610,610,610,610,610,610,610,610,610,610,610,610,610,610,610,610,610,610,610],
    [610,610,601,601,601,601,601,601,601,601,601,601,601,601,601,601,601,601,601,610,610],
    [610,610,601,601,601,601,601,601,601,601,601,601,601,601,601,601,601,601,601,610,610],
    [610,610,601,601,602,602,602,602,602,601,601,601,601,601,601,601,601,601,601,610,610],
    [610,610,601,601,602,602,602,602,602,608,603,608,608,608,608,608,608,608,608,608,49],
    [610,610,601,601,602,602,602,602,602,607,607,607,607,607,607,607,607,607,607,607,49],
    [610,610,601,601,602,602,602,602,602,608,608,608,608,608,608,608,608,608,608,608,49],
    [610,610,601,601,602,602,602,602,602,601,601,601,601,601,601,601,601,601,601,610,610],
    [610,610,601,601,601,601,601,601,601,601,601,601,601,601,601,601,601,601,601,610,610],
    [610,610,601,601,601,601,601,601,601,601,601,601,601,601,601,601,601,601,601,610,610],
    [610,610,610,610,610,610,610,610,610,610,610,610,610,610,610,610,610,610,610,610,610],
    [610,610,610,610,610,610,610,610,610,610,610,610,610,610,610,610,610,610,610,610,610],
]
