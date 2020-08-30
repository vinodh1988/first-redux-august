
export const messageAction = () =>{
let messages = [" Javascript is not strictly typed",
                "Redux is not only for React",
                "Angular is by Google",
                "Angular 1.x talks about MVC",
                "Redux manages State" ]
    return {
        type: "MESSAGE_ACTION",
        data: messages[Math.round(Math.random()*4)]
    }
}