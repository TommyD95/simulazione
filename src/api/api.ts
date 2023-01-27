import IApi from "./model";


   const api:IApi= {
    endpointsPage:{
          home:"/",
         preventivoPage: "/preventivoPage",
         preventiviPage: "/preventiviPage",
         compilaRichiesta:"/compilaRichiesta"
   },
   menus: "http://localhost:3000/menus",
   content: "http://localhost:3000/content",
   preventivo:"http://localhost:3000/preventivo",
}

export default api;