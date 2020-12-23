import React from 'react';

export default function Introduction(url){

    const INTRO = {
        1: "Vous vous relevez, titubant, votre tete vous fait mal, un terrible sifflement dans les oreilles.",
        2: "Votre vue est floue, vous percevez une faible lueur, vous vous asseyez, rassemblant vos souvenirs, comment êtes-vous arrivé ici ?",
        3: "Où étiez-vous avant ?",
        4: "Qui êtes-vous ?",
        5: "Submergé par vos questions, vous n’avez pas remarqué que votre vue était revenue, que votre mal de tête s’était apaisé et que le sifflement s’était évanoui.",
        6: "Vous regardez autour de vous, une pièce, sombre, éclairée par un filet de lumière traversant le mur. Vous vous approchez, observez l’extérieur.",
        7: "Ce n’est pas le monde que vous connaissez, vous pensez reconnaitre des arbres, mais ils sont différents, plus volumineux, leurs branches plus aventureuses, arborant des couleurs agréables, certains ont des feuilles d’un rose flamand, d’autres d’un jaune, vif, rien d’un arbre dont les feuilles mourraient.",
        8: "Ces couleurs atypiques forment une forêt des plus particulières, gouvernée par un arbre paré d’un incroyable feuillage violacé.",
        9: "Il est si imposant, si grand que vous ne pouvez en voir le sommet par votre ouverture.",
        10: "Cet arbre roi est entouré d’une vaste clairière dans laquelle, vous distinguez une faune des plus étranges, non loin des animaux que vous aviez l’habitude de côtoyer, mais sans en être, ce qui semble être une biche à six pattes avance tranquillement vers un point d’eau accompagné d’un lion ailé à la crinière imposante et rayonnante…",
        11: "Un lion dans une clairière, « suis-je fou ? », vous vous attardez sur autre chose, par cette brèche, vous pouvez contempler le ciel, un ciel brillant, bercé par l’éclat de deux magnifiques astres, l’un plus rouge que les enfers, le second d’un bleu calme et paisible.",
        12: "Un courant d’air frais, pur vous effleure le visage, il est pur, vous frémissez, à quand remonte la dernière fois que vous avez respiré un air de cette qualité ?",
        13: "Vous ne savez plus, vous avez oublié.",
        14: "La mémoire rafraichie, vous vous retournez et faites face à cette pièce sombre, déterminé à comprendre comment vous avez atterri ici.",
    }

    const NUMPHRASE = 1;

    return (
        {INTRO.map((phrase, index) => <p key={index}>phrase</p>)}
    )
}