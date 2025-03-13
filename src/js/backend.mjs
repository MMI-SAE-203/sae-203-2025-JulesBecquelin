import PocketBase from 'pocketbase' ;
const pb = new PocketBase('http://127.0.0.1:8090') ;

export async function allFilms() {
    const a= await pb.collection('Films').getFullList({ sort :'+Date_de_projection'}) ;
    return a
};

export async function allActivite(){
    const b = await pb.collection('Activites').getFullList({ sort :'+Date'});
    return b
};

export async function allInvite() {
    const c = await pb.collection('Invites').getFullList({sort : "+Nom"})
    return c
    
};

export async function FilmById(id) {
    const d = await pb.collection('Films').getOne(id) ;
    return d
};

export async function ActiviteById(id) {
    const e = await pb.collection('Activites').getOne(id) ;
    return e
}

export async function InviteById(id) {
    const e = await pb.collection('Invites').getOne(id) ;
    return e
};

export async function allActiviteByInviteId(id) {
    const f = await pb.collection('Activites').getFullList( {filter : `Invite.id='${id}'`, expand : 'Invites' });
    return f;
};

export async function allActiviteByInviteName(Nom) {
    const f = await pb.collection('Activites').getFullList( {filter : `Invite.Nom='${Nom}'`, expand : 'Invites' });
    return f;
};

export async function addNewActivite(newActivite){

    await pb.collection('Activites').create(newActivite);
};

export async function addNewInvite(newInvite){

    await pb.collection('Invites').create(newInvite);
};

export async function addNewFilm(newFilm){

    await pb.collection('Films').create(newFilm);
};

export async function updateActiviteById(id){
    await pb.collection('Activites').update(id);
};

export async function updateInviteById(id){
    await pb.collection('Invites').update(id);
};

export async function updateFilmById(id){
    await pb.collection('Films').update(id);
};

export async function deleteActiviteById(id){
    await pb.collection('Activites').delete(id);
};

export async function deleteInviteById(id){
    await pb.collection('Invites').delete(id);
};

export async function deleteFilmById(id){
    await pb.collection('Films').delete(id);
};


export async function getFilm(id) {
    try {
        let data = await pb.collection('Films').getOne(id);
        data.imageUrl = pb.files.getURL(data, data.image);
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en lisant le film', error);
        return null;
    }
}

export async function getFilms() {
    try {
        let data = await pb.collection('Films').getFullList({
            sort: 'created',
        });
        data = data.map((i) => {
            i.img= pb.files.getURL(i,i.images);
            return i;
        });
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en lisant la liste des films', error);
    }
}



export async function getInvites() {
    try {
        let data = await pb.collection('Invites').getFullList({
            sort: 'created',
        });
        data = data.map((i) => {
            i.img= pb.files.getURL(i,i.images);
            return i;
        });
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en lisant la liste des films', error);
    }
}







export async function getInvitesPhoto() {


  
  const records = await pb.collection('Invites').getFullList();

  
  const photos = records.map((record) => ({
    id: record.id,
    photoField: record.Photo,
    photoUrl: pb.files.getURL(record, record.Photo),
  }));

  return photos;
}


export async function filterByCat(categorie) {
    try{
        console.log('cat',categorie);
        let a = await pb.collection('Films').getFullList({
            sort : '+Date_de_projection'
            , filter : `Field ~ "${categorie}"`
        });
        console.log(a)
        a = a.map((filme)=>{
            filme.imageUrl = pb.files.getURL(filme,);
            return filme;
        });
        return a;
    }catch(error){
        console.log('Une erreur est survenue en filtrant la liste des films',error);
        return[];
    }
}