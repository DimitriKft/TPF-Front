import Image from 'next/image';
//Composant
import CoursCard from '../../components/CoursCard';
//Types
import {CoursItem} from '../../types/cours';
import {CoursListProps} from '../../types/cours';
import {CategoryItem} from '../../types/categorie';
import {MediaItem} from '../../types/media';
//Api
import {fetchCours} from '../../api/coursApi' 
import {fetchCategories} from '../../api/categoriesApi' 
import {fetchMedia} from '../../api/mediaApi' 


/// Le composant qui liste les cours
function CoursList({ cours, categories }: CoursListProps) {
  console.log(cours, categories);
  return (
    <div>
      {cours.map((coursItem) => {
        // Trouvez la catégorie du cours
        const category = categories.find(cat => cat.id === coursItem.categories[0]);

        // Passez la catégorie trouvée ou une valeur par défaut si non trouvée
        return (
          <CoursCard 
            key={coursItem.id} 
            cours={coursItem} 
            category={category || { id: 0, name: 'Unknown', slug: 'default' }}
          />
        );
      })}
    </div>
  );
}

// La fonction getStaticProps pour récupérer les données de l'API
export const getStaticProps = async () => {
  try {
    const cours = await fetchCours();
    const categories = await fetchCategories();

    // Ajouter les détails des médias à chaque cours
    const coursWithMedia = await Promise.all(cours.map(async (item) => {
      const media = await fetchMedia(item.featured_media);
      return { ...item, media_details: media };
    }));

    return {
      props: {
        cours: coursWithMedia,
        categories,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        cours: [],
        categories: [],
      },
    };
  }
};

// Le composant de la page qui utilise CoursList
const CoursPage: React.FC<CoursListProps> = ({ cours, categories }) => {
  return (
    <div>
      <h1>Liste des Cours</h1>
      <CoursList cours={cours} categories={categories} />
    </div>
  );
};

export default CoursPage;