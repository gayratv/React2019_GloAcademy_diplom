import React from "react";
import CoffeeItemBest from "../coffee-list/coffe-item-best";
import firebase from "../../firebase/firebase";
import Spinner from "../spinner";

class OurBest extends React.Component {

    state = { coffe_list : [],
        isLoading : false
      };

componentDidMount() {   
  this.setState({isLoading : true,coffe_list : [] });
  
  let newList =[];

  firebase.db.collection('coffe').where("bestsellers", "==", true)
  .get()
  .then(
      (querySnapshot) => {
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

    render() {
        if (this.state.isLoading) {return <Spinner />};
        
        return(
            
    <section className="best">
    <div className="container">
        <div className="title">Our best</div>
        <div className="row">
            <div className="col-lg-10 offset-lg-1">
                <div className="best__wrapper">

                    { this.state.coffe_list.map ( 
                        (itm) => {
                           return  <CoffeeItemBest price = {itm.price}  name = {itm.name} url = {itm.urlFull} key={itm.id} />;
                        }
                    ) }

                </div>
            </div>
        </div>
    </div>
</section>
        );
    }
}

export default OurBest;