export default function RemoverEspeciais(texto) {
    // eliminando acentuação

texto = texto.replace(/[ÀÁÂÃÄÅàáâãäå]/,"a");
texto = texto.replace(/[ÈÉÊËéèê]/,"e");
texto = texto.replace(/[íïÍÏ]/,"i");
texto = texto.replace(/[óôõöÓÔÕÖ]/,"o");
texto = texto.replace(/[úÚ]/,"u");
texto = texto.replace(/[çÇ]/,"c");
texto = texto.replace(/[ñÑ]/,"n");
return texto.replace(/[^a-z0-9]/gi,''); 
}