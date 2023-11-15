import React, { useEffect, useState } from 'react';
import CoursCard from '../../../components/CoursCard/CoursCard';
import { fetchCours } from '../../../api/coursApi';
import { fetchCategories } from '../../../api/categoriesApi';
import {CoursItem} from '../../../types/cours';
import {CategoryItem} from '../../../types/categorie';


// Le composant qui liste les cours
const CoursList: React.FC = () => {
    const [cours, setCours] = useState<CoursItem[]>([]);
    const [categories, setCategories] = useState<CategoryItem[]>([]);
  

  useEffect(() => {
    async function fetchData() {
      try {
        const coursData = await fetchCours();
        const categoriesData = await fetchCategories();
        setCours(coursData);
        setCategories(categoriesData);
      } catch (error) {
        console.error(error);
      }
    }
    
    fetchData();
  }, []);

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
};

export default CoursList;
