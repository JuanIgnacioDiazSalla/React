import { useState, useEffect } from "react";
import { getDocs, collection, getFirestore } from "firebase/firestore";

export const useCollection = (miCollection) => {
    const [data, setData] = useState([]);


    useEffect(() => {
        const db = getFirestore();

        const miDataCollection = collection(db, miCollection);

        getDocs(miDataCollection)
            .then((snapshot) => {
                setData(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            })

    }, []);
    return { data };
};