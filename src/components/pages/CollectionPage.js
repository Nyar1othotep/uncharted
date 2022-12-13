import CollectionPreview from "../collectionPreview/CollectionPreview";
import CollectionList from "../collectionList/CollectionList";
import bg from "../../resources/img/collection-bg.png";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

const CollectionPage = () => {
   return (
      <div
         style={{
            backgroundImage: `url(${bg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
         }}
      >
         <CollectionPreview />
         <ErrorBoundary>
            <CollectionList />
         </ErrorBoundary>
      </div>
   );
};

export default CollectionPage;
