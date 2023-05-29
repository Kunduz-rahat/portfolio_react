import telegram from "../assets/telegram.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";

export const SocialIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/kunduz_rakhat/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src={instagram}  className="w-[40px] "/>
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com/kunduz.rakhat"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src={facebook}  className="w-[40px] " />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://t.me/kunduz_rakhat"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="telegram-link" className="w-[40px] " src={telegram} />
      </a>
     
    </div>
  );
};
