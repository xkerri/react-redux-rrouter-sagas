import React, { Component } from "react";
import { fetchAlbums } from "../actions";
import { connect } from "react-redux";

class Albums extends Component {
  componentDidMount() {
    this.props.fetchAlbums();
  }

  renderAlbums() {
    const { albums } = this.props;
    if (typeof albums === "undefined" || albums === null) {
      return "";
    }
    return albums.albums.map(album => {
      return (
        <div className="ui card" key={album.id}>
          <div className="content">
            <div className="header">Album id: {album.id}</div>
            <div className="description">{album.title}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
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
          {this.renderAlbums()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { albums: state.albums };
};

export default connect(
  mapStateToProps,
  { fetchAlbums }
)(Albums);
