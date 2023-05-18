import {Field, Form, Formik} from "formik";
import {PanelLayout} from "../../index.js";
import * as Yup from "yup";
import {toast, ToastContainer,} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useDispatch} from "react-redux";
import {makeTodo} from "../../../redux/reducers/todos/todoThunk.js";

export const MakeTodo = () => {
    const todoFormSchema = Yup.object().shape({
        title: Yup.string()
            .required("این فیلد الزامی است"),
        description: Yup.string()
            .required("این فیلد الزامی است"),
    });

    const dispatch = useDispatch();

    const handleTodo = (values, resetForm) => {
        dispatch(makeTodo(values))
            .unwrap()
            .then((response) => {
                resetForm();
                toast.success('با موفقیت ساخته شد');
            })
            .catch((err) => {
                console.log({err});
                toast.error(err || 'error');
            })
    };

    return (
        <>
            <PanelLayout>
                <div className="flex w-[80%] md:w-[60%] mx-auto rounded-xl bg-black/40 dark:bg-black/20 px-8 py-6 mt-16 flex-col">
                    <div className="text-center text-2xl font-semibold bg-black/5 dark:bg-white/5 py-4">
                        افزودن todo جدید
                    </div>
                    <Formik
                        initialValues={{
                            title: '',
                            description: '',
                        }}
                        validationSchema={todoFormSchema}
                        onSubmit={(values, {resetForm}) => {
                            handleTodo(values, resetForm);
                        }}
                    >
                        {({errors, handleSubmit, touched}) => (
                            <Form onSubmit={handleSubmit}>
                                <div className="mb-6 mt-16 flex flex-col">
                                    <Field
                                        name="title"
                                        placeholder={'عنوان todo خود را وارد کنید...'}
                                        id="title"
                                        className="w-full text-white outline-0 placeholder:text-sm text-black/90 rounded border-0
                                    border-b-2 bg-transparent px-3 py-2"
                                    />
                                    {errors.title && touched.title ? (
                                        <div className="text-red-500 text-sm  mt-2 font-[500]">
                                            {errors.title}
                                        </div>
                                    ) : null}
                                </div>
                                <div className="mb-6 mt-16 flex flex-col">
                                    <Field
                                        name="description"
                                        placeholder={'توضیحات todo خود را وارد کنید...'}
                                        id="description"
                                        className="w-full text-white outline-0 placeholder:text-sm text-black/90 rounded border-0
                                    border-b-2 bg-transparent px-3 py-2"/>
                                    {errors.description && touched.description ? (
                                        <div className="text-red-500 text-sm mt-2 font-[500]">
                                            {errors.description}
                                        </div>
                                    ) : null}
                                </div>
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className=" px-8 mt-10  rounded bg-blue-500 hover:bg-blue-700 py-3">
                                        ثبت
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                    <ToastContainer/>
                </div>
            </PanelLayout>
        </>
    );
};
