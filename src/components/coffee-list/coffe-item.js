import React from "react";

class CoffeeItem extends React.Component {

    render() {

    const { url = "https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg",
            name = "Solimo Coffee Beans 2kg",
            country = 'Brazil',
            price = 10.73,
            onClickItem = ()=>{},
            id 
         } = this.props;

        //  console.log(this.props);
    return(
        <div className="shop__item">
            <img 
                src={url} 
                style = { {cursor: "pointer"} }
                alt="coffee"  
                onClick = { ()=> onClickItem(id) } 
            />
            <div className="shop__item-title">
                {name}
            </div>
            <div className="shop__item-country">{country}</div>
            <div className="shop__item-price">{price}$</div>
        </div>
    );}

}

export default CoffeeItem;