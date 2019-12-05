import React from "react";
import { withRouter } from "react-router";

class CoffeeItemBest extends React.Component {

    onClickItem = (id) => {
        this.props.history.push('/coffee/'+id);
    }

    render() {

    const { url = "https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg",
            name = "Solimo Coffee Beans 2kg",
            price = 10.73,
            id
         } = this.props;
    return(
                    <div className="best__item">
                        <img 
                            src={url} 
                            alt="coffee" 
                            style = { {cursor: "pointer"} }
                            onClick = { ()=> this.onClickItem(id) } 
                        />
                        <div className="best__item-title">
                            {name}
                        </div>
                        <div className="best__item-price">{price}$</div>
                    </div>
    );}

}

export default withRouter(CoffeeItemBest);