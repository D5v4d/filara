import { IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { useLikesSeminarMutation } from "../api/dataSidebar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export const LikesBtn = ({ id }: { id: number }) => {
  const seminar = useSelector((state: RootState) => state.seminars.table.find((item) => item.id === id));

  const [upLikes] = useLikesSeminarMutation();

  const handleLike = () => {
    if (!seminar) return;

    const newIsLiked = !seminar.isLiked;
    const currentLikes = seminar.likes ?? 0;
    const newLikes = newIsLiked ? currentLikes + 1 : currentLikes - 1;

    console.log(id, newLikes, newIsLiked);
    upLikes({ id, likes: newLikes, isLikes: newIsLiked });
  };

  return <IconButton onClick={handleLike}>{seminar?.isLiked ? <FavoriteBorderIcon style={{ color: '#C06ECC' }}/> : <FavoriteIcon style={{ color: '#C06ECC' }}/>}</IconButton>;
};
