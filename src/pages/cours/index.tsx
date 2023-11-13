import Image from 'next/image';

// Types pour les propriétés d'un cours et pour l'objet média
interface MediaItem {
  id: number;
  source_url: string;
}

interface CategoryItem {
  id: number;
  name: string;
  slug: string;
}

interface CoursItem {
  id: number;
  title: { rendered: string };
  featured_media: number;
  excerpt: { rendered: string };
  media_details?: MediaItem;
  categories: number[];
}

interface CoursListProps {
  cours: CoursItem[];
  categories: CategoryItem[];
}

// Le composant qui liste les cours
function CoursList({ cours, categories }: CoursListProps) {
  // Fonction pour trouver le nom de la catégorie par ID
  const getCategoryName = (categoryId: number) => {
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.name : 'Unknown Category';
  };

  return (
    <div>
      {cours.map((coursItem) => (
        <div key={coursItem.id} style={{ marginBottom: '2rem' }}>
          <h2>{coursItem.title.rendered}</h2>
          {coursItem.media_details && (
            <Image
              src={coursItem.media_details.source_url}
              alt={`Image du cours ${coursItem.title.rendered}`}
              width={500}
              height={300}
              unoptimized={true}
            />
          )}
          <div dangerouslySetInnerHTML={{ __html: coursItem.excerpt.rendered }} />
          <div>
            Categories: {coursItem.categories.map((id) => (
              <span key={id} style={{ marginRight: '10px', display: 'inline-block' }}>
                {getCategoryName(id)}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// La fonction getStaticProps pour récupérer les données de l'API
export async function getStaticProps() {
  // Récupérer les données des cours
  const coursRes = await fetch('https://www.headless.the-pixel-family.com/wp-json/wp/v2/cours');
  let cours: CoursItem[] = await coursRes.json();

  // Récupérer les catégories
  const categoriesRes = await fetch('https://www.headless.the-pixel-family.com/wp-json/wp/v2/categories');
  const categories: CategoryItem[] = await categoriesRes.json();

  // Récupérer l'URL de l'image pour chaque cours
  for (const coursItem of cours) {
    const mediaRes = await fetch(`https://www.headless.the-pixel-family.com/wp-json/wp/v2/media/${coursItem.featured_media}`);
    const media: MediaItem = await mediaRes.json();
    coursItem.media_details = media;
  }

  return {
    props: {
      cours,
      categories,
    },
  };
}

// Le composant de la page qui utilise CoursList
export default function CoursPage({ cours, categories }: CoursListProps) {
  return (
    <div>
      <h1>Liste des Cours</h1>
      <CoursList cours={cours} categories={categories} />
    </div>
  );
}
