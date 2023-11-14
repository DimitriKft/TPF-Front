export interface CoursItem {
    id: number; 
    title: { rendered: string };
    featured_media: number;
    excerpt: { rendered: string };
    media_details?: MediaItem;
    categories: number[];
  }
  
  export interface CoursListProps {
    cours: CoursItem[];
    categories: CategoryItem[];
  }