import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import image1 from './images/info1.png';
import image2 from './images/info2.png';
import image3 from './images/info3.png';
import image4 from './images/info4.png';
import image5 from './images/info5.png';
import image6 from './images/info6.png';
import image7 from './images/info7.png';

function App() {

  const [position, setPosition] = useState(0);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState();

  let info = [
    {
      title:"Steel Shoring Frame",
      content:"Steel Shoring Frames are made of high quality steel tubes and accessories which are galvanized or painted. Using the component and accessories, Steel Frames can be adapted to any geometry, steps and slopes. 10K Steel Shoring System is built to safely support loads of up to 4,535 kg (10,000 lb) with a Factor of Safety of 2.5:1 per CSA and SSFI. Frame capacities vary, depending the number of tiers in height, the lengths of extensions, amount of bracing, whether inter-bracing has been used, and if there are any lateral or wind loads imposed.",
      image:image1
    },
    {
      title:"Aluminum Shoring Frame",
      content:"10K Aluminum Shoring Frames are made of a special high- strength aluminum alloy. Their strength / Lite-weight ratio greatly facilitates handling and erecting. The horizontal (serrated) ledgers make climbing safer and help to secure wood planks. Jet Locks are spaced at 605mm (2ft) centers to enable frames to be inter-braced with standard Cross Braces when erected more than one tier high. 10K Shoring System is built to safely support loads of up to 10,000 pounds/leg with a Factor of Safety of 2.5:1 per CSA and SSFI.Frame capacities vary, depending the number of tiers in height, the lengths of extensions, amount of bracing, whether inter-bracing has been used, and if there are any lateral or wind loads imposed.The normal testing configuration of the 10K Shoring System exceeds the requirements of both the CSA and the SSFI of the USA A tower, 3 tiers high, consisting of 6ft high frames, with Screw Jacks extended 12”, top and bottom, is loaded to failure. The load rating of the frames is then determined by dividing the failure load by the required Safety Factor.",
      image:image2
    },
    {
      title:"Post Shores", 
      content:"The Steel Post Shores are primarily used in light construction applications and re- shoring. (Consult with TTF Engineering for design).150mm x 150mm Base / Top Plate (6in x 6in).5mm (1/4in) steel plate including connection / alignment holes for adapting to u-heads, beams and other common post-shore applications.Combined with stripping Handle, the Nut has 3 Additional Ears for use with hammers to ease in stripping the shore while under load.Pins are of high grade steel, and come with attached safety cable to prevent loss of pins during transportation or on site handling.Outer Tube is full length and continuous. Thread is cut into the outer tube providing a higher capacity, and equally important, far longer life expectancy when compared to products that are welded onto thinner walled tubes to reduce weight and cost.TTF’s “Premium” Steel Post Shores are made of hi quality steel tubes and accessories which are galvanized to ensure many years of repeated use. Ideal of long term ownership and maximum stripping performance due to its labor saving “quick” release pin, making significant savings in the time to set, and strip the shore.",
      image:image3
    },
    {
      title:"Screw Jacks", 
      content:"Our 48mm (1.9in) hollow steel shaft, 813mm (30in) long with 610mm (20in) of adjustment. The Screw Jack plates can accommodate T-Head bolts, designed for quick and easy locking into the continuous slot on our aluminum stringer beams. When the plate is to rest on mudsills or to be used with timber stringer material, instead of aluminum, it can be secured to the timber by nailing through the holes provided in the plate or a special U-Head can be attached to the Jack Plate. The adjusting nut handles are “stepped” to allow the Screw Jack to be solidly centered in either an Extension Tube or the frame leg, thus assuring straight alignment and rigidity.",
      image:image4
    },
    {
      title:"Aluminum Beams", 
      content:"The Aluminum Beam is the most versatile and widely used element in all shoring and formwork applications. In Shoring, it is used as the joist and stringers on top of our various frame systems, as well as the joist for our fly forms systems. For wall forming, the beams are used as joist either in a vertical, or horizontal configuration, while our strongbacks complete the system by providing the backbone of the formwork, allowing tie-rod connections to be made.Beams are made from high grade structural alloy 6351-T6, which has greater strength that 6061-T6 alloy. Reinforced side flanges resist bending and retain beam clipsEliminate up to 1/3 of the horizontal members and as much as 1⁄2 of the vertical support, using aluminum beams instead of wooden ones.Reduced weight of each beam combined with fewer structural members minimizes worker strain. Lower worker fatigue means higher worker efficiency and lower cost.All beams are available in standard lengths of 4’, 5’, 6’, 7’, 8’, 9’, 10’, 10.6’, 12’, 13’, 14’, 16’, 18’ and 20’ with plastic or wood inserts",
      image:image5
    },
    {
      title:"Cross Bars", 
      content:"9/12” (14.3mm) hole. Sizes are stamped on ends. Pre galvanized tubes for long life and durability.",
      image:image6
    },
    {
      title:"Beam Clips", 
      content:"The Beam Clip plate is made from specially-formed high-strength aluminum.When the Beam Clip is assembled with T-bolt and hex nut as an assembly the bolt is crimped to prevent loss of the nut. The assembly is used to tie aluminum beams securely together.Some other uses of the Beam Clip are:a) Securing aluminum beams to standard steel Post Shores.b) Securing joists to stringers on Wall Forms or rolling tables, or when a sloping slab is to be poured.",
      image:image7
    }
  ];

  useEffect(()=>{
    console.log(position);
    setTitle(info[position].title)
    setContent(info[position].content)
    setImage(info[position].image);
    
  },[position])

  function next(){
    if(position >= info.length){
      setPosition(0);
    } else {
      setPosition(position +1)
    }
  }

  function prev(){
    if(position <= 0){
      setPosition(info.length)
    }else {
      setPosition(position -1)
    }
  }
  

  return (
    <div className="App">
      <h2> {title}</h2>
      <div className="wrapperInfo">
        <p style={{whiteSpace: "pre-wrap"}}> {content.replaceAll('. ', '.\n\n')}</p>
        <img src={image}></img>
      </div>
      <div className='btns'>
        <button onClick={position > 0 ? prev : ()=>setPosition(info.length-1)}> Prev </button>
        <button onClick={position > info.length-2 ? ()=>setPosition(0) : next}> Next </button>
      </div>

    </div>  
  );
}

export default App;
