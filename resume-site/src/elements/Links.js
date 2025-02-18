import { GiMoebiusTriangle } from "react-icons/gi";
import { Link } from "react-router-dom";

  const LinkIcon = ({ icon, text, link }) => (
    <div className="linkbar-icon group">
      <span class="linkbar-tooltip group-hover:scale-100 rotate-45">
        {text}
      </span>

      <span>
        <Link to={link}>{icon}</Link>
      </span>
    </div>
  );
  
  const Links = () => {
    return (
      <div className='flex z-40 bg-transparent h-auto ml-0
                      2xl:w-2/3 2xl:mx-12
                      xl:w-1/3  xl:mx-12'>
        <div className="flex flex-row space-x-20 ">
          <LinkIcon icon={<GiMoebiusTriangle size="36" />} text={'Home'} link={'/'} />

          <LinkIcon icon={<GiMoebiusTriangle size="36" />} text={'Projects'} link={'/projects'} />

          <LinkIcon icon={<GiMoebiusTriangle size="36" />} text={'Contact'} link={'/contact'} />

          <LinkIcon icon={<GiMoebiusTriangle size="36" />} text={'Resume'} link={'/resume'} />
           
        </div>
      </div>
    );
  }
  
export default Links;