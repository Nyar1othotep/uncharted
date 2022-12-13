import "./Preview.scss";
import bg from "../../resources/img/main-bg.png";
import logo from "../../resources/img/logo.png";

const Preview = () => {
   return (
      <div className="preview">
         <div
            className="preview__container _container"
            style={{
               backgroundImage: `url(${bg})`,
               backgroundRepeat: "no-repeat",
               backgroundSize: "cover",
            }}
         >
            <div className="preview__body">
               <div className="preview__logo">
                  <img src={logo} alt="logo" />
               </div>
               <div className="preview__descr">
                  Отправляйтесь в кругосветное путешествие вместе с Натаном
                  Дрейком и Хлоей Фрейзер, столкнитесь лицом к лицу с военными
                  преступниками и наемниками, повстречайте старых друзей,
                  узнайте всеми позабытые тайны и помогите героям преодолеть
                  глубочайшие страхи, чтобы оставить свое наследие.
               </div>
               <button className="preview__btn btn">Купить</button>
            </div>
         </div>
      </div>
   );
};

export default Preview;
