import React, { Component } from 'react';
import Newsitems from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
export class News extends Component {
  static propTypes = {
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category: PropTypes.string,
  };

  static defaultProps = {
    country: 'in',
    pageSize: 10,
    category: 'general',
  };

  constructor({category, ...props}) {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0, // Initialize totalResults in the state
    };
    document.title = `${category} - Newse`;
  }

  async componentDidMount() {
    this.updateNews();
  }

  async updateNews() {
    this.props.setProgress(0);
    const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults, // Set totalResults in the state
      loading: false,
    });
    this.props.setProgress(100);
  }

  handleClickPrevious = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  handleClickNext = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  fetchMoreData = async ()=>{
    this.setState({page: this.state.page + 1});
    const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults, // Set totalResults in the state
      loading: false,
    });
  }
  render() {
    return (
      <div className='container my-3'>
        <h2 className='text-center' style={{ margin: '35px 0px' }}>
          Trending News:
        </h2>
        <InfiniteScroll 
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<h4><Spinner/></h4>}
        >
        {/* {this.state.loading && <Spinner />} */}
        <div className='container'>
        <div className='row'>
          {this.state.articles.map((element) => {
              return (
                <div className='col-lg-4 col-md-6 col-sm-12' key={element.url}>
                  <Newsitems
                    title={element.title ? element.title.slice(0, 45) : 'No Title'}
                    description={element.description ? element.description.slice(0, 88) : 'No Description'}
                    imageUrl={element.urlToImage}
                    newsurl={element.url}
                  />
                </div>
              );
            })}
        </div>
        </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default News;