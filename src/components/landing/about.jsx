import {
    Canvas
} from "@react-three/fiber"
import Box from "./three/box"
import {
    OrbitControls
} from "@react-three/drei"
import AnimatedSphere from "./three/sphere"
import Archer from "./three/Archer"
import { Suspense } from "react"

const About =()=>{
    return(
        <div className="aboutWrapper">
            <div className="about">
              <h1 className="heading__primary">About</h1>   
              <div className="about__1">
                 <div className="about__1_img">
                    <Canvas clasName="canvas">
                            <OrbitControls enableZoom={false}/>
                            <ambientLight intensity={0.5} />
                            <directionalLight position={[-2, 5, 2]} />
                            <Suspense fallback={null}>
                            <AnimatedSphere />
                            </Suspense>
                        </Canvas>
                 </div> 
                 <div className="about__1_text">
                    <h2 className="about__1_text-head">Lorem ipsum</h2>
                    <div className="about__1_text-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, provident numquam dolore adipisci reprehenderit facilis commodi asperiores, optio delectus eius minus voluptatem. Numquam perferendis doloribus voluptate atque veritatis odio tenetur, aut ex expedita sapiente praesentium debitis at eveniet ab similique suscipit quam accusantium non harum delectus, quibusdam sequi corporis aperiam.</div>
                 </div>
              </div>  

              <div className="about__1 about__1--rev">
                 <div className="about__1_text">
                    <h2 className="about__1_text-head">Lorem ipsum</h2>
                    <div className="about__1_text-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, provident numquam dolore adipisci reprehenderit facilis commodi asperiores, optio delectus eius minus voluptatem. Numquam perferendis doloribus voluptate atque veritatis odio tenetur, aut ex expedita sapiente praesentium debitis at eveniet ab similique suscipit quam accusantium non harum delectus, quibusdam sequi corporis aperiam.</div>
                 </div>
                 <div className="about__1_img">
                    <Canvas clasName="canvas">
                            <OrbitControls enableZoom={false}/>
                            <ambientLight intensity={0.5} />
                            <directionalLight position={[-2, 5, 2]} />
                            <Suspense fallback={null}>
                            <Box />
                            </Suspense>
                        </Canvas>
                 </div> 
              </div>  

              <div className="about__1">
                 <div className="about__1_img">
                 <Canvas clasName="canvas">
                            <OrbitControls enableZoom={false}/>
                            <ambientLight intensity={0.5} />
                            <directionalLight position={[-2, 5, 2]} />
                            <Suspense fallback={null}>
                            <Archer />
                            </Suspense>
                        </Canvas>
                 </div> 
                 <div className="about__1_text">
                    <h2 className="about__1_text-head">Lorem ipsum</h2>
                    <div className="about__1_text-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, provident numquam dolore adipisci reprehenderit facilis commodi asperiores, optio delectus eius minus voluptatem. Numquam perferendis doloribus voluptate atque veritatis odio tenetur, aut ex expedita sapiente praesentium debitis at eveniet ab similique suscipit quam accusantium non harum delectus, quibusdam sequi corporis aperiam.</div>
                 </div>
              </div>  
              
                        
            </div>

            
        </div>
    )
}
export default About