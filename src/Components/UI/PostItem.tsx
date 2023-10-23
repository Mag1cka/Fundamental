import React from "react"
//@ts-ignore
import { MyButton } from "./MyButton.tsx"

type PostItemType = {
    id: number
    title: string
    body: string
}

export const PostItem = (props) => {
    return (
        <div className='post'>
            <div className='post__content'>
                <strong>{props.number}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className='post__btns'>
                <MyButton onClick={() => props.remove(props.post)}>
                    Удалить
                </MyButton>
            </div>
        </div>
    )
}
