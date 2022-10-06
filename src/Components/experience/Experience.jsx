import React from "react";
import "./experience.css";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3 } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { BsBootstrap } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { GrReactjs } from "react-icons/gr";
import { ImProfile } from "react-icons/im";
import { FaShopify } from "react-icons/fa";
import { FaPhotoVideo } from "react-icons/fa"
import { MdDesignServices } from "react-icons/md"
import { CgGoogle } from "react-icons/cg"
import { FaSearchDollar } from "react-icons/fa"
import { FcAdvertising } from "react-icons/fc"

export const Experience = () => {
  return (
    <section id="experience">
      <h5>Que experiencia tenemos</h5>
      <h2>Experiencia</h2>
      <div className="container experience__container">
        <div className="experience__frontend experience__block">
          <h3 className="experience__container-title">Lenguajes y plataformas</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiOutlineHtml5 className="experience__details-icons" />
              <div>
                <h4>HTML</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <TbBrandCss3 className="experience__details-icons" />
              <div>
                <h4>CSS</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <IoLogoJavascript className="experience__details-icons" />
              <div>
                <h4>JavaScript</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsBootstrap className="experience__details-icons" />
              <div>
                <h4>Bootstrap</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <BsGithub className="experience__details-icons" />
              <div>
              <h4>WordPress</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <GrReactjs className="experience__details-icons" />
              <div>
                <h4>React</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
          </div>
        </div>
        {/* END FRONTEND */}
        <div className="experience__backend experience__block">
          <h3 className="experience__container-title">Herramientas</h3>
          <div className="experience__content">
            <article className="experience__details">
              <ImProfile className="experience__details-icons" />
              <div>
                <h4>Publicidad impresa</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <FaPhotoVideo className="experience__details-icons" />
              <div>
                <h4>Video marketing</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <MdDesignServices className="experience__details-icons"/>
              <div>
                <h4>Diseño Grafico</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <FaShopify className="experience__details-icons" />
              <div>
                <h4>Shopify</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <FaSearchDollar className="experience__details-icons" />
              <div>
                <h4>SEO</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <CgGoogle className="experience__details-icons" />
              <div>
                <h4>GMB</h4>
                {/* <small className="text-light">Experienced</small> */}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};
