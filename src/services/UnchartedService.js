import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {
   const { loading, request, error, clearError } = useHttp();

   const _apiAllMainChar =
      "https://gist.githubusercontent.com/Nyar1othotep/877c3c7389d0897d379dd9955e134049/raw/95f5e19f4b9bcef1dd6d76d790e5d90de3731e17/unchartedMainChar.json";

   const _apiAllSecondChar =
      "https://gist.githubusercontent.com/Nyar1othotep/8f3c9edd230a0bf45c307d3bee944ba4/raw/95cc4445b55cbefa60b51f37f0fe2e8e77435acb/unchartedSecondChar.json";

   const _apiCollection =
      "https://gist.githubusercontent.com/Nyar1othotep/452788c7e6e4116c04b79bf191ada46b/raw/6b0f698b7efac88ea9f2339a621a0decdfaece01/unchartedCollection.json";

   const getAllMainCharacters = async () => {
      const res = await request(`${_apiAllMainChar}`);
      return res.map(_transfromMainCharacter);
   };

   const getAllSecondCharacters = async () => {
      const res = await request(`${_apiAllSecondChar}`);
      return res.map(_transfromSecondCharacter);
   };

   const getCollection = async () => {
      const res = await request(`${_apiCollection}`);
      return res.map(_transfromCollection);
   };

   const _transfromMainCharacter = (char) => {
      return {
         id: char.id,
         name: char.name,
         descr: char.descr,
         game: char.game,
         img: char.img,
      };
   };

   const _transfromSecondCharacter = (char) => {
      return {
         id: char.id,
         name: char.name,
         game: char.game,
         img: char.img,
      };
   };

   const _transfromCollection = (char) => {
      return {
         id: char.id,
         img: char.img,
      };
   };

   return {
      loading,
      error,
      getAllMainCharacters,
      getAllSecondCharacters,
      getCollection,
      clearError,
   };
};

export default useMarvelService;
