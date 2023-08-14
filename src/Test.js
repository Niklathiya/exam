import React, { useEffect, useState } from 'react'
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    getDocs,
    setDoc,
} from "firebase/firestore";
import { fireStoreDb } from "./firebaseConfig";

const Test = () => {
    const [data, setData] = useState([]);
    const [p_name, setNewName] = useState("");
    const [p_image, setNewImage] = useState("");
    const [price, setNewPrice] = useState("");



    const fetchData = async () => {
        const querySnapshot = await getDocs(collection(fireStoreDb, "item"));

        const data = [];
        querySnapshot.forEach((doc) => {
            if (doc.data().first) {
                data.push({ id: doc.id, text: doc.data().first });
            }
        });
        setData(data);
    };
    useEffect(() => {
        fetchData();
    }, []);

    const onClickAdd = async () => {
        await addDoc(collection(fireStoreDb, "item"), {
            p_name: p_name,
            p_image: p_image,
            price: price,
        });
        fetchData();
        setNewName("");
        setNewImage("");
        setNewPrice("");
    };




    return (
        <div>
            <h1>Add product</h1>
            <form>
                <div className="mb-3">
                    <label className="form-label">Product Name</label>
                    <input type="text" className="form-control w-25" value={p_name}
                        onChange={(e) => setNewName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Product Image</label>
                    <input type="text" className="form-control w-25" value={p_image}
                        onChange={(e) => setNewImage(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Product Price</label>
                    <input type="number" className="form-control w-25" value={price}
                        onChange={(e) => setNewPrice(e.target.value)} />
                </div>
                <button className="btn btn-primary" onClick={() => { onClickAdd(); }}>Add</button>
            </form>

        </div>
    )
}

export default Test