import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const [hasAnimated, setHasAnimated] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById("contact__section");
    const rect = element.getBoundingClientRect();
    const isInView = rect.top < window.innerHeight && rect.bottom >= 0;

    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      window.removeEventListener("scroll", handleScroll);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasAnimated]);

  return (
    <div className="footer pt-5" id="contact__section">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <motion.h3
              className="mb-3 footer-heading"
              initial={{ opacity: 0, y: -20 }}
              animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              Uk-बाज़ार
            </motion.h3>
            <p>
              We provide the best products inspired by Uttarakhand's culture and
              nature.
            </p>
          </div>
          <div className="col-12 col-md-6 mb-4">
            <div>
              <div className="information">
                <h4 className="mb-4 text-end">Get In Touch</h4>
                <div className="row justify-content-end mb-4">
                  <motion.div
                    className="col-4 social-media border border-dark rounded-circle text-center align-content-center mt-3 me-4"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <svg
                      width="10"
                      height="16"
                      viewBox="0 0 10 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.66488 15.9168H5.99821V9.24183H9.00155L9.33155 5.92516H5.99821V4.25016C5.99821 4.02915 6.08601 3.81719 6.24229 3.66091C6.39857 3.50463 6.61053 3.41683 6.83155 3.41683H9.33155V0.0834961H6.83155C5.72648 0.0834961 4.66667 0.522483 3.88527 1.30388C3.10387 2.08529 2.66488 3.14509 2.66488 4.25016V5.92516H0.998213L0.668213 9.24183H2.66488V15.9168Z"
                        fill="#1E1E1E"
                        fillOpacity="0.75"
                      />
                    </svg>
                  </motion.div>

                  <motion.div
                    className="col-4 social-media border border-dark rounded-circle text-center align-content-center mt-3 me-4"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.99984 0.666504C11.264 0.666504 11.5465 0.674837 12.4348 0.716504C13.3223 0.758171 13.9265 0.897337 14.4582 1.104C15.0082 1.31567 15.4715 1.60234 15.9348 2.06484C16.3586 2.48142 16.6865 2.98533 16.8957 3.5415C17.1015 4.07234 17.2415 4.67734 17.2832 5.56484C17.3223 6.45317 17.3332 6.73567 17.3332 8.99984C17.3332 11.264 17.3248 11.5465 17.2832 12.4348C17.2415 13.3223 17.1015 13.9265 16.8957 14.4582C16.6871 15.0147 16.3591 15.5187 15.9348 15.9348C15.5181 16.3584 15.0143 16.6863 14.4582 16.8957C13.9273 17.1015 13.3223 17.2415 12.4348 17.2832C11.5465 17.3223 11.264 17.3332 8.99984 17.3332C6.73567 17.3332 6.45317 17.3248 5.56484 17.2832C4.67734 17.2415 4.07317 17.1015 3.5415 16.8957C2.98511 16.6869 2.48111 16.359 2.06484 15.9348C1.64101 15.5183 1.31311 15.0144 1.104 14.4582C0.897337 13.9273 0.758171 13.3223 0.716504 12.4348C0.677337 11.5465 0.666504 11.264 0.666504 8.99984C0.666504 6.73567 0.674837 6.45317 0.716504 5.56484C0.758171 4.6765 0.897337 4.07317 1.104 3.5415C1.31253 2.98499 1.64051 2.48094 2.06484 2.06484C2.48123 1.64086 2.98519 1.31295 3.5415 1.104C4.07317 0.897337 4.6765 0.758171 5.56484 0.716504C6.45317 0.677337 6.73567 0.666504 8.99984 0.666504ZM8.99984 4.83317C7.89477 4.83317 6.83496 5.27216 6.05356 6.05356C5.27216 6.83496 4.83317 7.89477 4.83317 8.99984C4.83317 10.1049 5.27216 11.1647 6.05356 11.9461C6.83496 12.7275 7.89477 13.1665 8.99984 13.1665C10.1049 13.1665 11.1647 12.7275 11.9461 11.9461C12.7275 11.1647 13.1665 10.1049 13.1665 8.99984C13.1665 7.89477 12.7275 6.83496 11.9461 6.05356C11.1647 5.27216 10.1049 4.83317 8.99984 4.83317ZM14.4165 4.62484C14.4165 4.34857 14.3068 4.08362 14.1114 3.88827C13.9161 3.69292 13.6511 3.58317 13.3748 3.58317C13.0986 3.58317 12.8336 3.69292 12.6383 3.88827C12.4429 4.08362 12.3332 4.34857 12.3332 4.62484C12.3332 4.9011 12.4429 5.16606 12.6383 5.36141C12.8336 5.55676 13.0986 5.6665 13.3748 5.6665C13.6511 5.6665 13.9161 5.55676 14.1114 5.36141C14.3068 5.16606 14.4165 4.9011 14.4165 4.62484ZM8.99984 6.49984C9.66288 6.49984 10.2988 6.76323 10.7676 7.23207C11.2364 7.70091 11.4998 8.3368 11.4998 8.99984C11.4998 9.66288 11.2364 10.2988 10.7676 10.7676C10.2988 11.2364 9.66288 11.4998 8.99984 11.4998C8.3368 11.4998 7.70091 11.2364 7.23207 10.7676C6.76323 10.2988 6.49984 9.66288 6.49984 8.99984C6.49984 8.3368 6.76323 7.70091 7.23207 7.23207C7.70091 6.76323 8.3368 6.49984 8.99984 6.49984Z"
                        fill="#1E1E1E"
                        fillOpacity="0.75"
                      />
                    </svg>
                  </motion.div>
                  <motion.div
                    className="col-4 social-media border border-dark rounded-circle text-center align-content-center mt-3"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={hasAnimated ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <svg
                      width="20"
                      height="17"
                      viewBox="0 0 20 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.2825 16.2509C13.83 16.2509 17.9587 9.99712 17.9587 4.58337C17.9587 4.40837 17.9587 4.23087 17.9513 4.05587C18.7551 3.47397 19.4488 2.75356 20 1.92837C19.2491 2.25943 18.4535 2.47762 17.6388 2.57587C18.4969 2.06291 19.1397 1.25583 19.4475 0.304616C18.6412 0.782271 17.7588 1.11758 16.8387 1.29587C16.2202 0.637146 15.4018 0.200764 14.5101 0.0543133C13.6185 -0.092137 12.7034 0.0595183 11.9067 0.485788C11.1099 0.912058 10.476 1.58915 10.1031 2.41219C9.73012 3.23523 9.63897 4.15828 9.84375 5.03837C8.21218 4.95656 6.61602 4.5327 5.1588 3.79429C3.70159 3.05589 2.41586 2.01942 1.385 0.752116C0.861675 1.65597 0.701967 2.72512 0.938308 3.74245C1.17465 4.75978 1.78932 5.64903 2.6575 6.22962C2.00692 6.20751 1.37065 6.03282 0.8 5.71962V5.77587C0.801122 6.72272 1.12913 7.64014 1.72859 8.37307C2.32805 9.10599 3.16218 9.60946 4.09 9.79837C3.73783 9.89538 3.37404 9.94375 3.00875 9.94212C2.75123 9.9429 2.49423 9.91904 2.24125 9.87087C2.50348 10.6859 3.01409 11.3986 3.70156 11.909C4.38903 12.4194 5.21892 12.7019 6.075 12.7171C4.62069 13.8594 2.82425 14.4789 0.975 14.4759C0.649151 14.4772 0.323529 14.4585 0 14.4196C1.87689 15.6162 4.05662 16.2516 6.2825 16.2509Z"
                        fill="#1E1E1E"
                        fill-opacity="0.75"
                      />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Reserved pb-2 ">
          <p>2023 all Right Reserved Term of use Uk-बाज़ार</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
