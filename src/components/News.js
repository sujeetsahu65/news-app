
import React, { Component } from 'react';

import NewsItem from './NewsItem';


export default class News extends Component {




// var req = new Request(url);


constructor(){
  
  super();
  // super() is for fetching the stuffs from components our News class extends to.
  this.state = {
     articles :[],
    loading: false,
    page: 1,
    totalResults:false
  }

  // here used the constructor to set/initialize the 'state' variable which is in-built Component(that imported from react) we could also do this { state = this.}
}


// getNews(){
//  let year = new Date().getFullYear();

// let url = 'https://newsapi.org/v2/everything?' +
//           'q=Apple&' +
//           'from='+year+'-10-30&' +
//           'sortBy=popularity&' +
//           'apiKey=3c6c3e87afd946b894c6613d090afa20';
// fetch(url)
//     .then((response)=> 
//        response.json()
//     ).then((data)=>
// {this.setState({articles:data.articles})})
// }

// but this will not work as it returns result asynchronously and by then the render function already gets rendered do we have to use componentDidMount() method


async componentDidMount(){

   let year = new Date().getFullYear();

let url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from='+year+'-10-30&' +
          'sortBy=popularity&' +
          'apiKey=3c6c3e87afd946b894c6613d090afa20&pageSize=20';

// await fetch(this.url)
//     .then((response)=> 
//        response.json()
//     ).then((data)=>
// {this.setState({articles:data.articles})})


// you can also do it short ===
let data = await fetch(url);
let parseData = await data.json();
this.setState({articles:parseData.articles, page:this.state.page +1,totalResult:parseData.totalResults})

}
// this method is called after the render() function runs


// if there is pages and we need next and previous buttons then you can call functions on onclick="handleNextPage()"

async handleNavigatePage(action){

if(action === "next"){
  alert('next');
  var pageStatus = this.state.page +1;
  
}
else{
  alert('previous');
  var pageStatus = this.state.page -1;
}


//we need to define the number of items perpage so in newsapi.org(and maybe in most of the api sites) there is a thing called pageSize which defines the number of items per page so we can provide pageSize (as query string parameter) but we also need to disable the next button when it is the last page So in the api response we also have key called 'totalResults' which shows the total numbers of items --

if(action === 'next' && pageStatus >= Math.ceil(this.state.totalResults/20)){

}
else{


   let year = new Date().getFullYear();
let url =`'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from='+year+'-10-30&' +
          'sortBy=popularity&' +
          'apiKey=3c6c3e87afd946b894c6613d090afa20&pageSize=${pageStatus}&page=${pageStatus}`;

          let data = await fetch(url);
let parseData = await data.json();
this.setState({articles:parseData.articles, page:pageStatus})
}


}




  render() {
    return (
      <div className="row" style={{rowGap:"10px"}}>
        
        {/* {console.log(this.articles)} */}
        {this.state.articles.map((element)=>{
return <div className="col-3" key={element.url} > <NewsItem title={element.title} description={element.description} image_url={element.urlToImage} item_url={element.url} ></NewsItem></div>
          // when we use map() we have to use a unique key for each element
        })}

        <div className="col-12">
          <button className='previous' disabled={this.state.page === 1?'disabled':false} onClick={()=>this.handleNavigatePage("previous")}>Previous</button>
          <button className='next'  onClick={()=>this.handleNavigatePage("next")}>Next</button>
        </div>
      </div>
      
    )
  }
}

