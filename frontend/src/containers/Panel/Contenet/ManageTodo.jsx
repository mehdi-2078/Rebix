import {PanelLayout} from "../../index.js";
import {TodoCards} from "../../../components/Panel/TodoCards.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getTodos} from "../../../redux/reducers/todos/todoThunk.js";
import {useEffect} from "react";

export const ManageTodo = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTodos())
    }, [dispatch]);
    const {todos} = useSelector(state => state.todos);
    const done = todos?.filter(todo => todo.isDone === true)
    const pending = todos?.filter(todo => todo.isDone === false)

    return (
        <PanelLayout>
            <div className="flex">
                {todos && (
                    <>
                        <TodoCards data={pending} title="کار های پیش رو"/>
                        <TodoCards data={done} title="کار های انجام شده"/>
                    </>
                )}
            </div>
        </PanelLayout>

    );
};
