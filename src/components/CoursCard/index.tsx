import styles from './coursCard.module.css'; // Assurez-vous que le chemin est correct

import {CoursItem} from '../../types/cours';
import { CategoryItem } from '../../types/categorie';



interface CoursCardProps {
  cours: CoursItem; // Utilisez le type que vous avez défini
  category: CategoryItem; // Utilisez le type que vous avez défini
}

function CoursCard({ cours, category }: CoursCardProps) {
  const categoryStyle = category ? styles[category.slug] || styles.default : styles.default;

  return (
    <div className={`${styles.card} ${categoryStyle}`}>
      <h2>{cours.title.rendered}</h2>
      <p>{category.name}</p> {/* Afficher le nom de la catégorie */}
      {/* Afficher les autres détails du cours comme souhaité */}
    </div>
  );
}



export default CoursCard;
