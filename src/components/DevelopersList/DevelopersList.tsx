import { ICONS } from '../../constants/icons';
import avatar from '../../assets/avatar.jpg';
import { developersArr } from './developers-data';

export default function DevelopersList() {
  return (
    <div className="pb-30 bg-[#f5f4fa]">
      <h2 className="my-20 text-center text-accent text-5xl font-team-title">Project team:</h2>
      <ul className="w-full flex flex-wrap gap-20 justify-center">
        {developersArr.map((d) => (
          <li
            key={d.id}
            className="w-[270px] h-[428px] rounded-[10px] overflow-hidden bg-secondary-100
                shadow-[0px_1px_3px_rgba(0,0,0,0.12),0px_1px_1px_rgba(0,0,0,0.14),0px_2px_1px_rgba(0,0,0,0.2)]"
          >
            <div className="h-[60%] flex justify-center items-center">
              <img
                src={d ? d.image : avatar}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = avatar;
                }}
                alt={d.name}
                className="size-3/4 object-cover rounded-[50%]"
              />
            </div>
            <div className="flex flex-col items-center justify-center p-5 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{d.name || 'No name'}</h3>
              <p className="text-sm text-gray-500 mb-1">{d.title}</p>
              <p className="font-bold text-sm text-gray-500 mb-5">{d.role}</p>
              <div className="flex justify-center gap-4 text-gray-400">
                <div
                  className="cursor-pointer hover:text-accent transition-colors duration-200"
                  title="Instagram"
                  role="img"
                  aria-label="Instagram icon"
                >
                  {ICONS.INSTAGRAM}
                </div>
                <div
                  className="cursor-pointer hover:text-accent transition-colors duration-200"
                  title="Twitter"
                  role="img"
                  aria-label="Twitter icon"
                >
                  {ICONS.TWITTER}
                </div>
                <div
                  className="cursor-pointer hover:text-accent transition-colors duration-200"
                  title="Facebook"
                  role="img"
                  aria-label="Facebook icon"
                >
                  {ICONS.FACEBOOK}
                </div>
                <div
                  className="cursor-pointer hover:text-accent transition-colors duration-200"
                  title="LinkedIn"
                  role="img"
                  aria-label="LinkedIn icon"
                >
                  {ICONS.LINKEDIN}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
