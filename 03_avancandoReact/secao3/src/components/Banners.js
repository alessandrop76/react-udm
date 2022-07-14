import Img1 from "../assets/capoeira.png";

const Banners = () => {
  return (
    <div>
    <div className="images">
        {/*imagem importada da pasta public */}
      <img src="./avistarlupa.png" alt="imagem da pasta public" />
       {/*imagem importada da pasta assets */}
      <img src={Img1} alt="imagem da pasta assets" />
      </div>
    </div>
  )
}

export default Banners;