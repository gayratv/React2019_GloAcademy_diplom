import React from "react";
import TopMenu from "../app-header/top-menu";
import AppFooter from "../app-header/app-footer";
// import "../../sass/mainpage.sass";
import "../../sass/coffeepage.sass";
import firebase from "../../firebase/firebase";
import style from  "./our-coffe-one.module.scss";

// {сверху поступает id}
class OurCoffeOne extends React.Component {
    state = { coffe_item : {},
        isLoading : false
      };
    inMountState = false;

    updateList() {   
        if ( this.inMountState) return;
        if (! this.props.id) return;

        this.inMountState = true;
        this.setState({isLoading : true,coffe_item : {}});

        firebase.db.collection('coffe').doc(this.props.id)
        .get()
        .then(
            (doc) => {
                if ( !this.inMountState) return;
                if (doc.exists) {
                    
                    this.setState({
                        isLoading : false,
                        coffe_item : {id : doc.id, ...doc.data()}
                    });
                }
                this.inMountState = false;
            }
        )
        .catch(function(error) {
            console.log("Error getting documents: ", error);
            this.inMountState = false;
        });
    };

    componentDidMount() {
        this.updateList();
    }

    componentDidUpdate() {
        this.updateList();
    }

    componentWillUnmount() {
        this.inMountState=false;
    }
   
    spliteText(description) {
        if (! description) return null;
        
        let i=1;
        const txtJSX = description.split("<br/>").map ( item => {
            return <p key={i++}>{item}</p>
        });
        // console.log(txtJSX);
        return txtJSX;
    }

    render() {

        console.log(this.props.id);
        const {country,name,price,urlFull,description} = this.state.coffe_item;
        this.spliteText(description);
       
    return (
        <>
            <div className="banner">
                <TopMenu />
                <h1 className="title-big">Our Coffee</h1>
            </div>

            <section className={style.container}>
                <div className={style.container_item}>
                    <img  className={style.container_item_img} src={urlFull} alt={name} />
                </div>
                            
                <div className={style.container_item}>
                    <div className={style.container_item_title}>About it</div>
                    <img className="beanslogo" src="/logo/Beans_logo_dark.svg" alt="Beans logo" />

                    <div className={style.container_item_country}>
                        <span className={style.container_item_header}>Country : </span>
                        {country}
                    </div>
                    <div className={style.container_item_name}>
                        <span className={style.container_item_header}>Name : </span>
                        {name}
                    </div>
                    <div className={style.container_item_price}>
                        <span className={style.container_item_header}>Price : </span>
                        {price}$
                    </div>
                    <div className={style.container_item_text}>
                        <span className={style.container_item_header}>Description : </span>
                        {this.spliteText(description)}
                    </div>
                </div>
            </section>
            
            <AppFooter />
        </>
    );}
}


export default   OurCoffeOne ;

