import firebase from "./firebase";
import db_json from "./db.json";

function getDataTest() {

    firebase.db.collection("menu")
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(
                (doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());
                    
                }
            );
            });
    };


function testImageUrl() {    
    firebase.getImageUrl("salat-cezar.jpg")
    .then ( (url) => {console.log(url)});
}


function WriteDB() {
    console.log(db_json);
    const c1 = db_json.coffee[0];
    console.log(c1);

    db_json.coffee.forEach ( el => {
        firebase.db.collection("coffe").add(el);
    });
    db_json.goods.forEach ( el => {
        firebase.db.collection("goods").add(el);
    });

}


function Url_correct() {
    firebase.db.collection("coffe")
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                const {url} = doc.data();
                let docOne = {...doc.data()};
                // console.log(doc.id, " => ", url);
                
                firebase.getImageUrl('img/coffe/'+url)
                    .then(  
                        (urlFull) => {
                            console.log( url, ' => ',urlFull)
                            docOne.urlFull = urlFull;
                            firebase.db.collection("coffe").doc(doc.id).set(docOne);
                        }
                    );
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
}


function Url_goods_correct() {
    firebase.db.collection("goods")
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                const {url} = doc.data();
                let docOne = {...doc.data()};
                // console.log(doc.id, " => ", url);
                
                firebase.getImageUrl('img/accessories/'+url)
                    .then(  
                        (urlFull) => {
                            console.log( url, ' => ',urlFull)
                            docOne.urlFull = urlFull;
                            firebase.db.collection("goods").doc(doc.id).set(docOne);
                        }
                    );
            });
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
}


export {getDataTest,testImageUrl,WriteDB,Url_correct,Url_goods_correct};