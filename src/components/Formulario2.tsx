import { useForm } from './hooks/useForm';

interface FormData {
    postal: string;
    ciudad: string
}

export const Formulario2 = () => {

    const { postal, ciudad ,handleChange , form} = useForm<FormData>({
        postal: 'ABC',
        ciudad: 'Ottawa',
    });

    return (
        <form autoComplete="off">
            <div className="mb-3">
                <label className="form-label">Email:</label>
                <input type="text"
                className="form-control"
                name="postal"
                onChange={ handleChange }
                value={ postal }
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Nombre:</label>
                <input type="text"
                className="form-control"
                name="ciudad"
                onChange={ (ev) => handleChange(ev) }
                value={ ciudad }
                // esto puede ser omitido ya que el argumento que se mandara es el mismo que recibe tiene el imput
                />
            </div>
            {/* con esto logro imprimir un objeto */}
            <pre>{ JSON.stringify(form) }</pre>
        </form>
    )
}
