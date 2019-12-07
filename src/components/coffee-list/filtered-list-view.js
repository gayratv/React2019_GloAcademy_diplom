import React from "react";
import CoffeeItem from "./coffe-item";
import { withRouter } from "react-router";



// props
// coffe_list_render

class CoffeeFilteredListView extends React.Component {

    onClick = (id) => {
        // const { match, location, history } = this.props;
        const {  history } = this.props;
        console.log(id);
        history.push("/coffee/"+id);
    }


    
    render() {
        const {coffe_list_render=[]} = this.props;
        if (coffe_list_render.length === 0) return null;
        
        // console.log(coffe_list_render);
        console.log('записей : ' ,coffe_list_render.length);

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

export default withRouter( CoffeeFilteredListView);