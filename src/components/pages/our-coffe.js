import React from "react";
import TopMenu from "../app-header/top-menu";
import AppFooter from "../app-header/app-footer";
// import "../../sass/mainpage.sass";
import "../../sass/coffeepage.sass";
import CoffeeFilteredList from "../coffee-list/filtered-list";
import InputText from "../small-components/input_state";

class OurCoffe extends React.Component {

    state = {
        filtered : false,
        filteredButton : "",
        filteredString : ""
    };

    onClickBtn(fltText) {
        // console.log(fltText);
        this.setState({ filtered : true, filteredButton : fltText});
    }


    takeSearchString = (val) => {
        console.log("поисковая строка ",val);
        let flt = this.state.filteredButton !== "";
        this.setState({filtered : flt, filteredString : val});
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
                            <CoffeeFilteredList 
                                filteredButton = {this.state.filteredButton} 
                                filtered = {this.state.filtered}
                                filteredString = {this.state.filteredString}
                            />
                        </div>
                    </div>
                </div>
            </section>
            
            <AppFooter />
        </>
    );}
}

export default  OurCoffe ;