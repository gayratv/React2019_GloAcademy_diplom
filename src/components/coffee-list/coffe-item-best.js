import React from "react";

class CoffeeItemBest extends React.Component {

    render() {

    const { url = "https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg",
            name = "Solimo Coffee Beans 2kg",
            price = 10.73
         } = this.props;
    return(
                    <div className="best__item">
                        <img src={url} alt="coffee" />
                        <div className="best__item-title">
                            {name}
                        </div>
                        <div className="best__item-price">{price}$</div>
                    </div>
    );}

}

export default CoffeeItemBest;