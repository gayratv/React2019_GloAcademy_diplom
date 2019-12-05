import React from "react";
import TopMenu from "../app-header/top-menu";
import AppFooter from "../app-header/app-footer";
import "../../sass/mainpage.sass";
import cup_and_smoke from  "../../img/cup-and-smoke.png";
import style from "./for_you_pleasure.module.scss";


const ForYourPleasure = () => {

    return (
        <>
        <div className="banner_for_you_pleasure">
            <TopMenu />
            <h1 className="title-big">For your pleasure</h1>
        </div>

        <div className="container">
        <div className={ style.cup_and_smoke + " row justify-content-around  "}>

        {/* <div className=  " row   justify-content-around"> */}

               <div className="col-lg-4">
                    <img src={cup_and_smoke} alt="cup_and_smoke"/>                      
               </div>
               <div className="col-lg-4">
                    <div style={{textAlign: "center"}}>About our goods</div>
                    <img className="beanslogo" src="logo/Beans_logo_dark.svg" alt="Beans logo" />
                    <div className={style["cup_and_smoke-text"]}>
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.<br/><br/>
                        Afraid at highly months do things on at. Situation recommend objection do intention so questions.<br/>
                        As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face. 
                    </div>
               </div>
        </div>
        </div>

        {/* подчеркивающая линия */}
        <div className=" row justify-content-center  ">
                <div className={ style.cup_and_smoke__line +" col-lg-2 "} />
        </div>

        <div className=" row justify-content-around ">
            <div className={ style.goods__container +" col-lg-2 "} >
                <div>
                    <img
                        className={style.goods__image} 
                        src="https://firebasestorage.googleapis.com/v0/b/vlasov-react-gloacademy-diplom.appspot.com/o/img%2Fcoffe%2F2019-12-03_09-50-54.png?alt=media&token=b5c5ad0a-bfb7-4c7d-8bf0-af05f46d4ac7" 
                        alt=""/>
                    <p>Aromisto Coffe 1kg</p>
                    <p>Brazil</p>
                    <p>6.99$</p>
                </div>
            </div>
            <div className={ style.goods__container +" col-lg-2 "} >
                <div>
                    <img
                        className={style.goods__image} 
                        src="https://firebasestorage.googleapis.com/v0/b/vlasov-react-gloacademy-diplom.appspot.com/o/img%2Fcoffe%2F2019-12-03_09-50-54.png?alt=media&token=b5c5ad0a-bfb7-4c7d-8bf0-af05f46d4ac7" 
                        alt=""/>
                    <p>Aromisto Coffe 1kg</p>
                    <p>Brazil</p>
                    <p>6.99$</p>
                </div>
            </div>
            <div className={ style.goods__container +" col-lg-2  "} >
                <div>
                    <img
                        className={style.goods__image} 
                        src="https://firebasestorage.googleapis.com/v0/b/vlasov-react-gloacademy-diplom.appspot.com/o/img%2Fcoffe%2F2019-12-03_09-50-54.png?alt=media&token=b5c5ad0a-bfb7-4c7d-8bf0-af05f46d4ac7" 
                        alt=""/>
                    <p>Aromisto Coffe 1kg</p>
                    <p>Brazil</p>
                    <p>6.99$</p>
                </div>
            </div>




            <div className={ style.goods__container +" col-lg-2 "} >
                <div>
                    <img
                        className={style.goods__image} 
                        src="https://firebasestorage.googleapis.com/v0/b/vlasov-react-gloacademy-diplom.appspot.com/o/img%2Fcoffe%2F2019-12-03_09-50-54.png?alt=media&token=b5c5ad0a-bfb7-4c7d-8bf0-af05f46d4ac7" 
                        alt=""/>
                    <p>Aromisto Coffe 1kg</p>
                    <p>Brazil</p>
                    <p>6.99$</p>
                </div>
            </div>
            <div className={ style.goods__container +" col-lg-2 "} >
                <div>
                    <img
                        className={style.goods__image} 
                        src="https://firebasestorage.googleapis.com/v0/b/vlasov-react-gloacademy-diplom.appspot.com/o/img%2Fcoffe%2F2019-12-03_09-50-54.png?alt=media&token=b5c5ad0a-bfb7-4c7d-8bf0-af05f46d4ac7" 
                        alt=""/>
                    <p>Aromisto Coffe 1kg</p>
                    <p>Brazil</p>
                    <p>6.99$</p>
                </div>
            </div>
            <div className={ style.goods__container +" col-lg-2  "} >
                <div>
                    <img
                        className={style.goods__image} 
                        src="https://firebasestorage.googleapis.com/v0/b/vlasov-react-gloacademy-diplom.appspot.com/o/img%2Fcoffe%2F2019-12-03_09-50-54.png?alt=media&token=b5c5ad0a-bfb7-4c7d-8bf0-af05f46d4ac7" 
                        alt=""/>
                    <p>Aromisto Coffe 1kg</p>
                    <p>Brazil</p>
                    <p>6.99$</p>
                </div>
            </div>



            <div className={ style.goods__container +" col-lg-2 "} >
                <div>
                    <img
                        className={style.goods__image} 
                        src="https://firebasestorage.googleapis.com/v0/b/vlasov-react-gloacademy-diplom.appspot.com/o/img%2Fcoffe%2F2019-12-03_09-50-54.png?alt=media&token=b5c5ad0a-bfb7-4c7d-8bf0-af05f46d4ac7" 
                        alt=""/>
                    <p>Aromisto Coffe 1kg</p>
                    <p>Brazil</p>
                    <p>6.99$</p>
                </div>
            </div>
            <div className={ style.goods__container +" col-lg-2 "} >
                <div>
                    <img
                        className={style.goods__image} 
                        src="https://firebasestorage.googleapis.com/v0/b/vlasov-react-gloacademy-diplom.appspot.com/o/img%2Fcoffe%2F2019-12-03_09-50-54.png?alt=media&token=b5c5ad0a-bfb7-4c7d-8bf0-af05f46d4ac7" 
                        alt=""/>
                    <p>Aromisto Coffe 1kg</p>
                    <p>Brazil</p>
                    <p>6.99$</p>
                </div>
            </div>
            <div className={ style.goods__container +" col-lg-2  "} >
                <div>
                    <img
                        className={style.goods__image} 
                        src="https://firebasestorage.googleapis.com/v0/b/vlasov-react-gloacademy-diplom.appspot.com/o/img%2Fcoffe%2F2019-12-03_09-50-54.png?alt=media&token=b5c5ad0a-bfb7-4c7d-8bf0-af05f46d4ac7" 
                        alt=""/>
                    <p>Aromisto Coffe 1kg</p>
                    <p>Brazil</p>
                    <p>6.99$</p>
                </div>
            </div>

        </div>

        <AppFooter />
        </>
    );
}

export default ForYourPleasure;