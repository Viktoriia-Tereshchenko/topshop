import { Link } from 'react-router-dom';
import avatar from '../../assets/avatar.jpg';
import { ICONS } from '../../constants/icons';
import type { User } from '../../types';

type Props = {
  user: User;
};

export default function UserCard({ user }: Props) {
  return (
    <li className="bg-white rounded-2xl overflow-hidden max-w-xs mx-auto flex-shrink-0 scale-[0.66] w-[220px] h-[280px] shadow-[inset_0px_-11px_22px_5px_rgba(66,90,108,0.22)]">
      <Link to={`/users/${user.id}`}>
        <img
          src={user.avatar}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = avatar;
          }}
          alt={user.name}
          className="w-full h-50 object-cover"
        />
      </Link>
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{user.name || 'Без имени'}</h3>
        <p className="text-sm text-gray-500 mb-4">{user.role}</p>
        <div className="flex justify-center gap-4 text-gray-400">
          <div
            className="cursor-pointer hover:text-pink-500 transition-colors duration-200"
            title="Instagram"
            role="img"
            aria-label="Instagram icon"
          >
            {ICONS.INSTAGRAM}
          </div>
          <div
            className="cursor-pointer hover:text-sky-500 transition-colors duration-200"
            title="Twitter"
            role="img"
            aria-label="Twitter icon"
          >
            {ICONS.TWITTER}
          </div>
          <div
            className="cursor-pointer hover:text-blue-600 transition-colors duration-200"
            title="Facebook"
            role="img"
            aria-label="Facebook icon"
          >
            {ICONS.FACEBOOK}
          </div>
          <div
            className="cursor-pointer hover:text-blue-700 transition-colors duration-200"
            title="LinkedIn"
            role="img"
            aria-label="LinkedIn icon"
          >
            {ICONS.LINKEDIN}
          </div>
        </div>
      </div>
    </li>
  );
}
