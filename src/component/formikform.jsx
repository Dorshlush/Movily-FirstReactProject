import { Formik,useFormik } from 'formik'


const FormikForm = (props) => {
const {onsubmitMaster}=props;
    function onSubmit(values,actions){
        onsubmitMaster(values)
        actions.resetForm();
    }
    const Formik = useFormik({
        initialValues: {
            id: "",
            name: "",
            rating: "",
            genre: ""
        },
        onSubmit
    });
    
    return (
        <div className='m-5'>
            <form onSubmit={Formik.handleSubmit} >
                <div>
                    <label className='form-labe'> Movie ID </label>
                    <input
                        className="form-control"
                        type="text"
                        name="id"
                        id="id"
                        placeholder="enter Movie Id "
                        value={Formik.values.id}
                        onChange={Formik.handleChange}
                    />
                </div>
                <div>
                    <label className='form-labe'> Movie name </label>
                    <input
                        className="form-control"
                        type="text"
                        name="name"
                        id="name"
                        placeholder="enter Movie Name "
                        value={Formik.values.name}
                        onChange={Formik.handleChange}
                    />
                </div>
                <div>
                    <label className='form-labe'> Rating(1-5) </label>
                    <input
                        className="form-control"
                        type="text"
                        name="rating"
                        id="rating"
                        placeholder="Rate between 1-5 "
                        value={Formik.values.rating}

                        onChange={Formik.handleChange}
                    />
                </div>
                <div>
                    <label className='form-labe'> Genre </label>
                    <input
                        className="form-control"
                        type="text"
                        name="genre"
                        id="genre"
                        placeholder="Comedy/Action/Horror/Fantasy/Drama "
                        value={Formik.values.genre}

                        onChange={Formik.handleChange}
                    />
                </div>

                <button on type="submit" className=' mt-3 btn btn-primary'
                     >ADD! </button>


            </form>
        </div>


    );
}

export default FormikForm;