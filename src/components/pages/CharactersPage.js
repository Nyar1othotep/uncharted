import MainCharList from "../mainCharList/MainCharList";
import CharDescr from "../charDescr/CharDescr";
import SecondCharList from "../secondCharList/SecondCharList";
import { useState } from "react";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

const CharactersPage = () => {
   const [selectedChar, setSelectedChar] = useState([]);
   const [popupIsOpen, setPopupIsOpen] = useState(false);
   const [lockBody, setLockBody] = useState(false);

   const togglePopup = () => {
      setPopupIsOpen((popupIsOpen) => !popupIsOpen);
   };

   const onSelectedChar = (id) => {
      setSelectedChar(id);
   };

   const onHandleClick = () => {
      setLockBody((lockBody) => !lockBody);
   };

   lockBody
      ? document.body.classList.add("lock")
      : document.body.classList.remove("lock");

   return (
      <>
         <ErrorBoundary>
            <MainCharList
               onSelectedChar={onSelectedChar}
               togglePopup={togglePopup}
               onHandleClick={onHandleClick}
            />
         </ErrorBoundary>
         {popupIsOpen ? (
            <ErrorBoundary>
               <CharDescr
                  selectedChar={selectedChar}
                  togglePopup={togglePopup}
                  onHandleClick={onHandleClick}
               />
            </ErrorBoundary>
         ) : null}
         <ErrorBoundary>
            <SecondCharList />
         </ErrorBoundary>
      </>
   );
};

export default CharactersPage;
