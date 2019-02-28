import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import { bindActionCreators } from "redux";

class PostList extends React.Component {
  componentDidMount() {
    this.props.getPosts();
  }

  renderPosts() {
    console.log(this.props);
    const { posts } = this.props;
    if (typeof posts === "undefined" || posts === null) {
      return "";
    }
    return this.props.posts.posts.map(post => {
      return (
        <div style={{ margin: "10px" }} className="ui card" key={post.id}>
          <div className="content">
            <div className="header">Post id: {post.id}</div>
            <div className="description">{post.title}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="content">
        <h2
          style={{ fontSize: "1.7em", marginTop: "20px", textAlign: "center" }}
        >
          Redux con Saga
        </h2>
        <div
          style={{
            margin: "10px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "stretch"
          }}
        >
          {this.renderPosts() || ""}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { posts: state.post };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getPosts: fetchPosts }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
