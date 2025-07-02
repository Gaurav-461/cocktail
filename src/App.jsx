import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to("#app", {
      y: "-500",
      duration: 1.6,
      ease: "power2.inOut",
      delay: 0.8,
    });
    
    tl.to("#app", {
      scale: 2.5,
      duration: 0.9,
      width: "300px",
      ease: "power2.inOut",
    });
  });

  return (
    <div>
      <div className="relative h-screen w-full bg-blue-400 overflow-hidden">
      <div
        id="app"
        className="absolute -bottom-48 left-1/2 -translate-x-1/2 rounded-2xl text-center backdrop-blur-xl bg-white/50 w-48 h-36 overflow-hidden"
      >
        <img src="https://images.pexels.com/photos/884788/pexels-photo-884788.jpeg" alt="" className="w-full h-full object-cover " />
      </div>
    </div>
      <div className="w-full h-screen flex-center">
        <div className="w-28 h-28 bg-yellow">
          <p className="text-black font-modern-negra text-2xl">Hello</p>
        </div>
      </div>
    </div>
  );
};

export default App;
