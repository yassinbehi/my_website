
import TextType from "../../components/TextType";

const Hero = () => {
  return (
    <><div className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-4">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-4">
          Yassin
        </h1>
        <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8">
          El Behi
        </h1>
        <div className="h-px w-16 bg-white mx-auto mb-8"></div>
        <h2 className="text-xl md:text-2xl font-light tracking-widest uppercase">
          Creative Developer
        </h2>
      </div>
      <div className="bg-gray-900 text-gray-200 font-mono p-6 rounded-lg shadow-xl m-8">
      <h1>C:\Users\HP&gt;Information technology engineering student</h1>
      <h1>C:\Users\HP&gt;Always learning</h1>
      C:\Users\HP&gt;
    <TextType 
    text={["Full-Stack Development", "UI/UX Design", "Interactive Experiences"]}
    typingSpeed={205}
    pauseDuration={1500}
    showCursor={true}
    cursorCharacter="▋"
    />
    </div>
    </div>
    
    </>
  );
  
};

export default Hero;