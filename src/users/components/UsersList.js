import React from "react";
import "./UsersList.css";
import UserItem from "./UserItem";
import Card from "../../shared/components/UIElements/Card";

const UsersList = ({ items }) => {
  if (items.length === 0) {
    return (
        <Card>
      <div className="center">
        <h2>No user found.</h2>
      </div>
      </Card>
    );
  }

  return (
    <ul  className="user-list">
      {items.map((item) => {
        return (
          <UserItem
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            placeCount={item.places}
          />
        );
      })}
    </ul>
  );
};

export default UsersList;
