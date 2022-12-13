import "./SecondCharList.scss";
import { useRef, useEffect, useState } from "react";
import UnchartedService from "../../services/UnchartedService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

const SecondCharList = () => {
   const [charList, setCharList] = useState([]);
   const shouldLog = useRef(true);
   const { loading, error, getAllSecondCharacters } = UnchartedService();

   useEffect(() => {
      if (shouldLog.current) {
         shouldLog.current = false;
         onRequest();
      }
      // eslint-disable-next-line
   }, []);

   const onRequest = () => {
      getAllSecondCharacters().then(onCharListLoaded);
   };

   const onCharListLoaded = (char) => {
      setCharList((charList) => char);
   };

   const renderItems = (arr) => {
      const items = arr.map((item, i) => {
         return (
            <li className="second-char__column" key={item.id}>
               <div className="second-char__item">
                  <img src={item.img} alt="" />
                  <div className="second-char__name">{item.name}</div>
                  <div className="second-char__game">{item.game}</div>
               </div>
            </li>
         );
      });
      return <ul className="second-char__row">{items}</ul>;
   };

   const items = renderItems(charList);

   const spinner = loading ? <Spinner /> : null;
   const errorMessage = error ? <ErrorMessage /> : null;

   return (
      <div className="second-char">
         <div className="second-char__container _container">
            <div className="second-char__body">
               <div className="second-char__title">
                  Второстепенные персонажи
               </div>
               {errorMessage}
               {spinner}
               {items}
            </div>
         </div>
      </div>
   );
};

export default SecondCharList;
