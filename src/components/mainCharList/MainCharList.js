import "./MainCharList.scss";
import { useRef, useEffect, useState } from "react";
import UnchartedService from "../../services/UnchartedService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

const MainCharList = (props) => {
   const [charList, setCharList] = useState([]);
   const shouldLog = useRef(true);
   const { loading, error, getAllMainCharacters } = UnchartedService();

   useEffect(() => {
      if (shouldLog.current) {
         shouldLog.current = false;
         onRequest();
      }
      // eslint-disable-next-line
   }, []);

   const onRequest = () => {
      getAllMainCharacters().then(onCharListLoaded);
   };

   const onCharListLoaded = (char) => {
      setCharList((charList) => char);
   };

   const renderItems = (arr) => {
      const items = arr.map((item, i) => {
         return (
            <li className="char__column" key={item.id}>
               <div className="char__item">
                  <img src={item.img} alt="" />
                  <button
                     className="char__btn btn"
                     onClick={() => {
                        props.onSelectedChar(item.id);
                        props.togglePopup();
								props.onHandleClick();
                     }}
                  >
                     {item.name}
                  </button>
               </div>
            </li>
         );
      });
      return <ul className="char__row">{items}</ul>;
   };

   const items = renderItems(charList);

   const spinner = loading ? <Spinner /> : null;
   const errorMessage = error ? <ErrorMessage /> : null;

   return (
      <div className="char">
         <div className="char__container _container">
            <div className="char__body">
               {errorMessage}
               {spinner}
               {items}
            </div>
         </div>
      </div>
   );
};

export default MainCharList;
