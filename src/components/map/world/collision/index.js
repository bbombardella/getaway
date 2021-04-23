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
    [69,80,80,79,78,78,78,78,78,80,78,78,78,79,78,78,79,78,78,78,69],
    [83,80,80,79,78,79,78,78,78,78,78,79,78,78,78,79,78,78,78,79,69],
    [84,80,80,79,78,78,78,78,79,78,78,78,78,78,78,78,78,79,78,78,69],
    [98,80,80,79,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,78,69],
    [69,80,80,79,79,78,78,78,78,78,78,78,78,78,79,79,79,80,80,79,69],
    [69,78,79,79,79,79,79,78,78,78,78,78,79,78,79,79,80,80,80,80,69],
    [69,78,78,78,78,78,78,79,78,78,78,78,78,78,78,79,80,80,80,80,69],
    [69,78,79,78,78,78,78,78,78,78,78,78,78,79,78,79,80,80,80,80,69],
    [69,78,78,78,79,78,78,78,79,78,78,78,78,78,78,79,80,80,80,80,69],
    [69,78,78,79,78,78,78,78,78,78,78,79,78,78,78,79,80,81,82,80,69],
    [69,79,78,78,78,78,80,78,78,78,78,78,78,78,79,79,80,80,80,80,69],
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
    [85,85,85,85,85,85,85,85,67,87,87,87,96,85,85,85,85,85,85,85,85],
    [42,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,43],
    [42,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,43],
    [42,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,43],
    [85,85,85,85,85,85,85,85,68,87,87,87,97,85,85,85,85,85,85,85,85],
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
    [47,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,52],
    [47,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,52],
    [47,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,52],
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
    [46,87,87,87,87,87,104,109,109,109,106,87,87,87,87,87,87,87,87,87,53],
    [46,87,87,87,87,87,104,109,109,109,106,87,87,87,87,87,87,87,87,87,53],
    [46,87,87,87,87,87,104,109,109,109,106,87,87,87,87,87,87,87,87,87,53],
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
    [54,87,87,87,87,87,87,87,87,87,87,87,87,87,87,112,112,112,112,112,116],
    [54,87,87,87,87,87,87,87,87,87,87,87,87,87,87,112,112,112,112,112,117],
    [54,87,87,87,87,87,87,87,87,87,87,87,87,87,87,112,112,112,112,112,118],
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
    [600,600,601,601,202,601,601,602,601,601,602,601,601,602,601,601,602,601,601,600,600],
    [600,600,601,601,602,601,601,602,601,601,602,601,601,602,601,601,602,601,601,600,600],
    [600,600,601,601,602,601,601,602,601,601,602,601,601,602,601,601,602,601,601,600,600],
    [600,600,601,601,601,601,601,601,601,601,601,601,601,601,601,601,601,601,601,600,600],
    [600,600,601,601,601,601,601,601,601,601,601,601,601,601,601,601,601,601,601,48,48],
    [600,600,601,601,601,601,601,601,601,601,601,601,601,601,601,601,606,606,606,600,600],
    [600,600,601,601,201,601,601,602,601,601,602,601,601,602,601,601,606,603,601,600,600],
    [600,600,601,601,602,601,601,200,601,601,602,601,601,602,601,601,606,601,601,600,600],
    [600,600,601,601,602,601,601,602,601,601,602,601,601,602,601,601,601,601,601,600,600],
    [600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600],
    [600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600],
];

/**Fontaine*/
export const collision11 = [
    [532,532,532,532,532,532,532,532,532,532,532,532,532,532,532,532,532,532,532,532,532],
    [532,535,533,533,533,533,533,533,533,533,533,533,533,533,533,533,533,533,533,536,532],
    [532,535,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,536,532],
    [532,535,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,536,532],
    [532,535,500,500,501,502,503,504,505,500,500,500,500,500,500,500,500,500,500,537,533],
    [532,535,500,500,506,507,508,509,510,527,526,527,527,527,527,527,527,527,527,527,528],
    [532,535,500,500,511,512,513,514,515,87,87,87,87,87,87,87,87,87,87,87,49],
    [532,535,500,500,516,517,518,519,520,527,527,527,527,527,527,527,527,527,527,530,529],
    [532,535,500,500,521,522,523,524,525,500,500,500,500,500,500,500,500,500,500,536,532],
    [532,535,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,500,536,532],
    [532,535,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,531,536,532],
    [532,532,532,532,532,532,532,532,532,532,532,532,532,532,532,532,532,532,532,532,532],
    [532,532,532,532,532,532,532,532,532,532,532,532,532,532,532,532,532,532,532,532,532],
]

