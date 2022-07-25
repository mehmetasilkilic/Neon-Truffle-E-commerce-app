import { FC, Key } from "react";
import { useNavigate } from "react-router-dom";

import "./directoryItem.styles.scss";

type DirectoryCategory = {
  id: Key;
  title: string;
  imageUrl: string;
  route: string;
};

type DirectoryItemProps = {
  category: DirectoryCategory;
};

const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <div onClick={onNavigateHandler} className="directory-item-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="body">
        <h2>{title}</h2>
        {/* <p>Shop Now</p> */}
      </div>
    </div>
  );
};

export default DirectoryItem;
