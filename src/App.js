import React from "react";
//import PropTypes from "prop-types"
//컴포넌트 재사용가능
//컴포넌트로 정보를 보낼 수 있음
//jsx = html + js

function Food({name, picture, rating}){ //리액트 매직 {fav} = props.fav
  return <div>
    <h1>i like {name}</h1>
    <h2> {rating}/5.0</h2>
    <img src={picture} alt={name} />
    

    </div>
}

/*
Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired
}
*/

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
      rating: 4.9
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating: 4.9
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating: 4.8
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: 5.5
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating: 4.7
  }
];

function renderFood(dish){
  return <Food name={dish.name} picture={dish.image} />
}

//map 은 랜더링을 함
//friends.map(current => {console.log(current); return 0})
//function(friend) {return friend + " gg";}
function App() {
  return (
      //dish는 오브젝트
    <div> 
      {foodILike.map(dish => <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />)}
      
    </div> //부모 컴포넌트에서 자식 컴포넌트로 많은 프로퍼티를 보낼 수 있음

  );

    /*
  return (
      //dish는 오브젝트
    <div> 
      {console.log(foodILike.map(renderFood))}
      {foodILike.map(renderFood)}
      
    </div> //부모 컴포넌트에서 자식 컴포넌트로 많은 프로퍼티를 보낼 수 있음

  );
  */

  /*
    return (
      //dish는 오브젝트
    <div> 
      {foodILike.map(dish => <Food name={dish.name} picture={dish.image} />)}
      
    </div> //부모 컴포넌트에서 자식 컴포넌트로 많은 프로퍼티를 보낼 수 있음

  );
  */

  /*
  return (
    <div> 
      <h1>Hello!!!!!</h1>
      < Food fav="kimchi" /> 
      < Food fav="ramen" /> 
      < Food fav="samgiopsal" /> 
      < Food fav="chukumi" /> 
    </div> //부모 컴포넌트에서 자식 컴포넌트로 많은 프로퍼티를 보낼 수 있음

  );
  */
}

export default App;
