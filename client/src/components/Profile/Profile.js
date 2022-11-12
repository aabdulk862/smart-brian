import React, { Component } from "react";
import "./Profile.css";

const Profile = ({ isProfileOpen, toggleModal, user }) => {
  return (
    <div className="profile-modal">
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white">
        <main className="pa4 black-80 w-80">
          <img
            src="https://randomuser.me/api/portraits/men/40.jpg"
            className="br-100 h3 w3 dib"
            alt="avatar"
          />
          <h1>{user.name}</h1>
          <h4>{`Images Submitted: ${user.entries}`}</h4>
          <p>{`Member since: ${new Date(user.joined).toLocaleDateString()}`}</p>
          <hr />
          <label className="mt2 fw6" htmlFor="user-name">
            Name:
          </label>
          <input
            className="pa2 ba w-100"
            placeholder={user.name}
            type="text"
            name="user-name"
            id="name"
            // onChange={this.onNameChange}
          />
          <label className="mt2 fw6" htmlFor="user-age">
            Age:
          </label>
          <input
            className="pa2 ba w-100"
            placeholder={user.age}
            type="text"
            name="user-age"
            id="age"
            // onChange={this.onNameChange}
          />
          <label className="mt2 fw6" htmlFor="location">
            Location:
          </label>
          <input
            className="pa2 ba w-100"
            placeholder={user.location}
            type="text"
            name="location"
            id="location"
            // onChange={this.onNameChange}
          />
          <div
            className="mt4"
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <button className="b pa2 grow pointer hover-white w-40 bg-light-blue b--black-20">
              Save
            </button>
            <button
              className="b pa2 grow pointer hover-white w-40 bg-light-red b--black-20"
              onClick={toggleModal}
            >
              Cancel
            </button>
          </div>
        </main>
        <div className="modal-close" onClick={toggleModal}>
          &times;
        </div>
      </article>
    </div>
  );
};
export default Profile;
