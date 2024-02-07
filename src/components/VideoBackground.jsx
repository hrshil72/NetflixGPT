import { useSelector } from "react-redux";

import useTrailer from "../hooks/useTrailer";

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store.movies?.movieTrailer);

  useTrailer(movieId);

  return (
    <div>
      <iframe
        className="w-screen aspect-video h-[85vh]"
        src={
          "https://www.youtube.com/embed/" +
          trailer?.key +
          "?autoplay=1&mute=1&showinfo=0"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; controls=0; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    </div>
  );
};

export default VideoBackground;
