import "./AboutUncharted.scss";
import cardBg from "../../resources/img/card-bg.png";
import cardOne from "../../resources/img/card-1.png";
import cardTwo from "../../resources/img/card-2.png";
import cardThree from "../../resources/img/card-3.png";
import img from "../../resources/img/some-bg.png";

const AboutUncharted = () => {
   return (
      <div className="about-uncharted">
         <div className="about-uncharted__container _container">
            <div className="about-uncharted__body">
               <h1 className="about-uncharted__title">
                  О чем серия Uncharted?
               </h1>
               <ul className="about-uncharted__row">
                  <li className="about-uncharted__column">
                     <div
                        className="about-uncharted__item item-about-uncharted"
                        style={{
                           backgroundImage: `url(${cardBg})`,
                           backgroundRepeat: "no-repeat",
                           backgroundSize: "cover",
                        }}
                     >
                        <div className="item-about-uncharted__img">
                           <img src={cardOne} alt="cardOne" />
                        </div>
                        <div className="item-about-uncharted__title">
                           Незабываемые персонажи
                        </div>
                        <div className="item-about-uncharted__descr">
                           Играя за Натана Дрейка и Хлою Фрейзер, познакомьтесь
                           с невероятно реалистичными, узнаваемыми и сложными
                           персонажами, которыми движут разные порой очень
                           противоречивые мотивы.
                        </div>
                     </div>
                  </li>
                  <li className="about-uncharted__column">
                     <div
                        className="about-uncharted__item item-about-uncharted"
                        style={{
                           backgroundImage: `url(${cardBg})`,
                           backgroundRepeat: "no-repeat",
                           backgroundSize: "cover",
                        }}
                     >
                        <div className="item-about-uncharted__img">
                           <img src={cardTwo} alt="cardTwo" />
                        </div>
                        <div className="item-about-uncharted__title">
                           Кинематографичный приключенческий боевик
                        </div>
                        <div className="item-about-uncharted__descr">
                           Откройте для себя кинематографичную серию UNCHARTED и
                           ее захватывающий игровой процесс. Путешествуйте по
                           просторным, до мелочей проработанным локациям и
                           примите вызов грозных врагов в погоне за утерянными
                           сокровищами.
                        </div>
                     </div>
                  </li>
                  <li className="about-uncharted__column">
                     <div
                        className="about-uncharted__item item-about-uncharted"
                        style={{
                           backgroundImage: `url(${cardBg})`,
                           backgroundRepeat: "no-repeat",
                           backgroundSize: "cover",
                        }}
                     >
                        <div className="item-about-uncharted__img">
                           <img src={cardThree} alt="cardThree" />
                        </div>
                        <div className="item-about-uncharted__title">
                           Знаменитые локации
                        </div>
                        <div className="item-about-uncharted__descr">
                           Покорите заснеженные гималайские вершины, пройдите
                           пустыни верхом на лошади и проберитесь сквозь
                           непроходимые джунгли. Войдите в древние храмы и
                           города, полные чудес и загадок. Каждое приключение в
                           серии UNCHARTED отправит вас в живописные места по
                           всему земному шару.
                        </div>
                     </div>
                  </li>
               </ul>
               <div className="about-uncharted__img">
                  <img src={img} alt="About Uncharted img" />
               </div>
            </div>
         </div>
      </div>
   );
};

export default AboutUncharted;
