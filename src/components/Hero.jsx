import { motion } from "framer-motion";
import { styles } from "../styles";
import { video } from "../assets";
const Hero = () => {
    return (
        <motion.section
            className="relative w-full h-screen mx-auto bg-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <video
                autoPlay
                loop
                muted
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </motion.section>
    );
};

export default Hero;
