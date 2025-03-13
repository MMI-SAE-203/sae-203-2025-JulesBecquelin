import {allFilms,allActivite,allInvite,FilmById,ActiviteById,InviteById,allActiviteByInviteId,allActiviteByInviteName,addNewActivite,addNewInvite,addNewFilm,updateActiviteById,updateInviteById,updateFilmById,deleteActiviteById,deleteInviteById,deleteFilmById,getInvitesPhoto} from "./src/js/backend.mjs";


// try{
//     const a = await allFilms();
//     console.log(JSON.stringify(a,null, 2)) ;
//     } catch (e) {
//     console.error(e) ;
//     }

// try{
    // const a = await allActivite();
    // console.log(JSON.stringify(a,null, 2)) ;
    // } catch (e) {
    // console.error(e) ;
    // }
// 

// try{
//     const a = await allInvite();
//     console.log(JSON.stringify(a,null, 2)) ;
//     } catch (e) {
//     console.error(e) ;
//     }

// try{
//     const a = await FilmById("69178v1w79e5a21");
//     console.log(JSON.stringify(a,null, 2)) ;
//     } catch (e) {
//     console.error(e) ;
//     }

// try{
//     const a = await ActiviteById("2d76tfs3y97r57q");
//     console.log(JSON.stringify(a,null, 2)) ;
//     } catch (e) {
//     console.error(e) ;
//     }


try{
    const a = await InviteById("jlkryd4r1sg78ud");
    console.log(JSON.stringify(a,null, 2)) ;
    } catch (e) {
    console.error(e) ;
    }

// try{
//     const a = await allActiviteByInviteId("7dymk6t51ip9lfz");
//     console.log(JSON.stringify(a,null, 2)) ;
//     } catch (e) {
//     console.error(e) ;
//     }

// try{
//     const a = await allActiviteByInviteName("Amélie Mauresmo");
//     console.log
//     (JSON.stringify(a,null, 2)) ;
//     } catch (e) {
//     console.error(e) ;
//     }

// try{
//     const a = {
//         "Titre": "ToToLand",
//         "Organisateur": "Jean LaSalle",
//         "Description": "c'est bi1",
//         "Date": "2030-05-02 23:00:00.123Z",
//         "Invite": "3ees408c0i3ejuj"
//     };
//     await addNewActivite(a);
// }catch(e) {
//     console.error(e);
// }

// try{
//     const a = {
//         "Biographie": "C'est un mec bi1",
//         "Nom": "Jean LaSalle",
//         "Activite": "3f107sv5y422hm6",
//     };
//     await addNewInvite(a);
// }catch(e) {
//     console.error(e);
// }

// try{
//     const a = {
//     "Titre": "La vie d'un mec bi1",
//     "Synopsis" : "c'est l'histoite d'un mec bi1",
//     "BA": "https://UnMecBi1LeFilm.fr",
//     "Genre" : "Documentaire",
//     "Date_de-projection" : "2030-05-02 23:00:00.123Z",
//     };
//     await addNewFilm(a);
// }catch(e) {
//     console.error(e);
// }

// try{
//     const a = {
//         "Titre": "TataLand",
//         "Organisateur": "Jean TOTO",
//         "Description": "c'est pas un mec bi1",
//         "Date": "2030-05-02 23:00:00.123Z",
//         "Invite": "3ees408c0i3ejuj"
//     };
//     await updateActiviteById("we1ar7d8f7u5hpe",a);
// }catch(e) {
//     console.error(e);
// }

// try{
//     const a = {
//         "Biographie": "C'est pas un mec bi1",
//         "Nom": "Jean LaSalle",
//         "Activite": "3f107sv5y422hm6",
//     };
//     await updateInviteById("2dr27un8i5af65s",a);
// }catch(e) {
//     console.error(e);
// }

// try{
//     const a = {
//     "Titre": "La vie d'un mec pas bi1",
//     "Synopsis" : "c'est l'histoite d'un mec pas bi1",
//     "BA": "https://UnMecPasBi1LeFilm.fr",
//     "Genre" : "Film",
//     "Date_de-projection" : "2030-04-02 23:00:00.123Z",
//     };
//     await updateFilmById("v6q0d6oy96tlhss",a);
// }catch(e) {
//     console.error(e);
// }

// try{
//     await deleteFilmById("v6q0d6oy96tlhss");
// }catch(e){
//     console.error(e);
// }

// try{
//     await deleteActiviteById("we1ar7d8f7u5hpe");
// }catch(e){
//     console.error(e);
// }

// try{
//     await deleteInviteById("2dr27un8i5af65s");
// }catch(e){
//     console.error(e);
// }

// try {
//     await getInvitesPhoto();
// }catch (e){
//     console.error(e)
// }