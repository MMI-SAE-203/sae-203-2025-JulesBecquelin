import PocketBase from 'pocketbase' ;
const pb = new PocketBase('http://127.0.0.1:8090') ;

export async function allFilms() {
    const a= await pb.collection('Films').getFullList({ filter :'+Date_de_projection'}) ;
    return a
};

export async function allActivite(){
    const b = await pb.collection('Activites').getFullList({ sort :'+date'});
    return b
};

export async function allInvite() {
    const c = await pb.collection('Invites').getFullList({sort : "+Nom"})
    return c
    
};

export async function oneID(id) {
    const d = await pb.collection('Films').getOne(id) ;
    return d
}