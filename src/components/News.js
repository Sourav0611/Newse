import React, { Component } from "react";
import Newsitems from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static propTypes = {
    pageSize: PropTypes.number,
    apiKey: PropTypes.string.isRequired,
    updateProgress: PropTypes.func.isRequired,
  };

  static defaultProps = {
    pageSize: 10,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = "News - Newse";
  }

  async componentDidMount() {
    this.updateNews();
  }

  async updateNews() {
    this.props.updateProgress(0);
    const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    
    console.log("Fetching news from URL:", url); // Debugging: Log the URL
    
    this.setState({ loading: true });
    
    try {
      let response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      let parsedData = await response.json();
      this.setState({
        articles: parsedData.articles || [],
        totalResults: parsedData.totalResults || 0,
        loading: false,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      this.setState({ loading: false });
    }
    this.props.updateProgress(100);
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    
    console.log("Fetching more news from URL:", url); // Debugging: Log the URL
    
    try {
      let response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      let parsedData = await response.json();
      this.setState({
        articles: this.state.articles.concat(parsedData.articles),
        totalResults: parsedData.totalResults,
      });
    } catch (error) {
      console.error("Error fetching more data:", error);
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center" style={{ margin: "35px 0px" }}>
          Latest News
        </h2>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => (
                <div className="col-lg-4 col-md-6 col-sm-12" key={element.url}>
                  <Newsitems
                    title={element.title || "No Title"}
                    description={element.description || "No Description"}
                    imageUrl={element.urlToImage}
                    newsurl={element.url}
                  />
                </div>
              ))}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default News;
