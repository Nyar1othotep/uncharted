import "./CollectionPreview.scss";
import img from "../../resources/img/collection.png";

const CollectionPreview = () => {
   return (
      <div className="collection-preview">
         <div className="collection-preview__container _container">
            <div className="collection-preview__body">
               <div className="collection-preview__logo">
                  <img src={img} alt="collection preview logo" />
               </div>
               <div className="collection-preview__content">
                  <p>
                     UNCHARTED: Натан Дрейк. Коллекция» включает в себя три
                     обновленных версии игр для PlayStation 4, которые отправят
                     вас в путешествия по завораживающим местам по всему миру!
                  </p>
                  <p>
                     В «UNCHARTED: Судьба Дрейка» исследуйте древние руины и
                     заброшенную базу времен Второй мировой войны, чтобы найти
                     вход в затерянный город Эльдорадо.
                  </p>
                  <p>
                     В «UNCHARTED 2: Среди воров» побывайте в Стамбуле, Борнео и
                     Гималайских горах и попытайтесь найти мифическое царство
                     Шамбала.
                  </p>
                  <p>
                     В «UNCHARTED 3: Иллюзии Дрейка» отправляйтесь в Лондон,
                     чтобы раскрыть тайну загадочного города Убар, он же
                     «Атлантида песков», и пройдите сквозь песчаную бурю на коне
                     в безжалостной Аравийской пустыне.
                  </p>
                  <p>
                     Вы побываете в: Панаме, Эльдорадо, Стамбуле, Борнео,
                     Непале, Тибете, Гималайских горах, Шамбале, Англии,
                     Колумбии, Франции, Йемене, Убаре («Атлантиде песков»)
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CollectionPreview;
