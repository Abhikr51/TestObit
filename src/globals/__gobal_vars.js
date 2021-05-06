export const pageVariants = {
    initial : {
        opacity: 0,
        x : "-100vw",
        scale : 0.8,
    },
    animate : {
        opacity: 1,
        x : "0",
        scale : 1,
    },
    out : {
        opacity: 0,
        x : "100vw",
        scale : 1.2,
    },
}
export const pageTransitions = {
    type : "tween",
    // type : "spring",
    // stiffness : "250",
    ease : "anticipate",
    duration : .5
}