import {Link, useNavigate} from "react-router-dom";
import * as Yup from 'yup';
import {Field, Form, Formik} from 'formik';
import {toast, ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {registerUser} from "../../../redux/reducers/auth/registerThunk.js";
import {LoginUser} from "../../../redux/reducers/auth/loginThunk.js";
import {useDispatch} from "react-redux";


export const LoginContainer = () => {
    const navigate = useNavigate();


    const LoginFormSchema = Yup.object().shape({
        phone: Yup.string()
            .matches(/^(\+98?)?{?(0?9[0-9]{9}}?)$/, 'شماره تلفن نامعتبر است')
            .required("این فیلد الزامی است"),
        password: Yup.string()
            .required('لطفا رمز عبور خود را وارد کنید.')
            .min(4, 'رمز عبور باید بیش از 4 کاراکتر باشد'),
    });
    const dispatch = useDispatch();

    const handleLogIn = (values, resetForm) => {
        dispatch(LoginUser(values))
            .unwrap()
            .then((response) => {
                toast.success('ورود شما با موفقیت انجام شد');
                resetForm();
                navigate('/', {replace: true})
                window.location.reload();
            })
            .catch((err) => {
                console.log({err});
                toast.error(err || 'error');
            })
    };

    return (
        <div>
            <div
                className="flex h-screen flex-wrap items-center justify-center w-[94%] mx-auto lg:justify-between">
                <div className="my-12 w-[90%] mx-auto lg:ml-6 lg:w-5/12">
                    <Formik
                        initialValues={{
                            phone: '',
                            password: '',
                        }}
                        validationSchema={LoginFormSchema}
                        onSubmit={(values, {resetForm}) => {
                            handleLogIn(values, resetForm);
                        }}
                    >
                        {({errors, handleSubmit, touched}) => (
                            <Form onSubmit={handleSubmit}>
                                <div className="mb-6 flex flex-col">
                                    <span className="mb-2 text-sm">شماره موبایل</span>
                                    <Field
                                        name="phone"
                                        placeholder={'شماره موبایل خود را وارد کنید...'}
                                        id="phone"
                                        className="w-full placeholder:text-xs text-black/90 rounded border-0 bg-blue-50 px-3 py-2"
                                    />
                                    {errors.phone && touched.phone ? (
                                        <div className="text-red-500 text-sm  mt-2 font-[500]">
                                            {errors.phone}
                                        </div>
                                    ) : null}
                                </div>
                                <div className="mb-6 flex flex-col">
                                    <span className="mb-2 text-sm">رمز عبور </span>
                                    <Field
                                        name="password"
                                        placeholder={'رمز عبور خود را وارد کنید...'}
                                        id="password"
                                        className="w-full placeholder:text-xs text-black/90 rounded border-0 bg-blue-50 px-3 py-2"
                                    />
                                    {errors.password && touched.password ? (
                                        <div className="text-red-500 text-sm mt-2 font-[500]">
                                            {errors.password}
                                        </div>
                                    ) : null}
                                </div>
                                <button
                                    type="submit"
                                    className="inline-block w-full rounded bg-blue-500 hover:bg-blue-700 py-3">
                                    ورود
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
                <div className="hidden md:block  md:w-8/12 lg:w-6/12">
                    <img
                        src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                        className="w-full"
                        alt="Phone image"/>
                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

