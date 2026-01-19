import { createClient, type EntrySkeletonType, type Asset } from 'contentful';
import MenuClient from './MenuClient';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string | null;
  category: string;
}

interface MenuEntrySkeleton extends EntrySkeletonType {
  fields: {
    title: string;
    description?: string;
    price?: number;
    image?: Asset;
  };
  contentTypeId: 'menu';
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

const RestaurantMenuPage = async () => {
  const response = await client.getEntries<MenuEntrySkeleton>({
    content_type: 'menu',
  });

  const allItems: MenuItem[] = response.items.map((item) => ({
    id: item.sys.id,
    name: item.fields.title,
    description: item.fields.description || '',
    price: item.fields.price ? `$${item.fields.price}` : '',
    image: item.fields.image
      ? `https:${(item.fields.image as Asset).fields.file?.url}`
      : null,
    category: item.metadata.concepts?.[0]?.sys.id || 'uncategorized',
  }));

  return (
    <div className="container-fluid py-5" style={{ backgroundColor: 'var(--primary)', color: 'var(--highlight)', minHeight: '100vh' }}>
      <div className="container">
        <h1 className="text-center mb-5 fw-bold">Restaurant Menu</h1>
        <MenuClient initialItems={allItems} />
      </div>
    </div>
  );
};

export default RestaurantMenuPage;
