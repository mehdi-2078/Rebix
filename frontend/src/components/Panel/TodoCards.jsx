import {TodoCard} from "../index.js";


export const TodoCards = ({data, title}) => {
        return (
            <div className="flex w-[80%] mx-auto md:w-[60%] lg:w-[34%] rounded-xl bg-black/30 px-8 py-4 my-4 flex-col">
            <span className="text-lg text-yellow-400 mb-3 font-semibold">{title}</span>
                {data?.map((item) => (
                    <TodoCard
                        title={item.title}
                        description={item.description}
                        isDone={item.isDone}
                        id={item._id}
                        key={item._id}/>
                ))}
            </div>
        );
    }
;
