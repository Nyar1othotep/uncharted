import './CollectionList.scss';
import { useRef, useEffect, useState } from "react";
import UnchartedService from "../../services/UnchartedService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

const CollectionList = () => {
	const [collectionList, setCollectionList] = useState([]);
   const shouldLog = useRef(true);
   const { loading, error, getCollection } = UnchartedService();

   useEffect(() => {
      if (shouldLog.current) {
         shouldLog.current = false;
         onRequest();
      }
      // eslint-disable-next-line
   }, []);

   const onRequest = () => {
      getCollection().then(onCollectionListLoaded);
   };

   const onCollectionListLoaded = (collection) => {
      setCollectionList((collectionList) => collection);
   };

	const renderItems = (arr) => {
      const items = arr.map((item, i) => {
         return (
            <li className="collection-list__column" key={item.id}>
               <div className="collection-list__item">
                  <img src={item.img} alt="" />
               </div>
            </li>
         );
      });
      return <ul className="collection-list__row">{items}</ul>;
   };

   const items = renderItems(collectionList);

   const spinner = loading ? <Spinner /> : null;
   const errorMessage = error ? <ErrorMessage /> : null;

   return (
      <div className="collection-list">
         <div className="collection-list__container _container">
            <div className="collection-list__body">
               {errorMessage}
               {spinner}
               {items}
            </div>
         </div>
      </div>
   );
}

export default CollectionList;