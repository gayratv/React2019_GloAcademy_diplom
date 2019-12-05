import React from "react";
import CoffeeItem from "./coffe-item";
import firebase from "../../firebase/firebase";
import { withRouter } from "react-router";


// props
// filtered : false,
// filteredButton : ""
// filteredString

class CoffeeFilteredList extends React.Component {
    state = { 
        coffe_list : [],
        coffe_list_render : [],
        isLoading : false
      };
    inMountState = false;

    updateList() {   
        if ( this.inMountState) return;
        this.inMountState = true;
        this.setState({isLoading : true,coffe_list : [] });

        const {filtered=false,filteredButton=""} = this.props;
        let newList =[];

        let fbRef;
        if ( filtered) {
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

                let {filteredString = ""} = this.props;
                let renderArray;
                // filteredString="g";

                if (filteredString !== "" && newList.length > 0) {
                    
                    renderArray = newList.filter( el => {
                        return el.name.includes(filteredString)
                    });
                } else {
                    renderArray = [...newList];
                }



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
        this.updateList();
    }

    componentDidUpdate() {
        this.updateList();
    }

    componentWillUnmount() {
        this.inMountState=false;
    }

    onClick = (id) => {
        // const { match, location, history } = this.props;
        const {  history } = this.props;
        console.log(id);
        history.push("/coffee/"+id);
    }


    
    render() {

        const {coffe_list_render} = this.state;
        if (coffe_list_render.length === 0) return null;
        
        console.log(coffe_list_render);

        return(
        <div className="shop__wrapper">
            { coffe_list_render.map ( 
                        (itm) => {
                            // console.log(itm);
                           return  (<CoffeeItem 
                                        onClickItem = {this.onClick}
                                        price = {itm.price}  
                                        country = {itm.country} 
                                        name = {itm.name} 
                                        url = {itm.urlFull} 
                                        key={itm.id} 
                                        id={itm.id} 
                                    />);
                        }
            ) }
        </div>
    );
    }
}

export default withRouter( CoffeeFilteredList);