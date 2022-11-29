import { useState } from "react"
import api from '../api';
import { toast } from 'react-toastify';

export interface SorteioData {
    title: string,
    date: string,
    participants: string[]
}

export const useSorteio = () => {
    const [loading, setLoading] = useState(false);

    const create = async (data: SorteioData) => {
        try {
            setLoading(true);
            const response = await api.post('sorteios', data);

            return response.data;
        } catch (e) {
            console.log(e);
            toast.error("Ocorreu um erro ao criar o seu sorteio, tente novamente mais tarde");
        } finally {
            setLoading(false);
        }
    }

    return {
        create,
        loading
    }
}