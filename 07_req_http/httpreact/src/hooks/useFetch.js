import {useState, useEffect} from 'react';

//4 - custom Hooks
export const useFetch = (url) =>{
    const [data, setData] = useState(null, url);

//5 - refatorando o POST
const [config, setConfig] = useState(null);
const [method, setMethod] = useState(null);
const [callFetch, setCallFetch] = useState(false);

//6- loading state
const [loading, setLoading] = useState(false);

//8 - deseafio 6 - deletando um item
const [itemId, setItemId] = useState(null);

const [error, setError] = useState(null);

const httpConfig =(data, method)=> {
    if(method === "POST"){
        setConfig({
            method,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        });

       
    }else if(method === "DELETE"){       //8- Deletando um item
        setConfig({
            method,
            headers: {
                "Content-Type": "application/json"
            },           
        });

        setItemId(data);
        setMethod(method);
        
    }
};

//7 - Tratando erros com try catch
    useEffect(() => {
        const fetchData = async() =>{
//6 - loading
            setLoading(true);
            try {
                const res = await fetch(url);

                const json = await res.json();

                setData(json);

            } catch (error) {

                console.log(error.message);

                setError("Ocorreu um erro ao carregar os dados :(");
            }

            setLoading(false);
        };

        fetchData();
    },[url, callFetch, error]);


//5 - refatorando o POST request
     useEffect(()  =>  {
       
    const httpRequest =  async () => {
        let json; 
        if(method === "POST"){
            let fetchOptions =  [url, config];

            const res = await fetch(...fetchOptions);

            json = await res.json();           
        }
        else if(method === "DELETE"){
            const deleteUrl = `${url}/${itemId}`;

            const res = await fetch(deleteUrl, config);

            json = await res.json();
        }        
        
        setCallFetch(json);
    };
    
    httpRequest();
}, [config, method, url, itemId]);

    return{data, httpConfig, loading, error};

};