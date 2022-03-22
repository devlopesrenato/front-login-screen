import './backImg.css'
const BackImg = ( {src, msgAlt} ) => {
    return(
        <div className="img-background">
           <img src={src} alt={ msgAlt } />
        </div>
        
    )
}

export default BackImg;