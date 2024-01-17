export const useUtilities = () => {

  const limitCharactere = (data: string, limit: number) => {
    if (data.length <= limit) {
      // Le data est déjà assez court, pas besoin de le réduire
      return data;
    } else {
      // Utiliser la méthode slice pour extraire la partie du data jusqu'au nombre de caractères spécifié
      const texteReduit = data.slice(0, limit);
      return texteReduit + ' ...';
    }
  }

  return {
    limitCharactere
  }
}
