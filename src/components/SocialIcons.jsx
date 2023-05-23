import telegram from "../assets/free-icon-telegram-logo-87413.png";
import facebook from "../assets/free-icon-facebook-733547.png";
import instagram from "../assets/free-icon-instagram-2111463.png";

export const SocialIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/kunduz_rakhat/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src={instagram}  className="w-[50px] "/>
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com/kunduz.rakhat"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src={facebook}  className="w-[50px] " />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://t.me/kunduz_rakhat"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="telegram-link" className="w-[50px] " src={telegram} />
      </a>
     
    </div>
  );
};