/**Colisée*/
export const collision12 = [
    [125,121,121,121,122,121,121,121,122,121,121,121,122,121,121,121,122,121,121,121,124],
    [121,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,121],
    [121,120,120,120,140,120,120,120,139,120,120,120,134,120,120,120,120,133,120,120,121],
    [121,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,121],
    [129,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,123],
    [121,120,120,120,120,120,120,120,138,120,120,120,120,120,137,120,132,120,120,120,121],
    [121,145,120,120,120,120,142,120,120,120,120,120,120,120,120,120,120,120,120,120,121],
    [121,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,121],
    [129,120,120,120,120,120,120,120,120,120,120,120,135,120,136,120,120,120,120,120,123],
    [121,120,120,120,141,120,143,120,120,120,120,120,120,120,120,120,120,120,120,120,121],
    [121,120,120,120,120,120,120,120,144,120,120,120,120,120,120,120,120,131,120,120,130],
    [121,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,120,121],
    [126,121,121,121,128,121,121,121,128,55,55,55,128,121,121,121,128,121,121,121,127],
]

//Salle entree du château
export const collision13 = [
    [600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600],
    [600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600],
    [600,600,601,601,601,601,601,601,601,602,57,602,601,601,601,601,601,601,601,600,600],
    [600,600,56,601,601,601,601,601,601,602,605,602,601,601,607,607,607,601,601,600,600],
    [600,600,56,601,601,601,601,601,601,601,605,601,601,601,607,607,607,601,601,600,600],
    [600,600,601,601,601,601,601,601,601,601,605,601,601,601,607,607,607,601,601,600,600],
    [600,60,605,605,605,605,605,605,605,605,605,601,601,601,601,601,601,601,601,600,600],
    [600,600,601,601,601,601,601,601,601,601,601,601,601,601,601,608,608,601,601,600,600],
    [600,600,601,601,601,601,601,601,601,610,601,601,601,601,601,608,608,601,601,600,600],
    [600,600,601,601,601,610,601,601,601,601,601,601,601,601,601,601,601,605,58,600,600],
     [600,600,601,601,601,601,601,601,601,601,601,601,610,601,601,601,601,605,58,600,600],
    [600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600],
    [600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600],
]

//Salle du trône
export const collision14 = [
    [609,609,609,609,600,600,601,601,611,611,611,611,611,601,601,600,600,609,609,609,609],
    [609,609,609,609,600,600,601,601,611,611,612,611,611,601,601,600,600,609,609,609,609],
    [609,609,609,609,600,600,601,601,611,611,147,611,611,601,601,600,600,609,609,609,609],
    [609,609,609,609,600,600,601,601,601,601,605,601,601,601,601,600,600,609,609,609,609],
    [609,609,609,609,600,600,601,601,601,601,605,601,601,601,601,600,600,609,609,609,609],
    [609,609,609,609,600,600,601,601,601,601,605,601,601,601,601,600,600,609,609,609,609],
    [609,609,609,609,600,600,601,601,601,601,605,601,601,601,601,600,600,609,609,609,609],
    [609,609,609,609,600,600,601,601,601,601,605,601,601,601,601,600,600,609,609,609,609],
    [609,609,609,609,600,600,601,601,601,601,605,601,601,601,601,600,600,609,609,609,609],
    [609,609,609,609,600,600,601,601,601,601,605,601,601,601,601,600,600,609,609,609,609],
    [609,609,609,609,600,600,601,601,601,601,605,601,601,601,601,600,600,609,609,609,609],
    [609,609,609,609,600,600,601,601,601,602,605,602,601,601,601,600,600,609,609,609,609],
    [609,609,609,609,600,600,601,601,601,602,59,602,601,601,601,600,600,609,609,609,609],
]

//Chambre du héro
export const collision15 = [
    [600,600,600,600,600,600,600,602,600,602,602,602,600,602,600,600,600,600,600,600,600],
    [600,600,600,600,600,600,600,203,600,205,206,207,600,203,600,600,600,600,600,600,600],
    [600,600,601,601,601,215,215,601,601,601,601,601,601,601,208,208,208,601,214,600,600],
    [600,600,248,601,601,215,215,601,601,601,601,601,601,601,208,208,208,601,601,600,600],
    [600,600,248,601,601,601,601,601,216,216,216,216,216,601,601,601,601,601,601,600,600],
    [600,600,250,250,250,250,250,601,216,216,216,216,216,601,601,601,601,290,61,600,600],
    [600,600,250,250,250,250,250,601,216,216,216,216,216,601,601,601,601,290,62,600,600],
    [600,600,250,250,250,250,250,601,216,216,216,216,216,601,601,601,601,601,601,600,600],
    [600,600,276,601,601,601,601,601,216,216,216,216,216,601,601,601,601,601,601,600,600],
    [600,600,248,601,601,601,601,601,601,601,601,601,601,601,601,277,277,277,277,600,600],
     [600,600,601,601,601,601,601,601,601,601,601,601,601,601,601,277,277,277,277,600,600],
    [600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600],
    [600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600,600],
]
