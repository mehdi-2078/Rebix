import {toast, ToastContainer} from "react-toastify";
import {useDispatch} from "react-redux";
import {deleteTodo, editTodo} from "../../redux/reducers/todos/todoThunk.js";
import {useState} from "react";

export const TodoCard = (props) => {
    const {title, description, isDone, id} = props;
    const dispatch = useDispatch()

    const [titleState, setTitleState] = useState(title);
    const [descriptionState, setDescriptionState] = useState(description);
    const handleDelete = (id) => {
        dispatch(deleteTodo(id))
            .unwrap()
            .then(r => {
                toast.success('با موفقیت حذف شد');
                window.location.reload();
            })
            .catch(err => {
                console.log({err})
            })
    }
    const handleEdit = (id) => {
        dispatch(editTodo({id, title: titleState, description: descriptionState})).then(() => {
            toast.success('با موفقیت ویرایش شد');
        })
    }
    const handleDone = (id) => {
        dispatch(editTodo({isDone: true, id}))
            .unwrap()
            .then(r => {
                toast.success('با موفقیت انجام شد');
            })
            .catch(err => {
                console.log({err})
            })
    }


    return (
        <>
            <div className="flex flex-col my-4 rounded-2xl bg-black/20 dark:bg-white/20 px-4 py-4">
                <input onChange={(e) => setTitleState(e.target.value)}
                       className="text-xl placeholder:text-black placeholder:dark:text-white bg-transparent"
                       placeholder={title}/>
                {/*<p className="text-sm mt-6 text-black/60 dark:text-white/40">*/}
                {/*    {description}*/}
                {/*</p>*/}
                <input onChange={(e) => setDescriptionState(e.target.value)} placeholder={description}
                       className="text-lg mt-6 bg-transparent placeholder:text-black/80 placeholder:dark:text-white/80"/>
                <div className="flex">
                    <button onClick={() => handleDelete(id)}
                            className="mt-8 rounded-lg hover:bg-red-700 w-fit bg-red-600 flex mx-auto px-1 lg:px-4 py-2">حذف
                    </button>
                    <button onClick={() => handleEdit(id)}
                            className="mt-8 rounded-lg hover:bg-yellow-700 w-fit bg-yellow-600 flex mx-auto px-1 lg:px-4 py-2">ثبت
                        تغیرات
                    </button>

                    {!isDone && (
                        <button onClick={() => handleDone(id)}
                                className="mt-8 rounded-lg hover:bg-green-700 w-fit bg-green-600 flex mx-auto px-1 lg:px-4 py-2">انجام
                            شد
                        </button>
                    )}
                </div>
                <ToastContainer/>
            </div>

        </>
    );
};
