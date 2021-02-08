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
    [92,92,92,92,92,92,92,86,95,90,90,90,94,86,92,92,92,92,92,92,92],
    [92,92,92,92,92,92,92,86,95,87,87,87,94,86,92,92,92,92,92,92,92],
    [92,92,92,92,92,92,92,86,95,87,87,87,94,86,92,92,92,92,92,92,92],
    [86,86,86,86,86,86,86,86,95,87,87,87,94,86,86,86,86,86,86,86,86],
    [85,85,85,85,85,85,85,85,96,87,87,87,96,85,85,85,85,85,85,85,85],
    [88,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,89],
    [88,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,89],
    [88,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,89],
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
    [88,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,89],
    [88,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,89],
    [88,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,87,89],
    [85,85,85,85,85,85,85,85,99,87,87,87,100,85,85,85,85,85,85,85,85],
    [86,86,86,86,86,86,86,86,95,87,87,87,94,86,86,86,86,86,86,86,86],
    [92,92,92,92,92,92,92,86,95,87,87,87,94,86,92,92,92,92,92,92,92],
    [92,92,92,92,92,92,92,86,95,87,87,87,94,86,92,92,92,92,92,92,92],
    [92,92,92,92,92,92,92,86,95,91,91,91,94,86,92,92,92,92,92,92,92],
];

/**Chemin du bas*/
export const collision7 = [
    [92,92,92,92,92,92,92,86,95,90,90,90,94,86,92,92,92,92,92,92,92],
    [92,92,92,92,92,92,92,86,95,87,87,87,94,86,92,92,92,92,92,92,92],
    [92,92,92,92,92,92,92,86,95,87,87,87,94,86,92,92,92,92,92,92,92],
    [86,86,86,86,86,86,86,86,95,87,87,87,94,86,92,92,92,92,92,92,92],
    [85,85,85,85,85,85,85,85,102,87,87,87,94,86,92,92,92,92,92,92,92],
    [88,87,87,87,87,87,87,87,87,87,87,87,94,86,92,92,92,92,92,92,92],
    [88,87,87,87,87,87,87,87,87,87,87,87,94,86,92,92,92,92,92,92,92],
    [88,87,87,87,87,87,87,87,87,87,87,87,94,86,92,92,92,92,92,92,92],
    [85,85,85,85,85,85,85,85,85,85,85,85,101,86,92,92,92,92,92,92,92],
    [86,86,86,86,86,86,86,86,86,86,86,86,86,86,92,92,92,92,92,92,92],
    [92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92],
    [92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92],
    [92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92,92],
]