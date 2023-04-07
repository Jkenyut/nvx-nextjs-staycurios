/* eslint-disable react/no-unescaped-entities */
import React, { ReactElement } from "react";

function Introduction() {
  return <Header />;
}

export default Introduction;

const Header: React.FC = () => {
  const motivator = [
    {
      motivation:
        "Do small things every day that can help make your life better. These small successes can build momentum and bring positive changes to your life.",
    },
    {
      motivation:
        "Learn from the past, enjoy the present, and hope for a better future. We cannot change the past, but we can control our future..",
    },
    {
      motivation:
        "Don't let failures stop you. Every failure is an opportunity to learn and grow. Keep moving forward and don't give up on your dreams.",
    },
    {
      motivation:
        "Give yourself time to do things you enjoy and give you positive energy. Life is about finding balance, so make sure you put yourself and your mental health first.",
    },
    {
      motivation:
        "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    },
  ];
  const random = Math.floor(Math.random() * 6);
  return (
    <div>
      <section className="relative bg-[url('/curhat.png')] rounded-2xl bg-cover bg-center bg-no-repeat mt-[2px]">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center sm:text-left">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Let us find your
              <strong className="block font-extrabold text-sky-500">Forever Consultant.</strong>
            </h1>

            <p className="mt-4 font-semibold text-2xl text-slate-500 max-w-lg sm:text-3xl sm:leading-relaxed">
              Make your life much better
            </p>
            {motivator.map((motiv, index) => {
              let ok;
              if (index === random) {
                return (
                  <p
                    key={index}
                    className="mt-4 font-semibold text-xl text-slate-400 max-w-lg sm:text-2xl sm:leading-relaxed"
                  >
                    {motiv.motivation}
                  </p>
                );
              }
            })}

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="#book"
                className="block w-full font-semibold rounded-xl bg-sky-400 px-12 py-3 text-sm  text-white shadow hover:bg-sky-500 focus:outline-none focus:ring active:bg-sky-300 sm:w-auto"
              >
                Book now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-full from-[#f9e7cf]  bg-gradient-to-b  to-[#ffffff] to-90% rounded-xl">
        <p className="text-lg tracking-wide font-semibold text-slate-600 text-center leading-relaxed p-5 sm:text-xl sm:p-20 md:text-3xl md:p-28 lg:text-4xl lg:py-40">
          Protect your soul from burdening problems by joining our counseling session. Let us help
          you solve problems by providing objective insights and appropriate advice. Don't let
          problems take over your life, let's work together to find solutions and discover true
          happiness. Join our counseling session now and start living a better life!
        </p>
      </section>
    </div>
  );
};
