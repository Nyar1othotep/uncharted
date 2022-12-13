import "./UnchartedMovie.scss";

const UnchartedMovie = () => {
   return (
      <div className="uncharted-movie">
         <div className="uncharted-movie__container _container">
            <div className="uncharted-movie__body">
               <h1 className="uncharted-movie__title">
                  Официальный фильм по мотивам UNCHARTED
               </h1>
               <div className="uncharted-movie__row">
                  <div className="uncharted-movie__column">
                     <div className="uncharted-movie__slogan">
                        Удача любит смелых
                     </div>
                     <div className="uncharted-movie__text">
                        Величие от малых начинаний до больших экранов – ждите
                        мировую премьеру фильма «Анчартед: На картах не
                        значится» с участием Тома Холланда и Марка Уолберга. В
                        кинотеатрах всего мира, начиная с февраля 2022 года.
                     </div>
                  </div>
                  <div className="uncharted-movie__column">
                     <div className="uncharted-movie__video">
                        <iframe
                           width="560"
                           height="315"
                           src="https://www.youtube.com/embed/UZOnOfc83Q0"
                           title="YouTube video player"
                           frameborder="0"
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                           allowfullscreen
                        ></iframe>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default UnchartedMovie;
