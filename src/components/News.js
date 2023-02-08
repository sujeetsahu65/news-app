
import React, { Component } from 'react';

import NewsItem from './NewsItem';
import InfiniteScroll from 'react-infinite-scroll-component';

import style from '../App.css';
export default class News extends Component {




// var req = new Request(url);


constructor(props){

  super(props);
  // super() is for fetching the stuffs from components our News class extends to.
  this.state = {
     articles :[],
    loading: false,
    page: 1,
    totalResults:0
  }

  document.title = this.props.category;

  // here used the constructor to set/initialize the 'state' variable which is in-built Component(that imported from react) we could also do this { state = this.}
 
}


async getNews(){
 console.log(this.state.page);
   let year = new Date().getFullYear();

let url = `https://newsapi.org/v2/everything?q=Apple&from="${year}-01-01"&sortBy=popularity&apiKey=3c6c3e87afd946b894c6613d090afa20&pageSize=${this.props.pageSize}&page=${this.state.page}`;
// let url = `https://newsapi.org/v2/top-headlines?q=Apple&from="${year}-01-01"&sortBy=popularity&apiKey=3c6c3e87afd946b894c6613d090afa20&pageSize=${this.props.pageSize}&page=${this.state.page}&category=${this.props.category}`;
// let url = `https://newsapi.org/v2/top-headlines?q=Apple&from="2022-01-01"&apiKey=3c6c3e87afd946b894c6613d090afa20&pageSize=${this.props.pageSize}&page=${this.state.page}&category=${this.props.category}`;

// await fetch(this.url)
//     .then((response)=> 
//        response.json()
//     ).then((data)=>
// {this.setState({articles:data.articles})})


// you can also do it short ===
let data = await fetch(url);
let parseData = await data.json();
 localStorage.setItem('news_data',JSON.stringify(parseData));
       
        // console.log(JSON.parse(localStorage.getItem('news_data')));
//  let parseData =  JSON.parse(localStorage.getItem('news_data'));
//  console.log(parseData);
 this.setState({articles:parseData.articles,totalResults:parseData.totalResults})

//  await this.setState({articles:parseData.articles, totalResults:parseData.totalResults})
//  Note: that the State behaves asynchronous so to print them you have to wait for the states to be set first to log the states immediately otherwise you can get it after a while
//     console.log(this.state.articles);
// console.log(this.state.totalResults);

}

// but this will not work as it returns result asynchronously and by then the render function already gets rendered do we have to use componentDidMount() method





async componentDidMount(){
 
await this.getNews();
console.log('suj');

}
  // componentDidMount method is called after the render() function runs which at last re-render the jsx and we are making it await for the result so that it re-renders the page only when the result is ready







// if there is pages and we need next and previous buttons then you can call functions on onclick="handleNextPage()"



async handleNavigatePage(action){

//  var pageStatus;
if(action === "next"){
  // alert('next');
 await this.setState({page:this.state.page+1})
  
}
else if(action === "previous"){
  // alert('previous');
 await this.setState({page:this.state.page-1})
}

this.getNews();

//we need to define the number of items perpage so in newsapi.org(and maybe in most of the api sites) there is a thing called pageSize which defines the number of items per page so we can provide pageSize (as query string parameter) but we also need to disable the next button when it is the last page So in the api response we also have key called 'totalResults' which shows the total numbers of items --

// if(action === 'next' && pageStatus >= Math.ceil(this.state.totalResults/20)){
//  console.log(this.state.page);
//  console.log(this.state.totalResults);
// }
// else{


//    let year = new Date().getFullYear();
// let url =`https://newsapi.org/v2/everything?q=Apple&from="${year}-01-01"&sortBy=popularity&apiKey=3c6c3e87afd946b894c6613d090afa20&pageSize=${pageStatus}&page=${pageStatus}`;

//           let data = await fetch(url);
// let parseData = await data.json();
// console.log(parseData);
// this.setState({articles:parseData.articles, page:pageStatus})
//  console.log(this.state.page);
// }


}

// async fetchMoreData(){

 fetchMoreData = async ()=>{
  // console.log(this.state.page);
  this.setState({page:this.state.page +1});
 let url = `https://newsapi.org/v2/top-headlines?q=Apple&from="2022-01-01"&apiKey=3c6c3e87afd946b894c6613d090afa20&pageSize=${this.props.pageSize}&page=${this.state.page}`;

 let data = await fetch(url);
let parseData = await data.json();
  this.setState({articles:this.state.articles.concat(parseData.articles),totalResults:parseData.totalResults})
}


  render() {
//     console.log(this.state.articles);
// console.log(this.state.totalResults);
    return (

      
      
      <div className="row" style={{rowGap:"10px"}}>


    
           <InfiniteScroll
    dataLength={this.state.articles.length}
    next={this.fetchMoreData}
    style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
    // inverse={true} //
    hasMore={this.state.articles.length != this.state.totalResults}
    loader={<h4>Loading...</h4>}
    scrollableTarget="scrollableDiv"
  >
   

     
        
        {/* {console.log(this.articles)} */}
        {this.state.articles.map((element)=>{
return <div className="col-3" key={element.url} > <NewsItem title={element.title} description={element.description} image_url={element.urlToImage} item_url={element.url} ></NewsItem></div>
          // when we use map() we have to use a unique key for each element
        })}

          </InfiniteScroll>

        <div className="col-12">
          <button className='previous' disabled={this.state.page === 1?'disabled':false} onClick={()=>this.handleNavigatePage("previous")}>Previous</button>
          <button disabled={this.state.page >=(this.state.totalResults/this.props.pageSize)?'disabled':false}  className='next'  onClick={()=>this.handleNavigatePage("next")} >Next</button>
        </div>



          
      </div>
      
    )
  }
}

