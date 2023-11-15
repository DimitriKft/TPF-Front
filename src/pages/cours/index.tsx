
//Composant
import Header from '@/components/Header/header'
import CoursList from './CoursList/CoursList'
//Types
import {CoursItem} from '../../types/cours';
import {CoursListProps} from '../../types/cours';

// Le composant de la page qui utilise CoursList
const CoursPage: React.FC<CoursListProps> = ({ cours, categories }) => {
  return (
    <div>
      <Header/>
      <h1>Liste des Cours</h1>
      <CoursList/>
    </div>
  );
};

export default CoursPage;

