import { Link } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

export default function HomePage() {
  return (
    <div className="h-screen flex-col flex gap-4 items-center justify-center text-white bg-[url(/home-img-6.png)] bg-no-repeat bg-center bg-cover">
      <h1 className="text-4xl md:text-6xl font-bold text-center drop-shadow-lg">
        TopShop — your store,
        <br /> one click away!
      </h1>
      <Link
        to={ROUTES.PRODUCTS}
        className="px-6 py-3 font-semibold text-white backdrop-blur-sm rounded hover:bg-accent shadow-[0_4px_10px_rgba(0,0,0,0.4)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.5)]"
      >
        Go to Products
      </Link>
    </div>
  );
}
