import "./photo-style.css";
export const PhotoContainer = ({ photo }) => {
  return (
    <>
      <article className='img_container'>
        <figure className='img_item'>
          <img src={photo.download_url} alt='lorem picsum random' />
          <figcaption>{photo.author}</figcaption>
        </figure>
      </article>
    </>
  );
};
