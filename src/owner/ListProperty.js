import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getHouseOwner } from "../_actions/house";
import { House } from "../components/Loader"

class ListProperty extends React.Component {
  componentDidMount() {
    this.props.getHouseOwner();
  }

  render() {
    const { data: houseData, loading, error } = this.props.house;

    if (error) return <h1>There's unknown error</h1>;
    if (loading) return <House />;
    return (
      <>
        <div className="d-flex justify-content-between">
          <h5>Property List</h5>
          <Link to="/profile/add">
            <button className="btn btn-sm btn-success">Add New Property</button>
          </Link>
        </div>
        <div className="row">
          {houseData && houseData.length > 0
            ? houseData.map((house, i) => (
                <div className="col-md-4 mb-3" key={i}>
                  <div className="card">
                    <img
                      className="card-img-top img-fluid"
                      src={house.images}
                      alt="..."
                    />
                    <div className="p-2">
                      <p className="bold mb-0">{house.name}</p>
                      <small>{house.city}</small>
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    house: state.house
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getHouseOwner: () => dispatch(getHouseOwner())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListProperty);
