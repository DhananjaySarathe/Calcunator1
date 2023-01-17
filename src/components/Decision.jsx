
function Decision(props)
{
let arr=[" Move [sum of two dice] "," Move [product on both dice and divide by 2,3 or 5]", " Move [divide big No. by smaller if not possible move by 1] ", "If you were already in an even place move [sum of both multiply by 2] Else NO MOVEMENT", " If you were already in odd place move [difference of both multiply by 2] Else NO MOVEMENT "," Move [Difference of both number]"];

    return <div>
        <h1>{arr[props.deciNo -1]}</h1>
    </div>
}

export default Decision;