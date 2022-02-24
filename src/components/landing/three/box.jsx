import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
// import texture from "../../../assets/images/texture.jpg"

const Box =()=>{

    // const colorMap = useLoader(TextureLoader, texture);
    {/* <meshLambertMaterial attach="material" color="grey"/> */}
    return <mesh rotation={[40 ,50, 20]}>
            <boxBufferGeometry attach="geometry" args={[3,3,3]}/>
            <meshNormalMaterial attach="material" />
    </mesh>
}
export default Box;