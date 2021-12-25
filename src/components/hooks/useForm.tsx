import { ChangeEvent, useState } from "react";

//export function useForm<T> (initalState: T){
export const useForm = <T extends Object >(initState: T) => {

    const [form, setForm] = useState(initState);

    const handleChange = ({target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;

        setForm({
            ...form,
            [ name ] : value
        })
    }

    // con "...form" se puede mandar todo sin necesidad de desestructurar

    return {
        form,
        handleChange,
        ...form
    }

}
