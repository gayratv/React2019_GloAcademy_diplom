import React from "react";
import TopMenu from "../app-header/top-menu";
import AppFooter from "../app-header/app-footer";
import "../../sass/coffeepage.sass";
import CoffeeFilteredListView from "../coffee-list/filtered-list-view";
import InputText from "../small-components/input_state";
import firebase from "../../firebase/firebase";

class OurCoffe extends React.Component {

    state = {
        filteredButton : "",
        filteredButtonPrev : "",
        filteredString : "",
        filteredStringPrev : "",
        coffe_list_render : [],
        coffe_list : [],
        isLoading : false
    };
    inMountState = false;
    filteredString__o = "";
    filteredStringPrev_o = "";

    onClickBtn(fltText) {
        // console.log(fltText);
        this.setState( (prevState) =>
        { return(
            { 
                filteredButton : fltText,
                filteredButtonPrev : prevState.filteredButton
            }
            )
        })
    }


    updateSearchString(newList, filteredString) {
        // console.log('updateSearchString : "',filteredString,'"');
        let renderArray=[];
        // filteredString="g";

        if (filteredString !== "" && newList.length > 0) {
            
            renderArray = newList.filter( el => {
                return el.name.toLowerCase().includes(filteredString)
            });
        } else {
            renderArray = [...newList];
        }
        return renderArray;
    }

    updateList() {   
        if ( this.inMountState) return;
        const {filteredButtonPrev,filteredButton=""} = this.state;

        if (filteredButtonPrev === filteredButton && this.state.coffe_list.length > 0 )  {
            // запрашивать базу не надо
            
            if ( this.filteredStringPrev_o === this.filteredString__o ) return;
            const renderArray = this.updateSearchString(this.state.coffe_list,this.state.filteredString);
            this.filteredString__o = this.filteredStringPrev_o ;
            this.setState({coffe_list_render : renderArray});
            return;
        }

        // запросим базу
        this.inMountState = true; // служебная переменная - ее будем проверять - вдруг компонент размонтирован
        // this.setState({isLoading : true,coffe_list : [], coffe_list_render:[] });

        let newList =[];

        let fbRef;
        if ( filteredButton !== "") {
            fbRef = firebase.db.collection('coffe').where('country','==',filteredButton); 
        } else {  
            fbRef = firebase.db.collection('coffe'); 
            }

        fbRef.get()
        .then(
            (querySnapshot) => {
                if ( !this.inMountState) return;
                querySnapshot.forEach (
                    (doc) => 
                    {
                        newList.push({id : doc.id, ...doc.data()});
                    }
                );

                const renderArray = this.updateSearchString(newList,this.state.filteredString);
                
                this.setState({
                    isLoading : false,
                    coffe_list : newList,
                    coffe_list_render : renderArray
                });
                this.inMountState = false;
            }
        )
        .catch(function(error) {
            console.log("Error getting documents: ", error);
            this.inMountState = false;
        });
    };

    componentDidMount() {
        // console.log('componentDidMount');
        this.updateList();
    }

    componentDidUpdate() {
        const {
            filteredButton ,
            filteredButtonPrev,
            filteredString ,
            filteredStringPrev 
        } = this.state;
        // console.log('componentDidUpdate ', filteredString, " prev ",filteredStringPrev);
        
        if (filteredButton===filteredButtonPrev && filteredString===filteredStringPrev) return;
        
        this.updateList();
    }

    componentWillUnmount() {
        this.inMountState = false;
    }

    takeSearchString = (val) => {
        // console.log("takeSearchString : ",val);
        
        this.setState( (prevState) => {
            this.filteredString__o = val.toLowerCase();
            this.filteredStringPrev_o = prevState.filteredString;

            return (
                { 
                    filteredString : val.toLowerCase(),
                    filteredStringPrev : prevState.filteredString
                }
        );} );
            
    }

    render() {
        
    return (
        <>
            <div className="banner">
                <TopMenu />
                <h1 className="title-big">Our Coffee</h1>
            </div>

            <section className="shop">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 offset-2">
                            <img className="shop__girl" src="img/coffee_girl.jpg" alt="girl" />
                        </div>
                        <div className="col-lg-4">
                            <div className="title">About our beans</div>
                            <img className="beanslogo" src="logo/Beans_logo_dark.svg" alt="Beans logo" />
                            <div className="shop__text">
                                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                                <br/><br/>
                                Afraid at highly months do things on at. Situation recommend objection do intention<br/>
                                so questions. <br/>
                                As greatly removed calling pleased improve an. Last ask him cold feel<br/>
                                met spot shy want. Children me laughing we prospect answered followed. At it went<br/>
                                is song that held help face.
                            </div>
                        </div>
                    </div>
                    <div className="line"></div>
                    <div className="row">
                        <div className="col-lg-4 offset-2">
                            <form action="#" className="shop__search">
                                <label className="shop__search-label" htmlFor="filter">Looking for</label>
                                <InputText 
                                    id="filter" 
                                    placeholder="start typing here..." 
                                    className="shop__search-input" 
                                    callBackParent = {this.takeSearchString}
                                />
                            </form>
                        </div>
                        <div className="col-lg-4">
                            <div className="shop__filter">
                                <div className="shop__filter-label">
                                    Or filter
                                </div>
                                <div className="shop__filter-group">
                                    <button className="shop__filter-btn" onClick={() =>this.onClickBtn('Brazil')}>Brazil</button>
                                    <button className="shop__filter-btn" onClick={() =>this.onClickBtn('Kenya')}>Kenya</button>
                                    <button className="shop__filter-btn" onClick={() =>this.onClickBtn('Columbia')}>Columbia</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <CoffeeFilteredListView coffe_list_render = {this.state.coffe_list_render} />
                        </div>
                    </div>
                </div>
            </section>
            
            <AppFooter />
        </>
    );}
}

export default  OurCoffe ;