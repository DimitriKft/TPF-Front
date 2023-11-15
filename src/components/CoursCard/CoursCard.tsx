import styles from './coursCard.module.css'; // Assurez-vous que le chemin est correct

import {CoursItem} from '../../types/cours';
import {CategoryItem} from '../../types/categorie';



interface CoursCardProps {
  cours: CoursItem; // Utilisez le type que vous avez défini
  category: CategoryItem; // Utilisez le type que vous avez défini
}

function CoursCard({ cours, category }: CoursCardProps) {
  // Style de fond basé sur la catégorie
  const categoryStyle = category ? styles[category.slug] || styles.default : styles.default;

  // Style de texte basé sur la catégorie
  const textStyle = category ? `${category.slug}Text` : '';

  return (
    <div className={`${styles.card} ${categoryStyle}`}>
      <h2 className={styles[textStyle]}>{cours.title.rendered}</h2>
      <p className={styles[textStyle]}>{category.name}</p> {/* Afficher le nom de la catégorie */}
      {/* Afficher les autres détails du cours comme souhaité */}
    </div>
  );
}



export default CoursCard;
