import React from "react";
import CoffeeItem from "./coffe-item";
import firebase from "../../firebase/firebase";

class CoffeeList extends React.Component {

    state = { coffe_list : [],
              isLoading : false
            };

    componentDidMount() {   
        this.setState({isLoading : true,coffe_list : [] });
  
        let newList =[];

        firebase.db.collection('coffe')
        .get()
        .then(
            (querySnapshot) => {
                if ( !this.inMountState) return;
                querySnapshot.forEach (
                  (doc) => 
                    {
                      newList.push({id : doc.id, ...doc.data()});
                    }
                );
                this.setState({
                    isLoading : false,
                    coffe_list : newList
                });
            }
        )
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
    }
    
    componentWillUnmount() {
        this.inMountState=false;
    }

    render() {
        return(
            <div className="row">
            <div className="col-lg-10 offset-lg-1">
                <div className="shop__wrapper">

                    { this.state.coffe_list.map ( 
                        (itm) => {
                           return  <CoffeeItem price = {itm.price}  country = {itm.country} name = {itm.name} url = {itm.urlFull} key={itm.id} />;
                        }
                    ) }

                </div>
            </div>
        </div>

        )};
}


export default CoffeeList;