import React from "react";
import Link from "next/link";
import Image from "next/image";

import SocialButton from "./SocialButton";
import CustomButton from "./CustomButton";

const EmailSection = ({profile}) => {
    return (
      <section className="my-5" id="contact">
        <h2 className="text-center mb-4 text-4xl font-bold text-textLightActive dark:text-textDarkActive">
          <span className="text-transparent  bg-clip-text bg-gradient-to-r from-primaryLight-500 to-secondaryLight-500 dark:from-primaryDark-500 dark:to-secondaryDark-500 text-6xl">M<span className="text-4xl">e</span></span> contater
        </h2>
        <div className="bg-[#e5e7eb] dark:bg-black grid grid-cols-[1fr] gap-6 md:grid-cols-[40%_60%] md:gap-12 md:h-auto md:mt-12 md:p-6  mx-auto rounded-2xl">
          <aside className="bg-[#f1f5f9] dark:bg-[rgb(53,52,52)] relative z-[1] p-6 rounded-2xl  md:w-auto md:p-12 md:bottom-0">
            <div className="flex items-center justify-center">
                <Image className="rounded-full" src="/images/gildas.jpg" alt="gildas" width={300} height={300}/>
            </div>
            <p className="text-[0.9rem] mb-8 text-textLightActive dark:text-textDarkActive mt-5">
                Avez-vous un project en tête ?, je serai honorer d&apos;en discuter avec vous. Laissez moi un message en remplissant le formulaire. 
                Je vous répondrai au plus vite.
            </p>
            
            <div className="flex items-center justify-between">
                <SocialButton imageSrc = "/images/facebook.png" title="facebook" link={profile.fblink} />
                <SocialButton imageSrc = "/images/instagram.png" title="instagram" link={profile.instalink} />
                <SocialButton imageSrc = "/images/linkedin.png" title="linkedin" link={profile.linkdinlink} />
            </div>
          </aside>
          <form className="flex flex-col gap-[1.2rem] mt-5 md:mt-0 mb-12 mx-6 md:mr-16  mr-6">
            <div className="flex flex-col md:flex-row gap-[1.2rem] ">
                <input type="text" name="First Name" placeholder="Prénom" required className="md:w-6/12 w-full bg-inputLightColor dark:bg-inputDarkColor text-textLightActive dark:text-textDarkActive focus:border-white p-4"/>
                <input type="text" name="Last Name" placeholder="Nom" required className="md:w-6/12 w-full bg-inputLightColor dark:bg-inputDarkColor text-white p-4"/>
            </div>
            <input type="email" name="Email Adress" placeholder="Email" required className="w-full bg-inputLightColor dark:bg-inputDarkColor text-white p-4"/>
            <textarea name="Message" rows={7} placeholder="Message" required className="w-full bg-inputLightColor dark:bg-inputDarkColor text-white p-4 resize-none h-40"/>
            <CustomButton title="Envoyer" handleClick={()=>{}} style="" />
          </form>
        </div>  
      </section>
    );
}

export default EmailSection;