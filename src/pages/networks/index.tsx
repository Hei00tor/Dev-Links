import {useState, FormEvent, useEffect} from "react"
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import {db} from "../../services/firebaseConnection"
import {setDoc,getDoc,doc} from "firebase/firestore"


export function Networks(){
    const [youtube, setYoutube] = useState('')
    const [instagram, setInstagram] = useState('')
    const [twitch, setTwitch] = useState('')

    useEffect(()=>{
        function loadLinks(){
            const docRef = doc(db,"social","link")
            getDoc(docRef)
            .then((snapshot)=>{
                if(snapshot.data() !== undefined){
                    setYoutube(snapshot.data()?.youtube)
                    setInstagram(snapshot.data()?.instagram)
                    setTwitch(snapshot.data()?.twitch)
                }
            })
        }

        loadLinks();
    },[])

    function handleRegister(e: FormEvent){
        e.preventDefault()
         
        setDoc(doc(db,"social","link"),{
            youtube: youtube,
            instagram: instagram,
            twitch: twitch
        })
        .then(()=>{
            alert("Links registrados com sucesso")
            setYoutube('')
            setInstagram('')
            setTwitch('')
        })
        .catch((error)=>{
            console.log(error)
            alert("Ops, algo deu errado")
        })
     
    }
   

    return (
        <div className="flex items-center flex-col min-h-screen pb-7 px-2">
            <Header/>

            <h1 className="text-white text-2xl font-medium mt-8 mb-4">Minhas redes sociais</h1>

        <form className="flex flex-col max-w-xl w-full" onSubmit={handleRegister}>
            <label className="text-white font-medium mt-2 mb-2">Link do youtube</label>
            <Input
            type="url"
            placeholder="Digite a url do youtube..."
            value={youtube}
            onChange={e => setYoutube(e.target.value)}
            />
             <label className="text-white font-medium mt-2 mb-2">Link do instagram</label>
            <Input
            type="url"
            placeholder="Digite a url do instagram..."
            value={instagram}
            onChange={e => setInstagram(e.target.value)}
            />
             <label className="text-white font-medium mt-2 mb-2">Link da TwitchTv</label>
            <Input
            type="url"
            placeholder="Digite a url da Twitch..."
            value={twitch}
            onChange={e => setTwitch(e.target.value)}
            />

            <button
            type="submit"
            className='text-white bg-blue-600 h-9 rounded-md items-center justify-center flex mb-7 font-medium'
            >
                Salvar links
            </button>
        </form>

        </div>
    )
}