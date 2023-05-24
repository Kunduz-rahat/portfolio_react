import React from 'react'
import { SocialIcons } from './SocialIcons';

export const Footer = () => {
    return (
        <footer className=" mt-5 pt-10">
          <div className="w-10/12 mx-auto">
          <SocialIcons/>
            <div className="md:flex justify-center md:justify-between text-center ">
              <p className="font-playfair font-semibold text-2xl text-yellow">
                Kunduz Rakhat
              </p>
              <p className="font-playfair text-md text-yellow">
                ©2023  All Rights Reserved.
              </p>
            </div>
          </div>
        </footer>
      );
}
