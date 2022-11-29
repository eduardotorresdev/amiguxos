import { useState } from "react"
import api from '../api';
import { toast } from 'react-toastify';

export interface SorteioData {
    type: string,
    title: string,
    date: string,
    participants: string[]
}

export interface Sorteio {
    id: string;
    type: string,
    title: string,
    slug: string,
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

    const findById = async (id: string) => {
        try {
            setLoading(true);
            const response = await api.get(`sorteios/${id}`);

            return response.data;
        } catch (e) {
            console.log(e);
            toast.error("Ocorreu um erro ao consultar o seu sorteio, tente novamente mais tarde");
        } finally {
            setLoading(false);
        }
    }

    const findFromTo = async (id: string, name: string) => {
        try {
            setLoading(true);
            const response = await api.get(`sorteios/${id}/${name}`);

            return response.data;
        } catch (e) {
            console.log(e);
            toast.error("Ocorreu um erro ao consultar quem você tirou, tente novamente mais tarde");
        } finally {
            setLoading(false);
        }
    }

    return {
        create,
        findById,
        findFromTo,
        loading
    }
}