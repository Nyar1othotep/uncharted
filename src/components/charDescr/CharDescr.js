import "./CharDescr.scss";
import { useState, useEffect } from "react";
import UnchartedService from "../../services/UnchartedService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

const CharDescr = (props) => {
   const [char, setChar] = useState(null);

   const { loading, error, getAllMainCharacters } = UnchartedService();

   const handleClick = () => {
      props.togglePopup();
      props.onHandleClick();
   };

   useEffect(() => {
      updateChar();
      // eslint-disable-next-line
   }, [props.selectedChar]);

   const onCharLoaded = (char) => {
      setChar(char.filter((item) => item.id === props.selectedChar));
   };

   const updateChar = () => {
      const { selectedChar } = props;
      if (!selectedChar) return;
      getAllMainCharacters(selectedChar).then(onCharLoaded);
   };

   const spinner = loading ? <Spinner /> : null;
   const errorMessage = error ? <ErrorMessage /> : null;
   const content = !(loading || error || !char) ? <View char={char} /> : null;

   return (
      <>
         <div className="popup">
            <div className="popup__body">
               {errorMessage}
               {spinner}
               {content}
            </div>
            <button className="popup__close" onClick={handleClick}>
               X
            </button>
         </div>
      </>
   );
};

const View = ({ char }) => {
   const [{ name, descr, game, img }] = char;

   return (
      <>
         <div className="popup__char-img">
            <img src={img} alt={name} />
         </div>
         <div className="popup__char-info">
            <div className="popup__char-name">{name}</div>
            <div className="popup__char-descr">{descr}</div>
            <div className="popup__char-game">{game}</div>
         </div>
      </>
   );
};

export default CharDescr;
