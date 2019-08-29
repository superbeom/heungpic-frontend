import React, { useState } from "react";
import PropTypes from "prop-types";
import FollowButtonPresenter from "./FollowButtonPresenter";
import { useMutation } from "react-apollo-hooks";
import { FOLLOW, UNFOLLOW } from "./FollowButtonQueries";
import { toast } from "react-toastify";

const FollowButtonContainer = ({ id, isFollowing }) => {
  const [isFollowingS, setIsFollowing] = useState(isFollowing);
  const [followMutation] = useMutation(FOLLOW, { variables: { id } });
  const [unfollowMutation] = useMutation(UNFOLLOW, { variables: { id } });

  const onClick = () => {
    try {
      if (isFollowingS === true) {
        setIsFollowing(false);
        unfollowMutation();
      } else {
        setIsFollowing(true);
        followMutation();
      }
    } catch (error) {
      console.log(error);
      toast.error("Can't press follow/unfollow button. Try again");
    }
  };

  return <FollowButtonPresenter isFollowing={isFollowingS} onClick={onClick} />;
};

FollowButtonContainer.propTypes = {
  id: PropTypes.string.isRequired,
  isFollowing: PropTypes.bool.isRequired
};

export default FollowButtonContainer;
