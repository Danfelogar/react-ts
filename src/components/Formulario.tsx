import { useForm } from './hooks/useForm';

interface FormData {
    email: string;
    nombre: string;
    edad: number
}

export const Formulario = () => {

    const { form ,handleChange } = useForm<FormData>({
        email: 'dan@hotmail.com',
        nombre: 'daniel polo',
        edad: 35
    });

    const {email, nombre, edad} = form;
    // const [formulario, setFormulario] = useState({
    //     email: '',
    //     nombre: ''
    // });

    // const handleChange = ({target }: ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = target;

    //     setFormulario({
    //         ...formulario,
    //         [ name ] : value
    //     })
    // }

    return (
        <form autoComplete="off">
            <div className="mb-3">
                <label className="form-label">Email:</label>
                <input type="email"
                className="form-control"
                name="email"
                onChange={ handleChange }
                value={ email }
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Nombre:</label>
                <input type="text"
                className="form-control"
                name="nombre"
                onChange={ (ev) => handleChange(ev) }
                value={ nombre }
                // esto puede ser omitido ya que el argumento que se mandara es el mismo que recibe tiene el imput
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Nombre:</label>
                <input type="number"
                className="form-control"
                name="edad"
                onChange={ (ev) => handleChange(ev) }
                value={ edad }
                // esto puede ser omitido ya que el argumento que se mandara es el mismo que recibe tiene el imput
                />
            </div>
            {/* con esto logro imprimir un objeto */}
            <pre>{ JSON.stringify(form) }</pre>
        </form>
    )
}
