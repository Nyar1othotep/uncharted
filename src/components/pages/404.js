import { Link } from "react-router-dom";
import ErrorMessage from "../errorMessage/ErrorMessage";

const Page404 = () => {
   return (
      <div
         style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            paddingTop: "100px",
         }}
      >
         <ErrorMessage />
         <h1
            className="message"
            style={{ margin: "20px 0 0 0", color: "white" }}
         >
            This page doesn`t exist :(
         </h1>
         <Link
            to="/"
            style={{
               margin: "50px 0 0 0",
               background: "white",
               color: "black",
               padding: "5px 10px",
               borderRadius: "5px",
            }}
         >
            Go home
         </Link>
      </div>
   );
};

export default Page404;
