import React, { useRef, useState } from 'react'
import useStyles from './styles'
import CanvasDraw from "react-canvas-draw";
import { motion } from "framer-motion"

const App = () => {
    const classes = useStyles();
    const canvasRef= useRef(null)
    const [pred, setPred] = useState({hello:'--'})
    function predictionButton() {
        const image = canvasRef.current.canvasContainer.childNodes[1].toDataURL()
        fetchpred(image)
    }

    function clearButton() {
        canvasRef.current.clear()
    }

    const fetchpred = async (image) => {
        const settings = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ img: image })
        };
        try {
            // const fetchResponse = await fetch('http://127.0.0.1:8000/predict/', settings);
            const fetchResponse = await fetch('https://bangladigitfastapi.herokuapp.com/predict/', settings);
            const pred = await fetchResponse.json();
            setPred(pred)
        } catch (e) {
            return e;
        }    
    
    }
    
    return (
        <div className={classes.root}>
            <div className={classes.headText}>Bangla Handwritten Digit</div>
            Draw a Digit below
            <div className={classes.canvasContainer}>
                <CanvasDraw 
                hideGrid={true} 
                hideInterface={true} 
                canvasWidth= 'min(400px,90vw)'
                ref = {canvasRef}
                />
                </div>
                <div>
                    <motion.button
                        whileHover={{
                        scale: 1.03,
                        transition: { duration: 0.05 },
                        }} 
                        className={classes.clearButton} 
                        onClick={clearButton}>
                        <div className={classes.text}>Clear</div>
                    </motion.button>
                    <motion.button
                        whileHover={{
                        scale: 1.03,
                        transition: { duration: 0.05},
                        }} 
                        className={classes.clearButton} 
                        onClick={predictionButton}>
                        <div className={classes.text}>Get Prediction</div>
                    </motion.button>
                    <div className={classes.predText}>Most probable digit: {pred.hello}</div>
                    
                </div>
                <div>As this is hosted with free heroku hosting the speed is very slow and also the model is a very small one. So the results might be bad.</div>
                
                
            
        </div>
    )
}

export default App
